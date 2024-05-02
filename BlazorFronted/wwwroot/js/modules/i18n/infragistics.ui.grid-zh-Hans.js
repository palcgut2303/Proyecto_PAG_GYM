/*!@license
* Infragistics.Web.ClientUI Grid localization resources 23.2.50
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["jquery"],factory)}else{return factory(jQuery)}})(function($){$.ig=$.ig||{};$.ig.locale=$.ig.locale||{};$.ig.locale["zh-Hans"]=$.ig.locale["zh-Hans"]||{};$.ig.Grid=$.ig.Grid||{};$.ig.locale["zh-Hans"].Grid={noSuchWidget:"无法识别 {featureName}。确认存在这样的功能并且拼写正确。",autoGenerateColumnsNoRecords:"已启用 autoGenerateColumns，但数据源中无记录。加载带有记录的数据源，以便确定列。",optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",optionChangeNotScrollingGrid:"初始化后无法编辑 {optionName}，因为您的网格最初不能滚动，需要全部重新渲染。应在初始化时设置该选项。",widthChangeFromPixelsToPercentagesNotSupported:"无法将网格的选项宽度从像素动态更改为百分比。",widthChangeFromPercentagesToPixelsNotSupported:"无法将网格的选项宽度从百分比动态更改为像素。",noPrimaryKeyDefined:"没有为网格定义主键。定义主键以使用诸如网格编辑之类的功能。",indexOutOfRange:"指定的行索引超出范围。应提供介于 0 和 {max} 之间的行索引。",noSuchColumnDefined:"指定的列键无效。应提供与已定义的其中一个网格列的键匹配的列键。",columnIndexOutOfRange:"指定的列索引超出范围。应提供 0 到 {max} 之间的列索引。",recordNotFound:"在数据视图中找不到 ID 为 {id} 的记录。验证用于搜索的 ID，并在必要时进行调整。",columnNotFound:"找不到包含键 {key} 的列。验证用于搜索的密钥，并在必要时进行调整。",colPrefix:"列 ",columnVirtualizationRequiresWidth:"虚拟化和列虚拟化要求设置网格或其列的宽度。提供网格宽度，defaultColumnWidth 或每列宽度的值。",virtualizationRequiresHeight:"虚拟化要求设置网格的高度。应提供网格高度的值。",colVirtualizationDenied:"columnVirtualization 需要不同的 virtualizationMode 设置。虚拟化模式应设置为 'fixed'。",noColumnsButAutoGenerateTrue:"autoGenerateColumns 已禁用，并且未为网格定义任何列。启用 autoGenerateColumns 或手动指定列。",expandTooltip:"展开行",collapseTooltip:"折叠行",movingNotAllowedOrIncompatible:"指定的列无法移动。验证是否存在这样的列，并且其结束位置不会破坏列布局。",allColumnsHiddenOnInitialization:"初始化期间不能隐藏所有列。至少一列应配置为可见。",virtualizationNotSupportedWithAutoSizeCols:"虚拟化要求的列宽配置与 '*' 不同。列宽应设置为以像素为单位的数值。",columnVirtualizationNotSupportedWithPercentageWidth:"列虚拟化需要不同的网格宽度配置。列宽应设置为以像素为单位的数值。",mixedWidthsNotSupported:"要求所有列的宽度设置相同。将所有列宽设置为百分比或像素数。",multiRowLayoutColumnError:"无法将键为 {key1} 的列添加到多行布局中，因为键为 {key2} 的列已经占据了其在布局中的位置。",multiRowLayoutNotComplete:"多行布局不完整。列定义创建的布局有空白且无法正确呈现。",multiRowLayoutMixedWidths:"多行布局不支持混合宽度 (百分比和像素)。请以像素或百分比定义所有列宽。 ",multiRowLayoutHidingNotSupported:"多行布局不支持隐藏列。请从列定义中删除隐藏的列。",scrollableGridAreaNotVisible:"固定的页眉和页脚区域大于可用的网格高度。滚动区域不可见。请设置更大的网格高度。",featureNotSupportedWithMRL:"多行布局不支持 {featureName}。请从功能列表中删除该功能。",editorTypeCannotBeDetermined:"正在更新，没有足够的信息来正确确定用于列的编辑器类型: "};$.ig.HierarchicalGrid=$.ig.HierarchicalGrid||{};$.ig.locale["zh-Hans"].HierarchicalGrid={noPrimaryKey:"igHierarchicalGrid 需要定义主键。应提供主键。",expandTooltip:"展开行",collapseTooltip:"折叠行"};$.ig.GridFeatureChooser=$.ig.GridFeatureChooser||{};$.ig.locale["zh-Hans"].GridFeatureChooser={featureChooserTooltip:"功能选择器"};$.ig.GridFiltering=$.ig.GridFiltering||{};$.ig.locale["zh-Hans"].GridFiltering={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",startsWithNullText:"开始条件...",endsWithNullText:"结束条件...",containsNullText:"包含...",doesNotContainNullText:"不包含...",equalsNullText:"等于...",doesNotEqualNullText:"不等于...",greaterThanNullText:"大于...",lessThanNullText:"小于...",greaterThanOrEqualToNullText:"大于或等于...",lessThanOrEqualToNullText:"小于或等于...",onNullText:"在...",notOnNullText:"不在...",afterNullText:"之后",beforeNullText:"之前",emptyNullText:"空白",notEmptyNullText:"非空白",nullNullText:"Null",notNullNullText:"非 Null",emptyLabel:"空白",notEmptyLabel:"非空白",nullLabel:"Null",notNullLabel:"非 Null",startsWithLabel:"开始条件：",endsWithLabel:"结束条件：",containsLabel:"包含",doesNotContainLabel:"不包含",equalsLabel:"等于",doesNotEqualLabel:"不等于",greaterThanLabel:"大于",lessThanLabel:"小于",greaterThanOrEqualToLabel:"大于或等于",lessThanOrEqualToLabel:"小于或等于",trueLabel:"True",falseLabel:"False",afterLabel:"之后",beforeLabel:"之前",todayLabel:"今天",yesterdayLabel:"昨天",thisMonthLabel:"本月",lastMonthLabel:"上月",nextMonthLabel:"下个月",thisYearLabel:"今年",lastYearLabel:"去年",nextYearLabel:"明年",atLabel:"在",atNullText:"在...",notAtLabel:"不在",notAtNullText:"不在...",atBeforeLabel:"不晚于",atBeforeNullText:"不晚于...",atAfterLabel:"不早于",atAfterNullText:"不早于...",clearLabel:"清除筛选器",noFilterLabel:"否",onLabel:"打开",notOnLabel:"不在",advancedButtonLabel:"高级",filterDialogCaptionLabel:"高级筛选器",filterDialogConditionLabel1:"显示匹配的记录 ",filterDialogConditionLabel2:" 以下条件之一",filterDialogConditionDropDownLabel:"筛选条件",filterDialogOkLabel:"搜索",filterDialogCancelLabel:"取消",filterDialogAnyLabel:"任何",filterDialogAllLabel:"全部",filterDialogAddLabel:"添加",filterDialogErrorLabel:"已达到支持的最大筛选器数量。",filterDialogCloseLabel:"关闭筛选对话框",filterSummaryTitleLabel:"搜索结果",filterSummaryTemplate:"${matches} 个匹配记录",filterDialogClearAllLabel:"清除全部",tooltipTemplate:"${condition} 筛选器已应用",featureChooserText:"隐藏筛选器",featureChooserTextHide:"显示筛选器",featureChooserTextAdvancedFilter:"高级筛选器",virtualizationSimpleFilteringNotAllowed:"列虚拟化需要不同类型的筛选。将筛选模式设置为 'advanced' 或禁用 advancedModeEditorsVisible",multiRowLayoutSimpleFilteringNotAllowed:"多行布局需要不同类型的筛选。将筛选模式设置为 'advanced'",featureChooserNotReferenced:"缺少对功能选择器的引用。在项目中包含 infragistics.ui.grid.featurechooser.js，使用加载程序或组合脚本文件之一。",conditionListLengthCannotBeZero:"columnSettings 中的 conditionList 数组为空。应为 conditionList 提供合适的数组。",conditionNotValidForColumnType:"条件 '{0}' 不适用于当前配置。应将其替换为适合 {1} 列类型的条件。",defaultConditionContainsInvalidCondition:"'{0}' 列的 defaultExpression 包含不允许的条件。应将其替换为适合 {0} 列类型的条件。",initialConditionIsNotInTheConditionsListArrayOrIsNotInTheDefaultConditions:"在列 '{0}' 的 columnSettings 中设置的初始条件不是默认值 (或自定义条件)，或者在 columnSettins 中设置的 conditionList 数组中不可用。请应用有效条件。"};$.ig.GridGroupBy=$.ig.GridGroupBy||{};$.ig.locale["zh-Hans"].GridGroupBy={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",emptyGroupByAreaContent:"将列拖到此处或 {0} 以分组",emptyGroupByAreaContentSelectColumns:"选择列",emptyGroupByAreaContentSelectColumnsCaption:"选择列",expandTooltip:"展开已分组的行",collapseTooltip:"折叠分组行",removeButtonTooltip:"移除分组列",modalDialogCaptionButtonDesc:"升序排列",modalDialogCaptionButtonAsc:"降序排序",modalDialogCaptionButtonUngroup:"取消分组",modalDialogGroupByButtonText:"分组依据",modalDialogCaptionText:"添加至分组的依据",modalDialogDropDownLabel:"显示:",modalDialogClearAllButtonLabel:"清除全部",modalDialogRootLevelHierarchicalGrid:"根",modalDialogDropDownButtonCaption:"显示/隐藏",modalDialogButtonApplyText:"应用",modalDialogButtonCancelText:"取消",fixedVirualizationNotSupported:"分组依据需要另一个虚拟化设置。虚拟化模式应设置为 'continuous'。",summaryRowTitle:"分组汇总行",summaryIconTitle:"{0} 的摘要: {1}"};$.ig.GridHiding=$.ig.GridHiding||{};$.ig.locale["zh-Hans"].GridHiding={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",columnChooserDisplayText:"列选择器",hiddenColumnIndicatorTooltipText:"隐藏列",columnHideText:"隐藏",columnChooserCaptionLabel:"列选择器",columnChooserCloseButtonTooltip:"收盘",hideColumnIconTooltip:"隐藏",featureChooserNotReferenced:"缺少对功能选择器的引用。在您的项目中包含 infragistics.ui.grid.featurechooser.js 或使用组合脚本文件之一。",columnChooserShowText:"显示",columnChooserHideText:"隐藏",columnChooserResetButtonLabel:"重置",columnChooserButtonApplyText:"应用",columnChooserButtonCancelText:"取消"};$.ig.GridResizing=$.ig.GridResizing||{};$.ig.locale["zh-Hans"].GridResizing={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",noSuchVisibleColumn:"指定的键没有可见的列。在尝试调整列大小之前，应在列上使用 showColumn() 方法。",resizingAndFixedVirtualizationNotSupported:"调整列大小需要不同的虚拟化设置。使用 rowVirtualization 并将虚拟化模式设置为 'continuous'。"};$.ig.GridPaging=$.ig.GridPaging||{};$.ig.locale["zh-Hans"].GridPaging={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",pageSizeDropDownLabel:"显示 ",pageSizeDropDownTrailingLabel:"记录",nextPageLabelText:"下一步",prevPageLabelText:"上一个",firstPageLabelText:"",lastPageLabelText:"",currentPageDropDownLeadingLabel:"页码",currentPageDropDownTrailingLabel:"的 ${count}",currentPageDropDownTooltip:"选择页面索引",pageSizeDropDownTooltip:"选择每页记录数",pagerRecordsLabelTooltip:"当前记录范围",prevPageTooltip:"上一页",nextPageTooltip:"下一页",firstPageTooltip:"第一页",lastPageTooltip:"最后一页",pageTooltipFormat:"第 ${index} 页",pagerRecordsLabelTemplate:"${recordCount} 条记录中的 ${startRecord} - ${endRecord} 条",invalidPageIndex:"指定的页面索引无效。提供大于或等于 0 且小于页面总数的页面索引。"};$.ig.GridSelection=$.ig.GridSelection||{};$.ig.locale["zh-Hans"].GridSelection={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",persistenceImpossible:"持续选择需要不同的配置。应配置网格的主键选项。"};$.ig.GridRowSelectors=$.ig.GridRowSelectors||{};$.ig.locale["zh-Hans"].GridRowSelectors={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",selectionNotLoaded:"igGridSelection 尚未初始化。应该为网格启用选择。",columnVirtualizationEnabled:"行选择器要求不同的虚拟化设置。使用 rowVirtualization 或将 virtualizationMode 设置为 'continuous'。",selectedRecordsText:"您已选择 ${checked} 条记录。",deselectedRecordsText:"您已取消选择 ${unchecked} 条记录。",selectAllText:"选择所有 ${totalRecordsCount} 条记录",deselectAllText:"取消选择所有 ${totalRecordsCount} 条记录",requireSelectionWithCheckboxes:"启用复选框时，需要进行选择"};$.ig.GridSorting=$.ig.GridSorting||{};$.ig.locale["zh-Hans"].GridSorting={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",sortedColumnTooltip:"已 ${direction} 排序",unsortedColumnTooltip:"排序列",ascending:"升序",descending:"降序",modalDialogSortByButtonText:"排序依据",modalDialogResetButton:"重置",modalDialogCaptionButtonDesc:"单击进行降序排序",modalDialogCaptionButtonAsc:"单击进行升序排序",modalDialogCaptionButtonUnsort:"单击以删除排序",featureChooserText:"按多个排序",modalDialogCaptionText:"按多个排序",modalDialogButtonApplyText:"应用",modalDialogButtonCancelText:"取消",sortingHiddenColumnNotSupport:"指定的列已隐藏，因此无法排序。在尝试排序之前，在其上使用 showColumn() 方法。",featureChooserSortAsc:"升序排列",featureChooserSortDesc:"降序排序"};$.ig.GridSummaries=$.ig.GridSummaries||{};$.ig.locale["zh-Hans"].GridSummaries={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",featureChooserText:"隐藏摘要",featureChooserTextHide:"显示摘要",dialogButtonOKText:"确定",dialogButtonCancelText:"取消",emptyCellText:"",summariesHeaderButtonTooltip:"显示/隐藏摘要",defaultSummaryRowDisplayLabelCount:"计算",defaultSummaryRowDisplayLabelMin:"最小",defaultSummaryRowDisplayLabelMax:"最大",defaultSummaryRowDisplayLabelSum:"合计",defaultSummaryRowDisplayLabelAvg:"平均",defaultSummaryRowDisplayLabelCustom:"自定义",calculateSummaryColumnKeyNotSpecified:"缺少列关键字。应指定列键以计算汇总。",featureChooserNotReferenced:"缺少对功能选择器的引用。在您的项目中包含 infragistics.ui.grid.featurechooser.js 或使用组合脚本文件之一。"};$.ig.GridUpdating=$.ig.GridUpdating||{};$.ig.locale["zh-Hans"].GridUpdating={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",doneLabel:"完成",doneTooltip:"停止编辑和更新",cancelLabel:"取消",cancelTooltip:"停止编辑而不更新",addRowLabel:"添加新行",addRowTooltip:"开始添加新行",deleteRowLabel:"删除行",deleteRowTooltip:"删除行",igTextEditorException:"当前无法更新网格中的字符串列。应该首先加载 ui.igTextEditor。",igNumericEditorException:"当前无法更新网格中的数字列。应该首先加载 ui.igNumericEditor。",igCheckboxEditorException:"当前无法更新网格中的复选框列。应该首先加载 ui.igCheckboxEditor。",igCurrencyEditorException:"当前无法在网格中用货币格式更新数字列。应该首先加载 ui.igCurrencyEditor。",igPercentEditorException:"当前无法在网格中用百分比格式更新数字列。应该首先加载 ui.igPercentEditor。",igDateEditorException:"当前无法更新网格中的日期列。应该首先加载 ui.igDateEditor。",igDatePickerException:"当前无法更新网格中的日期列。应该首先加载 ui.igDatePicker。",igTimePickerException:"当前无法更新网格中的日期列。应该首先加载 ui.igTimePicker。",igComboException:"当前无法在网格中使用组合。应该首先加载 ui.igCombo。",igRatingException:"当前无法在网格中使用 igRating 作为编辑器。应该首先加载 ui.igRating。",igValidatorException:"当前不支持 igGridUpdating 中定义的选项的验证。应该首先加载 ui.igValidator。",noPrimaryKeyException:"为了支持删除行之后的更新操作，应用程序应在 igGrid 的选项中定义 primaryKey。",hiddenColumnValidationException:"无法编辑具有隐藏列 (已启用验证) 的行。",dataDirtyException:"网格具有挂起的事务，这可能会影响数据的呈现。为了防止异常，应用程序可以启用 igGrid 的 autoCommit 选项，或者应处理 igGridUpdating 的 dataDirty 事件并返回 false。在处理该事件时，应用程序还可以在 igGrid 中执行 commit() 数据。",recordOrPropertyNotFoundException:"未找到指定的记录或属性。验证搜索条件，并在必要时进行调整。",rowUpdatingNotSupportedWithColumnVirtualization:'使用 editMode: "row" 更新需要不同的配置。应该禁用 columnVirtualization。',rowEditDialogCaptionLabel:"编辑行数据",excelNavigationNotSupportedWithCurrentEditMode:"Excel 导航需要不同的配置。editMode 应设置为 'cell' 或 'row'。",columnNotFound:"在可见列的集合中未找到指定的列关键字或指定的索引超出范围。",rowOrColumnSpecifiedOutOfView:"当前无法编辑指定的行或列。它应显示在当前页面和虚拟化框架中。",editingInProgress:"当前正在编辑行或单元格。当前编辑完成之前，无法启动其他更新程序。",undefinedCellValue:"无法将未定义值设置为单元格值。",addChildTooltip:"添加子行",multiRowGridNotSupportedWithCurrentEditMode:"当网格启用多行布局时，仅支持对话框编辑模式。",virtualizationNotSupportedWithoutAutoCommit:"当 autoCommit 设置为 false 时，不支持启用更新和虚拟化。请将表格的 autoCommit 选项设置为 true。"};$.ig.CellMerging=$.ig.CellMerging||{};$.ig.locale["zh-Hans"].CellMerging={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",mergeStrategyNotAFunction:"指定的 mergeStrategy 无法识别为有效的预定义值，或未找到具有该名称的函数。"};$.ig.ColumnMoving=$.ig.ColumnMoving||{};$.ig.locale["zh-Hans"].ColumnMoving={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",movingDialogButtonApplyText:"应用",movingDialogButtonCancelText:"取消",movingDialogCaptionButtonDesc:"下移",movingDialogCaptionButtonAsc:"上移",movingDialogCaptionText:"移动列",movingDialogDisplayText:"移动列",movingDialogDropTooltipText:"移动到这里",movingDialogCloseButtonTitle:"关闭移动对话框",dropDownMoveLeftText:"向左移动",dropDownMoveRightText:"向右移动",dropDownMoveFirstText:"先移动",dropDownMoveLastText:"最后移动",featureChooserNotReferenced:"缺少对功能选择器的引用。在您的项目中包含 infragistics.ui.grid.featurechooser.js 或使用组合脚本文件之一。",movingToolTipMove:"移动",featureChooserSubmenuText:"移至",columnVirtualizationEnabled:"列移动需要不同的虚拟化设置。使用 rowVirtualization 或将 virtualizationMode 设置为 'continuous'。"};$.ig.ColumnFixing=$.ig.ColumnFixing||{};$.ig.locale["zh-Hans"].ColumnFixing={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",headerFixButtonText:"固定此列",headerUnfixButtonText:"取消固定此列",featureChooserTextFixedColumn:"固定列",featureChooserTextUnfixedColumn:"取消固定列",groupByNotSupported:"列固定需要不同的配置。应禁用分组依据功能。",virtualizationNotSupported:"列固定需要不同的虚拟化设置。应该使用 rowVirtualization。",columnVirtualizationNotSupported:"列固定需要不同的虚拟化设置。应禁用 columnVirtualization。",columnMovingNotSupported:"列固定需要不同的配置。应禁用列移动。",hidingNotSupported:"列固定需要不同的配置。应禁用隐藏功能。",hierarchicalGridNotSupported:"igHierarchicalGrid 不支持列固定。应禁用列固定。",responsiveNotSupported:"列固定需要不同的配置。应禁用响应功能。",noGridWidthNotSupported:"列固定需要不同的配置。网格宽度应设置为百分比或像素数。",gridHeightInPercentageNotSupported:"列固定需要不同的配置。应以像素为单位设置网格高度。",defaultColumnWidthInPercentageNotSupported:"列固定需要不同的配置。默认列宽应设置为以像素为单位的数值。",columnsWidthShouldBeSetInPixels:"列固定需要不同的列宽设置。带有键 {key} 的列的宽度应以像素为单位进行设置。",unboundColumnsNotSupported:"列固定需要不同的配置。应禁用未绑定列。",excelNavigationNotSupportedWithCurrentEditMode:"Excel 导航需要不同的配置。 editMode 应设置为 'cell' 或 'row'。",initialFixingNotApplied:"初始固定不适用于带键的列: {0}. 原因: {1}",setOptionGridWidthException:"选项网格宽度的值不正确。当固定列存在时，未固定列的可见区域的宽度应大于或等于 minimumVisibleAreaWidth 的值。",noneError:"您的网格配置成功！",notValidIdentifierError:"指定的列键无效。提供与其中一个已定义网格列的键匹配的列键。",fixingRefusedError:"当前不支持固定此列。取消固定另一个可见列，或先对任何隐藏的未固定列使用 showColumn() 方法。",fixingRefusedMinVisibleAreaWidthError:"无法固定此列。其宽度超过了用于在网格中固定列的可用空间。",alreadyHiddenError:"当前无法固定/取消固定此列。应首先在列上使用 showColumn() 方法。",alreadyUnfixedError:"已取消固定此列。",alreadyFixedError:"已固定此列。",unfixingRefusedError:"当前无法取消固定此列。应首先在任何隐藏的固定列上使用 showColumn() 方法。",targetNotFoundError:"找不到键为 {key} 的目标列。验证用于搜索的密钥，并在必要时进行调整。"};$.ig.GridAppendRowsOnDemand=$.ig.GridAppendRowsOnDemand||{};$.ig.locale["zh-Hans"].GridAppendRowsOnDemand={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",loadMoreDataButtonText:"加载更多数据",appendRowsOnDemandRequiresHeight:"AppendRowsOnDemand 需要不同的配置。应设置网格高度。",groupByNotSupported:"AppendRowsOnDemand 需要不同的配置。分组依据应禁用。",pagingNotSupported:"AppendRowsOnDemand 需要不同的配置。应禁用分页。",cellMergingNotSupported:"AppendRowsOnDemand 需要不同的配置。应禁用单元格合并。",virtualizationNotSupported:"AppendRowsOnDemand 需要不同的配置。应禁用虚拟化。"};$.ig.igGridResponsive=$.ig.igGridResponsive||{};$.ig.locale["zh-Hans"].igGridResponsive={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",fixedVirualizationNotSupported:'响应功能需要不同的虚拟化设置。虚拟化模式应设置为 "continuous"。'};$.ig.igGridMultiColumnHeaders=$.ig.igGridMultiColumnHeaders||{};$.ig.locale["zh-Hans"].igGridMultiColumnHeaders={optionChangeNotSupported:"初始化后无法编辑 {optionName}。其值应在初始化期间设置。",multiColumnHeadersNotSupportedWithColumnVirtualization:"多列标题要求不同的配置。应该禁用 columnVirtualization。",cannotExpandMultiColumnHeader:"多列标题超出了允许的最大固定区域宽度，因此无法扩展",atLeastOneColumnShouldBeShownWhenCollapseOrExpand:"展开或折叠多列标题时，至少应显示一列。",collapsedColumnIconTooltip:"展开",expandedColumnIconTooltip:"折叠"};$.ig.Grid.locale=$.ig.Grid.locale||$.ig.locale["zh-Hans"].Grid;$.ig.GridFiltering.locale=$.ig.GridFiltering.locale||$.ig.locale["zh-Hans"].GridFiltering;$.ig.GridGroupBy.locale=$.ig.GridGroupBy.locale||$.ig.locale["zh-Hans"].GridGroupBy;$.ig.GridHiding.locale=$.ig.GridHiding.locale||$.ig.locale["zh-Hans"].GridHiding;$.ig.GridResizing.locale=$.ig.GridResizing.locale||$.ig.locale["zh-Hans"].GridResizing;$.ig.GridPaging.locale=$.ig.GridPaging.locale||$.ig.locale["zh-Hans"].GridPaging;$.ig.GridSelection.locale=$.ig.GridSelection.locale||$.ig.locale["zh-Hans"].GridSelection;$.ig.GridRowSelectors.locale=$.ig.GridRowSelectors.locale||$.ig.locale["zh-Hans"].GridRowSelectors;$.ig.GridSorting.locale=$.ig.GridSorting.locale||$.ig.locale["zh-Hans"].GridSorting;$.ig.GridSummaries.locale=$.ig.GridSummaries.locale||$.ig.locale["zh-Hans"].GridSummaries;$.ig.GridUpdating.locale=$.ig.GridUpdating.locale||$.ig.locale["zh-Hans"].GridUpdating;$.ig.CellMerging.locale=$.ig.CellMerging.locale||$.ig.locale["zh-Hans"].CellMerging;$.ig.ColumnMoving.locale=$.ig.ColumnMoving.locale||$.ig.locale["zh-Hans"].ColumnMoving;$.ig.ColumnFixing.locale=$.ig.ColumnFixing.locale||$.ig.locale["zh-Hans"].ColumnFixing;$.ig.GridAppendRowsOnDemand.locale=$.ig.GridAppendRowsOnDemand.locale||$.ig.locale["zh-Hans"].GridAppendRowsOnDemand;$.ig.igGridResponsive.locale=$.ig.igGridResponsive.locale||$.ig.locale["zh-Hans"].igGridResponsive;$.ig.igGridMultiColumnHeaders.locale=$.ig.igGridMultiColumnHeaders.locale||$.ig.locale["zh-Hans"].igGridMultiColumnHeaders;$.ig.HierarchicalGrid.locale=$.ig.HierarchicalGrid.locale||$.ig.locale["zh-Hans"].HierarchicalGrid;return $.ig.locale["zh-Hans"]});