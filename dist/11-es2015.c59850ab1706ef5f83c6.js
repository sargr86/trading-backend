(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"55j5":function(t,n,e){"use strict";e.r(n),e.d(n,"ChannelsModule",(function(){return lt}));var i=e("ofXK"),c=e("tyNb"),a=e("9xOu"),o=e("3Pt+"),s=e("fXoL"),r=e("0IaG"),b=e("CPAS");let l=(()=>{class t{constructor(t,n,e){this.modal=t,this.fb=n,this.playlistService=e,this.addPlaylistForm=this.fb.group({name:["",o.t.required],description:["",o.t.required],privacy:["",o.t.required]})}ngOnInit(){}createPlaylist(){console.log(this.addPlaylistForm.value),this.playlistService.addPlaylist(this.addPlaylistForm.value).subscribe(t=>{this.modal.close()})}cancel(){this.modal.close()}}return t.\u0275fac=function(n){return new(n||t)(s.Rb(r.d),s.Rb(o.c),s.Rb(b.a))},t.\u0275cmp=s.Lb({type:t,selectors:[["app-add-playlist-dialog"]],decls:17,vars:4,consts:[[1,"add-playlist-modal"],[3,"formGroup"],["type","text","placeholder","Playlist Title","formControlName","name"],["id","playlist-description","cols","30","rows","10","formControlName","description","placeholder","Playlist Description"],[1,"select"],["id","visibility","formControlName","privacy"],[3,"value"],[1,"btn-wrap"],[1,"btn","cancel",3,"click"],[1,"btn","create",3,"click"]],template:function(t,n){1&t&&(s.Xb(0,"div",0),s.Xb(1,"form",1),s.Sb(2,"input",2),s.Sb(3,"textarea",3),s.Xb(4,"div",4),s.Xb(5,"select",5),s.Xb(6,"option",6),s.Qc(7,"Visibility"),s.Wb(),s.Xb(8,"option",6),s.Qc(9,"Public"),s.Wb(),s.Xb(10,"option",6),s.Qc(11,"Private"),s.Wb(),s.Wb(),s.Wb(),s.Xb(12,"div",7),s.Xb(13,"button",8),s.jc("click",(function(){return n.cancel()})),s.Qc(14,"Cancel"),s.Wb(),s.Xb(15,"button",9),s.jc("click",(function(){return n.createPlaylist()})),s.Qc(16,"Create"),s.Wb(),s.Wb(),s.Wb(),s.Wb()),2&t&&(s.Cb(1),s.tc("formGroup",n.addPlaylistForm),s.Cb(5),s.tc("value",""),s.Cb(2),s.tc("value",1),s.Cb(2),s.tc("value",0))},directives:[o.v,o.m,o.g,o.b,o.l,o.f,o.s,o.p,o.u],styles:[".add-playlist-modal[_ngcontent-%COMP%]{overflow:auto;max-height:100%;padding:32px;width:100%;max-width:890px;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);position:absolute;background:#fff;z-index:1001}.add-playlist-modal[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], .add-playlist-modal[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .add-playlist-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%;padding:12px 24px;background:#f4f4f4;color:#545454;margin-bottom:32px;border:0;outline:none}.add-playlist-modal[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{height:162px;min-height:96px;max-height:280px;resize:none}.add-playlist-modal[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{width:auto;min-width:284px}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:24px;background:#18b587;color:#fff;font-size:16px;border-radius:0;padding:8px 24px;line-height:normal}.add-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.cancel[_ngcontent-%COMP%]{background:#c9c9c9}"]}),t})();var g=e("FFj9"),d=e("Rnal"),u=e("tk/3");let p=(()=>{class t{constructor(t){this.httpClient=t}changeProfileImage(t){return this.httpClient.post(a.b+"users/change-profile-image",t)}changeCoverImage(t){return this.httpClient.post(a.b+"users/change-cover-image",t)}getUserInfo(t){return this.httpClient.get(a.b+"users/get-user-info",{params:t})}}return t.\u0275fac=function(n){return new(n||t)(s.fc(u.b))},t.\u0275prov=s.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var h=e("1m4N"),f=e("HHsJ"),m=e("wDcp"),C=e("hKYS"),O=e("kUS0"),P=e("bhfF"),v=e("NFeN");function _(t,n){if(1&t){const t=s.Yb();s.Xb(0,"div",23),s.Xb(1,"input",24),s.jc("change",(function(n){return s.Hc(t),s.nc(2).coverChangeEvent(n)})),s.Wb(),s.Xb(2,"ngx-photo-editor",25),s.jc("imageCropped",(function(n){return s.Hc(t),s.nc(2).coverCropped(n)})),s.Wb(),s.Wb()}if(2&t){const t=s.nc(2);s.tc("hidden",!0),s.Cb(2),s.tc("imageChanedEvent",t.coverChangedEvent)("autoCrop",!1)("viewMode",3)}}function M(t,n){if(1&t&&s.Sb(0,"img",26),2&t){const t=s.nc(2);s.tc("src",t.apiUrl+"uploads/avatars/"+t.channelUser.avatar,s.Jc)}}function y(t,n){1&t&&s.Sb(0,"img",27),2&t&&s.tc("src","assets/img/default-user.png",s.Jc)}function W(t,n){if(1&t){const t=s.Yb();s.Xb(0,"div",23),s.Xb(1,"input",28),s.jc("change",(function(n){return s.Hc(t),s.nc(2).profileChangeEvent(n)})),s.Wb(),s.Xb(2,"ngx-photo-editor",29),s.jc("imageCropped",(function(n){return s.Hc(t),s.nc(2).profileCropped(n)})),s.Wb(),s.Wb()}if(2&t){const t=s.nc(2);s.tc("hidden",!0),s.Cb(2),s.tc("imageChanedEvent",t.profileChangedEvent)("aspectRatio",4/3)("viewMode",1)("resizeToWidth",500)}}function X(t,n){if(1&t){const t=s.Yb();s.Xb(0,"a",33),s.jc("click",(function(){s.Hc(t);const n=s.nc(3);return n.subscribeToChannel(n.channelUser.channel)})),s.Qc(1,"Subscribe"),s.Wb()}}function x(t,n){if(1&t){const t=s.Yb();s.Xb(0,"a",34),s.jc("click",(function(){s.Hc(t);const n=s.nc(3);return n.subscribeToChannel(n.channelUser.channel)})),s.Qc(1,"Subscribed"),s.Wb()}}function U(t,n){if(1&t&&(s.Xb(0,"div",8),s.Sb(1,"i",30),s.Oc(2,X,2,0,"a",31),s.Oc(3,x,2,0,"a",32),s.Wb()),2&t){const t=s.nc(2);s.Cb(2),s.tc("ngIf",!t.subscribedToChannel),s.Cb(1),s.tc("ngIf",t.subscribedToChannel)}}function w(t,n){if(1&t){const t=s.Yb();s.Xb(0,"li",35),s.Xb(1,"a",36),s.jc("click",(function(){s.Hc(t);const e=n.$implicit;return s.nc(2).changeActiveTab(e)})),s.Qc(2),s.Wb(),s.Wb()}if(2&t){const t=n.$implicit,e=s.nc(2);s.Cb(1),s.Hb("active",t===e.activeTab),s.vc("id","",t.link,"-tab"),s.vc("href","#",t.link,"",s.Jc),s.Cb(1),s.Rc(t.name)}}function I(t,n){if(1&t&&s.Sb(0,"img",48),2&t){const t=s.nc(2).$implicit,n=s.nc(5);s.tc("src",n.apiUrl+"uploads/thumbnails/"+t.thumbnail,s.Jc)}}function k(t,n){1&t&&s.Sb(0,"img",48),2&t&&s.tc("src","assets/img/video-thumbnail-default.png",s.Jc)}function S(t,n){1&t&&(s.Xb(0,"span",49),s.Qc(1,"Live now"),s.Wb())}function Q(t,n){if(1&t&&s.Sb(0,"img",50),2&t){const t=s.nc(4).$implicit,n=s.nc(3);s.tc("src",n.apiUrl+"uploads/avatars/"+t.avatar,s.Jc)}}function V(t,n){1&t&&s.Sb(0,"img",50),2&t&&s.tc("src","assets/img/default-user.png",s.Jc)}function F(t,n){if(1&t){const t=s.Yb();s.Xb(0,"div",41),s.jc("click",(function(){s.Hc(t);const n=s.nc().$implicit,e=s.nc(2).$implicit;return s.nc(3).openVideoPage(n,e.username)})),s.Oc(1,I,1,1,"img",42),s.Oc(2,k,1,1,"img",42),s.Oc(3,S,2,0,"span",43),s.Xb(4,"div",44),s.Oc(5,Q,1,1,"img",45),s.Oc(6,V,1,1,"img",45),s.Xb(7,"div"),s.Xb(8,"p",12),s.Qc(9),s.Wb(),s.Xb(10,"p",46),s.Qc(11),s.Wb(),s.Xb(12,"p",47),s.Qc(13,"17k watching"),s.Wb(),s.Wb(),s.Wb(),s.Wb()}if(2&t){const t=s.nc().$implicit,n=s.nc(2).$implicit;s.Cb(1),s.tc("ngIf",t.thumbnail),s.Cb(1),s.tc("ngIf",!t.thumbnail),s.Cb(1),s.tc("ngIf","live"===t.status),s.Cb(2),s.tc("ngIf",n.avatar),s.Cb(1),s.tc("ngIf",!n.avatar),s.Cb(3),s.Rc(t.name),s.Cb(2),s.Rc(n.full_name)}}function R(t,n){1&t&&(s.Vb(0),s.Oc(1,F,14,7,"ng-template",40),s.Ub())}function T(t,n){if(1&t&&(s.Vb(0),s.Xb(1,"p",38),s.Qc(2),s.Wb(),s.Xb(3,"owl-carousel-o",39),s.Oc(4,R,2,0,"ng-container",37),s.Wb(),s.Ub()),2&t){const t=s.nc().$implicit,n=s.nc(3);s.Cb(2),s.Rc(t.full_name),s.Cb(1),s.tc("options",n.owlOptions),s.Cb(1),s.tc("ngForOf",t.videos)}}function j(t,n){if(1&t&&(s.Vb(0),s.Oc(1,T,5,3,"ng-container",1),s.Ub()),2&t){const t=n.$implicit;s.Cb(1),s.tc("ngIf",t.videos.length>0)}}function A(t,n){if(1&t&&(s.Vb(0),s.Oc(1,j,2,1,"ng-container",37),s.Ub()),2&t){const t=s.nc(2);s.Cb(1),s.tc("ngForOf",t.watchlistVideos)}}function $(t,n){1&t&&s.Sb(0,"img",52)}function J(t,n){if(1&t&&s.Sb(0,"img",48),2&t){const t=s.nc(2).$implicit,n=s.nc(3);s.uc("src",n.apiUrl+"uploads/thumbnails/"+t.thumbnail,s.Jc)}}function z(t,n){if(1&t&&s.Sb(0,"img",50),2&t){const t=s.nc(5);s.tc("src",t.apiUrl+"uploads/avatars/"+t.authUser.avatar,s.Jc)}}function Y(t,n){1&t&&s.Sb(0,"img",50),2&t&&s.tc("src","assets/img/default-user.png",s.Jc)}function H(t,n){if(1&t){const t=s.Yb();s.Xb(0,"div",41),s.jc("click",(function(){s.Hc(t);const n=s.nc().$implicit,e=s.nc(3);return e.openVideoPage(n,e.authUser.username)})),s.Oc(1,$,1,0,"img",51),s.Oc(2,J,1,1,"img",42),s.Xb(3,"div",44),s.Oc(4,z,1,1,"img",45),s.Oc(5,Y,1,1,"img",45),s.Xb(6,"div"),s.Xb(7,"p",12),s.Qc(8),s.Wb(),s.Xb(9,"p",46),s.Qc(10),s.Wb(),s.Xb(11,"p",47),s.Qc(12,"17k watching"),s.Wb(),s.Wb(),s.Wb(),s.Wb()}if(2&t){const t=s.nc().$implicit,n=s.nc(3);s.Cb(1),s.tc("ngIf",!t.thumbnail||"undefined"===t.thumbnail),s.Cb(1),s.tc("ngIf",t.thumbnail&&"undefined"!==t.thumbnail),s.Cb(2),s.tc("ngIf",n.authUser.avatar),s.Cb(1),s.tc("ngIf",!n.authUser.avatar),s.Cb(3),s.Rc(t.name),s.Cb(2),s.Rc(n.authUser.full_name)}}function L(t,n){1&t&&(s.Vb(0),s.Oc(1,H,13,6,"ng-template",40),s.Ub())}function E(t,n){if(1&t&&(s.Vb(0),s.Xb(1,"p",38),s.Qc(2,"Recent videos"),s.Wb(),s.Xb(3,"owl-carousel-o"),s.Oc(4,L,2,0,"ng-container",37),s.Wb(),s.Ub()),2&t){const t=s.nc(2);s.Cb(4),s.tc("ngForOf",t.channelUser.videos)}}function q(t,n){1&t&&(s.Vb(0),s.Xb(1,"mat-icon"),s.Qc(2,"visibility_off"),s.Wb(),s.Xb(3,"span"),s.Qc(4,"Private"),s.Wb(),s.Ub())}function D(t,n){1&t&&(s.Vb(0),s.Xb(1,"mat-icon"),s.Qc(2,"visibility_on"),s.Wb(),s.Xb(3,"span"),s.Qc(4,"Public"),s.Wb(),s.Ub())}function B(t,n){if(1&t){const t=s.Yb();s.Xb(0,"tr",56),s.jc("click",(function(){s.Hc(t);const e=n.$implicit;return s.nc(3).router.navigate(["playlists/single/"+e.id])})),s.Xb(1,"td"),s.Xb(2,"div",57),s.Sb(3,"img",58),s.Xb(4,"div",59),s.Xb(5,"h3"),s.Qc(6),s.Wb(),s.Xb(7,"p"),s.Qc(8),s.Wb(),s.Wb(),s.Wb(),s.Wb(),s.Xb(9,"td"),s.Oc(10,q,5,0,"ng-container",1),s.Oc(11,D,5,0,"ng-container",1),s.Wb(),s.Xb(12,"td"),s.Xb(13,"span"),s.Qc(14),s.oc(15,"date"),s.Wb(),s.Wb(),s.Xb(16,"td"),s.Xb(17,"span"),s.Qc(18),s.Wb(),s.Wb(),s.Xb(19,"td"),s.Xb(20,"span",60),s.Qc(21,"create"),s.Wb(),s.Wb(),s.Wb()}if(2&t){const t=n.$implicit;s.Cb(6),s.Rc(t.name),s.Cb(2),s.Rc(t.description),s.Cb(2),s.tc("ngIf",!t.privacy),s.Cb(1),s.tc("ngIf",t.privacy),s.Cb(3),s.Rc(s.qc(15,6,t.updated_at,"d MMM, yyyy")),s.Cb(4),s.Rc(t.videos.length)}}function N(t,n){if(1&t){const t=s.Yb();s.Vb(0),s.Xb(1,"div",53),s.Xb(2,"button",54),s.jc("click",(function(){return s.Hc(t),s.nc(2).openAddPlaylistModal()})),s.Qc(3,"Add New Playlist"),s.Wb(),s.Xb(4,"table"),s.Xb(5,"tr"),s.Xb(6,"th"),s.Qc(7,"Playlist"),s.Wb(),s.Xb(8,"th"),s.Qc(9,"Visibility"),s.Wb(),s.Xb(10,"th"),s.Qc(11,"Last updated"),s.Wb(),s.Xb(12,"th"),s.Qc(13,"Video count"),s.Wb(),s.Sb(14,"th"),s.Wb(),s.Oc(15,B,22,9,"tr",55),s.Wb(),s.Wb(),s.Ub()}if(2&t){const t=s.nc(2);s.Cb(15),s.tc("ngForOf",t.playlists)}}function G(t,n){1&t&&(s.Vb(0),s.Xb(1,"div",61),s.Xb(2,"div",59),s.Xb(3,"h2"),s.Qc(4,"Description"),s.Wb(),s.Xb(5,"div",62),s.Xb(6,"span"),s.Qc(7,"Joined Oct 20, 2016"),s.Wb(),s.Xb(8,"button",63),s.Qc(9,"Edit"),s.Wb(),s.Wb(),s.Wb(),s.Xb(10,"div",64),s.Qc(11," Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero "),s.Wb(),s.Xb(12,"button",65),s.Qc(13,"save"),s.Wb(),s.Wb(),s.Ub())}function K(t,n){if(1&t){const t=s.Yb();s.Vb(0),s.Xb(1,"div",3),s.Oc(2,_,3,4,"div",4),s.Xb(3,"label",5),s.Sb(4,"img",6),s.Wb(),s.Wb(),s.Xb(5,"div",7),s.Xb(6,"div",8),s.Xb(7,"label",9),s.Oc(8,M,1,1,"img",10),s.Oc(9,y,1,1,"img",11),s.Wb(),s.Oc(10,W,3,5,"div",4),s.Xb(11,"div"),s.Xb(12,"p",12),s.Qc(13),s.Wb(),s.Xb(14,"p",13),s.Qc(15),s.Wb(),s.Wb(),s.Wb(),s.Oc(16,U,4,2,"div",14),s.Wb(),s.Xb(17,"div",15),s.Xb(18,"div",16),s.Xb(19,"ul",17),s.Oc(20,w,3,5,"li",18),s.Wb(),s.Xb(21,"form",19),s.Xb(22,"div",20),s.Xb(23,"input",21),s.jc("keyup.enter",(function(){return s.Hc(t),s.nc().searchVideos()})),s.Wb(),s.Sb(24,"i",22),s.Wb(),s.Wb(),s.Wb(),s.Oc(25,A,2,1,"ng-container",1),s.Oc(26,E,5,1,"ng-container",1),s.Oc(27,N,16,1,"ng-container",1),s.Oc(28,G,14,0,"ng-container",1),s.Wb(),s.Ub()}if(2&t){const t=s.nc();s.Cb(2),s.tc("ngIf",t.channelUser.username===t.authUser.username),s.Cb(2),s.tc("src",t.channelUser.cover?t.apiUrl+"uploads/covers/"+t.channelUser.cover:"assets/img/default-thumbnail.png",s.Jc),s.Cb(4),s.tc("ngIf",t.channelUser.avatar),s.Cb(1),s.tc("ngIf",!t.channelUser.avatar),s.Cb(1),s.tc("ngIf",t.channelUser.username===t.authUser.username),s.Cb(3),s.Rc(t.channelUser.channel.name),s.Cb(2),s.Sc("",t.subscribersCount+" subscriber"+(1===t.subscribersCount?"":"s")," "),s.Cb(1),s.tc("ngIf",t.channelUser.username!==t.authUser.username),s.Cb(4),s.tc("ngForOf",t.allTabs),s.Cb(1),s.tc("formGroup",t.searchVideosForm),s.Cb(4),s.tc("ngIf","Watchlist"===t.activeTab.name),s.Cb(1),s.tc("ngIf","Videos"===t.activeTab.name),s.Cb(1),s.tc("ngIf","Playlists"===t.activeTab.name),s.Cb(1),s.tc("ngIf","About"===t.activeTab.name)}}function Z(t,n){1&t&&(s.Xb(0,"div",66),s.Xb(1,"p"),s.Qc(2,"Channel with such name is not found"),s.Wb(),s.Wb())}let tt=(()=>{class t{constructor(t,n,e,i,c,s,r,b,l,g,d){this.videoService=t,this.getAuthUser=n,this.router=e,this.usersService=i,this.base64ToFile=c,this.route=s,this.fb=r,this.channelService=b,this.playlistsService=l,this.subject=g,this.dialog=d,this.owlOptions=a.d,this.watchlistVideos=[],this.activeTab=a.g[0],this.allTabs=a.g,this.apiUrl=a.b,this.subscribedToChannel=!1,this.descriptionUpdated=!1,this.playlists=[],this.authUser=this.getAuthUser.transform(),this.passedUsername=this.route.snapshot.queryParams.username,this.searchVideosForm=this.fb.group({search:["",o.t.required]}),this.aboutForm=this.fb.group({description:["",o.t.required],id:["",o.t.required],username:["",o.t.required]})}ngOnInit(){this.passedUsername&&this.usersService.getUserInfo({username:this.passedUsername}).subscribe(t=>{t&&(this.channelUser=t,this.aboutForm.patchValue(Object.assign({username:t.username},t.channel)),this.checkChannelSubscription())}),this.videoService.getUserVideos({user_id:this.authUser.id}).subscribe(t=>{this.currentUser=t}),this.videoService.getVideosByAuthor({}).subscribe(t=>{this.watchlistVideos=t}),this.getPlaylists()}getPlaylists(){this.playlistsService.get().subscribe(t=>{this.playlists=t})}changeActiveTab(t){this.activeTab=t,this.searchVideos()}checkChannelSubscription(){this.channelService.checkChannelSubscription({user_id:this.authUser.id,channel_id:this.channelUser.channel.id}).subscribe(t=>{this.subscribedToChannel="Subscribed"===t.status,this.subscribersCount=t.subscribers_count})}openVideoPage(t,n){let e,i;console.log(n),"live"===t.status?(e="user/video/watch",i={session:t.session_name,publisher:n}):(e="videos/play",i={id:t.id}),this.router.navigate([e],{queryParams:i})}openAddPlaylistModal(){this.dialog.open(l).afterClosed().subscribe(t=>{this.getPlaylists()})}coverChangeEvent(t){this.coverChangedEvent=t}profileChangeEvent(t){this.profileChangedEvent=t}profileCropped(t){this.profileBase64=t.base64;const n=`profile_${Date.now()}.jpg`,e=new FormData;e.append("avatar_file",this.base64ToFile.transform(t.base64),n),e.append("avatar",n),e.append("id",this.authUser.id),this.usersService.changeProfileImage(e).subscribe(t=>{localStorage.setItem("token",t.token),this.authUser=this.getAuthUser.transform(),this.channelUser=this.authUser})}coverCropped(t){this.coverBase64=t.base64;const n=new FormData,e=`cover_${Date.now()}.jpg`;n.append("cover_file",this.base64ToFile.transform(t.base64),e),n.append("cover",e),n.append("id",this.authUser.id),this.usersService.changeCoverImage(n).subscribe(t=>{localStorage.setItem("token",t.token),this.authUser=this.getAuthUser.transform(),this.channelUser=this.authUser})}searchVideos(){const t=this.searchVideosForm.value;t.search&&("Watchlist"===this.activeTab.name?this.searchInVideosByAuthor(t):"Videos"===this.activeTab.name&&this.searchInUserVideos(t))}searchInVideosByAuthor(t){this.videoService.searchInVideosByAuthor(t).subscribe(t=>{this.watchlistVideos=t})}searchInUserVideos(t){this.currentUser.videos=[],this.videoService.searchInUserVideos(Object.assign({user_id:this.authUser.id},t)).subscribe(t=>{this.currentUser.videos=t.videos})}subscribeToChannel(t){console.log(t),this.channelService.subscribeToChannel({user_id:this.authUser.id,channel_id:t.id}).subscribe(t=>{this.subscribedToChannel="Subscribed"===t.status,this.subscribersCount=t.subscribers_count,this.channelService.getUserChannelSubscriptions({user_id:this.authUser.id}).subscribe(t=>{this.subject.setUserSubscriptions(t)})})}saveChannelDescription(){console.log(this.aboutForm.value),this.descriptionUpdated=!0,this.channelService.saveDescription(this.aboutForm.value).subscribe(t=>{this.channelUser=t})}}return t.\u0275fac=function(n){return new(n||t)(s.Rb(g.a),s.Rb(d.a),s.Rb(c.d),s.Rb(p),s.Rb(h.a),s.Rb(c.a),s.Rb(o.c),s.Rb(f.a),s.Rb(b.a),s.Rb(m.a),s.Rb(r.b))},t.\u0275cmp=s.Lb({type:t,selectors:[["app-show-channel"]],decls:4,vars:2,consts:[[1,"profile-list"],[4,"ngIf"],["class","channel-not-found",4,"ngIf"],[1,"profile-block"],[3,"hidden",4,"ngIf"],["for","cover-image-input"],["id","cover-image",3,"src"],[1,"sub-block"],[1,"d-flex","align-items-center"],["for","profile-image-input"],["class","avatar list-img",3,"src",4,"ngIf"],["class","avatar","id","profile-image",3,"src",4,"ngIf"],[1,"main-text-1"],[1,"main-text-4"],["class","d-flex align-items-center",4,"ngIf"],[1,"watchlist","pWatchlist"],[1,"profile-list","user-profile-block"],["id","profileList","role","tablist",1,"nav","nav-tabs"],["class","nav-item",4,"ngFor","ngForOf"],[3,"formGroup"],[1,"watchlist-search"],["placeholder","Search","formControlName","search",1,"watchlist-input",3,"keyup.enter"],[1,"fas","fa-search"],[3,"hidden"],["type","file","id","cover-image-input",3,"change"],[3,"imageChanedEvent","autoCrop","viewMode","imageCropped"],[1,"avatar","list-img",3,"src"],["id","profile-image",1,"avatar",3,"src"],["type","file","id","profile-image-input",3,"change"],[3,"imageChanedEvent","aspectRatio","viewMode","resizeToWidth","imageCropped"],[1,"sub-bell","fas","fa-bell"],["class","subscribe-btn",3,"click",4,"ngIf"],["class","subscribe-btn subscribed",3,"click",4,"ngIf"],[1,"subscribe-btn",3,"click"],[1,"subscribe-btn","subscribed",3,"click"],[1,"nav-item"],["data-toggle","tab","role","tab","aria-controls","pWatch","aria-selected","true",1,"nav-link",3,"id","href","click"],[4,"ngFor","ngForOf"],[1,"trending-text"],[3,"options"],["carouselSlide",""],[1,"item","main-carousel-item",3,"click"],["class","main-item-img",3,"src",4,"ngIf"],["class","live-now",4,"ngIf"],[1,"main-item-block"],["class","avatar",3,"src",4,"ngIf"],[1,"main-text-2"],[1,"main-text-3"],[1,"main-item-img",3,"src"],[1,"live-now"],[1,"avatar",3,"src"],["class","main-item-img","src","assets/img/video-thumbnail-default.png",4,"ngIf"],["src","assets/img/video-thumbnail-default.png",1,"main-item-img"],[1,"playlist-tab"],[1,"btn","new-playlist",3,"click"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"img-info"],["src","assets/img/item-3.png","alt",""],[1,"info"],[1,"material-icons"],[1,"about-tab"],[1,"date"],[1,"btn"],[1,"description"],[1,"save"],[1,"channel-not-found"]],template:function(t,n){1&t&&(s.Xb(0,"div",0),s.Sb(1,"app-categories"),s.Oc(2,K,29,14,"ng-container",1),s.Oc(3,Z,3,0,"div",2),s.Wb()),2&t&&(s.Cb(2),s.tc("ngIf",n.channelUser),s.Cb(1),s.tc("ngIf",!n.channelUser))},directives:[C.a,i.m,i.l,o.v,o.m,o.g,o.b,o.l,o.f,O.a,P.a,P.c,v.a],pipes:[i.e],styles:[".profile-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%}.subscribed[_ngcontent-%COMP%]{background-color:#d6d6d6!important}#channel-about-form[_ngcontent-%COMP%]{width:50%}#channel-about-form[_ngcontent-%COMP%]   #description[_ngcontent-%COMP%], #channel-about-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}#channel-about-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{background:#fff 0 0 no-repeat padding-box;box-shadow:0 0 6px rgba(0,0,0,.06);border:none;resize:none;height:200px}#channel-about-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus{border:none;outline:none;box-shadow:0 0 6px #18b587}#channel-about-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:88px;height:36px;background:#f53c6f;font-family:Muli-Light;font-size:16px;color:#fff!important;display:flex;justify-content:center;align-items:center;margin-left:16px;margin-right:16px;cursor:pointer;float:right}.playlist-tab[_ngcontent-%COMP%]   .new-playlist[_ngcontent-%COMP%]{background:#18b587;border-radius:0;color:#fff;padding:8px 24px}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{display:table;margin:24px 0;width:100%}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{display:table-row}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   .td[_ngcontent-%COMP%]{border-bottom:0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{cursor:pointer}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{display:table-cell;vertical-align:middle;color:#545454;font-family:Muli-Bold;font-size:16px;padding:12px 0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child   .material-icons[_ngcontent-%COMP%]{margin:0}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{margin-right:12px;vertical-align:middle;cursor:pointer}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]{display:flex}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:144px}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-left:24px}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:16px;font-family:Muli-Bold}.playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .playlist-tab[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   .img-info[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{max-width:240px;font-size:12px;font-weight:400}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:16px;color:#18b587;font-family:Muli-Bold}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{margin-top:16px;display:flex;align-items:center}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;color:#545454;font-family:Muli-Bold}.about-tab[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:24px;background:#18b587;color:#fff;padding:4px 18px;border-radius:0}.about-tab[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{margin-top:24px;padding:24px;background:#f4f4f4;color:#545454;font-size:16px}.about-tab[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%]{margin-top:24px;background:#c9c9c9;color:#545454;padding:4px 18px;border-radius:0}.about-tab[_ngcontent-%COMP%]   .save.active[_ngcontent-%COMP%]{background:#18b587;color:#fff}"]}),t})();var nt=e("wd/R"),et=e("7dP1");function it(t,n){if(1&t&&s.Sb(0,"img",11),2&t){const t=s.nc().$implicit,n=s.nc(2);s.tc("src",n.apiUrl+"uploads/avatars/"+t.avatar,s.Jc)}}function ct(t,n){1&t&&s.Sb(0,"img",11),2&t&&s.tc("src","assets/img/default-user.png",s.Jc)}function at(t,n){if(1&t&&(s.Xb(0,"li",2),s.Xb(1,"div",3),s.Oc(2,it,1,1,"img",4),s.Oc(3,ct,1,1,"img",4),s.Wb(),s.Xb(4,"div",5),s.Xb(5,"p",6),s.Qc(6),s.Wb(),s.Xb(7,"div",7),s.Xb(8,"span",8),s.Qc(9,"17k watching"),s.Wb(),s.Xb(10,"span",9),s.Qc(11,"."),s.Wb(),s.Xb(12,"span",10),s.Qc(13,"250 video"),s.Wb(),s.Wb(),s.Xb(14,"p"),s.Qc(15,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed sda,sasddswd"),s.Wb(),s.Wb(),s.Wb()),2&t){const t=n.$implicit;s.Cb(2),s.tc("ngIf",t.avatar),s.Cb(1),s.tc("ngIf",!t.avatar),s.Cb(3),s.Rc(t.name)}}function ot(t,n){if(1&t&&(s.Xb(0,"ul"),s.Oc(1,at,16,3,"li",1),s.Wb()),2&t){const t=s.nc();s.Cb(1),s.tc("ngForOf",t.userChannels.subscriptions)}}const st=[{path:"show",component:tt},{path:"subscriptions",component:(()=>{class t{constructor(t,n,e){this.channelsService=t,this.getAuthUser=n,this.auth=e,this.apiUrl=a.b,this.authUser=this.getAuthUser.transform()}ngOnInit(){this.channelsService.getSubscriptions({user_id:this.authUser.id}).subscribe(t=>{this.userChannels=t})}getUploadDateTime(t){return nt(t).format("MMM DD, YYYY")}}return t.\u0275fac=function(n){return new(n||t)(s.Rb(f.a),s.Rb(d.a),s.Rb(et.a))},t.\u0275cmp=s.Lb({type:t,selectors:[["app-show-subscriptions"]],decls:1,vars:1,consts:[[4,"ngIf"],["class","channel-item",4,"ngFor","ngForOf"],[1,"channel-item"],[1,"thumbnail"],["class","avatar",3,"src",4,"ngIf"],[1,"info"],[1,"name"],[1,"shortened-details"],[1,"watchers-count"],[1,"dot"],[1,"videos-count"],[1,"avatar",3,"src"]],template:function(t,n){1&t&&s.Oc(0,ot,2,1,"ul",0),2&t&&s.tc("ngIf",n.userChannels)},directives:[i.m,i.l],styles:[".channel-item[_ngcontent-%COMP%]{display:flex;width:936px;margin-bottom:32px}.channel-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:240px!important;height:240px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:4px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#545454;font-size:24px;font-family:Muli-Bold}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin-left:26px;margin-top:-3px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-family:Muli-Light}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%], .channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%]{font-size:14px;color:#818181}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%]{margin-left:26px}"]}),t})()}];let rt=(()=>{class t{}return t.\u0275mod=s.Pb({type:t}),t.\u0275inj=s.Ob({factory:function(n){return new(n||t)},imports:[[c.e.forChild(st)],c.e]}),t})();var bt=e("PCNd");let lt=(()=>{class t{}return t.\u0275mod=s.Pb({type:t}),t.\u0275inj=s.Ob({factory:function(n){return new(n||t)},imports:[[i.c,rt,bt.a,O.b]]}),t})()}}]);