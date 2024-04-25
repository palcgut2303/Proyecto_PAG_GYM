/*!@license
* Infragistics.Web.ClientUI infragistics.undo.js resources 23.2.20232.48
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.nb=$.ig.locale.nb||{};$.ig.locale.nb.undo=$.ig.locale.nb.undo||{};var l=$.ig.locale.nb.undo;l["AddItemDescription"]="Legg til '{1}'";l["AddItemDescriptionDetailed"]="Legg til '{1}'";l["AddRangeDescription"]="Legg til {1} {2} (r)";l["AddRangeDescriptionDetailed"]="Legg til {1} {2} (r)";l["FallbackTransactionDescription"]="";l["LE_AddOpenTransaction"]="Kan ikke legge til en Angre transaksjon som ikke har blitt åpnet eller fortsatt er åpen.";l["LE_AddTransactionDirect"]="UndoTransaction kan ikke legges til. RootTransaction blir automatisk lagt til ved Commit.";l["LE_AddUnitWhileTransactionOpen"]="Kan ikke legge til en Angre enhet mens transaksjonen inneholder en nestet åpen transaksjon '{0}'.";l["LE_ArgumentIsNegative"]="{0}' må være 0 eller høyere. Faktisk verdi: '{1}'";l["LE_CannotExecuteOpenTransaction"]="Kan ikke påberope Utfør mens transaksjonen '{0}' er åpen.";l["LE_ChangeHistoryInMerge"]="Kan ikke endre Angre/Gjenta-loggen mens en fletting påkalles";l["LE_ChangeHistoryInRemoveAll"]="Kan ikke endre Angre/Gjenta-loggen mens RemoveAll blir påberopt.";l["LE_ChildTransactionNotInUnits"]="Den angitte underordnede transaksjonen '{0}' er ikke en del av enhetene i denne transaksjonen.";l["LE_ClosingOtherTransaction"]="Den spesifiserte transaksjonen '{0}' er ikke den åpne transaksjonen '{1}'.";l["LE_EndTransactionWhileSuspended"]="Kan ikke avslutte en transaksjon mens UndoManager er suspendert.";l["LE_EnumEnded"]="Telleren var fullført.";l["LE_EnumFailedVersion"]="Samlingen ble endret etter at telleren ble startet.";l["LE_EnumNotStarted"]="Telleren ble ikke startet. Ring MoveNext.";l["LE_FactoryNullTransaction"]="UndoUnitFactory returnerte en ugyldig UndoTransaction.";l["LE_HasOpenTransaction"]="En transaksjon er allerede åpnet.";l["LE_HistoryItemNotInCurrentHistory"]="UndoHistoryItem finnes ikke i den tilknyttede Angre- eller Gjenta-historien i UndoManager.";l["LE_InvalidTransactionOwner"]="Den angitte transaksjonens eier er ikke dette objektet.";l["LE_NeedAddRemoveAction"]="Den angitte handlingen må være 'Legg til' eller 'Fjern'.";l["LE_NewTransactionWhileSuspended"]="En transaksjon kan ikke startes mens UndoManager er suspendert.";l["LE_RangeCollectionAction"]="Omfangshandlinger støttes ikke.";l["LE_ReferenceNotRegistered"]="Den angitte referansen '{0}' er ikke registrert med en UndoManager-forekomst. Bruk RegisterReference-metoden for å registrere referansen med en UndoManager eller passere null som 'referanse' for å bruke UndoManager.Current tråd statisk/delt forekomst.";l["LE_ReferenceRegisteredToOther"]="Den angitte referansen '{0}' er registrert med en annen UndoManager-forekomst.";l["LE_RemoveAllFailedVersion"]="Samlingen ble endret under samtalen til RemoveAll.";l["LE_ResetCollectionAction"]="Tilbakestill handling støttes ikke.";l["LE_TargetCollectionIsReadOnly"]="Den angitte samlingen '{0}' kan ikke være skrivebeskyttet.";l["LE_TransactionAlreadyOpened"]="Transaksjonen er allerede åpnet.";l["LE_TransactionClosed"]="Transaksjonen kan ikke endres når den er avsluttet.";l["LE_TransactionNotOpened"]="Den angitte transaksjonen {0} er ikke åpen.";l["LE_TransactionNotStarted"]="Transaksjonen kan ikke endres før den er startet.";l["LE_UndoManagerAsReference"]="En 'UndoManager' forekomst kan ikke være en referanse.";l["LE_UndoRedoInRollback"]="Kan ikke utføre en Angre/Gjenta mens en tilbakekalling pågår.";l["LE_UndoRedoInTransaction"]="Kan ikke angre/gjøre om mens en transaksjon åpnes.";l["LE_UndoRedoInUndoRedo"]="Kan ikke utføre en Angre/Gjenta mens en Angre/Gjenta gjør.";l["LE_UndoRedoWhileSuspended"]="Kan ikke utføre en Angre/Gjenta mens UndoManager har blitt suspendert.";l["MoveItemDescription"]="Flytt '{1}'";l["MoveItemDescriptionDetailed"]="Flytt '{1}' fra '{2}' til '{3}'";l["PropertyChangeDescription"]="Endre '{0}' på '{1}'";l["PropertyChangeDescriptionDetailed"]="Endre '{0}' på '{1}' til '{3}'";l["ReinitializeCollectionDescription"]="Batch '{2}' Endre";l["ReinitializeCollectionDescriptionDetailed"]="Batch '{2}' Endre";l["RemoveItemDescription"]="Fjern '{1}'";l["RemoveItemDescriptionDetailed"]="Fjern '{1}'";l["RemoveRangeDescription"]="Fjern {1} {2} (r)";l["RemoveRangeDescriptionDetailed"]="Fjern {1} {2} (r)";l["ReplaceItemDescription"]="Erstatt '{1}'";l["ReplaceItemDescriptionDetailed"]="Erstatt '{1}' med '{2}'";$.ig.undo=$.ig.undo||{};$.ig.undo.locale=$.ig.undo.locale||l;return l});