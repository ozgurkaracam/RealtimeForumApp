##  Laravel ve Vue 2 ile kodlanmış tam fonksiyonlu, gerçek zamanlı soru cevap uygulaması (devam ediyor)

##### Kullanılan Teknolojiler

- Laravel 8 (sanctum)
- Vue 2 (vuetify,vuex)

------------
_Proje durumu: Question,reply,likes ve diğer endpointler sorunsuz olarak çalışıyor. Api tamam. Authentication sorunsuz. Question,reply create ve categories'in bütün crud fonksiyonları çalışıyor. Question ve reply like işlemleri sorunsuz._

------------

##### Yapılacaklar (Todo List)
~~1. Laravel'de gerekli policylerle birlikte authorization yapılacak.~~
2. Question ve Reply componentlerine authorization'a göre delete ve update işlevleri eklenecek (Question eklendi, reply kaldı)
3. localstorage ile ilgili ufak bir problem var, sayfa yenilendiğinde token silindiyse bug'a düşüyor.
4. Pusher entegrasyonu yapılıp question,reply crud'lar gerçek zamanlı olacak.


------------




###### Kurulum için gerekli adımlar

- `git clone https://github.com/ozgurkaracam/RealtimeQuestionApp.git`
- `cd RealtimeQuestionApp`
- `cp .env.example .env`
- `Gerekli env ayarları`
- `php artisan migrate --seed`
- `npm install`

------------


###### Projeyi ayağı kaldırmak için
- `php artisan serve`
- `npm run watch`


------------



