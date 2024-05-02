/*!@license
* Infragistics.Web.ClientUI infragistics.dv_popup.js 23.2.20232.48
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
*     infragistics.ext_threading.js
*     infragistics.dv_core.js
*     infragistics.dv_visualdata.js
*     infragistics.ext_ui.js
*/
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.util","./infragistics.ext_core","./infragistics.ext_collections","./infragistics.ext_threading","./infragistics.dv_core","./infragistics.dv_visualdata","./infragistics.ext_ui"],factory)}else{factory(igRoot)}})(function($){$.ig=$.ig||{};var $$t={};$.ig.globalDefs=$.ig.globalDefs||{};$.ig.globalDefs.$$ab=$$t;var $$0=$.ig.globalDefs.$$0;var $$4=$.ig.globalDefs.$$4;var $$9=$.ig.globalDefs.$$9;var $$1=$.ig.globalDefs.$$1;var $$w=$.ig.globalDefs.$$w;var $$ap=$.ig.globalDefs.$$ap;var $$6=$.ig.globalDefs.$$6;var $$a=$.ig.globalDefs.$$a;$.ig.$currDefinitions=$$t;$.ig.util.bulkDefine(["PopupView:a","Popup:b","OnClosedEventHandler:c","OnPopupEventHandler:d"]);var $a=$.ig.intDivide,$b=$.ig.util.cast,$c=$.ig.util.defType,$d=$.ig.util.defEnum,$e=$.ig.util.getBoxIfEnum,$f=$.ig.util.getDefaultValue,$g=$.ig.util.getEnumValue,$h=$.ig.util.getValue,$i=$.ig.util.intSToU,$j=$.ig.util.nullableEquals,$k=$.ig.util.nullableIsNull,$l=$.ig.util.nullableNotEquals,$m=$.ig.util.toNullable,$n=$.ig.util.toString$1,$o=$.ig.util.u32BitwiseAnd,$p=$.ig.util.u32BitwiseOr,$q=$.ig.util.u32BitwiseXor,$r=$.ig.util.u32LS,$s=$.ig.util.unwrapNullable,$t=$.ig.util.wrapNullable,$u=String.fromCharCode,$v=$.ig.util.castObjTo$t,$w=$.ig.util.compare,$x=$.ig.util.replace,$y=$.ig.util.stringFormat,$z=$.ig.util.stringFormat1,$0=$.ig.util.stringFormat2,$1=$.ig.util.stringCompare1,$2=$.ig.util.stringCompare2,$3=$.ig.util.stringCompare3,$4=$.ig.util.compareSimple,$5=$.ig.util.tryParseNumber,$6=$.ig.util.tryParseNumber1,$7=$.ig.util.numberToString,$8=$.ig.util.numberToString1,$9=$.ig.util.parseNumber;$d("PopupAnimationType:i",false,false,{GrowShrink:0,FadeInOutSlide:1});$d("PopupPointerPosition:h",false,false,{Auto:0,Top:1,Bottom:2,Left:3,Right:4});$d("PopupDirection:g",false,false,{Auto:0,Down:1,Up:2,Left:3,Right:4});$d("PopupAlignment:f",false,false,{Auto:0,Near:1,Far:2,Middle:3});$c("PopupVisualModelExport:n","Object",{init:function(){$.ig.$op.init.call(this)},_e:0,_d:false,_c:null,_b:null,_a:null,f:function(){var a=new $$6.aj(0);a.l("{");a.l("actualElevation : "+this._e+", ");a.l("isShown : "+this._d+", ");a.l("actualUmbraShadowColor : "+this._c.serialize()+", ");a.l("actualPenumbraShadowColor : "+this._b.serialize()+", ");a.l("actualAmbientShadowColor : "+this._a.serialize()+", ");a.l("}");return a.toString()},$type:new $.ig.Type("PopupVisualModelExport",$.ig.$ot)},true);$c("PopupView:a","Object",{init:function(){this.m=false;this.x=0;this.br=new $$a.af(1,0,0);this.k=true;this.p=false;$.ig.$op.init.call(this)},ag:null,f:null,ao:null,an:null,am:null,aj:null,al:null,ak:null,aq:null,af:function(){return this.g().pointerSize()},ac:function(){return this.af()/2},ab:function(){return this.af()*1.414},aa:function(){return this.ab()/2},ad:function(){return this.bs().width()/2-this.ac()},ae:function(){return this.bs().height()/2-this.ac()},v:0,w:0,u:0,m:false,x:0,s:0,t:0,q:0,r:0,g:function(){return this.f},ah:function(){return this.ag},a6:function(){this.ao.setStyleProperty("height","0%");this.ao.setStyleProperty("width","0%");this.aj=this.ag.createElement("div");this.be(this.g().isFixed());this.aj.setStyleProperty("z-index","10000");this.aj.setStyleProperty("inset","unset");this.aj.setStyleProperty("padding","0px");this.aj.setStyleProperty("border-width","0px");this.al=this.ag.createElement("div");this.al.setStyleProperty("height",20*1.414/2+"px");this.ak=this.ag.createElement("div");this.ak.setStyleProperty("position","relative");this.ak.setStyleProperty("width",this.af()+"px");this.ak.setStyleProperty("height",this.af()+"px");this.ak.setStyleProperty("z-index","1");this.ak.setStyleProperty("clip-path",$y('path("M0,0l{0},{0}l0,-{0}l-{0},0Z")',this.af()));this.al.append(this.ak);this.an=this.ag.createElement("div");this.an.setStyleProperty("position","relative");this.an.setStyleProperty("overflow","hidden");this.an.setAttribute("key","popupContentAreaOuter");this.bf(this.g().isFocusable());this.aj.listen("mouseenter",this.a7.runOn(this));this.aj.listen("mouseleave",this.a8.runOn(this));this.aj.listen("focusin",this.a4.runOn(this));this.aj.listen("focusout",this.a5.runOn(this));this.am=this.ag.createElement("div");this.am.setAttribute("key","popupContentAreaInner");this.an.append(this.am);this.aj.append(this.an)},bn:function(){var a=this.g();var b=$.ig.ElevationHelper.prototype.e(a.actualElevation(),a.actualUmbraShadowColor(),a.actualPenumbraShadowColor(),a.actualAmbientShadowColor());if(this.l()){this.aj.setStyleProperty("box-shadow",b)}else{this.an.setStyleProperty("box-shadow",b)}},bl:function(){if(this.g().background()!=null){this.an.setStyleProperty("background-color",this.g().background().__fill);this.ak.setStyleProperty("background-color",this.g().background().__fill)}if(this.g().pointerBackground()!=null){this.ak.setStyleProperty("background-color",this.g().pointerBackground().__fill)}},bm:function(){if(!$.ig.util.isNaN(this.g().cornerRadius())){$.ig.NativeUI.prototype.o(this.an,new $$a.h(0,this.g().cornerRadius()))}},bo:function(){if(null==this.ao){return}this.be(this.g().isFixed());this.bn();this.bl();this.bm()},a7:function(a){this.g().cd()},a8:function(a){this.g().ce()},a4:function(a){this.g().cb()},a5:function(a){this.g().cc(a.originalEvent.relatedTarget)},o:function(){return HTMLElement.prototype.hasOwnProperty("popover")},l:function(){return this.o()&&this.g().useTopLayer()},at:function(){if(null!=this.aj){this.bo();this.an.setStyleProperty("height","0px");var a=this.aj.getNativeElement();if(false==this.m){this.al.remove();if(this.g().isPointerEnabled()){var b=this.g().t();if(b==1){this.aj.setStyleProperty("display","block");var c=this.aj.getNativeElement();var d=this.al.getNativeElement();var e=this.an.getNativeElement();c.insertBefore(d,e)}else if(b==2){this.aj.setStyleProperty("display","block");this.aj.append(this.al)}else if(b==3){this.aj.setStyleProperty("display","flex");var f=this.aj.getNativeElement();var g=this.al.getNativeElement();var h=this.an.getNativeElement();f.insertBefore(g,h);this.al.setStyleProperty("height","unset");this.al.setStyleProperty("width",20*1.414/2+"px")}else if(b==4){this.aj.setStyleProperty("display","flex");this.aj.append(this.al);this.al.setStyleProperty("height","unset");this.al.setStyleProperty("width",20*1.414/2+"px")}}if(this.g().bd()!=null){this.g().bd().appendChild(a)}else{document.body.appendChild(a)}this.bh(this.g().useTopLayer());if(this.l()){a.showPopover()}this.m=true;if(this.k){this.a1()}}}},au:function(a,b){this.aj.setStyleProperty("top",$$t.$a.ar(a._f));this.an.setStyleProperty("height",$$t.$a.as(a._h));this.am.setStyleProperty("top",$$t.$a.as(b._b));this.am.setStyleProperty("opacity","1");this.am.setStyleProperty("transform",String.empty());this.x=0;if(this.p){this.bk()}if(this.g().isShown()){this.ap.observe(this.ai.getNativeElement())}else{this.ap.disconnect()}if(this.g().disableHitTestDuringAnimation()){this.bg(this.g().isHitTestVisible())}return{p0:a,p1:b}},av:function(a){this.x=a;if(this.g().disableHitTestDuringAnimation()){this.bg(false)}this.bi(this.bs().width(),a)},bc:function(){if(null!=this.aj&&this.m){var a=this.aj.getNativeElement();if(this.g().bd()!=null){this.g().bd().removeChild(a)}else{document.body.removeChild(a)}this.m=false}},aw:function(a){this.ai=a;this.am.append(this.ai);this.ap=new $.ig.ResizeObserver(this.a3.runOn(this))},ai:null,ap:null,a3:function(a){if(this.m){if(this.g().ao()&&this.g().animationType()==0){return}this.g().b8()}},j:function(a){var b=this.aj.getNativeElement();return b.contains(a)},bb:function(a){this.ai=null;this.ap.disconnect();this.ap=null;a.remove()},d:function(a){return new $.ig.AnimationKeyFrameEffect(0,this.am,0,null,a)},e:function(a){return new $.ig.AnimationKeyFrameEffect(0,this.an,0,null,a)},ay:function(){if($.ig.KeyFrameAnimationFactory.prototype._h==null){$.ig.KeyFrameAnimationFactory.prototype._h=this.ah()}},c:function(a){return new $.ig.AnimationKeyFrameEffect(0,this.aj,0,null,a)},b:function(a){return new $.ig.AnimationKeyFrameEffect(0,this.an,0,null,a)},a:function(a){return new $.ig.AnimationKeyFrameEffect(0,this.aj,0,null,a)},i:function(){return 12},h:function(){return 11},n:function(){return this.g().bd()!=null&&!this.g().isFixed()&&!this.l()},br:null,bs:function(){if(this.k){this.a1()}return this.br},y:function(a,b,c){var d;switch(b){case 3:d=(!this.n()?a.left():0)-(this.bs().width()+(this.g().isPointerEnabled()?this.aa():0));break;case 4:d=!this.n()?a.right():a.width();break;case 0:case 2:case 1:default:switch(c){case 2:d=(!this.n()?a.right():a.width())-this.bs().width();break;case 3:d=(!this.n()?a.right():a.width())-a.width()/2-this.bs().width()/2;break;case 0:case 1:default:d=!this.n()?a.left():0;break}break}return d},z:function(a,b,c){var d;switch(b){case 3:case 4:switch(c){case 2:d=(!this.n()?a.bottom():0)-this.bs().height();break;case 3:d=(!this.n()?a.top():-a.height())-this.bs().height()/2+a.height()/2;break;case 0:case 1:default:d=!this.n()?a.top():-a.height();break}break;case 2:d=(!this.n()?a.top():-a.height())-(this.bs().height()+(this.g().isPointerEnabled()?this.aa():0));break;case 0:case 1:default:d=!this.n()?a.bottom():0;break}return d},as:function(a){return $y("{0}px",a)},ar:function(a){return $y("{0}px",a)},bj:function(){if(this.g().r()==1||this.g().r()==2){switch(this.g().j()){case 3:this.v=this.ad()+(this.s-this.q);break}}else if(this.g().r()==3||this.g().r()==4){switch(this.g().j()){case 3:this.w=this.ae()+(this.t-this.r);break}}this.ak.setStyleProperty("transform","translate("+this.v+"px, "+this.w+"px) rotate("+this.u+"deg)")},ax:function(a,b,c,d){this.s=a;this.t=b;if(this.g().r()==1||this.g().r()==2){var e=window.innerWidth;var f=a;var g=f+c;if(f<5){a=5}else if(g>e-5){a=f-(g-(e-5))}}else if(this.g().r()==3||this.g().r()==4){var h=window.innerHeight;var i=b;var j=i+d;if(i<5){b=5}else if(j>h-5){b=i-(j-(h-5))}}return{p0:a,p1:b}},bq:function(a,b,c){var d=this.z(a,b,c);var e=this.y(a,b,c);if(this.g().bd()==null){var f=this.ax(e,d,this.bs().width(),this.bs().height());e=f.p0;d=f.p1}this.bd(e,d);if(b==2||c==2){var g=10;while(g>0){var h=this.z(a,b,c);var i=this.y(a,b,c);if(this.g().bd()==null){var j=this.ax(i,h,this.bs().width(),this.bs().height());i=j.p0;h=j.p1}if(h==d&&i==e){g=0;break}d=h;e=i;this.bd(e,d);g--}}this.bj();return new $$a.ae(0,e,d,this.bs().width(),this.bs().height())},bp:function(a,b,c){var d=new $$a.ae(4);var target_=a;if(target_.getBoundingClientRect){var bRect_=target_.getBoundingClientRect();d.left(bRect_.left);d.top(bRect_.top);d.width(bRect_.width);d.height(bRect_.height)}var e=this.bq(d,b,c);return e},k:false,a1:function(){if(this.m){this.an.setStyleProperty("width",String.empty());this.an.setStyleProperty("height",String.empty());this.aj.setStyleProperty("width",String.empty());this.aj.setStyleProperty("height",String.empty());this.aj.setStyleProperty("position","absolute");this.br=new $$a.af(1,this.am.outerWidth(),this.am.outerHeight());this.k=false;this.bk()}else{this.k=true}},bd:function(a,b){var c=$y("{0}px",a);var d=$y("{0}px",b);this.aj.setStyleProperty("left",c);this.aj.setStyleProperty("top",d);this.q=a;this.r=b},a9:function(a){var $self=this;if(a==null){this.ag=null;if(this.aj!=null){this.aj.unlistenAll()}return}this.ag=a;var b=a.rootWrapper();this.az(b);this.ag.getPortal(this.am,"ChildContent",function(c){var comp_=c.componentRef();$self.aq=comp_},true)},p:false,bk:function(){var a=new $$a.af(1,this.bs().width(),this.bs().height());if(!this.m||!this.g().isShown()&&!this.g().isClosing()){a.height(0)}var b=a.width();var c=a.height();var d=$y("{0}px",b);var e=$y("{0}px",c);this.bi(b,c);if(this.g().isPointerEnabled()){switch(this.g().t()){case 2:d=$y("{0}px",b);e=$y("{0}px",this.aa()+c);break;case 1:d=$y("{0}px",b);e=$y("{0}px",this.aa()+c);break;case 3:d=$y("{0}px",this.aa()+b);e=$y("{0}px",c);break;case 4:d=$y("{0}px",this.aa()+b);e=$y("{0}px",c);break}}if(this.f.ao()){if(this.g().isClosing()||this.x==c){return}this.f.b2();this.p=true;return}this.p=false;var f=$y("{0}px",b);var g=$y("{0}px",c);this.an.setStyleProperty("width",f);this.an.setStyleProperty("height",g);if(!this.l()){if(this.g().bd()!=null){e="0px"}this.aj.setStyleProperty("width",d);this.aj.setStyleProperty("height",e)}this.be(this.g().isFixed())},bi:function(a,b){if(this.g().isPointerEnabled()){var c=0;var d=0;switch(this.g().t()){case 2:c=135;d=-this.ac();this.v=a/2-this.ac();this.w=d;break;case 1:c=-45;d=this.aa()-this.ac();this.v=a/2-this.ac();this.w=d;break;case 3:c=-135;d=this.aa()-this.ac();this.v=d;this.w=b/2-this.ac();break;case 4:c=45;d=-this.ac();this.v=d;this.w=b/2-this.ac();break}this.u=c;this.ak.setStyleProperty("transform","translate("+this.v+"px, "+this.w+"px) rotate("+this.u+"deg)")}},az:function(a){this.ao=a;this.a6()},a0:function(a){this.f=a},a2:function(){},ba:function(){this.at();if(this.g().isShown()){return}this.bk()},bg:function(a){if(this.aj!=null){this.aj.setStyleProperty("pointer-events",a?"auto":"none")}},bf:function(a){if(this.aj!=null){this.aj.setAttribute("tabindex",a?"-1":"")}},be:function(a){if(this.aj!=null){this.aj.setStyleProperty("position",a?"fixed":this.g().bd()!=null?"relative":"absolute")}},bh:function(a){if(this.aj!=null&&this.o()){var b=this.aj.getNativeElement();if(a){b.popover="manual"}else{b.popover=undefined}}},$type:new $.ig.Type("PopupView",$.ig.$ot)},true);$c("Popup:b","Object",{q:0,i:0,a1:0,c5:null,c3:null,bb:null,c6:function(){return this.c5},c4:function(){return this.c3},r:function(a){if(arguments.length===1){this.q=a;return a}else{return this.q}},j:function(){return this.i},a2:function(){return this.a1},bd:function(){return this.bb},init:function(){this.af=false;this.a7=50;this.ak=true;this.o=0;this.a5=-1;this.a4=$$t.$b.a9;this.av=false;this.cs=$$t.$b.c1;this.cr=$$t.$b.c0;this.cq=$$t.$b.cz;this.ct=null;this.ag=true;this.ac=false;this.ah=false;this.s=0;this.cu=null;this.az=20;this.ae=false;this.aj=false;$.ig.$op.init.call(this);$.ig.NativeUIInputsFactory.prototype.register();var a=this.v();this._w=a;a.a0(this)},onClosed:null,onPopup:null,propertyChanged:null,cf:function(a,b,c){if(this.propertyChanged!=null){this.propertyChanged(this,new $$0.b6(a))}this.ci(a,b,c)},popupMouseEnter:null,popupMouseLeave:null,popupGotFocus:null,popupLostFocus:null,cd:function(){if(this.popupMouseEnter!=null){this.popupMouseEnter(this,new $$a.as)}},ce:function(){if(this.popupMouseLeave!=null){this.popupMouseLeave(this,new $$a.as)}},cb:function(){if(this.popupGotFocus!=null){this.popupGotFocus(this,new $.ig.FocusEventArgs)}},cc:function(a){if(this.popupLostFocus!=null){this.popupLostFocus(this,function(){var $ret=new $.ig.FocusEventArgs;$ret._a=a;return $ret}())}},_w:null,af:false,isFocusable:function(a){if(arguments.length===1){var b=this.af;this.af=a;if(b!=this.af){this.cf("IsFocusable",b,this.af)}return a}else{return this.af}},a7:0,animationDuration:function(a){if(arguments.length===1){var b=this.a7;this.a7=a;if(b!=this.a7){this.cf("AnimationDuration",b,a)}return a}else{return this.a7}},ak:false,animationEnabled:function(a){if(arguments.length===1){var b=this.ak;this.ak=a;if(b!=this.ak){this.cf("AnimationEnabled",b,a)}return a}else{return this.ak}},o:0,animationType:function(a){if(arguments.length===1){var b=this.o;this.o=a;if(b!=this.o){this.cf("AnimationType",$$t.$i.getBox(b),$$t.$i.getBox(this.o))}return a}else{return this.o}},a5:0,elevation:function(a){if(arguments.length===1){var b=this.a5;this.a5=a;if(b!=this.a5){this.cf("Elevation",b,a)}return a}else{return this.a5}},a4:0,actualElevation:function(a){if(arguments.length===1){var b=this.a4;this.a4=a;if(b!=this.a4){this.cf("ActualElevation",b,a)}return a}else{return this.a4}},av:false,isShown:function(){return this.av},cs:null,actualUmbraShadowColor:function(a){if(arguments.length===1){var b=this.cs;this.cs=a;if(b!=this.cs){this.cf("ActualUmbraShadowColor",b,a)}return a}else{return this.cs}},cr:null,actualPenumbraShadowColor:function(a){if(arguments.length===1){var b=this.cr;this.cr=a;if(b!=this.cr){this.cf("ActualPenumbraShadowColor",b,a)}return a}else{return this.cr}},cq:null,actualAmbientShadowColor:function(a){if(arguments.length===1){var b=this.cq;this.cq=a;if(b!=this.cq){this.cf("ActualAmbientShadowColor",b,a)}return a}else{return this.cq}},ct:null,background:function(a){if(arguments.length===1){var b=this.ct;this.ct=a;if(b!=this.ct){this.cf("Background",b,this.ct)}return a}else{return this.ct}},ay:0,cornerRadius:function(a){if(arguments.length===1){var b=this.ay;this.ay=a;if(b!=this.ay){this.cf("CornerRadius",b,this.ay)}return a}else{return this.ay}},ag:false,isHitTestVisible:function(a){if(arguments.length===1){var b=this.ag;this.ag=a;if(b!=this.ag){this.cf("IsHitTestVisible",b,this.ag)}return a}else{return this.ag}},ac:false,disableHitTestDuringAnimation:function(a){if(arguments.length===1){var b=this.ac;this.ac=a;if(b!=this.ac){this.cf("DisableHitTestDuringAnimation",b,this.ac)}return a}else{return this.ac}},ah:false,isPointerEnabled:function(a){if(arguments.length===1){var b=this.ah;this.ah=a;if(b!=this.ah){this.cf("IsPointerEnabled",b,this.ah)}return a}else{return this.ah}},s:0,pointerPosition:function(a){if(arguments.length===1){var b=this.s;this.s=a;if(b!=this.s){this.cf("PointerPosition",$$t.$h.getBox(b),$$t.$h.getBox(this.s))}return a}else{return this.s}},cu:null,pointerBackground:function(a){if(arguments.length===1){var b=this.cu;this.cu=a;if(b!=this.cu){this.cf("PointerBackground",b,this.cu)}return a}else{return this.cu}},az:0,pointerSize:function(a){if(arguments.length===1){var b=this.az;this.az=a;if(b!=this.az){this.cf("PointerSize",b,this.az)}return a}else{return this.az}},ai:false,isShowing:function(a){if(arguments.length===1){this.ai=a;return a}else{return this.ai}},ad:false,isClosing:function(a){if(arguments.length===1){this.ad=a;return a}else{return this.ad}},ae:false,isFixed:function(a){if(arguments.length===1){var b=this.ae;this.ae=a;if(b!=this.ae){this.cf("IsFixed",b,this.ae)}return a}else{return this.ae}},aj:false,useTopLayer:function(a){if(arguments.length===1){var b=this.aj;this.aj=a;if(b!=this.aj){this.cf("UseTopLayer",b,this.aj)}return a}else{return this.aj}},v:function(){return new $$t.a},ci:function(a,b,c){switch(a){case"IsShown":if(false==this.isShown()){this._w.bc();this.bb=null}break;case"Elevation":this.actualElevation(this.elevation()==-1?$$t.$b.a9:this.elevation());break;case"ActualElevation":case"ActualUmbraShadowColor":case"ActualPenumbraShadowColor":case"ActualAmbientShadowColor":case"Background":case"CornerRadius":this._w.bo();break;case"AnimationEnabled":if(false==this.animationEnabled()){this.b2()}break;case"IsHitTestVisible":this._w.bg(this.isHitTestVisible());break;case"IsFocusable":this._w.bf(this.isFocusable());break;case"IsFixed":this._w.be(this.isFixed());break;case"UseTopLayer":this._w.bh(this.useTopLayer());break}},b2:function(){if(this.ao()){this.k.e()}},z:function(a){var b=this.g(a);var c=a?this.c():this.b();var d=this._w.d(c);var e=new $$4.x($.ig.AnimationKeyFrameProperty.prototype.$type,0);var f=new $$4.x($.ig.AnimationKeyFrameProperty.prototype.$type,0);var g=new $$a.bs;g._k=b._a;var h=new $$a.bs;h._k=b._b;var i=new $.ig.AnimationKeyFrameProperty(14,g);var j=new $.ig.AnimationKeyFrameProperty(14,h);e.add(i);f.add(j);d.m(e.toArray());d.m(f.toArray());return $.ig.KeyFrameAnimationFactory.prototype.f().c(d)},a:function(a){var b=new $$4.x($.ig.IKeyFrameAnimation.prototype.$type,0);var c=this.h(a);this._w.av(c._h);var d=a?this.c():this.b();var e=this._w.e(d);var f=new $$4.x($.ig.AnimationKeyFrameProperty.prototype.$type,0);var g=new $$4.x($.ig.AnimationKeyFrameProperty.prototype.$type,0);var h=new $.ig.AnimationKeyFrameProperty(10,c._g);var i=new $.ig.AnimationKeyFrameProperty(10,c._h);f.add(h);g.add(i);e.m(f.toArray());e.m(g.toArray());b.add($.ig.KeyFrameAnimationFactory.prototype.f().c(e));if(this.q==2){var j=c._c;var k=c._f;var l=this._w.c(d);var m=new $$4.x($.ig.AnimationKeyFrameProperty.prototype.$type,0);var n=new $$4.x($.ig.AnimationKeyFrameProperty.prototype.$type,0);var o=new $.ig.AnimationKeyFrameProperty(12,j);var p=new $.ig.AnimationKeyFrameProperty(12,k);m.add(o);n.add(p);l.m(m.toArray());l.m(n.toArray());b.add($.ig.KeyFrameAnimationFactory.prototype.f().c(l))}return b.toArray()},b:function(){var a=new $.ig.AnimationKeyFrameEffectTiming;a._g=this.animationDuration();a._b=3;return a},c:function(){var a=new $.ig.AnimationKeyFrameEffectTiming;a._g=this.animationDuration();a._b=3;return a},b7:function(){this._w.ay()},g:function(a){var b=$.ig.truncate(this._w.bs().height());if(b<=0){b=500}var c=a?-b:0;var d=a?0:-b;if(this.q==2){c=0;d=0}var e=function(){var $ret=new $$t.m;$ret._a=c;$ret._b=d;return $ret}();return e},h:function(a){var b=$.ig.truncate(this._w.bs().height());if(b<=0){b=500}var c=a?0:b;var d=a?b:0;var e=this.c5.top();var f=this.c5.top();var g=this.c5.left();var h=g;switch(this.q){case 2:e=a?this.c5.bottom():this.c5.top();f=a?this.c5.top():this.c5.bottom();g=this.c5.left();h=g;break;case 1:e=this.c5.top();f=this.c5.top();g=this.c5.left();h=g;break;case 3:case 4:e=this.c5.top();f=e;g=this.c5.left();h=g;break}var i=function(){var $ret=new $$t.l;$ret._g=c;$ret._h=d;$ret._c=e;$ret._f=f;$ret._a=g;$ret._d=h;return $ret}();return i},ao:function(){if(this.k==null){return false}return this.k._b},b8:function(){this._w.a1();if(this.isShown()){if(this.bd()!=null){this.c5=this._w.bp(this.bd(),this.q,this.i)}else{this.c5=this._w.bq(this.c3,this.q,this.i)}}},ch:function(a,b,c){this.c3=a;this.q=b;this.i=c;this.a1=0;this._w.ba();this.c5=this._w.bq(a,b,c)},cg:function(a,b,c){this.bb=a;this.q=b;this.i=c;this.a1=0;this._w.ba();this.c5=this._w.bp(a,b,c)},cm:function(a,b,c){if(this.av){this.av=false;this.cf("IsShown",true,this.av)}this.ch(a,b,c);this.cn(true)},cl:function(a,b,c){if(this.av){this.av=false;this.cf("IsShown",true,this.av)}this.cg(a,b,c);this.cn(true)},cn:function(a){var $self=this;var b=this.av;this.av=a;this.isShowing(a);this.isClosing(!a);if(false==this.animationEnabled()){var c=this.h(a);var d=this.g(a);var e=this._w.au(c,d);c=e.p0;d=e.p1;return}if(this.ao()){this.k.i();return}this.b7();this.k=this.l(this.animationType(),this.av);this.k.h(function(f){$self.k.g();if(f){switch($self.animationType()){case 0:$self.b4($self.av);break;case 1:$self.b3($self.av);break}}$self.cf("IsShown",b,$self.av);if($self.av){if($self.onPopup!=null){$self.onPopup($self,new $$t.j)}}else{if($self.onClosed!=null){$self.onClosed($self,new $$t.k)}}$self.isShowing(false);$self.isClosing(false);var g=$self.h($self.av);var h=$self.g($self.av);var i=$self._w.au(g,h);g=i.p0;h=i.p1})},k:null,l:function(a,b){switch(a){case 0:return this.n(b);case 1:return this.m(b);default:return this.n(b)}},n:function(a){var b=this.z(a);var c=this.a(a);var d=new $$t.e;d._c.add(b);for(var f=0;f<c.length;f++){var e=c[f];d._c.add(e)}return d},b4:function(a){var b=this.h(a);var c=this.g(a);var e=this.k._c.getEnumerator();while(e.moveNext()){var d=e.current();for(var f=0;f<d.effect().f().length;f++){switch(d.effect().f()[f]){case 14:d.effect().g()[f].c(d.effect()._a4,function(){var $ret=new $$a.bs;$ret._k=c._b;return $ret}());break;case 10:d.effect().g()[f].c(d.effect()._a4,b._h);break;case 12:d.effect().g()[f].c(d.effect()._a4,b._f);break}}}},m:function(a){var b=this.h(a);this._w.av(a?b._h:b._g);var c=this.c();var d=this._w.c(c);var e=$.ig.DeviceUtils.prototype.g(30);var f=this._w.i();var g=b._f-e;var h=b._f;switch(this.q){case 2:g=a?b._f+e:b._c+e;h=a?b._f:b._c;f=this._w.i();break;case 1:g=b._f-e;h=b._f;f=this._w.i();break;case 3:g=b._d+e;h=b._d;f=this._w.h();break;case 4:g=b._d-e;h=b._d;f=this._w.h();break}d.m([new $.ig.AnimationKeyFrameProperty(f,a?g:h)]);d.m([new $.ig.AnimationKeyFrameProperty(f,a?h:g)]);var i=this._w.a(c);i.m([new $.ig.AnimationKeyFrameProperty(1,a?0:1)]);i.m([new $.ig.AnimationKeyFrameProperty(1,a?1:0)]);var j=this._w.b(c);j.m([new $.ig.AnimationKeyFrameProperty(10,a?b._h:b._g)]);j.m([new $.ig.AnimationKeyFrameProperty(10,a?b._h:b._g)]);var k=new $$t.e;k._c.add($.ig.KeyFrameAnimationFactory.prototype.f().c(d));k._c.add($.ig.KeyFrameAnimationFactory.prototype.f().c(i));k._c.add($.ig.KeyFrameAnimationFactory.prototype.f().c(j));return k},b3:function(a){var b=this.h(a);var c=this._w.i();var d=NaN;var e=a?1:0;var f=a?b._h:b._g;switch(this.q){case 2:c=this._w.i();d=a?b._f:b._c;break;case 1:c=this._w.i();d=b._f;break;case 3:c=this._w.h();d=b._d;break;case 4:c=this._w.h();d=b._d;break}var h=this.k._c.getEnumerator();while(h.moveNext()){var g=h.current();for(var i=0;i<g.effect().f().length;i++){if(g.effect().f()[i]==c){g.effect().g()[i].c(g.effect()._a4,d)}else if(g.effect().f()[i]==1){g.effect().g()[i].c(g.effect()._a4,e)}else if(g.effect().f()[i]==10){g.effect().g()[i].c(g.effect()._a4,f)}}}},contains:function(a){return this._w.j(a)},appendPopupContent:function(a){this._w.aw(a)},removePopupContent:function(a){this._w.bb(a)},close:function(){if(!this.av){return}this.cn(false)},destroy:function(){this.provideRenderer(null)},showRelativeToExclusionRect:function(a,b,c){this.cm(a,b,c)},cp:function(a,b,c){this.cl(a,b,c)},b9:function(a){this.c3=a;this.c5=this._w.bq(a,this.q,this.i)},notifySizeChanged:function(){},provideRenderer:function(a){this._w.a9(a)},exportVisualModel:function(){return this.d()},exportSerializedVisualModel:function(){var a=this.d();return a.f()},d:function(){var a=new $$t.n;a._e=this.actualElevation();a._d=this.isShown();a._c=$.ig.AppearanceHelper.prototype.a(this.actualUmbraShadowColor());a._b=$.ig.AppearanceHelper.prototype.a(this.actualPenumbraShadowColor());a._a=$.ig.AppearanceHelper.prototype.a(this.actualAmbientShadowColor());return a},t:function(){var a=this.pointerPosition();if(a==0){switch(this.r()){case 4:a=3;break;case 3:a=4;break;case 2:a=2;break;case 1:a=1;break}}return a},$type:new $.ig.Type("Popup",$.ig.$ot,[$$0.$b3.$type])},true);$c("Popup_OuterAnimationInfo:l","ValueType",{init:function(){$$0.$bf.init.call(this)},_g:0,_h:0,_c:0,_f:0,_a:0,_d:0,_b:0,_e:0,$type:new $.ig.Type("Popup_OuterAnimationInfo",$$0.$bf.$type)},true);$c("Popup_InnerAnimationInfo:m","ValueType",{init:function(){$$0.$bf.init.call(this)},_a:0,_b:0,$type:new $.ig.Type("Popup_InnerAnimationInfo",$$0.$bf.$type)},true);$c("PopupAnimation:e","Object",{d:0,a:false,_b:false,_c:null,init:function(){this.d=0;$.ig.$op.init.call(this);this._c=new $$4.x($.ig.IKeyFrameAnimation.prototype.$type,0)},f:function(){for(var a=0;a<this._c.count();a++){var b=this._c.__inner[a];for(var c=0;c<b.effect().h().length;c++){for(var d=0;d<b.effect().h()[c].b().length;d++){var e=b.effect().h()[c].b()[d]._a;for(var f=0;f<b.effect().f().length;f++){if(b.effect().f()[f]==e){b.effect().g()[f].c(b.effect()._a4,b.effect().h()[c].b()[d].d())}}}}}},h:function(a){var $self=this;this.a=false;this.d=0;this._b=true;for(var b=0;b<this._c.count();b++){this._c.__inner[b].play();this._c.__inner[b].finished().f(function(c){$self.d++;if($self.d==$self._c.count()&&a!=null){$self._b=false;a($self.a)}})}},e:function(){this.a=true;for(var a=0;a<this._c.count();a++){if(this._c.__inner[a].playState()==1){this._c.__inner[a].cancel()}}},i:function(){for(var a=0;a<this._c.count();a++){this._c.__inner[a].reverse()}},g:function(){for(var a=0;a<this._c.count();a++){this._c.__inner[a].commitStyles()}},$type:new $.ig.Type("PopupAnimation",$.ig.$ot)},true);$c("OnPopupEventArgs:j","EventArgs",{init:function(){$$0.$x.init.call(this)},$type:new $.ig.Type("OnPopupEventArgs",$$0.$x.$type)},true);$c("OnClosedEventArgs:k","EventArgs",{init:function(){$$0.$x.init.call(this)},$type:new $.ig.Type("OnClosedEventArgs",$$0.$x.$type)},true);$$t.$b.a9=2;$$t.$b.c1=$.ig.BrushUtil.prototype.h(66,0,0,0);$$t.$b.c0=$.ig.BrushUtil.prototype.h(30,0,0,0);$$t.$b.cz=$.ig.BrushUtil.prototype.h(20,0,0,0)});