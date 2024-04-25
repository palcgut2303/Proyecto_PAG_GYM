/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 23.2.50
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.nl=$.ig.locale.nl||{};$.ig.Barcode=$.ig.Barcode||{};$.ig.locale.nl.Barcode={aILength:"De AI moet minimaal 2 cijfers hebben.",badFormedUCCValue:"De waarde van de eigenschap Data van de UCC-streepjescode is niet goed gevormd. Het zou eruit moeten zien als (AI)GTIN.",code39_NonNumericError:"Het teken '{0}' is ongeldig voor de CODE39 Data property-waarde. De geldige zijn: {1}",countryError:"Fout bij het converteren van de waardecode van de eigenschap Land. Het moet een numerieke waarde zijn.",emptyValueMsg:"De waarde van de eigenschap Data is leeg.",encodingError:"Fout in de conversie. Raadpleeg de documentatie voor de geldige eigenschapswaarden.",errorMessageText:"Ongeldige waarde! Raadpleeg de documentatie voor de geldige waardestructuur van de eigenschap Streepjescode.",gS1ExMaxAlphanumNumber:"De uitgebreide reeks GS1 DataBar kan tot 41 alfanumerieke tekens coderen.",gS1ExMaxNumericNumber:"De uitgebreide reeks GS1 DataBar kan tot 74 numerieke tekens coderen.",gS1Length:"De eigenschapwaarde GS1 DataBar Data wordt gebruikt voor GTIN - 8, 12, 13, 14 en de lengte moet 7, 11, 12 of 13 zijn. Het laatste cijfer is gereserveerd voor een controlesom.",gS1LimitedFirstChar:"De GS1 DataBar Limited-streepjescode moet 0 of 1 in het eerste cijfer hebben. Bij het coderen van GTIN-14-gegevens met een Indicatorwaarde groter dan 1, moet Omnidirectioneel, Gestapeld, Gestapeld Omnidirectioneel of Afgekapt streepjescodetype worden gebruikt.",i25Length:"De Interleaved2of5-streepjescode moet een even aantal cijfers hebben. U kunt 0 ervoor plaatsen als ze een oneven getal zijn.",intelligentMailLength:"De lengte van de eigenschapswaarde van de Intelligent Mail-streepjescodegegevens moet 20, 25, 29 of 31 tekens zijn - 20-cijferige trackcode (2 voor streepjescode-identificatie, 3 voor diensttype-identificatie, 6 of 9 voor mailer-identificatie en 9 of 6 voor serienummer ) en 0, 5, 9 of 11 postcodesymbolen.",intelligentMailSecondDigit:"Het tweede cijfer moet tussen 0-4 liggen.",invalidAI:"Ongeldige tekenreeksen van Application Identifier-element. Zorg er a.u.b. voor dat de AI-reeks in de waarde van de eigenschap Data goed is gevormd.",invalidCharacter:"Het teken '{0}' is ongeldig voor het huidige type streepjescode. De geldige zijn: {1}",invalidDimension:"De dimensie van de streepjescode kan niet worden bepaald vanwege een onjuiste combinatie van de eigenschapswaarden Stretch, BarsFillMode en XDimension.",invalidHeight:"Dit aantal rijen met streepjescoderoosters ({0}) past niet in een dergelijke hoogte ({1} pixel(s)).",invalidLength:"De waarde van de barcodegegevens van de eigenschap moet {0} cijfers bevatten.",invalidPostalCode:"Ongeldige PostalCode-waarde - Mode 2 codeert maximaal 9 cijfers voor de postcode (US postcode), terwijl Mode 3 codeert voor maximaal 6 tekens alfanumerieke code.",invalidPropertyValue:"De waarde van de eigenschap {0} moet tussen {1} - {2} liggen.",invalidVersion:"Het waarde-getal van SizeVersion propery genereert niet genoeg cellen om de gegevens te coderen met de huidige coderingsmodus en het foutcorrectieniveau.",invalidWidth:"Dit aantal kolommen met streepjescodes ({0}) past niet in een dergelijke breedte ({1} pixel(s)). Controleer de eigenschapswaarden XDimension of/en WidthToHeightRatio.",invalidXDimensionValue:"De waarde van de eigenschap XDimension moet binnen het bereik van {0} tot {1} liggen voor het huidige type streepjescode.",maxLength:"De lengte {0} van de tekst overschrijdt de maximale codering voor het huidige type barcode. Het kan maximaal {1} tekens coderen.",notSupportedEncoding:"De codering die overeenkomt met {0} {1} wordt niet ondersteund.",pDF417InvalidRowsColumnsCombination:"De codewoorden (gegevens- en foutcorrectie) zijn meer dan in symbool kunnen worden gecodeerd met een matrix {0} x {1}.",primaryMessageError:"Kan het primaire bericht niet uit de waarde van de eigenschap Data halen. Raadpleeg de documentatie voor de structuur.",serviceClassError:"Fout bij het converteren van serviceklasse. Het moet een numerieke waarde zijn.",smallSize:"Past niet in het raster in Grootte ({0}, {1}) met de gedefinieerde Stretch-instellingen.",unencodableCharacter:"Het teken '{0}' kan niet worden gecodeerd.",uPCEFirstDigit:"Het eerste UPCE-cijfer is altijd nul volgens specificatie.",warningString:"Barcode-waarschuwing: ",wrongCompactionMode:"De waarde van de eigenschap Data kan niet worden gecomprimeerd met de modus {0}.",notLoadedEncoding:"De codering {0} is niet geladen."};$.ig.Barcode.locale=$.ig.Barcode.locale||$.ig.locale.nl.Barcode;return $.ig.locale.nl.Barcode});