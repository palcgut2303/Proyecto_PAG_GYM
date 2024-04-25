/*!@license
* Infragistics.Web.ClientUI infragistics.datachart_rangecategory.js 23.2.20232.48
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
*     infragistics.dv_geometry.js
*     infragistics.datachart_categorycore.js
*     infragistics.datachart_core.js
*     infragistics.dv_visualdata.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.dv_core","./infragistics.dv_geometry","./infragistics.datachart_categorycore","./infragistics.datachart_core","./infragistics.dv_visualdata","./infragistics.ext_ui"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$h=$$t;var $$0=$.ig.globalDefs.$$0;var $$4=$.ig.globalDefs.$$4;var $$1=$.ig.globalDefs.$$1;var $$w=$.ig.globalDefs.$$w;var $$r=$.ig.globalDefs.$$r;var $$g=$.ig.globalDefs.$$g;var $$j=$.ig.globalDefs.$$j;var $$ap=$.ig.globalDefs.$$ap;var $$6=$.ig.globalDefs.$$6;var $$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["RangeCategoryBucketCalculator:a","RangeAreaSeries:c","RangeCategorySeries:h","RangeColumnSeries:i","RangeAreaSeriesView:j","RangeCategorySeriesView:k","RangeColumnSeriesView:l"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compareSimple,$x=$.ig.util.tryParseNumber,$y=$.ig.util.tryParseNumber1,$z=$.ig.util.numberToString,$0=$.ig.util.numberToString1,$1=$.ig.util.parseNumber;$c("RangeCategoryBucketCalculator:a","CategoryBucketCalculator",{_j:null,init:function(a){this.i=null;this.h=null;$.ig.CategoryBucketCalculator.prototype.init.call(this,a);this._j=a},getBucketWithoutUnknowns:function(a){var b=false;var c=this.i;var d=this.h;var e=this.l;var f=this.k;var g=Math.min(e,f);var h=a*this.d;var i=Math.min(h+this.d-1,g-1);var j=1.7976931348623157e308;var k=-1.7976931348623157e308;var l=true;var m=0;var n=0;var o;var p;if(h<=i){for(var q=h;q<=i;++q){m=c[q];n=d[q];if(m<n){o=m;p=n}else{p=m;o=n}if(!l){j=j<o?j:o;k=k>o?k:o;j=j<p?j:p;k=k>p?k:p}else{j=Math.min(j,o);k=Math.max(k,o);k=Math.max(k,p);j=Math.min(j,p);l=false}}}if(b&&n<m){var r=j;j=k;k=r}if(!l){var s=new Array(3);s[0]=.5*(h+i);s[1]=j;s[2]=k;return s}var t=new Array(3);t[0]=NaN;t[1]=NaN;t[2]=NaN;return t},getBucket:function(a){var b=false;var c=this.i;var d=this.h;var e=this.l;var f=this.k;var g=Math.min(e,f);var h=a*this.d;var i=Math.min(h+this.d-1,g-1);var j=NaN;var k=NaN;var l=true;var m=0;var n=0;var o;var p;if(h<=i){for(var q=h;q<=i;++q){m=c[q];n=d[q];if(m<n){o=m;p=n}else{p=m;o=n}if(!l){if(!$.ig.util.isNaN(o)){j=j<o?j:o;k=k>o?k:o}if(!$.ig.util.isNaN(p)){j=j<p?j:p;k=k>p?k:p}}else{if(!$.ig.util.isNaN(o)){if($.ig.util.isNaN(j)){j=o}else{j=Math.min(j,o)}if(!$.ig.util.isNaN(k)){k=Math.max(k,o)}}if(!$.ig.util.isNaN(p)){if($.ig.util.isNaN(k)){k=p}else{k=Math.max(k,p)}if(!$.ig.util.isNaN(j)){j=Math.min(j,p)}}if(!$.ig.util.isNaN(j)&&!$.ig.util.isNaN(k)){l=false}}}}if(n<m&&b){var r=j;j=k;k=r}if(!l){var s=new Array(3);s[0]=.5*(h+i);s[1]=j;s[2]=k;return s}var t=new Array(3);t[0]=NaN;t[1]=NaN;t[2]=NaN;return t},l:0,k:0,i:null,h:null,cacheValues:function(){this.l=this._j._c3.lowColumn().count();this.k=this._j._c3.highColumn().count();this.i=this._j._c3.lowColumn().asArray();this.h=this._j._c3.highColumn().asArray()},unCacheValues:function(){this.i=null;this.h=null},$type:new $.ig.Type("RangeCategoryBucketCalculator",$.ig.CategoryBucketCalculator.prototype.$type)},true);$c("HorizontalRangeCategorySeriesProxy:b","Object",{init:function(){$.ig.$op.init.call(this)},matchesType:function(a){return $b($$t.$g.$type,a)!==null},setHighMemberPath:function(a,b){a.highMemberPath(b)},setLowMemberPath:function(a,b){a.lowMemberPath(b)},setXAxis:function(a,b){a.xAxis(b)},setYAxis:function(a,b){a.yAxis(b)},$type:new $.ig.Type("HorizontalRangeCategorySeriesProxy",$.ig.$ot,[$.ig.IHorizontalRangeCategorySeriesProxy.prototype.$type])},true);$c("RangeCategorySeries:h","CategorySeries",{cd:function(){return new $$t.k(this)},getHostReferenceValue:function(){return this.h3()},o2:function(a){$.ig.CategorySeries.prototype.o2.call(this,a);this._xg=a},_xg:null,init:function(){$.ig.CategorySeries.prototype.init.call(this);this._xf=new $$t.f(1,this,this._xg,this,this,this._xg._cu)},_xf:null,lowMemberPath:function(a){if(arguments.length===1){this.h($$t.$h.lowMemberPathProperty,a);return a}else{return this.c($$t.$h.lowMemberPathProperty)}},fo:function(){return this.highlightedItemsSource()!=null||this.highlightedLowMemberPath()!=null&&this.highlightedHighMemberPath()!=null},g1:function(){var a=$.ig.CategorySeries.prototype.g1.call(this);{var b=function(){var $ret=new $.ig.SeriesLayerPropertyOverlay;$ret.propertyName("HighMemberPath");$ret.isAlwaysApplied(true);$ret.currentValuePropertyName("HighlightedHighMemberPath");$ret._q=true;return $ret}();b.valueResolving=$.ig.Delegate.prototype.combine(b.valueResolving,this.xv.runOn(this));a.add(b)}{var c=function(){var $ret=new $.ig.SeriesLayerPropertyOverlay;$ret.propertyName("LowMemberPath");$ret.isAlwaysApplied(true);$ret.currentValuePropertyName("HighlightedLowMemberPath");$ret._q=true;return $ret}();c.valueResolving=$.ig.Delegate.prototype.combine(c.valueResolving,this.xw.runOn(this));a.add(c)}return a},xw:function(a,b){if(this.highlightedLowMemberPath()!=null){b.value(this.highlightedLowMemberPath());return}b.value(this.lowMemberPath())},xv:function(a,b){if(this.highlightedHighMemberPath()!=null){b.value(this.highlightedHighMemberPath());return}b.value(this.highMemberPath())},getItemValue:function(a,b){var c=this.lw(b);if(c=="HighMemberPath"){return this.jw(a,b,this.highMemberPath())}if(c=="LowMemberPath"){return this.jw(a,b,this.lowMemberPath())}if(c=="HighlightedLowMemberPath"){return this.jw(a,b,this.highlightedLowMemberPath())}if(c=="HighlightedHighMemberPath"){return this.jw(a,b,this.highlightedHighMemberPath())}return $.ig.CategorySeries.prototype.getItemValue.call(this,a,b)},lowColumn:function(a){if(arguments.length===1){if(this.xi!=a){var b=this.xi;this.xi=a;this.raisePropertyChanged("LowColumn",b,this.xi)}return a}else{return this.xi}},xi:null,highMemberPath:function(a){if(arguments.length===1){this.h($$t.$h.highMemberPathProperty,a);return a}else{return this.c($$t.$h.highMemberPathProperty)}},highColumn:function(a){if(arguments.length===1){if(this.xh!=a){var b=this.xh;this.xh=a;this.raisePropertyChanged("HighColumn",b,this.xh)}return a}else{return this.xh}},xh:null,highlightedLowMemberPath:function(a){if(arguments.length===1){this.h($$t.$h.highlightedLowMemberPathProperty,a);return a}else{return this.c($$t.$h.highlightedLowMemberPathProperty)}},highlightedHighMemberPath:function(a){if(arguments.length===1){this.h($$t.$h.highlightedHighMemberPathProperty,a);return a}else{return this.c($$t.$h.highlightedHighMemberPathProperty)}},vy:function(){return 11},w7:function(a,b){$.ig.CategorySeries.prototype.w7.call(this,a,b);b._b6=true;$.ig.CategoryMarkerManager.prototype.e(this,a.m,b._cx,this.useLightweightMarkers());this.w1(b,a)},xx:function(a,b,c,d,e,f){this._xg.c4(a,b,c,d,e,f)},ar:function(a){if(a.isEmpty()&&this.seriesViewer()!=null){a=this.seriesViewer().actualWindowRect()}var b=this.vn();if(this.lowColumn()==null||this.highColumn()==null){return null}var c=this.tq(this.view());var d=new $.ig.ScalerParams(0,a,this.seriesViewer().viewportRect(),b.isInverted(),this.getEffectiveViewport());var e=b.getUnscaledValue(c.left(),d);var f=b.getUnscaledValue(c.right(),d);if(b.isInverted()){var g=e;e=f;f=g}var h=null;if(b.isSorting()){h=b;e=h.getIndexClosestToUnscaledValue(e);f=h.getIndexClosestToUnscaledValue(f)}else{e=Math.floor(e);f=Math.ceil(f)}e=Math.max(0,Math.min(this.lowColumn().count()-1,e));f=Math.max(0,Math.min(this.lowColumn().count()-1,f));var i=1.7976931348623157e308;var j=-1.7976931348623157e308;for(var k=$.ig.truncate(e);k<=$.ig.truncate(f);k++){var l=k;if(h!=null){l=h.sortedIndices().__inner[k]}var m=this.lowColumn().item(l);if(this.lowColumn().mayContainUnknowns()){if(Number.isInfinity(m)||$.ig.util.isNaN(m)){continue}}var n=this.highColumn().item(l);if(this.highColumn().mayContainUnknowns()){if(Number.isInfinity(n)||$.ig.util.isNaN(n)){continue}}i=Math.min(i,m);j=Math.max(j,n)}var o=new $.ig.AxisRange(i,j);var p=this.v3();o=this.ap(o,p,a);return o},scrollIntoView:function(a){var b=new $$a.ae(0,0,0,1,1);var c=this.view()!=null?this.view().by():$$a.$ae.empty();c=c.copy();var d=this.view()!=null?this.view().bx():$$a.$ae.empty();var e=!c.isEmpty()&&!d.isEmpty()&&this.c7()!=null?this.c7().indexOf(a):-1;var f=this.vl();var g=this.vm();var h=this.ts(this.view());var i;if(f!=null){var j=new $.ig.ScalerParams(0,b,b,f.isInverted(),h);i=f.getScaledValue(e,j)}else{i=NaN}var k=f!=null?this._xf.r($b($.ig.ICategoryScaler.prototype.$type,f),b,b,h):0;i+=k;if(e>=0&&$$a.$ae.l_op_Inequality(c,null)&&$$a.$ae.l_op_Inequality(d,null)){if(!$.ig.util.isNaN(i)){if(i<c.left()+.1*c.width()){i=i+.4*c.width()}if(i>c.right()-.1*c.width()){i=i-.4*c.width()}c.x(i-.5*c.width())}if(g!=null&&this.highColumn()!=null&&e<this.highColumn().count()){var l=new $.ig.ScalerParams(0,b,b,g.isInverted(),h);l._b=this.h3();var m=g.getScaledValue(this.highColumn().item(e),l);var n=g.getScaledValue(this.lowColumn().item(e),l);if(!$.ig.util.isNaN(m)&&!$.ig.util.isNaN(n)){var o=Math.abs(n-m);if(c.height()<o){c.height(o);c.y(Math.min(n,m))}else{if(n<c.top()+.1*c.height()){n=n+.4*c.height()}if(n>c.bottom()-.1*c.height()){n=n-.4*c.height()}c.y(n-.5*c.height())}}}if(this.syncLink()!=null){this.syncLink().au(this.seriesViewer(),c,true)}}return e>=0},pa:function(a,b,c,d){$.ig.CategorySeries.prototype.pa.call(this,a,b,c,d);switch(b){case"FastItemsSource":if($b($.ig.IFastItemsSource.prototype.$type,c)!=null){c.deregisterColumn(this.lowColumn());c.deregisterColumn(this.highColumn());this.lowColumn(null);this.highColumn(null)}if($b($.ig.IFastItemsSource.prototype.$type,d)!=null){this.lowColumn(this.c4(this.lowMemberPath()));this.highColumn(this.c4(this.highMemberPath()))}if(!this.wj()){this._vx._cu.g(this.actualResolution());this.renderSeries(this.shouldAnimateOnDataSourceSwap()&&c!=null)}break;case"LowMemberPath":if(this.c7()!=null){this.c7().deregisterColumn(this.lowColumn());this.lowColumn(this.c4(this.lowMemberPath()))}break;case"LowColumn":if(!this.wj()){this._vx._cu.g(this.actualResolution());this.renderSeries(this.shouldAnimateOnDataSourceSwap()&&this._dp)}break;case"HighMemberPath":if(this.c7()!=null){this.c7().deregisterColumn(this.highColumn());this.highColumn(this.c4(this.highMemberPath()))}break;case"HighColumn":if(!this.wj()){this._vx._cu.g(this.actualResolution());this.renderSeries(this.shouldAnimateOnDataSourceSwap()&&this._dp)}break}},aq:function(a){if(this.lowColumn()==null||this.lowColumn().count()==0||this.highColumn()==null||this.highColumn().count()==0){return null}if(a==this.vl()){var b=Math.min(this.lowColumn().count(),this.highColumn().count());return new $.ig.AxisRange(0,b-1)}if(a==this.vm()){var c=Math.min(this.lowColumn().minimum(),this.highColumn().minimum());var d=Math.max(this.lowColumn().maximum(),this.highColumn().maximum());return new $.ig.AxisRange(Math.min(c,d),Math.max(c,d))}return null},np:function(a,b,c,d){if(this.vl()!=null&&$b($.ig.ISortingAxis.prototype.$type,this.vl())!==null){this.vl().notifyDataChanged()}var e=this.vl();switch(a){case 3:if(d==this.lowMemberPath()||d==this.highMemberPath()){if(e!=null){e.updateRange()}if(!this.wj()){this.renderSeries(true)}}break;case 1:if(e!=null){e.updateRange()}this._vx._cu.g(this.actualResolution());if(!this.wj()){this.renderSeries(true)}break;case 0:if(e!=null){e.updateRange()}this._vx._cu.g(this.actualResolution());if(!this.wj()){this.renderSeries(true)}break;case 2:if(e!=null){e.updateRange()}if(this.lowMemberPath()!=null&&this.highMemberPath()!=null&&this._vx._cu.d>0&&!this.wj()){this.renderSeries(true)}break;case 4:if(e!=null){e.updateRange()}this._vx._cu.g(this.actualResolution());if(!this.wj()){this.renderSeries(true)}break}},gm:function(a,b,c){var d=$.ig.CategorySeries.prototype.gm.call(this,a,b,c);if(this.lowColumn()==null||this.lowColumn().count()==0||this.highColumn()==null||this.highColumn().count()==0){d=false}return d},w4:function(a,b){$.ig.CategorySeries.prototype.w4.call(this,a,b);this._xf.d(a,b)},currentCategoryMode:function(){return this.preferredCategoryMode($b($.ig.CategoryAxisBase.prototype.$type,this.vl()))},scaler:function(){return $b($.ig.ICategoryScaler.prototype.$type,this.vl())},yScaler:function(){return $b($.ig.IScaler.prototype.$type,this.vm())},bucketizer:function(){return this._vx._cu},currentMode2Index:function(){return this.ws()},provideCollisionDetector:function(){return new $.ig.CollisionAvoider},mayContainUnknowns:function(){return this.lowColumn()==null||this.lowColumn().mayContainUnknowns()||this.highColumn()==null||this.highColumn().mayContainUnknowns()},pt:function(a,b){var c=this.f9();$.ig.CategorySeries.prototype.pt.call(this,a,b);if(!c){this.view().a4(b);return}this.view().a4(b);if(this.dm(this._cf)){return}var d=new $$t.f(1,this,$b($.ig.ISupportsMarkers.prototype.$type,this._cf),this.seriesViewer()._cu._o,this,this._cf._cu);if(!this._f2){this.vr=new $.ig.CategoryFrame(3);this.vr.u();d.d(this.vr,this._cf)}this._f2=false;this.w7(this.vr,this._cf);this.f9(false)},_xe:null,renderAlternateView:function(a,b,c,d,e){$.ig.CategorySeries.prototype.renderAlternateView.call(this,a,b,c,d,e);var f=this.a3().alternateViews().item(d);var g=f;g._cu.g(this.actualResolution());f.prepAltSurface(c);if(this.dm(g)){return}var h=new $$t.f(1,this,$b($.ig.ISupportsMarkers.prototype.$type,f),f,this,f._cu);if(this._xe==null){this._xe=new $.ig.CategoryFrame(3)}this._xe.u();h.d(this._xe,g);this.w7(this._xe,g)},h3:function(){return $.ig.Series.prototype.h4(this.lowColumn(),$b($.ig.ISortingAxis.prototype.$type,this.vl()))},$type:new $.ig.Type("RangeCategorySeries",$.ig.CategorySeries.prototype.$type,[$.ig.IIsCategoryBased.prototype.$type,$.ig.IHasHighLowValueCategory.prototype.$type])},true);$c("HorizontalRangeCategorySeries:g","RangeCategorySeries",{init:function(){$$t.$h.init.call(this)},xAxis:function(a){if(arguments.length===1){this.h($$t.$g.xAxisProperty,a);return a}else{return this.c($$t.$g.xAxisProperty)}},yAxis:function(a){if(arguments.length===1){this.h($$t.$g.yAxisProperty,a);return a}else{return this.c($$t.$g.yAxisProperty)}},vl:function(){return this.xAxis()},vm:function(){return this.yAxis()},nh:function(){$$t.$h.nh.call(this);this.xAxis(null);this.yAxis(null)},ah:function(a){var b=this.aj(this.vn(),this.vo.f,this.wp(this.view()),this.wq(this.view()),this.toWorldPosition(a),true);if(b==null){return null}var c=b[0];var d=b[1];var e=new Array(1);var f=new Array(2);f[0]={__x:c[0],__y:c[2],$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};f[1]={__x:d[0],__y:d[2],$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};e[0]=f;return e},ai:function(a){var b=this.aj(this.vn(),this.vo.f,this.wp(this.view()),this.wq(this.view()),this.toWorldPosition(a),true);if(b==null){return null}var c=b[0];var d=b[1];var e=new Array(1);var f=new Array(2);f[0]={__x:c[0],__y:c[1],$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};f[1]={__x:d[0],__y:d[1],$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};e[0]=f;return e},isRange:function(){return true},bu:function(){if(this.hitTestMode()==0){return 1}else{return $$t.$h.bu.call(this)}},getOffsetValue:function(){return this._xf.r(this.xAxis(),this.view().by(),this.view().bx(),this.getEffectiveViewport1(this.view()))},getCategoryWidth:function(){return this.xAxis().getCategorySize(this.view().by(),this.view().bx(),this.getEffectiveViewport1(this.view()))},getNextOrExactIndex:function(a,b){return this.jf(a,b,this.xAxis(),this.wn.runOn(this),new $.ig.RangeValueList(this.highColumn(),this.lowColumn()))},getPreviousOrExactIndex:function(a,b){return this.jh(a,b,this.xAxis(),this.wn.runOn(this),new $.ig.RangeValueList(this.highColumn(),this.lowColumn()))},hu:function(a,b,c,d,e){if(c==null){return Number.POSITIVE_INFINITY}var f=this.xAxis().lf;return this.hv(a,b,this.xAxis(),d,e,f,this.wn.runOn(this))},getSeriesValue:function(a,b,c){if(this.seriesViewer()==null){return NaN}var d=this.getEffectiveViewport1(this.view());var e=new $.ig.ScalerParams(0,this.seriesViewer().actualWindowRect(),this.view().bx(),this.xAxis().isInverted(),d);var f=this._xf.r(this.xAxis(),this.seriesViewer().actualWindowRect(),this.view().bx(),d);return this.ic(new $.ig.RangeValueList(this.highColumn(),this.lowColumn()),a,this.xAxis(),e,f,this.wn.runOn(this),b,c)},getSeriesLowValue:function(a,b,c){if(this.seriesViewer()==null){return NaN}var d=this.getEffectiveViewport1(this.view());var e=new $.ig.ScalerParams(0,this.seriesViewer().actualWindowRect(),this.view().bx(),this.xAxis().isInverted(),d);var f=this._xf.r(this.xAxis(),this.seriesViewer().actualWindowRect(),this.view().bx(),d);return this.ic(this.lowColumn(),a,this.xAxis(),e,f,this.wn.runOn(this),b,c)},getSeriesHighValue:function(a,b,c){if(this.seriesViewer()==null){return NaN}var d=this.getEffectiveViewport1(this.view());var e=new $.ig.ScalerParams(0,this.seriesViewer().actualWindowRect(),this.view().bx(),this.xAxis().isInverted(),d);var f=this._xf.r(this.xAxis(),this.seriesViewer().actualWindowRect(),this.view().bx(),d);return this.ic(this.highColumn(),a,this.xAxis(),e,f,this.wn.runOn(this),b,c)},getSeriesHighValuePosition:function(a,b,c){var $self=this;return this.tl(a,b,c,this._xf.r(this.xAxis(),this.view().by(),this.view().bx(),this.getEffectiveViewport1(this.view())),this.yAxis(),this.xAxis(),this.getSeriesHighValue.runOn(this),function(d,e){return $self.jh(d,e,$self.xAxis(),$self.wn.runOn($self),$self.highColumn())},function(d,e){return $self.jf(d,e,$self.xAxis(),$self.wn.runOn($self),$self.highColumn())})},getSeriesLowValuePosition:function(a,b,c){var $self=this;return this.tl(a,b,c,this._xf.r(this.xAxis(),this.view().by(),this.view().bx(),this.getEffectiveViewport1(this.view())),this.yAxis(),this.xAxis(),this.getSeriesLowValue.runOn(this),function(d,e){return $self.jh(d,e,$self.xAxis(),$self.wn.runOn($self),$self.lowColumn())},function(d,e){return $self.jf(d,e,$self.xAxis(),$self.wn.runOn($self),$self.lowColumn())})},getSeriesValuePosition:function(a,b,c){return this.tl(a,b,c,this._xf.r(this.xAxis(),this.view().by(),this.view().bx(),this.getEffectiveViewport1(this.view())),this.yAxis(),this.xAxis(),null,null,null)},wj:function(){return this.yAxis()!=null&&this.yAxis().updateRange()},pa:function(a,b,c,d){$$t.$h.pa.call(this,a,b,c,d);switch(b){case"XAxis":this.nq($b($.ig.Axis.prototype.$type,c));this.ph($b($.ig.Axis.prototype.$type,d));this._vx._cu.g(this.actualResolution());this.renderSeries(false);this.om();break;case"YAxis":this.nq($b($.ig.Axis.prototype.$type,c));this.ph($b($.ig.Axis.prototype.$type,d));this._vx._cu.g(this.actualResolution());this.wj();this.renderSeries(false);this.om();break}},canUseAsYAxis:function(a){if($b($.ig.NumericYAxis.prototype.$type,a)!==null){return true}return false},canUseAsXAxis:function(a){if($b($.ig.CategoryXAxis.prototype.$type,a)!==null||a.isDateTime()){return true}return false},lowMemberAsLegendLabel:function(a){if(arguments.length===1){this.h($$t.$g.lowMemberAsLegendLabelProperty,a);return a}else{return this.c($$t.$g.lowMemberAsLegendLabelProperty)}},highMemberAsLegendLabel:function(a){if(arguments.length===1){this.h($$t.$g.highMemberAsLegendLabelProperty,a);return a}else{return this.c($$t.$g.highMemberAsLegendLabelProperty)}},lowMemberAsLegendUnit:function(a){if(arguments.length===1){this.h($$t.$g.lowMemberAsLegendUnitProperty,a);return a}else{return this.c($$t.$g.lowMemberAsLegendUnitProperty)}},highMemberAsLegendUnit:function(a){if(arguments.length===1){this.h($$t.$g.highMemberAsLegendUnitProperty,a);return a}else{return this.c($$t.$g.highMemberAsLegendUnitProperty)}},getDataLegendSeriesContextAt:function(a,b){var c={__x:a,__y:b,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName};var d=this.getSeriesLowValue(c,false,false);var e=this.getSeriesHighValue(c,false,false);var f=new $.ig.DataLegendSeriesValueInfo;f.valueType(1);f.value(e>d?d:e);f.memberLabel("Low");f.memberPath(function(g){return g!=null?g:"Low"}(this.lowMemberPath()));f.memberSymbol(function(g){return g!=null?g:"L:"}(this.lowMemberAsLegendLabel()));f.memberUnit(function(g){return g!=null?g:""}(this.lowMemberAsLegendUnit()));var g=new $.ig.DataLegendSeriesValueInfo;g.valueType(2);g.value(e>d?e:d);g.memberLabel("High");g.memberPath(function(h){return h!=null?h:"High"}(this.highMemberPath()));g.memberSymbol(function(h){return h!=null?h:"H:"}(this.highMemberAsLegendLabel()));g.memberUnit(function(h){return h!=null?h:""}(this.highMemberAsLegendUnit()));var h=new $.ig.DataLegendSeriesValueInfo;h.valueType(7);h.value(Math.abs(g.value()-f.value()));h.memberLabel("Range");h.memberPath("Range");h.memberSymbol("R:");h.isExcludeByDefault(true);var i=new $.ig.DataLegendSeriesValueInfo;i.valueType(6);i.value(f.value()+h.value()/2);i.memberLabel("Average");i.memberPath("Average");i.memberSymbol("A:");i.isExcludeByDefault(true);var j=new $.ig.DataLegendSeriesContext;j.f(function(){var $ret=new $$4.x($.ig.DataLegendSeriesValueInfo.prototype.$type,0);$ret.add(g);$ret.add(f);$ret.add(h);$ret.add(i);return $ret}());j.seriesGroup(this.aw());return j},$type:new $.ig.Type("HorizontalRangeCategorySeries",$$t.$h.$type)},true);$c("RangeAreaSeries:c","HorizontalRangeCategorySeries",{bc:function(){return new $$t.c},cd:function(){return new $$t.j(this)},o2:function(a){$$t.$g.o2.call(this,a);this._ym=a},_ym:null,isAreaOrLine:function(){return true},isArea:function(){return true},yn:function(a,b,c,d){if($.ig.util.isNaN(b.__x)||$.ig.util.isNaN(b.__y)){return false}if($.ig.util.isNaN(c.__x)||$.ig.util.isNaN(c.__y)){return false}if(a.__y<=b.__y&&a.__y>=c.__y){return true}return false},testHit:function(a,b){if(this.f4(a,b)){return true}if(this.uf(a,b)){return true}return false},init:function(){$$t.$g.init.call(this);this._ab=$$t.$c.$type},preferredCategoryMode:function(a){return 0},nk:function(a,b){$$t.$g.nk.call(this,a,b);var c=b;c.c6()},w7:function(a,b){$$t.$g.w7.call(this,a,b);var c=a.f.count();var d=new $$4.x(Array,2,c);for(var e=0;e<c;e++){var f=a.f.__inner[e];var g=new Array(4);g[0]=f[0];g[1]=f[1];var h=a.f.__inner[a.f.count()-1-e];g[2]=h[0];g[3]=h[2];d.add(g)}var i=$b($$t.$j.$type,b);var j=this.getEffectiveViewport1(i);this.vw.a2(this,this.wg(),this.getCategoryItems.runOn(this),this.wp(b),this.wq(b));var k=false;var l=this.vw._b;if(l!=null){k=true}if(k){var m=new $.ig.ScalerParams(0,b.by(),b.bx(),this.xAxis().isInverted(),j);this.w3(d,-1,this.lowColumn().count(),this.xAxis(),m,b.isThumbnailView())}var n=i.polyline0();var o=i.polyline1();var p=i.polygon01();this.vw.ad(n,true,false,true,true);this.vw.ad(o,true,false,true,true);this.vw.ad(p,false,true,false,false);if(b.checkFrameDirty(a)){i.c7(a.f.count(),d,false);b.updateFrameVersion(a)}i.polygon01().__opacity=this.vw.j*this.actualAreaFillOpacity()},$type:new $.ig.Type("RangeAreaSeries",$$t.$g.$type)},true);$c("HighLowValuesHolder:d","ValuesHolder",{init:function(){$.ig.ValuesHolder.prototype.init.call(this)},_f:null,_g:null,e:function(){if(this._f==null||this._g==null){return 0}return Math.min(this._f.count(),this._g.count())},$type:new $.ig.Type("HighLowValuesHolder",$.ig.ValuesHolder.prototype.$type)},true);$c("DefaultHighLowValueProvider:e","Object",{init:function(){$.ig.$op.init.call(this)},highColumn:function(){return new $.ig.FastItemColumn(null,null,null,false)},lowColumn:function(){return new $.ig.FastItemColumn(null,null,null,false)},$type:new $.ig.Type("DefaultHighLowValueProvider",$.ig.$ot,[$.ig.IHasHighLowValueCategory.prototype.$type])},true);$c("RangeCategoryFramePreparer:f","CategoryFramePreparerBase",{init:function(a,b){if(a>0){switch(a){case 1:this.init1.apply(this,arguments);break}return}$$t.$f.init1.call(this,1,b,$b($.ig.ISupportsMarkers.prototype.$type,b),$b($.ig.IProvidesViewport.prototype.$type,b),$b($.ig.ISupportsErrorBars.prototype.$type,b),$b($.ig.IBucketizer.prototype.$type,b))},init1:function(a,b,c,d,e,f){$.ig.CategoryFramePreparerBase.prototype.init1.call(this,1,b,c,d,e,f);this._aa=new $.ig.DefaultCategoryTrendlineHost;if($b($.ig.IHasCategoryTrendline.prototype.$type,b)!==null){this._aa=$b($.ig.IHasCategoryTrendline.prototype.$type,b)}this._ab=new $$t.e;if($b($.ig.IHasHighLowValueCategory.prototype.$type,b)!==null){this._ab=$b($.ig.IHasHighLowValueCategory.prototype.$type,b)}},_aa:null,_ab:null,l:function(a,b,c,d,e,f){var g=b[0];var h=b[1];var i=b[2];if(!$.ig.util.isNaN(g)&&!$.ig.util.isNaN(h)&&!$.ig.util.isNaN(i)){a.m.add({__x:g,__y:(h+i)/2,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName});this._c.updateMarkerTemplate(e,d,f);return true}return false},z:function(a,b,c,d){var e=a;var f=e._f;var g=e._g;var h=f.item(b);var i=g.item(b);var j=Math.max(h,i);var k=Math.min(h,i);if(c){e._c=k;e._d=j}else{e._b=j;e._a=k}},u:function(a,b,c){var d=a;var e=d._f;var f=d._g;var g=e.item(b);var h=f.item(b);if(!$.ig.util.isNaN(g)){d._b=Math.max(d._b,g);d._a=Math.min(d._a,g)}if(!$.ig.util.isNaN(h)){d._b=Math.max(d._b,h);d._a=Math.min(d._a,h)}},e:function(a,b){var c=b;return[a,c._a,c._b]},x:function(a,b,c,d,e,f){if(d){b[0]=b[0]+c}else{b[0]=a._b.getScaledValue(b[0],e)+c}b[1]=a._c.getScaledValue(b[1],f);b[2]=a._c.getScaledValue(b[2],f)},y:function(a,b,c,d,e,f,g){$.ig.CategoryFramePreparerBase.prototype.y.call(this,a,b,c,d,e,f,g);var h=a._j;var i=a._a.f.count();var j=a._a.f;var k=this.q();var l=k.count();var m=new $$4.x($$0.$ap.$type,0);if(!c){m.add(0)}var n=new $$4.x($$0.$ap.$type,0);n.add(1);n.add(2);a._b.getScaledBucketValueList(j,m,0,i,d);a._c.getScaledBucketValueList(j,n,0,i,e);for(var o=0;o<i;o++){j.__inner[o][0]=j.__inner[o][0]+b}if(g){a._b.getScaledBucketValueList(k,m,0,l,d);a._c.getScaledBucketValueList(k,n,0,l,e);for(var p=0;p<l;p++){k.__inner[p][0]=k.__inner[p][0]+b}}},j:function(a){var b=new $$t.d;b._f=this._ab.highColumn();b._g=this._ab.lowColumn();return b},$type:new $.ig.Type("RangeCategoryFramePreparer",$.ig.CategoryFramePreparerBase.prototype.$type)},true);$c("RangeColumnSeries:i","HorizontalRangeCategorySeries",{bc:function(){return new $$t.i},isColumn:function(){return true},isMarkerlessDisplayPreferred:function(){return true},iq:function(){if(!$.ig.util.isNaN(this.resolution())){return $$t.$g.iq.call(this)}return $.ig.Defaults.prototype.h},cd:function(){return new $$t.l(this)},o2:function(a){$$t.$g.o2.call(this,a);this._ym=a},_ym:null,init:function(){$$t.$g.init.call(this);this._ab=$$t.$i.$type},radiusX:function(a){if(arguments.length===1){this.h($$t.$i.radiusXProperty,a);return a}else{return this.c($$t.$i.radiusXProperty)}},radiusY:function(a){if(arguments.length===1){this.h($$t.$i.radiusYProperty,a);return a}else{return this.c($$t.$i.radiusYProperty)}},dv:function(){return true},preferredCategoryMode:function(a){return 2},getSeriesValueBoundingBox:function(a){if(this.xAxis()==null||this.yAxis()==null){return $$a.$ae.empty()}var b=this.fromWorldPosition(a);var c=this.view().by();var d=this.view().bx();var e=this.getEffectiveViewport1(this.view());var f=new $.ig.ScalerParams(0,c,d,this.yAxis().isInverted(),e);f._b=this.h3();var g=this.aj(this.vn(),this.vo.f,this.wp(this.view()),this.wq(this.view()),a,true);if(g==null){return $$a.$ae.empty()}var h=g[0];var i=g[1];var j=Math.abs(b.__x-h[0]);var k=Math.abs(b.__x-i[0]);var l=this.xAxis().k4(c,d,e);if(j<k){var m=h[0]-.5*l;var n=h[1];var o=h[2];return new $$a.ae(0,m,Math.min(n,o),l,Math.max(n,o)-Math.min(n,o))}else{var p=i[0]-.5*l;var q=i[1];var r=i[2];return new $$a.ae(0,p,Math.min(q,r),l,Math.max(q,r)-Math.min(q,r))}},testHit:function(a,b){if(this.f8(a,b)){return true}if(this.uf(a,b)){return true}return false},nk:function(a,b){$$t.$g.nk.call(this,a,b);var c=b;if(a&&c._c6!=null){c._c6.count(0)}},getItemSpan:function(){return this.xAxis().k4(this.view().by(),this.view().bx(),this.getEffectiveViewport1(this.view()))},w7:function(a,b){$$t.$g.w7.call(this,a,b);var c=$b($$t.$l.$type,b);var d=a.f;var e=b.by();var f=b.bx();var g=this.getEffectiveViewport1(b);var h=this.xAxis().k4(e,f,g);if($.ig.util.isNaN(h)||Number.isInfinity(h)){c._c6.count(0);return}this.vw.a2(this,this.wg(),this.getCategoryItems.runOn(this),this.wp(b),this.wq(b));this.vw.r=this.radiusX();this.vw.s=this.radiusY();this.vw.k=this.radiusX();this.vw.l=this.radiusY();var i=false;var j=this.vw._b;if(j!=null){i=true}var k=this.xAxis().isSorting();var l=this.lowColumn().count();var m=this.xAxis();var n=new $.ig.ScalerParams(0,e,f,this.xAxis().isInverted(),g);var o=0;for(var p=0;p<d.count();++p){var q=d.__inner[p][0]-.5*h;var r=Math.min(d.__inner[p][1],d.__inner[p][2]);var s=Math.max(d.__inner[p][1],d.__inner[p][2]);var t=Math.abs(s-r);if(Number.isInfinity(t)||$.ig.util.isNaN(t)){continue}var u=c._c6.item(o);o++;u.width(h);u.height(t);if(i){this.w3(d,p,l,m,n,b.isThumbnailView())}this.vw.ad(u,false,false,false,false);u.ap(this.vw.k);u.aq(this.vw.l);c.db(u,q,r)}c._c6.count(o);b.updateFrameVersion(a)},$type:new $.ig.Type("RangeColumnSeries",$$t.$g.$type)},true);$c("RangeCategorySeriesView:k","CategorySeriesView",{_c3:null,init:function(a){$.ig.CategorySeriesView.prototype.init.call(this,a);this._c3=a},c4:function(a,b,c,d,e,f){a._an.clear();b._an.clear();c._an.clear();var g=$.ig.FastFlattener.prototype.b(d,e,true,f,this._e.actualResolution());var h=$.ig.FastFlattener.prototype.b(d,e,false,f,this._e.actualResolution());var i=g.count();var j=h.count();var k;var l;var m;var n;for(var o=0;o<i;o++){k=g.item(o);l=e.__inner[k];m=l[0];n=l[1];a._an.add({__x:m,__y:n,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName});b._an.add({__x:m,__y:n,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName})}var p;var q;for(var r=0;r<j;r++){k=h.item(r);l=e.__inner[k];if(f){p=l[0];q=l[2]}else{p=l[2];q=l[3]}c._an.add({__x:p,__y:q,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName});b._an.add({__x:p,__y:q,$type:$$a.$y.$type,getType:$.ig.$op.getType,getGetHashCode:$.ig.$op.getGetHashCode,typeName:$.ig.$op.typeName})}a._ab=a._an.count()>0;b._ab=b._an.count()>0;c._ab=c._an.count()>0},cv:function(){return new $$t.a(this)},$type:new $.ig.Type("RangeCategorySeriesView",$.ig.CategorySeriesView.prototype.$type)},true);$c("RangeAreaSeriesView:j","RangeCategorySeriesView",{_c5:null,init:function(a){this.dd=new $$a.b1;this.c9=new $$a.b0;this.de=new $$a.b1;this.dc=new $$a.b1;this.db=new $$a.b1;this.c8=new $$a.b0;$$t.$k.init.call(this,a);this._c5=a},onInit:function(){$$t.$k.onInit.call(this);if(!this.isThumbnailView()){this._c5.markerType(1)}},dd:null,c9:null,de:null,polyline0:function(){return this.dd},polygon01:function(){return this.c9},polyline1:function(){return this.de},c6:function(){this.c9._an.clear();this.dd._an.clear();this.de._an.clear()},c7:function(a,b,c){this.c4(this.dd,this.c9,this.de,a,b,c);this.as()},dc:null,db:null,c8:null,be:function(){$$t.$k.be.call(this);this.db._an=this.dd._an;this.dc._an=this.de._an;this.c8._an=this.c9._an;var a=this.br();this.db.__stroke=a;this.db._ad=this._e.actualThickness()+3;this.dc.__stroke=a;this.dc._ad=this._e.actualThickness()+3;this.c8.__fill=a;this.c8.__opacity=1},a8:function(a,b){$$t.$k.a8.call(this,a,b);if(a.d()){if(b){a.u(this.c8);a.v(this.db);a.v(this.dc)}else{a.u(this.c9);a.v(this.dd);a.v(this.de)}}},an:function(a){$$t.$k.an.call(this,a);this._e.a5().exportPolylineData(a,this.dd,"lowerShape",["Lower"]);this._e.a5().exportPolylineData(a,this.de,"upperShape",["Upper","Main"]);
this._e.a5().exportPolygonData(a,this.c9,"fillShape",["Fill"])},$type:new $.ig.Type("RangeAreaSeriesView",$$t.$k.$type)},true);$c("RangeColumnSeriesView:l","RangeCategorySeriesView",{_c5:null,init:function(a){var $self=this;this.dc=new $$a.b2;$$t.$k.init.call(this,a);this._c5=a;this._c6=function(){var $ret=new $.ig.Pool$1($$a.$b2.$type);$ret.create($self.dd.runOn($self));$ret.activate($self.c8.runOn($self));$ret.disactivate($self.da.runOn($self));$ret.destroy($self.c9.runOn($self));return $ret}()},_c6:null,onInit:function(){$$t.$k.onInit.call(this);this._c7=new $$4.x($$a.$b2.$type,0);if(!this.isThumbnailView()){this._c5.markerType($.ig.Defaults.prototype.c);this._c5.thickness($.ig.Defaults.prototype.i)}},_c7:null,dd:function(){var a=new $$a.b2;this._c7.add(a);a.__visibility=1;return a},c8:function(a){a.__visibility=0},da:function(a){a.__visibility=1},c9:function(a){this._c7.remove(a)},db:function(a,b,c){if(!this.isDirty()){this.as()}a._o=c;a._n=b},ac:function(a){return this._c7.__inner[a]},dc:null,ab:function(a){var b=this._c7.__inner[a];this.dc.__visibility=b.__visibility;this.dc._n=b._n;this.dc._o=b._o;this.dc.width(b.width());this.dc.height(b.height());var c=this.bs(a);this.dc.__fill=c;this.dc.__stroke=c;this.dc._ad=this._e.actualThickness()+3;return this.dc},a8:function(a,b){$$t.$k.a8.call(this,a,b);if(a.d()){for(var c=0;c<this._c7.count();c++){var d=this.aa(c,b);this.bf(d,c,b);a.w(d)}}},an:function(a){$$t.$k.an.call(this,a);var b=0;var c=new $$4.x($$a.$b2.$type,0);var e=this._c6.active().getEnumerator();while(e.moveNext()){var d=e.current();c.add(d)}c.sort2(function(f,g){if(f._n<g._n){return-1}else if(f._n>g._n){return 1}else{return 0}});var g=c.getEnumerator();while(g.moveNext()){var f=g.current();this._e.a5().exportRectangleData(a,f,"column"+b,["Main","Fill"])}b++},$type:new $.ig.Type("RangeColumnSeriesView",$$t.$k.$type)},true);$$t.$h.lowMemberPathProperty=$$a.$s.i("LowMemberPath",String,$$t.$h.$type,new $$a.ac(2,null,function(a,b){a.raisePropertyChanged("LowMemberPath",b.oldValue(),b.newValue())}));$$t.$h.highMemberPathProperty=$$a.$s.i("HighMemberPath",String,$$t.$h.$type,new $$a.ac(2,null,function(a,b){a.raisePropertyChanged("HighMemberPath",b.oldValue(),b.newValue())}));$$t.$h.highlightedLowMemberPathProperty=$$a.$s.i("HighlightedLowMemberPath",String,$$t.$h.$type,new $$a.ac(2,null,function(a,b){a.raisePropertyChanged("HighlightedLowMemberPath",b.oldValue(),b.newValue())}));$$t.$h.highlightedHighMemberPathProperty=$$a.$s.i("HighlightedHighMemberPath",String,$$t.$h.$type,new $$a.ac(2,null,function(a,b){a.raisePropertyChanged("HighlightedHighMemberPath",b.oldValue(),b.newValue())}));$$t.$g.xAxisProperty=$$a.$s.i("XAxis",$.ig.CategoryAxisBase.prototype.$type,$$t.$g.$type,new $$a.ac(2,null,function(a,b){a.raisePropertyChanged("XAxis",b.oldValue(),b.newValue())}));$$t.$g.yAxisProperty=$$a.$s.i("YAxis",$.ig.NumericYAxis.prototype.$type,$$t.$g.$type,new $$a.ac(2,null,function(a,b){a.raisePropertyChanged("YAxis",b.oldValue(),b.newValue())}));$$t.$g.lowMemberAsLegendLabelProperty=$$a.$s.i("LowMemberAsLegendLabel",String,$$t.$g.$type,new $$a.ac(2,null,function(a,b){a.raisePropertyChanged("LowMemberAsLegendLabel",b.oldValue(),b.newValue())}));$$t.$g.highMemberAsLegendLabelProperty=$$a.$s.i("HighMemberAsLegendLabel",String,$$t.$g.$type,new $$a.ac(2,null,function(a,b){a.raisePropertyChanged("HighMemberAsLegendLabel",b.oldValue(),b.newValue())}));$$t.$g.lowMemberAsLegendUnitProperty=$$a.$s.i("LowMemberAsLegendUnit",String,$$t.$g.$type,new $$a.ac(2,null,function(a,b){a.raisePropertyChanged("LowMemberAsLegendUnit",b.oldValue(),b.newValue())}));$$t.$g.highMemberAsLegendUnitProperty=$$a.$s.i("HighMemberAsLegendUnit",String,$$t.$g.$type,new $$a.ac(2,null,function(a,b){a.raisePropertyChanged("HighMemberAsLegendUnit",b.oldValue(),b.newValue())}));$$t.$i.radiusXProperty=$$a.$s.i("RadiusX",Number,$$t.$i.$type,new $$a.ac(2,0,function(a,b){a.raisePropertyChanged("RadiusX",b.oldValue(),b.newValue())}));$$t.$i.radiusYProperty=$$a.$s.i("RadiusY",Number,$$t.$i.$type,new $$a.ac(2,0,function(a,b){a.raisePropertyChanged("RadiusY",b.oldValue(),b.newValue())}))});