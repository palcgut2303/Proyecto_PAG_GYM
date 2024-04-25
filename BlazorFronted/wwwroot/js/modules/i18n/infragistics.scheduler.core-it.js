/*!@license
* Infragistics.Web.ClientUI infragistics.scheduler.core.js resources 23.2.20232.48
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.it=$.ig.locale.it||{};$.ig.locale.it.schedulerCore=$.ig.locale.it.schedulerCore||{};var l=$.ig.locale.it.schedulerCore;l["ActivityBase_Exception_CannotModifyOccurrenceProperty"]="Il valore della proprietà {0} non può essere modificato in questa istanza {1} perché è un membro di una ricorrenza.";l["LE_ActivityBase_DisassociatedResource"]="La risorsa specificata non è associata alla stessa origine dati di questa attività.";l["LE_AppointmentItemsSource_CannotEdit"]="L'origine dell'elemento appuntamento non supporta la modifica del suo contenuto.";l["LE_AppointmentItemsSource_InvalidValue_JS"]="Il valore specificato deve essere un array JSON o un'istanza $.ig.DataSource.";l["LE_AppointmentItemsSource_NoIList_DOTNET"]="AppointmentItemsSource non supporta la modifica dei suoi contenuti. L'origine elemento deve implementare System.Collections.IList per supportare le modifiche.";l["LE_AppointmentPropertyMapping_RecurrenceRoot"]="La proprietà RecurrenceRoot non è associabile e non può essere mappata. Crea invece un mapping per la proprietà RecurrenceId.";l["LE_AppointmentPropertyMapping_Resource"]="La proprietà Resource non è associabile e non può essere mappata. Crea invece un mapping per la proprietà ResourceId.";l["LE_BeginEdit_CreatePending"]="L'attività specificata non può essere modificata poiché è in sospeso un'operazione \"Crea\".";l["LE_CannotCreateDataObject_DOTNET"]="Impossibile creare una nuova istanza dell'oggetto dati. Assicurarsi che il tipo di oggetto dati abbia un costruttore senza parametri. In caso contrario, assegnare un delegato alla proprietà CreateAppointmentDataObjectCallback che crea nuove istanze di questo tipo.";l["LE_CannotModifyApppointmentsWhenDataSourceSet"]="Operazione non valida con DataSource in uso. Accedere e modificare gli elementi con Scheduler.DataSource.";l["LE_CannotSetDataSourceWhenAppointmentsAreDefined"]="La raccolta di appuntamenti deve essere vuota prima di utilizzare DataSource.";l["LE_CouldNotConvertColorScheme"]="Impossibile convertire il valore '{0}' in un valore ScheduleResourceColorScheme.";l["LE_CouldNotConvertValue"]="Impossibile convertire il valore '{0}' nel tipo {1}.";l["LE_CreateDataObjectFailed"]="Impossibile creare una nuova istanza dell'oggetto dati.";l["LE_DataObjectNotAssociated"]="L'oggetto dati specificato non è associato a un appuntamento.";l["LE_DuplicateIdentifier"]="L'identificatore '{0}' è già in uso. Gli identificatori di attività/risorsa devono essere univoci.";l["LE_EndEdit_DataObjectAlreadyAssociated"]="Questo oggetto dati è già associato a un'attività.";l["LE_EndEdit_NotInEditMode"]="EndEdit non può essere richiamato sull'attività specificata perché non è in modalità di modifica. BeginEdit deve essere chiamato prima di poter eseguire il commit di un'operazione di modifica delle attività.";l["LE_InvalidDayOfWeekRule"]="La regola del giorno della settimana specificato non è valida.";l["LE_MissingIdentifier"]="Identificatore mancante.";l["LE_NoAppointmentItemsSource"]="AppointmentItemsSource non è stato assegnato.";l["LE_NoCreateAppointmentDataObjectCallback_JS"]="Impossibile creare una nuova istanza di un oggetto dati. È necessario specificare un valore per la proprietà CreateAppointmentDataObjectCallback.";l["LE_NoDataObject"]="L'oggetto dati sottostante dell'attività specificata non esiste nell'origine elemento.";l["LE_NoPropertyMapping_Appointment"]="Nessun mapping di proprietà esistente per la proprietà Appointment '{0}'.";l["LE_RecurrenceParsing"]="Errore durante l'analisi della ricorrenza, contesto: {0}";l["LE_RecurrenceSerializing"]="Errore durante la serializzazione della ricorrenza, contesto: {0}";l["LE_SchedulePropertyMap_Missing"]="I seguenti mapping delle proprietà obbligatori non sono stati definiti:";l["LE_SchedulePropertyMap_NoPropertyFound"]="Nessuna proprietà pubblica denominata '{0}' è stata trovata nell'oggetto dati sottostante.";l["LIT_AgendaDayHeader_Today"]="Oggi";l["LIT_AgendaNoEventsMessage"]="Nessun evento";l["LIT_AgendaStartTime_AllDay"]="tutto il giorno";l["LIT_AgendaStartTime_Ends"]="Termina";l["RD_And"]="e";l["RD_AtTime"]="alle {0}";l["RD_Effective1"]="a partire da {0}";l["RD_Effective2"]="a partire da {0} fino a {1}";l["RD_Effective3"]="effettivo {0} da {1} a {2}";l["RD_Effective4"]="a partire da {0} alle {1}";l["RD_Effective5"]="a partire da {0} fino a {1} alle {2}";l["RD_Effective6"]="a partire da {0} fino a {1} dalle {2} alle {3}";l["RD_Every"]="ogni {0} {1}";l["RD_FrequencyLiterals"]="anno,mese,settimana,giorno,ora, minuto,secondo";l["RD_FrequencyLiterals2"]="annuale,mensile,settimanale,giornaliero,all'ora,al minuto,al secondo";l["RD_FrequencyLiteralsPlural"]="anni,mesi,settimane,giorni,ore,minuti,secondi";l["RD_InMonth"]="a {0}";l["RD_Last"]="ultimo";l["RD_NumberSuffix_nd"]="°";l["RD_NumberSuffix_rd"]="°";l["RD_NumberSuffix_st"]="°";l["RD_NumberSuffix_th"]="°";l["RD_OccurrenceOfThe"]="occorrenza del";l["RD_OfEveryMinuteOrHour"]="di ogni {0}";l["RD_OfTheMonthOrYear"]="del {0}";l["RD_OfTheNthMinuteOrHour"]="del {0} {1}";l["RD_OnEach"]="su ciascuno";l["RD_OnEverySecond"]="ogni secondo";l["RD_OnThe"]="sul";l["RD_OnTheNthSecond"]="al {0} secondo";l["RD_Or"]="o";l["RD_OrdinalDayOfMonthUsesSuffix"]="true";l["RD_OrdinalNumberWithSuffix"]="{0}{1}";l["RD_RecurrenceDescriptionOverallStructure"]="Si verifica {0} {1} {2}";l["RD_RepeatingMultipleTimes"]="ripetendo {0} volte";l["RD_RepeatingOneTime"]="ripetendo una volta";l["RD_RulesInMonth"]="{0} {1}";l["RD_ToTheLast"]="fino all'ultimo";l["RD_Weekday"]="giorno della settimana";l["RD_WeekendDay"]="giorno del fine settimana";l["RD_WeekOrDayOfTheMonthOrYear"]="{0} {1}";l["ScheduleDayOfWeekSettings_Exception_InvalidValue"]="Impossibile analizzare correttamente il valore '{0}'.";l["WorkingHourTimeRange_Exception_CannotModifyTime"]="La proprietà {0} non può essere modificata poiché questa istanza è già stata aggiunta a una raccolta WorkingHours.";$.ig.schedulerCore=$.ig.schedulerCore||{};$.ig.schedulerCore.locale=$.ig.schedulerCore.locale||l;return l});