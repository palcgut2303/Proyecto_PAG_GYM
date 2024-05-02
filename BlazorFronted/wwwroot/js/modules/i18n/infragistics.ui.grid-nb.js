/*!@license
* Infragistics.Web.ClientUI Grid localization resources 23.2.50
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.nb=$.ig.locale.nb||{};$.ig.Grid=$.ig.Grid||{};$.ig.locale.nb.Grid={noSuchWidget:"{featureName} ble ikke gjenkjent. Kontroller at en slik funksjon finnes og at stavemåten er korrekt.",autoGenerateColumnsNoRecords:"autoGenerateColumns er aktivert, men det er ingen poster i datakilden. Last inn en datakilde med poster for å kunne bestemme kolonnene.",optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",optionChangeNotScrollingGrid:"{optionName} kan ikke redigeres etter initialisering fordi rutenettet først ikke ruller, og full gjengivelse vil være nødvendig. Dette alternativet bør angis under initialisering.",widthChangeFromPixelsToPercentagesNotSupported:"Kan ikke endre dynamisk alternativbredde på rutenettet fra piksler til prosentandeler.",widthChangeFromPercentagesToPixelsNotSupported:"Kan ikke endre dynamisk alternativbredde på rutenettet fra prosenter til piksler.",noPrimaryKeyDefined:"Det er ingen hovednøkkel definert for rutenettet. Definer en hovednøkkel for å bruke funksjoner som rutenettredigering.",indexOutOfRange:"Den angitte radindeksen er utenfor området. En radindeks mellom 0 og {max} bør oppgis.",noSuchColumnDefined:"Enkolonnenøkkel som samsvarer med nøkkelen til en av de definerte rutenettkolonnene, bør gis.",columnIndexOutOfRange:"Den angitte kolonneindeksen er utenfor området. En kolonneindeks mellom 0 og {max} bør oppgis.",recordNotFound:"En post med ID {id} ble ikke funnet i datavisningen. Bekreft ID-en som ble brukt for søket, og juster den om nødvendig.",columnNotFound:"En kolonne med nøkkelen {key} ble ikke funnet. Kontroller nøkkelen som ble brukt for søket, og juster den om nødvendig.",colPrefix:"Kolonne ",columnVirtualizationRequiresWidth:"Virtualisering og kolonneVirtualisering krever at bredden på rutenettet eller kolonnene er angitt. Angi en verdi for rutenettbredden, defaultColumnWidth eller bredden på hver kolonne.",virtualizationRequiresHeight:"Virtualisering krever at høyden på rutenettet er angitt. Det bør oppgis en verdi for rutenetthøyden.",colVirtualizationDenied:"columnVirtualization krever en annen virtualizationMode-innstilling.vVirtualizationMode bør settes til 'fixed'.",noColumnsButAutoGenerateTrue:"autoGenerateColumns er deaktivert og ingen kolonner er definert for rutenettet. Enten aktiver autoGenerateColumns eller spesifiser kolonnene manuelt.",expandTooltip:"Utvid rad",collapseTooltip:"Skjul rad",movingNotAllowedOrIncompatible:"Den angitte kolonnen kunne ikke flyttes. Kontroller at en slik kolonne eksisterer og at sluttposisjonen ikke vil bryte kolonneoppsettet.",allColumnsHiddenOnInitialization:"Alle kolonner kan ikke skjules under initialisering. Minst én kolonne skal konfigureres som synlig.",virtualizationNotSupportedWithAutoSizeCols:"Virtualisering krever en annen kolonnebreddekonfigurasjon enn '*'. Kolonnebredden bør angis som et tall i piksler.",columnVirtualizationNotSupportedWithPercentageWidth:"Kolonnevirtualisering krever en annen rutenettbredde-konfigurasjon. Kolonnebredden bør angis som et tall i piksler.",mixedWidthsNotSupported:"Alle kolonner må ha bredden angitt på samme måte. Angi alle kolonnebredder enten som prosent eller som tall i piksler.",multiRowLayoutColumnError:"Kolonnen med nøkkel: {key1} kunne ikke legges til i flerradsoppsett fordi stedet i oppsettet allerede er tatt av kolonnen med nøkkelen: {key2}.",multiRowLayoutNotComplete:"Multi-Row Layout er ikke fullført. Kolonnedefinisjonen oppretter et oppsett som har tomme mellomrom og ikke kan gjengis riktig.",multiRowLayoutMixedWidths:"Blandede bredder (prosentandel og piksler) støttes ikke i Multi-Row Layout. Definer alle kolonnebredder i enten piksler eller prosent. ",multiRowLayoutHidingNotSupported:"Multi-Row Layout støtter ikke skjulte kolonner. Fjern skjulte kolonner fra kolonnedefinisjonene.",scrollableGridAreaNotVisible:"Faste topp- og bunntekstområder er større enn tilgjengelig rutehøyde. Det rullbare området er ikke synlig. Angi en større rutehøyde.",featureNotSupportedWithMRL:"{featureName} støttes ikke med Layout med flere rader. Fjern funksjonen fra funksjonslisten.",editorTypeCannotBeDetermined:"Oppdateringen hadde ikke nok informasjon til å fastslå hvilken type redaktør som skal brukes for kolonnen: "};$.ig.HierarchicalGrid=$.ig.HierarchicalGrid||{};$.ig.locale.nb.HierarchicalGrid={noPrimaryKey:"igHierarchicalGrid krever at en primærnøkkel defineres. En hovednøkkel bør gis.",expandTooltip:"Utvid rad",collapseTooltip:"Skjul rad"};$.ig.GridFeatureChooser=$.ig.GridFeatureChooser||{};$.ig.locale.nb.GridFeatureChooser={featureChooserTooltip:"Funksjonsvelger"};$.ig.GridFiltering=$.ig.GridFiltering||{};$.ig.locale.nb.GridFiltering={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",startsWithNullText:"Begynner med...",endsWithNullText:"Slutter med...",containsNullText:"Inneholder...",doesNotContainNullText:"Inneholder ikke...",equalsNullText:"Er lik...",doesNotEqualNullText:"Er ikke lik...",greaterThanNullText:"Større enn...",lessThanNullText:"Mindre enn...",greaterThanOrEqualToNullText:"Større enn eller lik...",lessThanOrEqualToNullText:"Mindre enn eller lik...",onNullText:"På...",notOnNullText:"Ikke på...",afterNullText:"Etter",beforeNullText:"Før",emptyNullText:"Tømme",notEmptyNullText:"Ikke tom",nullNullText:"Null",notNullNullText:"Ikke null",emptyLabel:"Tømme",notEmptyLabel:"Ikke tom",nullLabel:"Null",notNullLabel:"Ikke null",startsWithLabel:"Begynner med",endsWithLabel:"Slutter med",containsLabel:"Inneholder",doesNotContainLabel:"Inneholder ikke",equalsLabel:"Er lik",doesNotEqualLabel:"Er ikke lik",greaterThanLabel:"Større enn",lessThanLabel:"Mindre enn",greaterThanOrEqualToLabel:"Større enn eller lik",lessThanOrEqualToLabel:"Mindre enn eller lik",trueLabel:"True",falseLabel:"False",afterLabel:"Etter",beforeLabel:"Før",todayLabel:"I dag",yesterdayLabel:"I går",thisMonthLabel:"Denne måneden",lastMonthLabel:"Forrige måned",nextMonthLabel:"Neste måned",thisYearLabel:"I år",lastYearLabel:"I fjor",nextYearLabel:"Neste år",atLabel:"På",atNullText:"På...",notAtLabel:"Ikke på",notAtNullText:"Ikke på...",atBeforeLabel:"Kl eller før",atBeforeNullText:"På eller før...",atAfterLabel:"Kl. Eller etter",atAfterNullText:"Ved eller etter...",clearLabel:"Fjern filteret",noFilterLabel:"Nei",onLabel:"På",notOnLabel:"Ikke på",advancedButtonLabel:"Avansert",filterDialogCaptionLabel:"Avansert filter",filterDialogConditionLabel1:"Vis samsvarende poster ",filterDialogConditionLabel2:" av følgende kriterier",filterDialogConditionDropDownLabel:"Filtreringstilstand",filterDialogOkLabel:"Søk",filterDialogCancelLabel:"Avbryt",filterDialogAnyLabel:"NOEN",filterDialogAllLabel:"ALLE",filterDialogAddLabel:"Legge til",filterDialogErrorLabel:"Du har nådd det maksimale antallet filtre som støttes.",filterDialogCloseLabel:"Lukk filtreringsdialogboksen",filterSummaryTitleLabel:"Søkeresultater",filterSummaryTemplate:"${matches} matchende poster",filterDialogClearAllLabel:"Rydd alt",tooltipTemplate:"${condition}-filteret er brukt",featureChooserText:"Skjul filter",featureChooserTextHide:"Vis filter",featureChooserTextAdvancedFilter:"Avansert filter",virtualizationSimpleFilteringNotAllowed:"Kolonnevirtualisering krever en annen type filtrering. Sett filtreringsmodus til 'advanced' eller deaktiver advancedModeEditorsVisible",multiRowLayoutSimpleFilteringNotAllowed:"Multi-Row Layout krever en annen type filtrering. Sett filtreringsmodus til 'advanced'",featureChooserNotReferenced:"En referanse til Feature Chooser mangler. Inkluder infragistics.ui.grid.featurechooser.js i prosjektet ditt, bruk en laster eller en av de kombinerte skriptfilene.",conditionListLengthCannotBeZero:"ConditionList-matrisen i columnSettings er tom. Det bør gis et passende utvalg for conditionList.",conditionNotValidForColumnType:"Betingelsen '{0}' er ikke gyldig for den nåværende konfigurasjonen. Den bør erstattes med en betingelse som er egnet for {1} kolonnetype.",defaultConditionContainsInvalidCondition:"standarduttrykk for '{0}'-kolonnen inneholder en betingelse som ikke er tillatt. Den bør byttes ut med en betingelse som er egnet for {0} kolonnetype.",initialConditionIsNotInTheConditionsListArrayOrIsNotInTheDefaultConditions:"Den opprinnelige betingelsen som er angitt i columnSettings for kolonnen '{0}', er ikke fra standard (eller egendefinerte betingelser) eller er ikke tilgjengelig i conditionList-matrisen som er angitt i columnSettins. Bruk en gyldig betingelse."};$.ig.GridGroupBy=$.ig.GridGroupBy||{};$.ig.locale.nb.GridGroupBy={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",emptyGroupByAreaContent:"Dra en kolonne her eller {0} for å gruppere etter",emptyGroupByAreaContentSelectColumns:"velg kolonner",emptyGroupByAreaContentSelectColumnsCaption:"velg kolonner",expandTooltip:"Utvid gruppert rad",collapseTooltip:"Skjul gruppert rad",removeButtonTooltip:"Fjern gruppert kolonne",modalDialogCaptionButtonDesc:"Sorter stigende",modalDialogCaptionButtonAsc:"Sorter synkende",modalDialogCaptionButtonUngroup:"Opphev gruppering",modalDialogGroupByButtonText:"Gruppe av",modalDialogCaptionText:"Legg til i gruppe etter",modalDialogDropDownLabel:"Viser:",modalDialogClearAllButtonLabel:"Rydd alt",modalDialogRootLevelHierarchicalGrid:"Rot",modalDialogDropDownButtonCaption:"Vis skjul",modalDialogButtonApplyText:"Søke om",modalDialogButtonCancelText:"Avbryt",fixedVirualizationNotSupported:"Group By krever en annen virtualiseringsinnstilling. VirtualizationMode bør settes til 'continuous'.",summaryRowTitle:"Gruppering av sammendragsrekke",summaryIconTitle:"Sammendrag for {0}: {1}"};$.ig.GridHiding=$.ig.GridHiding||{};$.ig.locale.nb.GridHiding={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",columnChooserDisplayText:"Spaltevelger",hiddenColumnIndicatorTooltipText:"Skjulte kolonner",columnHideText:"Gjemme seg",columnChooserCaptionLabel:"Spaltevelger",columnChooserCloseButtonTooltip:"Lukk",hideColumnIconTooltip:"Gjemme seg",featureChooserNotReferenced:"En referanse til Feature Chooser mangler. Inkluder infragistics.ui.grid.featurechooser.js i prosjektet ditt, eller bruk en av de kombinerte skriptfilene.",columnChooserShowText:"Forestilling",columnChooserHideText:"Gjemme seg",columnChooserResetButtonLabel:"Nullstille",columnChooserButtonApplyText:"Søke om",columnChooserButtonCancelText:"Avbryt"};$.ig.GridResizing=$.ig.GridResizing||{};$.ig.locale.nb.GridResizing={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",noSuchVisibleColumn:"Det er ingen synlig kolonne for den angitte nøkkelen. ShowColumn()-metoden bør brukes i kolonnen før du prøver å endre størrelsen på den.",resizingAndFixedVirtualizationNotSupported:"Endre størrelsen på kolonner krever en annen virtualiseringsinnstilling. Bruk rowVirtualization og sett virtualizationMode til 'continuous'."};$.ig.GridPaging=$.ig.GridPaging||{};$.ig.locale.nb.GridPaging={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",pageSizeDropDownLabel:"Forestilling ",pageSizeDropDownTrailingLabel:"poster",nextPageLabelText:"Neste",prevPageLabelText:"Forrige",firstPageLabelText:"",lastPageLabelText:"",currentPageDropDownLeadingLabel:"Side",currentPageDropDownTrailingLabel:"av ${count}",currentPageDropDownTooltip:"Velg sideindeks",pageSizeDropDownTooltip:"Velg antall poster per side",pagerRecordsLabelTooltip:"Gjeldende rekorder",prevPageTooltip:"Forrige side",nextPageTooltip:"Neste side",firstPageTooltip:"Første side",lastPageTooltip:"Siste side",pageTooltipFormat:"Side ${index}",pagerRecordsLabelTemplate:"${startRecord} - ${endRecord} av ${recordCount} poster",invalidPageIndex:"Den angitte sideindeksen er ikke gyldig. Oppgi en sideindeks som er større enn eller lik 0 og mindre enn det totale antallet sider."};$.ig.GridSelection=$.ig.GridSelection||{};$.ig.locale.nb.GridSelection={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",persistenceImpossible:"Hovednøkkelalternativet for rutenettet bør konfigureres. Vedvarende valg krever en annen konfigurasjon."};$.ig.GridRowSelectors=$.ig.GridRowSelectors||{};$.ig.locale.nb.GridRowSelectors={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",selectionNotLoaded:"igGridSelection er ikke initialisert. Valg bør være aktivert for rutenettet.",columnVirtualizationEnabled:"Radvelgere krever en annen virtualiseringsinnstilling. Bruk rowVirtualization eller sett virtualizationMode til 'continuous'.",selectedRecordsText:"Du har valgt ${checked} poster.",deselectedRecordsText:"Du har opphevet markeringen av ${unchecked} poster.",selectAllText:"Velg alle ${totalRecordsCount} poster",deselectAllText:"Fjern markeringen av alle ${totalRecordsCount} poster",requireSelectionWithCheckboxes:"Du må velge når det er merket av for avmerkingsbokser"};$.ig.GridSorting=$.ig.GridSorting||{};$.ig.locale.nb.GridSorting={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",sortedColumnTooltip:"Sortert ${direction}",unsortedColumnTooltip:"Sorter kolonne",ascending:"stigende",descending:"synkende",modalDialogSortByButtonText:"Sorter etter",modalDialogResetButton:"Nullstille",modalDialogCaptionButtonDesc:"Klikk for å sortere synkende",modalDialogCaptionButtonAsc:"Klikk for å sortere stigende",modalDialogCaptionButtonUnsort:"Klikk for å fjerne sorteringen",featureChooserText:"Sorter på flere",modalDialogCaptionText:"Sorter på flere",modalDialogButtonApplyText:"Søke om",modalDialogButtonCancelText:"Avbryt",sortingHiddenColumnNotSupport:"Den angitte kolonnen kunne ikke sorteres fordi den er skjult. Bruk metoden showColumn() før du prøver å sortere den.",featureChooserSortAsc:"Sorter stigende",featureChooserSortDesc:"Sorter synkende"};$.ig.GridSummaries=$.ig.GridSummaries||{};$.ig.locale.nb.GridSummaries={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",featureChooserText:"Skjul sammendrag",featureChooserTextHide:"Vis sammendrag",dialogButtonOKText:"OK",dialogButtonCancelText:"Avbryt",emptyCellText:"",summariesHeaderButtonTooltip:"Vis/skjul sammendrag",defaultSummaryRowDisplayLabelCount:"Telle",defaultSummaryRowDisplayLabelMin:"Min",defaultSummaryRowDisplayLabelMax:"Maks",defaultSummaryRowDisplayLabelSum:"Sum",defaultSummaryRowDisplayLabelAvg:"Gj.sn",defaultSummaryRowDisplayLabelCustom:"Tilpasset",calculateSummaryColumnKeyNotSpecified:"Kolonnenøkkel mangler. Enkolonnenøkkel bør spesifiseres for å beregne sammendrag.",featureChooserNotReferenced:"En referanse til Feature Chooser mangler. Inkluder infragistics.ui.grid.featurechooser.js i prosjektet ditt, eller bruk en av de kombinerte skriptfilene."};$.ig.GridUpdating=$.ig.GridUpdating||{};$.ig.locale.nb.GridUpdating={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",doneLabel:"Ferdig",doneTooltip:"Slutt å redigere og oppdatere",cancelLabel:"Avbryt",cancelTooltip:"Slutt å redigere uten å oppdatere",addRowLabel:"Legg til ny rad",addRowTooltip:"Begynn å legge til en ny rad",deleteRowLabel:"Slett rad",deleteRowTooltip:"Slett rad",igTextEditorException:"Det er foreløpig ikke mulig å oppdatere strengkolonner i rutenettet. ui.igTextEditor bør lastes først.",igNumericEditorException:"Det er foreløpig ikke mulig å oppdatere numeriske kolonner i rutenettet. ui.igNumericEditor bør lastes først.",igCheckboxEditorException:"Det er foreløpig ikke mulig å oppdatere avmerkingsbokskolonner i rutenettet. ui.igCheckboxEditor bør lastes først.",igCurrencyEditorException:"Det er foreløpig ikke mulig å oppdatere numeriske kolonner med valutaformat i rutenettet. ui.igCurrencyEditor bør lastes først.",igPercentEditorException:"Det er foreløpig ikke mulig å oppdatere numeriske kolonner med prosentformat i rutenettet. ui.igPercentEditor bør lastes først.",igDateEditorException:"Det er foreløpig ikke mulig å oppdatere datokolonner i rutenettet. ui.igDateEditor bør lastes først.",igDatePickerException:"Det er foreløpig ikke mulig å oppdatere datokolonner i rutenettet. ui.igDatePicker bør lastes først.",igTimePickerException:"Det er foreløpig ikke mulig å oppdatere datokolonner i rutenettet. ui.igTimePicker bør lastes først.",igComboException:"Det er for øyeblikket ikke mulig å bruke en kombinasjon i rutenettet. ui.igCombo bør lastes først.",igRatingException:"Det er foreløpig ikke mulig å bruke igRating som redaktør i rutenettet. ui.igRating bør lastes inn først.",igValidatorException:"Det er foreløpig ikke mulig å støtte validering med alternativene definert i igGridUpdating. ui.igValidator skal lastes inn først.",noPrimaryKeyException:"For å støtte oppdateringsoperasjoner etter at en rad ble slettet, bør programmet definere primaryKey i alternativer for igGrid.",hiddenColumnValidationException:"Kan ikke redigere rad som har en skjult kolonne med aktivert validering.",dataDirtyException:"Rutenettet har ventende transaksjoner som kan påvirke gjengivelse av data. For å forhindre unntak kan programmet aktivere autoCommit-alternativet til igGrid, eller det bør behandle dataDirty-hendelsen med igGridUpdating og returnere false. Mens du behandler denne hendelsen, kan programmet også commit() data i igGrid.",recordOrPropertyNotFoundException:"Den angitte posten eller eiendommen ble ikke funnet. Kontroller kriteriene for søket og juster dem om nødvendig.",rowUpdatingNotSupportedWithColumnVirtualization:'Oppdatering med editMode: "rad" krever en annen konfigurasjon. columnVirtualization bør deaktiveres.',rowEditDialogCaptionLabel:"Rediger raddata",excelNavigationNotSupportedWithCurrentEditMode:"Excel Navigasjon krever en annen konfigurasjon. editMode bør settes til 'cell' eller 'row'.",columnNotFound:"Den angitte kolonnenøkkelen ble ikke funnet i samlingen for de synlige kolonnene, eller den angitte indeksen var utenfor området.",rowOrColumnSpecifiedOutOfView:"Det er foreløpig ikke mulig å redigere den angitte raden eller kolonnen. Den skal være synlig på gjeldende side og virtualiseringsramme.",editingInProgress:"En rad eller celle redigeres for tiden. En annen oppdateringsprosedyre kan ikke starte før den nåværende redigeringen er fullført.",undefinedCellValue:"Udefinert kan ikke angis som en celleverdi.",addChildTooltip:"Legg til en barnerad",multiRowGridNotSupportedWithCurrentEditMode:"Når rutenettet har Multi-Row Layout aktivert, støttes bare redigeringsmodus for dialog.",virtualizationNotSupportedWithoutAutoCommit:" Aktivering av oppdatering og virtualisering mens autoCommit er satt til falsk, støttes ikke. Angi alternativet AutoCommit i rutenettet til true."};$.ig.CellMerging=$.ig.CellMerging||{};$.ig.locale.nb.CellMerging={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",mergeStrategyNotAFunction:"Den angitte mergeStrategien gjenkjennes ikke som en gyldig forhåndsdefinert verdi, eller en funksjon med dette navnet blir ikke funnet."};$.ig.ColumnMoving=$.ig.ColumnMoving||{};$.ig.locale.nb.ColumnMoving={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",movingDialogButtonApplyText:"Søke om",movingDialogButtonCancelText:"Avbryt",movingDialogCaptionButtonDesc:"Flytt ned",movingDialogCaptionButtonAsc:"Flytte opp",movingDialogCaptionText:"Flytt kolonner",movingDialogDisplayText:"Flytt kolonner",movingDialogDropTooltipText:"Flytt her",movingDialogCloseButtonTitle:"Lukk bevegelig dialog",dropDownMoveLeftText:"Gå til venstre",dropDownMoveRightText:"Flytt til høyre",dropDownMoveFirstText:"Flytt først",dropDownMoveLastText:"Flytt sist",featureChooserNotReferenced:"En referanse til Feature Chooser mangler. Inkluder infragistics.ui.grid.featurechooser.js i prosjektet ditt, eller bruk en av de kombinerte skriptfilene.",movingToolTipMove:"Bevege",featureChooserSubmenuText:"Flytte til",columnVirtualizationEnabled:"Kolonnebevegelse krever en annen virtualiseringsinnstilling. Bruk rowVirtualization eller sett virtualizationMode til 'continuous'."};$.ig.ColumnFixing=$.ig.ColumnFixing||{};$.ig.locale.nb.ColumnFixing={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",headerFixButtonText:"Rett opp denne kolonnen",headerUnfixButtonText:"Fjern fikseringen av denne kolonnen",featureChooserTextFixedColumn:"Fikser kolonne",featureChooserTextUnfixedColumn:"Unfikser kolonne",groupByNotSupported:"Kolonnefiksering krever en annen konfigurasjon. Group By-funksjonaliteten bør deaktiveres.",virtualizationNotSupported:"Kolonnefiksering krever en annen virtualiseringsinnstilling. rowVirtualization bør brukes i stedet.",columnVirtualizationNotSupported:"Kolonnefiksering krever en annen virtualiseringsinnstilling. columnVirtualization bør deaktiveres.",columnMovingNotSupported:"Kolonnefiksering krever en annen konfigurasjon. Kolonne-flytting bør deaktiveres.",hidingNotSupported:"Kolonnefiksering krever en annen konfigurasjon. Skjul-funksjonaliteten bør deaktiveres.",hierarchicalGridNotSupported:"igHierarchicalGrid støtter ikke kolonnefiksering. Kolonnefiksering bør deaktiveres.",responsiveNotSupported:"Kolonnefiksering krever en annen konfigurasjon. Responsiv funksjonalitet bør deaktiveres.",noGridWidthNotSupported:"Kolonnefiksering krever en annen konfigurasjon. Rutenettbredden bør angis enten som prosent eller som tall i piksler.",gridHeightInPercentageNotSupported:"Kolonnefiksering krever en annen konfigurasjon. Rutenetthøyden skal angis i piksler.",defaultColumnWidthInPercentageNotSupported:"Kolonnevirtualisering krever en annen rutenettbredde-konfigurasjon. Standard kolonnebredde bør angis som et tall i piksler.",columnsWidthShouldBeSetInPixels:"Kolonnefiksering krever en annen kolonnebreddeinnstilling. Bredden på kolonnen med nøkkelen {nøkkel} bør angis i piksler.",unboundColumnsNotSupported:"Kolonnefiksering krever en annen konfigurasjon. Ubundne kolonner bør deaktiveres.",excelNavigationNotSupportedWithCurrentEditMode:"Excel Navigasjon krever en annen konfigurasjon. editMode bør settes til 'cell' eller 'row'.",initialFixingNotApplied:"Første fikse kunne ikke brukes for kolonne med nøkkelen: {0}. Årsak: {1}",setOptionGridWidthException:"Feil verdi for alternativnettbredde. Når det er faste kolonner, må bredden på det synlige området til de ikke-fikserte kolonnene være større enn eller lik verdien til minimalVisibleAreaWidth.",noneError:"Nettkonfigurasjonen din er vellykket!",notValidIdentifierError:"Den angitte kolonnenøkkelen er ikke gyldig. Oppgi en kolonnenøkkel som samsvarer med nøkkelen til en av de definerte rutenettkolonnene.",fixingRefusedError:"Å fikse denne kolonnen støttes foreløpig ikke. Fjern fikseringen av en annen synlig kolonne, eller bruk showColumn()-metoden på en skjult ufikset kolonne først.",fixingRefusedMinVisibleAreaWidthError:"Denne kolonnen kan ikke fikses. Bredden overstiger den tilgjengelige plassen for å fikse en kolonne i rutenettet.",alreadyHiddenError:"Å fikse/fjerne denne kolonnen er for øyeblikket ikke mulig. ShowColumn()-metoden skal brukes i kolonnen først.",alreadyUnfixedError:"Denne kolonnen er allerede ikke fikset.",alreadyFixedError:"Denne kolonnen er allerede fikset.",unfixingRefusedError:"Å fjerne denne kolonnen er for øyeblikket ikke mulig. ShowColumn()-metoden bør brukes på en hvilken som helst skjult fast kolonne.",targetNotFoundError:"Målkolonnen med nøkkelen {key} ble ikke funnet. Kontroller nøkkelen som ble brukt for søket, og juster den om nødvendig."};$.ig.GridAppendRowsOnDemand=$.ig.GridAppendRowsOnDemand||{};$.ig.locale.nb.GridAppendRowsOnDemand={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",loadMoreDataButtonText:"Last inn mer data",appendRowsOnDemandRequiresHeight:"Append Rows On Demand krever en annen konfigurasjon. Rutenetthøyden skal angis.",groupByNotSupported:"Append Rows On Demand krever en annen konfigurasjon. Gruppe etter bør deaktiveres.",pagingNotSupported:"Append Rows On Demand krever en annen konfigurasjon. Paging skal deaktiveres.",cellMergingNotSupported:"Append Rows On Demand krever en annen konfigurasjon. Cellesammenslåing bør deaktiveres.",virtualizationNotSupported:"Append Rows On Demand krever en annen konfigurasjon. Virtualisering bør deaktiveres."};$.ig.igGridResponsive=$.ig.igGridResponsive||{};$.ig.locale.nb.igGridResponsive={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",fixedVirualizationNotSupported:'Responsive-funksjonaliteten krever en annen virtualiseringsinnstilling. virtualizationMode bør settes til "continuous".'};$.ig.igGridMultiColumnHeaders=$.ig.igGridMultiColumnHeaders||{};$.ig.locale.nb.igGridMultiColumnHeaders={optionChangeNotSupported:"{optionName} kan ikke redigeres etter initialisering. Verdien bør settes under initialisering.",multiColumnHeadersNotSupportedWithColumnVirtualization:"Overskrifter med flere kolonner krever en annen konfigurasjon. columnVirtualization bør deaktiveres.",cannotExpandMultiColumnHeader:"Fler-kolonne-overskrift overskrider maksimal tillatt bredde på fast område og kan derfor ikke utvides",atLeastOneColumnShouldBeShownWhenCollapseOrExpand:"Du bør ha minst én kolonne vist når du utvider eller skjuler en overskrift med flere kolonner.",collapsedColumnIconTooltip:"Utvide",expandedColumnIconTooltip:"Kollapse"};$.ig.Grid.locale=$.ig.Grid.locale||$.ig.locale.nb.Grid;$.ig.GridFiltering.locale=$.ig.GridFiltering.locale||$.ig.locale.nb.GridFiltering;$.ig.GridGroupBy.locale=$.ig.GridGroupBy.locale||$.ig.locale.nb.GridGroupBy;$.ig.GridHiding.locale=$.ig.GridHiding.locale||$.ig.locale.nb.GridHiding;$.ig.GridResizing.locale=$.ig.GridResizing.locale||$.ig.locale.nb.GridResizing;$.ig.GridPaging.locale=$.ig.GridPaging.locale||$.ig.locale.nb.GridPaging;$.ig.GridSelection.locale=$.ig.GridSelection.locale||$.ig.locale.nb.GridSelection;$.ig.GridRowSelectors.locale=$.ig.GridRowSelectors.locale||$.ig.locale.nb.GridRowSelectors;$.ig.GridSorting.locale=$.ig.GridSorting.locale||$.ig.locale.nb.GridSorting;$.ig.GridSummaries.locale=$.ig.GridSummaries.locale||$.ig.locale.nb.GridSummaries;$.ig.GridUpdating.locale=$.ig.GridUpdating.locale||$.ig.locale.nb.GridUpdating;$.ig.CellMerging.locale=$.ig.CellMerging.locale||$.ig.locale.nb.CellMerging;$.ig.ColumnMoving.locale=$.ig.ColumnMoving.locale||$.ig.locale.nb.ColumnMoving;$.ig.ColumnFixing.locale=$.ig.ColumnFixing.locale||$.ig.locale.nb.ColumnFixing;$.ig.GridAppendRowsOnDemand.locale=$.ig.GridAppendRowsOnDemand.locale||$.ig.locale.nb.GridAppendRowsOnDemand;$.ig.igGridResponsive.locale=$.ig.igGridResponsive.locale||$.ig.locale.nb.igGridResponsive;$.ig.igGridMultiColumnHeaders.locale=$.ig.igGridMultiColumnHeaders.locale||$.ig.locale.nb.igGridMultiColumnHeaders;$.ig.HierarchicalGrid.locale=$.ig.HierarchicalGrid.locale||$.ig.locale.nb.HierarchicalGrid;return $.ig.locale.nb});