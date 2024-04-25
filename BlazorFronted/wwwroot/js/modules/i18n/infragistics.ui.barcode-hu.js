/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 23.2.50
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.hu=$.ig.locale.hu||{};$.ig.Barcode=$.ig.Barcode||{};$.ig.locale.hu.Barcode={aILength:"Az AI-nek legalább 2 számjegyből kell állnia.",badFormedUCCValue:"Az UCC vonalkód Data tulajdonság értéke nincs megfelelően megformázva. A formázásnak (AI)GTIN alakúnak kell lennie.",code39_NonNumericError:"A(z) '{0}' karakter érvénytelen a CODE39 Data tulajdonság értékének. Érvényes értékek: {1}",countryError:"Hiba történt a Country tulajdonságérték kód konvertálásakor. Numerikus értéknek kell lennie.",emptyValueMsg:"A Data tulajdonság értéke nincs megadva.",encodingError:"Hiba a konvertálás során. Az érvényes tulajdonságértékeket a dokumentációban találja meg.",errorMessageText:"Érvénytelen érték! Az vonalkódhoz tartozó érvényes Data tulajdonságérték-struktúrákat a dokumentációban találja meg.",gS1ExMaxAlphanumNumber:"A GS1 DataBar Expanded család legfeljebb 41 alfanumerikus karaktert tud kódolni.",gS1ExMaxNumericNumber:"A GS1 DataBar kibővített család legfeljebb 74 numerikus karaktert tud kódolni.",gS1Length:"A GS1 DataBar Data tulajdonságérték a GTIN - 8, 12, 13, 14 esetében használható, és a hossza 7, 11, 12 vagy 13 lehet. Az utolsó számjegy egy ellenőrző számjegynek van fenntartva.",gS1LimitedFirstChar:"A GS1 DataBar Limited vonalkód első számjegyének 0-nak vagy 1-nek kell lennie. A GTIN-14 adatoknak 1-nél nagyobb Indicator értékkel történő kódolásakor az Omnidirectional, Stacked, Stacked Omnidirectional vagy Truncated típusú vonalkódot kell használni.",i25Length:"Az Interleaved2of5 vonalkódnak páros számú számjeggyel kell rendelkeznie. Tegyen egy 0-t az elejére, ha a számjegyek száma páratlan.",intelligentMailLength:"Az Intelligent Mail vonalkód Data tulajdonságértékének 20, 25, 29 vagy 31 karakter hosszúságúnak kell lennie, ami egy 20 számjegyből álló követési kódból (2 a vonalkód-azonosítónak, 3 a szolgáltatástípus-azonosítónak, 6 vagy 9 a küldő azonosítójához és 9 vagy 6 a sorszámhoz) és egy 0, 5, 9 vagy 11 karakterből álló irányítószám-szimbólumból tevődik össze.",intelligentMailSecondDigit:"A második számjegynek 0 és 4 között kell lennie.",invalidAI:"Érvénytelen alkalmazásazonosító elem-karakterláncok. Győződjön meg arról, hogy a Data tulajdonságértékben szereplő AI karakterlánc jól formázott.",invalidCharacter:"A(z) '{0}' karakter érvénytelen az aktuális vonalkódtípushoz. Érvényes értékek: {1}",invalidDimension:"A Stretch, BarsFillMode és XDimension tulajdonságértékek helytelen kombinációja miatt a vonalkód mérete nem határozható meg.",invalidHeight:"A vonalkódrács sorainak száma ({0}) nem fér el ebben a magasságban ({1} pixel).",invalidLength:"A vonalkód Data tulajdonságértékének {0} számjegyből kell állnia.",invalidPostalCode:"Érvénytelen PostalCode érték - A 2-es mód legfeljebb 9 számjegyből álló irányítószámot (amerikai irányítószám), míg a 3-as mód legfeljebb 6 karakteres alfanumerikus kódot tud kódolni.",invalidPropertyValue:"A(z) {0} tulajdonságértéknek {1} és {2} között kell lennie.",invalidVersion:"A SizeVersion tulajdonságérték száma nem generál elegendő cellát az adatok kódolásához az aktuális kódolási mód és hibajavítási szint mellett.",invalidWidth:"A vonalkódrács oszlopainak száma ({0}) nem fér el ebben a szélességben ({1} pixel). Ellenőrizze az XDimension és/vagy a WidthToHeightRatio tulajdonságértékeket.",invalidXDimensionValue:"Az XDimension tulajdonságértéknek a jelenlegi vonalkódtípus esetében {0} és {1} között kell lennie.",maxLength:"A szöveg hossza ({0} karakter) meghaladja az aktuális vonalkódtípus maximálisan kódolható értékét. Legfeljebb {1} karakter kódolására van lehetőség.",notSupportedEncoding:"A(z) {0} {1} alatti kódolás nem támogatott.",pDF417InvalidRowsColumnsCombination:"A kódszavak (adat és hibajavítás) száma több, mint amennyit egy {0}x{1} méretű mátrix szimbólumába kódolni lehet.",primaryMessageError:"Nem lehet kinyerni az elsődleges üzenetet a Data tulajdonság értékéből. A szerkezetet lásd a dokumentációban.",serviceClassError:"Hiba történt a szolgáltatási osztály átalakításakor. Numerikus értéknek kell lennie.",smallSize:"A rács nem illeszthető bele az adott méretbe ({0}, {1}) a megadott Stretch beállításokkal.",unencodableCharacter:"A(z) '{0}' karakter nem kódolható.",uPCEFirstDigit:"Az UPCE első számjegye a specifikáció szerint mindig nulla.",warningString:"Vonalkód figyelmeztetés: ",wrongCompactionMode:"A Data tulajdonság értéke nem tömöríthető {0} módban.",notLoadedEncoding:"A(z) {0} kódolás nincs betöltve."};$.ig.Barcode.locale=$.ig.Barcode.locale||$.ig.locale.hu.Barcode;return $.ig.locale.hu.Barcode});