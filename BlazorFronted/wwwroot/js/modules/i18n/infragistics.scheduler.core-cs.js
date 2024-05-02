/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 23.2.20232.48
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.cs=$.ig.locale.cs||{};$.ig.locale.cs.schedulerCore=$.ig.locale.cs.schedulerCore||{};var l=$.ig.locale.cs.schedulerCore;l["ActivityBase_Exception_CannotModifyOccurrenceProperty"]="Hodnotu vlastnosti {0} nelze v této instanci {1} upravit, protože je členem opakování.";l["LE_ActivityBase_DisassociatedResource"]="Zadaný prostředek není spojen se stejným zdrojem dat jako tato aktivita.";l["LE_AppointmentItemsSource_CannotEdit"]="Zdroj položky události nepodporuje úpravy jejího obsahu.";l["LE_AppointmentItemsSource_InvalidValue_JS"]="Zadaná hodnota musí být pole JSON nebo instance $ .ig.DataSource.";l["LE_AppointmentItemsSource_NoIList_DOTNET"]="AppointmentItemsSource nepodporuje úpravy jeho obsahu. Zdroj položky musí implementovat System.Collections.IList, aby podporoval úpravy.";l["LE_AppointmentPropertyMapping_RecurrenceRoot"]="Vlastnost RecurrenceRoot nelze vázat a nelze ji mapovat. Místo toho vytvořte mapování pro vlastnost RecurrenceId.";l["LE_AppointmentPropertyMapping_Resource"]="Vlastnost Resource nelze vázat a nelze ji mapovat. Místo toho vytvořte mapování pro vlastnost ResourceId.";l["LE_BeginEdit_CreatePending"]='Zadanou aktivitu nelze upravit, protože čeká na operaci "Vytvořit".';l["LE_CannotCreateDataObject_DOTNET"]="Nelze vytvořit novou instanci datového objektu. Ujistěte se, že váš datový objekt má konstruktor bez parametrů. Pokud tomu tak není, přiřaďte delegáta vlastnosti CreateAppointmentDataObjectCallback, která vytvoří nové instance tohoto typu.";l["LE_CannotModifyApppointmentsWhenDataSourceSet"]="Operace není platná, když se používá DataSource. Místo toho přistupujte a upravujte prvky pomocí Scheduler.DataSource.";l["LE_CannotSetDataSourceWhenAppointmentsAreDefined"]="Před použitím DataSource musí být kolekce schůzek prázdná.";l["LE_CouldNotConvertColorScheme"]="Hodnotu '{0}' nelze převést na hodnotu ScheduleResourceColorScheme.";l["LE_CouldNotConvertValue"]="Hodnotu '{0}' nelze převést na typ {1}.";l["LE_CreateDataObjectFailed"]="Nelze vytvořit novou instanci datového objektu.";l["LE_DataObjectNotAssociated"]="Zadaný datový objekt není přidružen k události.";l["LE_DuplicateIdentifier"]="Identifikátor '{0}' se již používá. Identifikátory aktivity / zdroje musí být jedinečné.";l["LE_EndEdit_DataObjectAlreadyAssociated"]="Tento datový objekt je již přidružen k aktivitě.";l["LE_EndEdit_NotInEditMode"]="EndEdit nelze na zadanou aktivitu volat, protože není v režimu úprav. Než bude možné provést operaci úpravy aktivity, musí se nejprve zavolat BeginEdit.";l["LE_InvalidDayOfWeekRule"]="Zadané pravidlo dne v týdnu je neplatné.";l["LE_MissingIdentifier"]="Chybějící identifikátor.";l["LE_NoAppointmentItemsSource"]="AppointmentItemsSource nebyl přiřazen.";l["LE_NoCreateAppointmentDataObjectCallback_JS"]="Nelze vytvořit novou instanci datového objektu. Musíte zadat hodnotu pro vlastnost CreateAppointmentDataObjectCallback.";l["LE_NoDataObject"]="Zadaný datový objekt zadané aktivity ve zdroji položky neexistuje.";l["LE_NoPropertyMapping_Appointment"]="Pro vlastnost Schůzka '{0}' neexistuje žádné mapování vlastností.";l["LE_RecurrenceParsing"]="Chyba při analýze opakování, kontext: {0}";l["LE_RecurrenceSerializing"]="Chyba při serializaci opakování, kontext: {0}";l["LE_SchedulePropertyMap_Missing"]="Nebyly definovány následující požadované mapování vlastností:";l["LE_SchedulePropertyMap_NoPropertyFound"]="Na podkladovém datovém objektu nebyla nalezena žádná veřejná vlastnost s názvem '{0}'.";l["LIT_AgendaDayHeader_Today"]="Dnes";l["LIT_AgendaNoEventsMessage"]="Žádné události";l["LIT_AgendaStartTime_AllDay"]="celý den";l["LIT_AgendaStartTime_Ends"]="Končí";l["RD_And"]="a";l["RD_AtTime"]="v {0}";l["RD_Effective1"]="efektivní {0}";l["RD_Effective2"]="účinné {0} do {1}";l["RD_Effective3"]="účinné {0} od {1} do {2}";l["RD_Effective4"]="účinné {0} v {1}";l["RD_Effective5"]="účinné {0} do {1} v {2}";l["RD_Effective6"]="účinné {0} do {1} od {2} do {3}";l["RD_Every"]="každých {0} {1}";l["RD_FrequencyLiterals"]="rok, měsíc, týden, den, hodina, minuta, sekunda";l["RD_FrequencyLiterals2"]="roční, měsíční, týdenní, denní, hodinové, minutové, druhé";l["RD_FrequencyLiteralsPlural"]="roky, měsíce, týdny, dny, hodiny, minuty, sekundy";l["RD_InMonth"]="za {0}";l["RD_Last"]="poslední";l["RD_NumberSuffix_nd"]="nd";l["RD_NumberSuffix_rd"]="rd";l["RD_NumberSuffix_st"]="Svatý";l["RD_NumberSuffix_th"]="th";l["RD_OccurrenceOfThe"]="výskyt";l["RD_OfEveryMinuteOrHour"]="z každých {0}";l["RD_OfTheMonthOrYear"]="z {0}";l["RD_OfTheNthMinuteOrHour"]="z {0} {1}";l["RD_OnEach"]="na každém";l["RD_OnEverySecond"]="každou sekundu";l["RD_OnThe"]="na";l["RD_OnTheNthSecond"]="v {0} s";l["RD_Or"]="nebo";l["RD_OrdinalDayOfMonthUsesSuffix"]="skutečný";l["RD_OrdinalNumberWithSuffix"]="{0}{1}";l["RD_RecurrenceDescriptionOverallStructure"]="Vyskytuje se {0} {1} {2}";l["RD_RepeatingMultipleTimes"]="opakování {0} krát";l["RD_RepeatingOneTime"]="jednou opakovat";l["RD_RulesInMonth"]="{0} {1}";l["RD_ToTheLast"]="do posledního";l["RD_Weekday"]="všední den";l["RD_WeekendDay"]="víkendový den";l["RD_WeekOrDayOfTheMonthOrYear"]="{0} {1}";l["ScheduleDayOfWeekSettings_Exception_InvalidValue"]="Hodnotu '{0}' nelze úspěšně analyzovat.";l["WorkingHourTimeRange_Exception_CannotModifyTime"]="Vlastnost {0} nelze upravit, protože tato instance již byla přidána do kolekce WorkingHours.";$.ig.schedulerCore=$.ig.schedulerCore||{};$.ig.schedulerCore.locale=$.ig.schedulerCore.locale||l;return l});