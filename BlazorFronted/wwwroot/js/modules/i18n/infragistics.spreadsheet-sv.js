/*!@license
* Infragistics.Web.ClientUI infragistics.spreadsheet.js resources 23.2.20232.48
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.sv=$.ig.locale.sv||{};$.ig.locale.sv.spreadsheet=$.ig.locale.sv.spreadsheet||{};var l=$.ig.locale.sv.spreadsheet;l["CellBorderLineStyle_DashDot"]="StreckPrick";l["CellBorderLineStyle_DashDotDot"]="StreckPrickPrick";l["CellBorderLineStyle_Dashed"]="Streckad";l["CellBorderLineStyle_Default"]="Standard";l["CellBorderLineStyle_Dotted"]="Prickad";l["CellBorderLineStyle_Double"]="Dubbel";l["CellBorderLineStyle_Hair"]="Hårfin";l["CellBorderLineStyle_Medium"]="Medium";l["CellBorderLineStyle_MediumDashDot"]="MediumStreckPrick";l["CellBorderLineStyle_MediumDashDotDot"]="MediumStreckPrickPrick";l["CellBorderLineStyle_MediumDashed"]="MediumStreckad";l["CellBorderLineStyle_None"]="Ingen";l["CellBorderLineStyle_SlantedDashDot"]="LutadStreckPrick";l["CellBorderLineStyle_Thick"]="Tjock";l["CellBorderLineStyle_Thin"]="Tunn";l["CopyError_General_Message"]="Ett fel inträffade under kopieringsoperationen:\r\n{0}";l["CopyError_InvalidSelection_Message"]="Åtgärden kan inte utföras med det aktuella valet. Om det finns flera val, se till att de bildar en rektangulär region och inte överlappar varandra.";l["CustomValidationInformationMessage"]="{0}";l["CustomValidationStopMessage"]="{0}";l["CustomValidationWarningMessage"]="{0} Fortsätta?";l["DefaultAutoFilterToolTip"]="(Visar alla)";l["DefaultChartTitle"]="Diagramtitel";l["DefaultHyperlinkToolTip"]="{0} - Klicka en gång för att följa. Klicka och håll för att välja den här cellen.";l["DefaultValidationInformationMessage"]="Det angivna värdet är inte giltigt. En användare har begränsade värden som kan anges i den här cellen.";l["DefaultValidationStopMessage"]="Det angivna värdet är inte giltigt. En användare har begränsade värden som kan anges i den här cellen.";l["DefaultValidationWarningMessage"]="Det angivna värdet är inte giltigt. En användare har begränsade värden som kan anges i den här cellen. Fortsätta?";l["DeleteWorksheets_Message"]="Att radera ett kalkylblad kan inte ångras och du kan ta bort vissa data. Om du inte behöver det klickar du på Ok.";l["Error_ChangePartOfDataTableError_Message"]="Det går inte att ändra en del av en datatabell.";l["Error_DeletingLockedColumnCells_Message"]="Du försöker ta bort en kolumn som innehåller en låst cell. Låsta celler kan inte raderas medan kalkylbladet är skyddat.";l["Error_DeletingLockedRowCells_Message"]="Du försöker ta bort en rad som innehåller en låst cell. Låsta celler kan inte raderas medan kalkylbladet är skyddat.";l["Error_IntersectsMergedCells_Message"]="Åtgärden kan inte utföras eftersom valet skär med en sammanfogad cell.";l["Error_InvalidArrayFormulaLockedState_Message"]="Det går inte att ange en matrisformel i ett cellområde som inte alla är låsta eller olåsta.";l["Error_InvalidHyperlinkAddress_Message"]="Det går inte att öppna den angivna filen.";l["Error_InvalidHyperlinkReference_Message"]="Referens är inte giltig.";l["Error_InvalidProtectedWorksheetChange_Message"]="Cellen du försöker ändra finns på ett skyddat ark.";l["Error_InvalidSortOrFilterRange_Message"]="Denna åtgärd kan inte utföras inom det valda intervallet. Valet bör vara inom ett område med data och / eller formatering och bör inte innehålla tabeller och celler som inte är tabeller.";l["Error_LargeOperation_Message"]="Åtgärden du är på väg att utföra påverkar ett stort antal celler och kan ta lång tid att slutföra. Är du säker på att du vill fortsätta?";l["Error_LargePasteOperation_Message"]="Åtgärden du är på väg att utföra påverkar ett stort antal celler och kan ta lång tid att slutföra. Är du säker på att du vill fortsätta?";l["Error_NoSingleAllowedEditRange_Message"]="Några av cellerna du försöker ändra är lösenordsskyddade men inget enstaka lösenord ger åtkomst till alla celler.";l["ExcelComparisonOperator_BeginsWith_DisplayText"]="börjar med";l["ExcelComparisonOperator_Contains_DisplayText"]="innehåller";l["ExcelComparisonOperator_DoesNotBeginWith_DisplayText"]="börjar inte med";l["ExcelComparisonOperator_DoesNotContain_DisplayText"]="innehåller inte";l["ExcelComparisonOperator_DoesNotEndWith_DisplayText"]="slutar inte med";l["ExcelComparisonOperator_EndsWith_DisplayText"]="slutar med";l["ExcelComparisonOperator_Equals_DisplayText"]="är lika med";l["ExcelComparisonOperator_GreaterThan_DisplayText"]="är större än";l["ExcelComparisonOperator_GreaterThanOrEqual_DisplayText"]="är större än eller lika med";l["ExcelComparisonOperator_LessThan_DisplayText"]="är mindre än";l["ExcelComparisonOperator_LessThanOrEqual_DisplayText"]="är mindre än eller lika med";l["ExcelComparisonOperator_NotEqual_DisplayText"]="är inte lika med";l["ExcelTopOrBottomFilterDirection_Bottom_DisplayText"]="Botten";l["ExcelTopOrBottomFilterDirection_Top_DisplayText"]="Topp";l["ExcelTopOrBottomFilterTypes_Items_DisplayText"]="Objekt";l["ExcelTopOrBottomFilterTypes_Percent_DisplayText"]="Procent";l["FillPatternStyle_DiagonalCrosshatch"]="DiagonalKorsskuggning";l["FillPatternStyle_DiagonalStripe"]="DiagonalRand";l["FillPatternStyle_Gray12percent"]="Grå12procent";l["FillPatternStyle_Gray25percent"]="Grå25procent";l["FillPatternStyle_Gray50percent"]="Grå50procent";l["FillPatternStyle_Gray6percent"]="Grå6procent";l["FillPatternStyle_Gray75percent"]="Grå75procent";l["FillPatternStyle_HorizontalStripe"]="HorisontellRand";l["FillPatternStyle_None"]="Ingen";l["FillPatternStyle_ReverseDiagonalStripe"]="BakvändDiagonalRand";l["FillPatternStyle_Solid"]="Fast";l["FillPatternStyle_ThickDiagonalCrosshatch"]="TjockDiagonalKorsskuggning";l["FillPatternStyle_ThinDiagonalCrosshatch"]="TunnDiagonalKorsskuggning";l["FillPatternStyle_ThinDiagonalStripe"]="TunnDiagonalRand";l["FillPatternStyle_ThinHorizontalCrosshatch"]="TunnHorisontellKorsskuggning";l["FillPatternStyle_ThinHorizontalStripe"]="TunnHorisontellRand";l["FillPatternStyle_ThinReverseDiagonalStripe"]="TunnBakvändDiagonalRand";l["FillPatternStyle_ThinVerticalStripe"]="TunnVertikalRand";l["FillPatternStyle_VerticalStripe"]="VertikalRand";l["FilterDescription_AboveAverage"]="Över medel";l["FilterDescription_BelowAverage"]="Under medel";l["FilterDescription_BottomItems"]="Nedre {0} objekt";l["FilterDescription_BottomPercent"]="Nedre {0} Procent";l["FilterDescription_CellFill_Named"]="Motsvarar en {0} cellfärg";l["FilterDescription_CellFill_NoFill"]="Motsvarar en cellfärg (Ingen fyllning)";l["FilterDescription_CellFill_Unknown"]="Motsvarar en cellfärg";l["FilterDescription_ComparisonItem_BeginsWith"]='Börjar med "{0}"';l["FilterDescription_ComparisonItem_Contains"]='Innehåller "{0}"';l["FilterDescription_ComparisonItem_DoesNotBeginWith"]='Börjar inte med "{0}"';l["FilterDescription_ComparisonItem_DoesNotContain"]='Innehåller inte "{0}"';l["FilterDescription_ComparisonItem_DoesNotEndWith"]='Slutar inte med "{0}"';l["FilterDescription_ComparisonItem_EndsWith"]='Slutar med "{0}"';l["FilterDescription_ComparisonItem_Equals"]='Lika med "{0}"';l["FilterDescription_ComparisonItem_GreaterThan"]='Större än "{0}"';l["FilterDescription_ComparisonItem_GreaterThanOrEqual"]='Större än eller lika med "{0}"';l["FilterDescription_ComparisonItem_LessThan"]='Mindre än "{0}"';l["FilterDescription_ComparisonItem_LessThanOrEqual"]='Mindre än eller lika med "{0}"';l["FilterDescription_ComparisonItem_NotEqual"]='Är inte lika med "{0}"';l["FilterDescription_Custom_And"]="{0} och {1}";l["FilterDescription_Custom_Or"]="{0} eller {1}";l["FilterDescription_FixedValues"]='Lika med "{0}"';l["FilterDescription_FixedValues_Blanks"]="(Tomt)";l["FilterDescription_FixedValues_Day"]="{0: MMMM dd åååå}";l["FilterDescription_FixedValues_Hour"]="{0: MMMM dd åååå t tt}";l["FilterDescription_FixedValues_Minute"]="{0: MMMM dd åååå t: mm tt}";l["FilterDescription_FixedValues_Month"]="{0: MMMM åååå}";l["FilterDescription_FixedValues_Second"]="{0: MMMM dd åååå t: mm: ss tt}";l["FilterDescription_FixedValues_Year"]="Hela {0: åååå}";l["FilterDescription_FontColor_Automatic"]="Motsvarar teckensnittsfärg (automatisk)";l["FilterDescription_FontColor_Named"]="Motsvarar en {0} teckensnittsfärg";l["FilterDescription_FontColor_Unknown"]="Motsvarar en teckensnittsfärg";l["FilterDescription_MonthNumber"]='Lika med "{0}"';l["FilterDescription_NoCellIcon"]="Motsvarar en cellikon (Ingen cellikon)";l["FilterDescription_QuarterNumber"]="Motsvarar \"kvartal {0}'";l["FilterDescription_RelativeDate_CurrentDay"]='Motsvarar "Idag"';l["FilterDescription_RelativeDate_CurrentMonth"]='Motsvarar "Denna månad"';l["FilterDescription_RelativeDate_CurrentQuarter"]='Motsvarar "Detta kvartal"';l["FilterDescription_RelativeDate_CurrentWeek"]='Motsvarar "Denna vecka"';l["FilterDescription_RelativeDate_CurrentYear"]='Motsvarar "Detta år"';l["FilterDescription_RelativeDate_NextDay"]='Motsvarar "I morgon"';l["FilterDescription_RelativeDate_NextMonth"]='Motsvarar "Nästa månad"';l["FilterDescription_RelativeDate_NextQuarter"]='Motsvarar "Nästa kvartal"';l["FilterDescription_RelativeDate_NextWeek"]='Motsvarar "Nästa vecka"';l["FilterDescription_RelativeDate_NextYear"]='Motsvarar "Nästa år"';l["FilterDescription_RelativeDate_PreviousDay"]='Motsvarar "Igår"';l["FilterDescription_RelativeDate_PreviousMonth"]='Motsvarar "Förra månaden"';l["FilterDescription_RelativeDate_PreviousQuarter"]='Motsvarar "Sista kvartalet"';l["FilterDescription_RelativeDate_PreviousWeek"]='Motsvarar "Förra veckan"';l["FilterDescription_RelativeDate_PreviousYear"]='Motsvarar "Förra året"';l["FilterDescription_TopItems"]="Topp {0} objekt";l["FilterDescription_TopPercent"]="Topp {0} procent";l["FilterDescription_WithCellIcon"]="Motsvarar en {0}";l["FilterDescription_YearToDate"]='Motsvarar "År till datum"';l["FilterDialog_And"]="Och(_A)";l["FilterDialog_AsteriskHint"]="Använd * för att representera alla serier av tecken";l["FilterDialog_Cancel"]="Avbryt";l["FilterDialog_OK"]="OK";l["FilterDialog_Or"]="Eller(_O)";l["FilterDialog_QuestionMarkHint"]="Använd ? för att representera något enskilt tecken";l["FilterDialog_ShowRowsWhere"]="Visa rader där:";l["FilterDialog_Title"]="Anpassat AutoFilter";l["FormatCellsDialog_AlignmentTab_Text_Horizontal"]="Horisontell(_H)";l["FormatCellsDialog_AlignmentTab_Text_Indent"]="Indrag";l["FormatCellsDialog_AlignmentTab_Text_JustifyDistributed"]="Motivera distribuerat";l["FormatCellsDialog_AlignmentTab_Text_MergeCells"]="Sammanfoga celler(_M)";l["FormatCellsDialog_AlignmentTab_Text_RightToLeft"]="Höger till vänster";l["FormatCellsDialog_AlignmentTab_Text_ShrinkToFit"]="Krymp för att passa(_k)";l["FormatCellsDialog_AlignmentTab_Text_TextAlignment"]="Textjustering";l["FormatCellsDialog_AlignmentTab_Text_TextControl"]="Textkontroll";l["FormatCellsDialog_AlignmentTab_Text_TextDirection"]="Textriktning(_T)";l["FormatCellsDialog_AlignmentTab_Text_Vertical"]="Vertikal(_V)";l["FormatCellsDialog_AlignmentTab_Text_WrapText"]="Wrap Text(_W)";l["FormatCellsDialog_AlignmentTabCaption"]="Inriktning";l["FormatCellsDialog_BorderTab_Text_Border"]="Gräns";l["FormatCellsDialog_BorderTab_Text_Color"]="Färg(_C)";l["FormatCellsDialog_BorderTab_Text_Description"]="Den valda kantstilen kan användas genom att klicka på förinställningarna eller knapparna runt förhandsgranskningsdiagrammet.";l["FormatCellsDialog_BorderTab_Text_Line"]="Linje";l["FormatCellsDialog_BorderTab_Text_PresetInside"]="Innanför(_I)";l["FormatCellsDialog_BorderTab_Text_PresetNone"]="Ingen(_N)";l["FormatCellsDialog_BorderTab_Text_PresetOutline"]="Kantlinje(_O)";l["FormatCellsDialog_BorderTab_Text_Presets"]="Förinställningar";l["FormatCellsDialog_BorderTab_Text_SampleText"]="Text";l["FormatCellsDialog_BorderTab_Text_Style"]="Stil(_S)";l["FormatCellsDialog_BorderTabCaption"]="Gräns";l["FormatCellsDialog_Cancel"]="Avbryt";l["FormatCellsDialog_FillTab_Text_BackgroundColor"]="Bakgrundsfärg(_C)";l["FormatCellsDialog_FillTab_Text_PatternColor"]="Mönsterfärg(_a)";l["FormatCellsDialog_FillTab_Text_PatternStyle"]="Mönsterstil:(_P)";l["FormatCellsDialog_FillTab_Text_Sample"]="Prov";l["FormatCellsDialog_FillTabCaption"]="Fyll";l["FormatCellsDialog_FontTabCaption"]="Teckensnitt";l["FormatCellsDialog_NumberTab_CategoryLabel"]="Kategori(_C)";l["FormatCellsDialog_NumberTab_DateFormatMasks"]="m / d / åååå\r\n[$ -F800] dddd, mmmm dd, åååå\r\nm / d; @\r\nm / d / åå; @\r\nmm / dd / åå; @\r\n[$ -409] d-mmm; @";l["FormatCellsDialog_NumberTab_DecimalPlaces"]="Decimalplatser:(_D)";l["FormatCellsDialog_NumberTab_SampleLabel"]="Prov";l["FormatCellsDialog_NumberTab_TimeFormatMasks"]="[$ -F400] t: mm: ss AM / PM\r\nt: mm; @\r\n[$ -409] t: mm AM / PM; @\r\nt: mm: ss; @\r\n[$ -409] t: mm: ss AM / PM; @";l["FormatCellsDialog_NumberTabCaption"]="Nummer";l["FormatCellsDialog_NumberTabInvalidMaskError"]="Den angivna formatmasken '{0}' är inte giltig.";l["FormatCellsDialog_OK"]="OK";l["FormatCellsDialog_ProtectionTab_Text_Hidden"]="Dold (_I)";l["FormatCellsDialog_ProtectionTab_Text_Locked"]="Låst(_L)";l["FormatCellsDialog_ProtectionTab_Text_Summary"]="Att låsa celler eller dölja formler har ingen effekt förrän du skyddar kalkylbladet.";l["FormatCellsDialog_ProtectionTabCaption"]="Skydd";l["FormatCellsDialog_Title"]="Formatera celler";l["FormatInfo_Accounting"]="Bokföring";l["FormatInfo_Accounting_NumberFormat_Description"]="Bokföringsformat radar upp valutasymboler och decimaler i en kolumn.";l["FormatInfo_BlankDocument"]="Tomt dokument";l["FormatInfo_Currency"]="Valuta";l["FormatInfo_Currency_NumberFormat_Description"]="Valutaformat används för allmänna monetära värden. Använd redovisningsformat för att justera decimaler i en kolumn.";l["FormatInfo_Custom"]="Anpassad";l["FormatInfo_Custom_NumberFormat_Description"]="Skriv nummerformatkoden med en av de befintliga koderna som utgångspunkt.";l["FormatInfo_Date"]="Datum";l["FormatInfo_Date_NumberFormat_Description"]="Datumformat visar serienummer för datum och tid som datumvärden. Datumformat som börjar med en asterisk (*) svarar på ändringar i regionala datum- och tidsinställningar som anges för operativsystemet. Format utan asterisk påverkas inte av operativsystemets inställningar.";l["FormatInfo_FormatHeader_NegativeNumbers"]="Negativa siffror:";l["FormatInfo_FormatHeader_Type"]="Typ:";l["FormatInfo_Fraction"]="Fraktion";l["FormatInfo_Fraction_Eighths"]="Som åttondelar (4/8)";l["FormatInfo_Fraction_Halves"]="Som halvor (1/2)";l["FormatInfo_Fraction_Hundreths"]="Som hundradelar(30/100)";l["FormatInfo_Fraction_OneDigit"]="Upp till en siffra (1/4)";l["FormatInfo_Fraction_Quarters"]="Som kvartal (2/4)";l["FormatInfo_Fraction_Sixteenths"]="Som sextondelar (8/16)";l["FormatInfo_Fraction_Tenths"]="Som tiondelar (3/10)";l["FormatInfo_Fraction_ThreeDigits"]="Upp till tre siffror (312/943)";l["FormatInfo_Fraction_TwoDigits"]="Upp till två siffror (21/25)";l["FormatInfo_General"]="Allmän";l["FormatInfo_General_NumberFormat_Description"]="Celler med allmänt format har inget specifikt nummerformat.";l["FormatInfo_Number"]="Nummer";l["FormatInfo_Number_NumberFormat_Description"]="Nummer används för allmän visning av nummer. Valuta och Bokföring erbjuder speciell formatering för monetärt värde.";l["FormatInfo_Percentage"]="Procentsats";l["FormatInfo_Percentage_NumberFormat_Description"]="Procentformat multiplicerar cellvärdet med 100 och visar resultatet med en procentsymbol.";l["FormatInfo_ProjectBudget"]="Projektbudget";l["FormatInfo_Scientific"]="Vetenskaplig";l["FormatInfo_Special"]="Speciell";l["FormatInfo_Special_NumberFormat_Description"]="Specialformat är användbara för spårning av list- och databasvärden.";l["FormatInfo_Special_PhoneNumber"]="Telefonnummer";l["FormatInfo_Special_SocialSecurityNumber"]="Personnummer";l["FormatInfo_Special_ZipCode"]="Postnummer";l["FormatInfo_Special_ZipCodePlus4"]="Postnummer + 4";l["FormatInfo_Text"]="Text";l["FormatInfo_Text_NumberFormat_Description"]="Textformatceller behandlas som text även när ett nummer finns i cellen. Cellen visas exakt som angiven.";l["FormatInfo_Time"]="Tid";l["FormatInfo_Time_NumberFormat_Description"]="Tidsformat visar datum- och tidsserienummer som datumvärden. Tidsformat som börjar med en asterisk (*) svarar på ändringar i regionala datum- och tidsinställningar som anges för operativsystemet. Format utan asterisk påverkas inte av operativsystemets inställningar.";l["HorizontalCellAlignment_Center"]="Centrum";l["HorizontalCellAlignment_CenterAcrossSelection"]="CentreraÖverUrval";l["HorizontalCellAlignment_Default"]="Standard";l["HorizontalCellAlignment_Distributed"]="Distribuerad";l["HorizontalCellAlignment_Fill"]="Fylla";l["HorizontalCellAlignment_General"]="Allmän";l["HorizontalCellAlignment_Justify"]="Motivera";l["HorizontalCellAlignment_Left"]="Vänster";l["HorizontalCellAlignment_Right"]="Höger";l["Icon_BlackCircle"]="Svart cirkel";l["Icon_BlackCircleWithBorder"]="Svart cirkel med kant";l["Icon_CircleWithOneWhiteQuarter"]="Cirkel med en vit fjärdedel";l["Icon_CircleWithThreeWhiteQuarters"]="Cirkel med tre vita fjärdedelar";l["Icon_CircleWithTwoWhiteQuarters"]="Cirkel med två vita fjärdedelar";l["Icon_FourBars"]="Signalmätare med fyra fyllda staplar";l["Icon_FourFilledBoxes"]="Fyra fyllda lådor";l["Icon_GoldStar"]="Guldstjärna";l["Icon_GrayCircle"]="Grå cirkel";l["Icon_GrayDownArrow"]="Grå nedåtpil";l["Icon_GrayDownInclineArrow"]="Lutad grå nedåtpil";l["Icon_GraySideArrow"]="Grå sidopil";l["Icon_GrayUpArrow"]="Grå pil upp";l["Icon_GrayUpInclineArrow"]="Lutad grå pil upp";l["Icon_GreenCheck"]="Grön bock";l["Icon_GreenCheckSymbol"]="Grön bock-symbol";l["Icon_GreenCircle"]="Grön cirkel";l["Icon_GreenFlag"]="Grön flagga";l["Icon_GreenTrafficLight"]="Grönt trafikljus";l["Icon_GreenUpArrow"]="Grön pil upp";l["Icon_GreenUpTriangle"]="Grön upp-triangel";l["Icon_HalfGoldStar"]="Halv guldstjärna";l["Icon_OneBar"]="Signalmätare med en fylld stapel";l["Icon_OneFilledBox"]="En fylld låda";l["Icon_PinkCircle"]="Rosa cirkel";l["Icon_RedCircle"]="Röd cirkel";l["Icon_RedCircleWithBorder"]="Röd cirkel med kant";l["Icon_RedCross"]="Rött kors";l["Icon_RedCrossSymbol"]="Röd korssymbol";l["Icon_RedDiamond"]="Röd diamant";l["Icon_RedDownArrow"]="Röd nedåtpil";l["Icon_RedDownTriangle"]="Röd ned-triangel";l["Icon_RedFlag"]="Röd flagga";l["Icon_RedTrafficLight"]="Rött trafikljus";l["Icon_SilverStar"]="Silverstjärna";l["Icon_ThreeBars"]="Signalmätare med tre fyllda staplar";l["Icon_ThreeFilledBoxes"]="Tre fyllda lådor";l["Icon_TwoBars"]="Signalmätare med två fyllda staplar";l["Icon_TwoFilledBoxes"]="Två fyllda lådor";l["Icon_WhiteCircleAllWhiteQuarters"]="Vit cirkel (alla fjärdedelar vita)";l["Icon_YellowCircle"]="Gul cirkel";l["Icon_YellowDash"]="Gult streck";l["Icon_YellowDownInclineArrow"]="Lutad gul nedåtpil";l["Icon_YellowExclamation"]="Gult utropstecken";l["Icon_YellowExclamationSymbol"]="Gul utropssymbol";l["Icon_YellowFlag"]="Gul flagga";l["Icon_YellowSideArrow"]="Gul sidopil";l["Icon_YellowTrafficLight"]="Gult trafikljus";l["Icon_YellowTriangle"]="Gul triangel";l["Icon_YellowUpInclineArrow"]="Lutad gul pil upp";l["Icon_ZeroBars"]="Signalmätare utan fyllda staplar";l["Icon_ZeroFilledBoxes"]="Noll fyllda lådor";l["InvalidCommand_MixedSelection_Message"]="Det kommandot kan inte användas med markeringar som innehåller en blandning av hela rader / kolumner med andra celler. Försök bara välja hela rader, bara hela kolumner eller bara grupper av celler.";l["InvalidCommand_MultipleSelection_Message"]="Det kommandot kan inte användas med flera val. Välj ett enda område och anropa kommandot igen.";l["InvalidCommand_OverlappingSelection_Message"]="Kan inte använda det kommandot för överlappande val.";l["InvalidCommand_TableChangeWithMultipleSheetSelection_Message"]="Det går inte att göra ändringar i en tabell när flera blad har valts.";l["InvalidDateTimeToolTip"]="Datum och tider som är negativa eller för stora visas som #####.";l["InvalidNameBoxValue_Message"]="Du måste ange en giltig referens som du vill gå till eller skriva ett giltigt namn för valet.";l["LE_MissingTemplatePart"]="En malldel med namnet '{0}' och typ '{1}' krävs i '{2}' - mallen.";l["MenuItem_AllDatesInPeriod"]="Alla datum från perioden(_P)";l["MenuItem_AutoFit_Columns"]="AutoFit kolumnbredd(_A)";l["MenuItem_AutoFit_Rows"]="AutoFit radhöjd(_A)";l["MenuItem_Automatic"]="Automatisk";l["MenuItem_ClearContents"]="Rensa innehåll(_n)";l["MenuItem_ClearFilterEmpty"]="Rensa filter(_e)";l["MenuItem_ClearFilterForColumn"]='Rensa filter från "{0}" (_E)';l["MenuItem_ColorValue"]="RGB ({0}, {1}, {2})";l["MenuItem_ConvertTableToRange"]="Konvertera till intervall(_v)";l["MenuItem_Copy"]="Kopiera(_C)";l["MenuItem_Cut"]="Skära";l["MenuItem_DateFilters"]="Datumfilter(_F)";l["MenuItem_Delete"]="Radera(_D)";l["MenuItem_DeleteCells"]="Radera(_D)";l["MenuItem_DeleteCells_Column"]="Hela kolumnen(_c)";l["MenuItem_DeleteCells_DeleteTableColumns"]="Tabellkolumner (_C)";l["MenuItem_DeleteCells_DeleteTableRows"]="Tabellrader(_R)";l["MenuItem_DeleteCells_Row"]="Hela raden(_r)";l["MenuItem_DeleteCells_ShiftLeft"]="Skifta celler vänster(_l)";l["MenuItem_DeleteCells_ShiftUp"]="Skifta celler uppåt(_u)";l["MenuItem_DeleteWorksheets"]="Radera(_D)";l["MenuItem_Filter"]="Filtrera(_e)";l["MenuItem_Filter_AboveAverage"]="Över medel(_A)";l["MenuItem_Filter_After"]="Efter…(_A)";l["MenuItem_Filter_Before"]="Innan…(_B)";l["MenuItem_Filter_BeginsWith"]="Börjar med…(_i)";l["MenuItem_Filter_BelowAverage"]="Under medel(_o)";l["MenuItem_Filter_Between"]="Mellan…(_w)";l["MenuItem_Filter_Contains"]="Innehåller…(_a)";l["MenuItem_Filter_Custom"]="Anpassat filter…(_F)";l["MenuItem_Filter_Day_Current"]="I dag(_o)";l["MenuItem_Filter_Day_Next"]="I morgon(_T)";l["MenuItem_Filter_Day_Previous"]="I går(_d)";l["MenuItem_Filter_DoesNotContain"]="Innehåller inte…(_D)";l["MenuItem_Filter_EndsWith"]="Slutar med…(_t)";l["MenuItem_Filter_Equals"]="Är lika med…";l["MenuItem_Filter_GreaterThan"]="Större än…(_G)";l["MenuItem_Filter_GreaterThanOrEqual"]="Större än eller lika med…(_O)";l["MenuItem_Filter_LessThan"]="Mindre än…(_L)";l["MenuItem_Filter_LessThanOrEqual"]="Mindre än eller lika med…(_q)";l["MenuItem_Filter_Month_Current"]="Den här månaden(_s)";l["MenuItem_Filter_Month_Next"]="Nästa månad(_M)";l["MenuItem_Filter_Month_Previous"]="Förra månaden(_n)";l["MenuItem_Filter_NotEqual"]="Är inte lika med…(_N)";l["MenuItem_Filter_Quarter_Current"]="Detta kvartal(_u)";l["MenuItem_Filter_Quarter_Next"]="Nästa kvartal(_Q)";l["MenuItem_Filter_Quarter_Previous"]="Senaste kvartalet(_r)";l["MenuItem_Filter_QuarterNumber"]="Kvartal _ {0}";l["MenuItem_Filter_Top10"]="Topp 10…(_T)";l["MenuItem_Filter_Week_Current"]="Denna vecka(_h)";l["MenuItem_Filter_Week_Next"]="Nästa vecka(_k)";l["MenuItem_Filter_Week_Previous"]="Förra veckan(_L)";l["MenuItem_Filter_Year_Current"]="Det här året(_i)";l["MenuItem_Filter_Year_Next"]="Nästa år(_x)";l["MenuItem_Filter_Year_Previous"]="Förra året(_Y)";l["MenuItem_Filter_YearToDate"]="År till datum(_a)";l["MenuItem_FilterByCellColor"]="Filtrera efter den valda cellens färg(_C)";l["MenuItem_FilterByCellFontColor"]="Filtrera efter den valda cellens teckensnittfärg(_F)";l["MenuItem_FilterByCellIcon"]="Filtrera efter den valda cellens ikon(_I)";l["MenuItem_FilterByCellValue"]="Filtrera efter den valda cellens värde(_V)";l["MenuItem_FilterByColor"]="Filtrera efter färg(_i)";l["MenuItem_FilterByFontColor"]="Filtrera efter teckensnittsfärg(_F)";l["MenuItem_FilterByIcon"]="Filtrera efter ikon för villkorlig formatering(_I)";l["MenuItem_GradientFill"]="Lutning";l["MenuItem_Hide"]="Dölj(_H)";l["MenuItem_Insert"]="Infoga(_I)";l["MenuItem_InsertCells"]="Infoga(_I)";l["MenuItem_InsertCells_AddTableColumn"]="Tabellkolumner till höger(_R)";l["MenuItem_InsertCells_AddTableRow"]="Tabellrader under(_B)";l["MenuItem_InsertCells_Column"]="Hela kolumnen(_c)";l["MenuItem_InsertCells_InsertTableColumns"]="Tabellkolumner till vänster(_L)";l["MenuItem_InsertCells_InsertTableRows"]="Tabellrader ovanför(_A)";l["MenuItem_InsertCells_Row"]="Hela raden(_r)";l["MenuItem_InsertCells_ShiftDown"]="Skifta celer nedåt(_d)";l["MenuItem_InsertCells_ShiftRight"]="Skifta celler höger(_i)";l["MenuItem_InsertWorksheets"]="Infoga(_I)";l["MenuItem_NoFill"]="Ingen fyllning";l["MenuItem_NoIcon"]="Ingen ikon";l["MenuItem_NumberFilters"]="Nummerfilter(_F)";l["MenuItem_OpenHyperlink"]="Öppna hyperlänk(_O)";l["MenuItem_Paste"]="Klistra(_P)";l["MenuItem_PickFromDropDownList"]="Välj från listrutan…(_k)";l["MenuItem_ReapplyFilter"]="Applicera igen(_R)";l["MenuItem_RemoveHyperlink"]="Ta bort hyperlänk(_R)";l["MenuItem_RemoveHyperlinks"]="Ta bort hyperlänkar(_R)";l["MenuItem_RenameWorksheet"]="Döp om(_R)";l["MenuItem_Select"]="Välj(_l)";l["MenuItem_Select_SelectEntireTableColumn"]="Hela tabellkolumnen(_E)";l["MenuItem_Select_SelectTableColumnData"]="Tabellkolumndata(_C)";l["MenuItem_Select_SelectTableRow"]="Tabellrad(_R)";l["MenuItem_SelectAllWorksheets"]="Välj alla blad(_S)";l["MenuItem_ShowFormatCellsDialog"]="Formatera celler…(_F)";l["MenuItem_Sort"]="Sortera(_o)";l["MenuItem_Sort_Custom"]="Anpassad sortering…(_u)";l["MenuItem_SortAscending_Date"]="Sortera äldsta till nyaste(_S)";l["MenuItem_SortAscending_Number"]="Sortera minsta till största(_S)";l["MenuItem_SortAscending_Text"]="Sortera A till Z(_S)";l["MenuItem_SortByCellColor"]="Sätt vald cellfärg ovanför(_C)";l["MenuItem_SortByCellColorHeader"]="Sortera efter cellfärg(_C)";l["MenuItem_SortByCellFontColor"]="Sätt markerad teckensnittfärg ovanför(_F)";l["MenuItem_SortByCellIcon"]="Sätt vald ikon ovanför(_I)";l["MenuItem_SortByColor"]="Sortera efter färg(_t)";l["MenuItem_SortByFontColor"]="Sortera efter teckensnittsfärg(_F)";l["MenuItem_SortByIcon"]="Sortera efter ikon för villkorlig formatering(_I)";l["MenuItem_SortDescending_Date"]="Sortera nyaste till äldsta(_o)";l["MenuItem_SortDescending_Number"]="Sortera största till minsta(_o)";l["MenuItem_SortDescending_Text"]="Sortera Z till A(_o)";l["MenuItem_Table"]="Tabell(_b)";l["MenuItem_TextFilters"]="Textfilter(_F)";l["MenuItem_ToggleTableTotalRow"]="Radtotal(_T)";l["MenuItem_Unhide"]="Sluta dölja(_U)";l["MenuItem_UnselectWorksheets"]="Avgruppera blad(_U)";l["NewSheetName"]="Blad {0}";l["PasteError_CellRangeSize_Message"]="Klistra in-operationen kan inte utföras eftersom kopieringsområdet och klistra-området inte har samma storlek.\r\nFörsök med något av följande:\r\n* Klicka på en cell och klistra sedan in\r\n* Välj en rektangel av samma storlek och klistra in.";l["PasteError_General_Message"]="Ett fel inträffade under klistra in-operationen:\r\n{0}";l["PasteError_IntersectsMergedCells_Message"]="Klistra in-operationen kan inte utföras eftersom klistra-området skär med en sammanfogad cell.";l["PasteError_InvalidSelectedSheetCount_Message"]="Klistra in-operationen kan inte utföras eftersom antalet kalkylblad i kopierings- och klistraområdena inte har samma storlek.";l["PasteError_InvalidSourceRanges_Message"]="Klistra in kan inte utföras på de angivna kopieringsområdena.";l["PasteError_MultipleSheetTables_Message"]="Klistra in-operationen kan inte utföras eftersom källan hade flera kalkylblad och det finns tabeller i källvalet.";l["PasteError_MultipleSourceAndTargetRanges_Message"]="Klistra in kan inte utföras eftersom det finns flera val i käll- och målblad.";l["SheetNameError_Message_Invalid"]="Du har angett ett ogiltigt namn '{0}' för bladet. Se till att:\r\n* Namnet inte är tomt.\r\n* Det finns högst 31 tecken i namnet.\r\n* Namnet inte börjar eller slutar med ett enkelt citattecken (').\r\n* Namnet inte innehåller något av följande tecken: : \\ /? * []";l["SheetNameError_Message_NameIsUsed"]="Ett kalkylblad med namnet '{0}' finns redan i arbetsboken.";l["SortDialog_AddLevel"]="Lägg till nivå(_A)";l["SortDialog_Cancel"]="Avbryt";l["SortDialog_CellFill_Gradient"]="Lutning";l["SortDialog_CellFill_NoColor"]="Ingen färg";l["SortDialog_Color_RGB"]="RGB ({0}, {1}, {2})";l["SortDialog_Column_ColumnHeader"]="Kolumn";l["SortDialog_ColumnName"]="Kolumn {0}";l["SortDialog_ConditionalFormatIcon_NoCellIcon"]="Ingen cellikon";l["SortDialog_CopyLevel"]="Kopiera nivå(_C)";l["SortDialog_DeleteLevel"]="Radera nivå(_D)";l["SortDialog_MoveDown"]="Flytta ner";l["SortDialog_MoveUp"]="Flytta upp";l["SortDialog_MyDataHasHeaders"]="Min data har rubriker(_h)";l["SortDialog_OK"]="OK";l["SortDialog_Options"]="Alternativ…(_O)";l["SortDialog_Order_ColumnHeader"]="Ordning";l["SortDialog_Row_ColumnHeader"]="Rad";l["SortDialog_RowName"]="Rad {0}";l["SortDialog_SortBy_Label"]="Sortera efter";l["SortDialog_SortConditionError_DuplicateItemSorted"]="Duplicerade sorteringsförhållanden upptäcktes.";l["SortDialog_SortConditionError_FieldCannotBeNull"]="Fält för sorteringsvillkor: '{0}' kan inte vara null";l["SortDialog_SortDirection_CustomList"]="Anpassad lista ...";l["SortDialog_SortDirection_Date_Ascending"]="Äldsta till nyaste";l["SortDialog_SortDirection_Date_Descending"]="Nyaste till äldsta";l["SortDialog_SortDirection_Number_Ascending"]="Minsta till största";l["SortDialog_SortDirection_Number_Descending"]="Största till minsta";l["SortDialog_SortDirection_Text_Ascending"]="A till Z";l["SortDialog_SortDirection_Text_Descending"]="Z till A";l["SortDialog_SortDirectionLeftOrRight_Ascending"]="Till vänster";l["SortDialog_SortDirectionLeftOrRight_Descending"]="Till höger";l["SortDialog_SortDirectionTopOrBottom_Ascending"]="Överst";l["SortDialog_SortDirectionTopOrBottom_Descending"]="På botten";l["SortDialog_SortOn_ColumnHeader"]="Sortera på";l["SortDialog_Text_Automatic"]="Automatisk";l["SortDialog_ThenBy_Label"]="Sedan efter";l["SortDialog_Title"]="Sortera";l["SortOptionsDialog_Cancel"]="Avbryt";l["SortOptionsDialog_CaseSensitive"]="Skriftlägeskänsligt(_C)";l["SortOptionsDialog_OK"]="OK";l["SortOptionsDialog_Orientation"]="Orientering";l["SortOptionsDialog_SortLeftToRight"]="Sortera vänster till höger(_l)";l["SortOptionsDialog_SortTopToBottom"]="Sortera från topp till botten(_t)";l["SortOptionsDialog_Title"]="Sorteringsalternativ";l["SpreadsheetFontControl_ColorLabel"]="Färg:(_C)";l["SpreadsheetFontControl_FontLabel"]="Teckensnitt:(_F)";l["SpreadsheetFontControl_FontStyle_Bold"]="Fetstilt";l["SpreadsheetFontControl_FontStyle_BoldItalic"]="Fet kursiv";l["SpreadsheetFontControl_FontStyle_Italic"]="Kursiv";l["SpreadsheetFontControl_FontStyle_Regular"]="Vanlig";l["SpreadsheetFontControl_FontStyleLabel"]="Typsnitt:(_o)";l["SpreadsheetFontControl_NormalFontLabel"]="Normalt teckensnitt(_N)";l["SpreadsheetFontControl_SizeLabel"]="Storlek:(_S)";l["SpreadsheetFontControl_StrikethroughLabel"]="Genomstrykning(_k)";l["SpreadsheetFontControl_SubscriptLabel"]="Index(_b)";l["SpreadsheetFontControl_SuperscriptLabel"]="Exponent(_p)";l["SpreadsheetFontControl_Text_Automatic"]="Automatisk";l["SpreadsheetFontControl_Text_Effects"]="Effekter";l["SpreadsheetFontControl_Text_NoColor"]="Ingen färg";l["SpreadsheetFontControl_Text_Preview"]="Förhandsvisning";l["SpreadsheetFontControl_UnderlineLabel"]="Understrykning:(_U)";l["SpreadsheetSortDialogConditionTypes_CustomListSortCondition_DisplayText"]="Anpassad lista";l["SpreadsheetSortDialogConditionTypes_FillSortCondition_DisplayText"]="Cellfärg";l["SpreadsheetSortDialogConditionTypes_FontColorSortCondition_DisplayText"]="Teckensnittfärg";l["SpreadsheetSortDialogConditionTypes_IconSortCondition_DisplayText"]="Ikon för villkorlig formatering";l["SpreadsheetSortDialogConditionTypes_OrderedSortCondition_DisplayText"]="Cellvärden";l["SpreadsheetThemeColorPickerControl_Text_Automatic"]="Automatisk";l["SpreadsheetThemeColorPickerControl_Text_NoColor"]="Ingen färg";l["SpreadsheetThemeColorPickerControl_Text_StandardColors"]="Standardfärger";l["SpreadsheetThemeColorPickerControl_Text_ThemeColors"]="Temafärger";l["String1"]="";l["ToolTip_FormulaBarCancelButton"]="Avbryt";l["ToolTip_FormulaBarEnterButton"]="Ange";l["ToolTip_FormulaBarNameBox"]="Namnruta";l["ToolTip_FormulaBarTextEditor"]="Formelruta";l["TopOrBottomDialog_Cancel"]="Avbryt";l["TopOrBottomDialog_OK"]="OK";l["TopOrBottomDialog_Show"]="Visa";l["TopOrBottomDialog_Title"]="Topp 10 AutoFilter";l["TotalRow_Average"]="Genomsnitt";l["TotalRow_Count"]="Räkna";l["TotalRow_CountNumbers"]="Räkna nummer";l["TotalRow_Max"]="Max";l["TotalRow_Min"]="Min";
l["TotalRow_None"]="Ingen";l["TotalRow_StdDev"]="StdDev";l["TotalRow_Sum"]="Summa";l["TotalRow_Var"]="Var";l["Undo_AddTableColumn"]="Lägg till tabellkolumn";l["Undo_AddTableRow"]="Lägg till tabellrad";l["Undo_AutoFilterOff"]="Autofilter av";l["Undo_AutoFilterOn"]="AutoFilter På";l["Undo_Bold"]="Djärv";l["Undo_Borders"]="Gränser";l["Undo_BottomAlignment"]="Bottenjustering";l["Undo_CenterAlignment"]="Centrering";l["Undo_ChangeTotalRowFormula"]="Ändra formel för radtotal";l["Undo_ChartAdd"]="Infoga diagram";l["Undo_ChartModify"]="Ändra diagram";l["Undo_ChartRemove"]="Ta bort diagram";l["Undo_ClearCellContents"]="Rensa {0}";l["Undo_ClearCellFormats"]="Rensad";l["Undo_ClearHyperlinks"]="Rensa hyperlänkar";l["Undo_ClearShapes"]="Rensa former";l["Undo_ClearTables"]="Rensa tabeller";l["Undo_ConditionalFormat"]="Villkorlig formatering";l["Undo_ConvertTableToRange"]="Konvertera tabell till intervall";l["Undo_CreateNamedReference"]="Definiera namn";l["Undo_CreateTable"]="Skapa tabell";l["Undo_Cut"]="Klippa";l["Undo_Delete"]="Radera";l["Undo_DeleteTableColumn"]="Radera kolumn";l["Undo_DeleteTableRow"]="Radera rad";l["Undo_EditCell"]="Skriver '{1}' i {0}";l["Undo_Entry"]="Inmatning";l["Undo_Filter"]="Filtrera";l["Undo_Font"]="Teckensnitt";l["Undo_FontSize"]="Textstorlek";l["Undo_FormatCells"]="Formatera celler";l["Undo_Group"]="Grupp";l["Undo_Hyperlink"]="Hyperlänk";l["Undo_InsertCells"]="Infoga celler";l["Undo_InsertColumns"]="Infoga kolumner";l["Undo_InsertRows"]="Infoga rader";l["Undo_InsertTableColumns"]="Infoga kolumner";l["Undo_InsertTableRows"]="Infoga rader";l["Undo_Italic"]="Kursiv";l["Undo_JustifyAlignment"]="Motivera justering";l["Undo_LeftAlignment"]="Vänsterjustering";l["Undo_MergeCells"]="Sammanfoga celler";l["Undo_MiddleAlignment"]="Lodrätt centrering";l["Undo_Paste"]="Klistra";l["Undo_Reapply"]="Applicera igen";l["Undo_RemoveHyperlinks"]="Ta bort hyperlänkar";l["Undo_RemoveTable"]="Ta bort tabellen";l["Undo_ResetOptions"]="Återställ inställningar";l["Undo_ResizeColumn"]="Kolumnbredd";l["Undo_ResizeRow"]="Radhöjd";l["Undo_RightAlignment"]="Högerjustering";l["Undo_Shape"]="Form";l["Undo_ShapeAdd"]="Sätt in form";l["Undo_ShapeRemove"]="Ta bort formen";l["Undo_ShowAll"]="Visa allt";l["Undo_Sort"]="Sortera";l["Undo_SparklineAdd"]="Sätt in Sparkline";l["Undo_SparklineColorChange"]="Sparkline-färgbyte";l["Undo_SparklineDataChange"]="Sparkline-dataredigering";l["Undo_SparklineRemove"]="Rensa Sparklines";l["Undo_SparklineStyleChange"]="Sparkline-stilbyte";l["Undo_SparklineTypeChange"]="Sparkline-typändring";l["Undo_Strikethrough"]="Genomstruken";l["Undo_Style"]="Stil";l["Undo_TabColor"]="Flikfärg";l["Undo_TableAutoExpansion"]="Tabell-AutoExpansion";l["Undo_ToggleTotalRow"]="Växla total rad";l["Undo_TopAlignment"]="Toppjustering";l["Undo_Underline"]="Understrykning";l["Undo_View"]="Visa ändring";l["Undo_WrapText"]="Wrap Text";l["Undo_Zoom"]="Zoom";l["VerticalCellAlignment_Bottom"]="Botten";l["VerticalCellAlignment_Center"]="Centrum";l["VerticalCellAlignment_Default"]="Standard";l["VerticalCellAlignment_Distributed"]="Distribuerad";l["VerticalCellAlignment_Justify"]="Motivera";l["VerticalCellAlignment_Top"]="Topp";$.ig.spreadsheet=$.ig.spreadsheet||{};$.ig.spreadsheet.locale=$.ig.spreadsheet.locale||l;return l});