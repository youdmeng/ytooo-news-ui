
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/component/component","pages/details/details","pages/details/videoDetails","pages/nvue/nvue"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"新闻模版","navigationBarBackgroundColor":"#ec706b","backgroundColor":"#f8f8f8"},"tabBar":{"color":"#C0C4CC","selectedColor":"#fa436a","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"static/tab-home.png","selectedIconPath":"static/tab-home-current.png","text":"首页"},{"pagePath":"pages/nvue/nvue","iconPath":"static/tab-home.png","selectedIconPath":"static/tab-home-current.png","text":"NVUE"},{"pagePath":"pages/component/component","iconPath":"static/tab-home.png","selectedIconPath":"static/tab-home-current.png","text":"示例"}]},"renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"ytooo-news-ui","compilerVersion":"2.6.11","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","bounce":"none"}},{"path":"/pages/component/component","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"组件使用示例","bounce":"none"}},{"path":"/pages/details/details","meta":{},"window":{"navigationBarTitleText":"详情","navigationBarTextStyle":"white","bounce":"none"}},{"path":"/pages/details/videoDetails","meta":{},"window":{"navigationBarTitleText":"","titleNView":false,"navigationBarTextStyle":"white","bounce":"none"}},{"path":"/pages/nvue/nvue","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","titleNView":false,"navigationBarTextStyle":"white","bounce":"none"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});