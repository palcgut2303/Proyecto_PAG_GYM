/*!@license
* Infragistics.Web.ClientUI Grid localization resources 23.2.50
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.hu=$.ig.locale.hu||{};$.ig.Grid=$.ig.Grid||{};$.ig.locale.hu.Grid={noSuchWidget:"A(z) {featureName} nem ismerhető fel. Ellenőrizze, hogy létezik-e ilyen funkció, és hogy helyesen írta-e.",autoGenerateColumnsNoRecords:"Az autoGenerateColumns engedélyezve van, de az adatforrásban nincsenek rekordok. Az oszlopok meghatározásához töltsön be egy rekordokat tartalmazó adatforrást.",optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",optionChangeNotScrollingGrid:"A(z) {optionName} inicializálás után nem szerkeszthető, mert a rács az alapbeállítás szerint nem görgethető, és teljes újrarendelésre lesz szükség. Ezt az opciót az inicializálás során kell beállítani.",widthChangeFromPixelsToPercentagesNotSupported:"Nem lehet dinamikusan megváltoztatni a rács szélességét pixelről százalékra.",widthChangeFromPercentagesToPixelsNotSupported:"Nem lehet dinamikusan megváltoztatni a rács szélességét százalékról pixelre.",noPrimaryKeyDefined:"A rácshoz nincs meghatározva elsődleges kulcs. Adjon meg egy elsődleges kulcsot olyan funkciók használatához, mint a rács szerkesztése.",indexOutOfRange:"A megadott sorindex a tartományon kívül esik. A megadott sorindexnek 0 és {max} közé kell esnie.",noSuchColumnDefined:"A megadott oszlopkulcs érvénytelen. Olyan oszlopkulcsot kell megadni, amely megegyezik a meghatározott rácsoszlopok valamelyikéhez tartozó kulccsal.",columnIndexOutOfRange:"A megadott oszlopindex a tartományon kívül esik. A megadott oszlopindexnek 0 és {max} közé kell esnie.",recordNotFound:"Nem található {id} azonosítójú rekord az adatnézetben. Ellenőrizze a kereséshez használt azonosítót, és szükség esetén módosítsa.",columnNotFound:"Nem található {kulcs} kulccsal rendelkező oszlop. Ellenőrizze a kereséshez használt kulcsot, és szükség esetén módosítsa.",colPrefix:"Oszlop ",columnVirtualizationRequiresWidth:"A Virtualization és a columnVirtualization használatához be kell állítani a rács vagy az oszlopok szélességét. Adjon meg a rácsszélesség, a defaultColumnWidth vagy az egyes oszlopok szélességének értékét.",virtualizationRequiresHeight:"A virtualizáláshoz be kell állítani a rács magasságát. Meg kell adni a rács magasságának értékét.",colVirtualizationDenied:"A columnVirtualization használatához másik virtualizationMode-ot kell beállítani. A virtualizationMode-ot 'fixed'-re kell állítani.",noColumnsButAutoGenerateTrue:"Az autoGenerateColumns ki van kapcsolva, és a rácshoz nincs megadva oszlop. Kapcsolja be az autoGenerateColumns opciót, vagy manuálisan adjon meg oszlopokat.",expandTooltip:"Sor kibontása",collapseTooltip:"Sor összecsukása",movingNotAllowedOrIncompatible:"A megadott oszlop nem helyezhető át. Ellenőrizze, hogy az oszlop létezik-e, és az oszlop végének pozíciója miatt nem esne-e szét az oszlop elrendezése.",allColumnsHiddenOnInitialization:"Nem lehet elrejtve az összes oszlop az inicializálás során. Legalább egy oszlopot láthatónak kell beállítani.",virtualizationNotSupportedWithAutoSizeCols:"A virtualizáláshoz más oszlopszélességet kell megadni '*' helyett. Az oszlop szélességét számként kell megadni, pixelben kifejezve.",columnVirtualizationNotSupportedWithPercentageWidth:"Az oszlop virtualizálásához más rácsszélességet kell beállítani. Az oszlop szélességét számként kell megadni, pixelben kifejezve.",mixedWidthsNotSupported:"Az összes oszlop szélességét ugyanolyan módon kell megadni. Az összes oszlopszélességet százalékban vagy pixelben kell kifejezni.",multiRowLayoutColumnError:"A(z) {key1} kulcshoz tartozó oszlopot nem sikerült hozzáadni a többsoros elrendezéshez, mert az elrendezésben elfoglalt helyét már a(z) {key2} kulcshoz tartozó oszlop foglalta el.",multiRowLayoutNotComplete:"A többsoros elrendezés nem teljes. Az oszlopdefiníció olyan elrendezést hoz létre, amelyben üres területek vannak, ezért nem lehet megfelelően renderelni.",multiRowLayoutMixedWidths:"A vegyesen beállított (százalékban és pixelben megadott) szélességek használatát a többsoros elrendezés nem támogatja. Az összes oszlopszélességet százalékban vagy pixelben kell kifejezni. ",multiRowLayoutHidingNotSupported:"A többsoros elrendezés nem támogatja a rejtett oszlopok használatát. Távolítsa el az elrejtett oszlopokat az oszlopdefiníciókból.",scrollableGridAreaNotVisible:"A rögzített fejléc- és láblécterületek nagyobbak, mint a rendelkezésre álló rácsmagasság. A görgethető terület nem látható. Kérjük, állítson be nagyobb rácsmagasságot.",featureNotSupportedWithMRL:"A(z) {featureName} funkció nem támogatott a többsoros elrendezésben. Kérjük, távolítsa el a funkciót a funkciók listájáról.",editorTypeCannotBeDetermined:"A frissítés nem rendelkezett elegendő információval ahhoz, hogy megfelelően meg tudja határozni az alkalmazandó szerkesztőprogram típusát a következő oszlopban: "};$.ig.HierarchicalGrid=$.ig.HierarchicalGrid||{};$.ig.locale.hu.HierarchicalGrid={noPrimaryKey:"Az igHierarchicalGrid definiálásához szükség van egy elsődleges kulcsra. Meg kell adni egy elsődleges kulcsot.",expandTooltip:"Sor kibontása",collapseTooltip:"Sor összecsukása"};$.ig.GridFeatureChooser=$.ig.GridFeatureChooser||{};$.ig.locale.hu.GridFeatureChooser={featureChooserTooltip:"Funkcióválasztó"};$.ig.GridFiltering=$.ig.GridFiltering||{};$.ig.locale.hu.GridFiltering={optionChangeNotSupported:"A(z) {optionName} az inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",startsWithNullText:"Kezdete…",endsWithNullText:"Vége…",containsNullText:"Tartalmazza…",doesNotContainNullText:"Nem tartalmazza…",equalsNullText:"Egyenlő...",doesNotEqualNullText:"Nem egyenlő...",greaterThanNullText:"Nagyobb mint...",lessThanNullText:"Kisebb mint...",greaterThanOrEqualToNullText:"Nagyobb vagy egyenlő...",lessThanOrEqualToNullText:"Kevesebb vagy egyenlő...",onNullText:"Dátuma…",notOnNullText:"Nem a dátuma…",afterNullText:"Után",beforeNullText:"Előtt",emptyNullText:"Üres",notEmptyNullText:"Nem üres",nullNullText:"Nullértékű",notNullNullText:"Nem nullértékű",emptyLabel:"Üres",notEmptyLabel:"Nem üres",nullLabel:"Nullértékű",notNullLabel:"Nem nullértékű",startsWithLabel:"Kezdete",endsWithLabel:"Vége",containsLabel:"Tartalmazza",doesNotContainLabel:"Nem tartalmazza",equalsLabel:"Egyenlő",doesNotEqualLabel:"Nem egyenlő",greaterThanLabel:"Nagyobb mint",lessThanLabel:"Kisebb mint",greaterThanOrEqualToLabel:"Nagyobb vagy egyenlő",lessThanOrEqualToLabel:"Kevesebb vagy egyenlő",trueLabel:"True",falseLabel:"False",afterLabel:"Utána",beforeLabel:"Előtt",todayLabel:"Ma",yesterdayLabel:"Tegnap",thisMonthLabel:"Aktuális hónap",lastMonthLabel:"Előző hónap",nextMonthLabel:"Következő hónap",thisYearLabel:"Aktuális év",lastYearLabel:"Előző év",nextYearLabel:"Következő év",atLabel:"Ekkor",atNullText:"Ekkor…",notAtLabel:"Nem ekkor",notAtNullText:"Nem ekkor…",atBeforeLabel:"Ekkor vagy előtte",atBeforeNullText:"Ekkor vagy előtte…",atAfterLabel:"Ekkor vagy utána",atAfterNullText:"Ekkor vagy utána…",clearLabel:"Szűrő törlése",noFilterLabel:"Sorszám",onLabel:"Ekkor",notOnLabel:"Nem ekkor",advancedButtonLabel:"Speciális",filterDialogCaptionLabel:"Speciális szűrő",filterDialogConditionLabel1:"Találatok mutatása ",filterDialogConditionLabel2:" a következő kritériumok közül",filterDialogConditionDropDownLabel:"Szűrési feltétel",filterDialogOkLabel:"Keresés",filterDialogCancelLabel:"Mégse",filterDialogAnyLabel:"BÁRMELY",filterDialogAllLabel:"ÖSSZES",filterDialogAddLabel:"Hozzáadás",filterDialogErrorLabel:"Elérte a támogatott szűrők maximális számát.",filterDialogCloseLabel:"Szűrés párbeszédpanel bezárása",filterSummaryTitleLabel:"Keresési eredmények",filterSummaryTemplate:"${matches} találat",filterDialogClearAllLabel:"ÖSSZES törlése",tooltipTemplate:"${condition} szűrő alkalmazva",featureChooserText:"Szűrő elrejtése",featureChooserTextHide:"Szűrő megjelenítése",featureChooserTextAdvancedFilter:"Speciális szűrő",virtualizationSimpleFilteringNotAllowed:"Az oszlopok virtualizálásához más típusú szűrés szükséges. Állítsa át a szűrési módot 'advanced' értékre, vagy kapcsolja ki az advancedModeEditorsVisible beállítást",multiRowLayoutSimpleFilteringNotAllowed:"A többsoros elrendezés használatához más típusú szűrés szükséges. Állítsa át a szűrési módot 'advanced' értékre",featureChooserNotReferenced:"Hiányzik a Feature Chooser-re mutató hivatkozás. Építse be az infragistics.ui.grid.featurechooser.js fájlt a projektjébe, vagy használjon betöltőt vagy egy kombinált szkriptfájlt.",conditionListLengthCannotBeZero:"A columnSettings alatti conditionList tömb üres. A conditionList-hez meg kell adni egy megfelelő tömböt.",conditionNotValidForColumnType:"A(z) '{0}' feltétel nem érvényes a jelenlegi konfigurációra. Helyettesítse egy {1} oszloptípusnak megfelelő feltétellel.",defaultConditionContainsInvalidCondition:"A(z) '{0}' oszlophoz tartozó defaultExpression nem engedélyezett feltételt tartalmaz. Helyettesítse egy {0} oszloptípusnak megfelelő feltétellel.",initialConditionIsNotInTheConditionsListArrayOrIsNotInTheDefaultConditions:"A(z) '{0}' oszlop columnSettings beállításaiban szereplő kezdeti feltétel nem az alapértelmezett (vagy egyéni) feltételek között szerepel, vagy nem érhető el a columnSettings beállításaiban szereplő conditionList tömbben. Adjon meg egy érvényes feltételt."};$.ig.GridGroupBy=$.ig.GridGroupBy||{};$.ig.locale.hu.GridGroupBy={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",emptyGroupByAreaContent:"Húzza ide az oszlopot vagy {0} a csoportosításra",emptyGroupByAreaContentSelectColumns:"oszlopok kiválasztása",emptyGroupByAreaContentSelectColumnsCaption:"oszlopok kiválasztása",expandTooltip:"Csoportosított sor kibontása",collapseTooltip:"Csoportosított sor összecsukása",removeButtonTooltip:"Csoportosított oszlop eltávolítása",modalDialogCaptionButtonDesc:"Rendezés növekvő sorrendben",modalDialogCaptionButtonAsc:"Rendezés csökkenő sorrendben",modalDialogCaptionButtonUngroup:"Csoportosítás megszüntetése",modalDialogGroupByButtonText:"Csoportosítás",modalDialogCaptionText:"Hozzáadás a csoportosításhoz",modalDialogDropDownLabel:"Megjelenítve:",modalDialogClearAllButtonLabel:"ÖSSZES törlése",modalDialogRootLevelHierarchicalGrid:"Gyökér",modalDialogDropDownButtonCaption:"Mutatás/elrejtés",modalDialogButtonApplyText:"Alkalmaz",modalDialogButtonCancelText:"Mégse",fixedVirualizationNotSupported:"A csoportosítás használatához másik virtualizációs beállítás szükséges. A virtualizationMode értékét 'continuous' értékre kell beállítani.",summaryRowTitle:"Összefoglaló sor csoportosítása",summaryIconTitle:"Összefoglaló a következőhöz: {0}: {1}"};$.ig.GridHiding=$.ig.GridHiding||{};$.ig.locale.hu.GridHiding={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",columnChooserDisplayText:"Oszlopválasztó",hiddenColumnIndicatorTooltipText:"Rejtett oszlop(ok)",columnHideText:"Elrejtés",columnChooserCaptionLabel:"Oszlopválasztó",columnChooserCloseButtonTooltip:"Bezárás",hideColumnIconTooltip:"Elrejtés",featureChooserNotReferenced:"Hiányzik a Feature Chooser-re mutató hivatkozás. Vegyen bele az infragistics.ui.grid.featurechooser.js fájlt a projektjébe, vagy használja a kombinált parancsfájlok egyikét.",columnChooserShowText:"Mutatás",columnChooserHideText:"Elrejtés",columnChooserResetButtonLabel:"Visszaállítás",columnChooserButtonApplyText:"Alkalmaz",columnChooserButtonCancelText:"Mégse"};$.ig.GridResizing=$.ig.GridResizing||{};$.ig.locale.hu.GridResizing={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",noSuchVisibleColumn:"A megadott kulcshoz nem tartozik látható oszlop. Az átméretezés előtt használja a showColumn() metódust az oszlopra.",resizingAndFixedVirtualizationNotSupported:"Az oszlopok átméretezéséhez más virtualizációs beállítás szükséges. Használja a rowVirtualization funkciót, és állítsa a virtualizationMode értékét a 'continuous' értékre."};$.ig.GridPaging=$.ig.GridPaging||{};$.ig.locale.hu.GridPaging={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",pageSizeDropDownLabel:"Mutatás ",pageSizeDropDownTrailingLabel:"rekordok",nextPageLabelText:"Következő",prevPageLabelText:"Előző",firstPageLabelText:"",lastPageLabelText:"",currentPageDropDownLeadingLabel:"Oldal",currentPageDropDownTrailingLabel:"összesen: ${count}",currentPageDropDownTooltip:"Oldalszám kiválasztása",pageSizeDropDownTooltip:"Oldalanként megjelenített rekordok számának kiválasztása",pagerRecordsLabelTooltip:"Megjelenített rekordok",prevPageTooltip:"Előző oldal",nextPageTooltip:"Következő oldal",firstPageTooltip:"Első oldal",lastPageTooltip:"Utolsó oldal",pageTooltipFormat:"${index}. oldal",pagerRecordsLabelTemplate:"${startRecord}-${endRecord}. rekord, összesen: ${recordCount}",invalidPageIndex:"A megadott oldalszám érvénytelen. Adjon meg olyan oldalszámot, amely nagyobb vagy egyenlő, mint 0, és kisebb, mint ahány oldal van összesen."};$.ig.GridSelection=$.ig.GridSelection||{};$.ig.locale.hu.GridSelection={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",persistenceImpossible:"A folyamatos kiválasztáshoz más konfiguráció szükséges. Meg kell adni a rácshoz tartozó elsődleges kulcsot."};$.ig.GridRowSelectors=$.ig.GridRowSelectors||{};$.ig.locale.hu.GridRowSelectors={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",selectionNotLoaded:"Az igGridSelection nincs inicializálva. A rácshoz engedélyezni kell a kiválasztást.",columnVirtualizationEnabled:"A sorválasztókhoz más virtualizációs beállítás szükséges. Használja a rowVirtualization funkciót, és állítsa a virtualizationMode értékét a 'continuous' értékre.",selectedRecordsText:"${checked} rekordot jelölt ki.",deselectedRecordsText:"${unchecked} rekord kijelölését törölte.",selectAllText:"Az összes rekord (${totalRecordsCount}) kijelölése",deselectAllText:"Az összes rekord (${totalRecordsCount}) kijelölésének törlése",requireSelectionWithCheckboxes:"Ki kell választani legalább egy elemet, ha be van jelölve legalább egy jelölőnégyzet"};$.ig.GridSorting=$.ig.GridSorting||{};$.ig.locale.hu.GridSorting={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",sortedColumnTooltip:"Rendezés: ${direction}",unsortedColumnTooltip:"Oszlop rendezése",ascending:"növekvő",descending:"csökkenő",modalDialogSortByButtonText:"Rendezés",modalDialogResetButton:"Visszaállítás",modalDialogCaptionButtonDesc:"Kattintson a csökkenő rendezéshez",modalDialogCaptionButtonAsc:"Kattintson a növekvő rendezéshez",modalDialogCaptionButtonUnsort:"Kattintson a rendezés eltávolításához",featureChooserText:"Többszintű rendezés",modalDialogCaptionText:"Többszintű rendezés",modalDialogButtonApplyText:"Alkalmaz",modalDialogButtonCancelText:"Mégse",sortingHiddenColumnNotSupport:"A megadott oszlop nem rendezhető, mert rejtett. A rendezés előtt használja a showColumn() metódust.",featureChooserSortAsc:"Rendezés növekvő sorrendben",featureChooserSortDesc:"Rendezés csökkenő sorrendben"};$.ig.GridSummaries=$.ig.GridSummaries||{};$.ig.locale.hu.GridSummaries={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",featureChooserText:"Összesítések elrejtése",featureChooserTextHide:"Összesítések mutatása",dialogButtonOKText:"OK",dialogButtonCancelText:"Mégse",emptyCellText:"",summariesHeaderButtonTooltip:"Összesítések mutatása/elrejtése",defaultSummaryRowDisplayLabelCount:"Darab",defaultSummaryRowDisplayLabelMin:"Min",defaultSummaryRowDisplayLabelMax:"Max",defaultSummaryRowDisplayLabelSum:"Szum",defaultSummaryRowDisplayLabelAvg:"Átlag",defaultSummaryRowDisplayLabelCustom:"Egyéni",calculateSummaryColumnKeyNotSpecified:"Hiányzik az oszlopkulcs. Az összesítések kiszámításához meg kell adni egy oszlopkulcsot.",featureChooserNotReferenced:"Hiányzik a Feature Chooser-re mutató hivatkozás. Vegyen bele az infragistics.ui.grid.featurechooser.js fájlt a projektjébe, vagy használja a kombinált parancsfájlok egyikét."};$.ig.GridUpdating=$.ig.GridUpdating||{};$.ig.locale.hu.GridUpdating={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",doneLabel:"Kész",doneTooltip:"Szerkesztés leállítása és frissítés",cancelLabel:"Mégse",cancelTooltip:"Szerkesztés leállítása frissítés nélkül",addRowLabel:"Új sor hozzáadása",addRowTooltip:"Új sor hozzáadásának megkezdése",deleteRowLabel:"Sor törlése",deleteRowTooltip:"Sor törlése",igTextEditorException:"A karakterláncokat tartalmazó oszlopok jelenleg nem frissíthetők a rácsban. Először be kell tölteni az ui.igTextEditor alkalmazást.",igNumericEditorException:"A numerikus értékeket tartalmazó oszlopok jelenleg nem frissíthetők a rácsban. Először be kell tölteni az ui.igNumericEditor alkalmazást.",igCheckboxEditorException:"A jelölőnégyzeteket tartalmazó oszlopok jelenleg nem frissíthetők a rácsban. Először be kell tölteni az ui.igCheckboxEditor alkalmazást.",igCurrencyEditorException:"A pénznem formátumú numerikus értékeket tartalmazó oszlopok jelenleg nem frissíthetők a rácsban. Először be kell tölteni az ui.igCurrencyEditor alkalmazást.",igPercentEditorException:"A százalékos formátumú numerikus értékeket tartalmazó oszlopok jelenleg nem frissíthetők a rácsban. Először be kell tölteni az ui.igPercentEditor alkalmazást.",igDateEditorException:"A dátumokat tartalmazó oszlopok jelenleg nem frissíthetők a rácsban. Először be kell tölteni az ui.igDateEditor alkalmazást.",igDatePickerException:"A dátumokat tartalmazó oszlopok jelenleg nem frissíthetők a rácsban. Először be kell tölteni az ui.igDatePicker alkalmazást.",igTimePickerException:"A dátumokat tartalmazó oszlopok jelenleg nem frissíthetők a rácsban. Először be kell tölteni az ui.igTimePicker alkalmazást.",igComboException:"A rácsban jelenleg nem használhatók legördülő listák. Először be kell tölteni az ui.igCombo alkalmazást.",igRatingException:"Az igRating jelenleg nem használható szerkesztőként a rácsban. Először be kell tölteni az ui.igRating alkalmazást.",igValidatorException:"A validáció jelenleg nem támogatott az igGridUpdating alkalmazásban definiált opciókkal. Először be kell tölteni az ui.igValidator alkalmazást.",noPrimaryKeyException:"Ahhoz, hogy a frissítési műveletek elérhetőek legyenek egy sor törlése után, az alkalmazásnak meg kell határoznia a primaryKey értékét az igGrid rácsban.",hiddenColumnValidationException:"Nem lehet szerkeszteni egy olyan sort, amelynek olyan rejtett oszlopa van, amelyen engedélyezve van a validáció.",dataDirtyException:"A rácshoz függőben lévő tranzakciók tartoznak, amelyek befolyásolhatják az adatok megjelenítését. A kivétel elkerülése érdekében az alkalmazás engedélyezheti az igGrid autoCommit opcióját, vagy fel kell dolgoznia az igGridUpdating alkalmazás dataDirty eseményét, és hamis értéket kell visszaadnia. Az esemény feldolgozása közben az alkalmazás is meghívhatja a commit() metódust az igGrid-ben.",recordOrPropertyNotFoundException:"A megadott rekord vagy tulajdonság nem található. Ellenőrizze a keresés feltételeit, és szükség esetén módosítsa azokat.",rowUpdatingNotSupportedWithColumnVirtualization:'Ha az editMode: "row" értékre van beállítva, akkor a frissítéshez más konfiguráció szükséges. A columnVirtualization opciót ki kell kapcsolni.',rowEditDialogCaptionLabel:"Soradatok szerkesztése",excelNavigationNotSupportedWithCurrentEditMode:"Az Excelben történő navigációhoz más konfiguráció szükséges. Az editMode értékét 'cell' vagy 'row' értékre kell állítani",columnNotFound:"A megadott oszlopkulcs nem található a látható oszlopok gyűjteményében, vagy a megadott index kívül esik a tartományon.",rowOrColumnSpecifiedOutOfView:"A megadott sor vagy oszlop szerkesztése jelenleg nem lehetséges. Láthatónak kell lennie az aktuális oldalon és virtualizációs keretben.",editingInProgress:"Egy sor vagy cella éppen szerkesztés alatt áll. Egy újabb frissítési eljárás nem indítható el az aktuális szerkesztés befejezése előtt.",undefinedCellValue:"A cellaérték nem lehet nem definiált.",addChildTooltip:"Gyermeksor hozzáadása",multiRowGridNotSupportedWithCurrentEditMode:"Ha a rácson a többsoros elrendezés engedélyezve van, akkor csak a párbeszédpaneles szerkesztési mód támogatott.",virtualizationNotSupportedWithoutAutoCommit:" A frissítés és a virtualizáció nem engedélyezhető, amíg az autoCommit hamis értékre van állítva. Állítsa a rács autoCommit beállítását true értékre."};$.ig.CellMerging=$.ig.CellMerging||{};$.ig.locale.hu.CellMerging={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",mergeStrategyNotAFunction:"A megadott mergeStrategy nem érvényes előre definiált érték, vagy nem található ilyen nevű függvény."};$.ig.ColumnMoving=$.ig.ColumnMoving||{};$.ig.locale.hu.ColumnMoving={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",movingDialogButtonApplyText:"Alkalmaz",movingDialogButtonCancelText:"Mégse",movingDialogCaptionButtonDesc:"Mozgatás lefelé",movingDialogCaptionButtonAsc:"Mozgatás felfelé",movingDialogCaptionText:"Oszlopok mozgatása",movingDialogDisplayText:"Oszlopok mozgatása",movingDialogDropTooltipText:"Mozgatás ide",movingDialogCloseButtonTitle:"Mozgó párbeszédpanel bezárása",dropDownMoveLeftText:"Mozgatás balra",dropDownMoveRightText:"Mozgatás jobbra",dropDownMoveFirstText:"Első mozgatása",dropDownMoveLastText:"Utolsó mozgatása",featureChooserNotReferenced:"Hiányzik a Feature Chooser-re mutató hivatkozás. Vegyen bele az infragistics.ui.grid.featurechooser.js fájlt a projektjébe, vagy használja a kombinált parancsfájlok egyikét.",movingToolTipMove:"Mozgatás",featureChooserSubmenuText:"Mozgatás ide",columnVirtualizationEnabled:"Az oszlopok mozgatásához más virtualizációs beállítás szükséges. Használja a rowVirtualization funkciót, és állítsa a virtualizationMode értékét a 'continuous' értékre."};$.ig.ColumnFixing=$.ig.ColumnFixing||{};$.ig.locale.hu.ColumnFixing={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",headerFixButtonText:"Oszlop rögzítése",headerUnfixButtonText:"Oszlop rögzítésének feloldása",featureChooserTextFixedColumn:"Oszlop rögzítése",featureChooserTextUnfixedColumn:"Oszlop rögzítésének feloldása",groupByNotSupported:"Az oszlopok rögzítéséhez más konfiguráció szükséges. A csoportosítás funkciót ki kell kapcsolni.",virtualizationNotSupported:"Az oszlopok rögzítéséhez más virtualizációs beállítás szükséges. Használja a rowVirtualization opciót.",columnVirtualizationNotSupported:"Az oszlopok rögzítéséhez más virtualizációs beállítás szükséges. Kapcsolja ki a columnVirtualization opciót.",columnMovingNotSupported:"Az oszlopok rögzítéséhez más konfiguráció szükséges. Az oszlopok mozgatását ki kell kapcsolni.",hidingNotSupported:"Az oszlopok rögzítéséhez más konfiguráció szükséges. Az elrejtés funkciót ki kell kapcsolni.",hierarchicalGridNotSupported:"Az igHierarchicalGrid nem támogatja az oszlopok rögzítését. Az oszlopok rögzítését ki kell kapcsolni.",responsiveNotSupported:"Az oszlopok rögzítéséhez más konfiguráció szükséges. Az adaptív funkciót ki kell kapcsolni.",noGridWidthNotSupported:"Az oszlopok rögzítéséhez más konfiguráció szükséges. A rács szélességét százalékban vagy pixelben kell megadni.",gridHeightInPercentageNotSupported:"Az oszlopok rögzítéséhez más konfiguráció szükséges. A rács magasságát pixelben kell megadni.",defaultColumnWidthInPercentageNotSupported:"Az oszlopok rögzítéséhez más konfiguráció szükséges. Az alapértelmezett oszlopszélességet pixelben kell megadni.",columnsWidthShouldBeSetInPixels:"Az oszlopok rögzítéséhez más oszlopszélesség-beállítás szükséges. A(z) {key} kulcshoz tartozó oszlop szélességét pixelben kell megadni.",unboundColumnsNotSupported:"Az oszlopok rögzítéséhez más konfiguráció szükséges. A nem kötött oszlopok használatát ki kell kapcsolni.",excelNavigationNotSupportedWithCurrentEditMode:"Az Excelben történő navigációhoz más konfiguráció szükséges. Az editMode értékét 'cell' vagy 'row' értékre kell állítani.",initialFixingNotApplied:"A kezdeti javítást nem lehetett alkalmazni a következő kulcsú oszlophoz: {0}. Ok: {1}",setOptionGridWidthException:"Helytelen érték az opciórács szélességének. Ha vannak rögzített oszlopok, akkor a rögzítetlen oszlop(ok) látható területe szélességének nagyobbnak vagy egyenlőnek kell lennie, mint a minimalVisibleAreaWidth értéke.",noneError:"A rács beállítása sikeres!",notValidIdentifierError:"A megadott oszlopkulcs érvénytelen. Adjon meg egy olyan oszlopkulcsot, amely megegyezik a meghatározott rácsoszlopok egyikének kulcsával.",fixingRefusedError:"Ennek az oszlopnak a rögzítése jelenleg nem támogatott. Oldja fel egy másik látható oszlop rögzítését, vagy először használja a showColumn() metódust bármely rejtett, nem rögzített oszlopon.",fixingRefusedMinVisibleAreaWidthError:"Ez az oszlop nem rögzíthető. A szélessége meghaladja az oszlop rögzítéséhez rendelkezésre álló helyet a rácsban.",alreadyHiddenError:"Az oszlop rögzítése/feloldása jelenleg nem lehetséges. Az oszlopon először a showColumn() metódust kell használni.",alreadyUnfixedError:"Ez az oszlop már nincs rögzítve.",alreadyFixedError:"Ez az oszlop már rögzítve van.",unfixingRefusedError:"Az oszlop rögzítésének feloldása jelenleg nem lehetséges. Először a showColumn() metódust kell alkalmazni minden olyan oszlopra, amely rejtett és rögzített.",targetNotFoundError:"A(z) {key} kulcshoz tartozó céloszlop nem található. Ellenőrizze a kereséshez használt kulcsot, és szükség esetén módosítsa."};$.ig.GridAppendRowsOnDemand=$.ig.GridAppendRowsOnDemand||{};$.ig.locale.hu.GridAppendRowsOnDemand={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",loadMoreDataButtonText:"Több adat betöltése",appendRowsOnDemandRequiresHeight:"A sorok igény szerinti hozzáfűzéséhez más konfiguráció szükséges. Meg kell adni a rács magasságát.",groupByNotSupported:"A sorok igény szerinti hozzáfűzéséhez más konfiguráció szükséges. A csoportosítást ki kell kapcsolni.",pagingNotSupported:"A sorok igény szerinti hozzáfűzéséhez más konfiguráció szükséges. A lapozást ki kell kapcsolni.",cellMergingNotSupported:"A sorok igény szerinti hozzáfűzéséhez más konfiguráció szükséges. A cellaegyesítést ki kell kapcsolni.",virtualizationNotSupported:"A sorok igény szerinti hozzáfűzéséhez más konfiguráció szükséges. A virtualizációt ki kell kapcsolni."};$.ig.igGridResponsive=$.ig.igGridResponsive||{};$.ig.locale.hu.igGridResponsive={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",fixedVirualizationNotSupported:'Az adaptív funkcióhoz más virtualizációs beállítás szükséges. A virtualizationMode értékét "continuous" értékre kell állítani.'};$.ig.igGridMultiColumnHeaders=$.ig.igGridMultiColumnHeaders||{};$.ig.locale.hu.igGridMultiColumnHeaders={optionChangeNotSupported:"A(z) {optionName} inicializálás után nem szerkeszthető. Az értékét az inicializálás során kell beállítani.",multiColumnHeadersNotSupportedWithColumnVirtualization:"A többoszlopos fejlécek használatához más konfiguráció szükséges. A columnVirtualization opciót ki kell kapcsolni.",cannotExpandMultiColumnHeader:"A többoszlopos fejléc mérete meghaladja a rögzített terület maximálisan megengedett szélességét, ezért nem bontható ki",atLeastOneColumnShouldBeShownWhenCollapseOrExpand:"Legalább egy oszlopnak látszania kell egy többoszlopos fejléc kibontásához vagy összecsukásához.",collapsedColumnIconTooltip:"Kibontás",expandedColumnIconTooltip:"Összecsukás"};$.ig.Grid.locale=$.ig.Grid.locale||$.ig.locale.hu.Grid;$.ig.GridFiltering.locale=$.ig.GridFiltering.locale||$.ig.locale.hu.GridFiltering;$.ig.GridGroupBy.locale=$.ig.GridGroupBy.locale||$.ig.locale.hu.GridGroupBy;$.ig.GridHiding.locale=$.ig.GridHiding.locale||$.ig.locale.hu.GridHiding;$.ig.GridResizing.locale=$.ig.GridResizing.locale||$.ig.locale.hu.GridResizing;$.ig.GridPaging.locale=$.ig.GridPaging.locale||$.ig.locale.hu.GridPaging;$.ig.GridSelection.locale=$.ig.GridSelection.locale||$.ig.locale.hu.GridSelection;$.ig.GridRowSelectors.locale=$.ig.GridRowSelectors.locale||$.ig.locale.hu.GridRowSelectors;$.ig.GridSorting.locale=$.ig.GridSorting.locale||$.ig.locale.hu.GridSorting;$.ig.GridSummaries.locale=$.ig.GridSummaries.locale||$.ig.locale.hu.GridSummaries;$.ig.GridUpdating.locale=$.ig.GridUpdating.locale||$.ig.locale.hu.GridUpdating;$.ig.CellMerging.locale=$.ig.CellMerging.locale||$.ig.locale.hu.CellMerging;$.ig.ColumnMoving.locale=$.ig.ColumnMoving.locale||$.ig.locale.hu.ColumnMoving;$.ig.ColumnFixing.locale=$.ig.ColumnFixing.locale||$.ig.locale.hu.ColumnFixing;$.ig.GridAppendRowsOnDemand.locale=$.ig.GridAppendRowsOnDemand.locale||$.ig.locale.hu.GridAppendRowsOnDemand;$.ig.igGridResponsive.locale=$.ig.igGridResponsive.locale||$.ig.locale.hu.igGridResponsive;$.ig.igGridMultiColumnHeaders.locale=$.ig.igGridMultiColumnHeaders.locale||$.ig.locale.hu.igGridMultiColumnHeaders;$.ig.HierarchicalGrid.locale=$.ig.HierarchicalGrid.locale||$.ig.locale.hu.HierarchicalGrid;return $.ig.locale.hu});