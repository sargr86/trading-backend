(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"55j5":function(t,n,e){"use strict";e.r(n),e.d(n,"ChannelsModule",(function(){return ut}));var i=e("ofXK"),c=e("tyNb"),s=e("9xOu"),a=e("3Pt+"),o=e("fXoL"),r=e("0IaG"),b=e("tk/3");let l=(()=>{class t{constructor(t){this.httpClient=t}addPlaylist(t){return this.httpClient.post(s.b+"playlists/add",t)}get(){return this.httpClient.get(s.b+"playlists/get",{})}}return t.\u0275fac=function(n){return new(n||t)(o.fc(b.b))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),d=(()=>{class t{constructor(t,n,e){this.modal=t,this.fb=n,this.playlistService=e,this.addPlaylistForm=this.fb.group({name:["",a.t.required],description:["",a.t.required],privacy:["",a.t.required]})}ngOnInit(){}createPlaylist(){console.log(this.addPlaylistForm.value),this.playlistService.addPlaylist(this.addPlaylistForm.value).subscribe(t=>{this.modal.close()})}cancel(){this.modal.close()}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(r.d),o.Rb(a.c),o.Rb(l))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-add-playlist-dialog"]],decls:17,vars:4,consts:[[1,"add-playlist-modal"],[3,"formGroup"],["type","text","placeholder","Playlist Title","formControlName","name"],["id","playlist-description","cols","30","rows","10","formControlName","description","placeholder","Playlist Description"],[1,"select"],["id","visibility","formControlName","privacy"],[3,"value"],[1,"btn-wrap"],[1,"btn","cancel",3,"click"],[1,"btn","create",3,"click"]],template:function(t,n){1&t&&(o.Xb(0,"div",0),o.Xb(1,"form",1),o.Sb(2,"input",2),o.Sb(3,"textarea",3),o.Xb(4,"div",4),o.Xb(5,"select",5),o.Xb(6,"option",6),o.Qc(7,"Visibility"),o.Wb(),o.Xb(8,"option",6),o.Qc(9,"Public"),o.Wb(),o.Xb(10,"option",6),o.Qc(11,"Private"),o.Wb(),o.Wb(),o.Wb(),o.Xb(12,"div",7),o.Xb(13,"button",8),o.jc("click",(function(){return n.cancel()})),o.Qc(14,"Cancel"),o.Wb(),o.Xb(15,"button",9),o.jc("click",(function(){return n.createPlaylist()})),o.Qc(16,"Create"),o.Wb(),o.Wb(),o.Wb(),o.Wb()),2&t&&(o.Cb(1),o.tc("formGroup",n.addPlaylistForm),o.Cb(5),o.tc("value",""),o.Cb(2),o.tc("value",1),o.Cb(2),o.tc("value",0))},directives:[a.v,a.m,a.g,a.b,a.l,a.f,a.s,a.p,a.u],styles:[".add-playlist-modal[_ngcontent-%COMP%]{overflow:auto;max-height:100%;padding:32px;width:100%;max-width:890px;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);position:absolute;background:#fff;z-index:1001}.add-playlist-modal[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .add-playlist-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .add-playlist-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;padding:12px 24px;background:#f4f4f4;color:#545454;margin-bottom:32px;border:0;outline:none}.add-playlist-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:162px;min-height:96px;max-height:280px;resize:none}.add-playlist-modal[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:auto;min-width:284px}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:24px;background:#18b587;color:#fff;font-size:16px;border-radius:0;padding:8px 24px;line-height:normal}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.cancel[_ngcontent-%COMP%]{background:#c9c9c9}"]}),t})();var u=e("FFj9"),g=e("Rnal");let h=(()=>{class t{constructor(t){this.httpClient=t}changeProfileImage(t){return this.httpClient.post(s.b+"users/change-profile-image",t)}changeCoverImage(t){return this.httpClient.post(s.b+"users/change-cover-image",t)}getUserInfo(t){return this.httpClient.get(s.b+"users/get-user-info",{params:t})}}return t.\u0275fac=function(n){return new(n||t)(o.fc(b.b))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var p=e("1m4N"),f=e("HHsJ"),m=e("wDcp"),C=e("hKYS"),v=e("kUS0"),O=e("bhfF"),P=e("NFeN");function _(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",23),o.Xb(1,"input",24),o.jc("change",(function(n){return o.Hc(t),o.nc(2).coverChangeEvent(n)})),o.Wb(),o.Xb(2,"ngx-photo-editor",25),o.jc("imageCropped",(function(n){return o.Hc(t),o.nc(2).coverCropped(n)})),o.Wb(),o.Wb()}if(2&t){const t=o.nc(2);o.tc("hidden",!0),o.Cb(2),o.tc("imageChanedEvent",t.coverChangedEvent)("autoCrop",!1)("viewMode",3)}}function M(t,n){if(1&t&&o.Sb(0,"img",26),2&t){const t=o.nc(2);o.tc("src",t.apiUrl+"uploads/avatars/"+t.channelUser.avatar,o.Jc)}}function y(t,n){1&t&&o.Sb(0,"img",27),2&t&&o.tc("src","assets/img/default-user.png",o.Jc)}function W(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",23),o.Xb(1,"input",28),o.jc("change",(function(n){return o.Hc(t),o.nc(2).profileChangeEvent(n)})),o.Wb(),o.Xb(2,"ngx-photo-editor",29),o.jc("imageCropped",(function(n){return o.Hc(t),o.nc(2).profileCropped(n)})),o.Wb(),o.Wb()}if(2&t){const t=o.nc(2);o.tc("hidden",!0),o.Cb(2),o.tc("imageChanedEvent",t.profileChangedEvent)("aspectRatio",4/3)("viewMode",1)("resizeToWidth",500)}}function X(t,n){if(1&t){const t=o.Yb();o.Xb(0,"a",33),o.jc("click",(function(){o.Hc(t);const n=o.nc(3);return n.subscribeToChannel(n.channelUser.channel)})),o.Qc(1,"Subscribe"),o.Wb()}}function U(t,n){if(1&t){const t=o.Yb();o.Xb(0,"a",34),o.jc("click",(function(){o.Hc(t);const n=o.nc(3);return n.subscribeToChannel(n.channelUser.channel)})),o.Qc(1,"Subscribed"),o.Wb()}}function w(t,n){if(1&t&&(o.Xb(0,"div",8),o.Sb(1,"i",30),o.Oc(2,X,2,0,"a",31),o.Oc(3,U,2,0,"a",32),o.Wb()),2&t){const t=o.nc(2);o.Cb(2),o.tc("ngIf",!t.subscribedToChannel),o.Cb(1),o.tc("ngIf",t.subscribedToChannel)}}function x(t,n){if(1&t){const t=o.Yb();o.Xb(0,"li",35),o.Xb(1,"a",36),o.jc("click",(function(){o.Hc(t);const e=n.$implicit;return o.nc(2).changeActiveTab(e)})),o.Qc(2),o.Wb(),o.Wb()}if(2&t){const t=n.$implicit,e=o.nc(2);o.Cb(1),o.Hb("active",t===e.activeTab),o.vc("id","",t.link,"-tab"),o.vc("href","#",t.link,"",o.Jc),o.Cb(1),o.Rc(t.name)}}function I(t,n){if(1&t&&o.Sb(0,"img",48),2&t){const t=o.nc(2).$implicit,n=o.nc(5);o.tc("src",n.apiUrl+"uploads/thumbnails/"+t.thumbnail,o.Jc)}}function S(t,n){1&t&&o.Sb(0,"img",48),2&t&&o.tc("src","assets/img/video-thumbnail-default.png",o.Jc)}function k(t,n){1&t&&(o.Xb(0,"span",49),o.Qc(1,"Live now"),o.Wb())}function Q(t,n){if(1&t&&o.Sb(0,"img",50),2&t){const t=o.nc(4).$implicit,n=o.nc(3);o.tc("src",n.apiUrl+"uploads/avatars/"+t.avatar,o.Jc)}}function V(t,n){1&t&&o.Sb(0,"img",50),2&t&&o.tc("src","assets/img/default-user.png",o.Jc)}function F(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",41),o.jc("click",(function(){o.Hc(t);const n=o.nc().$implicit,e=o.nc(2).$implicit;return o.nc(3).openVideoPage(n,e.username)})),o.Oc(1,I,1,1,"img",42),o.Oc(2,S,1,1,"img",42),o.Oc(3,k,2,0,"span",43),o.Xb(4,"div",44),o.Oc(5,Q,1,1,"img",45),o.Oc(6,V,1,1,"img",45),o.Xb(7,"div"),o.Xb(8,"p",12),o.Qc(9),o.Wb(),o.Xb(10,"p",46),o.Qc(11),o.Wb(),o.Xb(12,"p",47),o.Qc(13,"17k watching"),o.Wb(),o.Wb(),o.Wb(),o.Wb()}if(2&t){const t=o.nc().$implicit,n=o.nc(2).$implicit;o.Cb(1),o.tc("ngIf",t.thumbnail),o.Cb(1),o.tc("ngIf",!t.thumbnail),o.Cb(1),o.tc("ngIf","live"===t.status),o.Cb(2),o.tc("ngIf",n.avatar),o.Cb(1),o.tc("ngIf",!n.avatar),o.Cb(3),o.Rc(t.name),o.Cb(2),o.Rc(n.full_name)}}function R(t,n){1&t&&(o.Vb(0),o.Oc(1,F,14,7,"ng-template",40),o.Ub())}function T(t,n){if(1&t&&(o.Vb(0),o.Xb(1,"p",38),o.Qc(2),o.Wb(),o.Xb(3,"owl-carousel-o",39),o.Oc(4,R,2,0,"ng-container",37),o.Wb(),o.Ub()),2&t){const t=o.nc().$implicit,n=o.nc(3);o.Cb(2),o.Rc(t.full_name),o.Cb(1),o.tc("options",n.owlOptions),o.Cb(1),o.tc("ngForOf",t.videos)}}function j(t,n){if(1&t&&(o.Vb(0),o.Oc(1,T,5,3,"ng-container",1),o.Ub()),2&t){const t=n.$implicit;o.Cb(1),o.tc("ngIf",t.videos.length>0)}}function $(t,n){if(1&t&&(o.Vb(0),o.Oc(1,j,2,1,"ng-container",37),o.Ub()),2&t){const t=o.nc(2);o.Cb(1),o.tc("ngForOf",t.watchlistVideos)}}function Y(t,n){1&t&&o.Sb(0,"img",52)}function A(t,n){if(1&t&&o.Sb(0,"img",48),2&t){const t=o.nc(2).$implicit,n=o.nc(3);o.uc("src",n.apiUrl+"uploads/thumbnails/"+t.thumbnail,o.Jc)}}function H(t,n){if(1&t&&o.Sb(0,"img",50),2&t){const t=o.nc(5);o.tc("src",t.apiUrl+"uploads/avatars/"+t.authUser.avatar,o.Jc)}}function J(t,n){1&t&&o.Sb(0,"img",50),2&t&&o.tc("src","assets/img/default-user.png",o.Jc)}function N(t,n){if(1&t){const t=o.Yb();o.Xb(0,"div",41),o.jc("click",(function(){o.Hc(t);const n=o.nc().$implicit,e=o.nc(3);return e.openVideoPage(n,e.authUser.username)})),o.Oc(1,Y,1,0,"img",51),o.Oc(2,A,1,1,"img",42),o.Xb(3,"div",44),o.Oc(4,H,1,1,"img",45),o.Oc(5,J,1,1,"img",45),o.Xb(6,"div"),o.Xb(7,"p",12),o.Qc(8),o.Wb(),o.Xb(9,"p",46),o.Qc(10),o.Wb(),o.Xb(11,"p",47),o.Qc(12,"17k watching"),o.Wb(),o.Wb(),o.Wb(),o.Wb()}if(2&t){const t=o.nc().$implicit,n=o.nc(3);o.Cb(1),o.tc("ngIf",!t.thumbnail||"undefined"===t.thumbnail),o.Cb(1),o.tc("ngIf",t.thumbnail&&"undefined"!==t.thumbnail),o.Cb(2),o.tc("ngIf",n.authUser.avatar),o.Cb(1),o.tc("ngIf",!n.authUser.avatar),o.Cb(3),o.Rc(t.name),o.Cb(2),o.Rc(n.authUser.full_name)}}function z(t,n){1&t&&(o.Vb(0),o.Oc(1,N,13,6,"ng-template",40),o.Ub())}function D(t,n){if(1&t&&(o.Vb(0),o.Xb(1,"p",38),o.Qc(2,"Recent videos"),o.Wb(),o.Xb(3,"owl-carousel-o"),o.Oc(4,z,2,0,"ng-container",37),o.Wb(),o.Ub()),2&t){const t=o.nc(2);o.Cb(4),o.tc("ngForOf",t.channelUser.videos)}}function E(t,n){1&t&&(o.Vb(0),o.Xb(1,"mat-icon"),o.Qc(2,"visibility_off"),o.Wb(),o.Xb(3,"span"),o.Qc(4,"Private"),o.Wb(),o.Ub())}function L(t,n){1&t&&(o.Vb(0),o.Xb(1,"mat-icon"),o.Qc(2,"visibility_on"),o.Wb(),o.Xb(3,"span"),o.Qc(4,"Public"),o.Wb(),o.Ub())}function q(t,n){if(1&t){const t=o.Yb();o.Xb(0,"tr"),o.Xb(1,"td"),o.Xb(2,"div",55),o.Sb(3,"img",56),o.Xb(4,"div",57),o.Xb(5,"h3"),o.Qc(6),o.Wb(),o.Xb(7,"p"),o.Qc(8),o.Wb(),o.Wb(),o.Wb(),o.Wb(),o.Xb(9,"td"),o.Oc(10,E,5,0,"ng-container",1),o.Oc(11,L,5,0,"ng-container",1),o.Wb(),o.Xb(12,"td"),o.Xb(13,"span"),o.Qc(14,"Oct 20, 2020"),o.Wb(),o.Wb(),o.Xb(15,"td"),o.Xb(16,"span"),o.Qc(17,"109"),o.Wb(),o.Wb(),o.Xb(18,"td"),o.Xb(19,"span",58),o.jc("click",(function(){return o.Hc(t),o.nc(3).router.navigate(["playlists/single"])})),o.Qc(20,"create"),o.Wb(),o.Wb(),o.Wb()}if(2&t){const t=n.$implicit;o.Cb(6),o.Rc(t.name),o.Cb(2),o.Rc(t.description),o.Cb(2),o.tc("ngIf",!t.privacy),o.Cb(1),o.tc("ngIf",t.privacy)}}function B(t,n){if(1&t){const t=o.Yb();o.Vb(0),o.Xb(1,"div",53),o.Xb(2,"button",54),o.jc("click",(function(){return o.Hc(t),o.nc(2).openAddPlaylistModal()})),o.Qc(3,"Add New Playlist"),o.Wb(),o.Xb(4,"table"),o.Xb(5,"tr"),o.Xb(6,"th"),o.Qc(7,"Playlist"),o.Wb(),o.Xb(8,"th"),o.Qc(9,"Visibility"),o.Wb(),o.Xb(10,"th"),o.Qc(11,"Last updated"),o.Wb(),o.Xb(12,"th"),o.Qc(13,"Video count"),o.Wb(),o.Sb(14,"th"),o.Wb(),o.Oc(15,q,21,4,"tr",37),o.Wb(),o.Wb(),o.Ub()}if(2&t){const t=o.nc(2);o.Cb(15),o.tc("ngForOf",t.playlists)}}function G(t,n){1&t&&o.Sb(0,"textarea",63)}function K(t,n){if(1&t&&(o.Xb(0,"p"),o.Qc(1),o.Wb()),2&t){const t=o.nc(3);o.Cb(1),o.Rc(t.channelUser.channel.description)}}function Z(t,n){if(1&t){const t=o.Yb();o.Vb(0),o.Xb(1,"form",59),o.Xb(2,"div",60),o.Oc(3,G,1,0,"textarea",61),o.Oc(4,K,2,1,"p",1),o.Wb(),o.Xb(5,"div"),o.Xb(6,"button",62),o.jc("click",(function(){return o.Hc(t),o.nc(2).saveChannelDescription()})),o.Qc(7,"Save"),o.Wb(),o.Wb(),o.Wb(),o.Ub()}if(2&t){const t=o.nc(2);o.Cb(1),o.tc("formGroup",t.aboutForm),o.Cb(2),o.tc("ngIf",!t.descriptionUpdated),o.Cb(1),o.tc("ngIf",t.descriptionUpdated)}}function tt(t,n){if(1&t){const t=o.Yb();o.Vb(0),o.Xb(1,"div",3),o.Oc(2,_,3,4,"div",4),o.Xb(3,"label",5),o.Sb(4,"img",6),o.Wb(),o.Wb(),o.Xb(5,"div",7),o.Xb(6,"div",8),o.Xb(7,"label",9),o.Oc(8,M,1,1,"img",10),o.Oc(9,y,1,1,"img",11),o.Wb(),o.Oc(10,W,3,5,"div",4),o.Xb(11,"div"),o.Xb(12,"p",12),o.Qc(13),o.Wb(),o.Xb(14,"p",13),o.Qc(15),o.Wb(),o.Wb(),o.Wb(),o.Oc(16,w,4,2,"div",14),o.Wb(),o.Xb(17,"div",15),o.Xb(18,"div",16),o.Xb(19,"ul",17),o.Oc(20,x,3,5,"li",18),o.Wb(),o.Xb(21,"form",19),o.Xb(22,"div",20),o.Xb(23,"input",21),o.jc("keyup.enter",(function(){return o.Hc(t),o.nc().searchVideos()})),o.Wb(),o.Sb(24,"i",22),o.Wb(),o.Wb(),o.Wb(),o.Oc(25,$,2,1,"ng-container",1),o.Oc(26,D,5,1,"ng-container",1),o.Oc(27,B,16,1,"ng-container",1),o.Oc(28,Z,8,3,"ng-container",1),o.Wb(),o.Ub()}if(2&t){const t=o.nc();o.Cb(2),o.tc("ngIf",t.channelUser.username===t.authUser.username),o.Cb(2),o.tc("src",t.channelUser.cover?t.apiUrl+"uploads/covers/"+t.channelUser.cover:"assets/img/default-thumbnail.png",o.Jc),o.Cb(4),o.tc("ngIf",t.channelUser.avatar),o.Cb(1),o.tc("ngIf",!t.channelUser.avatar),o.Cb(1),o.tc("ngIf",t.channelUser.username===t.authUser.username),o.Cb(3),o.Rc(t.channelUser.channel.name),o.Cb(2),o.Sc("",t.subscribersCount+" subscriber"+(1===t.subscribersCount?"":"s")," "),o.Cb(1),o.tc("ngIf",t.channelUser.username!==t.authUser.username),o.Cb(4),o.tc("ngForOf",t.allTabs),o.Cb(1),o.tc("formGroup",t.searchVideosForm),o.Cb(4),o.tc("ngIf","Watchlist"===t.activeTab.name),o.Cb(1),o.tc("ngIf","Videos"===t.activeTab.name),o.Cb(1),o.tc("ngIf","Playlists"===t.activeTab.name),o.Cb(1),o.tc("ngIf","About"===t.activeTab.name)}}function nt(t,n){1&t&&(o.Xb(0,"div",64),o.Xb(1,"p"),o.Qc(2,"Channel with such name is not found"),o.Wb(),o.Wb())}let et=(()=>{class t{constructor(t,n,e,i,c,o,r,b,l,d,u){this.videoService=t,this.getAuthUser=n,this.router=e,this.usersService=i,this.base64ToFile=c,this.route=o,this.fb=r,this.channelService=b,this.playlistsService=l,this.subject=d,this.dialog=u,this.owlOptions=s.d,this.watchlistVideos=[],this.activeTab=s.g[0],this.allTabs=s.g,this.apiUrl=s.b,this.subscribedToChannel=!1,this.descriptionUpdated=!1,this.playlists=[],this.authUser=this.getAuthUser.transform(),this.passedUsername=this.route.snapshot.queryParams.username,this.searchVideosForm=this.fb.group({search:["",a.t.required]}),this.aboutForm=this.fb.group({description:["",a.t.required],id:["",a.t.required],username:["",a.t.required]})}ngOnInit(){this.passedUsername&&this.usersService.getUserInfo({username:this.passedUsername}).subscribe(t=>{t&&(this.channelUser=t,this.aboutForm.patchValue(Object.assign({username:t.username},t.channel)),this.checkChannelSubscription())}),this.videoService.getUserVideos({user_id:this.authUser.id}).subscribe(t=>{this.currentUser=t}),this.videoService.getVideosByAuthor({}).subscribe(t=>{this.watchlistVideos=t}),this.getPlaylists()}getPlaylists(){this.playlistsService.get().subscribe(t=>{this.playlists=t})}changeActiveTab(t){this.activeTab=t,this.searchVideos()}checkChannelSubscription(){this.channelService.checkChannelSubscription({user_id:this.authUser.id,channel_id:this.channelUser.channel.id}).subscribe(t=>{this.subscribedToChannel="Subscribed"===t.status,this.subscribersCount=t.subscribers_count})}openVideoPage(t,n){let e,i;console.log(n),"live"===t.status?(e="user/video/watch",i={session:t.session_name,publisher:n}):(e="videos/play",i={id:t.id}),this.router.navigate([e],{queryParams:i})}openAddPlaylistModal(){this.dialog.open(d).afterClosed().subscribe(t=>{this.getPlaylists()})}coverChangeEvent(t){this.coverChangedEvent=t}profileChangeEvent(t){this.profileChangedEvent=t}profileCropped(t){this.profileBase64=t.base64;const n=`profile_${Date.now()}.jpg`,e=new FormData;e.append("avatar_file",this.base64ToFile.transform(t.base64),n),e.append("avatar",n),e.append("id",this.authUser.id),this.usersService.changeProfileImage(e).subscribe(t=>{localStorage.setItem("token",t.token),this.authUser=this.getAuthUser.transform(),this.channelUser=this.authUser})}coverCropped(t){this.coverBase64=t.base64;const n=new FormData,e=`cover_${Date.now()}.jpg`;n.append("cover_file",this.base64ToFile.transform(t.base64),e),n.append("cover",e),n.append("id",this.authUser.id),this.usersService.changeCoverImage(n).subscribe(t=>{localStorage.setItem("token",t.token),this.authUser=this.getAuthUser.transform(),this.channelUser=this.authUser})}searchVideos(){const t=this.searchVideosForm.value;t.search&&("Watchlist"===this.activeTab.name?this.searchInVideosByAuthor(t):"Videos"===this.activeTab.name&&this.searchInUserVideos(t))}searchInVideosByAuthor(t){this.videoService.searchInVideosByAuthor(t).subscribe(t=>{this.watchlistVideos=t})}searchInUserVideos(t){this.currentUser.videos=[],this.videoService.searchInUserVideos(Object.assign({user_id:this.authUser.id},t)).subscribe(t=>{this.currentUser.videos=t.videos})}subscribeToChannel(t){console.log(t),this.channelService.subscribeToChannel({user_id:this.authUser.id,channel_id:t.id}).subscribe(t=>{this.subscribedToChannel="Subscribed"===t.status,this.subscribersCount=t.subscribers_count,this.channelService.getUserChannelSubscriptions({user_id:this.authUser.id}).subscribe(t=>{this.subject.setUserSubscriptions(t)})})}saveChannelDescription(){console.log(this.aboutForm.value),this.descriptionUpdated=!0,this.channelService.saveDescription(this.aboutForm.value).subscribe(t=>{this.channelUser=t})}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(u.a),o.Rb(g.a),o.Rb(c.d),o.Rb(h),o.Rb(p.a),o.Rb(c.a),o.Rb(a.c),o.Rb(f.a),o.Rb(l),o.Rb(m.a),o.Rb(r.b))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-show-channel"]],decls:4,vars:2,consts:[[1,"profile-list"],[4,"ngIf"],["class","channel-not-found",4,"ngIf"],[1,"profile-block"],[3,"hidden",4,"ngIf"],["for","cover-image-input"],["id","cover-image",3,"src"],[1,"sub-block"],[1,"d-flex","align-items-center"],["for","profile-image-input"],["class","avatar list-img",3,"src",4,"ngIf"],["class","avatar","id","profile-image",3,"src",4,"ngIf"],[1,"main-text-1"],[1,"main-text-4"],["class","d-flex align-items-center",4,"ngIf"],[1,"watchlist","pWatchlist"],[1,"profile-list","user-profile-block"],["id","profileList","role","tablist",1,"nav","nav-tabs"],["class","nav-item",4,"ngFor","ngForOf"],[3,"formGroup"],[1,"watchlist-search"],["placeholder","Search","formControlName","search",1,"watchlist-input",3,"keyup.enter"],[1,"fas","fa-search"],[3,"hidden"],["type","file","id","cover-image-input",3,"change"],[3,"imageChanedEvent","autoCrop","viewMode","imageCropped"],[1,"avatar","list-img",3,"src"],["id","profile-image",1,"avatar",3,"src"],["type","file","id","profile-image-input",3,"change"],[3,"imageChanedEvent","aspectRatio","viewMode","resizeToWidth","imageCropped"],[1,"sub-bell","fas","fa-bell"],["class","subscribe-btn",3,"click",4,"ngIf"],["class","subscribe-btn subscribed",3,"click",4,"ngIf"],[1,"subscribe-btn",3,"click"],[1,"subscribe-btn","subscribed",3,"click"],[1,"nav-item"],["data-toggle","tab","role","tab","aria-controls","pWatch","aria-selected","true",1,"nav-link",3,"id","href","click"],[4,"ngFor","ngForOf"],[1,"trending-text"],[3,"options"],["carouselSlide",""],[1,"item","main-carousel-item",3,"click"],["class","main-item-img",3,"src",4,"ngIf"],["class","live-now",4,"ngIf"],[1,"main-item-block"],["class","avatar",3,"src",4,"ngIf"],[1,"main-text-2"],[1,"main-text-3"],[1,"main-item-img",3,"src"],[1,"live-now"],[1,"avatar",3,"src"],["class","main-item-img","src","assets/img/video-thumbnail-default.png",4,"ngIf"],["src","assets/img/video-thumbnail-default.png",1,"main-item-img"],[1,"playlist-tab"],[1,"btn","new-playlist",3,"click"],[1,"img-info"],["src","assets/img/item-3.png","alt",""],[1,"info"],[1,"material-icons",3,"click"],["id","channel-about-form",3,"formGroup"],["id","description"],["formControlName","description",4,"ngIf"],[3,"click"],["formControlName","description"],[1,"channel-not-found"]],template:function(t,n){1&t&&(o.Xb(0,"div",0),o.Sb(1,"app-categories"),o.Oc(2,tt,29,14,"ng-container",1),o.Oc(3,nt,3,0,"div",2),o.Wb()),2&t&&(o.Cb(2),o.tc("ngIf",n.channelUser),o.Cb(1),o.tc("ngIf",!n.channelUser))},directives:[C.a,i.m,i.l,a.v,a.m,a.g,a.b,a.l,a.f,v.a,O.a,O.c,P.a],styles:[".profile-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%}.subscribed[_ngcontent-%COMP%]{background-color:#d6d6d6!important}#channel-about-form[_ngcontent-%COMP%]{width:50%}#channel-about-form[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%], #channel-about-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}#channel-about-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background:#fff 0 0 no-repeat padding-box;box-shadow:0 0 6px rgba(0,0,0,.06);border:none;resize:none;height:200px}#channel-about-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border:none;outline:none;box-shadow:0 0 6px #18b587}#channel-about-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:88px;height:36px;background:#f53c6f;font-family:Muli-Light;font-size:16px;color:#fff!important;display:flex;justify-content:center;align-items:center;margin-left:16px;margin-right:16px;cursor:pointer;float:right}.playlist-tab[_ngcontent-%COMP%]   .new-playlist[_ngcontent-%COMP%]{background:#18b587;border-radius:0;color:#fff;padding:8px 24px}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:table;margin:24px 0;width:100%}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table-row}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%]{border-bottom:0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle;color:#545454;font-weight:700;font-size:16px;padding:12px 0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%]{margin:0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-right:12px;vertical-align:middle;cursor:pointer}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]{display:flex}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:144px}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-left:24px}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-weight:700}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:240px;font-size:12px;font-weight:400}"]}),t})();var it=e("wd/R"),ct=e("7dP1");function st(t,n){if(1&t&&o.Sb(0,"img",11),2&t){const t=o.nc().$implicit,n=o.nc(2);o.tc("src",n.apiUrl+"uploads/avatars/"+t.avatar,o.Jc)}}function at(t,n){1&t&&o.Sb(0,"img",11),2&t&&o.tc("src","assets/img/default-user.png",o.Jc)}function ot(t,n){if(1&t&&(o.Xb(0,"li",2),o.Xb(1,"div",3),o.Oc(2,st,1,1,"img",4),o.Oc(3,at,1,1,"img",4),o.Wb(),o.Xb(4,"div",5),o.Xb(5,"p",6),o.Qc(6),o.Wb(),o.Xb(7,"div",7),o.Xb(8,"span",8),o.Qc(9,"17k watching"),o.Wb(),o.Xb(10,"span",9),o.Qc(11,"."),o.Wb(),o.Xb(12,"span",10),o.Qc(13,"250 video"),o.Wb(),o.Wb(),o.Xb(14,"p"),o.Qc(15,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed sda,sasddswd"),o.Wb(),o.Wb(),o.Wb()),2&t){const t=n.$implicit;o.Cb(2),o.tc("ngIf",t.avatar),o.Cb(1),o.tc("ngIf",!t.avatar),o.Cb(3),o.Rc(t.name)}}function rt(t,n){if(1&t&&(o.Xb(0,"ul"),o.Oc(1,ot,16,3,"li",1),o.Wb()),2&t){const t=o.nc();o.Cb(1),o.tc("ngForOf",t.userChannels.subscriptions)}}const bt=[{path:"show",component:et},{path:"subscriptions",component:(()=>{class t{constructor(t,n,e){this.channelsService=t,this.getAuthUser=n,this.auth=e,this.apiUrl=s.b,this.authUser=this.getAuthUser.transform()}ngOnInit(){this.channelsService.getSubscriptions({user_id:this.authUser.id}).subscribe(t=>{this.userChannels=t})}getUploadDateTime(t){return it(t).format("MMM DD, YYYY")}}return t.\u0275fac=function(n){return new(n||t)(o.Rb(f.a),o.Rb(g.a),o.Rb(ct.a))},t.\u0275cmp=o.Lb({type:t,selectors:[["app-show-subscriptions"]],decls:1,vars:1,consts:[[4,"ngIf"],["class","channel-item",4,"ngFor","ngForOf"],[1,"channel-item"],[1,"thumbnail"],["class","avatar",3,"src",4,"ngIf"],[1,"info"],[1,"name"],[1,"shortened-details"],[1,"watchers-count"],[1,"dot"],[1,"videos-count"],[1,"avatar",3,"src"]],template:function(t,n){1&t&&o.Oc(0,rt,2,1,"ul",0),2&t&&o.tc("ngIf",n.userChannels)},directives:[i.m,i.l],styles:[".channel-item[_ngcontent-%COMP%]{display:flex;width:936px;margin-bottom:32px}.channel-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:240px!important;height:240px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:4px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#545454;font-size:24px;font-family:Muli-Bold}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin-left:26px;margin-top:-3px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-family:Muli-Light}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%], .channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%]{font-size:14px;color:#818181}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%]{margin-left:26px}"]}),t})()}];let lt=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(n){return new(n||t)},imports:[[c.e.forChild(bt)],c.e]}),t})();var dt=e("PCNd");let ut=(()=>{class t{}return t.\u0275mod=o.Pb({type:t}),t.\u0275inj=o.Ob({factory:function(n){return new(n||t)},imports:[[i.c,lt,dt.a,v.b]]}),t})()}}]);