import SwiftUI
import WebKit

// MARK: - 1. Ana Uygulama Arayüzü
struct ContentView: View {
    @State private var isLoading = false
    @State private var hasError = false
    @State private var reloadTrigger = false
    
    private let targetURL = URL(string: "https://dil-master.vercel.app")!

    var body: some View {
        ZStack {
            Color(hex: "#F8FAFC").ignoresSafeArea()

            // Web Motoru
            DilMasterWebView(
                url: targetURL,
                isLoading: $isLoading,
                hasError: $hasError,
                reloadTrigger: $reloadTrigger
            )
            .ignoresSafeArea(.keyboard) // Klavye açıldığında sayfa düzenini korur
            .opacity(hasError ? 0 : 1)

            // Yükleme Göstergesi (Üst İlerleme Çizgisi)
            if isLoading && !hasError {
                VStack {
                    ProgressView()
                        .progressViewStyle(CircularProgressViewStyle(tint: Color(hex: "#0284C7")))
                        .scaleEffect(1.2)
                        .padding(.top, 12)
                    Spacer()
                }
            }

            // 404 veya Bağlantı Hatası Durumunda Görünen Özel iOS Ekranı
            if hasError {
                VStack(spacing: 16) {
                    Text("🚀 DİL MASTER")
                        .font(.system(size: 28, weight: .bold))
                        .foregroundColor(Color(hex: "#0284C7"))

                    Text("Sayfa yüklenirken bir sorun oluştu.\nLütfen internet bağlantınızı kontrol edin.")
                        .font(.system(size: 16))
                        .multilineTextAlignment(.center)
                        .foregroundColor(Color(hex: "#475569"))
                        .padding(.horizontal, 32)

                    Button(action: {
                        hasError = false
                        reloadTrigger.toggle()
                    }) {
                        Text("Yeniden Dene")
                            .font(.system(size: 16, weight: .semibold))
                            .foregroundColor(.white)
                            .padding(.horizontal, 28)
                            .padding(.vertical, 14)
                            .background(Color(hex: "#0284C7"))
                            .cornerRadius(12)
                    }
                    .padding(.top, 8)
                }
            }
        }
    }
}

// MARK: - 2. Safari'yi Engelleyen ve Yazıları Büyüten WKWebView Motoru
struct DilMasterWebView: UIViewRepresentable {
    let url: URL
    @Binding var isLoading: Bool
    @Binding var hasError: Bool
    @Binding var reloadTrigger: Bool

    func makeCoordinator() -> Coordinator {
        Coordinator(self)
    }

