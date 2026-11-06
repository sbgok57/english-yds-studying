# Narakeet seslerini Dil Master'da etkinleştirme

Dil Master, Narakeet API anahtarını yalnızca sunucu tarafında `NARAKEET_API_KEY` adıyla okur. Anahtar olmadan Narakeet'e istek gönderilmez. Sağlık kontrolü yalnızca ses kataloğunu okur; örnek ses üretmez.

## Vercel Production ayarı

1. Narakeet hesabında API Keys bölümünden API erişim anahtarı oluşturun. Narakeet dokümantasyonuna göre API anahtarı ticari hesaplar içindir; ücretsiz hesaplarda API anahtarı bulunmaz.
2. Vercel'de `dil-master.vercel.app` projesini açın.
3. **Settings → Environment Variables → Add New** yolunu izleyin.
4. **Key** alanına `NARAKEET_API_KEY`, **Value** alanına anahtarı girin ve ortam olarak **Production** seçin. Gizli anahtarı bu depoya, istemci koduna veya sohbet mesajına yazmayın.
5. Değişkeni kaydettikten sonra Production dağıtımını yeniden oluşturun. Dağıtım tamamlanınca `/api/tts/health` yanıtında Narakeet katalog ve profil durumları görünmelidir.

## Uygulama eşleşmeleri

İngiliz: en-GB kadın Beatrice / erkek Nelson; en-US kadın Jessica / erkek Matt; en-AU kadın Gail / erkek Graham.

Türkçe anlatım: kadın Sibel / erkek Murat.

Uygulama, ses üretmeden önce Narakeet'in API ses kataloğunda eşleşen ses adını ve dil kodunu kontrol eder. Eşleşme yoksa yanlış aksan veya cinsiyet seçmez. 1 KB üzerindeki metinler uzun içerik API'sini kullanır; kısa metinler doğrudan MP3 akışı olarak alınır.

Narakeet sesleri yapay zekâ ile sentezlenir; gerçek insan kaydı değildir. API kullanımı Narakeet hesabındaki kapasite/kullanım planına tabidir. Her kullanıcı oynatımı sağlayıcıda ses üretimi başlatabilir.
