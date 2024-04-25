/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 23.2.20232.48
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.sv=$.ig.locale.sv||{};$.ig.locale.sv.schedulerCore=$.ig.locale.sv.schedulerCore||{};var l=$.ig.locale.sv.schedulerCore;l["ActivityBase_Exception_CannotModifyOccurrenceProperty"]="Värdet på egenskapen {0} kan inte ändras i den här {1} instansen eftersom den är medlem i en upprepning.";l["LE_ActivityBase_DisassociatedResource"]="Den angivna resursen är inte associerad med samma datakälla som den här aktiviteten.";l["LE_AppointmentItemsSource_CannotEdit"]="Objektskällan för Appointmenten stöder inte ändringar av innehållet.";l["LE_AppointmentItemsSource_InvalidValue_JS"]="Det angivna värdet måste vara en JSON-matris eller en $ .ig.DataSource-instans.";l["LE_AppointmentItemsSource_NoIList_DOTNET"]="AppointmentItemsSource stöder inte modifiering av dess innehåll. Artikelkällan måste implementera System.Collections.IList för att stödja modifieringar.";l["LE_AppointmentPropertyMapping_RecurrenceRoot"]="Egenskapen RecurrenceRoot är inte bindbar och kan inte mappas. Skapa en mappning för egenskapen RecurrenceId istället.";l["LE_AppointmentPropertyMapping_Resource"]="Resursegenskapen är inte bindbar och kan inte mappas. Skapa en mappning för ResourceId-egenskapen istället.";l["LE_BeginEdit_CreatePending"]='Den angivna aktiviteten kan inte redigeras eftersom en "Skapa" -operation väntar.';l["LE_CannotCreateDataObject_DOTNET"]="Det gick inte att skapa en ny dataobjektinstans. Se till att din dataobjekttyp har en parameterlös konstruktör. Om den inte gör det, tilldela en delegat till egenskapen CreateAppointmentDataObjectCallback som skapar nya instanser av den här typen.";l["LE_CannotModifyApppointmentsWhenDataSourceSet"]="Funktionen är inte giltig medan DataSource används. Få åtkomst till och ändra element med Scheduler.DataSource istället.";l["LE_CannotSetDataSourceWhenAppointmentsAreDefined"]="Samlingsbokningar måste vara tomma innan du använder DataSource.";l["LE_CouldNotConvertColorScheme"]="Värdet '{0}' kunde inte konverteras till ett ScheduleResourceColorScheme-värde.";l["LE_CouldNotConvertValue"]="Värdet '{0}' kunde inte konverteras till typ {1}.";l["LE_CreateDataObjectFailed"]="Det gick inte att skapa en ny dataobjektinstans.";l["LE_DataObjectNotAssociated"]="Det angivna dataobjektet är inte associerat med en Planlagt tillfälle.";l["LE_DuplicateIdentifier"]="Identifieraren '{0}' används redan. Aktivitets- / resursidentifierare måste vara unika.";l["LE_EndEdit_DataObjectAlreadyAssociated"]="Detta dataobjekt är redan associerat med en aktivitet.";l["LE_EndEdit_NotInEditMode"]="EndEdit kan inte anropas för den angivna aktiviteten eftersom den inte är i redigeringsläge. BeginEdit måste anropas först innan en aktivitetsredigeringsåtgärd kan göras.";l["LE_InvalidDayOfWeekRule"]="Den angivna veckodagen är ogiltig.";l["LE_MissingIdentifier"]="Identifierare saknas.";l["LE_NoAppointmentItemsSource"]="AppointmentItemsSource har inte tilldelats.";l["LE_NoCreateAppointmentDataObjectCallback_JS"]="En ny dataobjektinstans kunde inte skapas. Du måste ange ett värde för egenskapen CreateAppointmentDataObjectCallback.";l["LE_NoDataObject"]="Den angivna aktivitetens underliggande dataobjekt finns inte i artikelkällan.";l["LE_NoPropertyMapping_Appointment"]="Ingen egenskapskartläggning finns för Planlagt tillfälle-egenskapen '{0}'.";l["LE_RecurrenceParsing"]="Fel vid parsning av återkommande, sammanhang: {0}";l["LE_RecurrenceSerializing"]="Fel vid serialisering av återkommande, sammanhang: {0}";l["LE_SchedulePropertyMap_Missing"]="Följande nödvändiga egenskapskartläggningar definierades inte:";l["LE_SchedulePropertyMap_NoPropertyFound"]="Ingen offentlig egenskap med namnet '{0}' hittades i det underliggande dataobjektet.";l["LIT_AgendaDayHeader_Today"]="I dag";l["LIT_AgendaNoEventsMessage"]="Inga händelser";l["LIT_AgendaStartTime_AllDay"]="hela dagen";l["LIT_AgendaStartTime_Ends"]="Slutar";l["RD_And"]="och";l["RD_AtTime"]="vid {0}";l["RD_Effective1"]="effektiv {0}";l["RD_Effective2"]="gäller {0} till {1}";l["RD_Effective3"]="effektiv {0} från {1} till {2}";l["RD_Effective4"]="träder i kraft {0} vid {1}";l["RD_Effective5"]="gäller {0} till {1} kl. {2}";l["RD_Effective6"]="gäller {0} till {1} från {2} till {3}";l["RD_Every"]="varje {0} {1}";l["RD_FrequencyLiterals"]="år, månad, vecka, dag, timme, minut, sekund";l["RD_FrequencyLiterals2"]="årligen, månadsvis, veckovis, dagligen, timvis, minutvis, sekundvis";l["RD_FrequencyLiteralsPlural"]="år, månader, veckor, dagar, timmar, minuter, sekunder";l["RD_InMonth"]="i {0}";l["RD_Last"]="sista";l["RD_NumberSuffix_nd"]=":a";l["RD_NumberSuffix_rd"]=":e";l["RD_NumberSuffix_st"]=":a";l["RD_NumberSuffix_th"]=":e";l["RD_OccurrenceOfThe"]="förekomst av";l["RD_OfEveryMinuteOrHour"]="av varje {0}";l["RD_OfTheMonthOrYear"]="av {0}";l["RD_OfTheNthMinuteOrHour"]="av {0} {1}";l["RD_OnEach"]="på varje";l["RD_OnEverySecond"]="på varje sekund";l["RD_OnThe"]="på den";l["RD_OnTheNthSecond"]="på {0} sekunden";l["RD_Or"]="eller";l["RD_OrdinalDayOfMonthUsesSuffix"]="Sann";l["RD_OrdinalNumberWithSuffix"]="{0} {1}";l["RD_RecurrenceDescriptionOverallStructure"]="Sker {0} {1} {2}";l["RD_RepeatingMultipleTimes"]="upprepas {0} gånger";l["RD_RepeatingOneTime"]="upprepas en gång";l["RD_RulesInMonth"]="{0} {1}";l["RD_ToTheLast"]="till den sista";l["RD_Weekday"]="veckodag";l["RD_WeekendDay"]="helgdag";l["RD_WeekOrDayOfTheMonthOrYear"]="{0} {1}";l["ScheduleDayOfWeekSettings_Exception_InvalidValue"]="Värdet '{0}' kunde inte analyseras.";l["WorkingHourTimeRange_Exception_CannotModifyTime"]="Egenskapen {0} kan inte ändras eftersom den här instansen redan har lagts till i en WorkingHours-samling.";$.ig.schedulerCore=$.ig.schedulerCore||{};$.ig.schedulerCore.locale=$.ig.schedulerCore.locale||l;return l});