    func makeUIView(context: Context) -> WKWebView {
        // Oturum ve Çerezlerin Kalıcı Olması (Giriş yapıldığında çıkış yapmasın)
        let config = WKWebViewConfiguration()
        config.websiteDataStore = WKWebsiteDataStore.default()
        
        // Göz Yorgunluğunu Önleyen Büyük Yazı ve Satır Aralığı Enjeksiyonu
        let cssString = """
            p, span, div, a, li { font-size: 18px !important; line-height: 1.75 !important; }
            .reading-text, .passage, .soru-metni { font-size: 20px !important; line-height: 1.8 !important; }
            h1 { font-size: 26px !important; }
            h2 { font-size: 22px !important; }
            input, select, textarea, button { font-size: 17px !important; }
        """
        let jsString = "var style = document.createElement('style'); style.innerHTML = '\(cssString)'; document.head.appendChild(style);"
        let userScript = WKUserScript(source: jsString, injectionTime: .atDocumentEnd, forMainFrameOnly: true)
        config.userContentController.addUserScript(userScript)

        let webView = WKWebView(frame: .zero, configuration: config)
        webView.navigationDelegate = context.coordinator
        
        // iOS Doğal Özellikleri: Parmakla geri/ileri kaydırma jesti
        webView.allowsBackForwardNavigationGestures = true
        webView.scrollView.bounces = true

        // Aşağı çekip yenileme (Pull to Refresh)
        let refreshControl = UIRefreshControl()
        refreshControl.tintColor = UIColor(Color(hex: "#0284C7"))
        refreshControl.addTarget(context.coordinator, action: #selector(Coordinator.handleRefresh(_:)), for: .valueChanged)
        webView.scrollView.refreshControl = refreshControl

        context.coordinator.webView = webView

        let request = URLRequest(url: url, cachePolicy: .useProtocolCachePolicy, timeoutInterval: 20)
        webView.load(request)

        return webView
    }

    func updateUIView(_ uiView: WKWebView, context: Context) {
        if reloadTrigger != context.coordinator.lastReloadTrigger {
            context.coordinator.lastReloadTrigger = reloadTrigger
            uiView.load(URLRequest(url: url))
        }
    }

    // MARK: - 3. Navigasyon ve Safari Kilidi
    class Coordinator: NSObject, WKNavigationDelegate {
        var parent: DilMasterWebView
        weak var webView: WKWebView?
        var lastReloadTrigger: Bool = false

        init(_ parent: DilMasterWebView) {
            self.parent = parent
        }

        @objc func handleRefresh(_ sender: UIRefreshControl) {
            webView?.reload()
        }

        // Safari'ye çıkışı tamamen engeller; dil-master adreslerini içeride tutar
        func webView(_ webView: WKWebView, decidePolicyFor navigationAction: WKNavigationAction, decisionHandler: @escaping (WKNavigationActionPolicy) -> Void) {
            guard let url = navigationAction.request.url else {
                decisionHandler(.cancel)
                return
            }

            let host = url.host ?? ""
            
            // Site içindeki tüm sayfalarda uygulama içinde kal
            if host.contains("dil-master.vercel.app") || host.isEmpty {
                decisionHandler(.allow)
            } else if ["tel", "mailto", "whatsapp"].contains(url.scheme) {
                // Telefon veya WhatsApp linki varsa ilgili sisteme devret
                UIApplication.shared.open(url)
                decisionHandler(.cancel)
            } else {
                // Diğer harici linkleri de uygulama içinde aç
                decisionHandler(.allow)
            }
        }

        func webView(_ webView: WKWebView, didStartProvisionalNavigation navigation: WKNavigation!) {
            DispatchQueue.main.async {
                self.parent.isLoading = true
                self.parent.hasError = false
            }
        }

        func webView(_ webView: WKWebView, didFinish navigation: WKNavigation!) {
            DispatchQueue.main.async {
                self.parent.isLoading = false
                self.webView?.scrollView.refreshControl?.endRefreshing()
            }
        }

        // 404, Ağ Kesintisi veya Sunucu Hatasını Yakalar
        func webView(_ webView: WKWebView, didFailProvisionalNavigation navigation: WKNavigation!, withError error: Error) {
            DispatchQueue.main.async {
                self.parent.isLoading = false
                self.parent.hasError = true
                self.webView?.scrollView.refreshControl?.endRefreshing()
            }
        }

        func webView(_ webView: WKWebView, didFail navigation: WKNavigation!, withError error: Error) {
            DispatchQueue.main.async {
                self.parent.isLoading = false
                self.parent.hasError = true
                self.webView?.scrollView.refreshControl?.endRefreshing()
            }
        }
    }
}

// MARK: - 4. Renk Yardımcısı (Hex Kodları İçin)
extension Color {
    init(hex: String) {
        let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
        var int: UInt64 = 0
        Scanner(string: hex).scanHexInt64(&int)
        let a, r, g, b: UInt64
        switch hex.count {
        case 3:
            (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
        case 6:
            (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
        case 8:
            (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
        default:
            (a, r, g, b) = (1, 1, 1, 0)
        }
        self.init(
            .sRGB,
            red: Double(r) / 255,
            green: Double(g) / 255,
            blue: Double(b) / 255,
            opacity: Double(a) / 255
        )
    }
}
