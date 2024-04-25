/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 23.2.50
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.tr=$.ig.locale.tr||{};$.ig.Barcode=$.ig.Barcode||{};$.ig.locale.tr.Barcode={aILength:"AI en az 2 basamaklı olmalıdır.",badFormedUCCValue:"UCC barkodunun Data özelliği değeri iyi biçimlendirilmemiş. (AI) GTIN gibi görünmelidir.",code39_NonNumericError:"CODE39 Data özelliği değeri için '{0}' karakteri geçersiz. Geçerli olanlar: {1}",countryError:"Ülke özelliği değeri kodu dönüştürülürken hata oluştu. Sayısal bir değer olmalıdır.",emptyValueMsg:"Veri özelliği değeri boş.",encodingError:"Dönüşümde hata. Geçerli özellik değerleri için belgelere bakın.",errorMessageText:"Geçersiz değer! Geçerli barkod Veri özelliği değeri yapısı için belgelere başvurun.",gS1ExMaxAlphanumNumber:"GS1 DataBar Expanded ailesi 41 alfanümerik karaktere kadar kodlayabilir.",gS1ExMaxNumericNumber:"GS1 DataBar Expanded ailesi 74'e kadar sayısal karakteri kodlayabilir.",gS1Length:"GS1 DataBar Data özelliği değeri GTIN - 8, 12, 13, 14 için kullanılır ve uzunluğu 7, 11, 12 veya 13 olmalıdır. Son basamak bir sağlama toplamı için ayrılmıştır.",gS1LimitedFirstChar:"GS1 DataBar Limited barkodunun ilk hanesinde 0 veya 1 olmalıdır. Gösterge değeri 1'den büyük olan GTIN-14 verilerini kodlarken, Çok Yönlü, Yığınlanmış, Yığınlanmış Çok Yönlü veya Kesilmiş barkod türü kullanılmalıdır.",i25Length:"Interleaved2of5 barkodunda çift sayıda basamak bulunmalıdır. Tek sayı iseler önüne 0 koyabilirsiniz.",intelligentMailLength:"Akıllı Posta barkod Verisi özellik değerinin uzunluğu 20, 25, 29 veya 31 karakter olmalıdır - 20 basamaklı izleme kodu (barkod tanımlayıcı için 2, hizmet türü tanımlayıcı için 3, posta gönderici tanımlayıcı için 6 veya 9 ve seri numarası için 9 veya 6) ) ve 0, 5, 9 veya 11 posta kodu sembolleri.",intelligentMailSecondDigit:"İkinci rakam 0-4 aralığında olmalıdır.",invalidAI:"Geçersiz Uygulama Tanımlayıcı öğe dizeleri. Lütfen Veri özelliği değerindeki AI dizesinin iyi biçimlendirildiğinden emin olun.",invalidCharacter:"Mevcut barkod türü için '{0}' karakteri geçersiz. Geçerli olanlar: {1}",invalidDimension:"Stretch, BarsFillMode ve XDimension özellik değerlerinin yanlış bir kombinasyonu nedeniyle barkod boyutu belirlenemiyor.",invalidHeight:"Bu sayıda barkod kılavuzu satırı ({0}) böyle bir yüksekliğe ({1} piksel) sığamaz.",invalidLength:"Barkod Verileri özelliği değerinde {0} basamak bulunmalıdır.",invalidPostalCode:"Geçersiz PostalCode değeri - Mod 2, 9 haneye kadar posta kodunu (ABD posta kodu) kodlarken, Mod 3 6 karaktere kadar alfa sayısal kodu kodlar.",invalidPropertyValue:"{0} özelliği değeri {1} - {2} aralığında olmalıdır.",invalidVersion:"SizeVersion uygunluk değeri numarası, verileri geçerli kodlama modu ve hata düzeltme düzeyi ile kodlamak için yeterli hücre oluşturmaz.",invalidWidth:"Bu sayıda barkod kılavuzu sütunu ({0}) böyle bir genişliğe ({1} piksel) sığamaz. XDimension veya/ve WidthToHeightRatio özellik değerlerini kontrol edin.",invalidXDimensionValue:"XDimension özellik değeri, mevcut barkod türü için {0} ile {1} aralığında olmalıdır.",maxLength:"Metnin uzunluğu {0}, geçerli barkod türü için kodlanabilir maksimum değeri aşıyor. Maksimum {1} karakteri kodlayabilir.",notSupportedEncoding:"{0} {1} altında karşılık gelen kodlama desteklenmiyor.",pDF417InvalidRowsColumnsCombination:"Kod sözcükleri (veri ve hata düzeltme), {0} x {1} matrisiyle sembol olarak kodlanabilecek olandan daha fazladır.",primaryMessageError:"Veri özelliği değerinden birincil mesaj çıkarılamaz. Yapısı için belgelere bakın.",serviceClassError:"Hizmet sınıfı dönüştürülürken hata oluştu. Sayısal bir değer olmalıdır.",smallSize:"Tanımlanmış Uzatma ayarlarıyla Boyut ({0}, {1}) içindeki kılavuza sığamaz.",unencodableCharacter:"'{0}' karakteri kodlanamaz.",uPCEFirstDigit:"İlk UPCE basamağı, spesifikasyona göre her zaman sıfır olacaktır.",warningString:"Barkod uyarısı: ",wrongCompactionMode:"Data özelliği değeri {0} moduyla sıkıştırılamaz.",notLoadedEncoding:"{0} kodlaması yüklenmedi."};$.ig.Barcode.locale=$.ig.Barcode.locale||$.ig.locale.tr.Barcode;return $.ig.locale.tr.Barcode});