(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"55j5":function(t,n,e){"use strict";e.r(n),e.d(n,"ChannelsModule",(function(){return xt}));var i=e("ofXK"),c=e("tyNb"),s=e("9xOu"),a=e("3Pt+"),o=e("fXoL"),r=e("FFj9"),l=e("bhfF");function b(t,n){if(1&t&&o.Sb(0,"img",13),2&t){const t=o.nc(2).$implicit,n=o.nc(3);o.tc("src",n.apiUrl+"uploads/thumbnails/"+t.thumbnail,o.Jc)}}function g(t,n){1&t&&o.Sb(0,"img",13),2&t&&o.tc("src","assets/img/video-thumbnail-default.png",o.Jc)}function h(t,n){1&t&&(o.Xb(0,"span",14),o.Qc(1,"Live now"),o.Wb())}function p(t,n){if(1&t&&o.Sb(0,"img",15),2&t){const t=o.nc(4).$implicit,n=o.nc();o.tc("src",n.apiUrl+"uploads/avatars/"+t.avatar,o.Jc)}}function d(t,n){1&t&&o.Sb(0,"img",15),2&t&&o.tc("src","assets/img/default-user.png",o.Jc)}function u(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",5),o.jc("click",(function(){o.Hc(t);const n=o.nc().$implicit,e=o.nc(2).$implicit;return o.nc().openVideoPage(n,e.username)})),o.Oc(1,b,1,1,"img",6),o.Oc(2,g,1,1,"img",6),o.Oc(3,h,2,0,"span",7),o.Xb(4,"div",8),o.Oc(5,p,1,1,"img",9),o.Oc(6,d,1,1,"img",9),o.Xb(7,"div"),o.Xb(8,"p",10),o.Qc(9),o.Wb(),o.Xb(10,"p",11),o.Qc(11),o.Wb(),o.Xb(12,"p",12),o.Qc(13,"17k watching"),o.Wb(),o.Wb(),o.Wb(),o.Wb()}if(2&t){const t=o.nc().$implicit,n=o.nc(2).$implicit;o.Cb(1),o.tc("ngIf",t.thumbnail),o.Cb(1),o.tc("ngIf",!t.thumbnail),o.Cb(1),o.tc("ngIf","live"===t.status),o.Cb(2),o.tc("ngIf",n.avatar),o.Cb(1),o.tc("ngIf",!n.avatar),o.Cb(3),o.Rc(t.name),o.Cb(2),o.Rc(n.full_name)}}function f(t,n){1&t&&(o.Vb(0),o.Oc(1,u,14,7,"ng-template",4),o.Ub())}function m(t,n){if(1&t&&(o.Vb(0),o.Xb(1,"p",2),o.Qc(2),o.Wb(),o.Xb(3,"owl-carousel-o",3),o.Oc(4,f,2,0,"ng-container",0),o.Wb(),o.Ub()),2&t){const t=o.nc().$implicit,n=o.nc();o.Cb(2),o.Rc(t.full_name),o.Cb(1),o.tc("options",n.owlOptions),o.Cb(1),o.tc("ngForOf",t.videos)}}function C(t,n){if(1&t&&(o.Vb(0),o.Oc(1,m,5,3,"ng-container",1),o.Ub()),2&t){const t=n.$implicit;o.Cb(1),o.tc("ngIf",t.videos.length>0)}}let O=(()=>{class t{constructor(t,n){this.videoService=t,this.router=n,this.watchlistVideos=[],this.owlOptions=s.d,this.apiUrl=s.b}ngOnInit(){this.watchlistVideos=[],this.search=localStorage.getItem("search"),this.search?this.getSearchResults(this.search):this.getAllVideosByAuthors()}getAllVideosByAuthors(){this.videoService.getVideosByAuthor({}).subscribe(t=>{this.watchlistVideos=t})}openVideoPage(t,n){let e,i;"live"===t.status?(e="user/video/watch",i={session:t.session_name,publisher:n}):(e="videos/play",i={id:t.id}),this.router.navigate([e],{queryParams:i})}getSearchResults(t){this.search=t,this.videoService.searchInVideosByAuthor({search:t}).subscribe(t=>{this.watchlistVideos=t})}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(r.a),o.Rb(c.d))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-watchlist-tab"]],decls:1,vars:1,consts:[[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"trending-text"],[3,"options"],["carouselSlide",""],[1,"item","main-carousel-item",3,"click"],["class","main-item-img",3,"src",4,"ngIf"],["class","live-now",4,"ngIf"],[1,"main-item-block"],["class","avatar",3,"src",4,"ngIf"],[1,"main-text-1"],[1,"main-text-2"],[1,"main-text-3"],[1,"main-item-img",3,"src"],[1,"live-now"],[1,"avatar",3,"src"]],template:function(t,n){1&t&&o.Oc(0,C,2,1,"ng-container",0),2&t&&o.tc("ngForOf",n.watchlistVideos)},directives:[i.l,i.m,l.a,l.c],styles:[""]}),t})();var v=e("NFeN");function P(t,n){if(1&t){const t=o.Yb();o.Xb(0,"img",15),o.jc("click",(function(){o.Hc(t);const n=o.nc(2).$implicit,e=o.nc();return e.openVideoPage(n,e.channelUser.username)})),o.Wb()}}function M(t,n){if(1&t){const t=o.Yb();o.Xb(0,"img",16),o.jc("click",(function(){o.Hc(t);const n=o.nc(2).$implicit,e=o.nc();return e.openVideoPage(n,e.channelUser.username)})),o.Wb()}if(2&t){const t=o.nc(2).$implicit,n=o.nc();o.uc("src",n.apiUrl+"uploads/thumbnails/"+t.thumbnail,o.Jc)}}function _(t,n){if(1&t&&o.Sb(0,"img",17),2&t){const t=o.nc(3);o.tc("src",t.apiUrl+"uploads/avatars/"+t.channelUser.avatar,o.Jc)}}function y(t,n){1&t&&o.Sb(0,"img",17),2&t&&o.tc("src","assets/img/default-user.png",o.Jc)}function U(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",4),o.Oc(1,P,1,0,"img",5),o.Oc(2,M,1,1,"img",6),o.Sb(3,"div",7),o.Xb(4,"div",8),o.Oc(5,_,1,1,"img",9),o.Oc(6,y,1,1,"img",9),o.Xb(7,"div"),o.Xb(8,"p",10),o.Qc(9),o.Wb(),o.Xb(10,"p",11),o.Qc(11),o.Wb(),o.Xb(12,"p",12),o.Qc(13,"17k watching"),o.Wb(),o.Wb(),o.Xb(14,"div",13),o.Xb(15,"mat-icon",14),o.jc("click",(function(){o.Hc(t);const n=o.nc().$implicit;return o.nc().removeVideo(n)})),o.Qc(16,"delete"),o.Wb(),o.Wb(),o.Wb(),o.Wb()}if(2&t){const t=o.nc().$implicit,n=o.nc();o.Cb(1),o.tc("ngIf",!t.thumbnail||"undefined"===t.thumbnail),o.Cb(1),o.tc("ngIf",t.thumbnail&&"undefined"!==t.thumbnail),o.Cb(3),o.tc("ngIf",n.channelUser.avatar),o.Cb(1),o.tc("ngIf",!n.channelUser.avatar),o.Cb(3),o.Rc(t.name),o.Cb(2),o.Rc(n.channelUser.full_name)}}function W(t,n){1&t&&(o.Vb(0),o.Oc(1,U,17,6,"ng-template",3),o.Ub())}let X=(()=>{class t{constructor(t,n){this.router=t,this.videoService=n,this.owlOptions=s.d,this.apiUrl=s.b}ngOnInit(){}openVideoPage(t,n){let e,i;console.log(n),"live"===t.status?(e="user/video/watch",i={session:t.session_name,publisher:n}):(e="videos/play",i={id:t.id}),this.router.navigate([e],{queryParams:i})}getSearchResults(t){this.channelUser.videos=t}removeVideo(t){console.log(t),this.videoService.removeVideo({id:t.id,filename:t.filename,username:this.authUser.username}).subscribe(t=>{this.channelUser.videos=t.videos})}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(c.d),o.Rb(r.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-videos-tab"]],inputs:{channelUser:"channelUser",authUser:"authUser"},decls:4,vars:2,consts:[[1,"trending-text"],[3,"options"],[4,"ngFor","ngForOf"],["carouselSlide",""],[1,"item","main-carousel-item"],["class","main-item-img","src","assets/img/video-thumbnail-default.png",3,"click",4,"ngIf"],["class","main-item-img",3,"src","click",4,"ngIf"],[1,"overlay"],[1,"main-item-block"],["class","avatar",3,"src",4,"ngIf"],[1,"main-text-1"],[1,"main-text-2"],[1,"main-text-3"],[1,"removeVideo"],[3,"click"],["src","assets/img/video-thumbnail-default.png",1,"main-item-img",3,"click"],[1,"main-item-img",3,"src","click"],[1,"avatar",3,"src"]],template:function(t,n){1&t&&(o.Xb(0,"p",0),o.Qc(1,"Recent videos"),o.Wb(),o.Xb(2,"owl-carousel-o",1),o.Oc(3,W,2,0,"ng-container",2),o.Wb()),2&t&&(o.Cb(2),o.tc("options",n.owlOptions),o.Cb(1),o.tc("ngForOf",n.channelUser.videos))},directives:[l.a,i.l,l.c,i.m,v.a],styles:[".removeVideo[_ngcontent-%COMP%]{position:absolute;top:16px;left:16px;color:#fff;transition:.3s;cursor:pointer}.removeVideo[_ngcontent-%COMP%]:hover{color:#f53c6f}.overlay[_ngcontent-%COMP%]{background:#000;position:absolute;top:0;left:0;width:calc(100% - 32px);height:182px;opacity:.38}"]}),t})();var w=e("0IaG"),x=e("CPAS");let I=(()=>{class t{constructor(t,n,e,i){this.data=t,this.modal=n,this.fb=e,this.playlistService=i,console.log(t),this.addPlaylistForm=this.fb.group({channel_id:t.channel_id,name:["",a.w.required],description:["",a.w.required],privacy:["",a.w.required]})}ngOnInit(){}createPlaylist(){console.log(this.addPlaylistForm.value),this.playlistService.addPlaylist(this.addPlaylistForm.value).subscribe(t=>{this.modal.close()})}cancel(){this.modal.close()}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(w.a),o.Rb(w.d),o.Rb(a.e),o.Rb(x.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-add-playlist-dialog"]],decls:17,vars:4,consts:[[1,"add-playlist-modal"],[3,"formGroup"],["type","text","placeholder","Playlist Title","formControlName","name"],["id","playlist-description","cols","30","rows","10","formControlName","description","placeholder","Playlist Description"],[1,"select"],["id","visibility","formControlName","privacy"],[3,"value"],[1,"btn-wrap"],[1,"btn","cancel",3,"click"],[1,"btn","create",3,"click"]],template:function(t,n){1&t&&(o.Xb(0,"div",0),o.Xb(1,"form",1),o.Sb(2,"input",2),o.Sb(3,"textarea",3),o.Xb(4,"div",4),o.Xb(5,"select",5),o.Xb(6,"option",6),o.Qc(7,"Visibility"),o.Wb(),o.Xb(8,"option",6),o.Qc(9,"Public"),o.Wb(),o.Xb(10,"option",6),o.Qc(11,"Private"),o.Wb(),o.Wb(),o.Wb(),o.Xb(12,"div",7),o.Xb(13,"button",8),o.jc("click",(function(){return n.cancel()})),o.Qc(14,"Cancel"),o.Wb(),o.Xb(15,"button",9),o.jc("click",(function(){return n.createPlaylist()})),o.Qc(16,"Create"),o.Wb(),o.Wb(),o.Wb(),o.Wb()),2&t&&(o.Cb(1),o.tc("formGroup",n.addPlaylistForm),o.Cb(5),o.tc("value",""),o.Cb(2),o.tc("value",0),o.Cb(2),o.tc("value",1))},directives:[a.y,a.p,a.i,a.c,a.o,a.h,a.v,a.s,a.x],styles:[".add-playlist-modal[_ngcontent-%COMP%]{overflow:auto;max-height:100%;padding:32px;width:100%;max-width:890px;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);position:absolute;background:#fff;z-index:1001}.add-playlist-modal[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .add-playlist-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .add-playlist-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;padding:12px 24px;background:#f4f4f4;color:#545454;margin-bottom:32px;border:0;outline:none}.add-playlist-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:162px;min-height:96px;max-height:280px;resize:none}.add-playlist-modal[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:auto;min-width:284px}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:24px;background:#18b587;color:#fff;font-size:16px;border-radius:0;padding:8px 24px;line-height:normal}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.cancel[_ngcontent-%COMP%]{background:#c9c9c9}"]}),t})();function S(t,n){if(1&t&&o.Sb(0,"img",10),2&t){const t=o.nc().$implicit,n=o.nc(3);o.tc("src",n.apiUrl+"uploads/thumbnails/"+t.thumbnail,o.Jc)}}function k(t,n){1&t&&o.Sb(0,"img",10),2&t&&o.tc("src","assets/img/video-thumbnail-default.png",o.Jc)}function R(t,n){1&t&&(o.Vb(0),o.Xb(1,"mat-icon"),o.Qc(2,"visibility_off"),o.Wb(),o.Xb(3,"span"),o.Qc(4,"Private"),o.Wb(),o.Ub())}function Q(t,n){1&t&&(o.Vb(0),o.Xb(1,"mat-icon"),o.Qc(2,"visibility_on"),o.Wb(),o.Xb(3,"span"),o.Qc(4,"Public"),o.Wb(),o.Ub())}function V(t,n){if(1&t){const t=o.Yb();o.Xb(0,"tr"),o.Xb(1,"td"),o.Xb(2,"div",5),o.Oc(3,S,1,1,"img",6),o.Oc(4,k,1,1,"img",6),o.Xb(5,"div",7),o.Xb(6,"h3"),o.Qc(7),o.Wb(),o.Xb(8,"p"),o.Qc(9),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Xb(10,"td"),o.Oc(11,R,5,0,"ng-container",1),o.Oc(12,Q,5,0,"ng-container",1),o.Wb(),o.Xb(13,"td"),o.Xb(14,"span"),o.Qc(15),o.oc(16,"date"),o.Wb(),o.Wb(),o.Xb(17,"td"),o.Xb(18,"span"),o.Qc(19),o.Wb(),o.Wb(),o.Xb(20,"td"),o.Xb(21,"span",8),o.jc("click",(function(){o.Hc(t);const e=n.$implicit;return o.nc(3).goToEditPage(e)})),o.Qc(22,"create"),o.Wb(),o.Xb(23,"mat-icon",9),o.jc("click",(function(){o.Hc(t);const e=n.$implicit,i=o.nc(3);return i.removePlaylist(e.id,i.channelUser.id)})),o.Qc(24,"delete"),o.Wb(),o.Wb(),o.Wb()}if(2&t){const t=n.$implicit;o.Cb(3),o.tc("ngIf",t.thumbnail),o.Cb(1),o.tc("ngIf",!t.thumbnail),o.Cb(3),o.Rc(t.name),o.Cb(2),o.Rc(t.description),o.Cb(2),o.tc("ngIf",t.privacy),o.Cb(1),o.tc("ngIf",!t.privacy),o.Cb(3),o.Rc(o.qc(16,8,t.updated_at,"d MMM, yyyy")),o.Cb(4),o.Rc(t.videos.length)}}function T(t,n){if(1&t&&(o.Xb(0,"table"),o.Xb(1,"tr"),o.Xb(2,"th"),o.Qc(3,"Playlist"),o.Wb(),o.Xb(4,"th"),o.Qc(5,"Visibility"),o.Wb(),o.Xb(6,"th"),o.Qc(7,"Last updated"),o.Wb(),o.Xb(8,"th"),o.Qc(9,"Video count"),o.Wb(),o.Sb(10,"th"),o.Wb(),o.Oc(11,V,25,11,"tr",4),o.Wb()),2&t){const t=o.nc(2);o.Cb(11),o.tc("ngForOf",t.playlists)}}function F(t,n){if(1&t){const t=o.Yb();o.Vb(0),o.Xb(1,"button",3),o.jc("click",(function(){return o.Hc(t),o.nc().openAddPlaylistModal()})),o.Qc(2,"Add New Playlist"),o.Wb(),o.Oc(3,T,12,1,"table",1),o.Ub()}if(2&t){const t=o.nc();o.Cb(3),o.tc("ngIf",t.playlists.length>0)}}function j(t,n){if(1&t&&o.Sb(0,"img",10),2&t){const t=o.nc().$implicit,n=o.nc(2);o.tc("src",n.apiUrl+"uploads/thumbnails/"+t.thumbnail,o.Jc)}}function $(t,n){1&t&&o.Sb(0,"img",10),2&t&&o.tc("src","assets/img/video-thumbnail-default.png",o.Jc)}function A(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",14),o.Xb(1,"div",15),o.jc("click",(function(){o.Hc(t);const e=n.$implicit;return o.nc(2).openPlaylistPage(e,null==e.videos[0]?null:e.videos[0].id)})),o.Oc(2,j,1,1,"img",6),o.Oc(3,$,1,1,"img",6),o.Xb(4,"div",16),o.Xb(5,"p",17),o.Xb(6,"span",18),o.Qc(7,"playlist_play"),o.Wb(),o.Wb(),o.Xb(8,"p"),o.Qc(9),o.Wb(),o.Xb(10,"p",19),o.Qc(11),o.Wb(),o.Wb(),o.Wb(),o.Xb(12,"div",7),o.Xb(13,"h2"),o.Qc(14),o.Wb(),o.Xb(15,"p"),o.Qc(16),o.Wb(),o.Wb(),o.Wb()}if(2&t){const t=n.$implicit;o.Cb(2),o.tc("ngIf",t.thumbnail),o.Cb(1),o.tc("ngIf",!t.thumbnail),o.Cb(6),o.Rc(t.name),o.Cb(2),o.Rc(t.videos.length+(1===t.videos.length?" video":" videos")),o.Cb(3),o.Rc(t.name),o.Cb(2),o.Rc(t.description)}}function H(t,n){if(1&t&&(o.Vb(0),o.Xb(1,"p",11),o.Qc(2,"Created playlists"),o.Wb(),o.Xb(3,"div",12),o.Oc(4,A,17,6,"div",13),o.Wb(),o.Ub()),2&t){const t=o.nc();o.Cb(4),o.tc("ngForOf",t.playlists)}}function J(t,n){1&t&&(o.Xb(0,"span"),o.Qc(1,"No playlists found for this channel"),o.Wb())}let Y=(()=>{class t{constructor(t,n,e){this.router=t,this.playlistsService=n,this.dialog=e,this.playlists=[],this.apiUrl=s.b}ngOnInit(){const t=localStorage.getItem("search");t?this.getSearchResults(t):this.getPlaylists()}getPlaylists(){this.playlistsService.get({channel_id:this.channelUser.channel.id}).subscribe(t=>{this.playlists=t})}openAddPlaylistModal(){this.dialog.open(I,{data:{channel_id:this.channelUser.channel.id}}).afterClosed().subscribe(t=>{this.getPlaylists()})}openPlaylistPage(t,n){this.router.navigate(["videos/play"],{queryParams:{id:n,playlist_id:t.id}})}getSearchResults(t){console.log(t),this.playlistsService.searchPlaylists({search:t}).subscribe(t=>{this.playlists=t})}goToEditPage(t){this.router.navigate(["playlists/single/"+t.id])}removePlaylist(t,n){this.playlistsService.removePlaylist({id:t,channel_id:n}).subscribe(t=>{this.playlists=t})}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(c.d),o.Rb(x.a),o.Rb(w.b))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-playlists-tab"]],inputs:{channelUser:"channelUser",authUser:"authUser"},decls:5,vars:3,consts:[[1,"playlist-tab"],[4,"ngIf"],["id","no-playlists-found"],[1,"btn","new-playlist",3,"click"],[4,"ngFor","ngForOf"],[1,"img-info"],[3,"src",4,"ngIf"],[1,"info"],[1,"material-icons",3,"click"],[3,"click"],[3,"src"],[1,"trending-text"],[1,"playlists-items"],["class","item",4,"ngFor","ngForOf"],[1,"item"],[1,"top-wrap",3,"click"],[1,"overlay-info"],[1,"icon"],[1,"material-icons"],[1,"video-count"]],template:function(t,n){1&t&&(o.Xb(0,"div",0),o.Oc(1,F,4,1,"ng-container",1),o.Oc(2,H,5,1,"ng-container",1),o.Xb(3,"div",2),o.Oc(4,J,2,0,"span",1),o.Wb(),o.Wb()),2&t&&(o.Cb(1),o.tc("ngIf",n.authUser.username===n.channelUser.username),o.Cb(1),o.tc("ngIf",n.authUser.username!==n.channelUser.username),o.Cb(2),o.tc("ngIf",0===n.playlists.length))},directives:[i.m,i.l,v.a],pipes:[i.e],styles:[".playlist-tab[_ngcontent-%COMP%]   .new-playlist[_ngcontent-%COMP%]{background:#18b587;border-radius:0;color:#fff;padding:8px 24px}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:table;margin:24px 0;width:100%}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table-row}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%]{border-bottom:0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{cursor:pointer}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle;color:#545454;font-family:Muli-Bold;font-size:16px;padding:12px 0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%]{margin:0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-right:12px;vertical-align:middle;cursor:pointer}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]{display:flex}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:144px}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-left:24px}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-family:Muli-Bold}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:240px;font-size:12px;font-weight:400}.playlists-items[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{flex:0 0 calc(33.3% - 21px);margin-right:32px;margin-bottom:32px;cursor:pointer}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:nth-child(3n+3){margin-right:0}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]{position:relative;height:216px}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   .overlay-info[_ngcontent-%COMP%]{padding:16px;position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.38)}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .top-wrap[_ngcontent-%COMP%]   .overlay-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:#fff;font-size:16px;font-weight:700;margin-bottom:8px}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:24px}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#545454;font-size:16px;font-weight:700}.playlists-items[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:0;color:#545454;font-size:15px;font-weight:500}"]}),t})();var L=e("Rnal"),z=e("tk/3");let D=(()=>{class t{constructor(t){this.httpClient=t}changeProfileImage(t){return this.httpClient.post(s.b+"users/change-profile-image",t)}changeCoverImage(t){return this.httpClient.post(s.b+"users/change-cover-image",t)}getUserInfo(t){return this.httpClient.get(s.b+"users/get-user-info",{params:t})}}return t.\u0275fac=function(n){return new(n||t)(o.fc(z.b))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var E=e("1m4N"),N=e("HHsJ"),q=e("wDcp"),B=e("hKYS"),G=e("kUS0");function K(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",12),o.Xb(1,"input",13),o.jc("change",(function(n){return o.Hc(t),o.nc().coverChangeEvent(n)})),o.Wb(),o.Xb(2,"ngx-photo-editor",14),o.jc("imageCropped",(function(n){return o.Hc(t),o.nc().coverCropped(n)})),o.Wb(),o.Wb()}if(2&t){const t=o.nc();o.tc("hidden",!0),o.Cb(2),o.tc("imageChanedEvent",t.coverChangedEvent)("autoCrop",!1)("viewMode",3)}}function Z(t,n){if(1&t&&o.Sb(0,"img",15),2&t){const t=o.nc();o.tc("src",t.apiUrl+"uploads/avatars/"+t.channelUser.avatar,o.Jc)}}function tt(t,n){1&t&&o.Sb(0,"img",16),2&t&&o.tc("src","assets/img/default-user.png",o.Jc)}function nt(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",12),o.Xb(1,"input",17),o.jc("change",(function(n){return o.Hc(t),o.nc().profileChangeEvent(n)})),o.Wb(),o.Xb(2,"ngx-photo-editor",18),o.jc("imageCropped",(function(n){return o.Hc(t),o.nc().profileCropped(n)})),o.Wb(),o.Wb()}if(2&t){const t=o.nc();o.tc("hidden",!0),o.Cb(2),o.tc("imageChanedEvent",t.profileChangedEvent)("aspectRatio",4/3)("viewMode",1)("resizeToWidth",500)}}function et(t,n){if(1&t){const t=o.Yb();o.Xb(0,"a",22),o.jc("click",(function(){o.Hc(t);const n=o.nc(2);return n.subscribeToChannel(n.channelUser.channel)})),o.Qc(1,"Subscribe"),o.Wb()}}function it(t,n){if(1&t){const t=o.Yb();o.Xb(0,"a",23),o.jc("click",(function(){o.Hc(t);const n=o.nc(2);return n.subscribeToChannel(n.channelUser.channel)})),o.Qc(1,"Subscribed"),o.Wb()}}function ct(t,n){if(1&t&&(o.Xb(0,"div",5),o.Sb(1,"i",19),o.Oc(2,et,2,0,"a",20),o.Oc(3,it,2,0,"a",21),o.Wb()),2&t){const t=o.nc();o.Cb(2),o.tc("ngIf",!t.subscribedToChannel),o.Cb(1),o.tc("ngIf",t.subscribedToChannel)}}let st=(()=>{class t{constructor(t,n,e,i,c){this.usersService=t,this.base64ToFile=n,this.getAuthUser=e,this.channelService=i,this.subject=c,this.apiUrl=s.b,this.subscribedToChannel=!1,this.subscribersCount=0}ngOnInit(){this.checkChannelSubscription()}coverChangeEvent(t){this.coverChangedEvent=t}profileChangeEvent(t){this.profileChangedEvent=t}profileCropped(t){this.profileBase64=t.base64;const n=`profile_${Date.now()}.jpg`,e=new FormData;e.append("avatar_file",this.base64ToFile.transform(t.base64),n),e.append("avatar",n),e.append("id",this.authUser.id),this.usersService.changeProfileImage(e).subscribe(t=>{this.changeAuthUserInfo(t)})}coverCropped(t){this.coverBase64=t.base64;const n=new FormData,e=`cover_${Date.now()}.jpg`;n.append("cover_file",this.base64ToFile.transform(t.base64),e),n.append("cover",e),n.append("id",this.authUser.id),this.usersService.changeCoverImage(n).subscribe(t=>{this.changeAuthUserInfo(t)})}subscribeToChannel(t){console.log(t),this.channelService.subscribeToChannel({user_id:this.authUser.id,channel_id:t.id}).subscribe(t=>{this.subscribedToChannel="Subscribed"===t.status,this.subscribersCount=t.subscribers_count,this.channelService.getUserChannelSubscriptions({user_id:this.authUser.id}).subscribe(t=>{this.subject.setUserSubscriptions(t)})})}checkChannelSubscription(){this.channelService.checkChannelSubscription({user_id:this.authUser.id,channel_id:this.channelUser.channel.id}).subscribe(t=>{this.subscribedToChannel="Subscribed"===t.status,this.subscribersCount=t.subscribers_count})}changeAuthUserInfo(t){localStorage.setItem("token",t.token),this.authUser=this.getAuthUser.transform(),this.channelUser=this.authUser}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(D),o.Rb(E.a),o.Rb(L.a),o.Rb(N.a),o.Rb(q.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-channel-profile"]],inputs:{channelUser:"channelUser",authUser:"authUser"},decls:16,vars:8,consts:[[1,"profile-block"],[3,"hidden",4,"ngIf"],["for","cover-image-input"],["id","cover-image",3,"src"],[1,"sub-block"],[1,"d-flex","align-items-center"],["for","profile-image-input"],["class","avatar list-img",3,"src",4,"ngIf"],["class","avatar","id","profile-image",3,"src",4,"ngIf"],[1,"main-text-1"],[1,"main-text-4"],["class","d-flex align-items-center",4,"ngIf"],[3,"hidden"],["type","file","id","cover-image-input",3,"change"],[3,"imageChanedEvent","autoCrop","viewMode","imageCropped"],[1,"avatar","list-img",3,"src"],["id","profile-image",1,"avatar",3,"src"],["type","file","id","profile-image-input",3,"change"],[3,"imageChanedEvent","aspectRatio","viewMode","resizeToWidth","imageCropped"],[1,"sub-bell","fas","fa-bell"],["class","subscribe-btn",3,"click",4,"ngIf"],["class","subscribe-btn subscribed",3,"click",4,"ngIf"],[1,"subscribe-btn",3,"click"],[1,"subscribe-btn","subscribed",3,"click"]],template:function(t,n){1&t&&(o.Xb(0,"div",0),o.Oc(1,K,3,4,"div",1),o.Xb(2,"label",2),o.Sb(3,"img",3),o.Wb(),o.Wb(),o.Xb(4,"div",4),o.Xb(5,"div",5),o.Xb(6,"label",6),o.Oc(7,Z,1,1,"img",7),o.Oc(8,tt,1,1,"img",8),o.Wb(),o.Oc(9,nt,3,5,"div",1),o.Xb(10,"div"),o.Xb(11,"p",9),o.Qc(12),o.Wb(),o.Xb(13,"p",10),o.Qc(14),o.Wb(),o.Wb(),o.Wb(),o.Oc(15,ct,4,2,"div",11),o.Wb()),2&t&&(o.Cb(1),o.tc("ngIf",n.channelUser.username===n.authUser.username),o.Cb(2),o.tc("src",n.channelUser.cover?n.apiUrl+"uploads/covers/"+n.channelUser.cover:"assets/img/default-thumbnail.png",o.Jc),o.Cb(4),o.tc("ngIf",n.channelUser.avatar),o.Cb(1),o.tc("ngIf",!n.channelUser.avatar),o.Cb(1),o.tc("ngIf",n.channelUser.username===n.authUser.username),o.Cb(3),o.Rc(n.channelUser.channel.name),o.Cb(2),o.Sc("",n.subscribersCount+" subscriber"+(1===n.subscribersCount?"":"s")," "),o.Cb(1),o.tc("ngIf",n.channelUser.username!==n.authUser.username))},directives:[i.m,G.a],styles:[""]}),t})();function at(t,n){if(1&t){const t=o.Yb();o.Xb(0,"button",8),o.jc("click",(function(){o.Hc(t);const n=o.nc();return n.editMode=!n.editMode})),o.Qc(1,"Edit"),o.Wb()}}function ot(t,n){if(1&t&&(o.Xb(0,"div",9),o.Xb(1,"p"),o.Qc(2),o.Wb(),o.Wb()),2&t){const t=o.nc();o.Cb(2),o.Rc(t.channelUser.channel.description)}}function rt(t,n){1&t&&o.Sb(0,"textarea",10)}function lt(t,n){if(1&t){const t=o.Yb();o.Xb(0,"button",11),o.jc("click",(function(){return o.Hc(t),o.nc().saveChannelDescription()})),o.Qc(1,"Save"),o.Wb()}}let bt=(()=>{class t{constructor(t,n){this.fb=t,this.channelService=n,this.descriptionUpdated=!1,this.editMode=!1}ngOnInit(){this.aboutForm=this.fb.group({description:["",a.w.required],id:["",a.w.required],username:["",a.w.required]}),this.aboutForm.patchValue(Object.assign({username:this.channelUser.username},this.channelUser.channel))}saveChannelDescription(){this.descriptionUpdated=!0,this.channelService.saveDescription(this.aboutForm.value).subscribe(t=>{this.channelUser=t,this.editMode=!1})}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(a.e),o.Rb(N.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-about-tab"]],inputs:{channelUser:"channelUser"},decls:13,vars:9,consts:[[1,"about-tab"],["id","channel-about-form",3,"formGroup"],[1,"info"],[1,"date"],["class","btn",3,"click",4,"ngIf"],["class","description",4,"ngIf"],["formControlName","description",4,"ngIf"],["class","save",3,"click",4,"ngIf"],[1,"btn",3,"click"],[1,"description"],["formControlName","description"],[1,"save",3,"click"]],template:function(t,n){1&t&&(o.Xb(0,"div",0),o.Xb(1,"form",1),o.Xb(2,"div",2),o.Xb(3,"h2"),o.Qc(4,"Description"),o.Wb(),o.Xb(5,"div",3),o.Xb(6,"span"),o.Qc(7),o.oc(8,"date"),o.Wb(),o.Oc(9,at,2,0,"button",4),o.Wb(),o.Wb(),o.Oc(10,ot,3,1,"div",5),o.Oc(11,rt,1,0,"textarea",6),o.Oc(12,lt,2,0,"button",7),o.Wb(),o.Wb()),2&t&&(o.Cb(1),o.tc("formGroup",n.aboutForm),o.Cb(6),o.Sc("Joined ",o.qc(8,6,n.channelUser.channel.created_at,"d MMM, yyyy"),""),o.Cb(2),o.tc("ngIf",!n.editMode),o.Cb(1),o.tc("ngIf",!n.editMode&&(null==n.channelUser?null:n.channelUser.channel.description)),o.Cb(1),o.tc("ngIf",!n.descriptionUpdated&&n.editMode),o.Cb(1),o.tc("ngIf",n.editMode))},directives:[a.y,a.p,a.i,i.m,a.c,a.o,a.h],pipes:[i.e],styles:[".about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;color:#18b587;font-family:Muli-Bold}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-top:16px;display:flex;align-items:center}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#545454;font-family:Muli-Bold}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:24px;background:#18b587;color:#fff;padding:4px 18px;border-radius:0}.about-tab[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-top:24px;padding:24px;background:#f4f4f4;color:#545454;font-size:16px}.about-tab[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;height:120px}.about-tab[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{margin-top:24px;background:#c9c9c9;color:#545454;padding:4px 18px;border-radius:0}.about-tab[_ngcontent-%COMP%]   .save.active[_ngcontent-%COMP%]{background:#18b587;color:#fff}"]}),t})();function gt(t,n){if(1&t){const t=o.Yb();o.Xb(0,"li",12),o.Xb(1,"a",13),o.jc("click",(function(){o.Hc(t);const e=n.$implicit;return o.nc(2).changeActiveTab(e)})),o.Qc(2),o.Wb(),o.Wb()}if(2&t){const t=n.$implicit,e=o.nc(2);o.Cb(1),o.Hb("active",t===e.activeTab),o.vc("id","",t.link,"-tab"),o.vc("href","#",t.link,"",o.Jc),o.Cb(1),o.Rc(t.name)}}function ht(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",14),o.Xb(1,"input",15),o.jc("keyup.enter",(function(){return o.Hc(t),o.nc(2).searchVideos()})),o.Wb(),o.Sb(2,"i",16),o.Wb()}}function pt(t,n){1&t&&o.Sb(0,"app-watchlist-tab")}function dt(t,n){if(1&t&&o.Sb(0,"app-videos-tab",3),2&t){const t=o.nc(2);o.tc("channelUser",t.channelUser)("authUser",t.authUser)}}function ut(t,n){if(1&t&&o.Sb(0,"app-playlists-tab",3),2&t){const t=o.nc(2);o.tc("channelUser",t.channelUser)("authUser",t.authUser)}}function ft(t,n){if(1&t&&o.Sb(0,"app-about-tab",17),2&t){const t=o.nc(2);o.tc("channelUser",t.channelUser)}}function mt(t,n){if(1&t&&(o.Vb(0),o.Sb(1,"app-channel-profile",3),o.Xb(2,"div",4),o.Xb(3,"div",5),o.Xb(4,"ul",6),o.Oc(5,gt,3,5,"li",7),o.Wb(),o.Xb(6,"form",8),o.Oc(7,ht,3,0,"div",9),o.Wb(),o.Wb(),o.Oc(8,pt,1,0,"app-watchlist-tab",1),o.Oc(9,dt,1,2,"app-videos-tab",10),o.Oc(10,ut,1,2,"app-playlists-tab",10),o.Oc(11,ft,1,1,"app-about-tab",11),o.Wb(),o.Ub()),2&t){const t=o.nc();o.Cb(1),o.tc("channelUser",t.channelUser)("authUser",t.authUser),o.Cb(4),o.tc("ngForOf",t.allTabs),o.Cb(1),o.tc("formGroup",t.searchVideosForm),o.Cb(1),o.tc("ngIf","About"!==t.activeTab.name),o.Cb(1),o.tc("ngIf","Watchlist"===t.activeTab.name),o.Cb(1),o.tc("ngIf","Videos"===t.activeTab.name),o.Cb(1),o.tc("ngIf","Playlists"===t.activeTab.name),o.Cb(1),o.tc("ngIf","About"===t.activeTab.name)}}function Ct(t,n){1&t&&(o.Xb(0,"div",18),o.Xb(1,"p"),o.Qc(2,"Channel with such name is not found"),o.Wb(),o.Wb())}let Ot=(()=>{class t{constructor(t,n,e,i,c,o,r,l,b,g,h){this.videoService=t,this.getAuthUser=n,this.router=e,this.usersService=i,this.base64ToFile=c,this.route=o,this.fb=r,this.channelService=l,this.playlistsService=b,this.subject=g,this.dialog=h,this.owlOptions=s.d,this.watchlistVideos=[],this.activeTab=s.g[0],this.allTabs=s.g,this.apiUrl=s.b,this.playlists=[],this.editMode=!1,this.authUser=this.getAuthUser.transform(),this.passedUsername=this.route.snapshot.queryParams.username,this.searchVideosForm=this.fb.group({search:["",a.w.required]})}ngOnInit(){localStorage.setItem("search",""),this.passedUsername&&this.usersService.getUserInfo({username:this.passedUsername}).subscribe(t=>{t&&(this.channelUser=t)})}changeActiveTab(t){this.activeTab=t,this.searchVideos()}searchVideos(){const t=this.searchVideosForm.value;localStorage.setItem("search",t.search),"Watchlist"===this.activeTab.name?this.searchInVideosByAuthor(t.search):"Videos"===this.activeTab.name?this.searchInUserVideos(t):"Playlists"===this.activeTab.name&&this.searchInPlaylists(t)}searchInVideosByAuthor(t){this.watchListTab&&this.watchListTab.getSearchResults(t)}searchInUserVideos(t){this.videoService.searchInUserVideos(Object.assign({user_id:this.channelUser.id},t)).subscribe(t=>{this.videosTab.getSearchResults(null==t?void 0:t.videos)})}searchInPlaylists(t){this.playlistsTab&&this.playlistsTab.getSearchResults(t.search)}ngOnDestroy(){}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(r.a),o.Rb(L.a),o.Rb(c.d),o.Rb(D),o.Rb(E.a),o.Rb(c.a),o.Rb(a.e),o.Rb(N.a),o.Rb(x.a),o.Rb(q.a),o.Rb(w.b))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-show-channel"]],viewQuery:function(t,n){var e;1&t&&(o.Vc(O,!0),o.Vc(X,!0),o.Vc(Y,!0)),2&t&&(o.Cc(e=o.kc())&&(n.watchListTab=e.first),o.Cc(e=o.kc())&&(n.videosTab=e.first),o.Cc(e=o.kc())&&(n.playlistsTab=e.first))},decls:4,vars:2,consts:[[1,"profile-list"],[4,"ngIf"],["class","channel-not-found",4,"ngIf"],[3,"channelUser","authUser"],[1,"watchlist","pWatchlist"],[1,"profile-list","user-profile-block"],["id","profileList","role","tablist",1,"nav","nav-tabs"],["class","nav-item",4,"ngFor","ngForOf"],[3,"formGroup"],["class","watchlist-search",4,"ngIf"],[3,"channelUser","authUser",4,"ngIf"],[3,"channelUser",4,"ngIf"],[1,"nav-item"],["data-toggle","tab","role","tab","aria-controls","pWatch","aria-selected","true",1,"nav-link",3,"id","href","click"],[1,"watchlist-search"],["placeholder","Search","formControlName","search",1,"watchlist-input",3,"keyup.enter"],[1,"fas","fa-search"],[3,"channelUser"],[1,"channel-not-found"]],template:function(t,n){1&t&&(o.Xb(0,"div",0),o.Sb(1,"app-categories"),o.Oc(2,mt,12,9,"ng-container",1),o.Oc(3,Ct,3,0,"div",2),o.Wb()),2&t&&(o.Cb(2),o.tc("ngIf",n.channelUser),o.Cb(1),o.tc("ngIf",!n.channelUser))},directives:[B.a,i.m,st,i.l,a.y,a.p,a.i,a.c,a.o,a.h,O,X,Y,bt],styles:[".profile-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%}.subscribed[_ngcontent-%COMP%]{background-color:#d6d6d6!important}"]}),t})();var vt=e("wd/R"),Pt=e("7dP1");function Mt(t,n){if(1&t&&o.Sb(0,"img",11),2&t){const t=o.nc().$implicit,n=o.nc(2);o.tc("src",n.apiUrl+"uploads/avatars/"+t.avatar,o.Jc)}}function _t(t,n){1&t&&o.Sb(0,"img",11),2&t&&o.tc("src","assets/img/default-user.png",o.Jc)}function yt(t,n){if(1&t&&(o.Xb(0,"li",2),o.Xb(1,"div",3),o.Oc(2,Mt,1,1,"img",4),o.Oc(3,_t,1,1,"img",4),o.Wb(),o.Xb(4,"div",5),o.Xb(5,"p",6),o.Qc(6),o.Wb(),o.Xb(7,"div",7),o.Xb(8,"span",8),o.Qc(9,"17k watching"),o.Wb(),o.Xb(10,"span",9),o.Qc(11,"."),o.Wb(),o.Xb(12,"span",10),o.Qc(13,"250 video"),o.Wb(),o.Wb(),o.Xb(14,"p"),o.Qc(15,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed sda,sasddswd"),o.Wb(),o.Wb(),o.Wb()),2&t){const t=n.$implicit;o.Cb(2),o.tc("ngIf",t.avatar),o.Cb(1),o.tc("ngIf",!t.avatar),o.Cb(3),o.Rc(t.name)}}function Ut(t,n){if(1&t&&(o.Xb(0,"ul"),o.Oc(1,yt,16,3,"li",1),o.Wb()),2&t){const t=o.nc();o.Cb(1),o.tc("ngForOf",t.userChannels.subscriptions)}}const Wt=[{path:"show",component:Ot},{path:"subscriptions",component:(()=>{class t{constructor(t,n,e){this.channelsService=t,this.getAuthUser=n,this.auth=e,this.apiUrl=s.b,this.authUser=this.getAuthUser.transform()}ngOnInit(){this.channelsService.getSubscriptions({user_id:this.authUser.id}).subscribe(t=>{this.userChannels=t})}getUploadDateTime(t){return vt(t).format("MMM DD, YYYY")}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(N.a),o.Rb(L.a),o.Rb(Pt.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-show-subscriptions"]],decls:1,vars:1,consts:[[4,"ngIf"],["class","channel-item",4,"ngFor","ngForOf"],[1,"channel-item"],[1,"thumbnail"],["class","avatar",3,"src",4,"ngIf"],[1,"info"],[1,"name"],[1,"shortened-details"],[1,"watchers-count"],[1,"dot"],[1,"videos-count"],[1,"avatar",3,"src"]],template:function(t,n){1&t&&o.Oc(0,Ut,2,1,"ul",0),2&t&&o.tc("ngIf",n.userChannels)},directives:[i.m,i.l],styles:[".channel-item[_ngcontent-%COMP%]{display:flex;width:936px;margin-bottom:32px}.channel-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:240px!important;height:240px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:4px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#545454;font-size:24px;font-family:Muli-Bold}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin-left:26px;margin-top:-3px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-family:Muli-Light}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%], .channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%]{font-size:14px;color:#818181}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%]{margin-left:26px}"]}),t})()}];let Xt=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(n){return new(n||t)},imports:[[c.e.forChild(Wt)],c.e]}),t})();var wt=e("PCNd");let xt=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(n){return new(n||t)},imports:[[i.c,Xt,wt.a,G.b]]}),t})()}}]);