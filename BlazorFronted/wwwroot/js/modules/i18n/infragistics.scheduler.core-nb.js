/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 23.2.20232.48
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.nb=$.ig.locale.nb||{};$.ig.locale.nb.schedulerCore=$.ig.locale.nb.schedulerCore||{};var l=$.ig.locale.nb.schedulerCore;l["ActivityBase_Exception_CannotModifyOccurrenceProperty"]="Verdien av {0}-egenskapen kan ikke endres på denne {1}-forekomsten fordi den er med i en gjentakelse.";l["LE_ActivityBase_DisassociatedResource"]="Den angitte ressursen er ikke knyttet til den samme datakilden som denne aktiviteten.";l["LE_AppointmentItemsSource_CannotEdit"]="Avtaleelementkilden støtter ikke endring av innholdet.";l["LE_AppointmentItemsSource_InvalidValue_JS"]="Den angitte verdien må være en JSON-tabell eller en $.ig.DataSource-forekomst.";l["LE_AppointmentItemsSource_NoIList_DOTNET"]="AppointmentItemsSource støtter ikke endring av innholdet. Varekilden må implementere System.Collections.IList for å kunne støtte endringer.";l["LE_AppointmentPropertyMapping_RecurrenceRoot"]="Egenskapen RecurrenceRoot er ikke bindbar og kan ikke kartlegges. Opprett en tilordning for egenskapen RecurrenceId i stedet.";l["LE_AppointmentPropertyMapping_Resource"]="Ressursegenskapen kan ikke bindes og kan ikke kartlegges. Opprett en tilordning for ResourceId-egenskapen i stedet.";l["LE_BeginEdit_CreatePending"]="Den angitte aktiviteten kan ikke redigeres fordi det er en 'Create-operasjon som venter.";l["LE_CannotCreateDataObject_DOTNET"]="Kunne ikke opprette ny dataobjektforekomst. Sørg for at dataobjekttypen din har en parameterløs konstruktør. Hvis den ikke har det, kan du tilordne en delegat til egenskapen CreateAppointmentDataObjectCallback som oppretter nye forekomster av denne typen.";l["LE_CannotModifyApppointmentsWhenDataSourceSet"]="Operation er ikke gyldig mens DataSource er i bruk. Få tilgang til og endre elementer med Scheduler.DataSource i stedet.";l["LE_CannotSetDataSourceWhenAppointmentsAreDefined"]="Avtalesamling må være tom før du bruker DataSource.";l["LE_CouldNotConvertColorScheme"]="Verdien '{0}' kunne ikke konverteres til en ScheduleResourceColorScheme-verdi.";l["LE_CouldNotConvertValue"]="Verdien '{0}' kunne ikke konverteres til typen {1}.";l["LE_CreateDataObjectFailed"]="Kunne ikke opprette ny dataobjektforekomst.";l["LE_DataObjectNotAssociated"]="Det angitte dataobjektet er ikke knyttet til en Appointment.";l["LE_DuplicateIdentifier"]="Identifikatoren '{0}' er allerede i bruk. Aktivitets-/ressursidentifikatorer må være unike.";l["LE_EndEdit_DataObjectAlreadyAssociated"]="Dette dataobjektet er allerede knyttet til en aktivitet.";l["LE_EndEdit_NotInEditMode"]="EndEdit kan ikke kalles på den angitte aktiviteten fordi den ikke er i redigeringsmodus. BeginEdit må kalles først før en aktivitetsredigeringsoperasjon kan utføres.";l["LE_InvalidDayOfWeekRule"]="Den angitte ukedagsregelen er ugyldig.";l["LE_MissingIdentifier"]="Identifikator mangler.";l["LE_NoAppointmentItemsSource"]="AppointmentItemsSource hart ikke blitt tilordnet.";l["LE_NoCreateAppointmentDataObjectCallback_JS"]="En ny dataobjektforekomst kunne ikke opprettes. Du må angi en verdi for egenskapen CreateAppointmentDataObjectCallback.";l["LE_NoDataObject"]="Den spesifiserte aktivitetens underliggende dataobjekt finnes ikke i elementkilden.";l["LE_NoPropertyMapping_Appointment"]="Det finnes ingen eiendomskartlegging for Appointment-egenskapen '{0}'.";l["LE_RecurrenceParsing"]="Feil ved analyse av gjentakelse, kontekst: {0}";l["LE_RecurrenceSerializing"]="Feil ved seriell serie av gjentakelse, kontekst: {0}";l["LE_SchedulePropertyMap_Missing"]="Følgende nødvendige eiendomstilordninger ble ikke definert:";l["LE_SchedulePropertyMap_NoPropertyFound"]="Ingen offentlig eiendom med navnet '{0}' ble funnet på det underliggende dataobjektet.";l["LIT_AgendaDayHeader_Today"]="I dag";l["LIT_AgendaNoEventsMessage"]="Ingen hendelser";l["LIT_AgendaStartTime_AllDay"]="hele dagen";l["LIT_AgendaStartTime_Ends"]="Slutter";l["RD_And"]="og";l["RD_AtTime"]="kl. {0}";l["RD_Effective1"]="effektiv {0}";l["RD_Effective2"]="effektiv {0} til {1}";l["RD_Effective3"]="effektiv {0} fra {1} til {2}";l["RD_Effective4"]="effektiv {0} kl. {1}";l["RD_Effective5"]="effektiv {0} til {1} kl. {2}";l["RD_Effective6"]="effektiv {0} til {1} fra {2} til {3}";l["RD_Every"]="hver {0} {1}";l["RD_FrequencyLiterals"]="år, måned, uke, dag, time, minutt, sekund";l["RD_FrequencyLiterals2"]="årlig, månedlig, ukentlig, daglig, time, minutt, for det andre";l["RD_FrequencyLiteralsPlural"]="år, måneder, uker, dager, timer, minutter, sekunder";l["RD_InMonth"]="i {0}";l["RD_Last"]="siste";l["RD_NumberSuffix_nd"]=".";l["RD_NumberSuffix_rd"]=".";l["RD_NumberSuffix_st"]=".";l["RD_NumberSuffix_th"]=".";l["RD_OccurrenceOfThe"]="forekomsten av";l["RD_OfEveryMinuteOrHour"]="av hver {0}";l["RD_OfTheMonthOrYear"]="av {0}";l["RD_OfTheNthMinuteOrHour"]="av {0} {1}";l["RD_OnEach"]="på hver";l["RD_OnEverySecond"]="på hvert sekund";l["RD_OnThe"]="på";l["RD_OnTheNthSecond"]="på {0} sekund";l["RD_Or"]="eller";l["RD_OrdinalDayOfMonthUsesSuffix"]="ekte";l["RD_OrdinalNumberWithSuffix"]="{0}{1}";l["RD_RecurrenceDescriptionOverallStructure"]="Forekommer {0}{1}{2}";l["RD_RepeatingMultipleTimes"]="gjentar {0} ganger";l["RD_RepeatingOneTime"]="gjentar en gang";l["RD_RulesInMonth"]="{0} {1}";l["RD_ToTheLast"]="til det siste";l["RD_Weekday"]="hverdag";l["RD_WeekendDay"]="helgedag";l["RD_WeekOrDayOfTheMonthOrYear"]="{0} {1}";l["ScheduleDayOfWeekSettings_Exception_InvalidValue"]="Verdien '{0}' kunne ikke analyseres.";l["WorkingHourTimeRange_Exception_CannotModifyTime"]="Egenskapen {0} kan ikke endres fordi denne forekomsten allerede er lagt til i en WorkingHours-samling.";$.ig.schedulerCore=$.ig.schedulerCore||{};$.ig.schedulerCore.locale=$.ig.schedulerCore.locale||l;return l});