(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{kez3:function(n,t,e){"use strict";e.r(t),e.d(t,"PlaylistsModule",(function(){return A}));var i=e("ofXK"),o=e("tyNb"),c=e("0IaG"),a=e("9xOu"),l=e("fXoL"),s=e("FFj9"),g=e("CPAS"),r=e("Rnal"),d=e("5al9");function p(n,t){1&n&&l.Sb(0,"img",30)}function b(n,t){if(1&n&&l.Sb(0,"img",31),2&n){const n=l.nc().$implicit,t=l.nc(2);l.uc("src",t.apiUrl+"uploads/thumbnails/"+n.thumbnail,l.Jc)}}function C(n,t){if(1&n){const n=l.Yb();l.Xb(0,"div",17),l.jc("click",(function(){l.Hc(n);const e=t.$implicit;return l.nc(2).selectVideo(e.id)})),l.Xb(1,"div",18),l.Xb(2,"div",19),l.Oc(3,p,1,0,"img",20),l.Oc(4,b,1,1,"img",21),l.Wb(),l.Xb(5,"div",22),l.Xb(6,"div",2),l.Xb(7,"h4",23),l.Qc(8),l.Wb(),l.Wb(),l.Xb(9,"div",24),l.Xb(10,"span",25),l.Qc(11),l.Wb(),l.Xb(12,"span",26),l.Qc(13,"."),l.Wb(),l.Xb(14,"span",27),l.Qc(15,"17k watching"),l.Wb(),l.Xb(16,"span",26),l.Qc(17,"."),l.Wb(),l.Xb(18,"span",28),l.Qc(19),l.oc(20,"date"),l.Wb(),l.Wb(),l.Xb(21,"p",29),l.Qc(22),l.Wb(),l.Wb(),l.Wb(),l.Wb()}if(2&n){const n=t.$implicit,e=l.nc(2);l.Hb("selected",e.checkIfVideoSelected(n.id)),l.Cb(3),l.tc("ngIf",!n.thumbnail||"undefined"===n.thumbnail),l.Cb(1),l.tc("ngIf",n.thumbnail&&"undefined"!==n.thumbnail),l.Cb(4),l.Rc(n.name),l.Cb(3),l.Rc(n.channel.name),l.Cb(8),l.Rc(l.qc(20,8,n.created_at,"d MMM, yyyy")),l.Cb(3),l.Rc(n.description)}}function O(n,t){if(1&n){const n=l.Yb();l.Xb(0,"div",13),l.Xb(1,"div",14),l.Xb(2,"label"),l.Qc(3,"Search video"),l.Wb(),l.Xb(4,"app-search-videos-form",15),l.jc("search",(function(t){return l.Hc(n),l.nc().searchVideos(t)})),l.Wb(),l.Wb(),l.Oc(5,C,23,11,"div",16),l.Wb()}if(2&n){const n=l.nc();l.Cb(5),l.tc("ngForOf",n.searchedVideos)}}function P(n,t){1&n&&(l.Xb(0,"div",32),l.Xb(1,"div",14),l.Xb(2,"div",33),l.Sb(3,"input",34),l.Wb(),l.Wb(),l.Wb())}function M(n,t){1&n&&l.Sb(0,"img",30)}function _(n,t){if(1&n&&l.Sb(0,"img",31),2&n){const n=l.nc().$implicit,t=l.nc(2);l.uc("src",t.apiUrl+"uploads/thumbnails/"+n.thumbnail,l.Jc)}}function f(n,t){if(1&n){const n=l.Yb();l.Xb(0,"div",17),l.jc("click",(function(){l.Hc(n);const e=t.$implicit;return l.nc(2).selectVideo(e.id)})),l.Xb(1,"div",18),l.Xb(2,"div",19),l.Oc(3,M,1,0,"img",20),l.Oc(4,_,1,1,"img",21),l.Wb(),l.Xb(5,"div",22),l.Xb(6,"div",2),l.Xb(7,"h4",23),l.Qc(8),l.Wb(),l.Wb(),l.Xb(9,"div",24),l.Xb(10,"span",25),l.Qc(11),l.Wb(),l.Xb(12,"span",26),l.Qc(13,"."),l.Wb(),l.Xb(14,"span",27),l.Qc(15,"17k watching"),l.Wb(),l.Xb(16,"span",26),l.Qc(17,"."),l.Wb(),l.Xb(18,"span",28),l.Qc(19),l.oc(20,"date"),l.Wb(),l.Wb(),l.Xb(21,"p",29),l.Qc(22),l.Wb(),l.Wb(),l.Wb(),l.Wb()}if(2&n){const n=t.$implicit,e=l.nc(2);l.Hb("selected",e.checkIfVideoSelected(n.id)),l.Cb(3),l.tc("ngIf",!n.thumbnail||"undefined"===n.thumbnail),l.Cb(1),l.tc("ngIf",n.thumbnail&&"undefined"!==n.thumbnail),l.Cb(4),l.Rc(n.name),l.Cb(3),l.Rc(n.channel.name),l.Cb(8),l.Rc(l.qc(20,8,n.created_at,"d MMM, yyyy")),l.Cb(3),l.Rc(n.description)}}function m(n,t){if(1&n&&(l.Xb(0,"div",35),l.Oc(1,f,23,11,"div",16),l.Wb()),2&n){const n=l.nc();l.Cb(1),l.tc("ngForOf",n.currentUser.videos)}}let u=(()=>{class n{constructor(n,t,e,i,o){this.modal=n,this.videoService=t,this.playlistsService=e,this.getAuthUser=i,this.data=o,this.activeTab="yours",this.apiUrl=a.b,this.selectedVideos=[],this.searchedVideos=[],this.playlist=o.playlist,this.authUser=this.getAuthUser.transform()}ngOnInit(){this.videoService.getUserVideos({user_id:this.authUser.id}).subscribe(n=>{this.currentUser=n})}selectVideo(n){this.selectedVideos.includes(n)?this.selectedVideos=this.selectedVideos.filter(t=>t!==n):this.selectedVideos.push(n)}checkIfVideoSelected(n){return this.selectedVideos.find(t=>t===n)}changeTab(n){this.activeTab=n}searchVideos(n){this.videoService.searchInAllVideos(n).subscribe(n=>{this.searchedVideos=n})}addVideos(){const n={playlist_id:this.playlist.id,video_ids:JSON.stringify(this.selectedVideos)};this.playlistsService.addVideosToPlaylist(n).subscribe(n=>{this.modal.close()})}cancel(){this.modal.close()}}return n.\u0275fac=function(t){return new(t||n)(l.Rb(c.d),l.Rb(s.a),l.Rb(g.a),l.Rb(r.a),l.Rb(c.a))},n.\u0275cmp=l.Lb({type:n,selectors:[["app-add-video-to-playlist-dialog"]],decls:25,vars:9,consts:[[1,"add-video-playlist-modal"],[1,"content-wrap"],[1,"title"],[1,"content"],[1,"tabList"],[1,"nav-link",3,"click"],[1,"tab-items"],["class","tab1",4,"ngIf"],["class","tab2",4,"ngIf"],["class","tab3",4,"ngIf"],[1,"btn-wrap"],[1,"btn","cancel",3,"click"],[1,"btn","all-videos",3,"click"],[1,"tab1"],[1,"input-wrap"],[3,"search"],["class","playlist-item",3,"selected","click",4,"ngFor","ngForOf"],[1,"playlist-item",3,"click"],[1,"video-container"],[1,"img"],["class","main-item-img","src","assets/img/video-thumbnail-default.png",4,"ngIf"],["class","main-item-img",3,"src",4,"ngIf"],[1,"details"],[1,""],[1,"shortened-details"],[1,"channel-name"],[1,"dot"],[1,"watchers-count"],[1,"upload-time"],[1,"shortened-description"],["src","assets/img/video-thumbnail-default.png",1,"main-item-img"],[1,"main-item-img",3,"src"],[1,"tab2"],[1,"input"],["type","text","placeholder","Paste URL here"],[1,"tab3"]],template:function(n,t){1&n&&(l.Xb(0,"div",0),l.Xb(1,"div",1),l.Xb(2,"h1",2),l.Qc(3,"Add videos to playlist"),l.Wb(),l.Xb(4,"div",3),l.Xb(5,"div",4),l.Xb(6,"ul"),l.Xb(7,"li"),l.Xb(8,"a",5),l.jc("click",(function(){return t.changeTab("search")})),l.Qc(9,"Video search"),l.Wb(),l.Wb(),l.Xb(10,"li"),l.Xb(11,"a",5),l.jc("click",(function(){return t.changeTab("url")})),l.Qc(12,"URL"),l.Wb(),l.Wb(),l.Xb(13,"li"),l.Xb(14,"a",5),l.jc("click",(function(){return t.changeTab("yours")})),l.Qc(15,"Your videos"),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(16,"div",6),l.Oc(17,O,6,1,"div",7),l.Oc(18,P,4,0,"div",8),l.Oc(19,m,2,1,"div",9),l.Wb(),l.Wb(),l.Wb(),l.Xb(20,"div",10),l.Xb(21,"button",11),l.jc("click",(function(){return t.cancel()})),l.Qc(22,"Cancel"),l.Wb(),l.Xb(23,"button",12),l.jc("click",(function(){return t.addVideos()})),l.Qc(24,"Add videos"),l.Wb(),l.Wb(),l.Wb()),2&n&&(l.Cb(8),l.Hb("active","search"===t.activeTab),l.Cb(3),l.Hb("active",""===t.activeTab),l.Cb(3),l.Hb("active","yours"===t.activeTab),l.Cb(3),l.tc("ngIf","search"===t.activeTab),l.Cb(1),l.tc("ngIf","url"===t.activeTab),l.Cb(1),l.tc("ngIf","yours"===t.activeTab&&t.currentUser))},directives:[i.m,d.a,i.l],pipes:[i.e],styles:[".add-video-playlist-modal[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:550px;padding:32px;width:100%;max-width:890px;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);position:absolute;background:#fff;z-index:1001}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   h1.title[_ngcontent-%COMP%]{font-size:32px;color:#545454;font-family:Muli-Bold}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin-top:24px}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{color:#fff!important;font-size:12px;box-shadow:0 0 6px rgba(0,0,0,.06);font-family:Muli-Bold}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{min-width:126px;padding:6px 26px;background:transparent;color:#545454;text-align:center;transition:all .2s ease}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tabList[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover{background:#f53c6f;color:#fff}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tab-items[_ngcontent-%COMP%]{margin-top:24px;overflow:auto;max-height:323px}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tab-items[_ngcontent-%COMP%]::-webkit-scrollbar{width:5px}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tab-items[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#e3e3e3}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tab-items[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#cbcbcb}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .tab-items[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background:#555}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]{margin-bottom:30px;padding:5px;cursor:pointer}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]{display:flex}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{flex:0 0 200px}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:115px;-o-object-fit:cover;object-fit:cover;cursor:pointer}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{flex:1;margin-left:32px}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;text-transform:capitalize;font-family:Muli-Bold;color:#545454;font-size:16px}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .dotes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:40px;font-size:14px;background:transparent}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]{margin-top:4px;display:flex}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%]{font-family:Muli-Bold;color:#818181;font-size:14px}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin-left:16px;margin-top:-3px}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .upload-time[_ngcontent-%COMP%], .add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%]{font-size:14px;color:#818181;margin-left:16px}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-description[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:0;color:#545454}.add-video-playlist-modal[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]{border:1px solid #18b587}.add-video-playlist-modal[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-size:16px;color:#545454}.add-video-playlist-modal[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{position:relative;margin-top:8px}.add-video-playlist-modal[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input.search[_ngcontent-%COMP%]{max-width:400px}.add-video-playlist-modal[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input.search[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{position:absolute;top:50%;transform:translateY(-50%);right:16px;font-size:22px;color:#545454;cursor:pointer}.add-video-playlist-modal[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding:8px 16px;background:hsla(0,0%,50.6%,.13);color:#545454;border:0;outline:none}.add-video-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]{margin-top:40px;display:flex;justify-content:flex-end}.add-video-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{margin-left:24px;background:#18b587;color:#fff;font-size:16px;border-radius:0;padding:8px 24px;line-height:normal}.add-video-playlist-modal[_ngcontent-%COMP%]   .btn-wrap[_ngcontent-%COMP%]   .btn.cancel[_ngcontent-%COMP%]{background:#c9c9c9}"]}),n})();var y=e("S0M2");let h=(()=>{class n{constructor(n){this.dialogRef=n}ngOnInit(){}confirm(){this.dialogRef.close(!0)}cancel(){this.dialogRef.close(!1)}}return n.\u0275fac=function(t){return new(t||n)(l.Rb(c.d))},n.\u0275cmp=l.Lb({type:n,selectors:[["app-confirmation-dialog"]],decls:7,vars:0,consts:[[1,"actions"],[1,"confirm",3,"click"],[1,"cancel",3,"click"]],template:function(n,t){1&n&&(l.Xb(0,"span"),l.Qc(1,"Please confirm this action"),l.Wb(),l.Xb(2,"div",0),l.Xb(3,"button",1),l.jc("click",(function(){return t.confirm()})),l.Qc(4,"Confirm"),l.Wb(),l.Xb(5,"button",2),l.jc("click",(function(){return t.cancel()})),l.Qc(6,"Cancel"),l.Wb(),l.Wb())},styles:["button[_ngcontent-%COMP%]{margin-top:22px;padding:6px 24px;border-radius:0;font-size:16px;color:#fff}.actions[_ngcontent-%COMP%]{display:flex}.actions[_ngcontent-%COMP%]   .confirm[_ngcontent-%COMP%]{background:#18b587}.actions[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{background:#f53c6f;margin-left:40px}"]}),n})();var v=e("3Pt+"),x=e("NFeN"),w=e("5+WD"),X=e("bTqV"),W=e("STbY");function k(n,t){if(1&n&&l.Sb(0,"img",14),2&n){const n=l.nc(2);l.tc("src",n.apiUrl+"uploads/thumbnails/"+n.playlist.thumbnail,l.Jc)}}function I(n,t){1&n&&l.Sb(0,"img",14),2&n&&l.tc("src","assets/img/video-thumbnail-default.png",l.Jc)}function Q(n,t){if(1&n){const n=l.Yb();l.Vb(0),l.Xb(1,"h3"),l.Qc(2),l.Xb(3,"span",15),l.jc("click",(function(){l.Hc(n);const t=l.nc(2);return t.editPlaylistInfo(t.playlist)})),l.Qc(4,"create"),l.Wb(),l.Wb(),l.Xb(5,"p"),l.Qc(6),l.Wb(),l.Ub()}if(2&n){const n=l.nc(2);l.Cb(2),l.Sc(" ",n.playlist.name," "),l.Cb(4),l.Rc(n.playlist.description)}}function j(n,t){1&n&&(l.Xb(0,"span",19),l.Qc(1,"Playlist name is required"),l.Wb())}function V(n,t){if(1&n&&(l.Vb(0),l.Sb(1,"input",16),l.Oc(2,j,2,0,"span",17),l.Sb(3,"textarea",18),l.Ub()),2&n){const n=l.nc(2);l.Cb(2),l.tc("ngIf",n.playlistInfoForm.get("name").hasError("required"))}}function S(n,t){if(1&n&&(l.Xb(0,"h3"),l.Qc(1),l.oc(2,"date"),l.Wb()),2&n){const n=l.nc(3);l.Cb(1),l.Sc("Last updated on ",l.qc(2,1,n.playlist.updated_at,"d MMM, yyyy"),"")}}function z(n,t){1&n&&(l.Xb(0,"mat-icon"),l.Qc(1,"visibility_off"),l.Wb())}function R(n,t){1&n&&(l.Xb(0,"mat-icon",8),l.Qc(1,"visibility_on"),l.Wb())}function F(n,t){if(1&n){const n=l.Yb();l.Vb(0),l.Xb(1,"h3"),l.Qc(2),l.Wb(),l.Oc(3,S,3,4,"h3",11),l.Xb(4,"div",20),l.Oc(5,z,2,0,"mat-icon",11),l.Oc(6,R,2,0,"mat-icon",21),l.Xb(7,"select",22),l.jc("change",(function(t){l.Hc(n);const e=l.nc(2);return e.updatePrivacy(t.target.value,e.playlist)})),l.Xb(8,"option",23),l.Qc(9,"Private"),l.Wb(),l.Xb(10,"option",23),l.Qc(11,"Public"),l.Wb(),l.Wb(),l.Wb(),l.Ub()}if(2&n){const n=l.nc(2);l.Cb(2),l.Sc("",null==n.playlist.videos?null:n.playlist.videos.length," videos"),l.Cb(1),l.tc("ngIf",!n.editMode),l.Cb(2),l.tc("ngIf",!n.playlist.privacy),l.Cb(1),l.tc("ngIf",n.playlist.privacy),l.Cb(2),l.tc("value",0)("selected",!n.playlist.privacy),l.Cb(2),l.tc("value",1)("selected",n.playlist.privacy)}}function T(n,t){if(1&n){const n=l.Yb();l.Xb(0,"button",24),l.jc("click",(function(){return l.Hc(n),l.nc(2).savePlaylistInfoChanges()})),l.Qc(1,"Save changes "),l.Wb()}}function D(n,t){if(1&n){const n=l.Yb();l.Xb(0,"button",25),l.jc("click",(function(){return l.Hc(n),l.nc(2).openVideosModal()})),l.Qc(1,"Add Video"),l.Wb()}}function U(n,t){if(1&n&&(l.Xb(0,"div",5),l.Oc(1,k,1,1,"img",6),l.Oc(2,I,1,1,"img",6),l.Xb(3,"button",7),l.Xb(4,"span",8),l.Qc(5,"play_arrow"),l.Wb(),l.Qc(6," Play All "),l.Wb(),l.Xb(7,"div",9),l.Xb(8,"form",10),l.Oc(9,Q,7,2,"ng-container",11),l.Oc(10,V,4,1,"ng-container",11),l.Oc(11,F,12,8,"ng-container",11),l.Wb(),l.Wb(),l.Oc(12,T,2,0,"button",12),l.Oc(13,D,2,0,"button",13),l.Wb()),2&n){const n=l.nc();l.Cb(1),l.tc("ngIf",n.playlist.thumbnail),l.Cb(1),l.tc("ngIf",!n.playlist.thumbnail),l.Cb(6),l.tc("formGroup",n.playlistInfoForm),l.Cb(1),l.tc("ngIf",!n.editMode),l.Cb(1),l.tc("ngIf",n.editMode),l.Cb(1),l.tc("ngIf",!n.editMode),l.Cb(1),l.tc("ngIf",n.editMode),l.Cb(1),l.tc("ngIf",!n.editMode)}}function H(n,t){if(1&n){const n=l.Yb();l.Xb(0,"img",48),l.jc("click",(function(){l.Hc(n);const t=l.nc().$implicit;return l.nc(2).openVideoPage(t)})),l.Wb()}if(2&n){const n=l.nc().$implicit,t=l.nc(2);l.tc("src",t.apiUrl+"uploads/thumbnails/"+n.thumbnail,l.Jc)}}function L(n,t){if(1&n){const n=l.Yb();l.Xb(0,"img",48),l.jc("click",(function(){l.Hc(n);const t=l.nc().$implicit;return l.nc(2).openVideoPage(t)})),l.Wb()}2&n&&l.tc("src","assets/img/video-thumbnail-default.png",l.Jc)}function Y(n,t){if(1&n){const n=l.Yb();l.Xb(0,"div",29),l.jc("cdkDragDropped",(function(e){l.Hc(n);const i=t.$implicit;return l.nc(2).dragDropped(e,i)})),l.Xb(1,"div",30),l.Xb(2,"div",31),l.Xb(3,"div",32),l.Oc(4,H,1,1,"img",33),l.Oc(5,L,1,1,"img",33),l.Wb(),l.Wb(),l.Xb(6,"div",34),l.Xb(7,"div",35),l.Xb(8,"h4",36),l.Qc(9),l.Wb(),l.Xb(10,"div",37),l.Xb(11,"button",38),l.Xb(12,"mat-icon"),l.Qc(13,"more_vert"),l.Wb(),l.Wb(),l.Xb(14,"mat-menu",null,39),l.Xb(16,"button",40),l.Xb(17,"mat-icon"),l.Qc(18,"playlist_add"),l.Wb(),l.Xb(19,"span"),l.Qc(20,"Add to another playlist"),l.Wb(),l.Wb(),l.Xb(21,"button",41),l.jc("click",(function(){l.Hc(n);const e=t.$implicit,i=l.nc(2);return i.changePlaylistThumbnail(i.playlist.id,e.thumbnail)})),l.Xb(22,"mat-icon"),l.Qc(23,"insert_photo"),l.Wb(),l.Xb(24,"span"),l.Qc(25,"Set as playlist thumbnail"),l.Wb(),l.Wb(),l.Xb(26,"button",41),l.jc("click",(function(){l.Hc(n);const e=t.$implicit,i=l.nc(2);return i.removeVideoFromPlaylist(i.playlist.id,e.id)})),l.Xb(27,"mat-icon"),l.Qc(28,"delete"),l.Wb(),l.Xb(29,"span"),l.Qc(30,"Remove from playlist"),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Wb(),l.Xb(31,"div",42),l.Xb(32,"span",43),l.Qc(33),l.Wb(),l.Xb(34,"span",44),l.Qc(35,"."),l.Wb(),l.Xb(36,"span",45),l.Qc(37,"17k watching"),l.Wb(),l.Xb(38,"span",44),l.Qc(39,"."),l.Wb(),l.Xb(40,"span",46),l.Qc(41),l.oc(42,"date"),l.Wb(),l.Wb(),l.Xb(43,"p",47),l.Qc(44),l.Wb(),l.Wb(),l.Wb(),l.Wb()}if(2&n){const n=t.$implicit,e=l.Dc(15);l.tc("cdkDragPreviewClass","video-container"),l.Cb(4),l.tc("ngIf",n.thumbnail),l.Cb(1),l.tc("ngIf",!n.thumbnail),l.Cb(4),l.Rc(n.name),l.Cb(2),l.tc("matMenuTriggerFor",e),l.Cb(22),l.Rc(n.channel.name),l.Cb(8),l.Rc(l.qc(42,8,n.created_at,"d MMM, yyyy")),l.Cb(3),l.Rc(n.description)}}function $(n,t){if(1&n&&(l.Xb(0,"div",26),l.Xb(1,"div",27),l.Oc(2,Y,45,11,"div",28),l.Wb(),l.Wb()),2&n){const n=l.nc();l.Cb(2),l.tc("ngForOf",n.playlist.videos)}}const B=[{path:"single/:id",component:(()=>{class n{constructor(n,t,e,i,o){var c,l;this.router=n,this.route=t,this.playlistsService=e,this.dialog=i,this.fb=o,this.apiUrl=a.b,this.editMode=!1;const s=null===(l=null===(c=this.route.snapshot)||void 0===c?void 0:c.params)||void 0===l?void 0:l.id;s&&(this.playlistInfoForm=this.fb.group({id:[""],name:["",v.t.required],description:[""]}),this.getPlaylistDetails(s))}ngOnInit(){}openVideosModal(){this.dialog.open(u,{data:{playlist:this.playlist}}).afterClosed().subscribe(n=>{this.getPlaylistDetails(this.playlist.id)})}updatePrivacy(n,t){this.playlistsService.updatePrivacy({privacy:n,id:t.id}).subscribe(n=>{})}openVideoPage(n){this.router.navigate(["videos/play"],{queryParams:{id:n.id}})}getPlaylistDetails(n){this.playlistsService.getById({playlist_id:n}).subscribe(n=>{this.playlist=n})}dragDropped(n,t){console.log(n),this.playlist.videos=Object(y.a)(this.playlist.videos,n.previousIndex,n.currentIndex);const e={rows:JSON.stringify(this.playlist),playlist_id:this.playlist.id};this.playlistsService.updateVideoPosition(e).subscribe(n=>{})}changePlaylistThumbnail(n,t){const e=Object.assign({playlist_id:n},{thumbnail:t});this.playlistsService.changePlaylistThumbnail(e).subscribe(n=>{this.playlist=n})}removeVideoFromPlaylist(n,t){this.dialog.open(h).afterClosed().subscribe(e=>{e&&this.playlistsService.removeVideoFromPlaylist({playlist_id:n,video_id:t}).subscribe(n=>{this.playlist=n})})}editPlaylistInfo(n){this.editMode=!0,this.playlistInfoForm.patchValue(n)}savePlaylistInfoChanges(){this.playlistsService.updatePlaylistInfo(this.playlistInfoForm.value).subscribe(n=>{this.editMode=!1,this.playlist=n}),console.log(this.playlistInfoForm.value)}}return n.\u0275fac=function(t){return new(t||n)(l.Rb(o.d),l.Rb(o.a),l.Rb(g.a),l.Rb(c.b),l.Rb(v.c))},n.\u0275cmp=l.Lb({type:n,selectors:[["app-single-playlist"]],decls:7,vars:2,consts:[[1,"single-playlist"],[1,"inner-wrap"],[1,"left"],["class","playlist",4,"ngIf"],["class","right",4,"ngIf"],[1,"playlist"],[3,"src",4,"ngIf"],[1,"btn","play-all"],[1,"material-icons"],[1,"info"],["id","playlist-info-form",3,"formGroup"],[4,"ngIf"],["class","btn save-playlist-changes",3,"click",4,"ngIf"],["class","btn add-video",3,"click",4,"ngIf"],[3,"src"],[1,"material-icons",3,"click"],["formControlName","name"],["class","error",4,"ngIf"],["formControlName","description"],[1,"error"],["id","privacy-select",1,"select"],["class","material-icons",4,"ngIf"],[3,"change"],[3,"value","selected"],[1,"btn","save-playlist-changes",3,"click"],[1,"btn","add-video",3,"click"],[1,"right"],["cdkDropList","",1,"playlist"],["class","playlist-item","cdkDrag","",3,"cdkDragPreviewClass","cdkDragDropped",4,"ngFor","ngForOf"],["cdkDrag","",1,"playlist-item",3,"cdkDragPreviewClass","cdkDragDropped"],[1,"video-container"],[1,"img"],[1,"thumbnail"],[3,"src","click",4,"ngIf"],[1,"details"],[1,"title"],[1,""],[1,"dotes"],["mat-icon-button","","aria-label","Example icon-button with a menu",3,"matMenuTriggerFor"],["menu","matMenu"],["mat-menu-item",""],["mat-menu-item","",3,"click"],[1,"shortened-details"],[1,"channel-name"],[1,"dot"],[1,"watchers-count"],[1,"upload-time"],[1,"shortened-description"],[3,"src","click"]],template:function(n,t){1&n&&(l.Xb(0,"div",0),l.Xb(1,"h2"),l.Qc(2,"Edit Playlist"),l.Wb(),l.Xb(3,"div",1),l.Xb(4,"div",2),l.Oc(5,U,14,8,"div",3),l.Wb(),l.Oc(6,$,3,1,"div",4),l.Wb(),l.Wb()),2&n&&(l.Cb(5),l.tc("ngIf",t.playlist),l.Cb(1),l.tc("ngIf",t.playlist))},directives:[i.m,v.v,v.m,v.g,v.b,v.l,v.f,v.p,v.u,x.a,w.b,i.l,w.a,X.a,W.c,W.d,W.a],pipes:[i.e],styles:[".single-playlist[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:32px;font-weight:700;color:#18b587}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]{margin-top:40px;display:flex;flex-wrap:wrap;align-items:flex-start}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]{flex:0 0 316px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]{width:100%}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;max-height:190px;-o-object-fit:cover;object-fit:cover}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .play-all[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:center;align-items:center;background:#18b587;border-radius:0;font-size:16px;color:#fff}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .play-all[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:12px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .add-video[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .save-playlist-changes[_ngcontent-%COMP%]{margin-top:22px;padding:6px 24px;background:#18b587;border-radius:0;font-size:16px;color:#fff}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-top:16px;margin-bottom:0;font-size:16px;font-family:Muli-Bold;color:#545454}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:22px;cursor:pointer}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:12px;color:#545454;font-size:12px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]{margin-top:16px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{vertical-align:sub;font-size:22px;color:#545454}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{color:#545454;font-size:16px;font-weight:600;border:0;padding:0;outline:none;margin-left:6px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #playlist-info-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid #545454;height:20px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   .playlist[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   #privacy-select[_ngcontent-%COMP%]{display:flex}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]{flex:1;margin-left:32px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]{margin-bottom:30px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]{display:flex}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{flex:0 0 200px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:115px;-o-object-fit:cover;object-fit:cover;cursor:pointer}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{flex:1;margin-left:32px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;text-transform:capitalize;font-family:Muli-Bold;color:#545454;font-size:16px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .dotes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:40px;font-size:14px;background:transparent}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]{margin-top:4px;display:flex}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%]{font-family:Muli-Bold;color:#818181;font-size:14px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin-left:16px;margin-top:-3px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .upload-time[_ngcontent-%COMP%], .single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%]{font-size:14px;color:#818181;margin-left:16px}.single-playlist[_ngcontent-%COMP%]   .inner-wrap[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .playlist-item[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-description[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:0;color:#545454}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.cdk-drag-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:200px!important}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]{display:flex}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{flex:0 0 200px}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:115px;-o-object-fit:cover;object-fit:cover;cursor:pointer}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]{flex:1;margin-left:32px}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{margin:0;text-transform:capitalize;font-family:Muli-Bold;color:#545454;font-size:16px}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   .dotes[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:40px;font-size:14px;background:transparent}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]{margin-top:4px;display:flex}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .channel-name[_ngcontent-%COMP%]{font-family:Muli-Bold;color:#818181;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{margin-left:16px;margin-top:-3px}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .upload-time[_ngcontent-%COMP%], .cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-details[_ngcontent-%COMP%]   .watchers-count[_ngcontent-%COMP%]{font-size:14px;color:#818181;margin-left:16px}.cdk-drag-preview[_ngcontent-%COMP%]   .video-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]   .shortened-description[_ngcontent-%COMP%]{margin-top:16px;margin-bottom:0;color:#545454}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}"]}),n})()}];let J=(()=>{class n{}return n.\u0275mod=l.Pb({type:n}),n.\u0275inj=l.Ob({factory:function(t){return new(t||n)},imports:[[o.e.forChild(B)],o.e]}),n})();var q=e("PCNd");let A=(()=>{class n{}return n.\u0275mod=l.Pb({type:n}),n.\u0275inj=l.Ob({factory:function(t){return new(t||n)},imports:[[i.c,J,w.c,q.a]]}),n})()}}]);