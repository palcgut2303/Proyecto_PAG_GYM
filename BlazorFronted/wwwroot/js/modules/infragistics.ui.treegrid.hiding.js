/*!@license
 * Infragistics.Web.ClientUI Tree Grid 23.2.50
 *
 * Copyright (c) 2011-2024 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.9.1.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.dataSource.js
 *	infragistics.ui.shared.js
 *	infragistics.ui.treegrid.js
 *	infragistics.util.js
 *	infragistics.ui.grid.framework.js
 *	infragistics.ui.grid.hiding.js
 */
(function(factory){if(typeof define==="function"&&define.amd){define(["./infragistics.ui.treegrid","./infragistics.ui.grid.hiding"],factory)}else{return factory(jQuery)}})(function($){"use strict";$.widget("ui.igTreeGridHiding",$.ui.igGridHiding,{css:{},options:{inherit:false},_create:function(){this.element.data($.ui.igGridHiding.prototype.widgetName,this.element.data($.ui.igTreeGridHiding.prototype.widgetName));$.ui.igGridHiding.prototype._create.apply(this,arguments)},destroy:function(){this._superApply(arguments);this.element.removeData($.ui.igGridHiding.prototype.widgetName)},_injectGrid:function(){$.ui.igGridHiding.prototype._injectGrid.apply(this,arguments)}});$.extend($.ui.igTreeGridHiding,{version:"23.2.50"});return $});