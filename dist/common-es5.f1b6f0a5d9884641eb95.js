function _objectDestructuringEmpty(t){if(null==t)throw new TypeError("Cannot destructure undefined")}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"86ia":function(t,e,n){"use strict";n.d(e,"a",(function(){return m}));var i=n("fXoL"),r=n("9xOu"),o=n("wgiU"),l=n("FFj9"),c=n("KaMB"),s=n("wDcp"),a=n("ofXK"),u=n("f0Cb"),p=n("bTqV"),f=n("NFeN");function g(t,e){if(1&t){var n=i.Xb();i.Wb(0,"button",8),i.ec("click",(function(){i.Bc(n);var t=i.ic().$implicit,e=i.ic().$implicit;return i.ic().removeFilter(t,e.group.value)})),i.Wb(1,"mat-icon"),i.Kc(2,"clear"),i.Vb(),i.Vb()}}function d(t,e){if(1&t){var n=i.Xb();i.Wb(0,"li",5),i.Wb(1,"span",6),i.ec("click",(function(){i.Bc(n);var t=e.$implicit,r=i.ic().$implicit;return i.ic().applyFilter(t,r.group.value)})),i.Kc(2),i.Vb(),i.Ic(3,g,3,0,"button",7),i.Vb()}if(2&t){var r=e.$implicit,o=i.ic().$implicit,l=i.ic();i.Gb("selected",l.selectedFilters&&r.name===(null==l.selectedFilters[o.group.value]?null:l.selectedFilters[o.group.value].name)),i.Cb(2),i.Lc(r.name),i.Cb(1),i.pc("ngIf",l.selectedFilters&&r.name===(null==l.selectedFilters[o.group.value]?null:l.selectedFilters[o.group.value].name))}}function h(t,e){if(1&t&&(i.Ub(0),i.Wb(1,"div",2),i.Wb(2,"p",3),i.Kc(3),i.Vb(),i.Rb(4,"mat-divider"),i.Wb(5,"ul"),i.Ic(6,d,4,4,"li",4),i.Vb(),i.Vb(),i.Tb()),2&t){var n=e.$implicit;i.Cb(3),i.Lc(n.group.name),i.Cb(3),i.pc("ngForOf",n.items)}}var m=function(){var t=function(){function t(e,n,l){_classCallCheck(this,t),this.videoService=e,this.ifObjectEmpty=n,this.subjectService=l,this.filters=r.z,this.selectedFilters={},this.subscriptions=[],this.trackByElement=o.a,this.filterAction=new i.o}return _createClass(t,[{key:"ngOnInit",value:function(){var t=this;this.subscriptions.push(this.subjectService.getToggleFiltersData().subscribe((function(e){t.selectedFilters={},t.filterAction.emit(t.selectedFilters)})))}},{key:"applyFilter",value:function(t,e){var n=t.name,i=t.value;this.selectedFilters[e]={name:n,value:i},this.filterAction.emit(this.selectedFilters)}},{key:"removeFilter",value:function(t,e){_objectDestructuringEmpty(t),delete this.selectedFilters[e],this.filterAction.emit(this.selectedFilters)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(i.Qb(l.a),i.Qb(c.a),i.Qb(s.a))},t.\u0275cmp=i.Kb({type:t,selectors:[["app-video-filters"]],outputs:{filterAction:"filter"},decls:2,vars:2,consts:[[1,"filter-groups"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"filter-group"],[1,"filter-name"],["class","filter-item",3,"selected",4,"ngFor","ngForOf"],[1,"filter-item"],[3,"click"],["mat-icon-button","","class","remove-filter",3,"click",4,"ngIf"],["mat-icon-button","",1,"remove-filter",3,"click"]],template:function(t,e){1&t&&(i.Wb(0,"div",0),i.Ic(1,h,7,2,"ng-container",1),i.Vb()),2&t&&(i.Cb(1),i.pc("ngForOf",e.filters)("ngForTrackBy",e.trackByElement))},directives:[a.l,u.a,a.m,p.a,f.a],styles:[".filter-groups[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;width:100%;margin-bottom:24px;padding:0 16px;box-shadow:0 0 6px rgba(0,0,0,.16);transition:all 1s ease}.filter-groups[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0}.filter-groups[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]{margin:16px 32px 16px 0}.filter-groups[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-name[_ngcontent-%COMP%]{margin:0;padding-bottom:10px;font-size:16px;font-weight:600;color:#545454}.filter-groups[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]{min-width:184px;display:flex;align-items:center;margin-top:10px;font-family:Muli-Light;transition:.2s;cursor:pointer;font-size:14px;font-weight:600}.filter-groups[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{color:#18b587}.filter-groups[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .remove-filter[_ngcontent-%COMP%]{width:21px;height:21px;margin-left:12px}.filter-groups[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .remove-filter.mat-icon-button[_ngcontent-%COMP%]{line-height:20px}.filter-groups[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .remove-filter[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]{width:100%;height:100%}.filter-groups[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{width:100%;display:block;transition:.2s}.filter-groups[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%]   .remove-filter[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:12px;font-weight:700}.filter-groups[_ngcontent-%COMP%]   .filter-group[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{color:#18b587!important}"]}),t}()},CPAS:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("9xOu"),r=n("fXoL"),o=n("tk/3"),l=function(){var t=function(){function t(e){_classCallCheck(this,t),this.httpClient=e}return _createClass(t,[{key:"addPlaylist",value:function(t){return this.httpClient.post(i.c+"playlists/add",t)}},{key:"addVideosToPlaylist",value:function(t){return this.httpClient.post(i.c+"playlists/add-videos",t)}},{key:"addVideoToOtherPlaylists",value:function(t){return this.httpClient.post(i.c+"playlists/add-video-to-other-playlists",t)}},{key:"get",value:function(t){return this.httpClient.get(i.c+"playlists/get",{params:t})}},{key:"getById",value:function(t){return this.httpClient.get(i.c+"playlists/get-by-id",{params:t})}},{key:"searchPlaylists",value:function(t){return this.httpClient.get(i.c+"playlists/search",{params:t})}},{key:"updatePrivacy",value:function(t){return this.httpClient.put(i.c+"playlists/update-privacy",t)}},{key:"updateVideoPosition",value:function(t){return this.httpClient.put(i.c+"playlists/update-video-position",t)}},{key:"updatePlaylistInfo",value:function(t){return this.httpClient.put(i.c+"playlists/update-playlist-info",t)}},{key:"changePlaylistThumbnail",value:function(t){return this.httpClient.put(i.c+"playlists/change-thumbnail",t)}},{key:"removeVideoFromPlaylist",value:function(t){return this.httpClient.delete(i.c+"playlists/remove-video",{params:t})}},{key:"removePlaylist",value:function(t){return this.httpClient.delete(i.c+"playlists/remove",{params:t})}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.ac(o.b))},t.\u0275prov=r.Mb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},Gc2z:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var i=n("mrSG"),r=n("fXoL"),o=n("eqEZ"),l=n("tyNb"),c=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.lowerCaseRemoveSpaces=e,this.router=n}return _createClass(t,[{key:"onClick",value:function(){return Object(i.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="/groups/"+this.name.replace(" /g","_")+"/people",t.next=3,this.router.navigate([this.lowerCaseRemoveSpaces.transform(e)]);case 3:case"end":return t.stop()}}),t,this)})))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Qb(o.a),r.Qb(l.d))},t.\u0275dir=r.Lb({type:t,selectors:[["","appNavigateToFixedGroupUrl",""]],hostBindings:function(t,e){1&t&&r.ec("click",(function(t){return e.onClick(t)}))},inputs:{name:"name"}}),t}()}}]);
//# sourceMappingURL=common-es5.f1b6f0a5d9884641eb95.js.map