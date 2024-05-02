/*!@license
* Infragistics.Web.ClientUI infragistics.categorychart.js 23.2.20232.48
*
* Copyright (c) 2011-2024 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends:
*     jquery-1.4.4.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.ext_core.js
*     infragistics.ext_collections.js
*     infragistics.dv_core.js
*     infragistics.dv_dataseriesadapter.js
*     infragistics.datachart_category.js
*     infragistics.datachart_categorycore.js
*     infragistics.datachart_domainChart.js
*     infragistics.datachart_core.js
*     infragistics.dv_datasource.js
*     infragistics.dv_visualdata.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core","./infragistics.dv_dataseriesadapter","./infragistics.datachart_category","./infragistics.datachart_categorycore","./infragistics.datachart_domainChart","./infragistics.datachart_core","./infragistics.dv_datasource","./infragistics.dv_visualdata","./infragistics.ext_ui"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$ad=$$t;var $$0=$.ig.globalDefs.$$0;var $$4=$.ig.globalDefs.$$4;var $$1=$.ig.globalDefs.$$1;var $$w=$.ig.globalDefs.$$w;var $$x=$.ig.globalDefs.$$x;var $$f=$.ig.globalDefs.$$f;var $$g=$.ig.globalDefs.$$g;var $$dc=$.ig.globalDefs.$$dc;var $$j=$.ig.globalDefs.$$j;var $$y=$.ig.globalDefs.$$y;var $$ap=$.ig.globalDefs.$$ap;var $$6=$.ig.globalDefs.$$6;var $$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine([]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compareSimple,$x=$.ig.util.tryParseNumber,$y=$.ig.util.tryParseNumber1,$z=$.ig.util.numberToString,$0=$.ig.util.numberToString1,$1=$.ig.util.parseNumber,$2=$.ig.util.compare,$3=$.ig.util.replace,$4=$.ig.util.stringFormat,$5=$.ig.util.stringFormat1,$6=$.ig.util.stringFormat2,$7=$.ig.util.stringCompare1,$8=$.ig.util.stringCompare2,$9=$.ig.util.stringCompare3;$d("CategoryChartType:f",false,false,{Line:0,Area:1,Column:2,Point:3,StepLine:4,StepArea:5,Spline:6,SplineArea:7,Waterfall:8,Auto:9});$c("CategoryChart:a","XYChart",{sr:function(){$.ig.XYChart.prototype.sr.call(this);if(this.dataChart()==null){return}var a=this.dataChart()._cu._j.e();this.negativeBrushes(a._d);this.negativeOutlines(a._e);if(this.xAxisLabelTextColor()==null){this.xAxisLabelTextColor(a._k)}if(this.yAxisLabelTextColor()==null){this.yAxisLabelTextColor(a._k)}this.yAxisTickLength(0);this.yAxisMajorStroke($.ig.AxisDefaults.prototype.h);this.yAxisStroke(null);this.xAxisStroke($.ig.AxisDefaults.prototype.g);this.xAxisMajorStroke(null);this.xAxisTickLength($.ig.AxisDefaults.prototype.f);this.xAxisTickStroke($.ig.AxisDefaults.prototype.j);this.xAxisTickStrokeThickness($.ig.AxisDefaults.prototype.e);this.crosshairsAnnotationEnabled(true);this.crosshairsSnapToData(true);this.crosshairsDisplayMode(0);this.crosshairsLineThickness($.ig.Defaults.prototype.j);this.crosshairsLineVerticalStroke($.ig.Defaults.prototype.ae);this.crosshairsAnnotationXAxisBackground($.ig.Defaults.prototype.af);this.crosshairsAnnotationXAxisTextColor($.ig.Defaults.prototype.ag);this.isTransitionInEnabled(true)},st:function(a,b){$.ig.XYChart.prototype.st.call(this,a,b);a.transitionInDuration(this.transitionInDuration());a.transitionOutDuration(this.transitionOutDuration());a.transitionInEasingFunction(this.transitionInEasingFunction());a.transitionOutEasingFunction(this.transitionOutEasingFunction())},th:function(a,b,c){var $self=this;$.ig.XYChart.prototype.th.call(this,a,b,c);switch(a){case"TransitionInDuration":this.sg(function(d){d.transitionInDuration($self.transitionInDuration())});break;case"TransitionOutDuration":this.sg(function(d){d.transitionOutDuration($self.transitionOutDuration())});break;case"TransitionInEasingFunction":this.sg(function(d){d.transitionInEasingFunction($self.transitionInEasingFunction())});break;case"TransitionOutEasingFunction":this.sg(function(d){d.transitionOutEasingFunction($self.transitionOutEasingFunction())});break}},af4:0,transitionInDuration:function(a){if(arguments.length===1){var b=this.transitionInDuration();if(a!=b){this.af4=a;this.te("TransitionInDuration",b,this.transitionInDuration())}return a}else{return this.af4}},af5:0,transitionOutDuration:function(a){if(arguments.length===1){var b=this.transitionOutDuration();if(a!=b){this.af5=a;this.te("TransitionOutDuration",b,this.transitionOutDuration())}return a}else{return this.af5}},ad7:null,transitionInEasingFunction:function(a){if(arguments.length===1){var b=this.transitionInEasingFunction();if(a!=b){this.ad7=a;this.te("TransitionInEasingFunction",b,this.transitionInEasingFunction())}return a}else{return this.ad7}},ad8:null,transitionOutEasingFunction:function(a){if(arguments.length===1){var b=this.transitionOutEasingFunction();if(a!=b){this.ad8=a;this.te("TransitionOutEasingFunction",b,this.transitionOutEasingFunction())}return a}else{return this.ad8}},exportSerializedVisualData:function(){var cvd_=this.exportVisualData();cvd_.scaleByViewport();return cvd_.serialize()},sm:function(a){$.ig.XYChart.prototype.sm.call(this,a);a.animateSeriesWhenAxisRangeChanges(this.animateSeriesWhenAxisRangeChanges());a.shouldAutoExpandMarginForInitialLabels(this.shouldAutoExpandMarginForInitialLabels());a.shouldConsiderAutoRotationForInitialLabels(this.shouldConsiderAutoRotationForInitialLabels());a.autoExpandMarginExtraPadding(this.autoExpandMarginExtraPadding());a.autoExpandMarginMaximumValue(this.autoExpandMarginMaximumValue());a.autoMarginAndAngleUpdateMode(this.autoMarginAndAngleUpdateMode())},ss:function(a,b){$.ig.XYChart.prototype.ss.call(this,a,b);var c=$b($.ig.HorizontalAnchoredCategorySeries.prototype.$type,a);if(c==null){return}c.markerCollisionAvoidance(this.markerCollisionAvoidance());c.isTransitionInEnabled(this.isTransitionInEnabled());c.transitionInMode(this.transitionInMode());c.transitionInSpeedType(this.transitionInSpeedType());c.trendLineBrush($.ig.ArrayUtil.prototype.a($$a.$au.$type,this.trendLineBrushes(),b));c.trendLineType(this.trendLineType());c.trendLineThickness(this.trendLineThickness());c.markerType(this.cs(a,b));if(a.isNegativeColorSupported()){a.setNegativeColors($.ig.ArrayUtil.prototype.a($$a.$au.$type,this.negativeBrushes(),b),$.ig.ArrayUtil.prototype.a($$a.$au.$type,this.negativeOutlines(),b))}},adx:function(){return new $.ig.CategoryXAxis},ad1:function(){return new $.ig.NumericYAxis},r5:function(){this.xAxis(this.adx());this.xAxis().name("xAxis");var a=this.xAxis();a.propertyChanged=$.ig.Delegate.prototype.combine(a.propertyChanged,this.ahi.runOn(this));this.yAxis(this.ad1());this.yAxis().name("yAxis");var b=this.yAxis();b.propertyChanged=$.ig.Delegate.prototype.combine(b.propertyChanged,this.ahj.runOn(this));if(this.xAxis().labelSettings()==null){this.xAxis().labelSettings(new $.ig.AxisLabelSettings)}if(this.yAxis().labelSettings()==null){this.yAxis().labelSettings(new $.ig.AxisLabelSettings)}},abv:function(a){$.ig.XYChart.prototype.abv.call(this,a);a.abbreviateLargeNumbers(this.yAxisAbbreviateLargeNumbers());a.favorLabellingScaleEnd(this.yAxisFavorLabellingScaleEnd());a.enhancedIntervalPreferMoreCategoryLabels(this.yAxisEnhancedIntervalPreferMoreCategoryLabels())},abt:function(a){$.ig.XYChart.prototype.abt.call(this,a);a.enhancedIntervalPreferMoreCategoryLabels(this.xAxisEnhancedIntervalPreferMoreCategoryLabels());a.zoomMaximumCategoryRange(this.xAxisZoomMaximumCategoryRange());a.zoomToCategoryRange(this.xAxisZoomToCategoryRange());a.zoomToCategoryStart(this.xAxisZoomToCategoryStart());a.zoomMaximumItemSpan(this.xAxisZoomMaximumItemSpan());a.zoomToItemSpan(this.xAxisZoomToItemSpan())},domainType:function(){return 0},adr:0,chartType:function(a){if(arguments.length===1){if(a!=this.adr){var b=this.chartType();this.adr=a;this.te("ChartType",$$t.$f.getBox(b),$$t.$f.getBox(this.chartType()))}return a}else{return this.adr}},adt:0,markerCollisionAvoidance:function(a){if(arguments.length===1){var b=this.markerCollisionAvoidance();if(a!=b){this.adt=a;this.te("MarkerCollisionAvoidance",$.ig.CategorySeriesMarkerCollisionAvoidance.prototype.getBox(b),$.ig.CategorySeriesMarkerCollisionAvoidance.prototype.getBox(this.markerCollisionAvoidance()))}return a}else{return this.adt}},aed:false,isSplineShapePartOfRange:function(a){if(arguments.length===1){var b=this.isSplineShapePartOfRange();if(a!=b){this.aed=a;this.te("IsSplineShapePartOfRange",b,this.isSplineShapePartOfRange())}return a}else{return this.aed}},aee:false,isTransitionInEnabled:function(a){if(arguments.length===1){var b=this.isTransitionInEnabled();if(a!=b){this.aee=a;this.te("IsTransitionInEnabled",b,this.isTransitionInEnabled())}return a}else{return this.aee}},adv:0,transitionInMode:function(a){if(arguments.length===1){var b=this.transitionInMode();if(a!=b){this.adv=a;this.te("TransitionInMode",$.ig.CategoryTransitionInMode.prototype.getBox(b),$.ig.CategoryTransitionInMode.prototype.getBox(this.transitionInMode()))}return a}else{return this.adv}},ad5:0,transitionInSpeedType:function(a){if(arguments.length===1){var b=this.transitionInSpeedType();if(a!=b){this.ad5=a;this.te("TransitionInSpeedType",$.ig.TransitionInSpeedType.prototype.getBox(b),$.ig.TransitionInSpeedType.prototype.getBox(this.transitionInSpeedType()))}return a}else{return this.ad5}},ae1:0,xAxisInterval:function(a){if(arguments.length===1){var b=this.xAxisInterval();if(a!=b){this.ae1=a;this.te("XAxisInterval",b,this.xAxisInterval())}return a}else{return this.ae1}},ae4:0,xAxisMinorInterval:function(a){if(arguments.length===1){var b=this.xAxisMinorInterval();if(a!=b){this.ae4=a;this.te("XAxisMinorInterval",b,this.xAxisMinorInterval())}return a}else{return this.ae4}},ae0:0,xAxisGap:function(a){if(arguments.length===1){var b=this.xAxisGap();if(a!=b){this.ae0=a;this.te("XAxisGap",b,this.xAxisGap())}return a}else{return this.ae0}},ae3:0,xAxisMinimumGapSize:function(a){if(arguments.length===1){var b=this.xAxisMinimumGapSize();if(a!=b){this.ae3=a;this.te("XAxisMinimumGapSize",b,this.xAxisMinimumGapSize())}return a}else{return this.ae3}},ae2:0,xAxisMaximumGap:function(a){if(arguments.length===1){var b=this.xAxisMaximumGap();if(a!=b){this.ae2=a;this.te("XAxisMaximumGap",b,this.xAxisMaximumGap())}return a}else{return this.ae2}},ae5:0,xAxisOverlap:function(a){if(arguments.length===1){var b=this.xAxisOverlap();if(a!=b){this.ae5=a;this.te("XAxisOverlap",b,this.xAxisOverlap())}return a}else{return this.ae5}},afb:0,yAxisInterval:function(a){if(arguments.length===1){var b=this.yAxisInterval();if(a!=b){this.afb=a;this.te("YAxisInterval",b,this.yAxisInterval())}return a}else{return this.afb}},adn:0,autoMarginAndAngleUpdateMode:function(a){if(arguments.length===1){var b=this.autoMarginAndAngleUpdateMode();if(a!=b){this.adn=a;this.te("AutoMarginAndAngleUpdateMode",$.ig.AutoMarginsAndAngleUpdateMode.prototype.getBox(b),$.ig.AutoMarginsAndAngleUpdateMode.prototype.getBox(this.autoMarginAndAngleUpdateMode()))}return a}else{return this.adn}},aef:false,recalculateMarginAutoExpansion:function(){if(this.dataChart()!=null){this.dataChart().recalculateMarginAutoExpansion()}},shouldAutoExpandMarginForInitialLabels:function(a){if(arguments.length===1){var b=this.shouldAutoExpandMarginForInitialLabels();if(a!=b){this.aef=a;this.te("ShouldAutoExpandMarginForInitialLabels",b,this.shouldAutoExpandMarginForInitialLabels())}return a}else{return this.aef}},aeg:false,shouldConsiderAutoRotationForInitialLabels:function(a){if(arguments.length===1){var b=this.shouldConsiderAutoRotationForInitialLabels();if(a!=b){this.aeg=a;this.te($$t.$a.agn,b,this.shouldConsiderAutoRotationForInitialLabels())}return a}else{return this.aeg}},aey:0,autoExpandMarginExtraPadding:function(a){if(arguments.length===1){var b=this.autoExpandMarginExtraPadding();if(a!=b){this.aey=a;this.te("AutoExpandMarginExtraPadding",b,this.autoExpandMarginExtraPadding())}return a}else{return this.aey}},aez:0,autoExpandMarginMaximumValue:function(a){if(arguments.length===1){var b=this.autoExpandMarginMaximumValue();if(a!=b){this.aez=a;this.te("AutoExpandMarginMaximumValue",b,this.autoExpandMarginMaximumValue())}return a}else{return this.aez}},aek:false,yAxisFavorLabellingScaleEnd:function(a){if(arguments.length===1){var b=this.yAxisFavorLabellingScaleEnd();if(a!=b){this.aek=a;this.te("YAxisFavorLabellingScaleEnd",b,this.yAxisFavorLabellingScaleEnd())}return a}else{return this.aek}},aeh:false,xAxisEnhancedIntervalPreferMoreCategoryLabels:function(a){if(arguments.length===1){var b=this.xAxisEnhancedIntervalPreferMoreCategoryLabels();if(a!=b){this.aeh=a;this.te($$t.$a.agu,b,this.xAxisEnhancedIntervalPreferMoreCategoryLabels())}return a}else{return this.aeh}},aej:false,yAxisEnhancedIntervalPreferMoreCategoryLabels:function(a){if(arguments.length===1){var b=this.yAxisEnhancedIntervalPreferMoreCategoryLabels();if(a!=b){this.aej=a;this.te($$t.$a.ag8,b,this.yAxisEnhancedIntervalPreferMoreCategoryLabels())}return a}else{return this.aej}},adp:0,yAxisAutoRangeBufferMode:function(a){if(arguments.length===1){var b=this.yAxisAutoRangeBufferMode();if(a!=b){this.adp=a;this.te("YAxisAutoRangeBufferMode",$.ig.AxisRangeBufferMode.prototype.getBox(b),$.ig.AxisRangeBufferMode.prototype.getBox(this.yAxisAutoRangeBufferMode()))}return a}else{return this.adp}},ael:false,yAxisIsLogarithmic:function(a){if(arguments.length===1){var b=this.yAxisIsLogarithmic();if(a!=b){this.ael=a;this.te("YAxisIsLogarithmic",b,this.yAxisIsLogarithmic())}return a}else{return this.ael}},af6:0,yAxisLogarithmBase:function(a){if(arguments.length===1){var b=this.yAxisLogarithmBase();if(a!=b){this.af6=a;this.te("YAxisLogarithmBase",b,this.yAxisLogarithmBase())}return a}else{return this.af6}},afd:0,yAxisMinimumValue:function(a){if(arguments.length===1){var b=this.yAxisMinimumValue();if(a!=b){this.afd=a;this.te("YAxisMinimumValue",b,this.yAxisMinimumValue())}return a}else{return this.afd}},afc:0,yAxisMaximumValue:function(a){if(arguments.length===1){var b=this.yAxisMaximumValue();if(a!=b){this.afc=a;this.te("YAxisMaximumValue",b,this.yAxisMaximumValue())}return a}else{return this.afc}},afe:0,yAxisMinorInterval:function(a){if(arguments.length===1){var b=this.yAxisMinorInterval();if(a!=b){this.afe=a;this.te("YAxisMinorInterval",b,this.yAxisMinorInterval())}return a}else{return this.afe}},xAxisActualMinimum:function(){return this.xAxis().mw()},xAxisActualMaximum:function(){return this.xAxis().mv()},getCurrentXAxisActualMinimum:function(){return this.xAxisActualMinimum()},getCurrentYAxisActualMinimum:function(){return this.yAxisActualMinimum()},getCurrentXAxisActualMaximum:function(){return this.xAxisActualMaximum()},getCurrentYAxisActualMaximum:function(){return this.yAxisActualMaximum()},yAxisActualMinimum:function(){return this.yAxis().actualMinimumValue()},yAxisActualMaximum:function(){return this.yAxis().actualMaximumValue()},adj:null,negativeBrushes:function(a){if(arguments.length===1){var b=this.negativeBrushes();if(a!=b){this.adj=a;this.te("NegativeBrushes",b,this.negativeBrushes())}return a}else{return this.adj}},adk:null,negativeOutlines:function(a){if(arguments.length===1){var b=this.negativeOutlines();if(a!=b){this.adk=a;this.te("NegativeOutlines",b,this.negativeOutlines())}return a}else{return this.adk}},aei:false,yAxisAbbreviateLargeNumbers:function(a){if(arguments.length===1){var b=this.yAxisAbbreviateLargeNumbers();if(a!=b){this.aei=a;this.te("YAxisAbbreviateLargeNumbers",b,this.yAxisAbbreviateLargeNumbers())}return a}else{return this.aei}},ae6:0,xAxisZoomMaximumCategoryRange:function(a){if(arguments.length===1){var b=this.xAxisZoomMaximumCategoryRange();if(a!=b){this.ae6=a;this.te("XAxisZoomMaximumCategoryRange",b,this.xAxisZoomMaximumCategoryRange())}return a}else{return this.ae6}},ae7:0,xAxisZoomMaximumItemSpan:function(a){if(arguments.length===1){var b=this.xAxisZoomMaximumItemSpan();if(a!=b){this.ae7=a;this.te("XAxisZoomMaximumItemSpan",b,this.xAxisZoomMaximumItemSpan())}return a}else{return this.ae7}},ae8:0,xAxisZoomToCategoryRange:function(a){if(arguments.length===1){var b=this.xAxisZoomToCategoryRange();if(a!=b){this.ae8=a;this.te("XAxisZoomToCategoryRange",b,this.xAxisZoomToCategoryRange())}return a}else{return this.ae8}},ae9:0,xAxisZoomToCategoryStart:function(a){if(arguments.length===1){var b=this.xAxisZoomToCategoryStart();if(a!=b){this.ae9=a;this.te("XAxisZoomToCategoryStart",b,this.xAxisZoomToCategoryStart())}return a}else{return this.ae9}},afa:0,xAxisZoomToItemSpan:function(a){if(arguments.length===1){var b=this.xAxisZoomToItemSpan();if(a!=b){this.afa=a;this.te("XAxisZoomToItemSpan",b,this.xAxisZoomToItemSpan())}return a}else{return this.afa}},aeb:false,isCategoryHighlightingEnabled:function(a){if(arguments.length===1){var b=this.isCategoryHighlightingEnabled();if(a!=b){this.aeb=a;this.te("IsCategoryHighlightingEnabled",b,this.isCategoryHighlightingEnabled())}return a}else{return this.aeb}},aec:false,isItemHighlightingEnabled:function(a){if(arguments.length===1){var b=this.isItemHighlightingEnabled();if(a!=b){this.aec=a;this.te("IsItemHighlightingEnabled",b,this.isItemHighlightingEnabled())}return a}else{return this.aec}},init:function(){this.af4=1e3;this.af5=1e3;this.adr=9;this.adt=1;this.aee=true;this.ae3=0;this.ae2=1;this.afb=NaN;this.adn=1;this.aef=true;this.aeg=true;this.aey=$.ig.DeviceUtils.prototype.g(2);this.aez=$.ig.DeviceUtils.prototype.g(60);this.aek=true;this.aeh=true;this.aej=false;this.adp=0;this.af6=10;this.afd=NaN;this.afc=NaN;this.aei=true;this.ae6=3;this.ae7=NaN;this.ae8=NaN;this.ae9=NaN;this.afa=NaN;this.aeb=false;this.aec=false;this.aex=null;$.ig.XYChart.prototype.init.call(this);$.ig.DVContainer.prototype.instance().registerIfLoaded("CategoryChartToolbarFactoryManager");this.r9()},g2:function(){return function(){var $ret=new $$4.x($.ig.DataSeriesType.prototype.$type,0);$ret.add(2);$ret.add(1);$ret.add(0);$ret.add(10);$ret.add(6);$ret.add(7);$ret.add(5);$ret.add(4);$ret.add(8);return $ret}()},aex:null,g6:function(){if(this.aex==null){this.aex=$$t.$b.a()}return this.aex},cr:function(a){if(a!=null){var b=$.ig.XYChart.prototype.cr.call(this,a);if(b==2){if(a.isMarkerlessDisplayPreferred()&&this.f8()){return 13}}}return $.ig.XYChart.prototype.cr.call(this,a)},ct:function(a){if(a!=null){var b=$.ig.XYChart.prototype.cr.call(this,a);if(b==2){if(a.isMarkerlessDisplayPreferred()&&this.f8()){return 13}}}return $.ig.XYChart.prototype.ct.call(this,a)},gp:function(){return this.xAxis()!=null&&this.xAxis().categoryMode()!=0},ahi:function(a,b){switch(b.propertyName()){case"ActualMinimum":this.to("XAxisActualMinimum");break;case"ActualMaximum":this.to("XAxisActualMaximum");break}},ahj:function(a,b){switch(b.propertyName()){case"ActualMinimumValue":this.to("YAxisActualMinimum");break;case"ActualMaximumValue":this.to("YAxisActualMaximum");break}},t0:function(){$.ig.XYChart.prototype.t0.call(this);this.xAxis().label(this.xAxisLabel()==null?$.ig.XYChart.prototype.zg(this.xAxis(),this._bd.dataSeries()):this.xAxisLabel());this.xAxis().itemsSource(this.dataChart()!=null&&this.dataChart().series().count()>0?this.dataChart().series().__inner[0].itemsSource():null);if(this.shouldAutoExpandMarginForInitialLabels()){this.s6(function(a){a.recalculateMarginAutoExpansion()})}},_xAxis:null,xAxis:function(a){if(arguments.length===1){this._xAxis=a;return a}else{return this._xAxis}},_yAxis:null,yAxis:function(a){if(arguments.length===1){this._yAxis=a;return a}else{return this._yAxis}},ad0:function(a,b){switch(a){case 2:return this.c4(1);case 3:return this.c4(10);case 0:return this.c4(0);case 1:return this.c4(2);case 6:return this.c4(6);case 7:return this.c4(7);case 4:return this.c4(4);case 5:return this.c4(5);case 8:return this.c4(8);case 9:return this.adz(b);default:return this.c4(1)}},adz:function(a){return this.c4(a)},bc:function(a){switch(this.chartType()){case 1:return 2;case 0:return 0;case 3:return 10;case 6:return 6;case 7:return 7;case 5:return 5;case 4:return 4;case 8:return 8;case 9:return a.suggestedSeries();default:case 2:return 1}},c2:function(a,b){var c=this.ad0(this.chartType(),a.suggestedSeries());c.valueMemberPath(a.findMatchingHint(0).path());c.xAxis(this.xAxis());c.yAxis(this.yAxis());return c},ty:function(a){if(a.suggestedSecondaryAxis()==2){this.yAxis().isLogarithmic(true);this.yAxis().logarithmBase(10)}},t1:function(){this.yAxis().isLogarithmic(this.yAxisIsLogarithmic());this.yAxis().logarithmBase(this.yAxisLogarithmBase())},g1:function(){return function(){var $ret=new $$4.x($.ig.IDataSeriesAdapterRule.prototype.$type,0);$ret.add(new $.ig.SimpleCategorySeriesRule);$ret.add(new $.ig.SubCollectionsRule);return $ret}()},r1:function(a,b){var c=$b($.ig.HorizontalAnchoredCategorySeries.prototype.$type,a);if(c!=null){c.markerCollisionAvoidance(this.markerCollisionAvoidance());c.markerType(this.cs(a,b))}},ahg:function(a){this.ahh(function(b,c){a(b)})},ahh:function(a){if(this.dataChart()==null){return}for(var b=0;b<this.dataChart().series().count();b++){var c=$b($.ig.HorizontalAnchoredCategorySeries.prototype.$type,this.dataChart().series().__inner[b]);if(c==null){continue}a(c,b)}},wm:function(){return this.xAxis()},wn:function(){return this.yAxis()},ad3:function(){return this.c4(30)},ad4:function(){return this.c4(31)},gy:function(a,b){var c=$.ig.XYChart.prototype.gy.call(this,a,b);if(c!=null){var d=new $$4.x($.ig.Series.prototype.$type,0);if(this.aeb){d.add(this.ad3())}if(this.aec){d.add(this.ad4())}for(var e=0;e<d.count();e++){var f=d.__inner[e];f.name(a+f.getType().typeName());c.add(f)}}return c},a7:function(){if(this.computedPlotAreaMarginMode()==0){return 1}else{return this.computedPlotAreaMarginMode()}},t6:function(a,b,c){$.ig.XYChart.prototype.t6.call(this,a,b,c);if(this._bd.dataSeries().count()>0){if(String.isNullOrEmpty(this.calloutsXMemberPath())){this.b4().setXMemberPath(a,c.getMemberPathFor(16))}if(String.isNullOrEmpty(this.calloutsYMemberPath())){this.b4().setYMemberPath(a,c.getMemberPathFor(0))}if(String.isNullOrEmpty(this.calloutsLabelMemberPath())){this.b4().setLabelMemberPath(a,c.getMemberPathFor(0))}if(String.isNullOrEmpty(this.calloutsContentMemberPath())){this.b4().setContentMemberPath(a,c.getMemberPathFor(0))}}},gb:function(){if(this.crosshairsDisplayMode()==4||this.crosshairsDisplayMode()==3){return true}else if(this.crosshairsDisplayMode()==0){if(this.chartType()==2||this.chartType()==8){return false}else if(this.chartType()==9&&this._bd!=null&&this._bd.dataSeries()!=null&&this._bd.dataSeries().count()>0){var a=this._bd.dataSeries().__inner[0].suggestedSeries();if(a==1||a==8){return false}}return true}return false},gh:function(){return $.ig.DVContainer.prototype.instance().checkLoaded("CategoryChartToolbarFactoryManager")},te:function(a,b,c){var $self=this;$.ig.XYChart.prototype.te.call(this,a,b,c);switch(a){case"ChartType":this.t0();break;case"MarkerCollisionAvoidance":this.ahg(function(d){d.markerCollisionAvoidance($self.markerCollisionAvoidance())});break;case"IsTransitionInEnabled":this.ahg(function(d){d.isTransitionInEnabled($self.isTransitionInEnabled())});break;case"IsSplineShapePartOfRange":this.ahg(function(d){if(d.isSpline()){d.p2($self.isSplineShapePartOfRange())}});break;case"TransitionInMode":this.ahg(function(d){d.transitionInMode($self.transitionInMode())});break;case"TransitionInSpeedType":this.ahg(function(d){d.transitionInSpeedType($self.transitionInSpeedType())});break;case"XAxisInterval":this.xAxis().interval(this.xAxisInterval());break;case"XAxisMinorInterval":this.xAxis().minorInterval(this.xAxisMinorInterval());break;case"XAxisGap":this.xAxis().gap(this.xAxisGap());break;case"XAxisOverlap":this.xAxis().overlap(this.xAxisOverlap());break;case"XAxisMinimumGapSize":this.xAxis().minimumGapSize(this.xAxisMinimumGapSize());break;case"XAxisMaximumGap":this.xAxis().maximumGap(this.xAxisMaximumGap());break;case"XAxisZoomMaximumCategoryRange":this.xAxis().zoomMaximumCategoryRange(this.xAxisZoomMaximumCategoryRange());break;case"XAxisZoomMaximumItemSpan":this.xAxis().zoomMaximumItemSpan(this.xAxisZoomMaximumItemSpan());break;case"XAxisZoomToCategoryRange":this.xAxis().zoomToCategoryRange(this.xAxisZoomToCategoryRange());break;case"XAxisZoomToCategoryStart":this.xAxis().zoomToCategoryStart(this.xAxisZoomToCategoryStart());break;case"XAxisZoomToItemSpan":this.xAxis().zoomToItemSpan(this.xAxisZoomToItemSpan());break;case"YAxisInterval":this.yAxis().interval(this.yAxisInterval());break;case"YAxisFavorLabellingScaleEnd":this.yAxis().favorLabellingScaleEnd(this.yAxisFavorLabellingScaleEnd());break;case"YAxisAutoRangeBufferMode":this.yAxis().autoRangeBufferMode(this.yAxisAutoRangeBufferMode());break;case"YAxisIsLogarithmic":this.yAxis().isLogarithmic(this.yAxisIsLogarithmic());break;case"YAxisLogarithmBase":this.yAxis().logarithmBase(this.yAxisLogarithmBase());break;case"YAxisMinimumValue":this.yAxis().minimumValue(this.yAxisMinimumValue());break;case"YAxisMaximumValue":this.yAxis().maximumValue(this.yAxisMaximumValue());break;case"YAxisMinorInterval":this.yAxis().minorInterval(this.yAxisMinorInterval());break;case"NegativeBrushes":case"NegativeOutlines":this.ahh(function(d,e){if(d.isNegativeColorSupported()){d.setNegativeColors($.ig.ArrayUtil.prototype.a($$a.$au.$type,$self.negativeBrushes(),e),$.ig.ArrayUtil.prototype.a($$a.$au.$type,$self.negativeOutlines(),e))}});break;case"YAxisAbbreviateLargeNumbers":this.ab2(function(d){d.abbreviateLargeNumbers($self.yAxisAbbreviateLargeNumbers())});break;case"IsCategoryHighlightingEnabled":case"IsItemHighlightingEnabled":this.t0();break;case"AutoMarginAndAngleUpdateMode":this.s6(function(d){d.autoMarginAndAngleUpdateMode($self.autoMarginAndAngleUpdateMode())});break;case"ShouldAutoExpandMarginForInitialLabels":this.s6(function(d){d.shouldAutoExpandMarginForInitialLabels($self.shouldAutoExpandMarginForInitialLabels())});break;case $$t.$a.agn:this.s6(function(d){d.shouldConsiderAutoRotationForInitialLabels($self.shouldConsiderAutoRotationForInitialLabels())});break;case"AutoExpandMarginExtraPadding":this.s6(function(d){d.autoExpandMarginExtraPadding($self.autoExpandMarginExtraPadding())});break;case"AutoExpandMarginMaximumValue":this.s6(function(d){d.autoExpandMarginMaximumValue($self.autoExpandMarginMaximumValue())});break;case $$t.$a.agu:this.aby(function(d){d.enhancedIntervalPreferMoreCategoryLabels($self.xAxisEnhancedIntervalPreferMoreCategoryLabels())},a);break;case $$t.$a.ag8:this.ab2(function(d){d.enhancedIntervalPreferMoreCategoryLabels($self.yAxisEnhancedIntervalPreferMoreCategoryLabels())});break}},$type:new $.ig.Type("CategoryChart",$.ig.XYChart.prototype.$type)},true);$c("CategoryChartMockDataGenerator:b","Object",{init:function(){$.ig.$op.init.call(this)},a:function(){var a=new $$4.x($$t.$c.$type,0);a.add(function(){var $ret=new $$t.c;$ret.label("Item A");$ret.series1(3);$ret.series2(4);$ret.series3(7);return $ret}());a.add(function(){var $ret=new $$t.c;$ret.label("Item B");$ret.series1(4);$ret.series2(3);$ret.series3(6);return $ret}());a.add(function(){var $ret=new $$t.c;$ret.label("Item C");$ret.series1(7);$ret.series2(2);$ret.series3(5);return $ret}());a.add(function(){var $ret=new $$t.c;$ret.label("Item D");$ret.series1(6);$ret.series2(4);$ret.series3(7);return $ret}());a.add(function(){var $ret=new $$t.c;$ret.label("Item E");$ret.series1(5);$ret.series2(5);$ret.series3(8);return $ret}());a.add(function(){var $ret=new $$t.c;$ret.label("Item F");$ret.series1(4);$ret.series2(8);$ret.series3(9);return $ret}());var arr_=a.toArray();return arr_},$type:new $.ig.Type("CategoryChartMockDataGenerator",$.ig.$ot)},true);$c("CategoryChartMockDataItem:c","Object",{init:function(){$.ig.$op.init.call(this)},_label:null,label:function(a){if(arguments.length===1){this._label=a;return a}else{return this._label}},_series1:0,series1:function(a){if(arguments.length===1){this._series1=a;return a}else{return this._series1}},_series2:0,series2:function(a){if(arguments.length===1){this._series2=a;return a}else{return this._series2}},_series3:0,series3:function(a){if(arguments.length===1){this._series3=a;return a}else{return this._series3}},$type:new $.ig.Type("CategoryChartMockDataItem",$.ig.$ot)},true);$c("CategoryChartToolbarFactoryManager:d","Object",{init:function(){$.ig.$op.init.call(this)},register:function(){if(!$$t.$d.a){$.ig.DVContainer.prototype.instance().registerFactory($.ig.IDomainChartToolbarProvider.prototype.$type,function(){return new $$t.e});$$t.$d.a=true}},$type:new $.ig.Type("CategoryChartToolbarFactoryManager",$.ig.$ot)},true);$c("CategoryChartToolbarProvider:e","DomainChartToolbarProvider",{init:function(){$.ig.DomainChartToolbarProvider.prototype.init.call(this)},y:null,e:function(a,b){var c=a;switch(b.name()){case"ShowGridlines":{var d=b;d.isChecked(c.xAxisMajorStroke()!=null)}break}},u:function(a,b,c,d){var e=a;switch(b){case"XAxisMajorStroke":this.f("ShowGridlines",2,a.xAxisMajorStroke()!=null);break}},k:function(a,b){var c=a;if(this.c(b,"ShowGridlines")){if(c.xAxisMajorStroke()==null){if(this.y!=null){c.xAxisMajorStroke(this.y)}else{c.xAxisMajorStroke(c.dataChart().defaultAxisMajorStroke())}}}else{if(c.xAxisMajorStroke()!=null){this.y=c.xAxisMajorStroke();c.xAxisMajorStroke(null)}}},$type:new $.ig.Type("CategoryChartToolbarProvider",$.ig.DomainChartToolbarProvider.prototype.$type)},true);$$t.$a.agn="ShouldConsiderAutoRotationForInitialLabels";$$t.$a.agu="XAxisEnhancedIntervalPreferMoreCategoryLabels";$$t.$a.ag8="YAxisEnhancedIntervalPreferMoreCategoryLabels";$$t.$d.a=false});