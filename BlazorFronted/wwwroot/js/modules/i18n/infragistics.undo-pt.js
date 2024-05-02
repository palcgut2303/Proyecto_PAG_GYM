/*!@license
* Infragistics.Web.ClientUI infragistics.undo.js resources 23.2.20232.48
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define([],factory)}else{factory()}})(function(){$=$||{};$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.pt=$.ig.locale.pt||{};$.ig.locale.pt.undo=$.ig.locale.pt.undo||{};var l=$.ig.locale.pt.undo;l["AddItemDescription"]="Adicionar '{1}'";l["AddItemDescriptionDetailed"]="Adicionar '{1}'";l["AddRangeDescription"]="Adicionar {1} {2} (s)";l["AddRangeDescriptionDetailed"]="Adicionar {1} {2} (s)";l["FallbackTransactionDescription"]="";l["LE_AddOpenTransaction"]="Não é possível AnularTransação que não foi aberta ou ainda está aberta.";l["LE_AddTransactionDirect"]="Não é possível AnularTransação. TransaçãoRaiz é adicionada automaticamente ao confirmar.";l["LE_AddUnitWhileTransactionOpen"]="Não é possível adicionar um AnularUnidade enquanto a transação contém uma transação aberta aninhada '{0}'.";l["LE_ArgumentIsNegative"]="O '{0}' deve ser 0 ou superior. Valor real: '{1}'";l["LE_CannotExecuteOpenTransaction"]="Não é possível invocar Executar enquanto a transação '{0}' estiver aberta.";l["LE_ChangeHistoryInMerge"]="Não é possível alterar o histórico Anular/Refazer enquanto uma união está a ser invocada";l["LE_ChangeHistoryInRemoveAll"]="Não é possível alterar o histórico Anular/Refazer enquanto RemoverTudo está a ser invocado.";l["LE_ChildTransactionNotInUnits"]="A transação descendente especificada '{0}' não faz parte das Unidades desta transação.";l["LE_ClosingOtherTransaction"]="A transação especificada '{0}' não é a transação atualmente aberta '{1}'.";l["LE_EndTransactionWhileSuspended"]="Não é possível fechar uma transação enquanto AnularManager está suspenso.";l["LE_EnumEnded"]="O enumerador foi concluído.";l["LE_EnumFailedVersion"]="A coleção foi modificada após o início do enumerador.";l["LE_EnumNotStarted"]="O enumerador não foi iniciado. Chame MoverSeguinte.";l["LE_FactoryNullTransaction"]="AnularFábricaDeUnidade devolveu um AnularTransação nulo.";l["LE_HasOpenTransaction"]="Uma transação já foi aberta.";l["LE_HistoryItemNotInCurrentHistory"]="AnularItemDeHistórico não existe no histórico de Anular ou Refazer associado em AnularGestor.";l["LE_InvalidTransactionOwner"]="O proprietário da transação especificada não é este objeto.";l["LE_NeedAddRemoveAction"]="A ação especificada deve ser 'Adicionar' ou 'Remover'.";l["LE_NewTransactionWhileSuspended"]="Uma transação não pode ser iniciada enquanto o UndoManager está suspenso.";l["LE_RangeCollectionAction"]="As ações de intervalo não são suportadas.";l["LE_ReferenceNotRegistered"]="A referência especificada '{0}' não foi registada com uma instância AnularGestor. Use o método RegistarReferência para registar a referência com um AnularGestor ou passar nulo como a 'referência' a usar a instância estática/partilhada do thread AnularGestor.Atual.";l["LE_ReferenceRegisteredToOther"]="A referência especificada '{0}' é registada com uma instância UndoManager diferente.";l["LE_RemoveAllFailedVersion"]="A coleção foi modificada durante a chamada para RemoverTudo.";l["LE_ResetCollectionAction"]="A ação de redefinição não é suportada.";l["LE_TargetCollectionIsReadOnly"]="A coleção especificada '{0}' não pode ser só de leitura.";l["LE_TransactionAlreadyOpened"]="A transação já foi aberta.";l["LE_TransactionClosed"]="A transação não pode ser modificada depois de ter sido fechada.";l["LE_TransactionNotOpened"]="A transação especificada '{0}' não está aberta.";l["LE_TransactionNotStarted"]="A transação não pode ser modificada até ser iniciada.";l["LE_UndoManagerAsReference"]="Uma instância 'AnularGestor' não pode ser uma referência.";l["LE_UndoRedoInRollback"]="Não é possível executar a função Anular/Refazer enquanto estiver a decorrer uma reversão.";l["LE_UndoRedoInTransaction"]="Não é possível Anular/Refazer enquanto uma transação está aberta.";l["LE_UndoRedoInUndoRedo"]="Não é possível executar a função Anular/Refazer enquanto estiver a decorrer.";l["LE_UndoRedoWhileSuspended"]="Não é possível executar a função Anular/Refazer enquanto AnularGestor estiver suspenso.";l["MoveItemDescription"]="Mover '{1}'";l["MoveItemDescriptionDetailed"]="Mover '{1}' de '{2}' para '{3}'";l["PropertyChangeDescription"]="Alterar '{0}' em '{1}'";l["PropertyChangeDescriptionDetailed"]="Alterar '{0}' em '{1}' para '{3}'";l["ReinitializeCollectionDescription"]="Alteração do lote '{2}'";l["ReinitializeCollectionDescriptionDetailed"]="Alteração do lote '{2}'";l["RemoveItemDescription"]="Remover '{1}'";l["RemoveItemDescriptionDetailed"]="Remover '{1}'";l["RemoveRangeDescription"]="Remover {1} {2} (s)";l["RemoveRangeDescriptionDetailed"]="Remover {1} {2} (s)";l["ReplaceItemDescription"]="Substituir '{1}'";l["ReplaceItemDescriptionDetailed"]="Substitua '{1}' por '{2}'";$.ig.undo=$.ig.undo||{};$.ig.undo.locale=$.ig.undo.locale||l;return l});