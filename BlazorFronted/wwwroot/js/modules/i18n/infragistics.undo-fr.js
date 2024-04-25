/*!@license
* Infragistics.Web.ClientUI infragistics.undo.js resources 23.2.20232.48
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.fr=$.ig.locale.fr||{};$.ig.locale.fr.undo=$.ig.locale.fr.undo||{};var l=$.ig.locale.fr.undo;l["AddItemDescription"]="Ajouter '{1}'";l["AddItemDescriptionDetailed"]="Ajouter '{1}'";l["AddRangeDescription"]="Ajouter {1} {2}(s)";l["AddRangeDescriptionDetailed"]="Ajouter {1} {2}(s)";l["FallbackTransactionDescription"]="";l["LE_AddOpenTransaction"]="Impossible d'ajouter une UndoTransaction qui n'a pas été ouverte ou est toujours ouverte.";l["LE_AddTransactionDirect"]="UndoTransaction ne peut pas être ajouté. RootTransaction est automatiquement ajouté lors de Commit.";l["LE_AddUnitWhileTransactionOpen"]="Impossible d'ajouter un UndoUnit tant que la transaction contient une transaction ouverte imbriquée '{0}'.";l["LE_ArgumentIsNegative"]="Le '{0}' doit être égal ou supérieur à 0. Valeur réelle : '{1}'";l["LE_CannotExecuteOpenTransaction"]="Impossible d'invoquer Execute lorsque la transaction '{0}' est ouverte.";l["LE_ChangeHistoryInMerge"]="Impossible de modifier l'historique Undo/Redo lors d'un appel de Merge";l["LE_ChangeHistoryInRemoveAll"]="Impossible de modifier l'historique Undo/Redo pendant l'appel de RemoveAll.";l["LE_ChildTransactionNotInUnits"]="La transaction enfant spécifiée '{0}' ne fait pas partie des unités de cette transaction.";l["LE_ClosingOtherTransaction"]="La transaction spécifiée '{0}' n'est pas la transaction actuellement ouverte '{1}'.";l["LE_EndTransactionWhileSuspended"]="Impossible de fermer une transaction pendant que l'UndoManager est suspendu.";l["LE_EnumEnded"]="L'énumérateur a été complété.";l["LE_EnumFailedVersion"]="La collection a été modifiée après le démarrage de l'énumérateur.";l["LE_EnumNotStarted"]="L'énumérateur n'a pas été démarré. Appelez MoveNext.";l["LE_FactoryNullTransaction"]="UndoUnitFactory a renvoyé une valeur UndoTransaction nulle.";l["LE_HasOpenTransaction"]="Une transaction a déjà été ouverte.";l["LE_HistoryItemNotInCurrentHistory"]="UndoHistoryItem n'existe pas dans l'historique Undo ou Redo associé dans l'UndoManager.";l["LE_InvalidTransactionOwner"]="Le propriétaire de la transaction spécifiée n'est pas cet objet.";l["LE_NeedAddRemoveAction"]="L'action spécifiée doit être 'Add' ou 'Remove'.";l["LE_NewTransactionWhileSuspended"]="Une transaction ne peut pas être démarrée tant que UndoManager est suspendu.";l["LE_RangeCollectionAction"]="Les actions de plage ne sont pas prises en charge.";l["LE_ReferenceNotRegistered"]="La référence spécifiée '{0}' n'a pas été enregistrée avec une instance UndoManager. Utilisez la méthode RegisterReference pour enregistrer la référence avec un UndoManager ou passez la valeur null en tant que 'référence' pour utiliser l'instance statique/partagée du thread UndoManager.Current.";l["LE_ReferenceRegisteredToOther"]="La référence spécifiée '{0}' est enregistrée avec une instance UndoManager différente.";l["LE_RemoveAllFailedVersion"]="La collection a été modifiée lors de l'appel à RemoveAll.";l["LE_ResetCollectionAction"]="L'action de réinitialisation n'est pas prise en charge.";l["LE_TargetCollectionIsReadOnly"]="La collection spécifiée '{0}' ne peut pas être en lecture seule.";l["LE_TransactionAlreadyOpened"]="La transaction a déjà été ouverte.";l["LE_TransactionClosed"]="La transaction ne peut pas être modifiée une fois fermée.";l["LE_TransactionNotOpened"]="La transaction spécifiée '{0}' n'est pas ouverte.";l["LE_TransactionNotStarted"]="La transaction ne peut pas être modifiée avant son démarrage.";l["LE_UndoManagerAsReference"]="Une instance 'UndoManager' ne peut pas être une référence.";l["LE_UndoRedoInRollback"]="Impossible d'effectuer un Undo/Redo pendant Rollback.";l["LE_UndoRedoInTransaction"]="Impossible d'effectuer un Undo/Redo lorsqu'une transaction est ouverte.";l["LE_UndoRedoInUndoRedo"]="Impossible d'effectuer un Undo/Redo pendant qu'un Undo/Redo est en cours.";l["LE_UndoRedoWhileSuspended"]="Impossible d'effectuer un Undo/Redo tant que UndoManager a été suspendu.";l["MoveItemDescription"]="Déplacer '{1}'";l["MoveItemDescriptionDetailed"]="Déplacer '{1}' de '{2}' à '{3}'";l["PropertyChangeDescription"]="Modifier '{0}' sur '{1}'";l["PropertyChangeDescriptionDetailed"]="Modifier '{0}' sur '{1}' à '{3}'";l["ReinitializeCollectionDescription"]="Modification en bloc '{2}'";l["ReinitializeCollectionDescriptionDetailed"]="Modification en bloc '{2}'";l["RemoveItemDescription"]="Supprimer '{1}'";l["RemoveItemDescriptionDetailed"]="Supprimer '{1}'";l["RemoveRangeDescription"]="Supprimer {1} {2}(s)";l["RemoveRangeDescriptionDetailed"]="Supprimer {1} {2}(s)";l["ReplaceItemDescription"]="Remplacer '{1}'";l["ReplaceItemDescriptionDetailed"]="Remplacer '{1}' par '{2}'";$.ig.undo=$.ig.undo||{};$.ig.undo.locale=$.ig.undo.locale||l;return l});