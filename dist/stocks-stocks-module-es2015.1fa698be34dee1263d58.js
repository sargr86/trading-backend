(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{Zxoc:function(t,e,n){"use strict";n.r(e),n.d(e,"StocksModule",(function(){return Y}));var c=n("ofXK"),a=n("tyNb"),o=n("mrSG"),i=n("fXoL"),s=n("sAj1"),r=n("wDcp"),l=n("Xa2L"),d=n("WKnA"),b=n("+0xr");function u(t){return(t=`${t[0].toUpperCase()}${t.slice(1)}`.replace(/([A-Z])/g," $1").trim()).replace(/_/g," ")}var h=n("wd/R"),m=n("lwos"),g=n("JEAd"),p=n("Rnal"),f=n("zQsl"),k=n("kmnG");function C(t,e){if(1&t&&(i.Xb(0,"th",15),i.Qc(1),i.Wb()),2&t){const t=i.nc().$implicit,e=i.nc(2);i.Cb(1),i.Sc(" ",e.normalizeColName(t),"")}}function O(t,e){if(1&t&&(i.Xb(0,"span"),i.Qc(1),i.Wb()),2&t){const t=i.nc().$implicit,e=i.nc().$implicit;i.Cb(1),i.Rc(t[e])}}function S(t,e){1&t&&i.Sb(0,"mat-spinner",21),2&t&&i.uc("diameter",15)}function x(t,e){if(1&t){const t=i.Yb();i.Xb(0,"div",18),i.Xb(1,"button",19),i.jc("click",(function(){i.Gc(t);const e=i.nc().$implicit;return i.nc(3).updateUserStocks(e)})),i.Qc(2),i.Wb(),i.Oc(3,S,1,1,"mat-spinner",20),i.Wb()}if(2&t){const t=i.nc(4);i.Cb(1),i.uc("ngClass",t.addedToWatchlist?"red-bg":"green-bg"),i.Cb(1),i.Rc((t.addedToWatchlist?"Remove from":"Add to")+" watchlist"),i.Cb(1),i.uc("ngIf",t.processingStock)}}function w(t,e){if(1&t&&(i.Xb(0,"td",16),i.Oc(1,O,2,1,"span",3),i.Oc(2,x,4,3,"div",17),i.Wb()),2&t){const t=i.nc().$implicit;i.Cb(1),i.uc("ngIf","action"!==t),i.Cb(1),i.uc("ngIf","action"===t)}}function v(t,e){if(1&t&&(i.Vb(0),i.Vb(1,12),i.Oc(2,C,2,1,"th",13),i.Oc(3,w,3,2,"td",14),i.Ub(),i.Ub()),2&t){const t=e.$implicit;i.Cb(1),i.uc("matColumnDef",t)}}function P(t,e){1&t&&i.Sb(0,"tr",22)}function y(t,e){1&t&&i.Sb(0,"tr",23)}function M(t,e){if(1&t&&(i.Vb(0),i.Xb(1,"div",4),i.Sb(2,"ngx-charts-area-chart",5),i.Wb(),i.Xb(3,"div",6),i.Xb(4,"h1",7),i.Qc(5),i.Wb(),i.Xb(6,"table",8),i.Oc(7,v,4,1,"ng-container",9),i.Oc(8,P,1,0,"tr",10),i.Oc(9,y,1,0,"tr",11),i.Wb(),i.Wb(),i.Ub()),2&t){const t=i.nc();i.Cb(2),i.uc("scheme",t.colorScheme)("legend",!1)("showXAxisLabel",!1)("showYAxisLabel",!1)("trimXAxisTicks",!1)("maxXAxisTickLength",5)("autoScale",!0)("xAxis",!0)("yAxis",!0)("rotateXAxisTicks",!1)("xAxisTickFormatting",t.axisFormatting)("results",t.chartData),i.Cb(3),i.Rc(t.selectedStock.replace("^","")),i.Cb(1),i.uc("dataSource",t.tableData),i.Cb(1),i.uc("ngForOf",t.displayedColumns),i.Cb(1),i.uc("matHeaderRowDef",t.displayedColumns),i.Cb(1),i.uc("matRowDefColumns",t.displayedColumns)}}function _(t,e){1&t&&(i.Xb(0,"mat-error"),i.Qc(1,"No chart data found\n"),i.Wb())}let D=(()=>{class t{constructor(t,e,n,c,a){this.stocksService=t,this.loader=e,this.subject=n,this.updateStocks=c,this.getAuthUser=a,this.colorScheme={domain:["#18B587","#F53C6F"]},this.displayedColumns=["symbol","name","price","change","changesPercentage","marketCap","open","volume","action"],this.userStocks=[],this.addedToWatchlist=!1,this.subscriptions=[],this.stocksUpdatedHere=!1,this.processingStock=!1}ngOnInit(){this.getUserStocks(),this.getStockInfo(),this.authUser=this.getAuthUser.transform()}getUserStocks(){this.subject.currentUserStocks.subscribe(t=>{this.userStocks=t.stocks,this.addedToWatchlist=!!this.userStocks.find(t=>t.symbol===this.selectedStock)})}getStockInfo(){this.loader.dataLoading=!0,this.stocksService.getStockChartData({stock:this.selectedStock}).subscribe(t=>{this.chartData=t.chart,this.tableData=new b.o(t.table),this.loader.dataLoading=!1})}axisFormatting(t){const e=this.ticks.find((e,n)=>e===t&&h(e,"HH:mm:ss").minute()%30==0);return e?h(e,"HH:mm:ss").format("HH:mm A"):""}normalizeColName(t){return u(t)}isStockFollowed(t){return!!this.userStocks.find(e=>e.name===t.name)}updateUserStocks(t){this.processingStock=!0;const e=this.isStockFollowed(t),n=this.updateStocks.transform(this.userStocks,t,e);this.addedToWatchlist=!e,this.loader.show(),n&&this.subscriptions.push(this.stocksService.updateFollowedStocks({user_id:this.authUser.id,stocks:n}).subscribe(t=>{this.processingStock=!1,this.userStocks=(null==t?void 0:t.user_stocks)||[],this.stocksUpdatedHere=!0,this.loader.hide(),this.subject.changeUserStocks({stocks:this.userStocks,empty:0===this.userStocks.length})}))}}return t.\u0275fac=function(e){return new(e||t)(i.Rb(s.a),i.Rb(m.a),i.Rb(r.a),i.Rb(g.a),i.Rb(p.a))},t.\u0275cmp=i.Lb({type:t,selectors:[["app-summary-tab"]],inputs:{selectedStock:"selectedStock"},decls:5,vars:4,consts:[[1,"loader-holder"],[3,"diameter","hidden"],[1,"table-chart-container"],[4,"ngIf"],[1,"chart-container"],[3,"scheme","legend","showXAxisLabel","showYAxisLabel","trimXAxisTicks","maxXAxisTickLength","autoScale","xAxis","yAxis","rotateXAxisTicks","xAxisTickFormatting","results"],[1,"table-container"],[1,"selected-stock"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["class","action-column",4,"ngIf"],[1,"action-column"],["id","watchlist-act-btn",3,"ngClass","click"],[3,"diameter",4,"ngIf"],[3,"diameter"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(i.Xb(0,"div",0),i.Sb(1,"mat-spinner",1),i.Wb(),i.Xb(2,"div",2),i.Oc(3,M,10,17,"ng-container",3),i.Wb(),i.Oc(4,_,2,0,"mat-error",3)),2&t&&(i.Cb(1),i.uc("diameter",50)("hidden",!e.loader.dataLoading),i.Cb(2),i.uc("ngIf",e.chartData&&e.chartData[0].series.length>0),i.Cb(1),i.uc("ngIf",!(e.chartData&&0!==e.chartData[0].series.length||e.loader.dataLoading)))},directives:[l.c,c.u,f.a,b.n,c.t,b.k,b.m,b.c,b.i,b.b,b.h,b.a,c.r,b.j,b.l,k.b],styles:[".table-chart-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center}.table-chart-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.table-chart-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .action-column[_ngcontent-%COMP%]{display:flex;align-items:center}.table-chart-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .action-column[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]{margin-left:20px}.table-chart-container[_ngcontent-%COMP%]   .table-container[_ngcontent-%COMP%]   #watchlist-act-btn[_ngcontent-%COMP%]{padding:5px}.table-chart-container[_ngcontent-%COMP%]   .selected-stock[_ngcontent-%COMP%]{margin:20px 0}.table-chart-container[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]{width:100%;height:250px;margin-top:50px;display:grid;justify-content:center;align-items:center}.table-chart-container[_ngcontent-%COMP%]   .chart-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{display:inline-block}"]}),t})();var X=n("M9IT");function W(t,e){if(1&t&&(i.Xb(0,"th",10),i.Qc(1),i.Wb()),2&t){const t=i.nc().$implicit,e=i.nc(2);i.Cb(1),i.Sc(" ",e.normalizeColName(t),"")}}function A(t,e){if(1&t&&(i.Xb(0,"td",11),i.Qc(1),i.Wb()),2&t){const t=e.$implicit,n=i.nc().$implicit;i.Cb(1),i.Sc(" ",t[n]," ")}}function R(t,e){if(1&t&&(i.Vb(0),i.Vb(1,7),i.Oc(2,W,2,1,"th",8),i.Oc(3,A,2,1,"td",9),i.Ub(),i.Ub()),2&t){const t=e.$implicit;i.Cb(1),i.uc("matColumnDef",t)}}function I(t,e){1&t&&i.Sb(0,"tr",12)}function T(t,e){1&t&&i.Sb(0,"tr",13)}function L(t,e){if(1&t&&(i.Xb(0,"table",3),i.Oc(1,R,4,1,"ng-container",4),i.Oc(2,I,1,0,"tr",5),i.Oc(3,T,1,0,"tr",6),i.Wb()),2&t){const t=i.nc();i.uc("dataSource",t.tableData),i.Cb(1),i.uc("ngForOf",t.displayedColumns),i.Cb(1),i.uc("matHeaderRowDef",t.displayedColumns),i.Cb(1),i.uc("matRowDefColumns",t.displayedColumns)}}function U(t,e){1&t&&(i.Xb(0,"mat-error"),i.Qc(1,"No historical prices found"),i.Wb())}let j=(()=>{class t{constructor(t){this.stocksService=t,this.displayedColumns=["date","price","change","changePercent","open","volume"],this.paginationValues=[10,25,100]}ngOnInit(){this.stocksService.getStockHistoricalPrices({stock:this.selectedStock}).subscribe(t=>{this.tableData=new b.o(t.historical),this.tableData.paginator=this.paginator})}normalizeColName(t){return u(t)}}return t.\u0275fac=function(e){return new(e||t)(i.Rb(s.a))},t.\u0275cmp=i.Lb({type:t,selectors:[["app-historical-tab"]],viewQuery:function(t,e){var n;1&t&&i.Vc(X.a,!0),2&t&&i.Bc(n=i.kc())&&(e.paginator=n.first)},inputs:{selectedStock:"selectedStock"},decls:3,vars:4,consts:[["mat-table","","class","mat-elevation-z8",3,"dataSource",4,"ngIf"],[3,"pageSizeOptions","hidden"],[4,"ngIf"],["mat-table","",1,"mat-elevation-z8",3,"dataSource"],[4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"matColumnDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["mat-header-cell",""],["mat-cell",""],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(i.Oc(0,L,4,4,"table",0),i.Sb(1,"mat-paginator",1),i.Oc(2,U,2,0,"mat-error",2)),2&t&&(i.uc("ngIf",e.tableData&&e.tableData.data.length),i.Cb(1),i.uc("pageSizeOptions",e.paginationValues)("hidden",!(null!=e.tableData&&e.tableData.data.length)),i.Cb(1),i.uc("ngIf",!(null!=e.tableData&&e.tableData.data.length)))},directives:[c.u,X.a,b.n,c.t,b.k,b.m,b.c,b.i,b.b,b.h,b.a,b.j,b.l,k.b],styles:["table[_ngcontent-%COMP%]{width:100%}"]}),t})();function H(t,e){1&t&&i.Sb(0,"mat-spinner",8),2&t&&i.uc("diameter",25)}function F(t,e){if(1&t&&i.Sb(0,"app-stock-tiles",9),2&t){const t=i.nc();i.uc("stocks",t.indices)("dragDropDisabled",!0)("followingAllowed",!1)("stockProfileAllowed",!0)}}function Q(t,e){if(1&t){const t=i.Yb();i.Xb(0,"div",10),i.Xb(1,"ul",11),i.Xb(2,"li"),i.Xb(3,"a",12),i.jc("click",(function(){return i.Gc(t),i.nc().changeTab("summary")})),i.Qc(4," Summary"),i.Wb(),i.Wb(),i.Xb(5,"li"),i.Xb(6,"a",12),i.jc("click",(function(){return i.Gc(t),i.nc().changeTab("historical")})),i.Qc(7," Historical data"),i.Wb(),i.Wb(),i.Wb(),i.Xb(8,"div",13),i.Xb(9,"div",14),i.Sb(10,"app-summary-tab",15),i.Wb(),i.Xb(11,"div",16),i.Sb(12,"app-historical-tab",15),i.Wb(),i.Wb(),i.Wb()}if(2&t){const t=i.nc();i.Cb(2),i.Hb("active","summary"===t.activeTab),i.Cb(3),i.Hb("active","historical"===t.activeTab),i.Cb(5),i.uc("selectedStock",t.selectedStock)("hidden","summary"!==t.activeTab),i.Cb(2),i.uc("selectedStock",t.selectedStock)("hidden","historical"!==t.activeTab)}}function $(t,e){1&t&&(i.Xb(0,"mat-error"),i.Qc(1,"Please select a tile to view its information "),i.Wb())}let z=(()=>{class t{constructor(t,e,n,c){this.stocksService=t,this.router=e,this.route=n,this.subject=c,this.activeTab="summary",this.dataLoading="idle"}ngOnInit(){var t,e,n;this.dataLoading="loading",this.subject.currentIndices.subscribe(t=>{t.length>0&&(this.dataLoading="finished",this.indices=t)}),this.selectedStock=null===(n=null===(e=null===(t=this.route.snapshot)||void 0===t?void 0:t.params)||void 0===e?void 0:e.symbol)||void 0===n?void 0:n.toUpperCase()}changeTab(t){this.activeTab=t}openStockProfile(t){this.router.navigateByUrl("/test",{skipLocationChange:!0}).then(()=>Object(o.a)(this,void 0,void 0,(function*(){return yield this.router.navigate([`stocks/${t}/analytics`])})))}}return t.\u0275fac=function(e){return new(e||t)(i.Rb(s.a),i.Rb(a.d),i.Rb(a.a),i.Rb(r.a))},t.\u0275cmp=i.Lb({type:t,selectors:[["app-stock-profile"]],decls:10,vars:4,consts:[[1,"stock-content"],[1,"major-indexes"],[1,"stocks-list-container"],[1,"spinner-container"],[3,"diameter",4,"ngIf"],[3,"stocks","dragDropDisabled","followingAllowed","stockProfileAllowed",4,"ngIf"],["class","stock-tabs",4,"ngIf"],[4,"ngIf"],[3,"diameter"],[3,"stocks","dragDropDisabled","followingAllowed","stockProfileAllowed"],[1,"stock-tabs"],[1,"nav","nav-tabs"],["data-toggle","tab",3,"click"],[1,"tab-content"],["id","summary"],[3,"selectedStock","hidden"],["id","historical"]],template:function(t,e){1&t&&(i.Xb(0,"div",0),i.Xb(1,"div",1),i.Xb(2,"h2"),i.Qc(3,"Major indexes"),i.Wb(),i.Xb(4,"div",2),i.Xb(5,"div",3),i.Oc(6,H,1,1,"mat-spinner",4),i.Wb(),i.Oc(7,F,1,4,"app-stock-tiles",5),i.Wb(),i.Wb(),i.Oc(8,Q,13,8,"div",6),i.Oc(9,$,2,0,"mat-error",7),i.Wb()),2&t&&(i.Cb(6),i.uc("ngIf","loading"===e.dataLoading),i.Cb(1),i.uc("ngIf",(null==e.indices?null:e.indices.length)>0),i.Cb(1),i.uc("ngIf",e.selectedStock),i.Cb(1),i.uc("ngIf",!e.selectedStock&&"finished"===e.dataLoading))},directives:[c.u,l.c,d.a,D,j,k.b],styles:[".stock-select[_ngcontent-%COMP%]{width:316px;height:51px;background:#eee 0 0 no-repeat padding-box;box-shadow:0 0 6px hsla(0,0%,60.4%,.14);color:#545454;font-size:16px;padding:16px;font-family:Muli-Regular;outline:0;border:0;margin-right:32px}.my-stocks[_ngcontent-%COMP%]{background:#f53c6f;color:#fff!important}.my-stocks[_ngcontent-%COMP%], .prospective-stocks[_ngcontent-%COMP%]{width:200px;height:51px;box-shadow:0 0 6px hsla(0,0%,60.4%,.14);font-size:16px;font-family:Muli-Regular;display:flex;justify-content:center;align-items:center}.prospective-stocks[_ngcontent-%COMP%]{background:#f53c6f 0 0 no-repeat padding-box;background:#eee;color:#545454!important}.stock-block[_ngcontent-%COMP%]{display:flex;margin-bottom:32px}.stock-content[_ngcontent-%COMP%]{padding-left:50px}.stock-content-img[_ngcontent-%COMP%]{width:100%}.stock-btns[_ngcontent-%COMP%]{display:flex}.stock-item[_ngcontent-%COMP%]{cursor:pointer}.stock-tabs[_ngcontent-%COMP%]{margin-top:70px}.stock-tabs[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{height:35px;padding:5px}.stock-tabs[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#000;text-decoration:none}.stock-tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]{background:#f53c6f}.stock-tabs[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.small-chart-container[_ngcontent-%COMP%]{width:100%;height:150px}@media (max-width:991px){.stock-block[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.stock-select[_ngcontent-%COMP%]{margin-right:0;margin-bottom:20px}}@media (max-width:480px){.stock-select[_ngcontent-%COMP%]{width:80%}.stock-btns[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.prospective-stocks[_ngcontent-%COMP%]{margin-top:20px}}"]}),t})();const N=[{path:"analytics",component:z,data:{title:"Stock profile"}},{path:":symbol/analytics",component:z,data:{title:"Stock profile"}}];let V=(()=>{class t{}return t.\u0275mod=i.Pb({type:t}),t.\u0275inj=i.Ob({factory:function(e){return new(e||t)},imports:[[a.f.forChild(N)],a.f]}),t})();var G=n("PCNd");let Y=(()=>{class t{}return t.\u0275mod=i.Pb({type:t}),t.\u0275inj=i.Ob({factory:function(e){return new(e||t)},imports:[[c.c,V,f.c,G.a]]}),t})()}}]);
//# sourceMappingURL=stocks-stocks-module-es2015.1fa698be34dee1263d58.js.map