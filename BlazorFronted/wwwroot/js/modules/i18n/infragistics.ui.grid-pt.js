/*!@license
* Infragistics.Web.ClientUI Grid localization resources 23.2.50
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale.pt=$.ig.locale.pt||{};$.ig.Grid=$.ig.Grid||{};$.ig.locale.pt.Grid={noSuchWidget:"{featureName} não foi reconhecido. Verifique se esse recurso existe e se a ortografia está correta.",autoGenerateColumnsNoRecords:"geraçãoAutomáticaDeColunas está ativado, mas não há registros na fonte de dados. Carregar uma origem de dados com registos para poder determinar as colunas.",optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",optionChangeNotScrollingGrid:"{optionName} não pode ser editado após a inicialização, porque a grelha não se desloca inicialmente e é necessária uma recomposição completa. Esta opção deve ser definida durante a inicialização.",widthChangeFromPixelsToPercentagesNotSupported:"Não é possível alterar dinamicamente a largura da opção da grelha de pixels para percentagens.",widthChangeFromPercentagesToPixelsNotSupported:"Não é possível alterar dinamicamente a largura da opção da grelha de percentagens para pixels.",noPrimaryKeyDefined:"Não há chave primária definida para a grelha. Defina uma chave primária para poder utilizar funcionalidades como Edição em grelha.",indexOutOfRange:"O índice da linha especificado está fora do intervalo. Um índice de linha entre 0 e {max} deve ser fornecido.",noSuchColumnDefined:"A chave da coluna especificada não é válida. Uma chave de coluna que corresponda à chave de uma das colunas de grelhas definidas deve ser fornecida.",columnIndexOutOfRange:"O índice da coluna especificado está fora do intervalo. Um índice de coluna entre 0 e {max} deve ser fornecido.",recordNotFound:"Não foi possível encontrar um registo com o ID {id} na vista de dados. Verifique o ID utilizado para a pesquisa e ajuste-o, se necessário.",columnNotFound:"Não foi possível encontrar uma coluna com a chave {key}. Verifique a chave utilizada para a pesquisa e ajuste-a, se necessário.",colPrefix:"Coluna ",columnVirtualizationRequiresWidth:"A virtualização e a columnVirtualization exigem que a largura da grelha ou de suas colunas seja definida. Forneça um valor para a largura da grelha, larguraDaColunaPredefinida ou a largura de cada coluna.",virtualizationRequiresHeight:"A virtualização exige que a altura da grelha seja definida. Deve ser fornecido um valor para a altura da grelha.",colVirtualizationDenied:"a columnVirtualization requer uma configuração de um modoDeVirtualização diferente. O virtualizationMode  deve ser definido como 'fixed'.",noColumnsButAutoGenerateTrue:"GeraçãoAutomáticaDeColunas está desativado e nenhuma coluna é definida para a grelha. Ative geraçãoAutomáticaDeColunas ou especifique manualmente as colunas.",expandTooltip:"Expandir linha",collapseTooltip:"Recolher linha",movingNotAllowedOrIncompatible:"A coluna especificada não pôde ser movida. Verifique se essa coluna existe e se a sua posição final não danificaria o esquema da coluna.",allColumnsHiddenOnInitialization:"Todas as colunas não podem ser ocultadas durante a inicialização. Pelo menos uma coluna deve ser configurada como visível.",virtualizationNotSupportedWithAutoSizeCols:"A virtualização requer uma configuração de largura de coluna diferente de '*'. A largura da coluna deve ser definida como um número em pixels.",columnVirtualizationNotSupportedWithPercentageWidth:"A virtualização de colunas requer uma configuração de largura da grelha diferente. A largura da coluna deve ser definida como um número em pixels.",mixedWidthsNotSupported:"É necessário que todas as colunas tenham a largura definida da mesma forma. Defina todas as larguras da coluna como percentagens ou como número em pixels.",multiRowLayoutColumnError:"A coluna com chave: {key1} não pôde ser adicionada ao esquema com várias linhas porque o seu lugar no esquema já foi ocupado pela coluna com chave: {key2}.",multiRowLayoutNotComplete:"O esquema de várias linhas não está completo. A definição da coluna cria um esquema que tem espaços vazios e não pode ser composto corretamente.",multiRowLayoutMixedWidths:"Larguras mistas (percentagem e pixels) não são suportadas no esquema multilinha. Defina todas as larguras da coluna em pixels ou percentagem. ",multiRowLayoutHidingNotSupported:"O esquema de várias linhas não suporta colunas ocultas. Remova as colunas ocultas das definições de coluna.",scrollableGridAreaNotVisible:"As áreas fixas de cabeçalho e rodapé são maiores que a altura da grelha disponível. A área de deslocação não é visível. Defina uma altura de grelha maior.",featureNotSupportedWithMRL:"{featureName} não é suportado com esquema multilinha. Remova a funcionalidade da lista de funcionalidades.",editorTypeCannotBeDetermined:"A atualização não possui informações suficientes para determinar adequadamente o tipo de editor a ser usado na coluna: "};$.ig.HierarchicalGrid=$.ig.HierarchicalGrid||{};$.ig.locale.pt.HierarchicalGrid={noPrimaryKey:"igHierarchicalGrid exige que uma chave primária seja definida. Uma chave primária deve ser fornecida.",expandTooltip:"Expandir linha",collapseTooltip:"Recolher linha"};$.ig.GridFeatureChooser=$.ig.GridFeatureChooser||{};$.ig.locale.pt.GridFeatureChooser={featureChooserTooltip:"Seletor de recursos"};$.ig.GridFiltering=$.ig.GridFiltering||{};$.ig.locale.pt.GridFiltering={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",startsWithNullText:"Começa com...",endsWithNullText:"Termina com...",containsNullText:"Contém...",doesNotContainNullText:"Não contém...",equalsNullText:"Igual a...",doesNotEqualNullText:"Não é igual a...",greaterThanNullText:"Maior que...",lessThanNullText:"Menor que...",greaterThanOrEqualToNullText:"Maior ou igual a...",lessThanOrEqualToNullText:"Menor ou igual a...",onNullText:"A...",notOnNullText:"Não a...",afterNullText:"Após",beforeNullText:"Antes",emptyNullText:"Vazio",notEmptyNullText:"Não vazio",nullNullText:"Nulo",notNullNullText:"Não nulo",emptyLabel:"Vazio",notEmptyLabel:"Não vazio",nullLabel:"Nulo",notNullLabel:"Não nulo",startsWithLabel:"Começa com",endsWithLabel:"Termina com",containsLabel:"Contém",doesNotContainLabel:"Não contém",equalsLabel:"Igual a",doesNotEqualLabel:"Não é igual",greaterThanLabel:"Maior que",lessThanLabel:"Menor que",greaterThanOrEqualToLabel:"Maior ou igual a",lessThanOrEqualToLabel:"Menor ou igual a",trueLabel:"True",falseLabel:"False",afterLabel:"Após",beforeLabel:"Antes",todayLabel:"Hoje",yesterdayLabel:"Ontem",thisMonthLabel:"Este mês",lastMonthLabel:"Mês passado",nextMonthLabel:"Mês seguinte",thisYearLabel:"Este ano",lastYearLabel:"No ano passado",nextYearLabel:"No próximo ano",atLabel:"Em",atNullText:"Em…",notAtLabel:"Não em",notAtNullText:"Não em...",atBeforeLabel:"Em ou antes",atBeforeNullText:"Em ou antes...",atAfterLabel:"Em ou depois",atAfterNullText:"Em ou depois...",clearLabel:"Limpar filtro",noFilterLabel:"Não",onLabel:"Ligado",notOnLabel:"Não está ligado",advancedButtonLabel:"Avançado",filterDialogCaptionLabel:"Filtro avançado",filterDialogConditionLabel1:"Mostrar registos correspondentes ",filterDialogConditionLabel2:" dos seguintes critérios",filterDialogConditionDropDownLabel:"Condição de filtragem",filterDialogOkLabel:"Pesquisar",filterDialogCancelLabel:"Cancelar",filterDialogAnyLabel:"QUALQUER",filterDialogAllLabel:"TUDO",filterDialogAddLabel:"Adicionar",filterDialogErrorLabel:"Atingiu o número máximo de filtros suportados.",filterDialogCloseLabel:"Fechar caixa de diálogo de filtragem",filterSummaryTitleLabel:"Resultados da pesquisa",filterSummaryTemplate:"${matches} registos correspondentes",filterDialogClearAllLabel:"Limpar tudo",tooltipTemplate:"Filtro ${condition} aplicado",featureChooserText:"Ocultar filtro",featureChooserTextHide:"Mostrar filtro",featureChooserTextAdvancedFilter:"Filtro avançado",virtualizationSimpleFilteringNotAllowed:"A virtualização de colunas requer um tipo diferente de filtragem. Defina o modo de filtragem para 'advanced' ou desative advancedModeEditorsVisible",multiRowLayoutSimpleFilteringNotAllowed:"O esquema multilinha exige um tipo diferente de filtragem. Definir modo de filtragem para 'advanced'",featureChooserNotReferenced:"Uma referência ao Seletor de Funcionalidades está ausente. Inclua infragistics.ui.grid.featurechooser.js no seu projeto, use um carregador ou um dos ficheiros de script combinados.",conditionListLengthCannotBeZero:"A matriz listaDeCondições em definiçõesDeColunas está vazia. Deve ser fornecida uma matriz adequada para a conditionList.",conditionNotValidForColumnType:"A condição '{0}' não é válida para a configuração atual. Deve ser substituído por uma condição adequada para o tipo de coluna {1}.",defaultConditionContainsInvalidCondition:"defaultExpression para a coluna '{0}' contém uma condição que não é permitida. Deve ser substituído por uma condição adequada para o tipo de coluna {0}.",initialConditionIsNotInTheConditionsListArrayOrIsNotInTheDefaultConditions:"A condição inicial definida em columnSettings para a coluna '{0}' não é predefinida (ou de condições personalizadas) ou não está disponível na matriz conditionList definida em columnSettings. Aplique uma condição válida."};$.ig.GridGroupBy=$.ig.GridGroupBy||{};$.ig.locale.pt.GridGroupBy={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",emptyGroupByAreaContent:"Arraste uma coluna aqui ou {0} para Agrupar por",emptyGroupByAreaContentSelectColumns:"selecionar colunas",emptyGroupByAreaContentSelectColumnsCaption:"selecionar colunas",expandTooltip:"Expandir linha agrupada",collapseTooltip:"Fechar linha agrupada",removeButtonTooltip:"Remover coluna agrupada",modalDialogCaptionButtonDesc:"Ordenação ascendente",modalDialogCaptionButtonAsc:"Ordenação descendente",modalDialogCaptionButtonUngroup:"Desagrupar",modalDialogGroupByButtonText:"Agrupar por",modalDialogCaptionText:"Adicionar ao grupo por",modalDialogDropDownLabel:"A mostrar:",modalDialogClearAllButtonLabel:"Limpar tudo",modalDialogRootLevelHierarchicalGrid:"Raiz",modalDialogDropDownButtonCaption:"Mostrar/Ocultar",modalDialogButtonApplyText:"Aplicar",modalDialogButtonCancelText:"Cancelar",fixedVirualizationNotSupported:"Agrupar Por requer outra configuração de virtualização. O virtualizationMode deve ser definido como 'continuous'.",summaryRowTitle:"A agrupar linha de resumo",summaryIconTitle:"Resumo para {0}: {1}"};$.ig.GridHiding=$.ig.GridHiding||{};$.ig.locale.pt.GridHiding={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",columnChooserDisplayText:"Seletor de coluna",hiddenColumnIndicatorTooltipText:"Coluna(s) oculta(s)",columnHideText:"Ocultar",columnChooserCaptionLabel:"Seletor de coluna",columnChooserCloseButtonTooltip:"Fechar",hideColumnIconTooltip:"Ocultar",featureChooserNotReferenced:"Uma referência ao Seletor de Funcionalidades está ausente. Inclua infragistics.ui.grid.featurechooser.js no seu projeto ou use um dos ficheiros de script combinados.",columnChooserShowText:"Mostrar",columnChooserHideText:"Ocultar",columnChooserResetButtonLabel:"Reiniciar",columnChooserButtonApplyText:"Aplicar",columnChooserButtonCancelText:"Cancelar"};$.ig.GridResizing=$.ig.GridResizing||{};$.ig.locale.pt.GridResizing={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",noSuchVisibleColumn:"Não existe coluna visível para a chave especificada. O método showColumn() deve ser utilizado na coluna antes de tentar redimensioná-lo.",resizingAndFixedVirtualizationNotSupported:"O redimensionamento das colunas requer uma configuração de virtualização diferente. Use virtualizaçãoDeFilas e defina o virtualizationMode como 'continuous'."};$.ig.GridPaging=$.ig.GridPaging||{};$.ig.locale.pt.GridPaging={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",pageSizeDropDownLabel:"Mostrar ",pageSizeDropDownTrailingLabel:"registos",nextPageLabelText:"Seguinte",prevPageLabelText:"Anterior",firstPageLabelText:"",lastPageLabelText:"",currentPageDropDownLeadingLabel:"Pág.",currentPageDropDownTrailingLabel:"de ${count}",currentPageDropDownTooltip:"Escolher índice da página",pageSizeDropDownTooltip:"Escolha o número de registos por página",pagerRecordsLabelTooltip:"Intervalo de registos atual",prevPageTooltip:"Página anterior",nextPageTooltip:"Página seguinte",firstPageTooltip:"Primeira página",lastPageTooltip:"Última página",pageTooltipFormat:"Página ${index}",pagerRecordsLabelTemplate:"${startRecord} - ${endRecord} de ${recordCount} registos",invalidPageIndex:"O índice da página especificado não é válido. Forneça um índice da página maior ou igual a 0 e menor que o número total de páginas."};$.ig.GridSelection=$.ig.GridSelection||{};$.ig.locale.pt.GridSelection={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",persistenceImpossible:"A seleção persistente requer uma configuração diferente. A opção de chave primária da grelha deve ser configurada."};$.ig.GridRowSelectors=$.ig.GridRowSelectors||{};$.ig.locale.pt.GridRowSelectors={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",selectionNotLoaded:"igGridSelection não foi inicializado. A seleção deve estar ativada para a grelha.",columnVirtualizationEnabled:"Os Seletores de Linha exigem uma configuração de virtualização diferente. Use rowVirtualization ou defina o virtualizationMode como 'continuous'.",selectedRecordsText:"Marcou ${checked} registos.",deselectedRecordsText:"Desmarcou ${unchecked} registos.",selectAllText:"Selecionar todos os ${totalRecordsCount} registos",deselectAllText:"Desselecionar todos os ${totalRecordsCount} registos",requireSelectionWithCheckboxes:"A seleção é necessária quando há caixas de seleção ativadas"};$.ig.GridSorting=$.ig.GridSorting||{};$.ig.locale.pt.GridSorting={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",sortedColumnTooltip:"Ordenado ${direction}",unsortedColumnTooltip:"Ordenar coluna",ascending:"ascendente",descending:"descendente",modalDialogSortByButtonText:"Ordenar por",modalDialogResetButton:"Reiniciar",modalDialogCaptionButtonDesc:"Clique para ordenar por ordem descendente",modalDialogCaptionButtonAsc:"Clique para ordenar ascendente",modalDialogCaptionButtonUnsort:"Clique para remover a ordenação",featureChooserText:"Ordenar por Múltiplos",modalDialogCaptionText:"Ordenar por Múltiplos",modalDialogButtonApplyText:"Aplicar",modalDialogButtonCancelText:"Cancelar",sortingHiddenColumnNotSupport:"A coluna especificada não pôde ser ordenada porque está oculta. Use o método showColumn() antes de tentar ordenar.",featureChooserSortAsc:"Ordenação ascendente",featureChooserSortDesc:"Ordenação descendente"};$.ig.GridSummaries=$.ig.GridSummaries||{};$.ig.locale.pt.GridSummaries={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",featureChooserText:"Ocultar resumos",featureChooserTextHide:"Mostrar resumos",dialogButtonOKText:"OK",dialogButtonCancelText:"Cancelar",emptyCellText:"",summariesHeaderButtonTooltip:"Mostrar/ocultar resumos",defaultSummaryRowDisplayLabelCount:"Contagem",defaultSummaryRowDisplayLabelMin:"Mín.",defaultSummaryRowDisplayLabelMax:"Máx.",defaultSummaryRowDisplayLabelSum:"Soma",defaultSummaryRowDisplayLabelAvg:"Média",defaultSummaryRowDisplayLabelCustom:"Personalizado",calculateSummaryColumnKeyNotSpecified:"A chave da coluna está em falta. Uma chave de coluna deve ser especificada para calcular resumos.",featureChooserNotReferenced:"Uma referência ao Seletor de Funcionalidades está ausente. Inclua infragistics.ui.grid.featurechooser.js no seu projeto ou use um dos ficheiros de script combinados."};$.ig.GridUpdating=$.ig.GridUpdating||{};$.ig.locale.pt.GridUpdating={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",doneLabel:"Concluído",doneTooltip:"Parar de editar e atualizar",cancelLabel:"Cancelar",cancelTooltip:"Parar de editar sem atualizar",addRowLabel:"Adicionar nova linha",addRowTooltip:"Comece a adicionar uma nova linha",deleteRowLabel:"Eliminar linha",deleteRowTooltip:"Eliminar linha",igTextEditorException:"De momento, não é possível atualizar as colunas de cadeia em grid. ui.igTextEditor deve ser carregado primeiro.",igNumericEditorException:"De momento, não é possível atualizar as colunas numéricas em grid. ui.igNumericEditor deve ser carregado primeiro.",igCheckboxEditorException:"De momento, não é possível atualizar as colunas da caixa de verificação em grid. ui.igCheckboxEditor deve ser carregado primeiro.",igCurrencyEditorException:"De momento, não é possível atualizar as colunas numéricas com formato de moeda em grid. ui.igCurrencyEditor deve ser carregado primeiro.",igPercentEditorException:"De momento, não é possível atualizar as colunas numéricas com formato percentual em grid. ui.igPercentEditor deve ser carregado primeiro.",igDateEditorException:"De momento, não é possível atualizar as colunas da data na grelha. ui.igDateEditor deve ser carregado primeiro.",igDatePickerException:"De momento, não é possível atualizar as colunas da data na grelha. ui.igDatePicker deve ser carregado primeiro.",igTimePickerException:"De momento, não é possível atualizar as colunas da data na grelha. ui.igTimePicker deve ser carregado primeiro.",igComboException:"De momento, não é possível utilizar uma combinação na grelha. ui.igCombo deve ser carregado primeiro.",igRatingException:"De momento, não é possível utilizar a igRating como editor na grelha. ui.igRating deve ser carregado primeiro.",igValidatorException:"De momento, não é possível suportar a validação com as opções definidas em igGridUpdating. ui.igValidator deve ser carregado primeiro.",noPrimaryKeyException:"Para dar suporte às operações de atualização após a eliminação de uma linha, a aplicação deve definir a chavePrimária nas opções de igGrid.",hiddenColumnValidationException:"Não é possível editar a linha que tem uma coluna oculta com a validação ativada.",dataDirtyException:"A grade tem transações pendentes que podem afetar a composição de dados. Para evitar exceções, a aplicação pode ativar a opção consolidaçãoAutomática de igGrid ou deve processar o evento dataDirty de igGridUpdating e devolver falso. Durante o processamento desse evento, a aplicação também pode commit() dados em igGrid.",recordOrPropertyNotFoundException:"O registo ou propriedade especificado não foi encontrado. Verifique os critérios para a sua pesquisa e ajuste-os, se necessário.",rowUpdatingNotSupportedWithColumnVirtualization:'A atualização com modoDeEdição: "fila" requer uma configuração diferente. columnVirtualization deve estar desativado.',rowEditDialogCaptionLabel:"Editar dados da linha",excelNavigationNotSupportedWithCurrentEditMode:"A Navegação do Excel requer uma configuração diferente. O editMode deve estar definido para 'célula' ou 'linha'",columnNotFound:"A chave da coluna especificada não foi encontrada na coleção das colunas visíveis ou o índice especificado estava fora do intervalo.",rowOrColumnSpecifiedOutOfView:"A edição da linha ou coluna especificada não é atualmente possível. Deve aparecer na página atual e no quadro de virtualização.",editingInProgress:"Uma linha ou célula está a ser editada. Outro procedimento de atualização não pode ser iniciado antes de terminar a edição atual.",undefinedCellValue:"Indefinido não pode ser definido como um valor de célula.",addChildTooltip:"Adicionar uma linha subordinada",multiRowGridNotSupportedWithCurrentEditMode:"Quando a grelha tem o Esquema Multilinhas ativado, só o modo de edição de diálogo é suportado.",virtualizationNotSupportedWithoutAutoCommit:" A ativação da Atualização e da Virtualização enquanto o autoCommit está definido como falso não é suportada. Defina a opção consolidaçãoAutomática da grelha como verdadeira."};$.ig.CellMerging=$.ig.CellMerging||{};$.ig.locale.pt.CellMerging={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",mergeStrategyNotAFunction:"A estratégiaDeUnião especificada não é reconhecida como um valor predefinido válido ou uma função com este nome não foi encontrada."};$.ig.ColumnMoving=$.ig.ColumnMoving||{};$.ig.locale.pt.ColumnMoving={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",movingDialogButtonApplyText:"Aplicar",movingDialogButtonCancelText:"Cancelar",movingDialogCaptionButtonDesc:"Mover para baixo",movingDialogCaptionButtonAsc:"Mover para cima",movingDialogCaptionText:"Mover colunas",movingDialogDisplayText:"Mover colunas",movingDialogDropTooltipText:"Mover para aqui",movingDialogCloseButtonTitle:"Fechar caixa de diálogo em movimento",dropDownMoveLeftText:"Mover para a esquerda",dropDownMoveRightText:"Mover para a direita",dropDownMoveFirstText:"Mover primeiro",dropDownMoveLastText:"Mover por último",featureChooserNotReferenced:"Uma referência ao Seletor de Funcionalidades está ausente. Inclua infragistics.ui.grid.featurechooser.js no seu projeto ou use um dos ficheiros de script combinados.",movingToolTipMove:"Mover",featureChooserSubmenuText:"Mover para",columnVirtualizationEnabled:"A movimentação da coluna requer uma configuração de virtualização diferente. Use rowVirtualization ou defina o virtualizationMode como 'continuous'."};$.ig.ColumnFixing=$.ig.ColumnFixing||{};$.ig.locale.pt.ColumnFixing={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",headerFixButtonText:"Corrigir esta coluna",headerUnfixButtonText:"Desmarcar esta coluna",featureChooserTextFixedColumn:"Fixar coluna",featureChooserTextUnfixedColumn:"Desafixar coluna",groupByNotSupported:"A fixação da coluna requer uma configuração diferente. A funcionalidade Agrupar Por deve estar desativada.",virtualizationNotSupported:"A fixação da coluna requer uma configuração de virtualização diferente. rowVirtualization deve ser usada.",columnVirtualizationNotSupported:"A fixação da coluna requer uma configuração de virtualização diferente. columnVirtualization deve ser desativada.",columnMovingNotSupported:"A fixação da coluna requer uma configuração diferente. A movimentação da coluna deve estar desativada.",hidingNotSupported:"A fixação da coluna requer uma configuração diferente. A funcionalidade Ocultar deve estar desativada.",hierarchicalGridNotSupported:"igHierarchicalGrid não suporta a fixação de colunas. A fixação da coluna deve estar desativada.",responsiveNotSupported:"A fixação da coluna requer uma configuração diferente. A funcionalidade reativa deve ser desativada.",noGridWidthNotSupported:"A fixação da coluna requer uma configuração diferente. A largura da grelha deve ser definida como percentagem ou como número em pixels.",gridHeightInPercentageNotSupported:"A fixação da coluna requer uma configuração diferente. A altura da grelha deve ser definida em pixels.",defaultColumnWidthInPercentageNotSupported:"A fixação da coluna requer uma configuração diferente. A largura predefinida da coluna deve ser definida como um número em pixels.",columnsWidthShouldBeSetInPixels:"A fixação da coluna requer uma configuração de largura da coluna diferente. A largura da coluna com a tecla {key} deve ser definida em pixels.",unboundColumnsNotSupported:"A fixação da coluna requer uma configuração diferente. As colunas não ligadas devem estar desativadas.",excelNavigationNotSupportedWithCurrentEditMode:"A Navegação do Excel requer uma configuração diferente. editMode deve ser definido como 'cell' ou 'row'.",initialFixingNotApplied:"A fixação inicial não pôde ser aplicada para a coluna com a chave: {0}. Motivo: {1}",setOptionGridWidthException:"Valor incorreto para a largura da grelha. Quando houver colunas fixas, a largura da área visível das colunas não fixadas deve ser maior ou igual ao valor da minimalVisibleAreaWidth.",noneError:"A sua configuração de rede foi bem sucedida!",notValidIdentifierError:"A chave da coluna especificada não é válida. Forneça uma chave de coluna que corresponda à chave de uma das colunas de grelha definidas.",fixingRefusedError:"A correção desta coluna não é suportada no momento. Desmarque outra coluna visível ou utilize primeiro o método showColumn() em qualquer coluna oculta não fixada.",fixingRefusedMinVisibleAreaWidthError:"Esta coluna não pode ser fixada. A sua largura excede o espaço disponível para a fixação de uma coluna na grelha.",alreadyHiddenError:"Não é possível fixar/desafixar esta coluna. O método showColumn() deve ser utilizado primeiro na coluna.",alreadyUnfixedError:"Esta coluna já não está fixada.",alreadyFixedError:"Esta coluna já está fixada.",unfixingRefusedError:"Não é possível desafixar esta coluna neste momento. O método showColumn() deve ser usado primeiro em qualquer coluna oculta fixada.",targetNotFoundError:"Não foi possível encontrar a coluna de destino com a chave {key}. Verifique a chave utilizada para a pesquisa e ajuste-a, se necessário."};$.ig.GridAppendRowsOnDemand=$.ig.GridAppendRowsOnDemand||{};$.ig.locale.pt.GridAppendRowsOnDemand={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",loadMoreDataButtonText:"Carregar mais dados",appendRowsOnDemandRequiresHeight:"Anexar linhas a pedido requer uma configuração diferente. A altura da grelha deve ser definida.",groupByNotSupported:"Anexar linhas a pedido requer uma configuração diferente. Agrupar Por deve estar desativado.",pagingNotSupported:"Anexar linhas a pedido requer uma configuração diferente. A paginação deve estar desativada.",cellMergingNotSupported:"Anexar linhas a pedido requer uma configuração diferente. A união de células deve estar desativada.",virtualizationNotSupported:"Anexar linhas a pedido requer uma configuração diferente. A virtualização deve estar desativada."};$.ig.igGridResponsive=$.ig.igGridResponsive||{};$.ig.locale.pt.igGridResponsive={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",fixedVirualizationNotSupported:'A funcionalidade reativa requer uma configuração de virtualização diferente. virtualizationMode deve ser definido como "continuous".'};$.ig.igGridMultiColumnHeaders=$.ig.igGridMultiColumnHeaders||{};$.ig.locale.pt.igGridMultiColumnHeaders={optionChangeNotSupported:"{optionName} não pode ser editado após a inicialização. O seu valor deve ser definido durante a inicialização.",multiColumnHeadersNotSupportedWithColumnVirtualization:"Os cabeçalhos de várias colunas requerem uma configuração diferente. A columnVirtualization deve estar desativada.",cannotExpandMultiColumnHeader:"O cabeçalho multicoluna excede a largura máxima permitida da área fixa e, portanto, não pode ser expandido",atLeastOneColumnShouldBeShownWhenCollapseOrExpand:"Deve ter pelo menos uma coluna exibida ao expandir ou fechar um cabeçalho multicoluna.",collapsedColumnIconTooltip:"Expandir",expandedColumnIconTooltip:"Fechar"};$.ig.Grid.locale=$.ig.Grid.locale||$.ig.locale.pt.Grid;$.ig.GridFiltering.locale=$.ig.GridFiltering.locale||$.ig.locale.pt.GridFiltering;$.ig.GridGroupBy.locale=$.ig.GridGroupBy.locale||$.ig.locale.pt.GridGroupBy;$.ig.GridHiding.locale=$.ig.GridHiding.locale||$.ig.locale.pt.GridHiding;$.ig.GridResizing.locale=$.ig.GridResizing.locale||$.ig.locale.pt.GridResizing;$.ig.GridPaging.locale=$.ig.GridPaging.locale||$.ig.locale.pt.GridPaging;$.ig.GridSelection.locale=$.ig.GridSelection.locale||$.ig.locale.pt.GridSelection;$.ig.GridRowSelectors.locale=$.ig.GridRowSelectors.locale||$.ig.locale.pt.GridRowSelectors;$.ig.GridSorting.locale=$.ig.GridSorting.locale||$.ig.locale.pt.GridSorting;$.ig.GridSummaries.locale=$.ig.GridSummaries.locale||$.ig.locale.pt.GridSummaries;$.ig.GridUpdating.locale=$.ig.GridUpdating.locale||$.ig.locale.pt.GridUpdating;$.ig.CellMerging.locale=$.ig.CellMerging.locale||$.ig.locale.pt.CellMerging;$.ig.ColumnMoving.locale=$.ig.ColumnMoving.locale||$.ig.locale.pt.ColumnMoving;$.ig.ColumnFixing.locale=$.ig.ColumnFixing.locale||$.ig.locale.pt.ColumnFixing;$.ig.GridAppendRowsOnDemand.locale=$.ig.GridAppendRowsOnDemand.locale||$.ig.locale.pt.GridAppendRowsOnDemand;$.ig.igGridResponsive.locale=$.ig.igGridResponsive.locale||$.ig.locale.pt.igGridResponsive;$.ig.igGridMultiColumnHeaders.locale=$.ig.igGridMultiColumnHeaders.locale||$.ig.locale.pt.igGridMultiColumnHeaders;$.ig.HierarchicalGrid.locale=$.ig.HierarchicalGrid.locale||$.ig.locale.pt.HierarchicalGrid;return $.ig.locale.pt});