function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,i){return n&&_defineProperties(e.prototype,n),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"55j5":function(e,n,i){"use strict";i.r(n),i.d(n,"ChannelsModule",(function(){return se}));var t,c=i("ofXK"),a=i("tyNb"),s=i("9xOu"),r=i("3Pt+"),o=i("fXoL"),b=i("FFj9"),u=i("Rnal"),l=i("tk/3"),h=((t=function(){function e(n){_classCallCheck(this,e),this.httpClient=n}return _createClass(e,[{key:"changeProfileImage",value:function(e){return this.httpClient.post(s.b+"users/change-profile-image",e)}},{key:"changeCoverImage",value:function(e){return this.httpClient.post(s.b+"users/change-cover-image",e)}},{key:"getUserInfo",value:function(e){return this.httpClient.get(s.b+"users/get-user-info",{params:e})}}]),e}()).\u0275fac=function(e){return new(e||t)(o.fc(l.b))},t.\u0275prov=o.Nb({token:t,factory:t.\u0275fac,providedIn:"root"}),t),f=i("1m4N"),d=i("HHsJ"),g=i("wDcp"),v=i("hKYS"),p=i("kUS0"),m=i("bhfF");function C(e,n){if(1&e){var i=o.Yb();o.Xb(0,"div",23),o.Xb(1,"input",24),o.jc("change",(function(e){return o.Hc(i),o.nc(2).coverChangeEvent(e)})),o.Wb(),o.Xb(2,"ngx-photo-editor",25),o.jc("imageCropped",(function(e){return o.Hc(i),o.nc(2).coverCropped(e)})),o.Wb(),o.Wb()}if(2&e){var t=o.nc(2);o.tc("hidden",!0),o.Cb(2),o.tc("imageChanedEvent",t.coverChangedEvent)("autoCrop",!1)("viewMode",3)}}function U(e,n){if(1&e&&o.Sb(0,"img",26),2&e){var i=o.nc(2);o.tc("src",i.apiUrl+"uploads/avatars/"+i.channelUser.avatar,o.Jc)}}function O(e,n){1&e&&o.Sb(0,"img",27),2&e&&o.tc("src","assets/img/default-user.png",o.Jc)}function k(e,n){if(1&e){var i=o.Yb();o.Xb(0,"div",23),o.Xb(1,"input",28),o.jc("change",(function(e){return o.Hc(i),o.nc(2).profileChangeEvent(e)})),o.Wb(),o.Xb(2,"ngx-photo-editor",29),o.jc("imageCropped",(function(e){return o.Hc(i),o.nc(2).profileCropped(e)})),o.Wb(),o.Wb()}if(2&e){var t=o.nc(2);o.tc("hidden",!0),o.Cb(2),o.tc("imageChanedEvent",t.profileChangedEvent)("aspectRatio",4/3)("viewMode",1)("resizeToWidth",500)}}function W(e,n){if(1&e){var i=o.Yb();o.Xb(0,"a",33),o.jc("click",(function(){o.Hc(i);var e=o.nc(3);return e.subscribeToChannel(e.channelUser.channel)})),o.Qc(1,"Subscribe"),o.Wb()}}function X(e,n){if(1&e){var i=o.Yb();o.Xb(0,"a",34),o.jc("click",(function(){o.Hc(i);var e=o.nc(3);return e.subscribeToChannel(e.channelUser.channel)})),o.Qc(1,"Subscribed"),o.Wb()}}function _(e,n){if(1&e&&(o.Xb(0,"div",8),o.Sb(1,"i",30),o.Oc(2,W,2,0,"a",31),o.Oc(3,X,2,0,"a",32),o.Wb()),2&e){var i=o.nc(2);o.Cb(2),o.tc("ngIf",!i.subscribedToChannel),o.Cb(1),o.tc("ngIf",i.subscribedToChannel)}}function I(e,n){if(1&e){var i=o.Yb();o.Xb(0,"li",35),o.Xb(1,"a",36),o.jc("click",(function(){o.Hc(i);var e=n.$implicit;return o.nc(2).changeActiveTab(e)})),o.Qc(2),o.Wb(),o.Wb()}if(2&e){var t=n.$implicit,c=o.nc(2);o.Cb(1),o.Hb("active",t===c.activeTab),o.vc("id","",t.link,"-tab"),o.vc("href","#",t.link,"",o.Jc),o.Cb(1),o.Rc(t.name)}}function w(e,n){if(1&e&&o.Sb(0,"img",48),2&e){var i=o.nc(2).$implicit,t=o.nc(5);o.tc("src",t.apiUrl+"uploads/thumbnails/"+i.thumbnail,o.Jc)}}function S(e,n){1&e&&o.Sb(0,"img",48),2&e&&o.tc("src","assets/img/video-thumbnail-default.png",o.Jc)}function y(e,n){1&e&&(o.Xb(0,"span",49),o.Qc(1,"Live now"),o.Wb())}function P(e,n){if(1&e&&o.Sb(0,"img",50),2&e){var i=o.nc(4).$implicit,t=o.nc(3);o.tc("src",t.apiUrl+"uploads/avatars/"+i.avatar,o.Jc)}}function M(e,n){1&e&&o.Sb(0,"img",50),2&e&&o.tc("src","assets/img/default-user.png",o.Jc)}function V(e,n){if(1&e){var i=o.Yb();o.Xb(0,"div",41),o.jc("click",(function(){o.Hc(i);var e=o.nc().$implicit,n=o.nc(2).$implicit;return o.nc(3).openVideoPage(e,n.username)})),o.Oc(1,w,1,1,"img",42),o.Oc(2,S,1,1,"img",42),o.Oc(3,y,2,0,"span",43),o.Xb(4,"div",44),o.Oc(5,P,1,1,"img",45),o.Oc(6,M,1,1,"img",45),o.Xb(7,"div"),o.Xb(8,"p",12),o.Qc(9),o.Wb(),o.Xb(10,"p",46),o.Qc(11),o.Wb(),o.Xb(12,"p",47),o.Qc(13,"17k watching"),o.Wb(),o.Wb(),o.Wb(),o.Wb()}if(2&e){var t=o.nc().$implicit,c=o.nc(2).$implicit;o.Cb(1),o.tc("ngIf",t.thumbnail),o.Cb(1),o.tc("ngIf",!t.thumbnail),o.Cb(1),o.tc("ngIf","live"===t.status),o.Cb(2),o.tc("ngIf",c.avatar),o.Cb(1),o.tc("ngIf",!c.avatar),o.Cb(3),o.Rc(t.name),o.Cb(2),o.Rc(c.full_name)}}function T(e,n){1&e&&(o.Vb(0),o.Oc(1,V,14,7,"ng-template",40),o.Ub())}function R(e,n){if(1&e&&(o.Vb(0),o.Xb(1,"p",38),o.Qc(2),o.Wb(),o.Xb(3,"owl-carousel-o",39),o.Oc(4,T,2,0,"ng-container",37),o.Wb(),o.Ub()),2&e){var i=o.nc().$implicit,t=o.nc(3);o.Cb(2),o.Rc(i.full_name),o.Cb(1),o.tc("options",t.owlOptions),o.Cb(1),o.tc("ngForOf",i.videos)}}function x(e,n){if(1&e&&(o.Vb(0),o.Oc(1,R,5,3,"ng-container",1),o.Ub()),2&e){var i=n.$implicit;o.Cb(1),o.tc("ngIf",i.videos.length>0)}}function F(e,n){if(1&e&&(o.Vb(0),o.Oc(1,x,2,1,"ng-container",37),o.Ub()),2&e){var i=o.nc(2);o.Cb(1),o.tc("ngForOf",i.watchlistVideos)}}function j(e,n){1&e&&o.Sb(0,"img",52)}function Q(e,n){if(1&e&&o.Sb(0,"img",48),2&e){var i=o.nc(2).$implicit,t=o.nc(3);o.uc("src",t.apiUrl+"uploads/thumbnails/"+i.thumbnail,o.Jc)}}function J(e,n){if(1&e&&o.Sb(0,"img",50),2&e){var i=o.nc(5);o.tc("src",i.apiUrl+"uploads/avatars/"+i.authUser.avatar,o.Jc)}}function $(e,n){1&e&&o.Sb(0,"img",50),2&e&&o.tc("src","assets/img/default-user.png",o.Jc)}function E(e,n){if(1&e){var i=o.Yb();o.Xb(0,"div",41),o.jc("click",(function(){o.Hc(i);var e=o.nc().$implicit,n=o.nc(3);return n.openVideoPage(e,n.authUser.username)})),o.Oc(1,j,1,0,"img",51),o.Oc(2,Q,1,1,"img",42),o.Xb(3,"div",44),o.Oc(4,J,1,1,"img",45),o.Oc(5,$,1,1,"img",45),o.Xb(6,"div"),o.Xb(7,"p",12),o.Qc(8),o.Wb(),o.Xb(9,"p",46),o.Qc(10),o.Wb(),o.Xb(11,"p",47),o.Qc(12,"17k watching"),o.Wb(),o.Wb(),o.Wb(),o.Wb()}if(2&e){var t=o.nc().$implicit,c=o.nc(3);o.Cb(1),o.tc("ngIf",!t.thumbnail||"undefined"===t.thumbnail),o.Cb(1),o.tc("ngIf",t.thumbnail&&"undefined"!==t.thumbnail),o.Cb(2),o.tc("ngIf",c.authUser.avatar),o.Cb(1),o.tc("ngIf",!c.authUser.avatar),o.Cb(3),o.Rc(t.name),o.Cb(2),o.Rc(c.authUser.full_name)}}function H(e,n){1&e&&(o.Vb(0),o.Oc(1,E,13,6,"ng-template",40),o.Ub())}function Y(e,n){if(1&e&&(o.Vb(0),o.Xb(1,"p",38),o.Qc(2,"Recent videos"),o.Wb(),o.Xb(3,"owl-carousel-o"),o.Oc(4,H,2,0,"ng-container",37),o.Wb(),o.Ub()),2&e){var i=o.nc(2);o.Cb(4),o.tc("ngForOf",i.channelUser.videos)}}function A(e,n){if(1&e){var i=o.Yb();o.Vb(0),o.Xb(1,"div",3),o.Oc(2,C,3,4,"div",4),o.Xb(3,"label",5),o.Sb(4,"img",6),o.Wb(),o.Wb(),o.Xb(5,"div",7),o.Xb(6,"div",8),o.Xb(7,"label",9),o.Oc(8,U,1,1,"img",10),o.Oc(9,O,1,1,"img",11),o.Wb(),o.Oc(10,k,3,5,"div",4),o.Xb(11,"div"),o.Xb(12,"p",12),o.Qc(13),o.Wb(),o.Xb(14,"p",13),o.Qc(15),o.Wb(),o.Wb(),o.Wb(),o.Oc(16,_,4,2,"div",14),o.Wb(),o.Xb(17,"div",15),o.Xb(18,"div",16),o.Xb(19,"ul",17),o.Oc(20,I,3,5,"li",18),o.Wb(),o.Xb(21,"form",19),o.Xb(22,"div",20),o.Xb(23,"input",21),o.jc("keyup.enter",(function(){return o.Hc(i),o.nc().searchVideos()})),o.Wb(),o.Sb(24,"i",22),o.Wb(),o.Wb(),o.Wb(),o.Oc(25,F,2,1,"ng-container",1),o.Oc(26,Y,5,1,"ng-container",1),o.Wb(),o.Ub()}if(2&e){var t=o.nc();o.Cb(2),o.tc("ngIf",t.channelUser.username===t.authUser.username),o.Cb(2),o.tc("src",t.channelUser.cover?t.apiUrl+"uploads/covers/"+t.channelUser.cover:"assets/img/default-thumbnail.png",o.Jc),o.Cb(4),o.tc("ngIf",t.channelUser.avatar),o.Cb(1),o.tc("ngIf",!t.channelUser.avatar),o.Cb(1),o.tc("ngIf",t.channelUser.username===t.authUser.username),o.Cb(3),o.Rc(t.channelUser.channel.name),o.Cb(2),o.Sc("",t.subscribersCount+" subscriber"+(1===t.subscribersCount?"":"s")," "),o.Cb(1),o.tc("ngIf",t.channelUser.username!==t.authUser.username),o.Cb(4),o.tc("ngForOf",t.allTabs),o.Cb(1),o.tc("formGroup",t.searchVideosForm),o.Cb(4),o.tc("ngIf","Watchlist"===t.activeTab.name),o.Cb(1),o.tc("ngIf","Videos"===t.activeTab.name)}}function L(e,n){1&e&&(o.Xb(0,"div",53),o.Xb(1,"p"),o.Qc(2,"Channel with such name is not found"),o.Wb(),o.Wb())}var D,B=((D=function(){function e(n,i,t,c,a,o,b,u,l){_classCallCheck(this,e),this.videoService=n,this.getAuthUser=i,this.router=t,this.usersService=c,this.base64ToFile=a,this.route=o,this.fb=b,this.channelService=u,this.subject=l,this.owlOptions=s.d,this.watchlistVideos=[],this.activeTab=s.g[0],this.allTabs=s.g,this.apiUrl=s.b,this.subscribedToChannel=!1,this.authUser=this.getAuthUser.transform(),this.passedUsername=this.route.snapshot.queryParams.username,this.searchVideosForm=this.fb.group({search:["",r.t.required]})}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.passedUsername&&this.usersService.getUserInfo({username:this.passedUsername}).subscribe((function(n){n&&(e.channelUser=n,e.checkChannelSubscription())})),this.videoService.getUserVideos({user_id:this.authUser.id}).subscribe((function(n){e.currentUser=n})),this.videoService.getVideosByAuthor({}).subscribe((function(n){e.watchlistVideos=n}))}},{key:"changeActiveTab",value:function(e){this.activeTab=e,this.searchVideos()}},{key:"checkChannelSubscription",value:function(){var e=this;this.channelService.checkChannelSubscription({user_id:this.authUser.id,channel_id:this.channelUser.channel.id}).subscribe((function(n){e.subscribedToChannel="Subscribed"===n.status,e.subscribersCount=n.subscribers_count}))}},{key:"openVideoPage",value:function(e,n){var i,t;console.log(n),"live"===e.status?(i="user/video/watch",t={session:e.session_name,publisher:n}):(i="videos/play",t={id:e.id}),this.router.navigate([i],{queryParams:t})}},{key:"coverChangeEvent",value:function(e){this.coverChangedEvent=e}},{key:"profileChangeEvent",value:function(e){this.profileChangedEvent=e}},{key:"profileCropped",value:function(e){var n=this;this.profileBase64=e.base64;var i="profile_".concat(Date.now(),".jpg"),t=new FormData;t.append("avatar_file",this.base64ToFile.transform(e.base64),i),t.append("avatar",i),t.append("id",this.authUser.id),this.usersService.changeProfileImage(t).subscribe((function(e){localStorage.setItem("token",e.token),n.authUser=n.getAuthUser.transform(),n.channelUser=n.authUser}))}},{key:"coverCropped",value:function(e){var n=this;this.coverBase64=e.base64;var i=new FormData,t="cover_".concat(Date.now(),".jpg");i.append("cover_file",this.base64ToFile.transform(e.base64),t),i.append("cover",t),i.append("id",this.authUser.id),this.usersService.changeCoverImage(i).subscribe((function(e){localStorage.setItem("token",e.token),n.authUser=n.getAuthUser.transform(),n.channelUser=n.authUser}))}},{key:"searchVideos",value:function(){var e=this.searchVideosForm.value;e.search&&("Watchlist"===this.activeTab.name?this.searchInVideosByAuthor(e):"Videos"===this.activeTab.name&&this.searchInUserVideos(e))}},{key:"searchInVideosByAuthor",value:function(e){var n=this;this.videoService.searchInVideosByAuthor(e).subscribe((function(e){n.watchlistVideos=e}))}},{key:"searchInUserVideos",value:function(e){var n=this;this.currentUser.videos=[],this.videoService.searchInUserVideos(Object.assign({user_id:this.authUser.id},e)).subscribe((function(e){n.currentUser.videos=e.videos}))}},{key:"subscribeToChannel",value:function(e){var n=this;console.log(e),this.channelService.subscribeToChannel({user_id:this.authUser.id,channel_id:e.id}).subscribe((function(e){n.subscribedToChannel="Subscribed"===e.status,n.subscribersCount=e.subscribers_count,n.channelService.getUserChannelSubscriptions({user_id:n.authUser.id}).subscribe((function(e){n.subject.setUserSubscriptions(e)}))}))}}]),e}()).\u0275fac=function(e){return new(e||D)(o.Rb(b.a),o.Rb(u.a),o.Rb(a.d),o.Rb(h),o.Rb(f.a),o.Rb(a.a),o.Rb(r.c),o.Rb(d.a),o.Rb(g.a))},D.\u0275cmp=o.Lb({type:D,selectors:[["app-show-channel"]],decls:4,vars:2,consts:[[1,"profile-list"],[4,"ngIf"],["class","channel-not-found",4,"ngIf"],[1,"profile-block"],[3,"hidden",4,"ngIf"],["for","cover-image-input"],["id","cover-image",3,"src"],[1,"sub-block"],[1,"d-flex","align-items-center"],["for","profile-image-input"],["class","avatar list-img",3,"src",4,"ngIf"],["class","avatar","id","profile-image",3,"src",4,"ngIf"],[1,"main-text-1"],[1,"main-text-4"],["class","d-flex align-items-center",4,"ngIf"],[1,"watchlist","pWatchlist"],[1,"profile-list","user-profile-block"],["id","profileList","role","tablist",1,"nav","nav-tabs"],["class","nav-item",4,"ngFor","ngForOf"],[3,"formGroup"],[1,"watchlist-search"],["placeholder","Search","formControlName","search",1,"watchlist-input",3,"keyup.enter"],[1,"fas","fa-search"],[3,"hidden"],["type","file","id","cover-image-input",3,"change"],[3,"imageChanedEvent","autoCrop","viewMode","imageCropped"],[1,"avatar","list-img",3,"src"],["id","profile-image",1,"avatar",3,"src"],["type","file","id","profile-image-input",3,"change"],[3,"imageChanedEvent","aspectRatio","viewMode","resizeToWidth","imageCropped"],[1,"sub-bell","fas","fa-bell"],["class","subscribe-btn",3,"click",4,"ngIf"],["class","subscribe-btn subscribed",3,"click",4,"ngIf"],[1,"subscribe-btn",3,"click"],[1,"subscribe-btn","subscribed",3,"click"],[1,"nav-item"],["data-toggle","tab","role","tab","aria-controls","pWatch","aria-selected","true",1,"nav-link",3,"id","href","click"],[4,"ngFor","ngForOf"],[1,"trending-text"],[3,"options"],["carouselSlide",""],[1,"item","main-carousel-item",3,"click"],["class","main-item-img",3,"src",4,"ngIf"],["class","live-now",4,"ngIf"],[1,"main-item-block"],["class","avatar",3,"src",4,"ngIf"],[1,"main-text-2"],[1,"main-text-3"],[1,"main-item-img",3,"src"],[1,"live-now"],[1,"avatar",3,"src"],["class","main-item-img","src","assets/img/video-thumbnail-default.png",4,"ngIf"],["src","assets/img/video-thumbnail-default.png",1,"main-item-img"],[1,"channel-not-found"]],template:function(e,n){1&e&&(o.Xb(0,"div",0),o.Sb(1,"app-categories"),o.Oc(2,A,27,12,"ng-container",1),o.Oc(3,L,3,0,"div",2),o.Wb()),2&e&&(o.Cb(2),o.tc("ngIf",n.channelUser),o.Cb(1),o.tc("ngIf",!n.channelUser))},directives:[v.a,c.m,c.l,r.v,r.m,r.g,r.b,r.l,r.f,p.a,m.a,m.c],styles:[".profile-block[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:100%}.subscribed[_ngcontent-%COMP%]{background-color:#d6d6d6!important}"]}),D),z=i("wd/R"),N=i("7dP1");function q(e,n){if(1&e&&o.Sb(0,"img",11),2&e){var i=o.nc().$implicit,t=o.nc(2);o.tc("src",t.apiUrl+"uploads/avatars/"+i.avatar,o.Jc)}}function G(e,n){1&e&&o.Sb(0,"img",11),2&e&&o.tc("src","assets/img/default-user.png",o.Jc)}function K(e,n){if(1&e&&(o.Xb(0,"li",2),o.Xb(1,"div",3),o.Oc(2,q,1,1,"img",4),o.Oc(3,G,1,1,"img",4),o.Wb(),o.Xb(4,"div",5),o.Xb(5,"p",6),o.Qc(6),o.Wb(),o.Xb(7,"div",7),o.Xb(8,"span",8),o.Qc(9,"17k watching"),o.Wb(),o.Xb(10,"span",9),o.Qc(11,"."),o.Wb(),o.Xb(12,"span",10),o.Qc(13,"250 video"),o.Wb(),o.Wb(),o.Xb(14,"p"),o.Qc(15,"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed sda,sasddswd"),o.Wb(),o.Wb(),o.Wb()),2&e){var i=n.$implicit;o.Cb(2),o.tc("ngIf",i.avatar),o.Cb(1),o.tc("ngIf",!i.avatar),o.Cb(3),o.Rc(i.name)}}function Z(e,n){if(1&e&&(o.Xb(0,"ul"),o.Oc(1,K,16,3,"li",1),o.Wb()),2&e){var i=o.nc();o.Cb(1),o.tc("ngForOf",i.userChannels.subscriptions)}}var ee,ne,ie,te=[{path:"show",component:B},{path:"subscriptions",component:(ee=function(){function e(n,i,t){_classCallCheck(this,e),this.channelsService=n,this.getAuthUser=i,this.auth=t,this.apiUrl=s.b,this.authUser=this.getAuthUser.transform()}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;this.channelsService.getSubscriptions({user_id:this.authUser.id}).subscribe((function(n){e.userChannels=n}))}},{key:"getUploadDateTime",value:function(e){return z(e).format("MMM DD, YYYY")}}]),e}(),ee.\u0275fac=function(e){return new(e||ee)(o.Rb(d.a),o.Rb(u.a),o.Rb(N.a))},ee.\u0275cmp=o.Lb({type:ee,selectors:[["app-show-subscriptions"]],decls:1,vars:1,consts:[[4,"ngIf"],["class","channel-item",4,"ngFor","ngForOf"],[1,"channel-item"],[1,"thumbnail"],["class","avatar",3,"src",4,"ngIf"],[1,"info"],[1,"name"],[1,"shortened-details"],[1,"watchers-count"],[1,"dot"],[1,"videos-count"],[1,"avatar",3,"src"]],template:function(e,n){1&e&&o.Oc(0,Z,2,1,"ul",0),2&e&&o.tc("ngIf",n.userChannels)},directives:[c.m,c.l],styles:[".channel-item[_ngcontent-%COMP%]{display:flex;width:936px;margin-bottom:32px}.channel-item[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]{width:240px!important;height:240px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{margin-top:4px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{color:#545454;font-size:24px;font-family:Muli-Bold}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin-left:26px;margin-top:-3px}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px;font-family:Muli-Light}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%], .channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%]{font-size:14px;color:#818181}.channel-item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .videos-count[_ngcontent-%COMP%]{margin-left:26px}"]}),ee)}],ce=((ne=function e(){_classCallCheck(this,e)}).\u0275mod=o.Pb({type:ne}),ne.\u0275inj=o.Ob({factory:function(e){return new(e||ne)},imports:[[a.e.forChild(te)],a.e]}),ne),ae=i("PCNd"),se=((ie=function e(){_classCallCheck(this,e)}).\u0275mod=o.Pb({type:ie}),ie.\u0275inj=o.Ob({factory:function(e){return new(e||ie)},imports:[[c.c,ce,ae.a,p.b]]}),ie)}}]);