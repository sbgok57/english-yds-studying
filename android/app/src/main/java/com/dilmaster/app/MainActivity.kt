package com.dilmaster.app

import android.annotation.SuppressLint
import android.graphics.Bitmap
import android.net.http.SslError
import android.os.Bundle
import android.view.View
import android.webkit.*
import android.widget.Button
import android.widget.LinearLayout
import android.widget.ProgressBar
import android.widget.Toast
import androidx.activity.OnBackPressedCallback
import androidx.appcompat.app.AppCompatActivity
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout

class MainActivity : AppCompatActivity() {

    private lateinit var webView: WebView
    private lateinit var progressBar: ProgressBar
    private lateinit var swipeRefresh: SwipeRefreshLayout
    private lateinit var errorLayout: LinearLayout
    private lateinit var btnRetry: Button

    private val targetUrl = "https://dil-master.vercel.app"
    private var backPressedTime: Long = 0

    @SuppressLint("SetJavaScriptEnabled")
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById(R.id.webView)
        progressBar = findViewById(R.id.progressBar)
        swipeRefresh = findViewById(R.id.swipeRefresh)
        errorLayout = findViewById(R.id.errorLayout)
        btnRetry = findViewById(R.id.btnRetry)

        configureWebView()
        setupBackNavigation()

        btnRetry.setOnClickListener {
            errorLayout.visibility = View.GONE
            webView.visibility = View.VISIBLE
            webView.loadUrl(targetUrl)
        }

        swipeRefresh.setOnRefreshListener {
            webView.reload()
        }

        // İlk yükleme
        webView.loadUrl(targetUrl)
    }

    @SuppressLint("SetJavaScriptEnabled")
    private fun configureWebView() {
        val settings = webView.settings
        
        // 1. JavaScript ve Modern Web Standartları
        settings.javaScriptEnabled = true
        settings.domStorageEnabled = true
        settings.databaseEnabled = true
        settings.allowFileAccess = true
        settings.allowContentAccess = true

        // 2. GÖZ YORGUNLUĞUNU ÖNLEYEN BÜYÜK YAZI MOTORU (%120 Büyütme)
        settings.textZoom = 120
        settings.minimumFontSize = 15
        settings.defaultFontSize = 18

        // 3. Görünüm ve Önbellek Optimizasyonu
        settings.useWideViewPort = true
        settings.loadWithOverviewMode = true
        settings.cacheMode = WebSettings.LOAD_DEFAULT

        // Çerezleri kalıcı kıl (Giriş yaptıktan sonra oturum düşmesin)
        CookieManager.getInstance().apply {
            setAcceptCookie(true)
            setAcceptThirdPartyCookies(webView, true)
        }

        // WebChromeClient: İlerleme Çubuğu Yönetimi
        webView.webChromeClient = object : WebChromeClient() {
            override fun onProgressChanged(view: WebView?, newProgress: Int) {
                if (newProgress < 100) {
                    progressBar.visibility = View.VISIBLE
                    progressBar.progress = newProgress
                } else {
                    progressBar.visibility = View.GONE
                    swipeRefresh.isRefreshing = false
                }
            }
        }

        // WebViewClient: CHROME TARAYICIYA ÇIKMAYI ENGELLEYEN VE 404'Ü YUTAN ÖZEL MOTOR
        webView.webViewClient = object : WebViewClient() {
            
            // Tüm linkleri uygulamanın içinde tut, Chrome'u asla açma
            override fun shouldOverrideUrlLoading(view: WebView?, request: WebResourceRequest?): Boolean {
                val url = request?.url?.toString() ?: return false
                
                // dil-master.vercel.app içindeki tüm alt sayfalar (giris, yds, yokdil vb.) uygulama içinde kalır
                if (url.contains("dil-master.vercel.app")) {
                    view?.loadUrl(url)
                    return true
                }
                
                // Harici linkler (örneğin WhatsApp veya harici kaynaklar) için de içeride devam et
                view?.loadUrl(url)
                return true
            }

            override fun onPageStarted(view: WebView?, url: String?, favicon: Bitmap?) {
                super.onPageStarted(view, url, favicon)
                errorLayout.visibility = View.GONE
                webView.visibility = View.VISIBLE
            }

            override fun onPageFinished(view: WebView?, url: String?) {
                super.onPageFinished(view, url)
                swipeRefresh.isRefreshing = false

                // Web sitesindeki yazıları büyüten ve göz yorgunluğunu alan ek JS enjeksiyonu
                val readabilityScript = """
                    (function() {
                        var style = document.createElement('style');
                        style.innerHTML = 'p, span, div, a, li { font-size: 1.05rem !important; line-height: 1.7 !important; } .reading-text, .passage { font-size: 1.2rem !important; }';
                        document.head.appendChild(style);
                    })();
                """.trimIndent()
                view?.evaluateJavascript(readabilityScript, null)
            }

            // Ağ veya Sunucu Hatası Yakalama (404, DNS, Bağlantı Hatası)
            override fun onReceivedError(view: WebView?, request: WebResourceRequest?, error: WebResourceError?) {
                if (request?.isForMainFrame == true) {
                    webView.visibility = View.GONE
                    errorLayout.visibility = View.VISIBLE
                }
            }

            override fun onReceivedHttpError(view: WebView?, request: WebResourceRequest?, errorResponse: WebResourceResponse?) {
                // Vercel 404 döndürürse kullanıcıya çirkin hata gösterme
                if (request?.isForMainFrame == true && (errorResponse?.statusCode == 404 || errorResponse?.statusCode == 500)) {
                    webView.visibility = View.GONE
                    errorLayout.visibility = View.VISIBLE
                }
            }

            override fun onReceivedSslError(view: WebView?, handler: SslErrorHandler?, error: SslError?) {
                // Güvenli bağlantıyı devam ettir
                handler?.proceed()
            }
        }
    }

    private fun setupBackNavigation() {
        onBackPressedDispatcher.addCallback(this, object : OnBackPressedCallback(true) {
            override fun handleOnBackPressed() {
                if (webView.canGoBack()) {
                    webView.goBack()
                } else {
                    if (System.currentTimeMillis() - backPressedTime < 2000) {
                        finish()
                    } else {
                        backPressedTime = System.currentTimeMillis()
                        Toast.makeText(this@MainActivity, "Çıkmak için tekrar basın", Toast.LENGTH_SHORT).show()
                    }
                }
            }
        })
    }
}
