var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/*
Turbolinks 5.1.1
Copyright © 2018 Basecamp, LLC
 */
(function(){var t=this;(function(){(function(){this.Turbolinks={supported:function(){return null!=window.history.pushState&&null!=window.requestAnimationFrame&&null!=window.addEventListener}(),visit:function(t,r){return e.controller.visit(t,r)},clearCache:function(){return e.controller.clearCache()},setProgressBarDelay:function(t){return e.controller.setProgressBarDelay(t)}}}).call(this)}).call(t);var e=t.Turbolinks;(function(){(function(){var t,r,n,o=[].slice;e.copyObject=function(t){var e,r,n;r={};for(e in t)n=t[e],r[e]=n;return r},e.closest=function(e,r){return t.call(e,r)},t=function(){var t,e;return t=document.documentElement,null!=(e=t.closest)?e:function(t){var e;for(e=this;e;){if(e.nodeType===Node.ELEMENT_NODE&&r.call(e,t))return e;e=e.parentNode}}}(),e.defer=function(t){return setTimeout(t,1)},e.throttle=function(t){var e;return e=null,function(){var r;return r=1<=arguments.length?o.call(arguments,0):[],null!=e?e:e=requestAnimationFrame(function(n){return function(){return e=null,t.apply(n,r)}}(this))}},e.dispatch=function(t,e){var r,o,i,s,a,u;return a=null!=e?e:{},u=a.target,r=a.cancelable,o=a.data,i=document.createEvent("Events"),i.initEvent(t,!0,r===!0),i.data=null!=o?o:{},i.cancelable&&!n&&(s=i.preventDefault,i.preventDefault=function(){return this.defaultPrevented||Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}}),s.call(this)}),(null!=u?u:document).dispatchEvent(i),i},n=function(){var t;return t=document.createEvent("Events"),t.initEvent("test",!0,!0),t.preventDefault(),t.defaultPrevented}(),e.match=function(t,e){return r.call(t,e)},r=function(){var t,e,r,n;return t=document.documentElement,null!=(e=null!=(r=null!=(n=t.matchesSelector)?n:t.webkitMatchesSelector)?r:t.msMatchesSelector)?e:t.mozMatchesSelector}(),e.uuid=function(){var t,e,r;for(r="",t=e=1;36>=e;t=++e)r+=9===t||14===t||19===t||24===t?"-":15===t?"4":20===t?(Math.floor(4*Math.random())+8).toString(16):Math.floor(15*Math.random()).toString(16);return r}}).call(this),function(){e.Location=function(){function t(t){var e,r;null==t&&(t=""),r=document.createElement("a"),r.href=t.toString(),this.absoluteURL=r.href,e=r.hash.length,2>e?this.requestURL=this.absoluteURL:(this.requestURL=this.absoluteURL.slice(0,-e),this.anchor=r.hash.slice(1))}var e,r,n,o;return t.wrap=function(t){return t instanceof this?t:new this(t)},t.prototype.getOrigin=function(){return this.absoluteURL.split("/",3).join("/")},t.prototype.getPath=function(){var t,e;return null!=(t=null!=(e=this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/))?e[1]:void 0)?t:"/"},t.prototype.getPathComponents=function(){return this.getPath().split("/").slice(1)},t.prototype.getLastPathComponent=function(){return this.getPathComponents().slice(-1)[0]},t.prototype.getExtension=function(){var t,e;return null!=(t=null!=(e=this.getLastPathComponent().match(/\.[^.]*$/))?e[0]:void 0)?t:""},t.prototype.isHTML=function(){return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)},t.prototype.isPrefixedBy=function(t){var e;return e=r(t),this.isEqualTo(t)||o(this.absoluteURL,e)},t.prototype.isEqualTo=function(t){return this.absoluteURL===(null!=t?t.absoluteURL:void 0)},t.prototype.toCacheKey=function(){return this.requestURL},t.prototype.toJSON=function(){return this.absoluteURL},t.prototype.toString=function(){return this.absoluteURL},t.prototype.valueOf=function(){return this.absoluteURL},r=function(t){return e(t.getOrigin()+t.getPath())},e=function(t){return n(t,"/")?t:t+"/"},o=function(t,e){return t.slice(0,e.length)===e},n=function(t,e){return t.slice(-e.length)===e},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.HttpRequest=function(){function r(r,n,o){this.delegate=r,this.requestCanceled=t(this.requestCanceled,this),this.requestTimedOut=t(this.requestTimedOut,this),this.requestFailed=t(this.requestFailed,this),this.requestLoaded=t(this.requestLoaded,this),this.requestProgressed=t(this.requestProgressed,this),this.url=e.Location.wrap(n).requestURL,this.referrer=e.Location.wrap(o).absoluteURL,this.createXHR()}return r.NETWORK_FAILURE=0,r.TIMEOUT_FAILURE=-1,r.timeout=60,r.prototype.send=function(){var t;return this.xhr&&!this.sent?(this.notifyApplicationBeforeRequestStart(),this.setProgress(0),this.xhr.send(),this.sent=!0,"function"==typeof(t=this.delegate).requestStarted?t.requestStarted():void 0):void 0},r.prototype.cancel=function(){return this.xhr&&this.sent?this.xhr.abort():void 0},r.prototype.requestProgressed=function(t){return t.lengthComputable?this.setProgress(t.loaded/t.total):void 0},r.prototype.requestLoaded=function(){return this.endRequest(function(t){return function(){var e;return 200<=(e=t.xhr.status)&&300>e?t.delegate.requestCompletedWithResponse(t.xhr.responseText,t.xhr.getResponseHeader("Turbolinks-Location")):(t.failed=!0,t.delegate.requestFailedWithStatusCode(t.xhr.status,t.xhr.responseText))}}(this))},r.prototype.requestFailed=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)}}(this))},r.prototype.requestTimedOut=function(){return this.endRequest(function(t){return function(){return t.failed=!0,t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)}}(this))},r.prototype.requestCanceled=function(){return this.endRequest()},r.prototype.notifyApplicationBeforeRequestStart=function(){return e.dispatch("turbolinks:request-start",{data:{url:this.url,xhr:this.xhr}})},r.prototype.notifyApplicationAfterRequestEnd=function(){return e.dispatch("turbolinks:request-end",{data:{url:this.url,xhr:this.xhr}})},r.prototype.createXHR=function(){return this.xhr=new XMLHttpRequest,this.xhr.open("GET",this.url,!0),this.xhr.timeout=1e3*this.constructor.timeout,this.xhr.setRequestHeader("Accept","text/html, application/xhtml+xml"),this.xhr.setRequestHeader("Turbolinks-Referrer",this.referrer),this.xhr.onprogress=this.requestProgressed,this.xhr.onload=this.requestLoaded,this.xhr.onerror=this.requestFailed,this.xhr.ontimeout=this.requestTimedOut,this.xhr.onabort=this.requestCanceled},r.prototype.endRequest=function(t){return this.xhr?(this.notifyApplicationAfterRequestEnd(),null!=t&&t.call(this),this.destroy()):void 0},r.prototype.setProgress=function(t){var e;return this.progress=t,"function"==typeof(e=this.delegate).requestProgressed?e.requestProgressed(this.progress):void 0},r.prototype.destroy=function(){var t;return this.setProgress(1),"function"==typeof(t=this.delegate).requestFinished&&t.requestFinished(),this.delegate=null,this.xhr=null},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ProgressBar=function(){function e(){this.trickle=t(this.trickle,this),this.stylesheetElement=this.createStylesheetElement(),this.progressElement=this.createProgressElement()}var r;return r=300,e.defaultCSS=".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width "+r+"ms ease-out, opacity "+r/2+"ms "+r/2+"ms ease-in;\n  transform: translate3d(0, 0, 0);\n}",e.prototype.show=function(){return this.visible?void 0:(this.visible=!0,this.installStylesheetElement(),this.installProgressElement(),this.startTrickling())},e.prototype.hide=function(){return this.visible&&!this.hiding?(this.hiding=!0,this.fadeProgressElement(function(t){return function(){return t.uninstallProgressElement(),t.stopTrickling(),t.visible=!1,t.hiding=!1}}(this))):void 0},e.prototype.setValue=function(t){return this.value=t,this.refresh()},e.prototype.installStylesheetElement=function(){return document.head.insertBefore(this.stylesheetElement,document.head.firstChild)},e.prototype.installProgressElement=function(){return this.progressElement.style.width=0,this.progressElement.style.opacity=1,document.documentElement.insertBefore(this.progressElement,document.body),this.refresh()},e.prototype.fadeProgressElement=function(t){return this.progressElement.style.opacity=0,setTimeout(t,1.5*r)},e.prototype.uninstallProgressElement=function(){return this.progressElement.parentNode?document.documentElement.removeChild(this.progressElement):void 0},e.prototype.startTrickling=function(){return null!=this.trickleInterval?this.trickleInterval:this.trickleInterval=setInterval(this.trickle,r)},e.prototype.stopTrickling=function(){return clearInterval(this.trickleInterval),this.trickleInterval=null},e.prototype.trickle=function(){return this.setValue(this.value+Math.random()/100)},e.prototype.refresh=function(){return requestAnimationFrame(function(t){return function(){return t.progressElement.style.width=10+90*t.value+"%"}}(this))},e.prototype.createStylesheetElement=function(){var t;return t=document.createElement("style"),t.type="text/css",t.textContent=this.constructor.defaultCSS,t},e.prototype.createProgressElement=function(){var t;return t=document.createElement("div"),t.className="turbolinks-progress-bar",t},e}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.BrowserAdapter=function(){function r(r){this.controller=r,this.showProgressBar=t(this.showProgressBar,this),this.progressBar=new e.ProgressBar}var n,o,i;return i=e.HttpRequest,n=i.NETWORK_FAILURE,o=i.TIMEOUT_FAILURE,r.prototype.visitProposedToLocationWithAction=function(t,e){return this.controller.startVisitToLocationWithAction(t,e)},r.prototype.visitStarted=function(t){return t.issueRequest(),t.changeHistory(),t.loadCachedSnapshot()},r.prototype.visitRequestStarted=function(t){return this.progressBar.setValue(0),t.hasCachedSnapshot()||"restore"!==t.action?this.showProgressBarAfterDelay():this.showProgressBar()},r.prototype.visitRequestProgressed=function(t){return this.progressBar.setValue(t.progress)},r.prototype.visitRequestCompleted=function(t){return t.loadResponse()},r.prototype.visitRequestFailedWithStatusCode=function(t,e){switch(e){case n:case o:return this.reload();default:return t.loadResponse()}},r.prototype.visitRequestFinished=function(t){return this.hideProgressBar()},r.prototype.visitCompleted=function(t){return t.followRedirect()},r.prototype.pageInvalidated=function(){return this.reload()},r.prototype.showProgressBarAfterDelay=function(){return this.progressBarTimeout=setTimeout(this.showProgressBar,this.controller.progressBarDelay)},r.prototype.showProgressBar=function(){return this.progressBar.show()},r.prototype.hideProgressBar=function(){return this.progressBar.hide(),clearTimeout(this.progressBarTimeout)},r.prototype.reload=function(){return window.location.reload()},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.History=function(){function r(e){this.delegate=e,this.onPageLoad=t(this.onPageLoad,this),this.onPopState=t(this.onPopState,this)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("popstate",this.onPopState,!1),addEventListener("load",this.onPageLoad,!1),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("popstate",this.onPopState,!1),removeEventListener("load",this.onPageLoad,!1),this.started=!1):void 0},r.prototype.push=function(t,r){return t=e.Location.wrap(t),this.update("push",t,r)},r.prototype.replace=function(t,r){return t=e.Location.wrap(t),this.update("replace",t,r)},r.prototype.onPopState=function(t){var r,n,o,i;return this.shouldHandlePopState()&&(i=null!=(n=t.state)?n.turbolinks:void 0)?(r=e.Location.wrap(window.location),o=i.restorationIdentifier,this.delegate.historyPoppedToLocationWithRestorationIdentifier(r,o)):void 0},r.prototype.onPageLoad=function(t){return e.defer(function(t){return function(){return t.pageLoaded=!0}}(this))},r.prototype.shouldHandlePopState=function(){return this.pageIsLoaded()},r.prototype.pageIsLoaded=function(){return this.pageLoaded||"complete"===document.readyState},r.prototype.update=function(t,e,r){var n;return n={turbolinks:{restorationIdentifier:r}},history[t+"State"](n,null,e)},r}()}.call(this),function(){e.Snapshot=function(){function t(t){var e,r;r=t.head,e=t.body,this.head=null!=r?r:document.createElement("head"),this.body=null!=e?e:document.createElement("body")}return t.wrap=function(t){return t instanceof this?t:this.fromHTML(t)},t.fromHTML=function(t){var e;return e=document.createElement("html"),e.innerHTML=t,this.fromElement(e)},t.fromElement=function(t){return new this({head:t.querySelector("head"),body:t.querySelector("body")})},t.prototype.clone=function(){return new t({head:this.head.cloneNode(!0),body:this.body.cloneNode(!0)})},t.prototype.getRootLocation=function(){var t,r;return r=null!=(t=this.getSetting("root"))?t:"/",new e.Location(r)},t.prototype.getCacheControlValue=function(){return this.getSetting("cache-control")},t.prototype.getElementForAnchor=function(t){try{return this.body.querySelector("[id='"+t+"'], a[name='"+t+"']")}catch(e){}},t.prototype.hasAnchor=function(t){return null!=this.getElementForAnchor(t)},t.prototype.isPreviewable=function(){return"no-preview"!==this.getCacheControlValue()},t.prototype.isCacheable=function(){return"no-cache"!==this.getCacheControlValue()},t.prototype.isVisitable=function(){return"reload"!==this.getSetting("visit-control")},t.prototype.getSetting=function(t){var e,r;return r=this.head.querySelectorAll("meta[name='turbolinks-"+t+"']"),e=r[r.length-1],null!=e?e.getAttribute("content"):void 0},t}()}.call(this),function(){var t=[].slice;e.Renderer=function(){function e(){}var r;return e.render=function(){var e,r,n,o;return n=arguments[0],r=arguments[1],e=3<=arguments.length?t.call(arguments,2):[],o=function(t,e,r){r.prototype=t.prototype;var n=new r,o=t.apply(n,e);return Object(o)===o?o:n}(this,e,function(){}),o.delegate=n,o.render(r),o},e.prototype.renderView=function(t){return this.delegate.viewWillRender(this.newBody),t(),this.delegate.viewRendered(this.newBody)},e.prototype.invalidateView=function(){return this.delegate.viewInvalidated()},e.prototype.createScriptElement=function(t){var e;return"false"===t.getAttribute("data-turbolinks-eval")?t:(e=document.createElement("script"),e.textContent=t.textContent,e.async=!1,r(e,t),e)},r=function(t,e){var r,n,o,i,s,a,u;for(i=e.attributes,a=[],r=0,n=i.length;n>r;r++)s=i[r],o=s.name,u=s.value,a.push(t.setAttribute(o,u));return a},e}()}.call(this),function(){e.HeadDetails=function(){function t(t){var e,r,i,s,a,u,l;for(this.element=t,this.elements={},l=this.element.childNodes,s=0,u=l.length;u>s;s++)i=l[s],i.nodeType===Node.ELEMENT_NODE&&(a=i.outerHTML,r=null!=(e=this.elements)[a]?e[a]:e[a]={type:o(i),tracked:n(i),elements:[]},r.elements.push(i))}var e,r,n,o;return t.prototype.hasElementWithKey=function(t){return t in this.elements},t.prototype.getTrackedElementSignature=function(){var t,e;return function(){var r,n;r=this.elements,n=[];for(t in r)e=r[t].tracked,e&&n.push(t);return n}.call(this).join("")},t.prototype.getScriptElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("script",t)},t.prototype.getStylesheetElementsNotInDetails=function(t){return this.getElementsMatchingTypeNotInDetails("stylesheet",t)},t.prototype.getElementsMatchingTypeNotInDetails=function(t,e){var r,n,o,i,s,a;o=this.elements,s=[];for(n in o)i=o[n],a=i.type,r=i.elements,a!==t||e.hasElementWithKey(n)||s.push(r[0]);return s},t.prototype.getProvisionalElements=function(){var t,e,r,n,o,i,s;r=[],n=this.elements;for(e in n)o=n[e],s=o.type,i=o.tracked,t=o.elements,null!=s||i?t.length>1&&r.push.apply(r,t.slice(1)):r.push.apply(r,t);return r},o=function(t){return e(t)?"script":r(t)?"stylesheet":void 0},n=function(t){return"reload"===t.getAttribute("data-turbolinks-track")},e=function(t){var e;return e=t.tagName.toLowerCase(),"script"===e},r=function(t){var e;return e=t.tagName.toLowerCase(),"style"===e||"link"===e&&"stylesheet"===t.getAttribute("rel")},t}()}.call(this),function(){var t=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;e.SnapshotRenderer=function(r){function n(t,r,n){this.currentSnapshot=t,this.newSnapshot=r,this.isPreview=n,this.currentHeadDetails=new e.HeadDetails(this.currentSnapshot.head),this.newHeadDetails=new e.HeadDetails(this.newSnapshot.head),this.newBody=this.newSnapshot.body}return t(n,r),n.prototype.render=function(t){return this.shouldRender()?(this.mergeHead(),this.renderView(function(e){return function(){return e.replaceBody(),e.isPreview||e.focusFirstAutofocusableElement(),t()}}(this))):this.invalidateView()},n.prototype.mergeHead=function(){return this.copyNewHeadStylesheetElements(),this.copyNewHeadScriptElements(),this.removeCurrentHeadProvisionalElements(),this.copyNewHeadProvisionalElements()},n.prototype.replaceBody=function(){return this.activateBodyScriptElements(),this.importBodyPermanentElements(),this.assignNewBody()},n.prototype.shouldRender=function(){return this.newSnapshot.isVisitable()&&this.trackedElementsAreIdentical()},n.prototype.trackedElementsAreIdentical=function(){return this.currentHeadDetails.getTrackedElementSignature()===this.newHeadDetails.getTrackedElementSignature()},n.prototype.copyNewHeadStylesheetElements=function(){var t,e,r,n,o;for(n=this.getNewHeadStylesheetElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},n.prototype.copyNewHeadScriptElements=function(){var t,e,r,n,o;for(n=this.getNewHeadScriptElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(this.createScriptElement(t)));return o},n.prototype.removeCurrentHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getCurrentHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.removeChild(t));return o},n.prototype.copyNewHeadProvisionalElements=function(){var t,e,r,n,o;for(n=this.getNewHeadProvisionalElements(),o=[],e=0,r=n.length;r>e;e++)t=n[e],o.push(document.head.appendChild(t));return o},n.prototype.importBodyPermanentElements=function(){var t,e,r,n,o,i;for(n=this.getNewBodyPermanentElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],(t=this.findCurrentBodyPermanentElement(o))?i.push(o.parentNode.replaceChild(t,o)):i.push(void 0);return i},n.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getNewBodyScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},n.prototype.assignNewBody=function(){return document.body=this.newBody},n.prototype.focusFirstAutofocusableElement=function(){var t;return null!=(t=this.findFirstAutofocusableElement())?t.focus():void 0},n.prototype.getNewHeadStylesheetElements=function(){return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)},n.prototype.getNewHeadScriptElements=function(){return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)},n.prototype.getCurrentHeadProvisionalElements=function(){return this.currentHeadDetails.getProvisionalElements()},n.prototype.getNewHeadProvisionalElements=function(){return this.newHeadDetails.getProvisionalElements()},n.prototype.getNewBodyPermanentElements=function(){return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")},n.prototype.findCurrentBodyPermanentElement=function(t){return document.body.querySelector("#"+t.id+"[data-turbolinks-permanent]")},n.prototype.getNewBodyScriptElements=function(){return this.newBody.querySelectorAll("script")},n.prototype.findFirstAutofocusableElement=function(){return document.body.querySelector("[autofocus]")},n}(e.Renderer)}.call(this),function(){var t=function(t,e){function n(){this.constructor=t}for(var o in e)r.call(e,o)&&(t[o]=e[o]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t},r={}.hasOwnProperty;e.ErrorRenderer=function(e){function r(t){this.html=t}return t(r,e),r.prototype.render=function(t){return this.renderView(function(e){return function(){return e.replaceDocumentHTML(),e.activateBodyScriptElements(),t()}}(this))},r.prototype.replaceDocumentHTML=function(){return document.documentElement.innerHTML=this.html},r.prototype.activateBodyScriptElements=function(){var t,e,r,n,o,i;for(n=this.getScriptElements(),i=[],e=0,r=n.length;r>e;e++)o=n[e],t=this.createScriptElement(o),i.push(o.parentNode.replaceChild(t,o));return i},r.prototype.getScriptElements=function(){return document.documentElement.querySelectorAll("script")},r}(e.Renderer)}.call(this),function(){e.View=function(){function t(t){this.delegate=t,this.element=document.documentElement}return t.prototype.getRootLocation=function(){return this.getSnapshot().getRootLocation()},t.prototype.getElementForAnchor=function(t){return this.getSnapshot().getElementForAnchor(t)},t.prototype.getSnapshot=function(){return e.Snapshot.fromElement(this.element)},t.prototype.render=function(t,e){var r,n,o;return o=t.snapshot,r=t.error,n=t.isPreview,this.markAsPreview(n),null!=o?this.renderSnapshot(o,n,e):this.renderError(r,e)},t.prototype.markAsPreview=function(t){return t?this.element.setAttribute("data-turbolinks-preview",""):this.element.removeAttribute("data-turbolinks-preview")},t.prototype.renderSnapshot=function(t,r,n){return e.SnapshotRenderer.render(this.delegate,n,this.getSnapshot(),e.Snapshot.wrap(t),r)},t.prototype.renderError=function(t,r){return e.ErrorRenderer.render(this.delegate,r,t)},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.ScrollManager=function(){function r(r){this.delegate=r,this.onScroll=t(this.onScroll,this),this.onScroll=e.throttle(this.onScroll)}return r.prototype.start=function(){return this.started?void 0:(addEventListener("scroll",this.onScroll,!1),this.onScroll(),this.started=!0)},r.prototype.stop=function(){return this.started?(removeEventListener("scroll",this.onScroll,!1),this.started=!1):void 0},r.prototype.scrollToElement=function(t){return t.scrollIntoView()},r.prototype.scrollToPosition=function(t){var e,r;return e=t.x,r=t.y,window.scrollTo(e,r)},r.prototype.onScroll=function(t){return this.updatePosition({x:window.pageXOffset,y:window.pageYOffset})},r.prototype.updatePosition=function(t){var e;return this.position=t,null!=(e=this.delegate)?e.scrollPositionChanged(this.position):void 0},r}()}.call(this),function(){e.SnapshotCache=function(){function t(t){this.size=t,this.keys=[],this.snapshots={}}var r;return t.prototype.has=function(t){var e;return e=r(t),e in this.snapshots},t.prototype.get=function(t){var e;if(this.has(t))return e=this.read(t),this.touch(t),e},t.prototype.put=function(t,e){return this.write(t,e),this.touch(t),e},t.prototype.read=function(t){var e;return e=r(t),this.snapshots[e]},t.prototype.write=function(t,e){var n;return n=r(t),this.snapshots[n]=e},t.prototype.touch=function(t){var e,n;return n=r(t),e=this.keys.indexOf(n),e>-1&&this.keys.splice(e,1),this.keys.unshift(n),this.trim()},t.prototype.trim=function(){var t,e,r,n,o;for(n=this.keys.splice(this.size),o=[],t=0,r=n.length;r>t;t++)e=n[t],o.push(delete this.snapshots[e]);return o},r=function(t){return e.Location.wrap(t).toCacheKey()},t}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Visit=function(){function r(r,n,o){this.controller=r,this.action=o,this.performScroll=t(this.performScroll,this),this.identifier=e.uuid(),this.location=e.Location.wrap(n),this.adapter=this.controller.adapter,this.state="initialized",this.timingMetrics={}}var n;return r.prototype.start=function(){return"initialized"===this.state?(this.recordTimingMetric("visitStart"),this.state="started",this.adapter.visitStarted(this)):void 0},r.prototype.cancel=function(){var t;return"started"===this.state?(null!=(t=this.request)&&t.cancel(),this.cancelRender(),this.state="canceled"):void 0},r.prototype.complete=function(){var t;return"started"===this.state?(this.recordTimingMetric("visitEnd"),this.state="completed","function"==typeof(t=this.adapter).visitCompleted&&t.visitCompleted(this),this.controller.visitCompleted(this)):void 0},r.prototype.fail=function(){var t;return"started"===this.state?(this.state="failed","function"==typeof(t=this.adapter).visitFailed?t.visitFailed(this):void 0):void 0},r.prototype.changeHistory=function(){var t,e;return this.historyChanged?void 0:(t=this.location.isEqualTo(this.referrer)?"replace":this.action,e=n(t),this.controller[e](this.location,this.restorationIdentifier),this.historyChanged=!0)},r.prototype.issueRequest=function(){return this.shouldIssueRequest()&&null==this.request?(this.progress=0,this.request=new e.HttpRequest(this,this.location,this.referrer),this.request.send()):void 0},r.prototype.getCachedSnapshot=function(){var t;return!(t=this.controller.getCachedSnapshotForLocation(this.location))||null!=this.location.anchor&&!t.hasAnchor(this.location.anchor)||"restore"!==this.action&&!t.isPreviewable()?void 0:t},r.prototype.hasCachedSnapshot=function(){return null!=this.getCachedSnapshot()},r.prototype.loadCachedSnapshot=function(){var t,e;return(e=this.getCachedSnapshot())?(t=this.shouldIssueRequest(),this.render(function(){var r;return this.cacheSnapshot(),this.controller.render({snapshot:e,isPreview:t},this.performScroll),"function"==typeof(r=this.adapter).visitRendered&&r.visitRendered(this),t?void 0:this.complete()})):void 0},r.prototype.loadResponse=function(){return null!=this.response?this.render(function(){var t,e;return this.cacheSnapshot(),this.request.failed?(this.controller.render({error:this.response},this.performScroll),"function"==typeof(t=this.adapter).visitRendered&&t.visitRendered(this),this.fail()):(this.controller.render({snapshot:this.response},this.performScroll),"function"==typeof(e=this.adapter).visitRendered&&e.visitRendered(this),this.complete())}):void 0},r.prototype.followRedirect=function(){return this.redirectedToLocation&&!this.followedRedirect?(this.location=this.redirectedToLocation,this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation,this.restorationIdentifier),this.followedRedirect=!0):void 0},r.prototype.requestStarted=function(){var t;return this.recordTimingMetric("requestStart"),"function"==typeof(t=this.adapter).visitRequestStarted?t.visitRequestStarted(this):void 0},r.prototype.requestProgressed=function(t){var e;return this.progress=t,"function"==typeof(e=this.adapter).visitRequestProgressed?e.visitRequestProgressed(this):void 0},r.prototype.requestCompletedWithResponse=function(t,r){return this.response=t,null!=r&&(this.redirectedToLocation=e.Location.wrap(r)),this.adapter.visitRequestCompleted(this)},r.prototype.requestFailedWithStatusCode=function(t,e){return this.response=e,this.adapter.visitRequestFailedWithStatusCode(this,t)},r.prototype.requestFinished=function(){var t;return this.recordTimingMetric("requestEnd"),"function"==typeof(t=this.adapter).visitRequestFinished?t.visitRequestFinished(this):void 0},r.prototype.performScroll=function(){return this.scrolled?void 0:("restore"===this.action?this.scrollToRestoredPosition()||this.scrollToTop():this.scrollToAnchor()||this.scrollToTop(),this.scrolled=!0)},r.prototype.scrollToRestoredPosition=function(){var t,e;return t=null!=(e=this.restorationData)?e.scrollPosition:void 0,null!=t?(this.controller.scrollToPosition(t),!0):void 0},r.prototype.scrollToAnchor=function(){return null!=this.location.anchor?(this.controller.scrollToAnchor(this.location.anchor),!0):void 0},r.prototype.scrollToTop=function(){return this.controller.scrollToPosition({x:0,y:0})},r.prototype.recordTimingMetric=function(t){var e;return null!=(e=this.timingMetrics)[t]?e[t]:e[t]=(new Date).getTime()},r.prototype.getTimingMetrics=function(){return e.copyObject(this.timingMetrics)},n=function(t){switch(t){case"replace":return"replaceHistoryWithLocationAndRestorationIdentifier";case"advance":case"restore":return"pushHistoryWithLocationAndRestorationIdentifier"}},r.prototype.shouldIssueRequest=function(){return"restore"===this.action?!this.hasCachedSnapshot():!0},r.prototype.cacheSnapshot=function(){return this.snapshotCached?void 0:(this.controller.cacheSnapshot(),this.snapshotCached=!0)},r.prototype.render=function(t){return this.cancelRender(),this.frame=requestAnimationFrame(function(e){return function(){return e.frame=null,t.call(e)}}(this))},r.prototype.cancelRender=function(){return this.frame?cancelAnimationFrame(this.frame):void 0},r}()}.call(this),function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};e.Controller=function(){function r(){this.clickBubbled=t(this.clickBubbled,this),this.clickCaptured=t(this.clickCaptured,this),this.pageLoaded=t(this.pageLoaded,this),this.history=new e.History(this),this.view=new e.View(this),this.scrollManager=new e.ScrollManager(this),this.restorationData={},this.clearCache(),this.setProgressBarDelay(500)}return r.prototype.start=function(){return e.supported&&!this.started?(addEventListener("click",this.clickCaptured,!0),addEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.start(),this.startHistory(),this.started=!0,this.enabled=!0):void 0},r.prototype.disable=function(){return this.enabled=!1},r.prototype.stop=function(){return this.started?(removeEventListener("click",this.clickCaptured,!0),removeEventListener("DOMContentLoaded",this.pageLoaded,!1),this.scrollManager.stop(),this.stopHistory(),this.started=!1):void 0},r.prototype.clearCache=function(){return this.cache=new e.SnapshotCache(10)},r.prototype.visit=function(t,r){var n,o;return null==r&&(r={}),t=e.Location.wrap(t),this.applicationAllowsVisitingLocation(t)?this.locationIsVisitable(t)?(n=null!=(o=r.action)?o:"advance",this.adapter.visitProposedToLocationWithAction(t,n)):window.location=t:void 0},r.prototype.startVisitToLocationWithAction=function(t,r,n){var o;return e.supported?(o=this.getRestorationDataForIdentifier(n),this.startVisit(t,r,{restorationData:o})):window.location=t},r.prototype.setProgressBarDelay=function(t){return this.progressBarDelay=t},r.prototype.startHistory=function(){return this.location=e.Location.wrap(window.location),this.restorationIdentifier=e.uuid(),this.history.start(),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.stopHistory=function(){return this.history.stop()},r.prototype.pushHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.push(this.location,this.restorationIdentifier)},r.prototype.replaceHistoryWithLocationAndRestorationIdentifier=function(t,r){return this.restorationIdentifier=r,this.location=e.Location.wrap(t),this.history.replace(this.location,this.restorationIdentifier)},r.prototype.historyPoppedToLocationWithRestorationIdentifier=function(t,r){var n;return this.restorationIdentifier=r,this.enabled?(n=this.getRestorationDataForIdentifier(this.restorationIdentifier),this.startVisit(t,"restore",{restorationIdentifier:this.restorationIdentifier,restorationData:n,historyChanged:!0}),this.location=e.Location.wrap(t)):this.adapter.pageInvalidated()},r.prototype.getCachedSnapshotForLocation=function(t){var e;return e=this.cache.get(t),e?e.clone():void 0},r.prototype.shouldCacheSnapshot=function(){return this.view.getSnapshot().isCacheable()},r.prototype.cacheSnapshot=function(){var t;return this.shouldCacheSnapshot()?(this.notifyApplicationBeforeCachingSnapshot(),t=this.view.getSnapshot(),this.cache.put(this.lastRenderedLocation,t.clone())):void 0},r.prototype.scrollToAnchor=function(t){var e;return(e=this.view.getElementForAnchor(t))?this.scrollToElement(e):this.scrollToPosition({x:0,y:0})},r.prototype.scrollToElement=function(t){return this.scrollManager.scrollToElement(t)},r.prototype.scrollToPosition=function(t){return this.scrollManager.scrollToPosition(t)},r.prototype.scrollPositionChanged=function(t){var e;return e=this.getCurrentRestorationData(),e.scrollPosition=t},r.prototype.render=function(t,e){return this.view.render(t,e)},r.prototype.viewInvalidated=function(){return this.adapter.pageInvalidated()},r.prototype.viewWillRender=function(t){return this.notifyApplicationBeforeRender(t)},r.prototype.viewRendered=function(){return this.lastRenderedLocation=this.currentVisit.location,this.notifyApplicationAfterRender()},r.prototype.pageLoaded=function(){return this.lastRenderedLocation=this.location,this.notifyApplicationAfterPageLoad()},r.prototype.clickCaptured=function(){return removeEventListener("click",this.clickBubbled,!1),addEventListener("click",this.clickBubbled,!1)},r.prototype.clickBubbled=function(t){var e,r,n;return this.enabled&&this.clickEventIsSignificant(t)&&(r=this.getVisitableLinkForNode(t.target))&&(n=this.getVisitableLocationForLink(r))&&this.applicationAllowsFollowingLinkToLocation(r,n)?(t.preventDefault(),e=this.getActionForLink(r),
this.visit(n,{action:e})):void 0},r.prototype.applicationAllowsFollowingLinkToLocation=function(t,e){var r;return r=this.notifyApplicationAfterClickingLinkToLocation(t,e),!r.defaultPrevented},r.prototype.applicationAllowsVisitingLocation=function(t){var e;return e=this.notifyApplicationBeforeVisitingLocation(t),!e.defaultPrevented},r.prototype.notifyApplicationAfterClickingLinkToLocation=function(t,r){return e.dispatch("turbolinks:click",{target:t,data:{url:r.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationBeforeVisitingLocation=function(t){return e.dispatch("turbolinks:before-visit",{data:{url:t.absoluteURL},cancelable:!0})},r.prototype.notifyApplicationAfterVisitingLocation=function(t){return e.dispatch("turbolinks:visit",{data:{url:t.absoluteURL}})},r.prototype.notifyApplicationBeforeCachingSnapshot=function(){return e.dispatch("turbolinks:before-cache")},r.prototype.notifyApplicationBeforeRender=function(t){return e.dispatch("turbolinks:before-render",{data:{newBody:t}})},r.prototype.notifyApplicationAfterRender=function(){return e.dispatch("turbolinks:render")},r.prototype.notifyApplicationAfterPageLoad=function(t){return null==t&&(t={}),e.dispatch("turbolinks:load",{data:{url:this.location.absoluteURL,timing:t}})},r.prototype.startVisit=function(t,e,r){var n;return null!=(n=this.currentVisit)&&n.cancel(),this.currentVisit=this.createVisit(t,e,r),this.currentVisit.start(),this.notifyApplicationAfterVisitingLocation(t)},r.prototype.createVisit=function(t,r,n){var o,i,s,a,u;return i=null!=n?n:{},a=i.restorationIdentifier,s=i.restorationData,o=i.historyChanged,u=new e.Visit(this,t,r),u.restorationIdentifier=null!=a?a:e.uuid(),u.restorationData=e.copyObject(s),u.historyChanged=o,u.referrer=this.location,u},r.prototype.visitCompleted=function(t){return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())},r.prototype.clickEventIsSignificant=function(t){return!(t.defaultPrevented||t.target.isContentEditable||t.which>1||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey)},r.prototype.getVisitableLinkForNode=function(t){return this.nodeIsVisitable(t)?e.closest(t,"a[href]:not([target]):not([download])"):void 0},r.prototype.getVisitableLocationForLink=function(t){var r;return r=new e.Location(t.getAttribute("href")),this.locationIsVisitable(r)?r:void 0},r.prototype.getActionForLink=function(t){var e;return null!=(e=t.getAttribute("data-turbolinks-action"))?e:"advance"},r.prototype.nodeIsVisitable=function(t){var r;return(r=e.closest(t,"[data-turbolinks]"))?"false"!==r.getAttribute("data-turbolinks"):!0},r.prototype.locationIsVisitable=function(t){return t.isPrefixedBy(this.view.getRootLocation())&&t.isHTML()},r.prototype.getCurrentRestorationData=function(){return this.getRestorationDataForIdentifier(this.restorationIdentifier)},r.prototype.getRestorationDataForIdentifier=function(t){var e;return null!=(e=this.restorationData)[t]?e[t]:e[t]={}},r}()}.call(this),function(){!function(){var t,e;if((t=e=document.currentScript)&&!e.hasAttribute("data-turbolinks-suppress-warning"))for(;t=t.parentNode;)if(t===document.body)return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s",e.outerHTML)}()}.call(this),function(){var t,r,n;e.start=function(){return r()?(null==e.controller&&(e.controller=t()),e.controller.start()):void 0},r=function(){return null==window.Turbolinks&&(window.Turbolinks=e),n()},t=function(){var t;return t=new e.Controller,t.adapter=new e.BrowserAdapter(t),t},n=function(){return window.Turbolinks===e},n()&&e.start()}.call(this)}).call(this),"object"==typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd&&define(e)}).call(this);
/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

/*!
 * imagesLoaded PACKAGED v3.1.6
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

(function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,o=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if("object"==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;e.length>t;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),o="object"==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(o?n:{listener:n,once:!1});return this},i.on=n("addListener"),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n("addOnceListener"),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;e.length>t;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,o=this.getListenersAsObject(e);for(r in o)o.hasOwnProperty(r)&&(i=t(o[r],n),-1!==i&&o[r].splice(i,1));return this},i.off=n("removeListener"),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,o=e?this.removeListener:this.addListener,s=e?this.removeListeners:this.addListeners;if("object"!=typeof t||t instanceof RegExp)for(i=n.length;i--;)o.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&("function"==typeof r?o.call(this,i,r):s.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if("string"===n)delete i[e];else if("object"===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n("removeEvent"),i.emitEvent=function(e,t){var n,i,r,o,s=this.getListenersAsObject(e);for(r in s)if(s.hasOwnProperty(r))for(i=s[r].length;i--;)n=s[r][i],n.once===!0&&this.removeListener(e,n.listener),o=n.listener.apply(this,t||[]),o===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n("emitEvent"),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=o,e},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return e}):"object"==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent("on"+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent("on"+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var o={bind:i,unbind:r};"function"==typeof define&&define.amd?define("eventie/eventie",o):e.eventie=o}(this),function(e,t){"function"==typeof define&&define.amd?define(["eventEmitter/EventEmitter","eventie/eventie"],function(n,i){return t(e,n,i)}):"object"==typeof exports?module.exports=t(e,require("eventEmitter"),require("eventie")):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(this,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return"[object Array]"===d.call(e)}function o(e){var t=[];if(r(e))t=e;else if("number"==typeof e.length)for(var n=0,i=e.length;i>n;n++)t.push(e[n]);else t.push(e);return t}function s(e,t,n){if(!(this instanceof s))return new s(e,t);"string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=o(e),this.options=i({},this.options),"function"==typeof t?n=t:i(this.options,t),n&&this.on("always",n),this.getImages(),a&&(this.jqDeferred=new a.Deferred);var r=this;setTimeout(function(){r.check()})}function c(e){this.img=e}function f(e){this.src=e,v[e]=this}var a=e.jQuery,u=e.console,h=u!==void 0,d=Object.prototype.toString;s.prototype=new t,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var e=0,t=this.elements.length;t>e;e++){var n=this.elements[e];"IMG"===n.nodeName&&this.addImage(n);var i=n.nodeType;if(i&&(1===i||9===i||11===i))for(var r=n.querySelectorAll("img"),o=0,s=r.length;s>o;o++){var c=r[o];this.addImage(c)}}},s.prototype.addImage=function(e){var t=new c(e);this.images.push(t)},s.prototype.check=function(){function e(e,r){return t.options.debug&&h&&u.log("confirm",e,r),t.progress(e),n++,n===i&&t.complete(),!0}var t=this,n=0,i=this.images.length;if(this.hasAnyBroken=!1,!i)return this.complete(),void 0;for(var r=0;i>r;r++){var o=this.images[r];o.on("confirm",e),o.check()}},s.prototype.progress=function(e){this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded;var t=this;setTimeout(function(){t.emit("progress",t,e),t.jqDeferred&&t.jqDeferred.notify&&t.jqDeferred.notify(t,e)})},s.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";this.isComplete=!0;var t=this;setTimeout(function(){if(t.emit(e,t),t.emit("always",t),t.jqDeferred){var n=t.hasAnyBroken?"reject":"resolve";t.jqDeferred[n](t)}})},a&&(a.fn.imagesLoaded=function(e,t){var n=new s(this,e,t);return n.jqDeferred.promise(a(this))}),c.prototype=new t,c.prototype.check=function(){var e=v[this.img.src]||new f(this.img.src);if(e.isConfirmed)return this.confirm(e.isLoaded,"cached was confirmed"),void 0;if(this.img.complete&&void 0!==this.img.naturalWidth)return this.confirm(0!==this.img.naturalWidth,"naturalWidth"),void 0;var t=this;e.on("confirm",function(e,n){return t.confirm(e.isLoaded,n),!0}),e.check()},c.prototype.confirm=function(e,t){this.isLoaded=e,this.emit("confirm",this,t)};var v={};return f.prototype=new t,f.prototype.check=function(){if(!this.isChecked){var e=new Image;n.bind(e,"load",this),n.bind(e,"error",this),e.src=this.src,this.isChecked=!0}},f.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},f.prototype.onload=function(e){this.confirm(!0,"onload"),this.unbindProxyEvents(e)},f.prototype.onerror=function(e){this.confirm(!1,"onerror"),this.unbindProxyEvents(e)},f.prototype.confirm=function(e,t){this.isConfirmed=!0,this.isLoaded=e,this.emit("confirm",this,t)},f.prototype.unbindProxyEvents=function(e){n.unbind(e.target,"load",this),n.unbind(e.target,"error",this)},s});
/*!
 * jQuery Mousewheel 3.1.13
 *
 * Copyright 2015 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){/*var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16*/return 16; /* thebazel */},getPageHeight:function(b){/*return a(b).height()*/return 100; /* thebazel */},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
!function(n){"function"==typeof define&&define.amd?define(["jquery"],function(e){return n(e)}):"object"==typeof module&&"object"==typeof module.exports?exports=n(require("jquery")):n(jQuery)}(function(n){function e(n){var e=7.5625,t=2.75;return n<1/t?e*n*n:n<2/t?e*(n-=1.5/t)*n+.75:n<2.5/t?e*(n-=2.25/t)*n+.9375:e*(n-=2.625/t)*n+.984375}void 0!==n.easing&&(n.easing.jswing=n.easing.swing);var t=Math.pow,u=Math.sqrt,r=Math.sin,i=Math.cos,a=Math.PI,c=1.70158,o=1.525*c,s=2*a/3,f=2*a/4.5;n.extend(n.easing,{def:"easeOutQuad",swing:function(e){return n.easing[n.easing.def](e)},easeInQuad:function(n){return n*n},easeOutQuad:function(n){return 1-(1-n)*(1-n)},easeInOutQuad:function(n){return n<.5?2*n*n:1-t(-2*n+2,2)/2},easeInCubic:function(n){return n*n*n},easeOutCubic:function(n){return 1-t(1-n,3)},easeInOutCubic:function(n){return n<.5?4*n*n*n:1-t(-2*n+2,3)/2},easeInQuart:function(n){return n*n*n*n},easeOutQuart:function(n){return 1-t(1-n,4)},easeInOutQuart:function(n){return n<.5?8*n*n*n*n:1-t(-2*n+2,4)/2},easeInQuint:function(n){return n*n*n*n*n},easeOutQuint:function(n){return 1-t(1-n,5)},easeInOutQuint:function(n){return n<.5?16*n*n*n*n*n:1-t(-2*n+2,5)/2},easeInSine:function(n){return 1-i(n*a/2)},easeOutSine:function(n){return r(n*a/2)},easeInOutSine:function(n){return-(i(a*n)-1)/2},easeInExpo:function(n){return 0===n?0:t(2,10*n-10)},easeOutExpo:function(n){return 1===n?1:1-t(2,-10*n)},easeInOutExpo:function(n){return 0===n?0:1===n?1:n<.5?t(2,20*n-10)/2:(2-t(2,-20*n+10))/2},easeInCirc:function(n){return 1-u(1-t(n,2))},easeOutCirc:function(n){return u(1-t(n-1,2))},easeInOutCirc:function(n){return n<.5?(1-u(1-t(2*n,2)))/2:(u(1-t(-2*n+2,2))+1)/2},easeInElastic:function(n){return 0===n?0:1===n?1:-t(2,10*n-10)*r((10*n-10.75)*s)},easeOutElastic:function(n){return 0===n?0:1===n?1:t(2,-10*n)*r((10*n-.75)*s)+1},easeInOutElastic:function(n){return 0===n?0:1===n?1:n<.5?-(t(2,20*n-10)*r((20*n-11.125)*f))/2:t(2,-20*n+10)*r((20*n-11.125)*f)/2+1},easeInBack:function(n){return(c+1)*n*n*n-c*n*n},easeOutBack:function(n){return 1+(c+1)*t(n-1,3)+c*t(n-1,2)},easeInOutBack:function(n){return n<.5?t(2*n,2)*(7.189819*n-o)/2:(t(2*n-2,2)*((o+1)*(2*n-2)+o)+2)/2},easeInBounce:function(n){return 1-e(1-n)},easeOutBounce:e,easeInOutBounce:function(n){return n<.5?(1-e(1-2*n))/2:(1+e(2*n-1))/2}})});

/*!
  hey, [be]Lazy.js - v1.8.2 - 2016.10.25
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
  (function(q,m){"function"===typeof define&&define.amd?define(m):"object"===typeof exports?module.exports=m():q.Blazy=m()})(this,function(){function q(b){var c=b._util;c.elements=E(b.options);c.count=c.elements.length;c.destroyed&&(c.destroyed=!1,b.options.container&&l(b.options.container,function(a){n(a,"scroll",c.validateT)}),n(window,"resize",c.saveViewportOffsetT),n(window,"resize",c.validateT),n(window,"scroll",c.validateT));m(b)}function m(b){for(var c=b._util,a=0;a<c.count;a++){var d=c.elements[a],e;a:{var g=d;e=b.options;var p=g.getBoundingClientRect();if(e.container&&y&&(g=g.closest(e.containerClass))){g=g.getBoundingClientRect();e=r(g,f)?r(p,{top:g.top-e.offset,right:g.right+e.offset,bottom:g.bottom+e.offset,left:g.left-e.offset}):!1;break a}e=r(p,f)}if(e||t(d,b.options.successClass))b.load(d),c.elements.splice(a,1),c.count--,a--}0===c.count&&b.destroy()}function r(b,c){return b.right>=c.left&&b.bottom>=c.top&&b.left<=c.right&&b.top<=c.bottom}function z(b,c,a){if(!t(b,a.successClass)&&(c||a.loadInvisible||0<b.offsetWidth&&0<b.offsetHeight))if(c=b.getAttribute(u)||b.getAttribute(a.src)){c=c.split(a.separator);var d=c[A&&1<c.length?1:0],e=b.getAttribute(a.srcset),g="img"===b.nodeName.toLowerCase(),p=(c=b.parentNode)&&"picture"===c.nodeName.toLowerCase();if(g||void 0===b.src){var h=new Image,w=function(){a.error&&a.error(b,"invalid");v(b,a.errorClass);k(h,"error",w);k(h,"load",f)},f=function(){g?p||B(b,d,e):b.style.backgroundImage='url("'+d+'")';x(b,a);k(h,"load",f);k(h,"error",w)};p&&(h=b,l(c.getElementsByTagName("source"),function(b){var c=a.srcset,e=b.getAttribute(c);e&&(b.setAttribute("srcset",e),b.removeAttribute(c))}));n(h,"error",w);n(h,"load",f);B(h,d,e)}else b.src=d,x(b,a)}else"video"===b.nodeName.toLowerCase()?(l(b.getElementsByTagName("source"),function(b){var c=a.src,e=b.getAttribute(c);e&&(b.setAttribute("src",e),b.removeAttribute(c))}),b.load(),x(b,a)):(a.error&&a.error(b,"missing"),v(b,a.errorClass))}function x(b,c){v(b,c.successClass);c.success&&c.success(b);b.removeAttribute(c.src);b.removeAttribute(c.srcset);l(c.breakpoints,function(a){b.removeAttribute(a.src)})}function B(b,c,a){a&&b.setAttribute("srcset",a);b.src=c}function t(b,c){return-1!==(" "+b.className+" ").indexOf(" "+c+" ")}function v(b,c){t(b,c)||(b.className+=" "+c)}function E(b){var c=[];b=b.root.querySelectorAll(b.selector);for(var a=b.length;a--;c.unshift(b[a]));return c}function C(b){f.bottom=(window.innerHeight||document.documentElement.clientHeight)+b;f.right=(window.innerWidth||document.documentElement.clientWidth)+b}function n(b,c,a){b.attachEvent?b.attachEvent&&b.attachEvent("on"+c,a):b.addEventListener(c,a,{capture:!1,passive:!0})}function k(b,c,a){b.detachEvent?b.detachEvent&&b.detachEvent("on"+c,a):b.removeEventListener(c,a,{capture:!1,passive:!0})}function l(b,c){if(b&&c)for(var a=b.length,d=0;d<a&&!1!==c(b[d],d);d++);}function D(b,c,a){var d=0;return function(){var e=+new Date;e-d<c||(d=e,b.apply(a,arguments))}}var u,f,A,y;return function(b){if(!document.querySelectorAll){var c=document.createStyleSheet();document.querySelectorAll=function(a,b,d,h,f){f=document.all;b=[];a=a.replace(/\[for\b/gi,"[htmlFor").split(",");for(d=a.length;d--;){c.addRule(a[d],"k:v");for(h=f.length;h--;)f[h].currentStyle.k&&b.push(f[h]);c.removeRule(0)}return b}}var a=this,d=a._util={};d.elements=[];d.destroyed=!0;a.options=b||{};a.options.error=a.options.error||!1;a.options.offset=a.options.offset||100;a.options.root=a.options.root||document;a.options.success=a.options.success||!1;a.options.selector=a.options.selector||".b-lazy";a.options.separator=a.options.separator||"|";a.options.containerClass=a.options.container;a.options.container=a.options.containerClass?document.querySelectorAll(a.options.containerClass):!1;a.options.errorClass=a.options.errorClass||"b-error";a.options.breakpoints=a.options.breakpoints||!1;a.options.loadInvisible=a.options.loadInvisible||!1;a.options.successClass=a.options.successClass||"b-loaded";a.options.validateDelay=a.options.validateDelay||25;a.options.saveViewportOffsetDelay=a.options.saveViewportOffsetDelay||50;a.options.srcset=a.options.srcset||"data-srcset";a.options.src=u=a.options.src||"data-src";y=Element.prototype.closest;A=1<window.devicePixelRatio;f={};f.top=0-a.options.offset;f.left=0-a.options.offset;a.revalidate=function(){q(a)};a.load=function(a,b){var c=this.options;void 0===a.length?z(a,b,c):l(a,function(a){z(a,b,c)})};a.destroy=function(){var a=this._util;this.options.container&&l(this.options.container,function(b){k(b,"scroll",a.validateT)});k(window,"scroll",a.validateT);k(window,"resize",a.validateT);k(window,"resize",a.saveViewportOffsetT);a.count=0;a.elements.length=0;a.destroyed=!0};d.validateT=D(function(){m(a)},a.options.validateDelay,a);d.saveViewportOffsetT=D(function(){C(a.options.offset)},a.options.saveViewportOffsetDelay,a);C(a.options.offset);l(a.options.breakpoints,function(a){if(a.width>=window.screen.width)return u=a.src,!1});setTimeout(function(){q(a)})}});
!function(e){"use strict";var n=function(e,t){var r=/[^\w\-\.:]/.test(e)?new Function(n.arg+",tmpl","var _e=tmpl.encode"+n.helper+",_s='"+e.replace(n.regexp,n.func)+"';return _s;"):n.cache[e]=n.cache[e]||n(n.load(e));return t?r(t,n):function(e){return r(e,n)}};n.cache={},n.load=function(e){return document.getElementById(e).innerHTML},n.regexp=/([\s'\\])(?!(?:[^{]|\{(?!%))*%\})|(?:\{%(=|#)([\s\S]+?)%\})|(\{%)|(%\})/g,n.func=function(e,n,t,r,c,u){return n?{"\n":"\\n","\r":"\\r","\t":"\\t"," ":" "}[n]||"\\"+n:t?"="===t?"'+_e("+r+")+'":"'+("+r+"==null?'':"+r+")+'":c?"';":u?"_s+='":void 0},n.encReg=/[<>&"'\x00]/g,n.encMap={"<":"&lt;",">":"&gt;","&":"&amp;",'"':"&quot;","'":"&#39;"},n.encode=function(e){return(null==e?"":""+e).replace(n.encReg,function(e){return n.encMap[e]||""})},n.arg="o",n.helper=",print=function(s,e){_s+=e?(s==null?'':s):_e(s);},include=function(s,d){_s+=tmpl(s,d);}","function"==typeof define&&define.amd?define(function(){return n}):"object"==typeof module&&module.exports?module.exports=n:e.tmpl=n}(this);
//# sourceMappingURL=tmpl.min.js.map
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* Geohash encoding/decoding and associated functions   (c) Chris Veness 2014-2016 / MIT Licence  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

'use strict';


/**
 * Geohash encode, decode, bounds, neighbours.
 *
 * @namespace
 */
var Geohash = {};

/* (Geohash-specific) Base32 map */
Geohash.base32 = '0123456789bcdefghjkmnpqrstuvwxyz';

/**
 * Encodes latitude/longitude to geohash, either to specified precision or to automatically
 * evaluated precision.
 *
 * @param   {number} lat - Latitude in degrees.
 * @param   {number} lon - Longitude in degrees.
 * @param   {number} [precision] - Number of characters in resulting geohash.
 * @returns {string} Geohash of supplied latitude/longitude.
 * @throws  Invalid geohash.
 *
 * @example
 *     var geohash = Geohash.encode(52.205, 0.119, 7); // geohash: 'u120fxw'
 */
Geohash.encode = function(lat, lon, precision) {
    // infer precision?
    if (typeof precision == 'undefined') {
        // refine geohash until it matches precision of supplied lat/lon
        for (var p=1; p<=12; p++) {
            var hash = Geohash.encode(lat, lon, p);
            var posn = Geohash.decode(hash);
            if (posn.lat==lat && posn.lon==lon) return hash;
        }
        precision = 12; // set to maximum
    }

    lat = Number(lat);
    lon = Number(lon);
    precision = Number(precision);

    if (isNaN(lat) || isNaN(lon) || isNaN(precision)) throw new Error('Invalid geohash');

    var idx = 0; // index into base32 map
    var bit = 0; // each char holds 5 bits
    var evenBit = true;
    var geohash = '';

    var latMin =  -90, latMax =  90;
    var lonMin = -180, lonMax = 180;

    while (geohash.length < precision) {
        if (evenBit) {
            // bisect E-W longitude
            var lonMid = (lonMin + lonMax) / 2;
            if (lon >= lonMid) {
                idx = idx*2 + 1;
                lonMin = lonMid;
            } else {
                idx = idx*2;
                lonMax = lonMid;
            }
        } else {
            // bisect N-S latitude
            var latMid = (latMin + latMax) / 2;
            if (lat >= latMid) {
                idx = idx*2 + 1;
                latMin = latMid;
            } else {
                idx = idx*2;
                latMax = latMid;
            }
        }
        evenBit = !evenBit;

        if (++bit == 5) {
            // 5 bits gives us a character: append it and start over
            geohash += Geohash.base32.charAt(idx);
            bit = 0;
            idx = 0;
        }
    }

    return geohash;
};


/**
 * Decode geohash to latitude/longitude (location is approximate centre of geohash cell,
 *     to reasonable precision).
 *
 * @param   {string} geohash - Geohash string to be converted to latitude/longitude.
 * @returns {{lat:number, lon:number}} (Center of) geohashed location.
 * @throws  Invalid geohash.
 *
 * @example
 *     var latlon = Geohash.decode('u120fxw'); // latlon: { lat: 52.205, lon: 0.1188 }
 */
Geohash.decode = function(geohash) {

    var bounds = Geohash.bounds(geohash); // <-- the hard work
    // now just determine the centre of the cell...

    var latMin = bounds.sw.lat, lonMin = bounds.sw.lon;
    var latMax = bounds.ne.lat, lonMax = bounds.ne.lon;

    // cell centre
    var lat = (latMin + latMax)/2;
    var lon = (lonMin + lonMax)/2;

    // round to close to centre without excessive precision: ⌊2-log10(Δ°)⌋ decimal places
    lat = lat.toFixed(Math.floor(2-Math.log(latMax-latMin)/Math.LN10));
    lon = lon.toFixed(Math.floor(2-Math.log(lonMax-lonMin)/Math.LN10));

    return { lat: Number(lat), lon: Number(lon) };
};


/**
 * Returns SW/NE latitude/longitude bounds of specified geohash.
 *
 * @param   {string} geohash - Cell that bounds are required of.
 * @returns {{sw: {lat: number, lon: number}, ne: {lat: number, lon: number}}}
 * @throws  Invalid geohash.
 */
Geohash.bounds = function(geohash) {
    if (geohash.length === 0) throw new Error('Invalid geohash');

    geohash = geohash.toLowerCase();

    var evenBit = true;
    var latMin =  -90, latMax =  90;
    var lonMin = -180, lonMax = 180;

    for (var i=0; i<geohash.length; i++) {
        var chr = geohash.charAt(i);
        var idx = Geohash.base32.indexOf(chr);
        if (idx == -1) throw new Error('Invalid geohash');

        for (var n=4; n>=0; n--) {
            var bitN = idx >> n & 1;
            if (evenBit) {
                // longitude
                var lonMid = (lonMin+lonMax) / 2;
                if (bitN == 1) {
                    lonMin = lonMid;
                } else {
                    lonMax = lonMid;
                }
            } else {
                // latitude
                var latMid = (latMin+latMax) / 2;
                if (bitN == 1) {
                    latMin = latMid;
                } else {
                    latMax = latMid;
                }
            }
            evenBit = !evenBit;
        }
    }

    var bounds = {
        sw: { lat: latMin, lon: lonMin },
        ne: { lat: latMax, lon: lonMax },
    };

    return bounds;
};


/**
 * Determines adjacent cell in given direction.
 *
 * @param   geohash - Cell to which adjacent cell is required.
 * @param   direction - Direction from geohash (N/S/E/W).
 * @returns {string} Geocode of adjacent cell.
 * @throws  Invalid geohash.
 */
Geohash.adjacent = function(geohash, direction) {
    // based on github.com/davetroy/geohash-js

    geohash = geohash.toLowerCase();
    direction = direction.toLowerCase();

    if (geohash.length === 0) throw new Error('Invalid geohash');
    if ('nsew'.indexOf(direction) == -1) throw new Error('Invalid direction');

    var neighbour = {
        n: [ 'p0r21436x8zb9dcf5h7kjnmqesgutwvy', 'bc01fg45238967deuvhjyznpkmstqrwx' ],
        s: [ '14365h7k9dcfesgujnmqp0r2twvyx8zb', '238967debc01fg45kmstqrwxuvhjyznp' ],
        e: [ 'bc01fg45238967deuvhjyznpkmstqrwx', 'p0r21436x8zb9dcf5h7kjnmqesgutwvy' ],
        w: [ '238967debc01fg45kmstqrwxuvhjyznp', '14365h7k9dcfesgujnmqp0r2twvyx8zb' ],
    };
    var border = {
        n: [ 'prxz',     'bcfguvyz' ],
        s: [ '028b',     '0145hjnp' ],
        e: [ 'bcfguvyz', 'prxz'     ],
        w: [ '0145hjnp', '028b'     ],
    };

    var lastCh = geohash.slice(-1);    // last character of hash
    var parent = geohash.slice(0, -1); // hash without last character

    var type = geohash.length % 2;

    // check for edge-cases which don't share common prefix
    if (border[direction][type].indexOf(lastCh) != -1 && parent !== '') {
        parent = Geohash.adjacent(parent, direction);
    }

    // append letter for direction to parent
    return parent + Geohash.base32.charAt(neighbour[direction][type].indexOf(lastCh));
};


/**
 * Returns all 8 adjacent cells to specified geohash.
 *
 * @param   {string} geohash - Geohash neighbours are required of.
 * @returns {{n,ne,e,se,s,sw,w,nw: string}}
 * @throws  Invalid geohash.
 */
Geohash.neighbours = function(geohash) {
    return {
        'n':  Geohash.adjacent(geohash, 'n'),
        'ne': Geohash.adjacent(Geohash.adjacent(geohash, 'n'), 'e'),
        'e':  Geohash.adjacent(geohash, 'e'),
        'se': Geohash.adjacent(Geohash.adjacent(geohash, 's'), 'e'),
        's':  Geohash.adjacent(geohash, 's'),
        'sw': Geohash.adjacent(Geohash.adjacent(geohash, 's'), 'w'),
        'w':  Geohash.adjacent(geohash, 'w'),
        'nw': Geohash.adjacent(Geohash.adjacent(geohash, 'n'), 'w'),
    };
};


/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
if (typeof module != 'undefined' && module.exports) module.exports = Geohash; // CommonJS, node.js

/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(d){var e=function(){if(d&&d.fn&&d.fn.select2&&d.fn.select2.amd)var e=d.fn.select2.amd;var t,n,i,h,o,s,f,g,m,v,y,_,r,a,w,l;function b(e,t){return r.call(e,t)}function c(e,t){var n,i,r,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e){for(s=(e=e.split("/")).length-1,y.nodeIdCompat&&w.test(e[s])&&(e[s]=e[s].replace(w,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),u-=1;else if(".."===p){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;0<u&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((h||g)&&f){for(u=(n=e.split("/")).length;0<u;u-=1){if(i=n.slice(0,u).join("/"),h)for(d=h.length;0<d;d-=1)if(r=(r=f[h.slice(0,d).join("/")])&&r[i]){o=r,a=u;break}if(o)break;!l&&g&&g[i]&&(l=g[i],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function A(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),s.apply(h,e.concat([t,n]))}}function x(t){return function(e){m[t]=e}}function D(e){if(b(v,e)){var t=v[e];delete v[e],_[e]=!0,o.apply(h,t)}if(!b(m,e)&&!b(_,e))throw new Error("No "+e);return m[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return e?u(e):[]}return e&&e.requirejs||(e?n=e:e={},m={},v={},y={},_={},r=Object.prototype.hasOwnProperty,a=[].slice,w=/\.js$/,f=function(e,t){var n,i=u(e),r=i[0],o=t[1];return e=i[1],r&&(n=D(r=c(r,o))),r?e=n&&n.normalize?n.normalize(e,function(t){return function(e){return c(e,t)}}(o)):c(e,o):(r=(i=u(e=c(e,o)))[0],e=i[1],r&&(n=D(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},g={require:function(e){return A(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:function(e){return function(){return y&&y.config&&y.config[e]||{}}}(e)}}},o=function(e,t,n,i){var r,o,s,a,l,c,u,d=[],p=typeof n;if(c=S(i=i||e),"undefined"==p||"function"==p){for(t=!t.length&&n.length?["require","exports","module"]:t,l=0;l<t.length;l+=1)if("require"===(o=(a=f(t[l],c)).f))d[l]=g.require(e);else if("exports"===o)d[l]=g.exports(e),u=!0;else if("module"===o)r=d[l]=g.module(e);else if(b(m,o)||b(v,o)||b(_,o))d[l]=D(o);else{if(!a.p)throw new Error(e+" missing "+o);a.p.load(a.n,A(i,!0),x(o),{}),d[l]=m[o]}s=n?n.apply(m[e],d):void 0,e&&(r&&r.exports!==h&&r.exports!==m[e]?m[e]=r.exports:s===h&&u||(m[e]=s))}else e&&(m[e]=n)},t=n=s=function(e,t,n,i,r){if("string"==typeof e)return g[e]?g[e](t):D(f(e,S(t)).f);if(!e.splice){if((y=e).deps&&s(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=h}return t=t||function(){},"function"==typeof n&&(n=i,i=r),i?o(h,e,t,n):setTimeout(function(){o(h,e,t,n)},4),s},s.config=function(e){return s(e)},t._defined=m,(i=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),b(m,e)||b(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0},e.requirejs=t,e.require=n,e.define=i),e.define("almond",function(){}),e.define("jquery",[],function(){var e=d||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(o){var r={};function u(e){var t=e.prototype,n=[];for(var i in t){"function"==typeof t[i]&&"constructor"!==i&&n.push(i)}return n}r.Extend=function(e,t){var n={}.hasOwnProperty;function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r.Decorate=function(i,r){var e=u(r),t=u(i);function o(){var e=Array.prototype.unshift,t=r.prototype.constructor.length,n=i.prototype.constructor;0<t&&(e.call(arguments,i.prototype.constructor),n=r.prototype.constructor),n.apply(this,arguments)}r.displayName=i.displayName,o.prototype=new function(){this.constructor=o};for(var n=0;n<t.length;n++){var s=t[n];o.prototype[s]=i.prototype[s]}function a(e){var t=function(){};e in o.prototype&&(t=o.prototype[e]);var n=r.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}for(var l=0;l<e.length;l++){var c=e[l];o.prototype[c]=a(c)}return o};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,i=e.length;n<i;n++)e[n].apply(this,t)},r.Observable=e,r.generateChars=function(e){for(var t="",n=0;n<e;n++){t+=Math.floor(36*Math.random()).toString(36)}return t},r.bind=function(e,t){return function(){e.apply(t,arguments)}},r._convertData=function(e){for(var t in e){var n=t.split("-"),i=e;if(1!==n.length){for(var r=0;r<n.length;r++){var o=n[r];(o=o.substring(0,1).toLowerCase()+o.substring(1))in i||(i[o]={}),r==n.length-1&&(i[o]=e[t]),i=i[o]}delete e[t]}}return e},r.hasScroll=function(e,t){var n=o(t),i=t.style.overflowX,r=t.style.overflowY;return(i!==r||"hidden"!==r&&"visible"!==r)&&("scroll"===i||"scroll"===r||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},r.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},r.appendMany=function(e,t){if("1.7"===o.fn.jquery.substr(0,3)){var n=o();o.map(t,function(e){n=n.add(e)}),t=n}e.append(t)},r.__cache={};var n=0;return r.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++n),t=n.toString())),t},r.StoreData=function(e,t,n){var i=r.GetUniqueElementId(e);r.__cache[i]||(r.__cache[i]={}),r.__cache[i][t]=n},r.GetData=function(e,t){var n=r.GetUniqueElementId(e);return t?r.__cache[n]&&null!=r.__cache[n][t]?r.__cache[n][t]:o(e).data(t):r.__cache[n]},r.RemoveData=function(e){var t=r.GetUniqueElementId(e);null!=r.__cache[t]&&delete r.__cache[t],e.removeAttribute("data-select2-id")},r}),e.define("select2/results",["jquery","./utils"],function(h,f){function i(e,t,n){this.$element=e,this.data=n,this.options=t,i.__super__.constructor.call(this)}return f.Extend(i,f.Observable),i.prototype.render=function(){var e=h('<ul class="select2-results__options" role="listbox"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},i.prototype.clear=function(){this.$results.empty()},i.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=h('<li role="alert" aria-live="assertive" class="select2-results__option"></li>'),i=this.options.get("translations").get(e.message);n.append(t(i(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},i.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},i.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var i=e.results[n],r=this.option(i);t.push(r)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},i.prototype.position=function(e,t){t.find(".select2-results").append(e)},i.prototype.sort=function(e){return this.options.get("sorter")(e)},i.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");0<t.length?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},i.prototype.setClasses=function(){var t=this;this.data.current(function(e){var i=h.map(e,function(e){return e.id.toString()});t.$results.find(".select2-results__option[aria-selected]").each(function(){var e=h(this),t=f.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<h.inArray(n,i)?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},i.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},i.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},i.prototype.option=function(e){var t=document.createElement("li");t.className="select2-results__option";var n={role:"option","aria-selected":"false"},i=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var r in(null!=e.element&&i.call(e.element,":disabled")||null==e.element&&e.disabled)&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var o=n[r];t.setAttribute(r,o)}if(e.children){var s=h(t),a=document.createElement("strong");a.className="select2-results__group";h(a);this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],d=this.option(u);l.push(d)}var p=h("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(e,t);return f.StoreData(t,"data",e),t},i.prototype.bind=function(t,e){var l=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){l.clear(),l.append(e.data),t.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),t.on("results:append",function(e){l.append(e.data),t.isOpen()&&l.setClasses()}),t.on("query",function(e){l.hideMessages(),l.showLoading(e)}),t.on("select",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),t.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=l.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=l.getHighlightedResults();if(0!==e.length){var t=f.GetData(e[0],"data");"true"==e.attr("aria-selected")?l.trigger("close",{}):l.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var i=n-1;0===e.length&&(i=0);var r=t.eq(i);r.trigger("mouseenter");var o=l.$results.offset().top,s=r.offset().top,a=l.$results.scrollTop()+(s-o);0===i?l.$results.scrollTop(0):s-o<0&&l.$results.scrollTop(a)}}),t.on("results:next",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var i=t.eq(n);i.trigger("mouseenter");var r=l.$results.offset().top+l.$results.outerHeight(!1),o=i.offset().top+i.outerHeight(!1),s=l.$results.scrollTop()+o-r;0===n?l.$results.scrollTop(0):r<o&&l.$results.scrollTop(s)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){l.displayMessage(e)}),h.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=l.$results.scrollTop(),n=l.$results.get(0).scrollHeight-t+e.deltaY,i=0<e.deltaY&&t-e.deltaY<=0,r=e.deltaY<0&&n<=l.$results.height();i?(l.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):r&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var t=h(this),n=f.GetData(this,"data");"true"!==t.attr("aria-selected")?l.trigger("select",{originalEvent:e,data:n}):l.options.get("multiple")?l.trigger("unselect",{originalEvent:e,data:n}):l.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var t=f.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted"),l.trigger("results:focus",{data:t,element:h(this)})})},i.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},i.prototype.destroy=function(){this.$results.remove()},i.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,i=e.offset().top,r=this.$results.scrollTop()+(i-n),o=i-n;r-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(r)}},i.prototype.template=function(e,t){var n=this.options.get("templateResult"),i=this.options.get("escapeMarkup"),r=n(e,t);null==r?t.style.display="none":"string"==typeof r?t.innerHTML=i(r):h(t).append(r)},i}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(n,i,r){function o(e,t){this.$element=e,this.options=t,o.__super__.constructor.call(this)}return i.Extend(o,i.Observable),o.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=i.GetData(this.$element[0],"old-tabindex")?this._tabindex=i.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),e.attr("aria-disabled","false"),this.$selection=e},o.prototype.bind=function(e,t){var n=this,i=e.id+"-results";this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===r.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",i),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex),n.$selection.attr("aria-disabled","false")}),e.on("disable",function(){n.$selection.attr("tabindex","-1"),n.$selection.attr("aria-disabled","true")})},o.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},o.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){this!=t[0]&&i.GetData(this,"element").select2("close")})})},o.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},o.prototype.position=function(e,t){t.find(".selection").append(e)},o.prototype.destroy=function(){this._detachCloseHandler(this.container)},o.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},o.prototype.isEnabled=function(){return!this.isDisabled()},o.prototype.isDisabled=function(){return this.options.get("disabled")},o}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,i){function r(){r.__super__.constructor.apply(this,arguments)}return n.Extend(r,t),r.prototype.render=function(){var e=r.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},r.prototype.bind=function(t,e){var n=this;r.__super__.bind.apply(this,arguments);var i=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",i).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",i),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},r.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},r.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},r.prototype.selectionContainer=function(){return e("<span></span>")},r.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),i=this.display(t,n);n.empty().append(i);var r=t.title||t.text;r?n.attr("title",r):n.removeAttr("title")}else this.clear()},r}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(r,e,l){function n(e,t){n.__super__.constructor.apply(this,arguments)}return l.Extend(n,e),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(e,t){var i=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){i.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!i.isDisabled()){var t=r(this).parent(),n=l.GetData(t[0],"data");i.trigger("unselect",{originalEvent:e,data:n})}})},n.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},n.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},n.prototype.selectionContainer=function(){return r('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=this.selectionContainer(),o=this.display(i,r);r.append(o);var s=i.title||i.text;s&&r.attr("title",s),l.StoreData(r[0],"data",i),t.push(r)}var a=this.$selection.find(".select2-selection__rendered");l.appendMany(a,t)}},n}),e.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},t}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(r,i,a){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){i._handleClear(e)}),t.on("keypress",function(e){i._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.isDisabled()){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var i=a.GetData(n[0],"data"),r=this.$element.val();this.$element.val(this.placeholder.id);var o={data:i};if(this.trigger("clear",o),o.prevented)this.$element.val(r);else{for(var s=0;s<i.length;s++)if(o={data:i[s]},this.trigger("unselect",o),o.prevented)return void this.$element.val(r);this.$element.trigger("input").trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=i.DELETE&&t.which!=i.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){if(e.call(this,t),!(0<this.$selection.find(".select2-selection__placeholder").length||0===t.length)){var n=this.options.get("translations").get("removeAllItems"),i=r('<span class="select2-selection__clear" title="'+n()+'">&times;</span>');a.StoreData(i[0],"data",t),this.$selection.find(".select2-selection__rendered").prepend(i)}},e}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(i,a,l){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></li>');this.$searchContainer=t,this.$search=t.find("input");var n=e.call(this);return this._transferTabIndex(),n},e.prototype.bind=function(e,t,n){var i=this,r=t.id+"-results";e.call(this,t,n),t.on("open",function(){i.$search.attr("aria-controls",r),i.$search.trigger("focus")}),t.on("close",function(){i.$search.val(""),i.$search.removeAttr("aria-controls"),i.$search.removeAttr("aria-activedescendant"),i.$search.trigger("focus")}),t.on("enable",function(){i.$search.prop("disabled",!1),i._transferTabIndex()}),t.on("disable",function(){i.$search.prop("disabled",!0)}),t.on("focus",function(e){i.$search.trigger("focus")}),t.on("results:focus",function(e){e.data._resultId?i.$search.attr("aria-activedescendant",e.data._resultId):i.$search.removeAttr("aria-activedescendant")}),this.$selection.on("focusin",".select2-search--inline",function(e){i.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){i._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented(),e.which===l.BACKSPACE&&""===i.$search.val()){var t=i.$searchContainer.prev(".select2-selection__choice");if(0<t.length){var n=a.GetData(t[0],"data");i.searchRemoveChoice(n),e.preventDefault()}}}),this.$selection.on("click",".select2-search--inline",function(e){i.$search.val()&&e.stopPropagation()});var o=document.documentMode,s=o&&o<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){s?i.$selection.off("input.search input.searchcheck"):i.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(s&&"input"===e.type)i.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=l.SHIFT&&t!=l.CTRL&&t!=l.ALT&&t!=l.TAB&&i.handleSearch(e)}})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";""!==this.$search.attr("placeholder")?e=this.$selection.find(".select2-selection__rendered").width():e=.75*(this.$search.val().length+1)+"em";this.$search.css("width",e)},e}),e.define("select2/selection/eventRelay",["jquery"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var i=this,r=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){if(-1!==s.inArray(e,r)){t=t||{};var n=s.Event("select2:"+e,{params:t});i.$element.trigger(n),-1!==s.inArray(e,o)&&(t.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,n){function i(e){this.dict=e||{}}return i.prototype.all=function(){return this.dict},i.prototype.get=function(e){return this.dict[e]},i.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},i._cache={},i.loadPath=function(e){if(!(e in i._cache)){var t=n(e);i._cache[e]=t}return new i(i._cache[e])},i}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),e.define("select2/data/base",["../utils"],function(i){function n(e,t){n.__super__.constructor.call(this)}return i.Extend(n,i.Observable),n.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},n.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},n.prototype.bind=function(e,t){},n.prototype.destroy=function(){},n.prototype.generateResultId=function(e,t){var n=e.id+"-result-";return n+=i.generateChars(4),null!=t.id?n+="-"+t.id.toString():n+="-"+i.generateChars(4),n},n}),e.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var n=[],i=this;this.$element.find(":selected").each(function(){var e=l(this),t=i.item(e);n.push(t)}),e(n)},n.prototype.select=function(r){var o=this;if(r.selected=!0,l(r.element).is("option"))return r.element.selected=!0,void this.$element.trigger("input").trigger("change");if(this.$element.prop("multiple"))this.current(function(e){var t=[];(r=[r]).push.apply(r,e);for(var n=0;n<r.length;n++){var i=r[n].id;-1===l.inArray(i,t)&&t.push(i)}o.$element.val(t),o.$element.trigger("input").trigger("change")});else{var e=r.id;this.$element.val(e),this.$element.trigger("input").trigger("change")}},n.prototype.unselect=function(r){var o=this;if(this.$element.prop("multiple")){if(r.selected=!1,l(r.element).is("option"))return r.element.selected=!1,void this.$element.trigger("input").trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n].id;i!==r.id&&-1===l.inArray(i,t)&&t.push(i)}o.$element.val(t),o.$element.trigger("input").trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(i,e){var r=[],o=this;this.$element.children().each(function(){var e=l(this);if(e.is("option")||e.is("optgroup")){var t=o.item(e),n=o.matches(i,t);null!==n&&r.push(n)}}),e({results:r})},n.prototype.addOptions=function(e){a.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=l(t),i=this._normalizeItem(e);return i.element=t,a.StoreData(t,"data",i),n},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),i=[],r=0;r<n.length;r++){var o=l(n[r]),s=this.item(o);i.push(s)}t.children=i}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(e,f,g){function i(e,t){this._dataToConvert=t.get("data")||[],i.__super__.constructor.call(this,e,t)}return f.Extend(i,e),i.prototype.bind=function(e,t){i.__super__.bind.call(this,e,t),this.addOptions(this.convertToOptions(this._dataToConvert))},i.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),i.__super__.select.call(this,n)},i.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),i=n.map(function(){return t.item(g(this)).id}).get(),r=[];function o(e){return function(){return g(this).val()==e.id}}for(var s=0;s<e.length;s++){var a=this._normalizeItem(e[s]);if(0<=g.inArray(a.id,i)){var l=n.filter(o(a)),c=this.item(l),u=g.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d)}else{var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);f.appendMany(p,h)}r.push(p)}}return r},i}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,o){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return o.extend({},e,{q:e.term})},transport:function(e,t,n){var i=o.ajax(e);return i.then(t),i.fail(n),i}};return o.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(n,i){var r=this;null!=this._request&&(o.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var t=o.extend({type:"GET"},this.ajaxOptions);function e(){var e=t.transport(t,function(e){var t=r.processResults(e,n);r.options.get("debug")&&window.console&&console.error&&(t&&t.results&&o.isArray(t.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),i(t)},function(){"status"in e&&(0===e.status||"0"===e.status)||r.trigger("results:message",{message:"errorLoading"})});r._request=e}"function"==typeof t.url&&(t.url=t.url.call(this.$element,n)),"function"==typeof t.data&&(t.data=t.data.call(this.$element,n)),this.ajaxOptions.delay&&null!=n.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),e.define("select2/data/tags",["jquery"],function(u){function e(e,t,n){var i=n.get("tags"),r=n.get("createTag");void 0!==r&&(this.createTag=r);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),u.isArray(i))for(var s=0;s<i.length;s++){var a=i[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var i=t.results,r=0;r<i.length;r++){var o=i[r],s=null!=o.children&&!e({results:o.children},!0);if((o.text||"").toUpperCase()===(c.term||"").toUpperCase()||s)return!n&&(t.data=i,void u(t))}if(n)return!0;var a=d.createTag(c);if(null!=a){var l=d.option(a);l.attr("data-select2-tag",!0),d.addOptions([l]),d.insertTag(i,a)}t.results=i,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){var n=u.trim(t.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this.$element.find("option[data-select2-tag]").each(function(){this.selected||u(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(d){function e(e,t,n){var i=n.get("tokenizer");void 0!==i&&(this.tokenizer=i),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var i=this;t.term=t.term||"";var r=this.tokenizer(t,this.options,function(e){var t=i._normalizeItem(e);if(!i.$element.find("option").filter(function(){return d(this).val()===t.id}).length){var n=i.option(t);n.attr("data-select2-tag",!0),i._removeOldTags(),i.addOptions([n])}!function(e){i.trigger("select",{data:e})}(t)});r.term!==t.term&&(this.$search.length&&(this.$search.val(r.term),this.$search.trigger("focus")),t.term=r.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,i){for(var r=n.get("tokenSeparators")||[],o=t.term,s=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};s<o.length;){var l=o[s];if(-1!==d.inArray(l,r)){var c=o.substr(0,s),u=a(d.extend({},t,{term:c}));null!=u?(i(u),o=o.substr(s+1)||"",s=0):s++}else s++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(){i._checkIfMaximumSelected()})},e.prototype.query=function(e,t,n){var i=this;this._checkIfMaximumSelected(function(){e.call(i,t,n)})},e.prototype._checkIfMaximumSelected=function(e,n){var i=this;this.current(function(e){var t=null!=e?e.length:0;0<i.maximumSelectionLength&&t>=i.maximumSelectionLength?i.trigger("results:message",{message:"maximumSelected",args:{maximum:i.maximumSelectionLength}}):n&&n()})},e}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(o,e){function t(){}return t.prototype.render=function(e){var t=e.call(this),n=o('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="searchbox" aria-autocomplete="list" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),t.prepend(n),t},t.prototype.bind=function(e,t,n){var i=this,r=t.id+"-results";e.call(this,t,n),this.$search.on("keydown",function(e){i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){o(this).off("keyup")}),this.$search.on("keyup input",function(e){i.handleSearch(e)}),t.on("open",function(){i.$search.attr("tabindex",0),i.$search.attr("aria-controls",r),i.$search.trigger("focus"),window.setTimeout(function(){i.$search.trigger("focus")},0)}),t.on("close",function(){i.$search.attr("tabindex",-1),i.$search.removeAttr("aria-controls"),i.$search.removeAttr("aria-activedescendant"),i.$search.val(""),i.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||i.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(i.showSearch(e)?i.$searchContainer.removeClass("select2-search--hide"):i.$searchContainer.addClass("select2-search--hide"))}),t.on("results:focus",function(e){e.data._resultId?i.$search.attr("aria-activedescendant",e.data._resultId):i.$search.removeAttr("aria-activedescendant")})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),e.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,i){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,i)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),i=t.length-1;0<=i;i--){var r=t[i];this.placeholder.id===r.id&&n.splice(i,1)}return n},e}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,i){this.lastParams={},e.call(this,t,n,i),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("query",function(e){i.lastParams=e,i.loading=!0}),t.on("query:append",function(e){i.lastParams=e,i.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);if(!this.loading&&e){var t=this.$results.offset().top+this.$results.outerHeight(!1);this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=t+50&&this.loadMore()}},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="option" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(f,a){function e(e,t,n){this.$dropdownParent=f(n.get("dropdownParent")||document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("open",function(){i._showDropdown(),i._attachPositioningHandler(t),i._bindContainerResultHandlers(t)}),t.on("close",function(){i._hideDropdown(),i._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=f("<span></span>"),n=e.call(this);return t.append(n),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._bindContainerResultHandlers=function(e,t){if(!this._containerResultsHandlersBound){var n=this;t.on("results:all",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:append",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("results:message",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("select",function(){n._positionDropdown(),n._resizeDropdown()}),t.on("unselect",function(){n._positionDropdown(),n._resizeDropdown()}),this._containerResultsHandlersBound=!0}},e.prototype._attachPositioningHandler=function(e,t){var n=this,i="scroll.select2."+t.id,r="resize.select2."+t.id,o="orientationchange.select2."+t.id,s=this.$container.parents().filter(a.hasScroll);s.each(function(){a.StoreData(this,"select2-scroll-position",{x:f(this).scrollLeft(),y:f(this).scrollTop()})}),s.on(i,function(e){var t=a.GetData(this,"select2-scroll-position");f(this).scrollTop(t.y)}),f(window).on(i+" "+r+" "+o,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,i="resize.select2."+t.id,r="orientationchange.select2."+t.id;this.$container.parents().filter(a.hasScroll).off(n),f(window).off(n+" "+i+" "+r)},e.prototype._positionDropdown=function(){var e=f(window),t=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),i=null,r=this.$container.offset();r.bottom=r.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=r.top,o.bottom=r.top+o.height;var s=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<r.top-s,u=l>r.bottom+s,d={left:r.left,top:o.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h={top:0,left:0};(f.contains(document.body,p[0])||p[0].isConnected)&&(h=p.offset()),d.top-=h.top,d.left-=h.left,t||n||(i="below"),u||!c||t?!c&&u&&t&&(i="below"):i="above",("above"==i||t&&"below"!==i)&&(d.top=o.top-h.top-s),null!=i&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+i),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+i)),this.$dropdownContainer.css(d)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,i){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,i)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,i=0;i<t.length;i++){var r=t[i];r.children?n+=e(r.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),e.define("select2/dropdown/selectOnClose",["../utils"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("close",function(e){i._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var i=this.getHighlightedResults();if(!(i.length<1)){var r=o.GetData(i[0],"data");null!=r.element&&r.element.selected||null==r.element&&r.selected||this.trigger("select",{data:r})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(e){i._selectTriggered(e)}),t.on("unselect",function(e){i._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(c,u,d,p,h,f,g,m,v,y,s,t,_,w,$,b,A,x,D,S,C,E,O,T,q,j,L,I,e){function n(){this.reset()}return n.prototype.apply=function(e){if(null==(e=c.extend(!0,{},this.defaults,e)).dataAdapter){if(null!=e.ajax?e.dataAdapter=$:null!=e.data?e.dataAdapter=w:e.dataAdapter=_,0<e.minimumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,x)),0<e.maximumInputLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,D)),0<e.maximumSelectionLength&&(e.dataAdapter=y.Decorate(e.dataAdapter,S)),e.tags&&(e.dataAdapter=y.Decorate(e.dataAdapter,b)),null==e.tokenSeparators&&null==e.tokenizer||(e.dataAdapter=y.Decorate(e.dataAdapter,A)),null!=e.query){var t=u(e.amdBase+"compat/query");e.dataAdapter=y.Decorate(e.dataAdapter,t)}if(null!=e.initSelection){var n=u(e.amdBase+"compat/initSelection");e.dataAdapter=y.Decorate(e.dataAdapter,n)}}if(null==e.resultsAdapter&&(e.resultsAdapter=d,null!=e.ajax&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,T)),null!=e.placeholder&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,O)),e.selectOnClose&&(e.resultsAdapter=y.Decorate(e.resultsAdapter,L))),null==e.dropdownAdapter){if(e.multiple)e.dropdownAdapter=C;else{var i=y.Decorate(C,E);e.dropdownAdapter=i}if(0!==e.minimumResultsForSearch&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,j)),e.closeOnSelect&&(e.dropdownAdapter=y.Decorate(e.dropdownAdapter,I)),null!=e.dropdownCssClass||null!=e.dropdownCss||null!=e.adaptDropdownCssClass){var r=u(e.amdBase+"compat/dropdownCss");e.dropdownAdapter=y.Decorate(e.dropdownAdapter,r)}e.dropdownAdapter=y.Decorate(e.dropdownAdapter,q)}if(null==e.selectionAdapter){if(e.multiple?e.selectionAdapter=h:e.selectionAdapter=p,null!=e.placeholder&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,f)),e.allowClear&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,g)),e.multiple&&(e.selectionAdapter=y.Decorate(e.selectionAdapter,m)),null!=e.containerCssClass||null!=e.containerCss||null!=e.adaptContainerCssClass){var o=u(e.amdBase+"compat/containerCss");e.selectionAdapter=y.Decorate(e.selectionAdapter,o)}e.selectionAdapter=y.Decorate(e.selectionAdapter,v)}e.language=this._resolveLanguage(e.language),e.language.push("en");for(var s=[],a=0;a<e.language.length;a++){var l=e.language[a];-1===s.indexOf(l)&&s.push(l)}return e.language=s,e.translations=this._processTranslations(e.language,e.debug),e},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:y.escapeMarkup,language:{},matcher:function e(t,n){if(""===c.trim(t.term))return n;if(n.children&&0<n.children.length){for(var i=c.extend(!0,{},n),r=n.children.length-1;0<=r;r--)null==e(t,n.children[r])&&i.children.splice(r,1);return 0<i.children.length?i:e(t,i)}var o=a(n.text).toUpperCase(),s=a(t.term).toUpperCase();return-1<o.indexOf(s)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.applyFromElement=function(e,t){var n=e.language,i=this.defaults.language,r=t.prop("lang"),o=t.closest("[lang]").prop("lang"),s=Array.prototype.concat.call(this._resolveLanguage(r),this._resolveLanguage(n),this._resolveLanguage(i),this._resolveLanguage(o));return e.language=s,e},n.prototype._resolveLanguage=function(e){if(!e)return[];if(c.isEmptyObject(e))return[];if(c.isPlainObject(e))return[e];var t;t=c.isArray(e)?e:[e];for(var n=[],i=0;i<t.length;i++)if(n.push(t[i]),"string"==typeof t[i]&&0<t[i].indexOf("-")){var r=t[i].split("-")[0];n.push(r)}return n},n.prototype._processTranslations=function(e,t){for(var n=new s,i=0;i<e.length;i++){var r=new s,o=e[i];if("string"==typeof o)try{r=s.loadPath(o)}catch(e){try{o=this.defaults.amdLanguageBase+o,r=s.loadPath(o)}catch(e){t&&window.console&&console.warn&&console.warn('Select2: The language file for "'+o+'" could not be automatically loaded. A fallback will be used instead.')}}else r=c.isPlainObject(o)?new s(o):o;n.extend(r)}return n},n.prototype.set=function(e,t){var n={};n[c.camelCase(e)]=t;var i=y._convertData(n);c.extend(!0,this.defaults,i)},new n}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(i,d,r,p){function e(e,t){if(this.options=e,null!=t&&this.fromElement(t),null!=t&&(this.options=r.applyFromElement(this.options,t)),this.options=r.apply(this.options),t&&t.is("input")){var n=i(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=p.Decorate(this.options.dataAdapter,n)}}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),p.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),p.StoreData(e[0],"data",p.GetData(e[0],"select2Tags")),p.StoreData(e[0],"tags",!0)),p.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",p.GetData(e[0],"ajaxUrl")),p.StoreData(e[0],"ajax-Url",p.GetData(e[0],"ajaxUrl")));var n={};function i(e,t){return t.toUpperCase()}for(var r=0;r<e[0].attributes.length;r++){var o=e[0].attributes[r].name,s="data-";if(o.substr(0,s.length)==s){var a=o.substring(s.length),l=p.GetData(e[0],a);n[a.replace(/-([a-z])/g,i)]=l}}d.fn.jquery&&"1."==d.fn.jquery.substr(0,2)&&e[0].dataset&&(n=d.extend(!0,{},e[0].dataset,n));var c=d.extend(!0,{},p.GetData(e[0]),n);for(var u in c=p._convertData(c))-1<d.inArray(u,t)||(d.isPlainObject(this.options[u])?d.extend(this.options[u],c[u]):this.options[u]=c[u]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(o,c,u,i){var d=function(e,t){null!=u.GetData(e[0],"select2")&&u.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new c(t,e),d.__super__.constructor.call(this);var n=e.attr("tabindex")||0;u.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");var i=this.options.get("dataAdapter");this.dataAdapter=new i(e,this.options);var r=this.render();this._placeContainer(r);var o=this.options.get("selectionAdapter");this.selection=new o(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,r);var s=this.options.get("dropdownAdapter");this.dropdown=new s(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,r);var a=this.options.get("resultsAdapter");this.results=new a(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){l.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),u.StoreData(e[0],"select2",this),e.data("select2",this)};return u.Extend(d,u.Observable),d.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+u.generateChars(2):u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},d.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},d.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var i=this._resolveWidth(e,"style");return null!=i?i:this._resolveWidth(e,"element")}if("element"==t){var r=e.outerWidth(!1);return r<=0?"auto":r+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&1<=c.length)return c[1]}return null},d.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},d.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=u.bind(this._syncAttributes,this),this._syncS=u.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=e?(this._observer=new e(function(e){t._syncA(),t._syncS(null,e)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1))},d.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerSelectionEvents=function(){var n=this,i=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===o.inArray(e,i)&&n.trigger(e,t)})},d.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container.addClass("select2-container--open")}),this.on("close",function(){n.$container.removeClass("select2-container--open")}),this.on("enable",function(){n.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){n.$container.addClass("select2-container--disabled")}),this.on("blur",function(){n.$container.removeClass("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===i.ESC||t===i.TAB||t===i.UP&&e.altKey?(n.close(e),e.preventDefault()):t===i.ENTER?(n.trigger("results:select",{}),e.preventDefault()):t===i.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===i.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===i.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===i.ENTER||t===i.SPACE||t===i.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},d.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.isDisabled()?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},d.prototype._isChangeMutation=function(e,t){var n=!1,i=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){if(t)if(t.addedNodes&&0<t.addedNodes.length)for(var r=0;r<t.addedNodes.length;r++){t.addedNodes[r].selected&&(n=!0)}else t.removedNodes&&0<t.removedNodes.length?n=!0:o.isArray(t)&&o.each(t,function(e,t){if(i._isChangeMutation(e,t))return!(n=!0)});else n=!0;return n}},d.prototype._syncSubtree=function(e,t){var n=this._isChangeMutation(e,t),i=this;n&&this.dataAdapter.current(function(e){i.trigger("selection:update",{data:e})})},d.prototype.trigger=function(e,t){var n=d.__super__.trigger,i={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in i){var r=i[e],o={prevented:!1,name:e,args:t};if(n.call(this,r,o),o.prevented)return void(t.prevented=!0)}n.call(this,e,t)},d.prototype.toggleDropdown=function(){this.isDisabled()||(this.isOpen()?this.close():this.open())},d.prototype.open=function(){this.isOpen()||this.isDisabled()||this.trigger("query",{})},d.prototype.close=function(e){this.isOpen()&&this.trigger("close",{originalEvent:e})},d.prototype.isEnabled=function(){return!this.isDisabled()},d.prototype.isDisabled=function(){return this.options.get("disabled")},d.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},d.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},d.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},d.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},d.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},d.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];o.isArray(t)&&(t=o.map(t,function(e){return e.toString()})),this.$element.val(t).trigger("input").trigger("change")},d.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",u.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),u.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},d.prototype.render=function(){var e=o('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),u.StoreData(e[0],"element",this.$element),e},d}),e.define("select2/compat/utils",["jquery"],function(s){return{syncCssClasses:function(e,t,n){var i,r,o=[];(i=s.trim(e.attr("class")))&&s((i=""+i).split(/\s+/)).each(function(){0===this.indexOf("select2-")&&o.push(this)}),(i=s.trim(t.attr("class")))&&s((i=""+i).split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&null!=(r=n(this))&&o.push(r)}),e.attr("class",o.join(" "))}}}),e.define("select2/compat/containerCss",["jquery","./utils"],function(s,a){function l(e){return null}function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("containerCssClass")||"";s.isFunction(n)&&(n=n(this.$element));var i=this.options.get("adaptContainerCssClass");if(i=i||l,-1!==n.indexOf(":all:")){n=n.replace(":all:","");var r=i;i=function(e){var t=r(e);return null!=t?t+" "+e:e}}var o=this.options.get("containerCss")||{};return s.isFunction(o)&&(o=o(this.$element)),a.syncCssClasses(t,this.$element,i),t.css(o),t.addClass(n),t},e}),e.define("select2/compat/dropdownCss",["jquery","./utils"],function(s,a){function l(e){return null}function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("dropdownCssClass")||"";s.isFunction(n)&&(n=n(this.$element));var i=this.options.get("adaptDropdownCssClass");if(i=i||l,-1!==n.indexOf(":all:")){n=n.replace(":all:","");var r=i;i=function(e){var t=r(e);return null!=t?t+" "+e:e}}var o=this.options.get("dropdownCss")||{};return s.isFunction(o)&&(o=o(this.$element)),a.syncCssClasses(t,this.$element,i),t.css(o),t.addClass(n),t},e}),e.define("select2/compat/initSelection",["jquery"],function(i){function e(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=n.get("initSelection"),this._isInitialized=!1,e.call(this,t,n)}return e.prototype.current=function(e,t){var n=this;this._isInitialized?e.call(this,t):this.initSelection.call(null,this.$element,function(e){n._isInitialized=!0,i.isArray(e)||(e=[e]),t(e)})},e}),e.define("select2/compat/inputData",["jquery","../utils"],function(s,i){function e(e,t,n){this._currentData=[],this._valueSeparator=n.get("valueSeparator")||",","hidden"===t.prop("type")&&n.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),e.call(this,t,n)}return e.prototype.current=function(e,t){function i(e,t){var n=[];return e.selected||-1!==s.inArray(e.id,t)?(e.selected=!0,n.push(e)):e.selected=!1,e.children&&n.push.apply(n,i(e.children,t)),n}for(var n=[],r=0;r<this._currentData.length;r++){var o=this._currentData[r];n.push.apply(n,i(o,this.$element.val().split(this._valueSeparator)))}t(n)},e.prototype.select=function(e,t){if(this.options.get("multiple")){var n=this.$element.val();n+=this._valueSeparator+t.id,this.$element.val(n),this.$element.trigger("input").trigger("change")}else this.current(function(e){s.map(e,function(e){e.selected=!1})}),this.$element.val(t.id),this.$element.trigger("input").trigger("change")},e.prototype.unselect=function(e,r){var o=this;r.selected=!1,this.current(function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];r.id!=i.id&&t.push(i.id)}o.$element.val(t.join(o._valueSeparator)),o.$element.trigger("input").trigger("change")})},e.prototype.query=function(e,t,n){for(var i=[],r=0;r<this._currentData.length;r++){var o=this._currentData[r],s=this.matches(t,o);null!==s&&i.push(s)}n({results:i})},e.prototype.addOptions=function(e,t){var n=s.map(t,function(e){return i.GetData(e[0],"data")});this._currentData.push.apply(this._currentData,n)},e}),e.define("select2/compat/matcher",["jquery"],function(s){return function(o){return function(e,t){var n=s.extend(!0,{},t);if(null==e.term||""===s.trim(e.term))return n;if(t.children){for(var i=t.children.length-1;0<=i;i--){var r=t.children[i];o(e.term,r.text,r)||n.children.splice(i,1)}if(0<n.children.length)return n}return o(e.term,t.text,t)?n:null}}}),e.define("select2/compat/query",[],function(){function e(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.callback=n,this.options.get("query").call(null,t)},e}),e.define("select2/dropdown/attachContainer",[],function(){function e(e,t,n){e.call(this,t,n)}return e.prototype.position=function(e,t,n){n.find(".dropdown-wrapper").append(t),t.addClass("select2-dropdown--below"),n.addClass("select2-container--below")},e}),e.define("select2/dropdown/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$dropdown.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),e.define("select2/selection/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$selection.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),l=function(p){var h,f,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],g=Array.prototype.slice;if(p.event.fixHooks)for(var n=e.length;n;)p.event.fixHooks[e[--n]]=p.event.mouseHooks;var m=p.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],i,!1);else this.onmousewheel=i;p.data(this,"mousewheel-line-height",m.getLineHeight(this)),p.data(this,"mousewheel-page-height",m.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],i,!1);else this.onmousewheel=null;p.removeData(this,"mousewheel-line-height"),p.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){/*var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16*/return 16; /* thebazel */},getPageHeight:function(b){/*return a(b).height()*/return 100; /* thebazel */},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function i(e){var t,n=e||window.event,i=g.call(arguments,1),r=0,o=0,s=0,a=0,l=0;if((e=p.event.fix(n)).type="mousewheel","detail"in n&&(s=-1*n.detail),"wheelDelta"in n&&(s=n.wheelDelta),"wheelDeltaY"in n&&(s=n.wheelDeltaY),"wheelDeltaX"in n&&(o=-1*n.wheelDeltaX),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(o=-1*s,s=0),r=0===s?o:s,"deltaY"in n&&(r=s=-1*n.deltaY),"deltaX"in n&&(o=n.deltaX,0===s&&(r=-1*o)),0!==s||0!==o){if(1===n.deltaMode){var c=p.data(this,"mousewheel-line-height");r*=c,s*=c,o*=c}else if(2===n.deltaMode){var u=p.data(this,"mousewheel-page-height");r*=u,s*=u,o*=u}if(t=Math.max(Math.abs(s),Math.abs(o)),(!f||t<f)&&y(n,f=t)&&(f/=40),y(n,t)&&(r/=40,o/=40,s/=40),r=Math[1<=r?"floor":"ceil"](r/f),o=Math[1<=o?"floor":"ceil"](o/f),s=Math[1<=s?"floor":"ceil"](s/f),m.settings.normalizeOffset&&this.getBoundingClientRect){var d=this.getBoundingClientRect();a=e.clientX-d.left,l=e.clientY-d.top}return e.deltaX=o,e.deltaY=s,e.deltaFactor=f,e.offsetX=a,e.offsetY=l,e.deltaMode=0,i.unshift(e,r,o,s),h&&clearTimeout(h),h=setTimeout(v,200),(p.event.dispatch||p.event.handle).apply(this,i)}}function v(){f=null}function y(e,t){return m.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}p.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})},"function"==typeof e.define&&e.define.amd?e.define("jquery-mousewheel",["jquery"],l):"object"==typeof exports?module.exports=l:l(d),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(r,e,o,t,s){if(null==r.fn.select2){var a=["open","close","destroy"];r.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=r.extend(!0,{},t);new o(r(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,i=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=s.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,i)}),-1<r.inArray(t,a)?this:n}}return null==r.fn.select2.defaults&&(r.fn.select2.defaults=t),o}),{define:e.define,require:e.require}}(),t=e.require("jquery.select2");return d.fn.select2.amd=e,t});
/*! Select2 4.0.13 | https://github.com/select2/select2/blob/master/LICENSE.md */

!function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var n=jQuery.fn.select2.amd;n.define("select2/i18n/ru",[],function(){function n(n,e,r,u){return n%10<5&&n%10>0&&n%100<5||n%100>20?n%10>1?r:e:u}return{errorLoading:function(){return"Невозможно загрузить результаты"},inputTooLong:function(e){var r=e.input.length-e.maximum,u="Пожалуйста, введите на "+r+" символ";return u+=n(r,"","a","ов"),u+=" меньше"},inputTooShort:function(e){var r=e.minimum-e.input.length,u="Пожалуйста, введите ещё хотя бы "+r+" символ";return u+=n(r,"","a","ов")},loadingMore:function(){return"Загрузка данных…"},maximumSelected:function(e){var r="Вы можете выбрать не более "+e.maximum+" элемент";return r+=n(e.maximum,"","a","ов")},noResults:function(){return"Совпадений не найдено"},searching:function(){return"Поиск…"},removeAllItems:function(){return"Удалить все элементы"}}}),n.define,n.require}();
/*! checkboxes.js v1.2.0 | (c) 2013 - 2016 Rubens Mariuzzo | http://github.com/rmariuzzo/checkboxes.js/LICENSE */"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function a(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();!function(a){var b=function(){function b(a){_classCallCheck(this,b),this.$context=a}return _createClass(b,[{key:"check",value:function(){this.$context.find(":checkbox").filter(":not(:disabled)").filter(":visible").prop("checked",!0).trigger("change")}},{key:"uncheck",value:function(){this.$context.find(":checkbox:visible").filter(":not(:disabled)").prop("checked",!1).trigger("change")}},{key:"toggle",value:function(){this.$context.find(":checkbox:visible").filter(":not(:disabled)").each(function(b,c){var d=a(c);d.prop("checked",!d.is(":checked"))}).trigger("change")}},{key:"max",value:function(a){var b=this;a>0?!function(){var c=b;b.$context.on("click.checkboxes.max",":checkbox",function(){c.$context.find(":checked").length===a?c.$context.find(":checkbox:not(:checked)").prop("disabled",!0):c.$context.find(":checkbox:not(:checked)").prop("disabled",!1)})}():this.$context.off("click.checkboxes.max")}},{key:"range",value:function(b){var c=this;b?!function(){var b=c;c.$context.on("click.checkboxes.range",":checkbox",function(c){var d=a(c.target);if(c.shiftKey&&b.$last){var e=b.$context.find(":checkbox:visible"),f=e.index(b.$last),g=e.index(d),h=Math.min(f,g),i=Math.max(f,g)+1;e.slice(h,i).filter(":not(:disabled)").prop("checked",d.prop("checked")).trigger("change")}b.$last=d})}():this.$context.off("click.checkboxes.range")}}]),b}(),c=a.fn.checkboxes;a.fn.checkboxes=function(c){var d=Array.prototype.slice.call(arguments,1);return this.each(function(e,f){var g=a(f),h=g.data("checkboxes");h||g.data("checkboxes",h=new b(g)),"string"==typeof c&&h[c]&&h[c].apply(h,d)})},a.fn.checkboxes.Constructor=b,a.fn.checkboxes.noConflict=function(){return a.fn.checkboxes=c,this};var d=function(b){var c=a(b.target),d=c.attr("href"),e=a(c.data("context")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=c.data("action");e&&f&&(c.is(":checkbox")||b.preventDefault(),e.checkboxes(f))},e=function(){a("[data-toggle^=checkboxes]").each(function(){var b=a(this),c=b.data();delete c.toggle;for(var d in c)b.checkboxes(d,c[d])})};a(document).on("click.checkboxes.data-api","[data-toggle^=checkboxes]",d),a(document).on("ready.checkboxes.data-api",e)}(window.jQuery);
/**
*  Ajax Autocomplete for jQuery, version 1.4.7
*  (c) 2017 Tomas Kirda
*
*  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
*  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports&&"function"==typeof require?require("jquery"):jQuery)}(function(a){"use strict";function b(c,d){var e=this;e.element=c,e.el=a(c),e.suggestions=[],e.badQueries=[],e.selectedIndex=-1,e.currentValue=e.element.value,e.timeoutId=null,e.cachedResponse={},e.onChangeTimeout=null,e.onChange=null,e.isLocal=!1,e.suggestionsContainer=null,e.noSuggestionsContainer=null,e.options=a.extend({},b.defaults,d),e.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},e.hint=null,e.hintValue="",e.selection=null,e.initialize(),e.setOptions(d)}function c(a,b,c){return a.value.toLowerCase().indexOf(c)!==-1}function d(b){return"string"==typeof b?a.parseJSON(b):b}function e(a,b){if(!b)return a.value;var c="("+g.escapeRegExChars(b)+")";return a.value.replace(new RegExp(c,"gi"),"<strong>$1</strong>").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/&lt;(\/?strong)&gt;/g,"<$1>")}function f(a,b){return'<div class="autocomplete-group">'+b+"</div>"}var g=function(){return{escapeRegExChars:function(a){return a.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},createNode:function(a){var b=document.createElement("div");return b.className=a,b.style.position="absolute",b.style.display="none",b}}}(),h={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40},i=a.noop;b.utils=g,a.Autocomplete=b,b.defaults={ajaxSettings:{},autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:e,formatGroup:f,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:i,onSearchComplete:i,onSearchError:i,preserveInput:!1,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,preventBadQueries:!0,lookupFilter:c,paramName:"query",transformResult:d,showNoSuggestionNotice:!1,noSuggestionNotice:"No results",orientation:"bottom",forceFixPosition:!1},b.prototype={initialize:function(){var c,d=this,e="."+d.classes.suggestion,f=d.classes.selected,g=d.options;d.element.setAttribute("autocomplete","off"),d.noSuggestionsContainer=a('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0),d.suggestionsContainer=b.utils.createNode(g.containerClass),c=a(d.suggestionsContainer),c.appendTo(g.appendTo||"body"),"auto"!==g.width&&c.css("width",g.width),c.on("mouseover.autocomplete",e,function(){d.activate(a(this).data("index"))}),c.on("mouseout.autocomplete",function(){d.selectedIndex=-1,c.children("."+f).removeClass(f)}),c.on("click.autocomplete",e,function(){d.select(a(this).data("index"))}),c.on("click.autocomplete",function(){clearTimeout(d.blurTimeoutId)}),d.fixPositionCapture=function(){d.visible&&d.fixPosition()},a(window).on("resize.autocomplete",d.fixPositionCapture),d.el.on("keydown.autocomplete",function(a){d.onKeyPress(a)}),d.el.on("keyup.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("blur.autocomplete",function(){d.onBlur()}),d.el.on("focus.autocomplete",function(){d.onFocus()}),d.el.on("change.autocomplete",function(a){d.onKeyUp(a)}),d.el.on("input.autocomplete",function(a){d.onKeyUp(a)})},onFocus:function(){var a=this;a.fixPosition(),a.el.val().length>=a.options.minChars&&a.onValueChange()},onBlur:function(){var a=this;a.blurTimeoutId=setTimeout(function(){a.hide()},200)},abortAjax:function(){var a=this;a.currentRequest&&(a.currentRequest.abort(),a.currentRequest=null)},setOptions:function(b){var c=this,d=a.extend({},c.options,b);c.isLocal=Array.isArray(d.lookup),c.isLocal&&(d.lookup=c.verifySuggestionsFormat(d.lookup)),d.orientation=c.validateOrientation(d.orientation,"bottom"),a(c.suggestionsContainer).css({"max-height":d.maxHeight+"px",width:d.width+"px","z-index":d.zIndex}),this.options=d},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var a=this;a.disabled=!0,clearTimeout(a.onChangeTimeout),a.abortAjax()},enable:function(){this.disabled=!1},fixPosition:function(){var b=this,c=a(b.suggestionsContainer),d=c.parent().get(0);if(d===document.body||b.options.forceFixPosition){var e=b.options.orientation,f=c.outerHeight(),g=b.el.outerHeight(),h=b.el.offset(),i={top:h.top,left:h.left};if("auto"===e){var j=a(window).height(),k=a(window).scrollTop(),l=-k+h.top-f,m=k+j-(h.top+g+f);e=Math.max(l,m)===l?"top":"bottom"}if("top"===e?i.top+=-f:i.top+=g,d!==document.body){var n,o=c.css("opacity");b.visible||c.css("opacity",0).show(),n=c.offsetParent().offset(),i.top-=n.top,i.top+=d.scrollTop,i.left-=n.left,b.visible||c.css("opacity",o).hide()}"auto"===b.options.width&&(i.width=b.el.outerWidth()+"px"),c.css(i)}},isCursorAtEnd:function(){var a,b=this,c=b.el.val().length,d=b.element.selectionStart;return"number"==typeof d?d===c:!document.selection||(a=document.selection.createRange(),a.moveStart("character",-c),c===a.text.length)},onKeyPress:function(a){var b=this;if(!b.disabled&&!b.visible&&a.which===h.DOWN&&b.currentValue)return void b.suggest();if(!b.disabled&&b.visible){switch(a.which){case h.ESC:b.el.val(b.currentValue),b.hide();break;case h.RIGHT:if(b.hint&&b.options.onHint&&b.isCursorAtEnd()){b.selectHint();break}return;case h.TAB:if(b.hint&&b.options.onHint)return void b.selectHint();if(b.selectedIndex===-1)return void b.hide();if(b.select(b.selectedIndex),b.options.tabDisabled===!1)return;break;case h.RETURN:if(b.selectedIndex===-1)return void b.hide();b.select(b.selectedIndex);break;case h.UP:b.moveUp();break;case h.DOWN:b.moveDown();break;default:return}a.stopImmediatePropagation(),a.preventDefault()}},onKeyUp:function(a){var b=this;if(!b.disabled){switch(a.which){case h.UP:case h.DOWN:return}clearTimeout(b.onChangeTimeout),b.currentValue!==b.el.val()&&(b.findBestHint(),b.options.deferRequestBy>0?b.onChangeTimeout=setTimeout(function(){b.onValueChange()},b.options.deferRequestBy):b.onValueChange())}},onValueChange:function(){if(this.ignoreValueChange)return void(this.ignoreValueChange=!1);var b=this,c=b.options,d=b.el.val(),e=b.getQuery(d);return b.selection&&b.currentValue!==e&&(b.selection=null,(c.onInvalidateSelection||a.noop).call(b.element)),clearTimeout(b.onChangeTimeout),b.currentValue=d,b.selectedIndex=-1,c.triggerSelectOnValidInput&&b.isExactMatch(e)?void b.select(0):void(e.length<c.minChars?b.hide():b.getSuggestions(e))},isExactMatch:function(a){var b=this.suggestions;return 1===b.length&&b[0].value.toLowerCase()===a.toLowerCase()},getQuery:function(b){var c,d=this.options.delimiter;return d?(c=b.split(d),a.trim(c[c.length-1])):b},getSuggestionsLocal:function(b){var c,d=this,e=d.options,f=b.toLowerCase(),g=e.lookupFilter,h=parseInt(e.lookupLimit,10);return c={suggestions:a.grep(e.lookup,function(a){return g(a,b,f)})},h&&c.suggestions.length>h&&(c.suggestions=c.suggestions.slice(0,h)),c},getSuggestions:function(b){var c,d,e,f,g=this,h=g.options,i=h.serviceUrl;if(h.params[h.paramName]=b,h.onSearchStart.call(g.element,h.params)!==!1){if(d=h.ignoreParams?null:h.params,a.isFunction(h.lookup))return void h.lookup(b,function(a){g.suggestions=a.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,a.suggestions)});g.isLocal?c=g.getSuggestionsLocal(b):(a.isFunction(i)&&(i=i.call(g.element,b)),e=i+"?"+a.param(d||{}),c=g.cachedResponse[e]),c&&Array.isArray(c.suggestions)?(g.suggestions=c.suggestions,g.suggest(),h.onSearchComplete.call(g.element,b,c.suggestions)):g.isBadQuery(b)?h.onSearchComplete.call(g.element,b,[]):(g.abortAjax(),f={url:i,data:d,type:h.type,dataType:h.dataType},a.extend(f,h.ajaxSettings),g.currentRequest=a.ajax(f).done(function(a){var c;g.currentRequest=null,c=h.transformResult(a,b),g.processResponse(c,b,e),h.onSearchComplete.call(g.element,b,c.suggestions)}).fail(function(a,c,d){h.onSearchError.call(g.element,b,a,c,d)}))}},isBadQuery:function(a){if(!this.options.preventBadQueries)return!1;for(var b=this.badQueries,c=b.length;c--;)if(0===a.indexOf(b[c]))return!0;return!1},hide:function(){var b=this,c=a(b.suggestionsContainer);a.isFunction(b.options.onHide)&&b.visible&&b.options.onHide.call(b.element,c),b.visible=!1,b.selectedIndex=-1,clearTimeout(b.onChangeTimeout),a(b.suggestionsContainer).hide(),b.signalHint(null)},suggest:function(){if(!this.suggestions.length)return void(this.options.showNoSuggestionNotice?this.noSuggestions():this.hide());var b,c=this,d=c.options,e=d.groupBy,f=d.formatResult,g=c.getQuery(c.currentValue),h=c.classes.suggestion,i=c.classes.selected,j=a(c.suggestionsContainer),k=a(c.noSuggestionsContainer),l=d.beforeRender,m="",n=function(a,c){var f=a.data[e];return b===f?"":(b=f,d.formatGroup(a,b))};return d.triggerSelectOnValidInput&&c.isExactMatch(g)?void c.select(0):(a.each(c.suggestions,function(a,b){e&&(m+=n(b,g,a)),m+='<div class="'+h+'" data-index="'+a+'">'+f(b,g,a)+"</div>"}),this.adjustContainerWidth(),k.detach(),j.html(m),a.isFunction(l)&&l.call(c.element,j,c.suggestions),c.fixPosition(),j.show(),d.autoSelectFirst&&(c.selectedIndex=0,j.scrollTop(0),j.children("."+h).first().addClass(i)),c.visible=!0,void c.findBestHint())},noSuggestions:function(){var b=this,c=b.options.beforeRender,d=a(b.suggestionsContainer),e=a(b.noSuggestionsContainer);this.adjustContainerWidth(),e.detach(),d.empty(),d.append(e),a.isFunction(c)&&c.call(b.element,d,b.suggestions),b.fixPosition(),d.show(),b.visible=!0},adjustContainerWidth:function(){var b,c=this,d=c.options,e=a(c.suggestionsContainer);"auto"===d.width?(b=c.el.outerWidth(),e.css("width",b>0?b:300)):"flex"===d.width&&e.css("width","")},findBestHint:function(){var b=this,c=b.el.val().toLowerCase(),d=null;c&&(a.each(b.suggestions,function(a,b){var e=0===b.value.toLowerCase().indexOf(c);return e&&(d=b),!e}),b.signalHint(d))},signalHint:function(b){var c="",d=this;b&&(c=d.currentValue+b.value.substr(d.currentValue.length)),d.hintValue!==c&&(d.hintValue=c,d.hint=b,(this.options.onHint||a.noop)(c))},verifySuggestionsFormat:function(b){return b.length&&"string"==typeof b[0]?a.map(b,function(a){return{value:a,data:null}}):b},validateOrientation:function(b,c){return b=a.trim(b||"").toLowerCase(),a.inArray(b,["auto","bottom","top"])===-1&&(b=c),b},processResponse:function(a,b,c){var d=this,e=d.options;a.suggestions=d.verifySuggestionsFormat(a.suggestions),e.noCache||(d.cachedResponse[c]=a,e.preventBadQueries&&!a.suggestions.length&&d.badQueries.push(b)),b===d.getQuery(d.currentValue)&&(d.suggestions=a.suggestions,d.suggest())},activate:function(b){var c,d=this,e=d.classes.selected,f=a(d.suggestionsContainer),g=f.find("."+d.classes.suggestion);return f.find("."+e).removeClass(e),d.selectedIndex=b,d.selectedIndex!==-1&&g.length>d.selectedIndex?(c=g.get(d.selectedIndex),a(c).addClass(e),c):null},selectHint:function(){var b=this,c=a.inArray(b.hint,b.suggestions);b.select(c)},select:function(a){var b=this;b.hide(),b.onSelect(a)},moveUp:function(){var b=this;if(b.selectedIndex!==-1)return 0===b.selectedIndex?(a(b.suggestionsContainer).children("."+b.classes.suggestion).first().removeClass(b.classes.selected),b.selectedIndex=-1,b.ignoreValueChange=!1,b.el.val(b.currentValue),void b.findBestHint()):void b.adjustScroll(b.selectedIndex-1)},moveDown:function(){var a=this;a.selectedIndex!==a.suggestions.length-1&&a.adjustScroll(a.selectedIndex+1)},adjustScroll:function(b){var c=this,d=c.activate(b);if(d){var e,f,g,h=a(d).outerHeight();e=d.offsetTop,f=a(c.suggestionsContainer).scrollTop(),g=f+c.options.maxHeight-h,e<f?a(c.suggestionsContainer).scrollTop(e):e>g&&a(c.suggestionsContainer).scrollTop(e-c.options.maxHeight+h),c.options.preserveInput||(c.ignoreValueChange=!0,c.el.val(c.getValue(c.suggestions[b].value))),c.signalHint(null)}},onSelect:function(b){var c=this,d=c.options.onSelect,e=c.suggestions[b];c.currentValue=c.getValue(e.value),c.currentValue===c.el.val()||c.options.preserveInput||c.el.val(c.currentValue),c.signalHint(null),c.suggestions=[],c.selection=e,a.isFunction(d)&&d.call(c.element,e)},getValue:function(a){var b,c,d=this,e=d.options.delimiter;return e?(b=d.currentValue,c=b.split(e),1===c.length?a:b.substr(0,b.length-c[c.length-1].length)+a):a},dispose:function(){var b=this;b.el.off(".autocomplete").removeData("autocomplete"),a(window).off("resize.autocomplete",b.fixPositionCapture),a(b.suggestionsContainer).remove()}},a.fn.devbridgeAutocomplete=function(c,d){var e="autocomplete";return arguments.length?this.each(function(){var f=a(this),g=f.data(e);"string"==typeof c?g&&"function"==typeof g[c]&&g[c](d):(g&&g.dispose&&g.dispose(),g=new b(this,c),f.data(e,g))}):this.first().data(e)},a.fn.autocomplete||(a.fn.autocomplete=a.fn.devbridgeAutocomplete)});
/*!
	Autosize 3.0.20
	license: MIT
	http://www.jacklmoore.com/autosize
*/
!function(e,t){if("function"==typeof define&&define.amd)define(["exports","module"],t);else if("undefined"!=typeof exports&&"undefined"!=typeof module)t(exports,module);else{var n={exports:{}};t(n.exports,n),e.autosize=n.exports}}(this,function(e,t){"use strict";function n(e){function t(){var t=window.getComputedStyle(e,null);"vertical"===t.resize?e.style.resize="none":"both"===t.resize&&(e.style.resize="horizontal"),s="content-box"===t.boxSizing?-(parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)):parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),isNaN(s)&&(s=0),l()}function n(t){var n=e.style.width;e.style.width="0px",e.offsetWidth,e.style.width=n,e.style.overflowY=t}function o(e){for(var t=[];e&&e.parentNode&&e.parentNode instanceof Element;)e.parentNode.scrollTop&&t.push({node:e.parentNode,scrollTop:e.parentNode.scrollTop}),e=e.parentNode;return t}function r(){var t=e.style.height,n=o(e),r=document.documentElement&&document.documentElement.scrollTop;e.style.height="auto";var i=e.scrollHeight+s;return 0===e.scrollHeight?void(e.style.height=t):(e.style.height=i+"px",u=e.clientWidth,n.forEach(function(e){e.node.scrollTop=e.scrollTop}),void(r&&(document.documentElement.scrollTop=r)))}function l(){r();var t=Math.round(parseFloat(e.style.height)),o=window.getComputedStyle(e,null),i=Math.round(parseFloat(o.height));if(i!==t?"visible"!==o.overflowY&&(n("visible"),r(),i=Math.round(parseFloat(window.getComputedStyle(e,null).height))):"hidden"!==o.overflowY&&(n("hidden"),r(),i=Math.round(parseFloat(window.getComputedStyle(e,null).height))),a!==i){a=i;var l=d("autosize:resized");try{e.dispatchEvent(l)}catch(e){}}}if(e&&e.nodeName&&"TEXTAREA"===e.nodeName&&!i.has(e)){var s=null,u=e.clientWidth,a=null,p=function(){e.clientWidth!==u&&l()},c=function(t){window.removeEventListener("resize",p,!1),e.removeEventListener("input",l,!1),e.removeEventListener("keyup",l,!1),e.removeEventListener("autosize:destroy",c,!1),e.removeEventListener("autosize:update",l,!1),Object.keys(t).forEach(function(n){e.style[n]=t[n]}),i.delete(e)}.bind(e,{height:e.style.height,resize:e.style.resize,overflowY:e.style.overflowY,overflowX:e.style.overflowX,wordWrap:e.style.wordWrap});e.addEventListener("autosize:destroy",c,!1),"onpropertychange"in e&&"oninput"in e&&e.addEventListener("keyup",l,!1),window.addEventListener("resize",p,!1),e.addEventListener("input",l,!1),e.addEventListener("autosize:update",l,!1),e.style.overflowX="hidden",e.style.wordWrap="break-word",i.set(e,{destroy:c,update:l}),t()}}function o(e){var t=i.get(e);t&&t.destroy()}function r(e){var t=i.get(e);t&&t.update()}var i="function"==typeof Map?new Map:function(){var e=[],t=[];return{has:function(t){return e.indexOf(t)>-1},get:function(n){return t[e.indexOf(n)]},set:function(n,o){e.indexOf(n)===-1&&(e.push(n),t.push(o))},delete:function(n){var o=e.indexOf(n);o>-1&&(e.splice(o,1),t.splice(o,1))}}}(),d=function(e){return new Event(e,{bubbles:!0})};try{new Event("test")}catch(e){d=function(e){var t=document.createEvent("Event");return t.initEvent(e,!0,!1),t}}var l=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?(l=function(e){return e},l.destroy=function(e){return e},l.update=function(e){return e}):(l=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return n(e,t)}),e},l.destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},l.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],r),e}),t.exports=l});
!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e.push(d(a[f]));b.apply(null,b)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c;g("0",[],function(){return function(a){function b(){function a(a){"remove"===a&&this.each(function(a,b){var c=d(b);c&&c.remove()}),this.find("span.mceEditor,div.mceEditor").each(function(a,b){var c=i().get(b.id.replace(/_parent$/,""));c&&c.remove()})}function b(b){var c,d=this;if(null!=b)a.call(d),d.each(function(a,c){var d;(d=i().get(c.id))&&d.setContent(b)});else if(d.length>0&&(c=i().get(d[0].id)))return c.getContent()}function d(a){var b=null;return a&&a.id&&g.tinymce&&(b=i().get(a.id)),b}function e(a){return!!(a&&a.length&&g.tinymce&&a.is(":tinymce"))}var h={};f.each(["text","html","val"],function(a,g){var i=h[g]=f.fn[g],j="text"===g;f.fn[g]=function(a){var g=this;if(!e(g))return i.apply(g,arguments);if(a!==c)return b.call(g.filter(":tinymce"),a),i.apply(g.not(":tinymce"),arguments),g;var h="",k=arguments;return(j?g:g.eq(0)).each(function(a,b){var c=d(b);h+=c?j?c.getContent().replace(/<(?:"[^"]*"|'[^']*'|[^'">])*>/g,""):c.getContent({save:!0}):i.apply(f(b),k)}),h}}),f.each(["append","prepend"],function(a,b){var g=h[b]=f.fn[b],i="prepend"===b;f.fn[b]=function(a){var b=this;return e(b)?a!==c?("string"==typeof a&&b.filter(":tinymce").each(function(b,c){var e=d(c);e&&e.setContent(i?a+e.getContent():e.getContent()+a)}),g.apply(b.not(":tinymce"),arguments),b):void 0:g.apply(b,arguments)}}),f.each(["remove","replaceWith","replaceAll","empty"],function(b,c){var d=h[c]=f.fn[c];f.fn[c]=function(){return a.call(this,c),d.apply(this,arguments)}}),h.attr=f.fn.attr,f.fn.attr=function(a,g){var i=this,j=arguments;if(!a||"value"!==a||!e(i))return g!==c?h.attr.apply(i,j):h.attr.apply(i,j);if(g!==c)return b.call(i.filter(":tinymce"),g),h.attr.apply(i.not(":tinymce"),j),i;var k=i[0],l=d(k);return l?l.getContent({save:!0}):h.attr.apply(f(k),j)}}var c,d,e,f,g,h=[];g=a?a:window,f=g.jQuery;var i=function(){return g.tinymce};f.fn.tinymce=function(a){function c(){var c=[],d=0;e||(b(),e=!0),m.each(function(b,e){var f,g=e.id,h=a.oninit;g||(e.id=g=i().DOM.uniqueId()),i().get(g)||(f=i().createEditor(g,a),c.push(f),f.on("init",function(){var a,b=h;m.css("visibility",""),h&&++d==c.length&&("string"==typeof b&&(a=b.indexOf(".")===-1?null:i().resolve(b.replace(/\.\w+$/,"")),b=i().resolve(b)),b.apply(a||i(),c))}))}),f.each(c,function(a,b){b.render()})}var j,k,l,m=this,n="";if(!m.length)return m;if(!a)return i()?i().get(m[0].id):null;if(m.css("visibility","hidden"),g.tinymce||d||!(j=a.script_url))1===d?h.push(c):c();else{d=1,k=j.substring(0,j.lastIndexOf("/")),j.indexOf(".min")!=-1&&(n=".min"),g.tinymce=g.tinyMCEPreInit||{base:k,suffix:n},j.indexOf("gzip")!=-1&&(l=a.language||"en",j=j+(/\?/.test(j)?"&":"?")+"js=true&core=true&suffix="+escape(n)+"&themes="+escape(a.theme||"modern")+"&plugins="+escape(a.plugins||"")+"&languages="+(l||""),g.tinyMCE_GZ||(g.tinyMCE_GZ={start:function(){function b(a){i().ScriptLoader.markDone(i().baseURI.toAbsolute(a))}b("langs/"+l+".js"),b("themes/"+a.theme+"/theme"+n+".js"),b("themes/"+a.theme+"/langs/"+l+".js"),f.each(a.plugins.split(","),function(a,c){c&&(b("plugins/"+c+"/plugin"+n+".js"),b("plugins/"+c+"/langs/"+l+".js"))})},end:function(){}}));var o=document.createElement("script");o.type="text/javascript",o.onload=o.onreadystatechange=function(b){b=b||window.event,2===d||"load"!=b.type&&!/complete|loaded/.test(o.readyState)||(i().dom.Event.domLoaded=1,d=2,a.script_loaded&&a.script_loaded(),c(),f.each(h,function(a,b){b()}))},o.src=j,document.body.appendChild(o)}return m},f.extend(f.expr[":"],{tinymce:function(a){var b;return!!(a.id&&"tinymce"in g&&(b=i().get(a.id),b&&b.editorManager===i()))}})}}),d("0")()}();
/*! tooltipster v4.2.3 */!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(a){return b(a)}):"object"==typeof exports?module.exports=b(require("jquery")):b(jQuery)}(this,function(a){function b(a){this.$container,this.constraints=null,this.__$tooltip,this.__init(a)}function c(b,c){var d=!0;return a.each(b,function(a,e){return void 0===c[a]||b[a]!==c[a]?(d=!1,!1):void 0}),d}function d(b){var c=b.attr("id"),d=c?h.window.document.getElementById(c):null;return d?d===b[0]:a.contains(h.window.document.body,b[0])}function e(){if(!g)return!1;var a=g.document.body||g.document.documentElement,b=a.style,c="transition",d=["Moz","Webkit","Khtml","O","ms"];if("string"==typeof b[c])return!0;c=c.charAt(0).toUpperCase()+c.substr(1);for(var e=0;e<d.length;e++)if("string"==typeof b[d[e]+c])return!0;return!1}var f={animation:"fade",animationDuration:350,content:null,contentAsHTML:!1,contentCloning:!1,debug:!0,delay:300,delayTouch:[300,500],functionInit:null,functionBefore:null,functionReady:null,functionAfter:null,functionFormat:null,IEmin:6,interactive:!1,multiple:!1,parent:null,plugins:["sideTip"],repositionOnScroll:!1,restoration:"none",selfDestruction:!0,theme:[],timer:0,trackerInterval:500,trackOrigin:!1,trackTooltip:!1,trigger:"hover",triggerClose:{click:!1,mouseleave:!1,originClick:!1,scroll:!1,tap:!1,touchleave:!1},triggerOpen:{click:!1,mouseenter:!1,tap:!1,touchstart:!1},updateAnimation:"rotate",zIndex:9999999},g="undefined"!=typeof window?window:null,h={hasTouchCapability:!(!g||!("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch||g.navigator.maxTouchPoints)),hasTransitions:e(),IE:!1,semVer:"4.2.3",window:g},i=function(){this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__instancesLatestArr=[],this.__plugins={},this._env=h};i.prototype={__bridge:function(b,c,d){if(!c[d]){var e=function(){};e.prototype=b;var g=new e;g.__init&&g.__init(c),a.each(b,function(a,b){0!=a.indexOf("__")&&(c[a]?f.debug&&console.log("The "+a+" method of the "+d+" plugin conflicts with another plugin or native methods"):(c[a]=function(){return g[a].apply(g,Array.prototype.slice.apply(arguments))},c[a].bridged=g))}),c[d]=g}return this},__setWindow:function(a){return h.window=a,this},_getRuler:function(a){return new b(a)},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_plugin:function(b){var c=this;if("string"==typeof b){var d=b,e=null;return d.indexOf(".")>0?e=c.__plugins[d]:a.each(c.__plugins,function(a,b){return b.name.substring(b.name.length-d.length-1)=="."+d?(e=b,!1):void 0}),e}if(b.name.indexOf(".")<0)throw new Error("Plugins must be namespaced");return c.__plugins[b.name]=b,b.core&&c.__bridge(b.core,c,b.name),this},_trigger:function(){var a=Array.prototype.slice.apply(arguments);return"string"==typeof a[0]&&(a[0]={type:a[0]}),this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,a),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,a),this},instances:function(b){var c=[],d=b||".tooltipstered";return a(d).each(function(){var b=a(this),d=b.data("tooltipster-ns");d&&a.each(d,function(a,d){c.push(b.data(d))})}),c},instancesLatest:function(){return this.__instancesLatestArr},off:function(){return this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},origins:function(b){var c=b?b+" ":"";return a(c+".tooltipstered").toArray()},setDefaults:function(b){return a.extend(f,b),this},triggerHandler:function(){return this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.tooltipster=new i,a.Tooltipster=function(b,c){this.__callbacks={close:[],open:[]},this.__closingTime,this.__Content,this.__contentBcr,this.__destroyed=!1,this.__$emitterPrivate=a({}),this.__$emitterPublic=a({}),this.__enabled=!0,this.__garbageCollector,this.__Geometry,this.__lastPosition,this.__namespace="tooltipster-"+Math.round(1e6*Math.random()),this.__options,this.__$originParents,this.__pointerIsOverOrigin=!1,this.__previousThemes=[],this.__state="closed",this.__timeouts={close:[],open:null},this.__touchEvents=[],this.__tracker=null,this._$origin,this._$tooltip,this.__init(b,c)},a.Tooltipster.prototype={__init:function(b,c){var d=this;if(d._$origin=a(b),d.__options=a.extend(!0,{},f,c),d.__optionsFormat(),!h.IE||h.IE>=d.__options.IEmin){var e=null;if(void 0===d._$origin.data("tooltipster-initialTitle")&&(e=d._$origin.attr("title"),void 0===e&&(e=null),d._$origin.data("tooltipster-initialTitle",e)),null!==d.__options.content)d.__contentSet(d.__options.content);else{var g,i=d._$origin.attr("data-tooltip-content");i&&(g=a(i)),g&&g[0]?d.__contentSet(g.first()):d.__contentSet(e)}d._$origin.removeAttr("title").addClass("tooltipstered"),d.__prepareOrigin(),d.__prepareGC(),a.each(d.__options.plugins,function(a,b){d._plug(b)}),h.hasTouchCapability&&a(h.window.document.body).on("touchmove."+d.__namespace+"-triggerOpen",function(a){d._touchRecordEvent(a)}),d._on("created",function(){d.__prepareTooltip()})._on("repositioned",function(a){d.__lastPosition=a.position})}else d.__options.disabled=!0},__contentInsert:function(){var a=this,b=a._$tooltip.find(".tooltipster-content"),c=a.__Content,d=function(a){c=a};return a._trigger({type:"format",content:a.__Content,format:d}),a.__options.functionFormat&&(c=a.__options.functionFormat.call(a,a,{origin:a._$origin[0]},a.__Content)),"string"!=typeof c||a.__options.contentAsHTML?b.empty().append(c):b.text(c),a},__contentSet:function(b){return b instanceof a&&this.__options.contentCloning&&(b=b.clone(!0)),this.__Content=b,this._trigger({type:"updated",content:b}),this},__destroyError:function(){throw new Error("This tooltip has been destroyed and cannot execute your method call.")},__geometry:function(){var b=this,c=b._$origin,d=b._$origin.is("area");if(d){var e=b._$origin.parent().attr("name");c=a('img[usemap="#'+e+'"]')}var f=c[0].getBoundingClientRect(),g=a(h.window.document),i=a(h.window),j=c,k={available:{document:null,window:null},document:{size:{height:g.height(),width:g.width()}},window:{scroll:{left:h.window.scrollX||h.window.document.documentElement.scrollLeft,top:h.window.scrollY||h.window.document.documentElement.scrollTop},size:{height:i.height(),width:i.width()}},origin:{fixedLineage:!1,offset:{},size:{height:f.bottom-f.top,width:f.right-f.left},usemapImage:d?c[0]:null,windowOffset:{bottom:f.bottom,left:f.left,right:f.right,top:f.top}}};if(d){var l=b._$origin.attr("shape"),m=b._$origin.attr("coords");if(m&&(m=m.split(","),a.map(m,function(a,b){m[b]=parseInt(a)})),"default"!=l)switch(l){case"circle":var n=m[0],o=m[1],p=m[2],q=o-p,r=n-p;k.origin.size.height=2*p,k.origin.size.width=k.origin.size.height,k.origin.windowOffset.left+=r,k.origin.windowOffset.top+=q;break;case"rect":var s=m[0],t=m[1],u=m[2],v=m[3];k.origin.size.height=v-t,k.origin.size.width=u-s,k.origin.windowOffset.left+=s,k.origin.windowOffset.top+=t;break;case"poly":for(var w=0,x=0,y=0,z=0,A="even",B=0;B<m.length;B++){var C=m[B];"even"==A?(C>y&&(y=C,0===B&&(w=y)),w>C&&(w=C),A="odd"):(C>z&&(z=C,1==B&&(x=z)),x>C&&(x=C),A="even")}k.origin.size.height=z-x,k.origin.size.width=y-w,k.origin.windowOffset.left+=w,k.origin.windowOffset.top+=x}}var D=function(a){k.origin.size.height=a.height,k.origin.windowOffset.left=a.left,k.origin.windowOffset.top=a.top,k.origin.size.width=a.width};for(b._trigger({type:"geometry",edit:D,geometry:{height:k.origin.size.height,left:k.origin.windowOffset.left,top:k.origin.windowOffset.top,width:k.origin.size.width}}),k.origin.windowOffset.right=k.origin.windowOffset.left+k.origin.size.width,k.origin.windowOffset.bottom=k.origin.windowOffset.top+k.origin.size.height,k.origin.offset.left=k.origin.windowOffset.left+k.window.scroll.left,k.origin.offset.top=k.origin.windowOffset.top+k.window.scroll.top,k.origin.offset.bottom=k.origin.offset.top+k.origin.size.height,k.origin.offset.right=k.origin.offset.left+k.origin.size.width,k.available.document={bottom:{height:k.document.size.height-k.origin.offset.bottom,width:k.document.size.width},left:{height:k.document.size.height,width:k.origin.offset.left},right:{height:k.document.size.height,width:k.document.size.width-k.origin.offset.right},top:{height:k.origin.offset.top,width:k.document.size.width}},k.available.window={bottom:{height:Math.max(k.window.size.height-Math.max(k.origin.windowOffset.bottom,0),0),width:k.window.size.width},left:{height:k.window.size.height,width:Math.max(k.origin.windowOffset.left,0)},right:{height:k.window.size.height,width:Math.max(k.window.size.width-Math.max(k.origin.windowOffset.right,0),0)},top:{height:Math.max(k.origin.windowOffset.top,0),width:k.window.size.width}};"html"!=j[0].tagName.toLowerCase();){if("fixed"==j.css("position")){k.origin.fixedLineage=!0;break}j=j.parent()}return k},__optionsFormat:function(){return"number"==typeof this.__options.animationDuration&&(this.__options.animationDuration=[this.__options.animationDuration,this.__options.animationDuration]),"number"==typeof this.__options.delay&&(this.__options.delay=[this.__options.delay,this.__options.delay]),"number"==typeof this.__options.delayTouch&&(this.__options.delayTouch=[this.__options.delayTouch,this.__options.delayTouch]),"string"==typeof this.__options.theme&&(this.__options.theme=[this.__options.theme]),null===this.__options.parent?this.__options.parent=a(h.window.document.body):"string"==typeof this.__options.parent&&(this.__options.parent=a(this.__options.parent)),"hover"==this.__options.trigger?(this.__options.triggerOpen={mouseenter:!0,touchstart:!0},this.__options.triggerClose={mouseleave:!0,originClick:!0,touchleave:!0}):"click"==this.__options.trigger&&(this.__options.triggerOpen={click:!0,tap:!0},this.__options.triggerClose={click:!0,tap:!0}),this._trigger("options"),this},__prepareGC:function(){var b=this;return b.__options.selfDestruction?b.__garbageCollector=setInterval(function(){var c=(new Date).getTime();b.__touchEvents=a.grep(b.__touchEvents,function(a,b){return c-a.time>6e4}),d(b._$origin)||b.close(function(){b.destroy()})},2e4):clearInterval(b.__garbageCollector),b},__prepareOrigin:function(){var a=this;if(a._$origin.off("."+a.__namespace+"-triggerOpen"),h.hasTouchCapability&&a._$origin.on("touchstart."+a.__namespace+"-triggerOpen touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen",function(b){a._touchRecordEvent(b)}),a.__options.triggerOpen.click||a.__options.triggerOpen.tap&&h.hasTouchCapability){var b="";a.__options.triggerOpen.click&&(b+="click."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.tap&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&a._open(b)})}if(a.__options.triggerOpen.mouseenter||a.__options.triggerOpen.touchstart&&h.hasTouchCapability){var b="";a.__options.triggerOpen.mouseenter&&(b+="mouseenter."+a.__namespace+"-triggerOpen "),a.__options.triggerOpen.touchstart&&h.hasTouchCapability&&(b+="touchstart."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){!a._touchIsTouchEvent(b)&&a._touchIsEmulatedEvent(b)||(a.__pointerIsOverOrigin=!0,a._openShortly(b))})}if(a.__options.triggerClose.mouseleave||a.__options.triggerClose.touchleave&&h.hasTouchCapability){var b="";a.__options.triggerClose.mouseleave&&(b+="mouseleave."+a.__namespace+"-triggerOpen "),a.__options.triggerClose.touchleave&&h.hasTouchCapability&&(b+="touchend."+a.__namespace+"-triggerOpen touchcancel."+a.__namespace+"-triggerOpen"),a._$origin.on(b,function(b){a._touchIsMeaningfulEvent(b)&&(a.__pointerIsOverOrigin=!1)})}return a},__prepareTooltip:function(){var b=this,c=b.__options.interactive?"auto":"";return b._$tooltip.attr("id",b.__namespace).css({"pointer-events":c,zIndex:b.__options.zIndex}),a.each(b.__previousThemes,function(a,c){b._$tooltip.removeClass(c)}),a.each(b.__options.theme,function(a,c){b._$tooltip.addClass(c)}),b.__previousThemes=a.merge([],b.__options.theme),b},__scrollHandler:function(b){var c=this;if(c.__options.triggerClose.scroll)c._close(b);else if(d(c._$origin)&&d(c._$tooltip)){if(b.target===h.window.document)c.__Geometry.origin.fixedLineage||c.__options.repositionOnScroll&&c.reposition(b);else{var e=c.__geometry(),f=!1;if("fixed"!=c._$origin.css("position")&&c.__$originParents.each(function(b,c){var d=a(c),g=d.css("overflow-x"),h=d.css("overflow-y");if("visible"!=g||"visible"!=h){var i=c.getBoundingClientRect();if("visible"!=g&&(e.origin.windowOffset.left<i.left||e.origin.windowOffset.right>i.right))return f=!0,!1;if("visible"!=h&&(e.origin.windowOffset.top<i.top||e.origin.windowOffset.bottom>i.bottom))return f=!0,!1}return"fixed"==d.css("position")?!1:void 0}),f)c._$tooltip.css("visibility","hidden");else if(c._$tooltip.css("visibility","visible"),c.__options.repositionOnScroll)c.reposition(b);else{var g=e.origin.offset.left-c.__Geometry.origin.offset.left,i=e.origin.offset.top-c.__Geometry.origin.offset.top;c._$tooltip.css({left:c.__lastPosition.coord.left+g,top:c.__lastPosition.coord.top+i})}}c._trigger({type:"scroll",event:b})}return c},__stateSet:function(a){return this.__state=a,this._trigger({type:"state",state:a}),this},__timeoutsClear:function(){return clearTimeout(this.__timeouts.open),this.__timeouts.open=null,a.each(this.__timeouts.close,function(a,b){clearTimeout(b)}),this.__timeouts.close=[],this},__trackerStart:function(){var a=this,b=a._$tooltip.find(".tooltipster-content");return a.__options.trackTooltip&&(a.__contentBcr=b[0].getBoundingClientRect()),a.__tracker=setInterval(function(){if(d(a._$origin)&&d(a._$tooltip)){if(a.__options.trackOrigin){var e=a.__geometry(),f=!1;c(e.origin.size,a.__Geometry.origin.size)&&(a.__Geometry.origin.fixedLineage?c(e.origin.windowOffset,a.__Geometry.origin.windowOffset)&&(f=!0):c(e.origin.offset,a.__Geometry.origin.offset)&&(f=!0)),f||(a.__options.triggerClose.mouseleave?a._close():a.reposition())}if(a.__options.trackTooltip){var g=b[0].getBoundingClientRect();g.height===a.__contentBcr.height&&g.width===a.__contentBcr.width||(a.reposition(),a.__contentBcr=g)}}else a._close()},a.__options.trackerInterval),a},_close:function(b,c,d){var e=this,f=!0;if(e._trigger({type:"close",event:b,stop:function(){f=!1}}),f||d){c&&e.__callbacks.close.push(c),e.__callbacks.open=[],e.__timeoutsClear();var g=function(){a.each(e.__callbacks.close,function(a,c){c.call(e,e,{event:b,origin:e._$origin[0]})}),e.__callbacks.close=[]};if("closed"!=e.__state){var i=!0,j=new Date,k=j.getTime(),l=k+e.__options.animationDuration[1];if("disappearing"==e.__state&&l>e.__closingTime&&(i=!1),i){e.__closingTime=l,"disappearing"!=e.__state&&e.__stateSet("disappearing");var m=function(){clearInterval(e.__tracker),e._trigger({type:"closing",event:b}),e._$tooltip.off("."+e.__namespace+"-triggerClose").removeClass("tooltipster-dying"),a(h.window).off("."+e.__namespace+"-triggerClose"),e.__$originParents.each(function(b,c){a(c).off("scroll."+e.__namespace+"-triggerClose")}),e.__$originParents=null,a(h.window.document.body).off("."+e.__namespace+"-triggerClose"),e._$origin.off("."+e.__namespace+"-triggerClose"),e._off("dismissable"),e.__stateSet("closed"),e._trigger({type:"after",event:b}),e.__options.functionAfter&&e.__options.functionAfter.call(e,e,{event:b,origin:e._$origin[0]}),g()};h.hasTransitions?(e._$tooltip.css({"-moz-animation-duration":e.__options.animationDuration[1]+"ms","-ms-animation-duration":e.__options.animationDuration[1]+"ms","-o-animation-duration":e.__options.animationDuration[1]+"ms","-webkit-animation-duration":e.__options.animationDuration[1]+"ms","animation-duration":e.__options.animationDuration[1]+"ms","transition-duration":e.__options.animationDuration[1]+"ms"}),e._$tooltip.clearQueue().removeClass("tooltipster-show").addClass("tooltipster-dying"),e.__options.animationDuration[1]>0&&e._$tooltip.delay(e.__options.animationDuration[1]),e._$tooltip.queue(m)):e._$tooltip.stop().fadeOut(e.__options.animationDuration[1],m)}}else g()}return e},_off:function(){return this.__$emitterPrivate.off.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_on:function(){return this.__$emitterPrivate.on.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_one:function(){return this.__$emitterPrivate.one.apply(this.__$emitterPrivate,Array.prototype.slice.apply(arguments)),this},_open:function(b,c){var e=this;if(!e.__destroying&&d(e._$origin)&&e.__enabled){var f=!0;if("closed"==e.__state&&(e._trigger({type:"before",event:b,stop:function(){f=!1}}),f&&e.__options.functionBefore&&(f=e.__options.functionBefore.call(e,e,{event:b,origin:e._$origin[0]}))),f!==!1&&null!==e.__Content){c&&e.__callbacks.open.push(c),e.__callbacks.close=[],e.__timeoutsClear();var g,i=function(){"stable"!=e.__state&&e.__stateSet("stable"),a.each(e.__callbacks.open,function(a,b){b.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}),e.__callbacks.open=[]};if("closed"!==e.__state)g=0,"disappearing"===e.__state?(e.__stateSet("appearing"),h.hasTransitions?(e._$tooltip.clearQueue().removeClass("tooltipster-dying").addClass("tooltipster-show"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i)):e._$tooltip.stop().fadeIn(i)):"stable"==e.__state&&i();else{if(e.__stateSet("appearing"),g=e.__options.animationDuration[0],e.__contentInsert(),e.reposition(b,!0),h.hasTransitions?(e._$tooltip.addClass("tooltipster-"+e.__options.animation).addClass("tooltipster-initial").css({"-moz-animation-duration":e.__options.animationDuration[0]+"ms","-ms-animation-duration":e.__options.animationDuration[0]+"ms","-o-animation-duration":e.__options.animationDuration[0]+"ms","-webkit-animation-duration":e.__options.animationDuration[0]+"ms","animation-duration":e.__options.animationDuration[0]+"ms","transition-duration":e.__options.animationDuration[0]+"ms"}),setTimeout(function(){"closed"!=e.__state&&(e._$tooltip.addClass("tooltipster-show").removeClass("tooltipster-initial"),e.__options.animationDuration[0]>0&&e._$tooltip.delay(e.__options.animationDuration[0]),e._$tooltip.queue(i))},0)):e._$tooltip.css("display","none").fadeIn(e.__options.animationDuration[0],i),e.__trackerStart(),a(h.window).on("resize."+e.__namespace+"-triggerClose",function(b){var c=a(document.activeElement);(c.is("input")||c.is("textarea"))&&a.contains(e._$tooltip[0],c[0])||e.reposition(b)}).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)}),e.__$originParents=e._$origin.parents(),e.__$originParents.each(function(b,c){a(c).on("scroll."+e.__namespace+"-triggerClose",function(a){e.__scrollHandler(a)})}),e.__options.triggerClose.mouseleave||e.__options.triggerClose.touchleave&&h.hasTouchCapability){e._on("dismissable",function(a){a.dismissable?a.delay?(m=setTimeout(function(){e._close(a.event)},a.delay),e.__timeouts.close.push(m)):e._close(a):clearTimeout(m)});var j=e._$origin,k="",l="",m=null;e.__options.interactive&&(j=j.add(e._$tooltip)),e.__options.triggerClose.mouseleave&&(k+="mouseenter."+e.__namespace+"-triggerClose ",l+="mouseleave."+e.__namespace+"-triggerClose "),e.__options.triggerClose.touchleave&&h.hasTouchCapability&&(k+="touchstart."+e.__namespace+"-triggerClose",l+="touchend."+e.__namespace+"-triggerClose touchcancel."+e.__namespace+"-triggerClose"),j.on(l,function(a){if(e._touchIsTouchEvent(a)||!e._touchIsEmulatedEvent(a)){var b="mouseleave"==a.type?e.__options.delay:e.__options.delayTouch;e._trigger({delay:b[1],dismissable:!0,event:a,type:"dismissable"})}}).on(k,function(a){!e._touchIsTouchEvent(a)&&e._touchIsEmulatedEvent(a)||e._trigger({dismissable:!1,event:a,type:"dismissable"})})}e.__options.triggerClose.originClick&&e._$origin.on("click."+e.__namespace+"-triggerClose",function(a){e._touchIsTouchEvent(a)||e._touchIsEmulatedEvent(a)||e._close(a)}),(e.__options.triggerClose.click||e.__options.triggerClose.tap&&h.hasTouchCapability)&&setTimeout(function(){if("closed"!=e.__state){var b="",c=a(h.window.document.body);e.__options.triggerClose.click&&(b+="click."+e.__namespace+"-triggerClose "),e.__options.triggerClose.tap&&h.hasTouchCapability&&(b+="touchend."+e.__namespace+"-triggerClose"),c.on(b,function(b){e._touchIsMeaningfulEvent(b)&&(e._touchRecordEvent(b),e.__options.interactive&&a.contains(e._$tooltip[0],b.target)||e._close(b))}),e.__options.triggerClose.tap&&h.hasTouchCapability&&c.on("touchstart."+e.__namespace+"-triggerClose",function(a){e._touchRecordEvent(a)})}},0),e._trigger("ready"),e.__options.functionReady&&e.__options.functionReady.call(e,e,{origin:e._$origin[0],tooltip:e._$tooltip[0]})}if(e.__options.timer>0){var m=setTimeout(function(){e._close()},e.__options.timer+g);e.__timeouts.close.push(m)}}}return e},_openShortly:function(a){var b=this,c=!0;if("stable"!=b.__state&&"appearing"!=b.__state&&!b.__timeouts.open&&(b._trigger({type:"start",event:a,stop:function(){c=!1}}),c)){var d=0==a.type.indexOf("touch")?b.__options.delayTouch:b.__options.delay;d[0]?b.__timeouts.open=setTimeout(function(){b.__timeouts.open=null,b.__pointerIsOverOrigin&&b._touchIsMeaningfulEvent(a)?(b._trigger("startend"),b._open(a)):b._trigger("startcancel")},d[0]):(b._trigger("startend"),b._open(a))}return b},_optionsExtract:function(b,c){var d=this,e=a.extend(!0,{},c),f=d.__options[b];return f||(f={},a.each(c,function(a,b){var c=d.__options[a];void 0!==c&&(f[a]=c)})),a.each(e,function(b,c){void 0!==f[b]&&("object"!=typeof c||c instanceof Array||null==c||"object"!=typeof f[b]||f[b]instanceof Array||null==f[b]?e[b]=f[b]:a.extend(e[b],f[b]))}),e},_plug:function(b){var c=a.tooltipster._plugin(b);if(!c)throw new Error('The "'+b+'" plugin is not defined');return c.instance&&a.tooltipster.__bridge(c.instance,this,c.name),this},_touchIsEmulatedEvent:function(a){for(var b=!1,c=(new Date).getTime(),d=this.__touchEvents.length-1;d>=0;d--){var e=this.__touchEvents[d];if(!(c-e.time<500))break;e.target===a.target&&(b=!0)}return b},_touchIsMeaningfulEvent:function(a){return this._touchIsTouchEvent(a)&&!this._touchSwiped(a.target)||!this._touchIsTouchEvent(a)&&!this._touchIsEmulatedEvent(a)},_touchIsTouchEvent:function(a){return 0==a.type.indexOf("touch")},_touchRecordEvent:function(a){return this._touchIsTouchEvent(a)&&(a.time=(new Date).getTime(),this.__touchEvents.push(a)),this},_touchSwiped:function(a){for(var b=!1,c=this.__touchEvents.length-1;c>=0;c--){var d=this.__touchEvents[c];if("touchmove"==d.type){b=!0;break}if("touchstart"==d.type&&a===d.target)break}return b},_trigger:function(){var b=Array.prototype.slice.apply(arguments);return"string"==typeof b[0]&&(b[0]={type:b[0]}),b[0].instance=this,b[0].origin=this._$origin?this._$origin[0]:null,b[0].tooltip=this._$tooltip?this._$tooltip[0]:null,this.__$emitterPrivate.trigger.apply(this.__$emitterPrivate,b),a.tooltipster._trigger.apply(a.tooltipster,b),this.__$emitterPublic.trigger.apply(this.__$emitterPublic,b),this},_unplug:function(b){var c=this;if(c[b]){var d=a.tooltipster._plugin(b);d.instance&&a.each(d.instance,function(a,d){c[a]&&c[a].bridged===c[b]&&delete c[a]}),c[b].__destroy&&c[b].__destroy(),delete c[b]}return c},close:function(a){return this.__destroyed?this.__destroyError():this._close(null,a),this},content:function(a){var b=this;if(void 0===a)return b.__Content;if(b.__destroyed)b.__destroyError();else if(b.__contentSet(a),null!==b.__Content){if("closed"!==b.__state&&(b.__contentInsert(),b.reposition(),b.__options.updateAnimation))if(h.hasTransitions){var c=b.__options.updateAnimation;b._$tooltip.addClass("tooltipster-update-"+c),setTimeout(function(){"closed"!=b.__state&&b._$tooltip.removeClass("tooltipster-update-"+c)},1e3)}else b._$tooltip.fadeTo(200,.5,function(){"closed"!=b.__state&&b._$tooltip.fadeTo(200,1)})}else b._close();return b},destroy:function(){var b=this;if(b.__destroyed)b.__destroyError();else{"closed"!=b.__state&&b.option("animationDuration",0)._close(null,null,!0),b._trigger("destroy"),b.__destroyed=!0,b._$origin.removeData(b.__namespace).off("."+b.__namespace+"-triggerOpen"),a(h.window.document.body).off("."+b.__namespace+"-triggerOpen");var c=b._$origin.data("tooltipster-ns");if(c)if(1===c.length){var d=null;"previous"==b.__options.restoration?d=b._$origin.data("tooltipster-initialTitle"):"current"==b.__options.restoration&&(d="string"==typeof b.__Content?b.__Content:a("<div></div>").append(b.__Content).html()),d&&b._$origin.attr("title",d),b._$origin.removeClass("tooltipstered"),b._$origin.removeData("tooltipster-ns").removeData("tooltipster-initialTitle")}else c=a.grep(c,function(a,c){return a!==b.__namespace}),b._$origin.data("tooltipster-ns",c);b._trigger("destroyed"),b._off(),b.off(),b.__Content=null,b.__$emitterPrivate=null,b.__$emitterPublic=null,b.__options.parent=null,b._$origin=null,b._$tooltip=null,a.tooltipster.__instancesLatestArr=a.grep(a.tooltipster.__instancesLatestArr,function(a,c){return b!==a}),clearInterval(b.__garbageCollector)}return b},disable:function(){return this.__destroyed?(this.__destroyError(),this):(this._close(),this.__enabled=!1,this)},elementOrigin:function(){return this.__destroyed?void this.__destroyError():this._$origin[0]},elementTooltip:function(){return this._$tooltip?this._$tooltip[0]:null},enable:function(){return this.__enabled=!0,this},hide:function(a){return this.close(a)},instance:function(){return this},off:function(){return this.__destroyed||this.__$emitterPublic.off.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},on:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.on.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},one:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.one.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this},open:function(a){return this.__destroyed?this.__destroyError():this._open(null,a),this},option:function(b,c){return void 0===c?this.__options[b]:(this.__destroyed?this.__destroyError():(this.__options[b]=c,this.__optionsFormat(),a.inArray(b,["trigger","triggerClose","triggerOpen"])>=0&&this.__prepareOrigin(),"selfDestruction"===b&&this.__prepareGC()),this)},reposition:function(a,b){var c=this;return c.__destroyed?c.__destroyError():"closed"!=c.__state&&d(c._$origin)&&(b||d(c._$tooltip))&&(b||c._$tooltip.detach(),c.__Geometry=c.__geometry(),c._trigger({type:"reposition",event:a,helper:{geo:c.__Geometry}})),c},show:function(a){return this.open(a)},status:function(){return{destroyed:this.__destroyed,enabled:this.__enabled,open:"closed"!==this.__state,state:this.__state}},triggerHandler:function(){return this.__destroyed?this.__destroyError():this.__$emitterPublic.triggerHandler.apply(this.__$emitterPublic,Array.prototype.slice.apply(arguments)),this}},a.fn.tooltipster=function(){var b=Array.prototype.slice.apply(arguments),c="You are using a single HTML element as content for several tooltips. You probably want to set the contentCloning option to TRUE.";if(0===this.length)return this;if("string"==typeof b[0]){var d="#*$~&";return this.each(function(){var e=a(this).data("tooltipster-ns"),f=e?a(this).data(e[0]):null;if(!f)throw new Error("You called Tooltipster's \""+b[0]+'" method on an uninitialized element');if("function"!=typeof f[b[0]])throw new Error('Unknown method "'+b[0]+'"');this.length>1&&"content"==b[0]&&(b[1]instanceof a||"object"==typeof b[1]&&null!=b[1]&&b[1].tagName)&&!f.__options.contentCloning&&f.__options.debug&&console.log(c);var g=f[b[0]](b[1],b[2]);return g!==f||"instance"===b[0]?(d=g,!1):void 0}),"#*$~&"!==d?d:this}a.tooltipster.__instancesLatestArr=[];var e=b[0]&&void 0!==b[0].multiple,g=e&&b[0].multiple||!e&&f.multiple,h=b[0]&&void 0!==b[0].content,i=h&&b[0].content||!h&&f.content,j=b[0]&&void 0!==b[0].contentCloning,k=j&&b[0].contentCloning||!j&&f.contentCloning,l=b[0]&&void 0!==b[0].debug,m=l&&b[0].debug||!l&&f.debug;return this.length>1&&(i instanceof a||"object"==typeof i&&null!=i&&i.tagName)&&!k&&m&&console.log(c),this.each(function(){var c=!1,d=a(this),e=d.data("tooltipster-ns"),f=null;e?g?c=!0:m&&(console.log("Tooltipster: one or more tooltips are already attached to the element below. Ignoring."),console.log(this)):c=!0,c&&(f=new a.Tooltipster(this,b[0]),e||(e=[]),e.push(f.__namespace),d.data("tooltipster-ns",e),d.data(f.__namespace,f),f.__options.functionInit&&f.__options.functionInit.call(f,f,{origin:this}),f._trigger("init")),a.tooltipster.__instancesLatestArr.push(f)}),this},b.prototype={__init:function(b){this.__$tooltip=b,this.__$tooltip.css({left:0,overflow:"hidden",position:"absolute",top:0}).find(".tooltipster-content").css("overflow","auto"),this.$container=a('<div class="tooltipster-ruler"></div>').append(this.__$tooltip).appendTo(h.window.document.body)},__forceRedraw:function(){var a=this.__$tooltip.parent();this.__$tooltip.detach(),this.__$tooltip.appendTo(a)},constrain:function(a,b){return this.constraints={width:a,height:b},this.__$tooltip.css({display:"block",height:"",overflow:"auto",width:a}),this},destroy:function(){this.__$tooltip.detach().find(".tooltipster-content").css({display:"",overflow:""}),this.$container.remove()},free:function(){return this.constraints=null,this.__$tooltip.css({display:"",height:"",overflow:"visible",width:""}),this},measure:function(){this.__forceRedraw();var a=this.__$tooltip[0].getBoundingClientRect(),b={size:{height:a.height||a.bottom-a.top,width:a.width||a.right-a.left}};if(this.constraints){var c=this.__$tooltip.find(".tooltipster-content"),d=this.__$tooltip.outerHeight(),e=c[0].getBoundingClientRect(),f={height:d<=this.constraints.height,width:a.width<=this.constraints.width&&e.width>=c[0].scrollWidth-1};b.fits=f.height&&f.width}return h.IE&&h.IE<=11&&b.size.width!==h.window.document.documentElement.clientWidth&&(b.size.width=Math.ceil(b.size.width)+1),b}};var j=navigator.userAgent.toLowerCase();-1!=j.indexOf("msie")?h.IE=parseInt(j.split("msie")[1]):-1!==j.toLowerCase().indexOf("trident")&&-1!==j.indexOf(" rv:11")?h.IE=11:-1!=j.toLowerCase().indexOf("edge/")&&(h.IE=parseInt(j.toLowerCase().split("edge/")[1]));var k="tooltipster.sideTip";return a.tooltipster._plugin({name:k,instance:{__defaults:function(){return{arrow:!0,distance:6,functionPosition:null,maxWidth:null,minIntersection:16,minWidth:0,position:null,side:"top",viewportAware:!0}},__init:function(a){var b=this;b.__instance=a,b.__namespace="tooltipster-sideTip-"+Math.round(1e6*Math.random()),b.__previousState="closed",b.__options,b.__optionsFormat(),b.__instance._on("state."+b.__namespace,function(a){"closed"==a.state?b.__close():"appearing"==a.state&&"closed"==b.__previousState&&b.__create(),b.__previousState=a.state}),b.__instance._on("options."+b.__namespace,function(){b.__optionsFormat()}),b.__instance._on("reposition."+b.__namespace,function(a){b.__reposition(a.event,a.helper)})},__close:function(){this.__instance.content()instanceof a&&this.__instance.content().detach(),this.__instance._$tooltip.remove(),this.__instance._$tooltip=null},__create:function(){var b=a('<div class="tooltipster-base tooltipster-sidetip"><div class="tooltipster-box"><div class="tooltipster-content"></div></div><div class="tooltipster-arrow"><div class="tooltipster-arrow-uncropped"><div class="tooltipster-arrow-border"></div><div class="tooltipster-arrow-background"></div></div></div></div>');this.__options.arrow||b.find(".tooltipster-box").css("margin",0).end().find(".tooltipster-arrow").hide(),this.__options.minWidth&&b.css("min-width",this.__options.minWidth+"px"),this.__options.maxWidth&&b.css("max-width",this.__options.maxWidth+"px"),this.__instance._$tooltip=b,this.__instance._trigger("created");
},__destroy:function(){this.__instance._off("."+self.__namespace)},__optionsFormat:function(){var b=this;if(b.__options=b.__instance._optionsExtract(k,b.__defaults()),b.__options.position&&(b.__options.side=b.__options.position),"object"!=typeof b.__options.distance&&(b.__options.distance=[b.__options.distance]),b.__options.distance.length<4&&(void 0===b.__options.distance[1]&&(b.__options.distance[1]=b.__options.distance[0]),void 0===b.__options.distance[2]&&(b.__options.distance[2]=b.__options.distance[0]),void 0===b.__options.distance[3]&&(b.__options.distance[3]=b.__options.distance[1]),b.__options.distance={top:b.__options.distance[0],right:b.__options.distance[1],bottom:b.__options.distance[2],left:b.__options.distance[3]}),"string"==typeof b.__options.side){var c={top:"bottom",right:"left",bottom:"top",left:"right"};b.__options.side=[b.__options.side,c[b.__options.side]],"left"==b.__options.side[0]||"right"==b.__options.side[0]?b.__options.side.push("top","bottom"):b.__options.side.push("right","left")}6===a.tooltipster._env.IE&&b.__options.arrow!==!0&&(b.__options.arrow=!1)},__reposition:function(b,c){var d,e=this,f=e.__targetFind(c),g=[];e.__instance._$tooltip.detach();var h=e.__instance._$tooltip.clone(),i=a.tooltipster._getRuler(h),j=!1,k=e.__instance.option("animation");switch(k&&h.removeClass("tooltipster-"+k),a.each(["window","document"],function(d,k){var l=null;if(e.__instance._trigger({container:k,helper:c,satisfied:j,takeTest:function(a){l=a},results:g,type:"positionTest"}),1==l||0!=l&&0==j&&("window"!=k||e.__options.viewportAware))for(var d=0;d<e.__options.side.length;d++){var m={horizontal:0,vertical:0},n=e.__options.side[d];"top"==n||"bottom"==n?m.vertical=e.__options.distance[n]:m.horizontal=e.__options.distance[n],e.__sideChange(h,n),a.each(["natural","constrained"],function(a,d){if(l=null,e.__instance._trigger({container:k,event:b,helper:c,mode:d,results:g,satisfied:j,side:n,takeTest:function(a){l=a},type:"positionTest"}),1==l||0!=l&&0==j){var h={container:k,distance:m,fits:null,mode:d,outerSize:null,side:n,size:null,target:f[n],whole:null},o="natural"==d?i.free():i.constrain(c.geo.available[k][n].width-m.horizontal,c.geo.available[k][n].height-m.vertical),p=o.measure();if(h.size=p.size,h.outerSize={height:p.size.height+m.vertical,width:p.size.width+m.horizontal},"natural"==d?c.geo.available[k][n].width>=h.outerSize.width&&c.geo.available[k][n].height>=h.outerSize.height?h.fits=!0:h.fits=!1:h.fits=p.fits,"window"==k&&(h.fits?"top"==n||"bottom"==n?h.whole=c.geo.origin.windowOffset.right>=e.__options.minIntersection&&c.geo.window.size.width-c.geo.origin.windowOffset.left>=e.__options.minIntersection:h.whole=c.geo.origin.windowOffset.bottom>=e.__options.minIntersection&&c.geo.window.size.height-c.geo.origin.windowOffset.top>=e.__options.minIntersection:h.whole=!1),g.push(h),h.whole)j=!0;else if("natural"==h.mode&&(h.fits||h.size.width<=c.geo.available[k][n].width))return!1}})}}),e.__instance._trigger({edit:function(a){g=a},event:b,helper:c,results:g,type:"positionTested"}),g.sort(function(a,b){if(a.whole&&!b.whole)return-1;if(!a.whole&&b.whole)return 1;if(a.whole&&b.whole){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}if(a.fits&&!b.fits)return-1;if(!a.fits&&b.fits)return 1;if(a.fits&&b.fits){var c=e.__options.side.indexOf(a.side),d=e.__options.side.indexOf(b.side);return d>c?-1:c>d?1:"natural"==a.mode?-1:1}return"document"==a.container&&"bottom"==a.side&&"natural"==a.mode?-1:1}),d=g[0],d.coord={},d.side){case"left":case"right":d.coord.top=Math.floor(d.target-d.size.height/2);break;case"bottom":case"top":d.coord.left=Math.floor(d.target-d.size.width/2)}switch(d.side){case"left":d.coord.left=c.geo.origin.windowOffset.left-d.outerSize.width;break;case"right":d.coord.left=c.geo.origin.windowOffset.right+d.distance.horizontal;break;case"top":d.coord.top=c.geo.origin.windowOffset.top-d.outerSize.height;break;case"bottom":d.coord.top=c.geo.origin.windowOffset.bottom+d.distance.vertical}"window"==d.container?"top"==d.side||"bottom"==d.side?d.coord.left<0?c.geo.origin.windowOffset.right-this.__options.minIntersection>=0?d.coord.left=0:d.coord.left=c.geo.origin.windowOffset.right-this.__options.minIntersection-1:d.coord.left>c.geo.window.size.width-d.size.width&&(c.geo.origin.windowOffset.left+this.__options.minIntersection<=c.geo.window.size.width?d.coord.left=c.geo.window.size.width-d.size.width:d.coord.left=c.geo.origin.windowOffset.left+this.__options.minIntersection+1-d.size.width):d.coord.top<0?c.geo.origin.windowOffset.bottom-this.__options.minIntersection>=0?d.coord.top=0:d.coord.top=c.geo.origin.windowOffset.bottom-this.__options.minIntersection-1:d.coord.top>c.geo.window.size.height-d.size.height&&(c.geo.origin.windowOffset.top+this.__options.minIntersection<=c.geo.window.size.height?d.coord.top=c.geo.window.size.height-d.size.height:d.coord.top=c.geo.origin.windowOffset.top+this.__options.minIntersection+1-d.size.height):(d.coord.left>c.geo.window.size.width-d.size.width&&(d.coord.left=c.geo.window.size.width-d.size.width),d.coord.left<0&&(d.coord.left=0)),e.__sideChange(h,d.side),c.tooltipClone=h[0],c.tooltipParent=e.__instance.option("parent").parent[0],c.mode=d.mode,c.whole=d.whole,c.origin=e.__instance._$origin[0],c.tooltip=e.__instance._$tooltip[0],delete d.container,delete d.fits,delete d.mode,delete d.outerSize,delete d.whole,d.distance=d.distance.horizontal||d.distance.vertical;var l=a.extend(!0,{},d);if(e.__instance._trigger({edit:function(a){d=a},event:b,helper:c,position:l,type:"position"}),e.__options.functionPosition){var m=e.__options.functionPosition.call(e,e.__instance,c,l);m&&(d=m)}i.destroy();var n,o;"top"==d.side||"bottom"==d.side?(n={prop:"left",val:d.target-d.coord.left},o=d.size.width-this.__options.minIntersection):(n={prop:"top",val:d.target-d.coord.top},o=d.size.height-this.__options.minIntersection),n.val<this.__options.minIntersection?n.val=this.__options.minIntersection:n.val>o&&(n.val=o);var p;p=c.geo.origin.fixedLineage?c.geo.origin.windowOffset:{left:c.geo.origin.windowOffset.left+c.geo.window.scroll.left,top:c.geo.origin.windowOffset.top+c.geo.window.scroll.top},d.coord={left:p.left+(d.coord.left-c.geo.origin.windowOffset.left),top:p.top+(d.coord.top-c.geo.origin.windowOffset.top)},e.__sideChange(e.__instance._$tooltip,d.side),c.geo.origin.fixedLineage?e.__instance._$tooltip.css("position","fixed"):e.__instance._$tooltip.css("position",""),e.__instance._$tooltip.css({left:d.coord.left,top:d.coord.top,height:d.size.height,width:d.size.width}).find(".tooltipster-arrow").css({left:"",top:""}).css(n.prop,n.val),e.__instance._$tooltip.appendTo(e.__instance.option("parent")),e.__instance._trigger({type:"repositioned",event:b,position:d})},__sideChange:function(a,b){a.removeClass("tooltipster-bottom").removeClass("tooltipster-left").removeClass("tooltipster-right").removeClass("tooltipster-top").addClass("tooltipster-"+b)},__targetFind:function(a){var b={},c=this.__instance._$origin[0].getClientRects();if(c.length>1){var d=this.__instance._$origin.css("opacity");1==d&&(this.__instance._$origin.css("opacity",.99),c=this.__instance._$origin[0].getClientRects(),this.__instance._$origin.css("opacity",1))}if(c.length<2)b.top=Math.floor(a.geo.origin.windowOffset.left+a.geo.origin.size.width/2),b.bottom=b.top,b.left=Math.floor(a.geo.origin.windowOffset.top+a.geo.origin.size.height/2),b.right=b.left;else{var e=c[0];b.top=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil(c.length/2)-1]:c[0],b.right=Math.floor(e.top+(e.bottom-e.top)/2),e=c[c.length-1],b.bottom=Math.floor(e.left+(e.right-e.left)/2),e=c.length>2?c[Math.ceil((c.length+1)/2)-1]:c[c.length-1],b.left=Math.floor(e.top+(e.bottom-e.top)/2)}return b}}}),a});
/*
 * This plugin filters keyboard input by specified regular expression.
 * Version 1.8
 * $Id$
 *
 * Source code inspired by Ext.JS (Ext.form.TextField, Ext.EventManager)
 *
 * Procedural style:
 * $('#ggg').keyfilter(/[\dA-F]/);
 * Also you can pass test function instead of regexp. Its arguments:
   * this - HTML DOM Element (event target).
   * c - String that contains incoming character.
 * $('#ggg').keyfilter(function(c) { return c != 'a'; });
 *
 * Class style:
 * <input type="text" class="mask-num" />
 *
 * Available classes:
   * mask-pint:     /[\d]/
   * mask-int:      /[\d\-]/
   * mask-pnum:     /[\d\.]/
   * mask-money     /[\d\.\s,]/
   * mask-num:      /[\d\-\.]/
   * mask-hex:      /[0-9a-f]/i
   * mask-email:    /[a-z0-9_\.\-@]/i
   * mask-alpha:    /[a-z_]/i
   * mask-alphanum: /[a-z0-9_]/i
 */

(function($)
{
	// $.browser fallback for jQuery 1.9+.
	if ($.browser === undefined) {
		$.browser = (function () {
			var ua_match = function (ua) {
				ua = ua.toLowerCase();
				var match = /(chrome)[ \/]([\w.]+)/.exec(ua) ||
				/(webkit)[ \/]([\w.]+)/.exec(ua) ||
				/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
				/(msie) ([\w.]+)/.exec(ua) ||
				ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) ||
				[];
				
				return { browser:match[ 1 ] || "", version:match[ 2 ] || "0" };
			},
			matched = ua_match(navigator.userAgent),
			browser = {};
			
			if (matched.browser) {
				browser[ matched.browser ] = true;
				browser.version = matched.version;
			}
			
			if (browser.chrome) {
				browser.webkit = true;
			} else if (browser.webkit) {
				browser.safari = true;
			}
			return browser;
		})();
	}

	var defaultMasks = {
		pint:     /[\d]/,
		'int':    /[\d\-]/,
		pnum:     /[\d\.]/,
		money:    /[\d\.\s,]/,
		num:      /[\d\-\.]/,
		hex:      /[0-9a-f]/i,
		email:    /[a-z0-9_\.\-@]/i,
		alpha:    /[a-z_]/i,
		alphanum: /[a-z0-9_]/i
	};

	var Keys = {
		TAB: 9,
		RETURN: 13,
		ESC: 27,
		BACKSPACE: 8,
		DELETE: 46
	};

	// safari keypress events for special keys return bad keycodes
	var SafariKeys = {
		63234 : 37, // left
		63235 : 39, // right
		63232 : 38, // up
		63233 : 40, // down
		63276 : 33, // page up
		63277 : 34, // page down
		63272 : 46, // delete
		63273 : 36, // home
		63275 : 35  // end
	};

	var isNavKeyPress = function(e)
	{
		var k = e.keyCode;
		k = $.browser.safari ? (SafariKeys[k] || k) : k;
		return (k >= 33 && k <= 40) || k == Keys.RETURN || k == Keys.TAB || k == Keys.ESC;
	};

        var isSpecialKey = function(e)
	{
		var k = e.keyCode;
		var c = e.charCode;
		return k == 9 || k == 13 || k == 27 ||
			k == 16 || k == 17 ||
			(k >= 18 && k <= 20) ||
			($.browser.opera && !e.shiftKey && (k == 8 || (k >= 33 && k <= 35) || (k >= 36 && k <= 39) || (k >= 44 && k <= 45)))
			;

        };

        /**
         * Returns a normalized keyCode for the event.
         * @return {Number} The key code
         */
        var getKey = function(e)
	{
		var k = e.keyCode || e.charCode;
		return $.browser.safari ? (SafariKeys[k] || k) : k;
        };

        var getCharCode = function(e)
	{
		return e.charCode || e.keyCode || e.which;
	};

	$.fn.keyfilter = function(re)
	{
		return this.on('keypress',function(e) // Bazel changed from 'live' function
		{
			if (e.ctrlKey || e.altKey)
			{
				return;
			}
			var k = getKey(e);
			if($.browser.mozilla && (isNavKeyPress(e) || k == Keys.BACKSPACE || (k == Keys.DELETE && e.charCode == 0)))
			{
				return;
			}
			var c = getCharCode(e), cc = String.fromCharCode(c), ok = true;
			if(!$.browser.mozilla && (isSpecialKey(e) || !cc))
			{
				return;
			}
			if ($.isFunction(re))
			{
				ok = re.call(this, cc);
			}
			else
			{
				ok = re.test(cc);
			}
			if(!ok)
			{
				e.preventDefault();
			}
		});
	};

	$.extend($.fn.keyfilter, {
		defaults: {
			masks: defaultMasks
		},
		version: 1.7
	});

	$(document).ready(function()
	{
		var tags = $('input[class*=mask],textarea[class*=mask]');
		for (var key in $.fn.keyfilter.defaults.masks)
		{
			tags.filter('.mask-' + key).keyfilter($.fn.keyfilter.defaults.masks[key]);
		}
	});

})(jQuery);

!function(e){"use strict";function t(e,t){if(this.createTextRange){var a=this.createTextRange();a.collapse(!0),a.moveStart("character",e),a.moveEnd("character",t-e),a.select()}else this.setSelectionRange&&(this.focus(),this.setSelectionRange(e,t))}function a(e){var t=this.value.length;if(e="start"==e.toLowerCase()?"Start":"End",document.selection){var a,i,n,l=document.selection.createRange();return a=l.duplicate(),a.expand("textedit"),a.setEndPoint("EndToEnd",l),i=a.text.length-l.text.length,n=i+l.text.length,"Start"==e?i:n}return"undefined"!=typeof this["selection"+e]&&(t=this["selection"+e]),t}var i={codes:{46:127,188:44,109:45,190:46,191:47,192:96,220:92,222:39,221:93,219:91,173:45,187:61,186:59,189:45,110:46},shifts:{96:"~",49:"!",50:"@",51:"#",52:"$",53:"%",54:"^",55:"&",56:"*",57:"(",48:")",45:"_",61:"+",91:"{",93:"}",92:"|",59:":",39:'"',44:"<",46:">",47:"?"}};e.fn.number=function(n,l,s,r){r="undefined"==typeof r?",":r,s="undefined"==typeof s?".":s,l="undefined"==typeof l?0:l;var u="\\u"+("0000"+s.charCodeAt(0).toString(16)).slice(-4),h=new RegExp("[^"+u+"0-9]","g"),o=new RegExp(u,"g");return n===!0?this.is("input:text")?this.on({"keydown.format":function(n){var u=e(this),h=u.data("numFormat"),o=n.keyCode?n.keyCode:n.which,c="",v=a.apply(this,["start"]),d=a.apply(this,["end"]),p="",f=!1;if(i.codes.hasOwnProperty(o)&&(o=i.codes[o]),!n.shiftKey&&o>=65&&90>=o?o+=32:!n.shiftKey&&o>=69&&105>=o?o-=48:n.shiftKey&&i.shifts.hasOwnProperty(o)&&(c=i.shifts[o]),""==c&&(c=String.fromCharCode(o)),8!=o&&45!=o&&127!=o&&c!=s&&!c.match(/[0-9]/)){var g=n.keyCode?n.keyCode:n.which;if(46==g||8==g||127==g||9==g||27==g||13==g||(65==g||82==g||80==g||83==g||70==g||72==g||66==g||74==g||84==g||90==g||61==g||173==g||48==g)&&(n.ctrlKey||n.metaKey)===!0||(86==g||67==g||88==g)&&(n.ctrlKey||n.metaKey)===!0||g>=35&&39>=g||g>=112&&123>=g)return;return n.preventDefault(),!1}if(0==v&&d==this.value.length?8==o?(v=d=1,this.value="",h.init=l>0?-1:0,h.c=l>0?-(l+1):0,t.apply(this,[0,0])):c==s?(v=d=1,this.value="0"+s+new Array(l+1).join("0"),h.init=l>0?1:0,h.c=l>0?-(l+1):0):45==o?(v=d=2,this.value="-0"+s+new Array(l+1).join("0"),h.init=l>0?1:0,h.c=l>0?-(l+1):0,t.apply(this,[2,2])):(h.init=l>0?-1:0,h.c=l>0?-l:0):h.c=d-this.value.length,h.isPartialSelection=v==d?!1:!0,l>0&&c==s&&v==this.value.length-l-1)h.c++,h.init=Math.max(0,h.init),n.preventDefault(),f=this.value.length+h.c;else if(45!=o||0==v&&0!=this.value.indexOf("-"))if(c==s)h.init=Math.max(0,h.init),n.preventDefault();else if(l>0&&127==o&&v==this.value.length-l-1)n.preventDefault();else if(l>0&&8==o&&v==this.value.length-l)n.preventDefault(),h.c--,f=this.value.length+h.c;else if(l>0&&127==o&&v>this.value.length-l-1){if(""===this.value)return;"0"!=this.value.slice(v,v+1)&&(p=this.value.slice(0,v)+"0"+this.value.slice(v+1),u.val(p)),n.preventDefault(),f=this.value.length+h.c}else if(l>0&&8==o&&v>this.value.length-l){if(""===this.value)return;"0"!=this.value.slice(v-1,v)&&(p=this.value.slice(0,v-1)+"0"+this.value.slice(v),u.val(p)),n.preventDefault(),h.c--,f=this.value.length+h.c}else 127==o&&this.value.slice(v,v+1)==r?n.preventDefault():8==o&&this.value.slice(v-1,v)==r?(n.preventDefault(),h.c--,f=this.value.length+h.c):l>0&&v==d&&this.value.length>l+1&&v>this.value.length-l-1&&isFinite(+c)&&!n.metaKey&&!n.ctrlKey&&!n.altKey&&1===c.length&&(p=d===this.value.length?this.value.slice(0,v-1):this.value.slice(0,v)+this.value.slice(v+1),this.value=p,f=v);else n.preventDefault();f!==!1&&t.apply(this,[f,f]),u.data("numFormat",h)},"keyup.format":function(i){var n,s=e(this),r=s.data("numFormat"),u=i.keyCode?i.keyCode:i.which,h=a.apply(this,["start"]),o=a.apply(this,["end"]);0!==h||0!==o||189!==u&&109!==u||(s.val("-"+s.val()),h=1,r.c=1-this.value.length,r.init=1,s.data("numFormat",r),n=this.value.length+r.c,t.apply(this,[n,n])),""===this.value||(48>u||u>57)&&(96>u||u>105)&&8!==u&&46!==u&&110!==u||(s.val(s.val()),l>0&&(r.init<1?(h=this.value.length-l-(r.init<0?1:0),r.c=h-this.value.length,r.init=1,s.data("numFormat",r)):h>this.value.length-l&&8!=u&&(r.c++,s.data("numFormat",r))),46!=u||r.isPartialSelection||(r.c++,s.data("numFormat",r)),n=this.value.length+r.c,t.apply(this,[n,n]))},"paste.format":function(t){var a=e(this),i=t.originalEvent,n=null;return window.clipboardData&&window.clipboardData.getData?n=window.clipboardData.getData("Text"):i.clipboardData&&i.clipboardData.getData&&(n=i.clipboardData.getData("text/plain")),a.val(n),t.preventDefault(),!1}}).each(function(){var t=e(this).data("numFormat",{c:-(l+1),decimals:l,thousands_sep:r,dec_point:s,regex_dec_num:h,regex_dec:o,init:this.value.indexOf(".")?!0:!1});""!==this.value&&t.val(t.val())}):this.each(function(){var t=e(this),a=+t.text().replace(h,"").replace(o,".");t.number(isFinite(a)?+a:0,l,s,r)}):this.text(e.number.apply(window,arguments))};var n=null,l=null;e.isPlainObject(e.valHooks.text)?(e.isFunction(e.valHooks.text.get)&&(n=e.valHooks.text.get),e.isFunction(e.valHooks.text.set)&&(l=e.valHooks.text.set)):e.valHooks.text={},e.valHooks.text.get=function(t){var a,i=e(t),l=i.data("numFormat");return l?""===t.value?"":(a=+t.value.replace(l.regex_dec_num,"").replace(l.regex_dec,"."),(0===t.value.indexOf("-")?"-":"")+(isFinite(a)?a:0)):e.isFunction(n)?n(t):void 0},e.valHooks.text.set=function(t,a){var i=e(t),n=i.data("numFormat");if(n){var s=e.number(a,n.decimals,n.dec_point,n.thousands_sep);return e.isFunction(l)?l(t,s):t.value=s}return e.isFunction(l)?l(t,a):void 0},e.number=function(e,t,a,i){i="undefined"==typeof i?"1000"!==new Number(1e3).toLocaleString()?new Number(1e3).toLocaleString().charAt(1):"":i,a="undefined"==typeof a?new Number(.1).toLocaleString().charAt(1):a,t=isFinite(+t)?Math.abs(t):0;var n="\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4),l="\\u"+("0000"+i.charCodeAt(0).toString(16)).slice(-4);e=(e+"").replace(".",a).replace(new RegExp(l,"g"),"").replace(new RegExp(n,"g"),".").replace(new RegExp("[^0-9+-Ee.]","g"),"");var s=isFinite(+e)?+e:0,r="",u=function(e,t){return""+ +(Math.round((""+e).indexOf("e")>0?e:e+"e+"+t)+"e-"+t)};return r=(t?u(s,t):""+Math.round(s)).split("."),r[0].length>3&&(r[0]=r[0].replace(/\B(?=(?:\d{3})+(?!\d))/g,i)),(r[1]||"").length<t&&(r[1]=r[1]||"",r[1]+=new Array(t-r[1].length+1).join("0")),r.join(a)}}(jQuery);
//# sourceMappingURL=jquery.number.min.js.map
/*! jQuery Validation Plugin - v1.17.0 - 7/29/2017
 * https://jqueryvalidation.org/
 * Copyright (c) 2017 Jörn Zaefferer; Licensed MIT */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.extend(a.fn,{validate:function(b){if(!this.length)return void(b&&b.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var c=a.data(this[0],"validator");return c?c:(this.attr("novalidate","novalidate"),c=new a.validator(b,this[0]),a.data(this[0],"validator",c),c.settings.onsubmit&&(this.on("click.validate",":submit",function(b){c.submitButton=b.currentTarget,a(this).hasClass("cancel")&&(c.cancelSubmit=!0),void 0!==a(this).attr("formnovalidate")&&(c.cancelSubmit=!0)}),this.on("submit.validate",function(b){function d(){var d,e;return c.submitButton&&(c.settings.submitHandler||c.formSubmitted)&&(d=a("<input type='hidden'/>").attr("name",c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)),!c.settings.submitHandler||(e=c.settings.submitHandler.call(c,c.currentForm,b),d&&d.remove(),void 0!==e&&e)}return c.settings.debug&&b.preventDefault(),c.cancelSubmit?(c.cancelSubmit=!1,d()):c.form()?c.pendingRequest?(c.formSubmitted=!0,!1):d():(c.focusInvalid(),!1)})),c)},valid:function(){var b,c,d;return a(this[0]).is("form")?b=this.validate().form():(d=[],b=!0,c=a(this[0].form).validate(),this.each(function(){b=c.element(this)&&b,b||(d=d.concat(c.errorList))}),c.errorList=d),b},rules:function(b,c){var d,e,f,g,h,i,j=this[0];if(null!=j&&(!j.form&&j.hasAttribute("contenteditable")&&(j.form=this.closest("form")[0],j.name=this.attr("name")),null!=j.form)){if(b)switch(d=a.data(j.form,"validator").settings,e=d.rules,f=a.validator.staticRules(j),b){case"add":a.extend(f,a.validator.normalizeRule(c)),delete f.messages,e[j.name]=f,c.messages&&(d.messages[j.name]=a.extend(d.messages[j.name],c.messages));break;case"remove":return c?(i={},a.each(c.split(/\s/),function(a,b){i[b]=f[b],delete f[b]}),i):(delete e[j.name],f)}return g=a.validator.normalizeRules(a.extend({},a.validator.classRules(j),a.validator.attributeRules(j),a.validator.dataRules(j),a.validator.staticRules(j)),j),g.required&&(h=g.required,delete g.required,g=a.extend({required:h},g)),g.remote&&(h=g.remote,delete g.remote,g=a.extend(g,{remote:h})),g}}}),a.extend(a.expr.pseudos||a.expr[":"],{blank:function(b){return!a.trim(""+a(b).val())},filled:function(b){var c=a(b).val();return null!==c&&!!a.trim(""+c)},unchecked:function(b){return!a(b).prop("checked")}}),a.validator=function(b,c){this.settings=a.extend(!0,{},a.validator.defaults,b),this.currentForm=c,this.init()},a.validator.format=function(b,c){return 1===arguments.length?function(){var c=a.makeArray(arguments);return c.unshift(b),a.validator.format.apply(this,c)}:void 0===c?b:(arguments.length>2&&c.constructor!==Array&&(c=a.makeArray(arguments).slice(1)),c.constructor!==Array&&(c=[c]),a.each(c,function(a,c){b=b.replace(new RegExp("\\{"+a+"\\}","g"),function(){return c})}),b)},a.extend(a.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",pendingClass:"pending",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:a([]),errorLabelContainer:a([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(a){this.lastActive=a,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,a,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(a)))},onfocusout:function(a){this.checkable(a)||!(a.name in this.submitted)&&this.optional(a)||this.element(a)},onkeyup:function(b,c){var d=[16,17,18,20,35,36,37,38,39,40,45,144,225];9===c.which&&""===this.elementValue(b)||a.inArray(c.keyCode,d)!==-1||(b.name in this.submitted||b.name in this.invalid)&&this.element(b)},onclick:function(a){a.name in this.submitted?this.element(a):a.parentNode.name in this.submitted&&this.element(a.parentNode)},highlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).addClass(c).removeClass(d):a(b).addClass(c).removeClass(d)},unhighlight:function(b,c,d){"radio"===b.type?this.findByName(b.name).removeClass(c).addClass(d):a(b).removeClass(c).addClass(d)}},setDefaults:function(b){a.extend(a.validator.defaults,b)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",equalTo:"Please enter the same value again.",maxlength:a.validator.format("Please enter no more than {0} characters."),minlength:a.validator.format("Please enter at least {0} characters."),rangelength:a.validator.format("Please enter a value between {0} and {1} characters long."),range:a.validator.format("Please enter a value between {0} and {1}."),max:a.validator.format("Please enter a value less than or equal to {0}."),min:a.validator.format("Please enter a value greater than or equal to {0}."),step:a.validator.format("Please enter a multiple of {0}.")},autoCreateRanges:!1,prototype:{init:function(){function b(b){!this.form&&this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=a(this).attr("name"));var c=a.data(this.form,"validator"),d="on"+b.type.replace(/^validate/,""),e=c.settings;e[d]&&!a(this).is(e.ignore)&&e[d].call(c,this,b)}this.labelContainer=a(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||a(this.currentForm),this.containers=a(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var c,d=this.groups={};a.each(this.settings.groups,function(b,c){"string"==typeof c&&(c=c.split(/\s/)),a.each(c,function(a,c){d[c]=b})}),c=this.settings.rules,a.each(c,function(b,d){c[b]=a.validator.normalizeRule(d)}),a(this.currentForm).on("focusin.validate focusout.validate keyup.validate",":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']",b).on("click.validate","select, option, [type='radio'], [type='checkbox']",b),this.settings.invalidHandler&&a(this.currentForm).on("invalid-form.validate",this.settings.invalidHandler)},form:function(){return this.checkForm(),a.extend(this.submitted,this.errorMap),this.invalid=a.extend({},this.errorMap),this.valid()||a(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var a=0,b=this.currentElements=this.elements();b[a];a++)this.check(b[a]);return this.valid()},element:function(b){var c,d,e=this.clean(b),f=this.validationTargetFor(e),g=this,h=!0;return void 0===f?delete this.invalid[e.name]:(this.prepareElement(f),this.currentElements=a(f),d=this.groups[f.name],d&&a.each(this.groups,function(a,b){b===d&&a!==f.name&&(e=g.validationTargetFor(g.clean(g.findByName(a))),e&&e.name in g.invalid&&(g.currentElements.push(e),h=g.check(e)&&h))}),c=this.check(f)!==!1,h=h&&c,c?this.invalid[f.name]=!1:this.invalid[f.name]=!0,this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),a(b).attr("aria-invalid",!c)),h},showErrors:function(b){if(b){var c=this;a.extend(this.errorMap,b),this.errorList=a.map(this.errorMap,function(a,b){return{message:a,element:c.findByName(b)[0]}}),this.successList=a.grep(this.successList,function(a){return!(a.name in b)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){a.fn.resetForm&&a(this.currentForm).resetForm(),this.invalid={},this.submitted={},this.prepareForm(),this.hideErrors();var b=this.elements().removeData("previousValue").removeAttr("aria-invalid");this.resetElements(b)},resetElements:function(a){var b;if(this.settings.unhighlight)for(b=0;a[b];b++)this.settings.unhighlight.call(this,a[b],this.settings.errorClass,""),this.findByName(a[b].name).removeClass(this.settings.validClass);else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(a){var b,c=0;for(b in a)void 0!==a[b]&&null!==a[b]&&a[b]!==!1&&c++;return c},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(a){a.not(this.containers).text(""),this.addWrapper(a).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{a(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(b){}},findLastActive:function(){var b=this.lastActive;return b&&1===a.grep(this.errorList,function(a){return a.element.name===b.name}).length&&b},elements:function(){var b=this,c={};return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function(){var d=this.name||a(this).attr("name");return!d&&b.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.hasAttribute("contenteditable")&&(this.form=a(this).closest("form")[0],this.name=d),!(d in c||!b.objectLength(a(this).rules()))&&(c[d]=!0,!0)})},clean:function(b){return a(b)[0]},errors:function(){var b=this.settings.errorClass.split(" ").join(".");return a(this.settings.errorElement+"."+b,this.errorContext)},resetInternals:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=a([]),this.toHide=a([])},reset:function(){this.resetInternals(),this.currentElements=a([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(a){this.reset(),this.toHide=this.errorsFor(a)},elementValue:function(b){var c,d,e=a(b),f=b.type;return"radio"===f||"checkbox"===f?this.findByName(b.name).filter(":checked").val():"number"===f&&"undefined"!=typeof b.validity?b.validity.badInput?"NaN":e.val():(c=b.hasAttribute("contenteditable")?e.text():e.val(),"file"===f?"C:\\fakepath\\"===c.substr(0,12)?c.substr(12):(d=c.lastIndexOf("/"),d>=0?c.substr(d+1):(d=c.lastIndexOf("\\"),d>=0?c.substr(d+1):c)):"string"==typeof c?c.replace(/\r/g,""):c)},check:function(b){b=this.validationTargetFor(this.clean(b));var c,d,e,f,g=a(b).rules(),h=a.map(g,function(a,b){return b}).length,i=!1,j=this.elementValue(b);if("function"==typeof g.normalizer?f=g.normalizer:"function"==typeof this.settings.normalizer&&(f=this.settings.normalizer),f){if(j=f.call(b,j),"string"!=typeof j)throw new TypeError("The normalizer should return a string value.");delete g.normalizer}for(d in g){e={method:d,parameters:g[d]};try{if(c=a.validator.methods[d].call(this,j,b,e.parameters),"dependency-mismatch"===c&&1===h){i=!0;continue}if(i=!1,"pending"===c)return void(this.toHide=this.toHide.not(this.errorsFor(b)));if(!c)return this.formatAndAdd(b,e),!1}catch(k){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+b.id+", check the '"+e.method+"' method.",k),k instanceof TypeError&&(k.message+=".  Exception occurred when checking element "+b.id+", check the '"+e.method+"' method."),k}}if(!i)return this.objectLength(g)&&this.successList.push(b),!0},customDataMessage:function(b,c){return a(b).data("msg"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase())||a(b).data("msg")},customMessage:function(a,b){var c=this.settings.messages[a];return c&&(c.constructor===String?c:c[b])},findDefined:function(){for(var a=0;a<arguments.length;a++)if(void 0!==arguments[a])return arguments[a]},defaultMessage:function(b,c){"string"==typeof c&&(c={method:c});var d=this.findDefined(this.customMessage(b.name,c.method),this.customDataMessage(b,c.method),!this.settings.ignoreTitle&&b.title||void 0,a.validator.messages[c.method],"<strong>Warning: No message defined for "+b.name+"</strong>"),e=/\$?\{(\d+)\}/g;return"function"==typeof d?d=d.call(this,c.parameters,b):e.test(d)&&(d=a.validator.format(d.replace(e,"{$1}"),c.parameters)),d},formatAndAdd:function(a,b){var c=this.defaultMessage(a,b);this.errorList.push({message:c,element:a,method:b.method}),this.errorMap[a.name]=c,this.submitted[a.name]=c},addWrapper:function(a){return this.settings.wrapper&&(a=a.add(a.parent(this.settings.wrapper))),a},defaultShowErrors:function(){var a,b,c;for(a=0;this.errorList[a];a++)c=this.errorList[a],this.settings.highlight&&this.settings.highlight.call(this,c.element,this.settings.errorClass,this.settings.validClass),this.showLabel(c.element,c.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(a=0;this.successList[a];a++)this.showLabel(this.successList[a]);if(this.settings.unhighlight)for(a=0,b=this.validElements();b[a];a++)this.settings.unhighlight.call(this,b[a],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return a(this.errorList).map(function(){return this.element})},showLabel:function(b,c){var d,e,f,g,h=this.errorsFor(b),i=this.idOrName(b),j=a(b).attr("aria-describedby");h.length?(h.removeClass(this.settings.validClass).addClass(this.settings.errorClass),h.html(c)):(h=a("<"+this.settings.errorElement+">").attr("id",i+"-error").addClass(this.settings.errorClass).html(c||""),d=h,this.settings.wrapper&&(d=h.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(d):this.settings.errorPlacement?this.settings.errorPlacement.call(this,d,a(b)):d.insertAfter(b),h.is("label")?h.attr("for",i):0===h.parents("label[for='"+this.escapeCssMeta(i)+"']").length&&(f=h.attr("id"),j?j.match(new RegExp("\\b"+this.escapeCssMeta(f)+"\\b"))||(j+=" "+f):j=f,a(b).attr("aria-describedby",j),e=this.groups[b.name],e&&(g=this,a.each(g.groups,function(b,c){c===e&&a("[name='"+g.escapeCssMeta(b)+"']",g.currentForm).attr("aria-describedby",h.attr("id"))})))),!c&&this.settings.success&&(h.text(""),"string"==typeof this.settings.success?h.addClass(this.settings.success):this.settings.success(h,b)),this.toShow=this.toShow.add(h)},errorsFor:function(b){var c=this.escapeCssMeta(this.idOrName(b)),d=a(b).attr("aria-describedby"),e="label[for='"+c+"'], label[for='"+c+"'] *";return d&&(e=e+", #"+this.escapeCssMeta(d).replace(/\s+/g,", #")),this.errors().filter(e)},escapeCssMeta:function(a){return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g,"\\$1")},idOrName:function(a){return this.groups[a.name]||(this.checkable(a)?a.name:a.id||a.name)},validationTargetFor:function(b){return this.checkable(b)&&(b=this.findByName(b.name)),a(b).not(this.settings.ignore)[0]},checkable:function(a){return/radio|checkbox/i.test(a.type)},findByName:function(b){return a(this.currentForm).find("[name='"+this.escapeCssMeta(b)+"']")},getLength:function(b,c){switch(c.nodeName.toLowerCase()){case"select":return a("option:selected",c).length;case"input":if(this.checkable(c))return this.findByName(c.name).filter(":checked").length}return b.length},depend:function(a,b){return!this.dependTypes[typeof a]||this.dependTypes[typeof a](a,b)},dependTypes:{"boolean":function(a){return a},string:function(b,c){return!!a(b,c.form).length},"function":function(a,b){return a(b)}},optional:function(b){var c=this.elementValue(b);return!a.validator.methods.required.call(this,c,b)&&"dependency-mismatch"},startRequest:function(b){this.pending[b.name]||(this.pendingRequest++,a(b).addClass(this.settings.pendingClass),this.pending[b.name]=!0)},stopRequest:function(b,c){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[b.name],a(b).removeClass(this.settings.pendingClass),c&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(a(this.currentForm).submit(),this.submitButton&&a("input:hidden[name='"+this.submitButton.name+"']",this.currentForm).remove(),this.formSubmitted=!1):!c&&0===this.pendingRequest&&this.formSubmitted&&(a(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(b,c){return c="string"==typeof c&&c||"remote",a.data(b,"previousValue")||a.data(b,"previousValue",{old:null,valid:!0,message:this.defaultMessage(b,{method:c})})},destroy:function(){this.resetForm(),a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(b,c){b.constructor===String?this.classRuleSettings[b]=c:a.extend(this.classRuleSettings,b)},classRules:function(b){var c={},d=a(b).attr("class");return d&&a.each(d.split(" "),function(){this in a.validator.classRuleSettings&&a.extend(c,a.validator.classRuleSettings[this])}),c},normalizeAttributeRule:function(a,b,c,d){/min|max|step/.test(c)&&(null===b||/number|range|text/.test(b))&&(d=Number(d),isNaN(d)&&(d=void 0)),d||0===d?a[c]=d:b===c&&"range"!==b&&(a[c]=!0)},attributeRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)"required"===c?(d=b.getAttribute(c),""===d&&(d=!0),d=!!d):d=f.attr(c),this.normalizeAttributeRule(e,g,c,d);return e.maxlength&&/-1|2147483647|524288/.test(e.maxlength)&&delete e.maxlength,e},dataRules:function(b){var c,d,e={},f=a(b),g=b.getAttribute("type");for(c in a.validator.methods)d=f.data("rule"+c.charAt(0).toUpperCase()+c.substring(1).toLowerCase()),this.normalizeAttributeRule(e,g,c,d);return e},staticRules:function(b){var c={},d=a.data(b.form,"validator");return d.settings.rules&&(c=a.validator.normalizeRule(d.settings.rules[b.name])||{}),c},normalizeRules:function(b,c){return a.each(b,function(d,e){if(e===!1)return void delete b[d];if(e.param||e.depends){var f=!0;switch(typeof e.depends){case"string":f=!!a(e.depends,c.form).length;break;case"function":f=e.depends.call(c,c)}f?b[d]=void 0===e.param||e.param:(a.data(c.form,"validator").resetElements(a(c)),delete b[d])}}),a.each(b,function(d,e){b[d]=a.isFunction(e)&&"normalizer"!==d?e(c):e}),a.each(["minlength","maxlength"],function(){b[this]&&(b[this]=Number(b[this]))}),a.each(["rangelength","range"],function(){var c;b[this]&&(a.isArray(b[this])?b[this]=[Number(b[this][0]),Number(b[this][1])]:"string"==typeof b[this]&&(c=b[this].replace(/[\[\]]/g,"").split(/[\s,]+/),b[this]=[Number(c[0]),Number(c[1])]))}),a.validator.autoCreateRanges&&(null!=b.min&&null!=b.max&&(b.range=[b.min,b.max],delete b.min,delete b.max),null!=b.minlength&&null!=b.maxlength&&(b.rangelength=[b.minlength,b.maxlength],delete b.minlength,delete b.maxlength)),b},normalizeRule:function(b){if("string"==typeof b){var c={};a.each(b.split(/\s/),function(){c[this]=!0}),b=c}return b},addMethod:function(b,c,d){a.validator.methods[b]=c,a.validator.messages[b]=void 0!==d?d:a.validator.messages[b],c.length<3&&a.validator.addClassRules(b,a.validator.normalizeRule(b))},methods:{required:function(b,c,d){if(!this.depend(d,c))return"dependency-mismatch";if("select"===c.nodeName.toLowerCase()){var e=a(c).val();return e&&e.length>0}return this.checkable(c)?this.getLength(b,c)>0:b.length>0},email:function(a,b){return this.optional(b)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)},url:function(a,b){return this.optional(b)||/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)},date:function(a,b){return this.optional(b)||!/Invalid|NaN/.test(new Date(a).toString())},dateISO:function(a,b){return this.optional(b)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)},number:function(a,b){return this.optional(b)||/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)},digits:function(a,b){return this.optional(b)||/^\d+$/.test(a)},minlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d},maxlength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e<=d},rangelength:function(b,c,d){var e=a.isArray(b)?b.length:this.getLength(b,c);return this.optional(c)||e>=d[0]&&e<=d[1]},min:function(a,b,c){return this.optional(b)||a>=c},max:function(a,b,c){return this.optional(b)||a<=c},range:function(a,b,c){return this.optional(b)||a>=c[0]&&a<=c[1]},step:function(b,c,d){var e,f=a(c).attr("type"),g="Step attribute on input type "+f+" is not supported.",h=["text","number","range"],i=new RegExp("\\b"+f+"\\b"),j=f&&!i.test(h.join()),k=function(a){var b=(""+a).match(/(?:\.(\d+))?$/);return b&&b[1]?b[1].length:0},l=function(a){return Math.round(a*Math.pow(10,e))},m=!0;if(j)throw new Error(g);return e=k(d),(k(b)>e||l(b)%l(d)!==0)&&(m=!1),this.optional(c)||m},equalTo:function(b,c,d){var e=a(d);return this.settings.onfocusout&&e.not(".validate-equalTo-blur").length&&e.addClass("validate-equalTo-blur").on("blur.validate-equalTo",function(){a(c).valid()}),b===e.val()},remote:function(b,c,d,e){if(this.optional(c))return"dependency-mismatch";e="string"==typeof e&&e||"remote";var f,g,h,i=this.previousValue(c,e);return this.settings.messages[c.name]||(this.settings.messages[c.name]={}),i.originalMessage=i.originalMessage||this.settings.messages[c.name][e],this.settings.messages[c.name][e]=i.message,d="string"==typeof d&&{url:d}||d,h=a.param(a.extend({data:b},d.data)),i.old===h?i.valid:(i.old=h,f=this,this.startRequest(c),g={},g[c.name]=b,a.ajax(a.extend(!0,{mode:"abort",port:"validate"+c.name,dataType:"json",data:g,context:f.currentForm,success:function(a){var d,g,h,j=a===!0||"true"===a;f.settings.messages[c.name][e]=i.originalMessage,j?(h=f.formSubmitted,f.resetInternals(),f.toHide=f.errorsFor(c),f.formSubmitted=h,f.successList.push(c),f.invalid[c.name]=!1,f.showErrors()):(d={},g=a||f.defaultMessage(c,{method:e,parameters:b}),d[c.name]=i.message=g,f.invalid[c.name]=!0,f.showErrors(d)),i.valid=j,f.stopRequest(c,j)}},d)),"pending")}}});var b,c={};return a.ajaxPrefilter?a.ajaxPrefilter(function(a,b,d){var e=a.port;"abort"===a.mode&&(c[e]&&c[e].abort(),c[e]=d)}):(b=a.ajax,a.ajax=function(d){var e=("mode"in d?d:a.ajaxSettings).mode,f=("port"in d?d:a.ajaxSettings).port;return"abort"===e?(c[f]&&c[f].abort(),c[f]=b.apply(this,arguments),c[f]):b.apply(this,arguments)}),a});
!function(e){function t(s){if(i[s])return i[s].exports;var n=i[s]={exports:{},id:s,loaded:!1};return e[s].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var i={};return t.m=e,t.c=i,t.p="",t(0)}([function(e,t,i){/*!
	 * dependsOn v1.5.1
	 * a jQuery plugin to facilitate the handling of form field dependencies.
	 *
	 * Copyright 2016 David Street
	 * Licensed under the MIT license.
	 */
var s=i(1);$.fn.dependsOn=function(e,t){var i=$.extend({},{disable:!0,hide:!0,duration:200,trigger:"change"},t);i.trigger+=i.trigger.search(".dependsOn")>-1?"":".dependsOn";var n=new s(this,e,i);return n}},function(e,t,i){var s=i(2),n=i(4),r=function(e,t,i){this.$subject=e,this.collection=new s,this.options=$.extend({},{onEnable:function(){},onDisable:function(){},trigger:"change",readonly:!1},i),this.collection.addSet(new n(t,this.options.trigger)),this.$valueTarget=this._getValueTarget(),this.isInitialState=!0,this.collection.qualified?this._enable():this._disable(),this.isInitialState=!1,this.collection.on("change",this._changeHandler.bind(this))};r.prototype._changeHandler=function(e){e.qualified?this._enable(e.triggerBy.$ele,e.e):this._disable(e.triggerBy.$ele,e.e)},r.prototype._getValueTarget=function(){var e=this.$subject;return this.options.hasOwnProperty("valueTarget")&&void 0!==typeof this.options.valueTarget?e=$(this.options.valueTarget):"input"!==this.$subject[0].nodeName.toLowerCase()&&"textarea"!==this.$subject[0].nodeName.toLowerCase()&&"select"!==this.$subject[0].nodeName.toLowerCase()&&(e=this.$subject.find("input, textarea, select")),e},r.prototype.or=function(e){return this.collection.addSet(new n(e,this.options.trigger)),this.collection.qualified?this._enable():this._disable(),this},r.prototype.check=function(){this.collection.runCheck()},r.prototype._enable=function(e,t){this.options.disable&&this.$subject.attr("disabled",!1),this.options.readonly&&this.$subject.attr("readonly",!1),this.options.hide&&this._toggleDisplay(!0,this.isInitialState),this.options.hasOwnProperty("valueOnEnable")&&void 0!==typeof this.options.valueOnEnable&&this.$valueTarget.val(this.options.valueOnEnable).change(),this.options.hasOwnProperty("checkOnEnable")&&this.$valueTarget.prop("checked",this.options.checkOnEnable).change(),this.options.hasOwnProperty("toggleClass")&&void 0!==typeof this.options.toggleClass&&this.$subject.addClass(this.options.toggleClass),this.options.onEnable.call(e,t,this.$subject)},r.prototype._disable=function(e,t){this.options.disable&&this.$subject.attr("disabled",!0),this.options.readonly&&this.$subject.attr("readonly",!0),this.options.hide&&this._toggleDisplay(!1,this.isInitialState),this.options.hasOwnProperty("valueOnDisable")&&void 0!==typeof this.options.valueOnDisable&&this.$valueTarget.val(this.options.valueOnDisable).change(),this.options.hasOwnProperty("checkOnDisable")&&this.$valueTarget.prop("checked",this.options.checkOnDisable).change(),this.options.hasOwnProperty("toggleClass")&&void 0!==typeof this.options.toggleClass&&this.$subject.removeClass(this.options.toggleClass),this.options.onDisable.call(e,t,this.$subject)},r.prototype._toggleDisplay=function(e,t){var i,s=this.$subject.attr("id");i="label"===this.$subject.parent()[0].nodeName.toLowerCase()?this.$subject.parent():this.$subject.add('label[for="'+s+'"]'),e?t?i.show():i.fadeIn(this.options.duration):e||(t?i.hide():i.fadeOut(this.options.duration))},e.exports=r},function(e,t,i){var s=i(3).EventEmitter,n=function(){this.sets=[],this._qualSum=0,this.qualified=null};e.exports=n,n.prototype=$.extend({},s.prototype),n.prototype.addSet=function(e){this.sets.push(e),this._qualSum+=e.qualified?1:0,this.qualified=this._qualSum>0,e.on("change",this._setChangeHandler.bind(this))},n.prototype.runCheck=function(){for(var e=0,t=this.sets.length;e<t;e++)this.sets[e].runCheck()},n.prototype._setChangeHandler=function(e){var t=this.qualified;this._qualSum+=e.qualified?1:0===this._qualSum?0:-1,this.qualified=this._qualSum>0,this.qualified!==t&&this.emit("change",{triggerBy:e.triggerBy,e:e.e,qualified:this.qualified})}},function(e,t){function i(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function s(e){return"function"==typeof e}function n(e){return"number"==typeof e}function r(e){return"object"==typeof e&&null!==e}function o(e){return void 0===e}e.exports=i,i.EventEmitter=i,i.prototype._events=void 0,i.prototype._maxListeners=void 0,i.defaultMaxListeners=10,i.prototype.setMaxListeners=function(e){if(!n(e)||e<0||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},i.prototype.emit=function(e){var t,i,n,a,h,l;if(this._events||(this._events={}),"error"===e&&(!this._events.error||r(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;var u=new Error('Uncaught, unspecified "error" event. ('+t+")");throw u.context=t,u}if(i=this._events[e],o(i))return!1;if(s(i))switch(arguments.length){case 1:i.call(this);break;case 2:i.call(this,arguments[1]);break;case 3:i.call(this,arguments[1],arguments[2]);break;default:a=Array.prototype.slice.call(arguments,1),i.apply(this,a)}else if(r(i))for(a=Array.prototype.slice.call(arguments,1),l=i.slice(),n=l.length,h=0;h<n;h++)l[h].apply(this,a);return!0},i.prototype.addListener=function(e,t){var n;if(!s(t))throw TypeError("listener must be a function");return this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,s(t.listener)?t.listener:t),this._events[e]?r(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,r(this._events[e])&&!this._events[e].warned&&(n=o(this._maxListeners)?i.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())),this},i.prototype.on=i.prototype.addListener,i.prototype.once=function(e,t){function i(){this.removeListener(e,i),n||(n=!0,t.apply(this,arguments))}if(!s(t))throw TypeError("listener must be a function");var n=!1;return i.listener=t,this.on(e,i),this},i.prototype.removeListener=function(e,t){var i,n,o,a;if(!s(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(i=this._events[e],o=i.length,n=-1,i===t||s(i.listener)&&i.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(r(i)){for(a=o;a-- >0;)if(i[a]===t||i[a].listener&&i[a].listener===t){n=a;break}if(n<0)return this;1===i.length?(i.length=0,delete this._events[e]):i.splice(n,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},i.prototype.removeAllListeners=function(e){var t,i;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(i=this._events[e],s(i))this.removeListener(e,i);else if(i)for(;i.length;)this.removeListener(e,i[i.length-1]);return delete this._events[e],this},i.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?s(this._events[e])?[this._events[e]]:this._events[e].slice():[]},i.prototype.listenerCount=function(e){if(this._events){var t=this._events[e];if(s(t))return 1;if(t)return t.length}return 0},i.listenerCount=function(e,t){return e.listenerCount(t)}},function(e,t,i){var s=i(3).EventEmitter,n=i(5),r=function(e,t){function i(e){return function(t){var i=this.qualified;s+=t.qualified?1:0===s?0:-1,this.qualified=this.doesQualify(),this.qualified!==i&&this.emit("change",{triggerBy:e,e:t.e,qualified:this.doesQualify()})}}this.dependencies=[];var s=0;for(var r in e)if(e.hasOwnProperty(r)){var o=new n(r,e[r],t);this.dependencies.push(o),s+=o.qualified?1:0,o.on("change",i(o).bind(this))}this.doesQualify=function(){return s===this.dependencies.length},this.qualified=this.doesQualify()};e.exports=r,r.prototype=$.extend({},s.prototype),r.prototype.runCheck=function(){for(var e=0,t=this.dependencies.length;e<t;e++)this.dependencies[e].runCheck()}},function(e,t,i){function s(e){var t=e.val();return"radio"===e.attr("type")&&(t=e.filter(":checked").val()),{value:t,checked:e.is(":checked"),disabled:e.is(":disabled"),selected:e.is(":selected")}}var n=i(3).EventEmitter,r=function(e,t,i){function n(t){var i=this.qualified;this.fieldState=s(this.$ele),this.qualified=this.doesQualify(),this.qualified!==i&&this.emit("change",{selector:e,e:t,qualified:this.qualified})}this.$ele=$(e),this.qualifiers=t,this.fieldState=s(this.$ele),this.methods=["enabled","checked","values","not","match","contains","email","url"],this.qualified=this.doesQualify(),this.$ele.on(i,n.bind(this)),this.runCheck=n.bind(this)};r.prototype=$.extend({},n.prototype),r.prototype.enabled=function(e){return!!(!this.fieldState.disabled&&e||this.fieldState.disabled&&!e)},r.prototype.checked=function(e){return"checkbox"!==this.$ele.attr("type")||!(!this.fieldState.checked&&e||this.fieldState.checked&&!e)},r.prototype.values=function(e){for(var t=0,i=e.length;t<i;t++)if(null!==this.fieldState.value&&Array.isArray(this.fieldState.value)){if(0===$(this.fieldState.value).not(e[t]).length&&0===$(e[t]).not(this.fieldState.value).length)return!0}else if(e[t]===this.fieldState.value)return!0;return!1},r.prototype.not=function(e){return!this.values(e)},r.prototype.match=function(e){var t=this.fieldState.value;Array.isArray(this.fieldState.value)||(t=[t]);for(var i=0,s=t.length;i<s;i++)if(!e.test(t[i]))return!1;return!0},r.prototype.notMatch=function(e){var t=this.fieldState.value;Array.isArray(this.fieldState.value)||(t=[t]);for(var i=0,s=t.length;i<s;i++)if(e.test(t[i]))return!1;return!0},r.prototype.contains=function(e){if(!Array.isArray(this.fieldState.value))return this.values(e);for(var t=0,i=e.length;t<i;t++)if($.inArray(e[t],this.fieldState.value)!==-1)return!0;return!1},r.prototype.email=function(e){var t=/^[_a-zA-Z0-9\-\+]+(\.[_a-zA-Z0-9\-\+]+)*@[a-zA-Z0-9\-]+(\.[a-zA-Z0-9\-]+)*\.(([0-9]{1,3})|([a-zA-Z]{2,3})|(aero|coop|info|museum|name))$/;return this.match(t)===e},r.prototype.url=function(e){var t=/(((http|ftp|https):\/\/)|www\.)[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?\^=%&:\/~\+#!]*[\w\-\@?\^=%&\/~\+#])?/;return this.match(t)===e},r.prototype.range=function(e,t,i){var s="string"==typeof e?"char":"number",n="char"===s?e.charCodeAt():e,r="char"===s?t.charCodeAt():t,o="char"===s?this.fieldState.value.charCodeAt():parseFloat(this.fieldState.value);if(i){for(var a=[],h=n;h<=r;h+=i)a.push(h);return a.indexOf(o)>=0}return o>=n&&o<=r},r.prototype.doesQualify=function(){for(var e in this.qualifiers)if(this.qualifiers.hasOwnProperty(e))if(this.methods.indexOf(e)&&"function"==typeof this[e]){if("range"===e){if(!this[e].apply(this,this.qualifiers[e]))return!1}else if(!this[e].call(this,this.qualifiers[e]))return!1}else if("function"==typeof this.qualifiers[e]&&!this.qualifiers[e].call(this.qualifiers,this.$ele.val()))return!1;return!0},e.exports=r,Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),Number.isNaN=Number.isNaN||function(e){return e!==e}}]);
window.Sticksy=function(){"use strict";var s="static",i="fixed",n="stuck";function e(t,i){if(!t)throw new Error("You have to specify the target element");if("string"!=typeof t&&!(t instanceof Element))throw new Error("Expected a string or element, but got: "+Object.prototype.toString.call(t));var n=r.findElement(t);if(!n)throw new Error("Cannot find target element: "+t);var s=n.parentNode;if(!s)throw new Error("Cannot find container of target element: "+t);i=i||{},this.t={containerEl:s,targetEl:n,topSpacing:i.topSpacing||0,enabled:i.enabled||!0,listen:i.listen||!1},this.onStateChanged=null,this.nodeRef=n,this.i()}e.instances=[],e.enabledInstances=[],e.prototype.i=function(){var t=this;this.state=s,this.o=[],this.h=[];for(var i=this.t.targetEl;i;){var n=i.cloneNode(!0);n.style.visibility="hidden",n.style.pointerEvents="none",n.className+=" sticksy-dummy-node",n.removeAttribute("id"),this.t.targetEl.parentNode.insertBefore(n,this.t.targetEl),this.o.push(i),this.h.push(n),i=i.nextElementSibling}this.u=0,this.l={top:0,bottom:0},this.v=!1,this.t.containerEl.style.position="relative",this.m=-1===getComputedStyle(this.t.containerEl).display.indexOf("flex"),this.t.listen&&(this.p=new MutationObserver(function(){t.hardRefresh()}),this.g()),e.instances.push(this),this.t.enabled&&e.enabledInstances.push(this),this.hardRefresh()},e.prototype.g=function(){this.t.listen&&!this.v&&(this.p.observe(this.t.containerEl,{attributes:!0,characterData:!0,childList:!0,subtree:!0}),this.v=!0)},e.prototype.C=function(){this.t.listen&&this.v&&(this.p.disconnect(),this.v=!1)},e.prototype.M=function(t){return t<this.l.top?s:t>=this.l.bottom?n:i},e.prototype.S=function(){this.u=r.getComputedBox(this.o[this.o.length-1]).bottomWithMargin-r.getComputedBox(this.o[0]).topWithMargin},e.prototype.j=function(){var t=this.t.containerEl,i=this.o,t=r.getComputedBox(t),i=r.getComputedBox(i[0]);this.l={top:i.topWithMargin-this.t.topSpacing,bottom:t.bottom-t.paddingBottom-this.t.topSpacing-this.u}},e.prototype.B=function(t){t===s?(this.P(this.o),this.T(this.h)):(this.k(this.o),t===i?this.O(this.o):this.W(this.o),this.D(this.h))},e.prototype.refresh=function(){var t=this.M(window.pageYOffset,this.l);t!==this.state&&(this.state=t,this.C(),this.B(t),this.g(),"function"==typeof this.onStateChanged&&this.onStateChanged(t))},e.prototype.hardRefresh=function(){this.C();var t=this.state;this.state=s,this.B(this.state),this.k(this.o),this.S(),this.j(),this.state=this.M(window.pageYOffset,this.l),this.B(this.state),this.g(),"function"==typeof this.onStateChanged&&t!==this.state&&this.onStateChanged(this.state)},e.prototype.enable=function(){this.t.enabled=!0,e.enabledInstances.push(this),this.hardRefresh()},e.prototype.disable=function(){this.t.enabled=!1,this.state=s,this.B(this.state),e.enabledInstances.splice(e.enabledInstances.indexOf(this),1)},e.prototype.O=function(t){for(var i=0,n=this.t.topSpacing,s=0;s<t.length;s++){var o=t[s],h=r.getComputedBox(o),e=this.m?Math.max(0,i-h.marginTop):i;o.style.position="fixed",o.style.top=n+e+"px",o.style.bottom="",n+=h.height+h.marginTop+e,i=h.marginBottom}},e.prototype.W=function(t){for(var i=0,n=r.getComputedBox(this.t.containerEl).paddingBottom,s=t.length-1;0<=s;s--){var o=t[s],h=r.getComputedBox(o),e=this.m?Math.max(0,i-h.marginBottom):i;o.style.position="absolute",o.style.top="auto",o.style.bottom=n+e+"px",n+=h.height+h.marginBottom+e,i=h.marginTop}},e.prototype.P=function(t){t.forEach(function(t){t.style.position="",t.style.top="",t.style.bottom="",t.style.height="",t.style.width=""})},e.prototype.T=function(t){t.forEach(function(t){t.style.display="none"})},e.prototype.D=function(t){for(var i=0;i<t.length;i++)t[i].style.display=getComputedStyle(this.o[i]).display},e.prototype.k=function(){for(var t=0;t<this.o.length;t++){var i=this.o[t],n=getComputedStyle(i);i.style.width=n.width,i.style.height=n.height}},e.refreshAll=function(){for(var t=0;t<e.enabledInstances.length;t++)e.enabledInstances[t].refresh()},e.hardRefreshAll=function(){for(var t=0;t<e.enabledInstances.length;t++)e.enabledInstances[t].hardRefresh()},e.enableAll=function(){e.enabledInstances=e.instances.slice(),this.hardRefreshAll()},e.disableAll=function(){for(var t=e.enabledInstances.slice(),i=0;i<t.length;i++)e.enabledInstances[i].disable();e.enabledInstances=[]},e.initializeAll=function(t,i,n){if(void 0===t)throw new Error("'target' parameter is undefined");var s=[];t instanceof Element?s=[t]:void 0!==t.length&&0<t.length&&t[0]instanceof Element?s="function"==typeof t.get?t.get():t:"string"==typeof t&&(s=document.querySelectorAll(t)||[]);var o=[],h=[];if(s.forEach(function(t){-1===o.indexOf(t.parentNode)&&(o.push(t.parentNode),h.push(t))}),!n&&!h.length)throw new Error("There are no elements to initialize");return h.map(function(t){return new e(t,i)})},window.addEventListener("scroll",e.refreshAll),window.addEventListener("resize",e.hardRefreshAll);var r={parseNumber:function(t){return parseFloat(t)||0},findElement:function(t,i){return i=i||document,"string"==typeof t?i.querySelector(t):t instanceof Element?t:void 0},getComputedBox:function(t){var i=t.getBoundingClientRect(),t=getComputedStyle(t);return{height:i.height,width:i.width,top:window.pageYOffset+i.top,bottom:window.pageYOffset+i.bottom,marginTop:r.parseNumber(t.marginTop),marginBottom:r.parseNumber(t.marginBottom),paddingTop:r.parseNumber(t.paddingTop),paddingBottom:r.parseNumber(t.paddingBottom),topWithMargin:window.pageYOffset+i.top-r.parseNumber(t.marginTop),bottomWithMargin:window.pageYOffset+i.bottom+r.parseNumber(t.marginBottom)}}};return e}();var jQueryPlugin=window.$||window.jQuery||window.Zepto;jQueryPlugin&&(jQueryPlugin.fn.sticksy=function(t){return window.Sticksy.initializeAll(this,t)});
/**
 * Minified by jsDelivr using UglifyJS v3.3.25.
 * Original file: /npm/js-cookie@2.2.0/src/js.cookie.js
 * 
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function g(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function e(l){function C(e,n,o){var t;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(o=g({path:"/"},C.defaults,o)).expires){var r=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r}o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(e){}n=l.write?l.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,!0!==o[c]&&(i+="="+o[c]));return document.cookie=e+"="+n+i}e||(t={});for(var a=document.cookie?document.cookie.split("; "):[],s=/(%[0-9A-Z]{2})+/g,f=0;f<a.length;f++){var p=a[f].split("="),d=p.slice(1).join("=");this.json||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var u=p[0].replace(s,decodeURIComponent);if(d=l.read?l.read(d,u):l(d,u)||d.replace(s,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(e){}if(e===u){t=d;break}e||(t[u]=d)}catch(e){}}return t}}return(C.set=C).get=function(e){return C.call(C,e)},C.getJSON=function(){return C.apply({json:!0},[].slice.call(arguments))},C.defaults={},C.remove=function(e,n){C(e,"",g(n,{expires:-1}))},C.withConverter=e,C}(function(){})});
//# sourceMappingURL=/sm/31d5cd1b58ce5e6231e4ea03a69b2801a53e76e98152bc29dc82a494ed0a1ee6.map
/*!
 * clipboard.js v1.7.1
 * https://zenorocha.github.io/clipboard.js
 *
 * Licensed MIT © Zeno Rocha
 */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.Clipboard=t()}}(function(){var t,e,n;return function t(e,n,o){function i(a,c){if(!n[a]){if(!e[a]){var l="function"==typeof require&&require;if(!c&&l)return l(a,!0);if(r)return r(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var u=n[a]={exports:{}};e[a][0].call(u.exports,function(t){var n=e[a][1][t];return i(n||t)},u,u.exports,t,e,n,o)}return n[a].exports}for(var r="function"==typeof require&&require,a=0;a<o.length;a++)i(o[a]);return i}({1:[function(t,e,n){function o(t,e){for(;t&&t.nodeType!==i;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}var i=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}e.exports=o},{}],2:[function(t,e,n){function o(t,e,n,o,r){var a=i.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}function i(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}var r=t("./closest");e.exports=o},{"./closest":1}],3:[function(t,e,n){n.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},n.nodeList=function(t){var e=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===e||"[object HTMLCollection]"===e)&&"length"in t&&(0===t.length||n.node(t[0]))},n.string=function(t){return"string"==typeof t||t instanceof String},n.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},{}],4:[function(t,e,n){function o(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!c.string(e))throw new TypeError("Second argument must be a String");if(!c.fn(n))throw new TypeError("Third argument must be a Function");if(c.node(t))return i(t,e,n);if(c.nodeList(t))return r(t,e,n);if(c.string(t))return a(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function i(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function r(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}function a(t,e,n){return l(document.body,t,e,n)}var c=t("./is"),l=t("delegate");e.exports=o},{"./is":3,delegate:2}],5:[function(t,e,n){function o(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}e.exports=o},{}],6:[function(t,e,n){function o(){}o.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){function o(){i.off(t,o),e.apply(n,arguments)}var i=this;return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;for(o;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},e.exports=o},{}],7:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","select"],r);else if(void 0!==o)r(n,e("select"));else{var a={exports:{}};r(a,i.select),i.clipboardAction=a.exports}}(this,function(t,e){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var i=n(e),r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function t(e){o(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=e.action,this.container=e.container,this.emitter=e.emitter,this.target=e.target,this.text=e.text,this.trigger=e.trigger,this.selectedText=""}},{key:"initSelection",value:function t(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function t(){var e=this,n="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return e.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[n?"right":"left"]="-9999px";var o=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=o+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,i.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function t(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function t(){this.selectedText=(0,i.default)(this.target),this.copyText()}},{key:"copyText",value:function t(){var e=void 0;try{e=document.execCommand(this.action)}catch(t){e=!1}this.handleResult(e)}},{key:"handleResult",value:function t(e){this.emitter.emit(e?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function t(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function t(){this.removeFake()}},{key:"action",set:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=e,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function t(){return this._action}},{key:"target",set:function t(e){if(void 0!==e){if(!e||"object"!==(void 0===e?"undefined":r(e))||1!==e.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&e.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(e.hasAttribute("readonly")||e.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=e}},get:function t(){return this._target}}]),t}();t.exports=c})},{select:5}],8:[function(e,n,o){!function(i,r){if("function"==typeof t&&t.amd)t(["module","./clipboard-action","tiny-emitter","good-listener"],r);else if(void 0!==o)r(n,e("./clipboard-action"),e("tiny-emitter"),e("good-listener"));else{var a={exports:{}};r(a,i.clipboardAction,i.tinyEmitter,i.goodListener),i.clipboard=a.exports}}(this,function(t,e,n,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function l(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}var s=i(e),u=i(n),f=i(o),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),p=function(t){function e(t,n){r(this,e);var o=a(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return c(e,t),h(e,[{key:"resolveOptions",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===d(e.container)?e.container:document.body}},{key:"listenClick",value:function t(e){var n=this;this.listener=(0,f.default)(e,"click",function(t){return n.onClick(t)})}},{key:"onClick",value:function t(e){var n=e.delegateTarget||e.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new s.default({action:this.action(n),target:this.target(n),text:this.text(n),container:this.container,trigger:n,emitter:this})}},{key:"defaultAction",value:function t(e){return l("action",e)}},{key:"defaultTarget",value:function t(e){var n=l("target",e);if(n)return document.querySelector(n)}},{key:"defaultText",value:function t(e){return l("text",e)}},{key:"destroy",value:function t(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],n="string"==typeof e?[e]:e,o=!!document.queryCommandSupported;return n.forEach(function(t){o=o&&!!document.queryCommandSupported(t)}),o}}]),e}(u.default);t.exports=p})},{"./clipboard-action":7,"good-listener":4,"tiny-emitter":6}]},{},[8])(8)});
/*! Sortable 1.7.0 - MIT | git://github.com/rubaxa/Sortable.git */

!function(t){"use strict";"function"==typeof define&&define.amd?define(t):"undefined"!=typeof module&&void 0!==module.exports?module.exports=t():window.Sortable=t()}(function(){"use strict";function t(e,n){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be HTMLElement, and not "+{}.toString.call(e);this.el=e,this.options=n=g({},n),e[j]=this;var i={group:null,sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(e.nodeName)?"li":">*",ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==t.supportPointer};for(var r in i)!(r in n)&&(n[r]=i[r]);rt(n);for(var a in this)"_"===a.charAt(0)&&"function"==typeof this[a]&&(this[a]=this[a].bind(this));this.nativeDraggable=!n.forceFallback&&Z,o(e,"mousedown",this._onTapStart),o(e,"touchstart",this._onTapStart),n.supportPointer&&o(e,"pointerdown",this._onTapStart),this.nativeDraggable&&(o(e,"dragover",this),o(e,"dragenter",this)),nt.push(this._onDragOver),n.store&&this.sort(n.store.get(this))}function e(t,e){"clone"!==t.lastPullMode&&(e=!0),w&&w.state!==e&&(a(w,"display",e?"none":""),e||w.state&&(t.options.group.revertClone?(T.insertBefore(w,C),t._animate(b,w)):T.insertBefore(w,b)),w.state=e)}function n(t,e,n){if(t){n=n||W;do{if(">*"===e&&t.parentNode===n||f(t,e))return t}while(t=function(t){var e=t.host;return e&&e.nodeType?e:t.parentNode}(t))}return null}function o(t,e,n){t.addEventListener(e,n,Q)}function i(t,e,n){t.removeEventListener(e,n,Q)}function r(t,e,n){if(t)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(F," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(F," ")}}function a(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return W.defaultView&&W.defaultView.getComputedStyle?n=W.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function l(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function s(t,e,n,o,i,r,a,l){t=t||e[j];var s=W.createEvent("Event"),c=t.options,d="on"+n.charAt(0).toUpperCase()+n.substr(1);s.initEvent(n,!0,!0),s.to=i||e,s.from=r||e,s.item=o||e,s.clone=w,s.oldIndex=a,s.newIndex=l,e.dispatchEvent(s),c[d]&&c[d].call(t,s)}function c(t,e,n,o,i,r,a,l){var s,c,d=t[j],h=d.options.onMove;return(s=W.createEvent("Event")).initEvent("move",!0,!0),s.to=e,s.from=t,s.dragged=n,s.draggedRect=o,s.related=i||e,s.relatedRect=r||e.getBoundingClientRect(),s.willInsertAfter=l,t.dispatchEvent(s),h&&(c=h.call(d,s,a)),c}function d(t){t.draggable=!1}function h(){K=!1}function u(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t&&(t=t.previousElementSibling);)"TEMPLATE"===t.nodeName.toUpperCase()||">*"!==e&&!f(t,e)||n++;return n}function f(t,e){if(t){var n=(e=e.split(".")).shift().toUpperCase(),o=new RegExp("\\s("+e.join("|")+")(?=\\s)","g");return!(""!==n&&t.nodeName.toUpperCase()!=n||e.length&&((" "+t.className+" ").match(o)||[]).length!=e.length)}return!1}function p(t,e){var n,o;return function(){void 0===n&&(n=arguments,o=this,q(function(){1===n.length?t.call(o,n[0]):t.apply(o,n),n=void 0},e))}}function g(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t}function v(t){return G&&G.dom?G.dom(t).cloneNode(!0):z?z(t).clone(!0)[0]:t.cloneNode(!0)}function m(t){return q(t,0)}function _(t){return clearTimeout(t)}if("undefined"==typeof window||!window.document)return function(){throw new Error("Sortable.js requires a window with a document")};var b,D,y,w,T,C,S,E,x,N,k,B,P,Y,X,O,I,R,A,M,L={},F=/\s+/g,U=/left|right|inline/,j="Sortable"+(new Date).getTime(),H=window,W=H.document,V=H.parseInt,q=H.setTimeout,z=H.jQuery||H.Zepto,G=H.Polymer,Q=!1,Z="draggable"in W.createElement("div"),J=function(t){return!navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i)&&(t=W.createElement("x"),t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents)}(),K=!1,$=Math.abs,tt=Math.min,et=[],nt=[],ot=function(){return!1},it=p(function(t,e,n){if(n&&e.scroll){var o,i,r,a,l,s,c=n[j],d=e.scrollSensitivity,h=e.scrollSpeed,u=t.clientX,f=t.clientY,p=window.innerWidth,g=window.innerHeight;if(x!==n&&(E=e.scroll,x=n,N=e.scrollFn,!0===E)){E=n;do{if(E.offsetWidth<E.scrollWidth||E.offsetHeight<E.scrollHeight)break}while(E=E.parentNode)}E&&(o=E,i=E.getBoundingClientRect(),r=($(i.right-u)<=d)-($(i.left-u)<=d),a=($(i.bottom-f)<=d)-($(i.top-f)<=d)),r||a||(a=(g-f<=d)-(f<=d),((r=(p-u<=d)-(u<=d))||a)&&(o=H)),L.vx===r&&L.vy===a&&L.el===o||(L.el=o,L.vx=r,L.vy=a,clearInterval(L.pid),o&&(L.pid=setInterval(function(){if(s=a?a*h:0,l=r?r*h:0,"function"==typeof N)return N.call(c,l,s,t);o===H?H.scrollTo(H.pageXOffset+l,H.pageYOffset+s):(o.scrollTop+=s,o.scrollLeft+=l)},24)))}},30),rt=function(t){function e(t,e){return null!=t&&!0!==t||null!=(t=n.name)?"function"==typeof t?t:function(n,o){var i=o.options.group.name;return e?t:t&&(t.join?t.indexOf(i)>-1:i==t)}:ot}var n={},o=t.group;o&&"object"==typeof o||(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n};try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){Q={capture:!1,passive:!1}}}))}catch(t){}return t.prototype={constructor:t,_onTapStart:function(t){var e,o=this,i=this.el,r=this.options,a=r.preventOnFilter,l=t.type,c=t.touches&&t.touches[0],d=(c||t).target,h=t.target.shadowRoot&&t.path&&t.path[0]||d,f=r.filter;if(function(t){et.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n];o.checked&&et.push(o)}}(i),!b&&!(/mousedown|pointerdown/.test(l)&&0!==t.button||r.disabled)&&!h.isContentEditable&&(d=n(d,r.draggable,i))&&S!==d){if(e=u(d,r.draggable),"function"==typeof f){if(f.call(this,t,d,this))return s(o,h,"filter",d,i,i,e),void(a&&t.preventDefault())}else if(f&&(f=f.split(",").some(function(t){if(t=n(h,t.trim(),i))return s(o,t,"filter",d,i,i,e),!0})))return void(a&&t.preventDefault());r.handle&&!n(h,r.handle,i)||this._prepareDragStart(t,c,d,e)}},_prepareDragStart:function(t,e,n,i){var a,c=this,h=c.el,u=c.options,f=h.ownerDocument;n&&!b&&n.parentNode===h&&(R=t,T=h,D=(b=n).parentNode,C=b.nextSibling,S=n,O=u.group,Y=i,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,b.style["will-change"]="all",a=function(){c._disableDelayedDrag(),b.draggable=c.nativeDraggable,r(b,u.chosenClass,!0),c._triggerDragStart(t,e),s(c,T,"choose",b,T,T,Y)},u.ignore.split(",").forEach(function(t){l(b,t.trim(),d)}),o(f,"mouseup",c._onDrop),o(f,"touchend",c._onDrop),o(f,"touchcancel",c._onDrop),o(f,"selectstart",c),u.supportPointer&&o(f,"pointercancel",c._onDrop),u.delay?(o(f,"mouseup",c._disableDelayedDrag),o(f,"touchend",c._disableDelayedDrag),o(f,"touchcancel",c._disableDelayedDrag),o(f,"mousemove",c._disableDelayedDrag),o(f,"touchmove",c._disableDelayedDrag),u.supportPointer&&o(f,"pointermove",c._disableDelayedDrag),c._dragStartTimer=q(a,u.delay)):a())},_disableDelayedDrag:function(){var t=this.el.ownerDocument;clearTimeout(this._dragStartTimer),i(t,"mouseup",this._disableDelayedDrag),i(t,"touchend",this._disableDelayedDrag),i(t,"touchcancel",this._disableDelayedDrag),i(t,"mousemove",this._disableDelayedDrag),i(t,"touchmove",this._disableDelayedDrag),i(t,"pointermove",this._disableDelayedDrag)},_triggerDragStart:function(t,e){(e=e||("touch"==t.pointerType?t:null))?(R={target:b,clientX:e.clientX,clientY:e.clientY},this._onDragStart(R,"touch")):this.nativeDraggable?(o(b,"dragend",this),o(T,"dragstart",this._onDragStart)):this._onDragStart(R,!0);try{W.selection?m(function(){W.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(){if(T&&b){var e=this.options;r(b,e.ghostClass,!0),r(b,e.dragClass,!1),t.active=this,s(this,T,"start",b,T,T,Y)}else this._nulling()},_emulateDragOver:function(){if(A){if(this._lastX===A.clientX&&this._lastY===A.clientY)return;this._lastX=A.clientX,this._lastY=A.clientY,J||a(y,"display","none");var t=W.elementFromPoint(A.clientX,A.clientY),e=t,n=nt.length;if(t&&t.shadowRoot&&(e=t=t.shadowRoot.elementFromPoint(A.clientX,A.clientY)),e)do{if(e[j]){for(;n--;)nt[n]({clientX:A.clientX,clientY:A.clientY,target:t,rootEl:e});break}t=e}while(e=e.parentNode);J||a(y,"display","")}},_onTouchMove:function(e){if(R){var n=this.options,o=n.fallbackTolerance,i=n.fallbackOffset,r=e.touches?e.touches[0]:e,l=r.clientX-R.clientX+i.x,s=r.clientY-R.clientY+i.y,c=e.touches?"translate3d("+l+"px,"+s+"px,0)":"translate("+l+"px,"+s+"px)";if(!t.active){if(o&&tt($(r.clientX-this._lastX),$(r.clientY-this._lastY))<o)return;this._dragStarted()}this._appendGhost(),M=!0,A=r,a(y,"webkitTransform",c),a(y,"mozTransform",c),a(y,"msTransform",c),a(y,"transform",c),e.preventDefault()}},_appendGhost:function(){if(!y){var t,e=b.getBoundingClientRect(),n=a(b),o=this.options;r(y=b.cloneNode(!0),o.ghostClass,!1),r(y,o.fallbackClass,!0),r(y,o.dragClass,!0),a(y,"top",e.top-V(n.marginTop,10)),a(y,"left",e.left-V(n.marginLeft,10)),a(y,"width",e.width),a(y,"height",e.height),a(y,"opacity","0.8"),a(y,"position","fixed"),a(y,"zIndex","100000"),a(y,"pointerEvents","none"),o.fallbackOnBody&&W.body.appendChild(y)||T.appendChild(y),t=y.getBoundingClientRect(),a(y,"width",2*e.width-t.width),a(y,"height",2*e.height-t.height)}},_onDragStart:function(t,e){var n=this,i=t.dataTransfer,l=n.options;n._offUpEvents(),O.checkPull(n,n,b,t)&&((w=v(b)).draggable=!1,w.style["will-change"]="",a(w,"display","none"),r(w,n.options.chosenClass,!1),n._cloneId=m(function(){T.insertBefore(w,b),s(n,T,"clone",b)})),r(b,l.dragClass,!0),e?("touch"===e?(o(W,"touchmove",n._onTouchMove),o(W,"touchend",n._onDrop),o(W,"touchcancel",n._onDrop),l.supportPointer&&(o(W,"pointermove",n._onTouchMove),o(W,"pointerup",n._onDrop))):(o(W,"mousemove",n._onTouchMove),o(W,"mouseup",n._onDrop)),n._loopId=setInterval(n._emulateDragOver,50)):(i&&(i.effectAllowed="move",l.setData&&l.setData.call(n,i,b)),o(W,"drop",n),n._dragStartId=m(n._dragStarted))},_onDragOver:function(o){var i,r,l,s,d=this.el,u=this.options,f=u.group,p=t.active,g=O===f,v=!1,m=u.sort;if(void 0!==o.preventDefault&&(o.preventDefault(),!u.dragoverBubble&&o.stopPropagation()),!b.animated&&(M=!0,p&&!u.disabled&&(g?m||(s=!T.contains(b)):I===this||(p.lastPullMode=O.checkPull(this,p,b,o))&&f.checkPut(this,p,b,o))&&(void 0===o.rootEl||o.rootEl===this.el))){if(it(o,u,this.el),K)return;if(i=n(o.target,u.draggable,d),r=b.getBoundingClientRect(),I!==this&&(I=this,v=!0),s)return e(p,!0),D=T,void(w||C?T.insertBefore(b,w||C):m||T.appendChild(b));if(0===d.children.length||d.children[0]===y||d===o.target&&function(t,e){var n=t.lastElementChild.getBoundingClientRect();return e.clientY-(n.top+n.height)>5||e.clientX-(n.left+n.width)>5}(d,o)){if(0!==d.children.length&&d.children[0]!==y&&d===o.target&&(i=d.lastElementChild),i){if(i.animated)return;l=i.getBoundingClientRect()}e(p,g),!1!==c(T,d,b,r,i,l,o)&&(b.contains(d)||(d.appendChild(b),D=d),this._animate(r,b),i&&this._animate(l,i))}else if(i&&!i.animated&&i!==b&&void 0!==i.parentNode[j]){k!==i&&(k=i,B=a(i),P=a(i.parentNode));var _=(l=i.getBoundingClientRect()).right-l.left,S=l.bottom-l.top,E=U.test(B.cssFloat+B.display)||"flex"==P.display&&0===P["flex-direction"].indexOf("row"),x=i.offsetWidth>b.offsetWidth,N=i.offsetHeight>b.offsetHeight,Y=(E?(o.clientX-l.left)/_:(o.clientY-l.top)/S)>.5,X=i.nextElementSibling,R=!1;if(E){var A=b.offsetTop,L=i.offsetTop;R=A===L?i.previousElementSibling===b&&!x||Y&&x:i.previousElementSibling===b||b.previousElementSibling===i?(o.clientY-l.top)/S>.5:L>A}else v||(R=X!==b&&!N||Y&&N);var F=c(T,d,b,r,i,l,o,R);!1!==F&&(1!==F&&-1!==F||(R=1===F),K=!0,q(h,30),e(p,g),b.contains(d)||(R&&!X?d.appendChild(b):i.parentNode.insertBefore(b,R?X:i)),D=b.parentNode,this._animate(r,b),this._animate(l,i))}}},_animate:function(t,e){var n=this.options.animation;if(n){var o=e.getBoundingClientRect();1===t.nodeType&&(t=t.getBoundingClientRect()),a(e,"transition","none"),a(e,"transform","translate3d("+(t.left-o.left)+"px,"+(t.top-o.top)+"px,0)"),e.offsetWidth,a(e,"transition","all "+n+"ms"),a(e,"transform","translate3d(0,0,0)"),clearTimeout(e.animated),e.animated=q(function(){a(e,"transition",""),a(e,"transform",""),e.animated=!1},n)}},_offUpEvents:function(){var t=this.el.ownerDocument;i(W,"touchmove",this._onTouchMove),i(W,"pointermove",this._onTouchMove),i(t,"mouseup",this._onDrop),i(t,"touchend",this._onDrop),i(t,"pointerup",this._onDrop),i(t,"touchcancel",this._onDrop),i(t,"pointercancel",this._onDrop),i(t,"selectstart",this)},_onDrop:function(e){var n=this.el,o=this.options;clearInterval(this._loopId),clearInterval(L.pid),clearTimeout(this._dragStartTimer),_(this._cloneId),_(this._dragStartId),i(W,"mouseover",this),i(W,"mousemove",this._onTouchMove),this.nativeDraggable&&(i(W,"drop",this),i(n,"dragstart",this._onDragStart)),this._offUpEvents(),e&&(M&&(e.preventDefault(),!o.dropBubble&&e.stopPropagation()),y&&y.parentNode&&y.parentNode.removeChild(y),T!==D&&"clone"===t.active.lastPullMode||w&&w.parentNode&&w.parentNode.removeChild(w),b&&(this.nativeDraggable&&i(b,"dragend",this),d(b),b.style["will-change"]="",r(b,this.options.ghostClass,!1),r(b,this.options.chosenClass,!1),s(this,T,"unchoose",b,D,T,Y),T!==D?(X=u(b,o.draggable))>=0&&(s(null,D,"add",b,D,T,Y,X),s(this,T,"remove",b,D,T,Y,X),s(null,D,"sort",b,D,T,Y,X),s(this,T,"sort",b,D,T,Y,X)):b.nextSibling!==C&&(X=u(b,o.draggable))>=0&&(s(this,T,"update",b,D,T,Y,X),s(this,T,"sort",b,D,T,Y,X)),t.active&&(null!=X&&-1!==X||(X=Y),s(this,T,"end",b,D,T,Y,X),this.save()))),this._nulling()},_nulling:function(){T=b=D=y=C=w=S=E=x=R=A=M=X=k=B=I=O=t.active=null,et.forEach(function(t){t.checked=!0}),et.length=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragover":case"dragenter":b&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.preventDefault()}(t));break;case"mouseover":this._onDrop(t);break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],o=this.el.children,i=0,r=o.length,a=this.options;i<r;i++)n(t=o[i],a.draggable,this.el)&&e.push(t.getAttribute(a.dataIdAttr)||function(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}(t));return e},sort:function(t){var e={},o=this.el;this.toArray().forEach(function(t,i){var r=o.children[i];n(r,this.options.draggable,o)&&(e[t]=r)},this),t.forEach(function(t){e[t]&&(o.removeChild(e[t]),o.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set(this)},closest:function(t,e){return n(t,e||this.options.draggable,this.el)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];n[t]=e,"group"===t&&rt(n)},destroy:function(){var t=this.el;t[j]=null,i(t,"mousedown",this._onTapStart),i(t,"touchstart",this._onTapStart),i(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(i(t,"dragover",this),i(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),nt.splice(nt.indexOf(this._onDragOver),1),this._onDrop(),this.el=t=null}},o(W,"touchmove",function(e){t.active&&e.preventDefault()}),t.utils={on:o,off:i,css:a,find:l,is:function(t,e){return!!n(t,e,t)},extend:g,throttle:p,closest:n,toggleClass:r,clone:v,index:u,nextTick:m,cancelNextTick:_},t.create=function(e,n){return new t(e,n)},t.version="1.7.0",t});
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Noty",[],e):"object"==typeof exports?exports.Noty=e():t.Noty=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var o={};return e.m=t,e.c=o,e.i=function(t){return t},e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function i(t,e,o){var n="";if(!o){for(n in e)if(e[n]==t)return!0}else for(n in e)if(e[n]===t)return!0;return!1}function r(t){t=t||window.event,void 0!==t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}function s(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e="noty_"+t+"_";return e+="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}function a(t,e,o,n){t.addEventListener(e,function(t){for(var e=t.target;e&&e!==this;)e.matches(o)&&n.call(e,t),e=e.parentNode})}function u(t){var e=t.offsetHeight,o=getComputedStyle(t);return e+=parseInt(o.marginTop)+parseInt(o.marginBottom)}function l(t,e,o){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e=e.split(" ");for(var i=0;i<e.length;i++)document.addEventListener?t.addEventListener(e[i],o,n):document.attachEvent&&t.attachEvent("on"+e[i],o)}function c(t,e,o){e=e.split(" ");for(var n=0;n<e.length;n++)document.removeEventListener?t.removeEventListener(e[n],o,!1):document.attachEvent&&t.attachEvent("on"+e[n],o)}function f(t,e,o){document.addEventListener(t,function(t){var n=document.querySelectorAll(e);if(n){for(var i=t.target,r=void 0;i&&-1===(r=Array.prototype.indexOf.call(n,i));)i=i.parentElement;r>-1&&o.call(i,t)}})}function h(t,e){for(;(t=t.parentElement)&&!t.classList.contains(e););return t}function p(t,e){for(var o=t.children,n=0;n<o.length;n++){var i=o[n];if(i.classList.contains(e))return i}}function d(t,e){return("string"==typeof t?t:b(t)).indexOf(" "+e+" ")>=0}function m(t,e){var o=b(t),n=o+e;d(o,e)||(t.className=n.substring(1))}function y(t,e){var o,n=b(t);d(t,e)&&(o=n.replace(" "+e+" "," "),t.className=o.substring(1,o.length-1))}function v(t){t.parentNode.removeChild(t)}function b(t){return(" "+(t&&t.className||"")+" ").replace(/\s+/gi," ")}function g(){function t(){Object.keys(D.Store).forEach(function(t){D.Store.hasOwnProperty(t)&&setTimeout(function(){D.Store[t].stop()},100)})}function e(){Object.keys(D.Store).forEach(function(t){D.Store.hasOwnProperty(t)&&setTimeout(function(){D.Store[t].resume()},100)})}l(window,"blur",t),l(window,"focus",e)}Object.defineProperty(e,"__esModule",{value:!0}),e.css=e.deepExtend=e.animationEndEvents=void 0;var _="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.inArray=i,e.stopPropagation=r,e.generateID=s,e.delegate=a,e.outerHeight=u,e.addListener=l,e.removeListener=c,e.live=f,e.findParent=h,e.findChild=p,e.hasClass=d,e.addClass=m,e.removeClass=y,e.remove=v,e.classList=b,e.visibilityChangeFlow=g;var w=o(1),D=n(w);window.HTMLElement&&(HTMLElement.prototype.matches=HTMLElement.prototype.matches||HTMLElement.prototype.matchesSelector||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector||HTMLElement.prototype.oMatchesSelector);e.animationEndEvents="webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",e.deepExtend=function t(e){e=e||{};for(var o=1;o<arguments.length;o++){var n=arguments[o];if(n)for(var i in n)n.hasOwnProperty(i)&&(Array.isArray(n[i])?e[i]=n[i]:"object"===_(n[i])&&null!=n[i]?e[i]=t(e[i],n[i]):e[i]=n[i])}return e},e.css=function(){function t(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}function e(t){var e=document.body.style;if(t in e)return t;for(var o,n=i.length,r=t.charAt(0).toUpperCase()+t.slice(1);n--;)if((o=i[n]+r)in e)return o;return t}function o(o){return o=t(o),r[o]||(r[o]=e(o))}function n(t,e,n){e=o(e),t.style[e]=n}var i=["Webkit","O","Moz","ms"],r={};return function(t,e){var o,i,r=arguments;if(2==r.length)for(o in e)void 0!==(i=e[o])&&e.hasOwnProperty(o)&&n(t,o,i);else n(t,r[1],r[2])}}()},function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global",e=0,o=_;return w.hasOwnProperty(t)&&(o=w[t].maxVisible,Object.keys(D).forEach(function(o){D[o].options.queue!=t||D[o].closed||e++})),{current:e,maxVisible:o}}function r(t){w.hasOwnProperty(t.options.queue)||(w[t.options.queue]={maxVisible:_,queue:[]}),w[t.options.queue].queue.push(t)}function s(t){if(w.hasOwnProperty(t.options.queue)){var e=[];Object.keys(w[t.options.queue].queue).forEach(function(o){w[t.options.queue].queue[o].id!=t.id&&e.push(w[t.options.queue].queue[o])}),w[t.options.queue].queue=e}}function a(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"global";if(w.hasOwnProperty(t)){var e=w[t].queue.shift();e&&e.show()}}function u(t){var e=g.generateID("ghost"),o=document.createElement("div");o.setAttribute("id",e),g.css(o,{height:g.outerHeight(t.barDom)+"px"}),t.barDom.insertAdjacentHTML("afterend",o.outerHTML),g.remove(t.barDom),o=document.getElementById(e),g.addClass(o,"noty_fix_effects_height"),g.addListener(o,g.animationEndEvents,function(){g.remove(o)})}function l(t){h(t);var e='<div class="noty_body">'+t.options.text+"</div>"+f(t)+'<div class="noty_progressbar"></div>';t.barDom=document.createElement("div"),t.barDom.setAttribute("id",t.id),g.addClass(t.barDom,"noty_bar noty_type__"+t.options.type+" noty_theme__"+t.options.theme),t.barDom.innerHTML=e,m(t,"onTemplate")}function c(t){return!(!t.options.buttons||!Object.keys(t.options.buttons).length)}function f(t){if(c(t)){var e=document.createElement("div");return g.addClass(e,"noty_buttons"),Object.keys(t.options.buttons).forEach(function(o){e.appendChild(t.options.buttons[o].dom)}),t.options.buttons.forEach(function(t){e.appendChild(t.dom)}),e.outerHTML}return""}function h(t){if(t.options.container)return t.layoutDom=document.querySelector(t.options.container),void console.log(t.layoutDom);var e="noty_layout__"+t.options.layout;t.layoutDom=document.querySelector("div#"+e),t.layoutDom||(t.layoutDom=document.createElement("div"),t.layoutDom.setAttribute("id",e),document.querySelector("body").appendChild(t.layoutDom))}function p(t){t.options.timeout&&(t.options.progressBar&&t.progressDom&&g.css(t.progressDom,{transition:"width "+t.options.timeout+"ms linear",width:"0%"}),t.closeTimer=setTimeout(function(){t.close()},t.options.timeout))}function d(t){t.options.timeout&&t.closeTimer&&(clearTimeout(t.closeTimer),t.closeTimer=0,t.options.progressBar&&t.progressDom&&g.css(t.progressDom,{transition:"width 0ms linear",width:"100%"}))}function m(t,e){t.listeners.hasOwnProperty(e)&&t.listeners[e].forEach(function(e){"function"==typeof e&&e.apply(t)})}function y(t){m(t,"afterShow"),p(t)/*,g.addListener(t.barDom,"mouseenter",function(){d(t)})*/ /* Bazel added */,g.addListener(t.barDom,"mouseleave",function(){p(t)})}function v(t){delete D[t.id],m(t,"afterClose"),0!=t.layoutDom.querySelectorAll(".noty_bar").length||t.options.container||g.remove(t.layoutDom),a(t.options.queue)}Object.defineProperty(e,"__esModule",{value:!0}),e.Defaults=e.Store=e.Queues=e.DefaultMaxVisible=void 0,e.getQueueCounts=i,e.addToQueue=r,e.removeFromQueue=s,e.queueRender=a,e.ghostFix=u,e.build=l,e.hasButtons=c,e.queueClose=p,e.dequeueClose=d,e.fire=m,e.openFlow=y,e.closeFlow=v;var b=o(0),g=n(b),_=e.DefaultMaxVisible=5,w=e.Queues={global:{maxVisible:_,queue:[]}},D=e.Store={};e.Defaults={type:"alert",layout:"topRight",theme:"mint",text:"",timeout:!1,progressBar:!0,closeWith:["click"],animation:{open:"noty_effects_open",close:"noty_effects_close"},id:!1,force:!1,killer:!1,queue:"global",container:!1,buttons:[],callbacks:{beforeShow:null,onShow:null,afterShow:null,onClose:null,afterClose:null,onHover:null,onTemplate:null}}},function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0}),e.NotyButton=void 0;var r=o(0),s=n(r);e.NotyButton=function t(e,o,n){var r=this,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return i(this,t),this.dom=document.createElement("button"),this.dom.innerHTML=e,this.id=a.id=a.id||s.generateID("button"),this.cb=n,Object.keys(a).forEach(function(t){r.dom.setAttribute(t,a[t])}),s.addClass(this.dom,o||"noty_btn"),this}},function(t,e){},function(t,e,o){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e.default=t,e}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,o,n){return o&&t(e.prototype,o),n&&t(e,n),e}}();o(3);var s=o(0),a=n(s),u=o(1),l=n(u),c=o(2),f=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(this,t),this.options=a.deepExtend({},l.Defaults,e),this.id=this.options.id||a.generateID("bar"),this.closeTimer=-1,this.barDom=null,this.layoutDom=null,this.progressDom=null,this.shown=!1,this.closed=!1,this.listeners={beforeShow:[],onShow:[],afterShow:[],onClose:[],afterClose:[],onHover:[],onTemplate:[]},this.on("beforeShow",this.options.callbacks.beforeShow),this.on("onShow",this.options.callbacks.onShow),this.on("afterShow",this.options.callbacks.afterShow),this.on("onClose",this.options.callbacks.onClose),this.on("afterClose",this.options.callbacks.afterClose),this.on("onHover",this.options.callbacks.onHover),this.on("onTemplate",this.options.callbacks.onTemplate),this}return r(t,[{key:"on",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};return"function"==typeof e&&this.listeners.hasOwnProperty(t)&&this.listeners[t].push(e),this}},{key:"show",value:function(){var e=this;if(!0===this.options.killer)t.closeAll();else if("string"==typeof this.options.killer)t.closeAll(this.options.killer);else{var o=l.getQueueCounts(this.options.queue);if(o.current>=o.maxVisible)return l.addToQueue(this),this}if(l.Store[this.id]=this,l.fire(this,"beforeShow"),l.build(this),this.options.force?this.layoutDom.insertBefore(this.barDom,this.layoutDom.firstChild):this.layoutDom.appendChild(this.barDom),this.shown=!0,this.closed=!1,l.hasButtons(this)&&Object.keys(this.options.buttons).forEach(function(t){var o=e.barDom.querySelector("#"+e.options.buttons[t].id);a.addListener(o,"click",function(o){a.stopPropagation(o),e.options.buttons[t].cb()})}),this.progressDom=this.barDom.querySelector(".noty_progressbar"),a.inArray("click",this.options.closeWith)&&(a.addClass(this.barDom,"noty_close_with_click"),a.addListener(this.barDom,"click",function(t){a.stopPropagation(t),e.close()},!1)),a.addListener(this.barDom,"mouseenter",function(){l.fire(e,"onHover")},!1),this.options.timeout&&a.addClass(this.barDom,"noty_has_timeout"),a.inArray("button",this.options.closeWith)){a.addClass(this.barDom,"noty_close_with_button");var n=document.createElement("div");a.addClass(n,"noty_close_button"),n.innerHTML="×",this.barDom.appendChild(n),a.addListener(n,"click",function(t){a.stopPropagation(t),e.close()},!1)}if(l.fire(this,"onShow"),null==this.options.animation.open){var i=this;setTimeout(function(){l.openFlow(i)},100)}else if("function"==typeof this.options.animation.open){this.options.animation.open.apply(this);var r=this;setTimeout(function(){l.openFlow(r)},100)}else a.addClass(this.barDom,this.options.animation.open),a.addListener(this.barDom,a.animationEndEvents,function(){a.removeClass(e.barDom,e.options.animation.open),l.openFlow(e)});return this}},{key:"stop",value:function(){return l.dequeueClose(this),this}},{key:"resume",value:function(){return l.queueClose(this),this}},{key:"setTimeout",value:function(t){function e(e){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t){this.stop(),this.options.timeout=t,this.options.timeout?a.addClass(this.barDom,"noty_has_timeout"):a.removeClass(this.barDom,"noty_has_timeout");var e=this;return setTimeout(function(){e.resume()},100),this})},{key:"setText",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.barDom.querySelector(".noty_body").innerHTML=t,e&&(this.options.text=t),this}},{key:"setType",value:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a.classList(this.barDom).split(" ").forEach(function(t){"noty_type__"==t.substring(0,11)&&a.removeClass(e.barDom,t)}),a.addClass(this.barDom,"noty_type__"+t),o&&(this.options.type=t),this}},{key:"setTheme",value:function(t){var e=this,o=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return a.classList(this.barDom).split(" ").forEach(function(t){"noty_theme__"==t.substring(0,12)&&a.removeClass(e.barDom,t)}),a.addClass(this.barDom,"noty_theme__"+t),o&&(this.options.theme=t),this}},{key:"close",value:function(){var t=this;return this.closed?this:this.shown?(l.fire(this,"onClose"),null==this.options.animation.close?(a.remove(this.barDom),l.closeFlow(this)):"function"==typeof this.options.animation.close?(this.options.animation.close.apply(this),l.closeFlow(this)):(a.addClass(this.barDom,this.options.animation.close),a.addListener(this.barDom,a.animationEndEvents,function(){t.options.force?a.remove(t.barDom):l.ghostFix(t),l.closeFlow(t)})),this.closed=!0,this):(l.removeFromQueue(this),this)}}],[{key:"closeAll",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object.keys(l.Store).forEach(function(e){t?l.Store[e].options.queue==t&&l.Store[e].close():l.Store[e].close()}),this}},{key:"overrideDefaults",value:function(t){return l.Defaults=a.deepExtend({},l.Defaults,t),this}},{key:"setMaxVisible",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.DefaultMaxVisible,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"global";return l.Queues.hasOwnProperty(e)||(l.Queues[e]={maxVisible:t,queue:[]}),l.Queues[e].maxVisible=t,this}},{key:"button",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments[2],n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return new c.NotyButton(t,e,o,n)}},{key:"version",value:function(){return"3.0.1"}}]),t}();e.default=f,a.visibilityChangeFlow(),t.exports=e.default}])});
//# sourceMappingURL=noty.min.js.map
// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
!function(t,e,n,o){"use strict";function i(t,e){var o,i,a,s=[],r=0;t&&t.isDefaultPrevented()||(t.preventDefault(),e=e||{},t&&t.data&&(e=h(t.data.options,e)),o=e.$target||n(t.currentTarget).trigger("blur"),(a=n.fancybox.getInstance())&&a.$trigger&&a.$trigger.is(o)||(e.selector?s=n(e.selector):(i=o.attr("data-fancybox")||"",i?(s=t.data?t.data.items:[],s=s.length?s.filter('[data-fancybox="'+i+'"]'):n('[data-fancybox="'+i+'"]')):s=[o]),r=n(s).index(o),r<0&&(r=0),a=n.fancybox.open(s,e,r),a.$trigger=o))}if(t.console=t.console||{info:function(t){}},n){if(n.fn.fancybox)return void console.info("fancyBox already initialized");var a={closeExisting:!1,loop:!1,gutter:50,keyboard:!0,preventCaptionOverlap:!0,arrows:!0,infobar:!0,smallBtn:"auto",toolbar:"auto",buttons:["zoom","slideShow","thumbs","close"],idleTime:3,protect:!1,modal:!1,image:{preload:!1},ajax:{settings:{data:{fancybox:!0}}},iframe:{tpl:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',preload:!0,css:{},attr:{scrolling:"auto"}},video:{tpl:'<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',format:"",autoStart:!0},defaultType:"image",animationEffect:"zoom",animationDuration:366,zoomOpacity:"auto",transitionEffect:"fade",transitionDuration:366,slideClass:"",baseClass:"",baseTpl:'<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"><div class="fancybox-caption__body"></div></div></div></div>',spinnerTpl:'<div class="fancybox-loading"></div>',errorTpl:'<div class="fancybox-error"><p>{{ERROR}}</p></div>',btnTpl:{download:'<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',zoom:'<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',close:'<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',arrowLeft:'<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',arrowRight:'<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',smallBtn:'<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'},parentEl:"body",hideScrollbar:!0,autoFocus:!0,backFocus:!0,trapFocus:!0,fullScreen:{autoStart:!1},touch:{vertical:!0,momentum:!0},hash:null,media:{},slideShow:{autoStart:!1,speed:3e3},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"},wheel:"auto",onInit:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeClose:n.noop,afterClose:n.noop,onActivate:n.noop,onDeactivate:n.noop,clickContent:function(t,e){return"image"===t.type&&"zoom"},clickSlide:"close",clickOutside:"close",dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1,mobile:{preventCaptionOverlap:!1,idleTime:!1,clickContent:function(t,e){return"image"===t.type&&"toggleControls"},clickSlide:function(t,e){return"image"===t.type?"toggleControls":"close"},dblclickContent:function(t,e){return"image"===t.type&&"zoom"},dblclickSlide:function(t,e){return"image"===t.type&&"zoom"}},lang:"en",i18n:{en:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",ERROR:"The requested content cannot be loaded. <br/> Please try again later.",PLAY_START:"Start slideshow",PLAY_STOP:"Pause slideshow",FULL_SCREEN:"Full screen",THUMBS:"Thumbnails",DOWNLOAD:"Download",SHARE:"Share",ZOOM:"Zoom"},de:{CLOSE:"Schlie&szlig;en",NEXT:"Weiter",PREV:"Zur&uuml;ck",ERROR:"Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",PLAY_START:"Diaschau starten",PLAY_STOP:"Diaschau beenden",FULL_SCREEN:"Vollbild",THUMBS:"Vorschaubilder",DOWNLOAD:"Herunterladen",SHARE:"Teilen",ZOOM:"Vergr&ouml;&szlig;ern"}}},s=n(t),r=n(e),c=0,l=function(t){return t&&t.hasOwnProperty&&t instanceof n},d=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),u=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),f=function(){var t,n=e.createElement("fakeelement"),o={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};for(t in o)if(void 0!==n.style[t])return o[t];return"transitionend"}(),p=function(t){return t&&t.length&&t[0].offsetHeight},h=function(t,e){var o=n.extend(!0,{},t,e);return n.each(e,function(t,e){n.isArray(e)&&(o[t]=e)}),o},g=function(t){var o,i;return!(!t||t.ownerDocument!==e)&&(n(".fancybox-container").css("pointer-events","none"),o={x:t.getBoundingClientRect().left+t.offsetWidth/2,y:t.getBoundingClientRect().top+t.offsetHeight/2},i=e.elementFromPoint(o.x,o.y)===t,n(".fancybox-container").css("pointer-events",""),i)},b=function(t,e,o){var i=this;i.opts=h({index:o},n.fancybox.defaults),n.isPlainObject(e)&&(i.opts=h(i.opts,e)),n.fancybox.isMobile&&(i.opts=h(i.opts,i.opts.mobile)),i.id=i.opts.id||++c,i.currIndex=parseInt(i.opts.index,10)||0,i.prevIndex=null,i.prevPos=null,i.currPos=0,i.firstRun=!0,i.group=[],i.slides={},i.addContent(t),i.group.length&&i.init()};n.extend(b.prototype,{init:function(){var o,i,a=this,s=a.group[a.currIndex],r=s.opts;r.closeExisting&&n.fancybox.close(!0),n("body").addClass("fancybox-active"),!n.fancybox.getInstance()&&!1!==r.hideScrollbar&&!n.fancybox.isMobile&&e.body.scrollHeight>t.innerHeight&&(n("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:'+(t.innerWidth-e.documentElement.clientWidth)+"px;}</style>"),n("body").addClass("compensate-for-scrollbar")),i="",n.each(r.buttons,function(t,e){i+=r.btnTpl[e]||""}),o=n(a.translate(a,r.baseTpl.replace("{{buttons}}",i).replace("{{arrows}}",r.btnTpl.arrowLeft+r.btnTpl.arrowRight))).attr("id","fancybox-container-"+a.id).addClass(r.baseClass).data("FancyBox",a).appendTo(r.parentEl),a.$refs={container:o},["bg","inner","infobar","toolbar","stage","caption","navigation"].forEach(function(t){a.$refs[t]=o.find(".fancybox-"+t)}),a.trigger("onInit"),a.activate(),a.jumpTo(a.currIndex)},translate:function(t,e){var n=t.opts.i18n[t.opts.lang]||t.opts.i18n.en;return e.replace(/\{\{(\w+)\}\}/g,function(t,e){return void 0===n[e]?t:n[e]})},addContent:function(t){var e,o=this,i=n.makeArray(t);n.each(i,function(t,e){var i,a,s,r,c,l={},d={};n.isPlainObject(e)?(l=e,d=e.opts||e):"object"===n.type(e)&&n(e).length?(i=n(e),d=i.data()||{},d=n.extend(!0,{},d,d.options),d.$orig=i,l.src=o.opts.src||d.src||i.attr("href"),l.type||l.src||(l.type="inline",l.src=e)):l={type:"html",src:e+""},l.opts=n.extend(!0,{},o.opts,d),n.isArray(d.buttons)&&(l.opts.buttons=d.buttons),n.fancybox.isMobile&&l.opts.mobile&&(l.opts=h(l.opts,l.opts.mobile)),a=l.type||l.opts.type,r=l.src||"",!a&&r&&((s=r.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(a="video",l.opts.video.format||(l.opts.video.format="video/"+("ogv"===s[1]?"ogg":s[1]))):r.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?a="image":r.match(/\.(pdf)((\?|#).*)?$/i)?(a="iframe",l=n.extend(!0,l,{contentType:"pdf",opts:{iframe:{preload:!1}}})):"#"===r.charAt(0)&&(a="inline")),a?l.type=a:o.trigger("objectNeedsType",l),l.contentType||(l.contentType=n.inArray(l.type,["html","inline","ajax"])>-1?"html":l.type),l.index=o.group.length,"auto"==l.opts.smallBtn&&(l.opts.smallBtn=n.inArray(l.type,["html","inline","ajax"])>-1),"auto"===l.opts.toolbar&&(l.opts.toolbar=!l.opts.smallBtn),l.$thumb=l.opts.$thumb||null,l.opts.$trigger&&l.index===o.opts.index&&(l.$thumb=l.opts.$trigger.find("img:first"),l.$thumb.length&&(l.opts.$orig=l.opts.$trigger)),l.$thumb&&l.$thumb.length||!l.opts.$orig||(l.$thumb=l.opts.$orig.find("img:first")),l.$thumb&&!l.$thumb.length&&(l.$thumb=null),l.thumb=l.opts.thumb||(l.$thumb?l.$thumb[0].src:null),"function"===n.type(l.opts.caption)&&(l.opts.caption=l.opts.caption.apply(e,[o,l])),"function"===n.type(o.opts.caption)&&(l.opts.caption=o.opts.caption.apply(e,[o,l])),l.opts.caption instanceof n||(l.opts.caption=void 0===l.opts.caption?"":l.opts.caption+""),"ajax"===l.type&&(c=r.split(/\s+/,2),c.length>1&&(l.src=c.shift(),l.opts.filter=c.shift())),l.opts.modal&&(l.opts=n.extend(!0,l.opts,{trapFocus:!0,infobar:0,toolbar:0,smallBtn:0,keyboard:0,slideShow:0,fullScreen:0,thumbs:0,touch:0,clickContent:!1,clickSlide:!1,clickOutside:!1,dblclickContent:!1,dblclickSlide:!1,dblclickOutside:!1})),o.group.push(l)}),Object.keys(o.slides).length&&(o.updateControls(),(e=o.Thumbs)&&e.isActive&&(e.create(),e.focus()))},addEvents:function(){var e=this;e.removeEvents(),e.$refs.container.on("click.fb-close","[data-fancybox-close]",function(t){t.stopPropagation(),t.preventDefault(),e.close(t)}).on("touchstart.fb-prev click.fb-prev","[data-fancybox-prev]",function(t){t.stopPropagation(),t.preventDefault(),e.previous()}).on("touchstart.fb-next click.fb-next","[data-fancybox-next]",function(t){t.stopPropagation(),t.preventDefault(),e.next()}).on("click.fb","[data-fancybox-zoom]",function(t){e[e.isScaledDown()?"scaleToActual":"scaleToFit"]()}),s.on("orientationchange.fb resize.fb",function(t){t&&t.originalEvent&&"resize"===t.originalEvent.type?(e.requestId&&u(e.requestId),e.requestId=d(function(){e.update(t)})):(e.current&&"iframe"===e.current.type&&e.$refs.stage.hide(),setTimeout(function(){e.$refs.stage.show(),e.update(t)},n.fancybox.isMobile?600:250))}),r.on("keydown.fb",function(t){var o=n.fancybox?n.fancybox.getInstance():null,i=o.current,a=t.keyCode||t.which;if(9==a)return void(i.opts.trapFocus&&e.focus(t));if(!(!i.opts.keyboard||t.ctrlKey||t.altKey||t.shiftKey||n(t.target).is("input,textarea,video,audio,select")))return 8===a||27===a?(t.preventDefault(),void e.close(t)):37===a||38===a?(t.preventDefault(),void e.previous()):39===a||40===a?(t.preventDefault(),void e.next()):void e.trigger("afterKeydown",t,a)}),e.group[e.currIndex].opts.idleTime&&(e.idleSecondsCounter=0,r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle",function(t){e.idleSecondsCounter=0,e.isIdle&&e.showControls(),e.isIdle=!1}),e.idleInterval=t.setInterval(function(){++e.idleSecondsCounter>=e.group[e.currIndex].opts.idleTime&&!e.isDragging&&(e.isIdle=!0,e.idleSecondsCounter=0,e.hideControls())},1e3))},removeEvents:function(){var e=this;s.off("orientationchange.fb resize.fb"),r.off("keydown.fb .fb-idle"),this.$refs.container.off(".fb-close .fb-prev .fb-next"),e.idleInterval&&(t.clearInterval(e.idleInterval),e.idleInterval=null)},previous:function(t){return this.jumpTo(this.currPos-1,t)},next:function(t){return this.jumpTo(this.currPos+1,t)},jumpTo:function(t,e){var o,i,a,s,r,c,l,d,u,f=this,h=f.group.length;if(!(f.isDragging||f.isClosing||f.isAnimating&&f.firstRun)){if(t=parseInt(t,10),!(a=f.current?f.current.opts.loop:f.opts.loop)&&(t<0||t>=h))return!1;if(o=f.firstRun=!Object.keys(f.slides).length,r=f.current,f.prevIndex=f.currIndex,f.prevPos=f.currPos,s=f.createSlide(t),h>1&&((a||s.index<h-1)&&f.createSlide(t+1),(a||s.index>0)&&f.createSlide(t-1)),f.current=s,f.currIndex=s.index,f.currPos=s.pos,f.trigger("beforeShow",o),f.updateControls(),s.forcedDuration=void 0,n.isNumeric(e)?s.forcedDuration=e:e=s.opts[o?"animationDuration":"transitionDuration"],e=parseInt(e,10),i=f.isMoved(s),s.$slide.addClass("fancybox-slide--current"),o)return s.opts.animationEffect&&e&&f.$refs.container.css("transition-duration",e+"ms"),f.$refs.container.addClass("fancybox-is-open").trigger("focus"),f.loadSlide(s),void f.preload("image");c=n.fancybox.getTranslate(r.$slide),l=n.fancybox.getTranslate(f.$refs.stage),n.each(f.slides,function(t,e){n.fancybox.stop(e.$slide,!0)}),r.pos!==s.pos&&(r.isComplete=!1),r.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"),i?(u=c.left-(r.pos*c.width+r.pos*r.opts.gutter),n.each(f.slides,function(t,o){o.$slide.removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")});var i=o.pos*c.width+o.pos*o.opts.gutter;n.fancybox.setTranslate(o.$slide,{top:0,left:i-l.left+u}),o.pos!==s.pos&&o.$slide.addClass("fancybox-slide--"+(o.pos>s.pos?"next":"previous")),p(o.$slide),n.fancybox.animate(o.$slide,{top:0,left:(o.pos-s.pos)*c.width+(o.pos-s.pos)*o.opts.gutter},e,function(){o.$slide.css({transform:"",opacity:""}).removeClass("fancybox-slide--next fancybox-slide--previous"),o.pos===f.currPos&&f.complete()})})):e&&s.opts.transitionEffect&&(d="fancybox-animated fancybox-fx-"+s.opts.transitionEffect,r.$slide.addClass("fancybox-slide--"+(r.pos>s.pos?"next":"previous")),n.fancybox.animate(r.$slide,d,e,function(){r.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")},!1)),s.isLoaded?f.revealContent(s):f.loadSlide(s),f.preload("image")}},createSlide:function(t){var e,o,i=this;return o=t%i.group.length,o=o<0?i.group.length+o:o,!i.slides[t]&&i.group[o]&&(e=n('<div class="fancybox-slide"></div>').appendTo(i.$refs.stage),i.slides[t]=n.extend(!0,{},i.group[o],{pos:t,$slide:e,isLoaded:!1}),i.updateSlide(i.slides[t])),i.slides[t]},scaleToActual:function(t,e,o){var i,a,s,r,c,l=this,d=l.current,u=d.$content,f=n.fancybox.getTranslate(d.$slide).width,p=n.fancybox.getTranslate(d.$slide).height,h=d.width,g=d.height;l.isAnimating||l.isMoved()||!u||"image"!=d.type||!d.isLoaded||d.hasError||(l.isAnimating=!0,n.fancybox.stop(u),t=void 0===t?.5*f:t,e=void 0===e?.5*p:e,i=n.fancybox.getTranslate(u),i.top-=n.fancybox.getTranslate(d.$slide).top,i.left-=n.fancybox.getTranslate(d.$slide).left,r=h/i.width,c=g/i.height,a=.5*f-.5*h,s=.5*p-.5*g,h>f&&(a=i.left*r-(t*r-t),a>0&&(a=0),a<f-h&&(a=f-h)),g>p&&(s=i.top*c-(e*c-e),s>0&&(s=0),s<p-g&&(s=p-g)),l.updateCursor(h,g),n.fancybox.animate(u,{top:s,left:a,scaleX:r,scaleY:c},o||366,function(){l.isAnimating=!1}),l.SlideShow&&l.SlideShow.isActive&&l.SlideShow.stop())},scaleToFit:function(t){var e,o=this,i=o.current,a=i.$content;o.isAnimating||o.isMoved()||!a||"image"!=i.type||!i.isLoaded||i.hasError||(o.isAnimating=!0,n.fancybox.stop(a),e=o.getFitPos(i),o.updateCursor(e.width,e.height),n.fancybox.animate(a,{top:e.top,left:e.left,scaleX:e.width/a.width(),scaleY:e.height/a.height()},t||366,function(){o.isAnimating=!1}))},getFitPos:function(t){var e,o,i,a,s=this,r=t.$content,c=t.$slide,l=t.width||t.opts.width,d=t.height||t.opts.height,u={};return!!(t.isLoaded&&r&&r.length)&&(e=n.fancybox.getTranslate(s.$refs.stage).width,o=n.fancybox.getTranslate(s.$refs.stage).height,e-=parseFloat(c.css("paddingLeft"))+parseFloat(c.css("paddingRight"))+parseFloat(r.css("marginLeft"))+parseFloat(r.css("marginRight")),o-=parseFloat(c.css("paddingTop"))+parseFloat(c.css("paddingBottom"))+parseFloat(r.css("marginTop"))+parseFloat(r.css("marginBottom")),l&&d||(l=e,d=o),i=Math.min(1,e/l,o/d),l*=i,d*=i,l>e-.5&&(l=e),d>o-.5&&(d=o),"image"===t.type?(u.top=Math.floor(.5*(o-d))+parseFloat(c.css("paddingTop")),u.left=Math.floor(.5*(e-l))+parseFloat(c.css("paddingLeft"))):"video"===t.contentType&&(a=t.opts.width&&t.opts.height?l/d:t.opts.ratio||16/9,d>l/a?d=l/a:l>d*a&&(l=d*a)),u.width=l,u.height=d,u)},update:function(t){var e=this;n.each(e.slides,function(n,o){e.updateSlide(o,t)})},updateSlide:function(t,e){var o=this,i=t&&t.$content,a=t.width||t.opts.width,s=t.height||t.opts.height,r=t.$slide;o.adjustCaption(t),i&&(a||s||"video"===t.contentType)&&!t.hasError&&(n.fancybox.stop(i),n.fancybox.setTranslate(i,o.getFitPos(t)),t.pos===o.currPos&&(o.isAnimating=!1,o.updateCursor())),o.adjustLayout(t),r.length&&(r.trigger("refresh"),t.pos===o.currPos&&o.$refs.toolbar.add(o.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar",r.get(0).scrollHeight>r.get(0).clientHeight)),o.trigger("onUpdate",t,e)},centerSlide:function(t){var e=this,o=e.current,i=o.$slide;!e.isClosing&&o&&(i.siblings().css({transform:"",opacity:""}),i.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"),n.fancybox.animate(i,{top:0,left:0,opacity:1},void 0===t?0:t,function(){i.css({transform:"",opacity:""}),o.isComplete||e.complete()},!1))},isMoved:function(t){var e,o,i=t||this.current;return!!i&&(o=n.fancybox.getTranslate(this.$refs.stage),e=n.fancybox.getTranslate(i.$slide),!i.$slide.hasClass("fancybox-animated")&&(Math.abs(e.top-o.top)>.5||Math.abs(e.left-o.left)>.5))},updateCursor:function(t,e){var o,i,a=this,s=a.current,r=a.$refs.container;s&&!a.isClosing&&a.Guestures&&(r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"),o=a.canPan(t,e),i=!!o||a.isZoomable(),r.toggleClass("fancybox-is-zoomable",i),n("[data-fancybox-zoom]").prop("disabled",!i),o?r.addClass("fancybox-can-pan"):i&&("zoom"===s.opts.clickContent||n.isFunction(s.opts.clickContent)&&"zoom"==s.opts.clickContent(s))?r.addClass("fancybox-can-zoomIn"):s.opts.touch&&(s.opts.touch.vertical||a.group.length>1)&&"video"!==s.contentType&&r.addClass("fancybox-can-swipe"))},isZoomable:function(){var t,e=this,n=e.current;if(n&&!e.isClosing&&"image"===n.type&&!n.hasError){if(!n.isLoaded)return!0;if((t=e.getFitPos(n))&&(n.width>t.width||n.height>t.height))return!0}return!1},isScaledDown:function(t,e){var o=this,i=!1,a=o.current,s=a.$content;return void 0!==t&&void 0!==e?i=t<a.width&&e<a.height:s&&(i=n.fancybox.getTranslate(s),i=i.width<a.width&&i.height<a.height),i},canPan:function(t,e){var o=this,i=o.current,a=null,s=!1;return"image"===i.type&&(i.isComplete||t&&e)&&!i.hasError&&(s=o.getFitPos(i),void 0!==t&&void 0!==e?a={width:t,height:e}:i.isComplete&&(a=n.fancybox.getTranslate(i.$content)),a&&s&&(s=Math.abs(a.width-s.width)>1.5||Math.abs(a.height-s.height)>1.5)),s},loadSlide:function(t){var e,o,i,a=this;if(!t.isLoading&&!t.isLoaded){if(t.isLoading=!0,!1===a.trigger("beforeLoad",t))return t.isLoading=!1,!1;switch(e=t.type,o=t.$slide,o.off("refresh").trigger("onReset").addClass(t.opts.slideClass),e){case"image":a.setImage(t);break;case"iframe":a.setIframe(t);break;case"html":a.setContent(t,t.src||t.content);break;case"video":a.setContent(t,t.opts.video.tpl.replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.opts.videoFormat||t.opts.video.format||"").replace("{{poster}}",t.thumb||""));break;case"inline":n(t.src).length?a.setContent(t,n(t.src)):a.setError(t);break;case"ajax":a.showLoading(t),i=n.ajax(n.extend({},t.opts.ajax.settings,{url:t.src,success:function(e,n){"success"===n&&a.setContent(t,e)},error:function(e,n){e&&"abort"!==n&&a.setError(t)}})),o.one("onReset",function(){i.abort()});break;default:a.setError(t)}return!0}},setImage:function(t){var o,i=this;setTimeout(function(){var e=t.$image;i.isClosing||!t.isLoading||e&&e.length&&e[0].complete||t.hasError||i.showLoading(t)},50),i.checkSrcset(t),t.$content=n('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")),!1!==t.opts.preload&&t.opts.width&&t.opts.height&&t.thumb&&(t.width=t.opts.width,t.height=t.opts.height,o=e.createElement("img"),o.onerror=function(){n(this).remove(),t.$ghost=null},o.onload=function(){i.afterLoad(t)},t.$ghost=n(o).addClass("fancybox-image").appendTo(t.$content).attr("src",t.thumb)),i.setBigImage(t)},checkSrcset:function(e){var n,o,i,a,s=e.opts.srcset||e.opts.image.srcset;if(s){i=t.devicePixelRatio||1,a=t.innerWidth*i,o=s.split(",").map(function(t){var e={};return t.trim().split(/\s+/).forEach(function(t,n){var o=parseInt(t.substring(0,t.length-1),10);if(0===n)return e.url=t;o&&(e.value=o,e.postfix=t[t.length-1])}),e}),o.sort(function(t,e){return t.value-e.value});for(var r=0;r<o.length;r++){var c=o[r];if("w"===c.postfix&&c.value>=a||"x"===c.postfix&&c.value>=i){n=c;break}}!n&&o.length&&(n=o[o.length-1]),n&&(e.src=n.url,e.width&&e.height&&"w"==n.postfix&&(e.height=e.width/e.height*n.value,e.width=n.value),e.opts.srcset=s)}},setBigImage:function(t){var o=this,i=e.createElement("img"),a=n(i);t.$image=a.one("error",function(){o.setError(t)}).one("load",function(){var e;t.$ghost||(o.resolveImageSlideSize(t,this.naturalWidth,this.naturalHeight),o.afterLoad(t)),o.isClosing||(t.opts.srcset&&(e=t.opts.sizes,e&&"auto"!==e||(e=(t.width/t.height>1&&s.width()/s.height()>1?"100":Math.round(t.width/t.height*100))+"vw"),a.attr("sizes",e).attr("srcset",t.opts.srcset)),t.$ghost&&setTimeout(function(){t.$ghost&&!o.isClosing&&t.$ghost.hide()},Math.min(300,Math.max(1e3,t.height/1600))),o.hideLoading(t))}).addClass("fancybox-image").attr("src",t.src).appendTo(t.$content),(i.complete||"complete"==i.readyState)&&a.naturalWidth&&a.naturalHeight?a.trigger("load"):i.error&&a.trigger("error")},resolveImageSlideSize:function(t,e,n){var o=parseInt(t.opts.width,10),i=parseInt(t.opts.height,10);t.width=e,t.height=n,o>0&&(t.width=o,t.height=Math.floor(o*n/e)),i>0&&(t.width=Math.floor(i*e/n),t.height=i)},setIframe:function(t){var e,o=this,i=t.opts.iframe,a=t.$slide;t.$content=n('<div class="fancybox-content'+(i.preload?" fancybox-is-hidden":"")+'"></div>').css(i.css).appendTo(a),a.addClass("fancybox-slide--"+t.contentType),t.$iframe=e=n(i.tpl.replace(/\{rnd\}/g,(new Date).getTime())).attr(i.attr).appendTo(t.$content),i.preload?(o.showLoading(t),e.on("load.fb error.fb",function(e){this.isReady=1,t.$slide.trigger("refresh"),o.afterLoad(t)}),a.on("refresh.fb",function(){var n,o,s=t.$content,r=i.css.width,c=i.css.height;if(1===e[0].isReady){try{n=e.contents(),o=n.find("body")}catch(t){}o&&o.length&&o.children().length&&(a.css("overflow","visible"),s.css({width:"100%","max-width":"100%",height:"9999px"}),void 0===r&&(r=Math.ceil(Math.max(o[0].clientWidth,o.outerWidth(!0)))),s.css("width",r||"").css("max-width",""),void 0===c&&(c=Math.ceil(Math.max(o[0].clientHeight,o.outerHeight(!0)))),s.css("height",c||""),a.css("overflow","auto")),s.removeClass("fancybox-is-hidden")}})):o.afterLoad(t),e.attr("src",t.src),a.one("onReset",function(){try{n(this).find("iframe").hide().unbind().attr("src","//web.archive.org/web/20241008144813/https://about:blank")}catch(t){}n(this).off("refresh.fb").empty(),t.isLoaded=!1,t.isRevealed=!1})},setContent:function(t,e){var o=this;o.isClosing||(o.hideLoading(t),t.$content&&n.fancybox.stop(t.$content),t.$slide.empty(),l(e)&&e.parent().length?((e.hasClass("fancybox-content")||e.parent().hasClass("fancybox-content"))&&e.parents(".fancybox-slide").trigger("onReset"),t.$placeholder=n("<div>").hide().insertAfter(e),e.css("display","inline-block")):t.hasError||("string"===n.type(e)&&(e=n("<div>").append(n.trim(e)).contents()),t.opts.filter&&(e=n("<div>").html(e).find(t.opts.filter))),t.$slide.one("onReset",function(){n(this).find("video,audio").trigger("pause"),t.$placeholder&&(t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(),t.$placeholder=null),t.$smallBtn&&(t.$smallBtn.remove(),t.$smallBtn=null),t.hasError||(n(this).empty(),t.isLoaded=!1,t.isRevealed=!1)}),n(e).appendTo(t.$slide),n(e).is("video,audio")&&(n(e).addClass("fancybox-video"),n(e).wrap("<div></div>"),t.contentType="video",t.opts.width=t.opts.width||n(e).attr("width"),t.opts.height=t.opts.height||n(e).attr("height")),t.$content=t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(),t.$content.siblings().hide(),t.$content.length||(t.$content=t.$slide.wrapInner("<div></div>").children().first()),t.$content.addClass("fancybox-content"),t.$slide.addClass("fancybox-slide--"+t.contentType),o.afterLoad(t))},setError:function(t){t.hasError=!0,t.$slide.trigger("onReset").removeClass("fancybox-slide--"+t.contentType).addClass("fancybox-slide--error"),t.contentType="html",this.setContent(t,this.translate(t,t.opts.errorTpl)),t.pos===this.currPos&&(this.isAnimating=!1)},showLoading:function(t){var e=this;(t=t||e.current)&&!t.$spinner&&(t.$spinner=n(e.translate(e,e.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))},hideLoading:function(t){var e=this;(t=t||e.current)&&t.$spinner&&(t.$spinner.stop().remove(),delete t.$spinner)},afterLoad:function(t){var e=this;e.isClosing||(t.isLoading=!1,t.isLoaded=!0,e.trigger("afterLoad",t),e.hideLoading(t),!t.opts.smallBtn||t.$smallBtn&&t.$smallBtn.length||(t.$smallBtn=n(e.translate(t,t.opts.btnTpl.smallBtn)).appendTo(t.$content)),t.opts.protect&&t.$content&&!t.hasError&&(t.$content.on("contextmenu.fb",function(t){return 2==t.button&&t.preventDefault(),!0}),"image"===t.type&&n('<div class="fancybox-spaceball"></div>').appendTo(t.$content)),e.adjustCaption(t),e.adjustLayout(t),t.pos===e.currPos&&e.updateCursor(),e.revealContent(t))},adjustCaption:function(t){var e,n=this,o=t||n.current,i=o.opts.caption,a=o.opts.preventCaptionOverlap,s=n.$refs.caption,r=!1;s.toggleClass("fancybox-caption--separate",a),a&&i&&i.length&&(o.pos!==n.currPos?(e=s.clone().appendTo(s.parent()),e.children().eq(0).empty().html(i),r=e.outerHeight(!0),e.empty().remove()):n.$caption&&(r=n.$caption.outerHeight(!0)),o.$slide.css("padding-bottom",r||""))},adjustLayout:function(t){var e,n,o,i,a=this,s=t||a.current;s.isLoaded&&!0!==s.opts.disableLayoutFix&&(s.$content.css("margin-bottom",""),s.$content.outerHeight()>s.$slide.height()+.5&&(o=s.$slide[0].style["padding-bottom"],i=s.$slide.css("padding-bottom"),parseFloat(i)>0&&(e=s.$slide[0].scrollHeight,s.$slide.css("padding-bottom",0),Math.abs(e-s.$slide[0].scrollHeight)<1&&(n=i),s.$slide.css("padding-bottom",o))),s.$content.css("margin-bottom",n))},revealContent:function(t){var e,o,i,a,s=this,r=t.$slide,c=!1,l=!1,d=s.isMoved(t),u=t.isRevealed;return t.isRevealed=!0,e=t.opts[s.firstRun?"animationEffect":"transitionEffect"],i=t.opts[s.firstRun?"animationDuration":"transitionDuration"],i=parseInt(void 0===t.forcedDuration?i:t.forcedDuration,10),!d&&t.pos===s.currPos&&i||(e=!1),"zoom"===e&&(t.pos===s.currPos&&i&&"image"===t.type&&!t.hasError&&(l=s.getThumbPos(t))?c=s.getFitPos(t):e="fade"),"zoom"===e?(s.isAnimating=!0,c.scaleX=c.width/l.width,c.scaleY=c.height/l.height,a=t.opts.zoomOpacity,"auto"==a&&(a=Math.abs(t.width/t.height-l.width/l.height)>.1),a&&(l.opacity=.1,c.opacity=1),n.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"),l),p(t.$content),void n.fancybox.animate(t.$content,c,i,function(){s.isAnimating=!1,s.complete()})):(s.updateSlide(t),e?(n.fancybox.stop(r),o="fancybox-slide--"+(t.pos>=s.prevPos?"next":"previous")+" fancybox-animated fancybox-fx-"+e,r.addClass(o).removeClass("fancybox-slide--current"),t.$content.removeClass("fancybox-is-hidden"),p(r),"image"!==t.type&&t.$content.hide().show(0),void n.fancybox.animate(r,"fancybox-slide--current",i,function(){r.removeClass(o).css({transform:"",opacity:""}),t.pos===s.currPos&&s.complete()},!0)):(t.$content.removeClass("fancybox-is-hidden"),u||!d||"image"!==t.type||t.hasError||t.$content.hide().fadeIn("fast"),void(t.pos===s.currPos&&s.complete())))},getThumbPos:function(t){var e,o,i,a,s,r=!1,c=t.$thumb;return!(!c||!g(c[0]))&&(e=n.fancybox.getTranslate(c),o=parseFloat(c.css("border-top-width")||0),i=parseFloat(c.css("border-right-width")||0),a=parseFloat(c.css("border-bottom-width")||0),s=parseFloat(c.css("border-left-width")||0),r={top:e.top+o,left:e.left+s,width:e.width-i-s,height:e.height-o-a,scaleX:1,scaleY:1},e.width>0&&e.height>0&&r)},complete:function(){var t,e=this,o=e.current,i={};!e.isMoved()&&o.isLoaded&&(o.isComplete||(o.isComplete=!0,o.$slide.siblings().trigger("onReset"),e.preload("inline"),p(o.$slide),o.$slide.addClass("fancybox-slide--complete"),n.each(e.slides,function(t,o){o.pos>=e.currPos-1&&o.pos<=e.currPos+1?i[o.pos]=o:o&&(n.fancybox.stop(o.$slide),o.$slide.off().remove())}),e.slides=i),e.isAnimating=!1,e.updateCursor(),e.trigger("afterShow"),o.opts.video.autoStart&&o.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended",function(){Document.exitFullscreen?Document.exitFullscreen():this.webkitExitFullscreen&&this.webkitExitFullscreen(),e.next()}),o.opts.autoFocus&&"html"===o.contentType&&(t=o.$content.find("input[autofocus]:enabled:visible:first"),t.length?t.trigger("focus"):e.focus(null,!0)),o.$slide.scrollTop(0).scrollLeft(0))},preload:function(t){var e,n,o=this;o.group.length<2||(n=o.slides[o.currPos+1],e=o.slides[o.currPos-1],e&&e.type===t&&o.loadSlide(e),n&&n.type===t&&o.loadSlide(n))},focus:function(t,o){var i,a,s=this,r=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"])'].join(",");s.isClosing||(i=!t&&s.current&&s.current.isComplete?s.current.$slide.find("*:visible"+(o?":not(.fancybox-close-small)":"")):s.$refs.container.find("*:visible"),i=i.filter(r).filter(function(){return"hidden"!==n(this).css("visibility")&&!n(this).hasClass("disabled")}),i.length?(a=i.index(e.activeElement),t&&t.shiftKey?(a<0||0==a)&&(t.preventDefault(),i.eq(i.length-1).trigger("focus")):(a<0||a==i.length-1)&&(t&&t.preventDefault(),i.eq(0).trigger("focus"))):s.$refs.container.trigger("focus"))},activate:function(){var t=this;n(".fancybox-container").each(function(){var e=n(this).data("FancyBox");e&&e.id!==t.id&&!e.isClosing&&(e.trigger("onDeactivate"),e.removeEvents(),e.isVisible=!1)}),t.isVisible=!0,(t.current||t.isIdle)&&(t.update(),t.updateControls()),t.trigger("onActivate"),t.addEvents()},close:function(t,e){var o,i,a,s,r,c,l,u=this,f=u.current,h=function(){u.cleanUp(t)};return!u.isClosing&&(u.isClosing=!0,!1===u.trigger("beforeClose",t)?(u.isClosing=!1,d(function(){u.update()}),!1):(u.removeEvents(),a=f.$content,o=f.opts.animationEffect,i=n.isNumeric(e)?e:o?f.opts.animationDuration:0,f.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"),!0!==t?n.fancybox.stop(f.$slide):o=!1,f.$slide.siblings().trigger("onReset").remove(),i&&u.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration",i+"ms"),u.hideLoading(f),u.hideControls(!0),u.updateCursor(),"zoom"!==o||a&&i&&"image"===f.type&&!u.isMoved()&&!f.hasError&&(l=u.getThumbPos(f))||(o="fade"),"zoom"===o?(n.fancybox.stop(a),s=n.fancybox.getTranslate(a),c={top:s.top,left:s.left,scaleX:s.width/l.width,scaleY:s.height/l.height,width:l.width,height:l.height},r=f.opts.zoomOpacity,
"auto"==r&&(r=Math.abs(f.width/f.height-l.width/l.height)>.1),r&&(l.opacity=0),n.fancybox.setTranslate(a,c),p(a),n.fancybox.animate(a,l,i,h),!0):(o&&i?n.fancybox.animate(f.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"),"fancybox-animated fancybox-fx-"+o,i,h):!0===t?setTimeout(h,i):h(),!0)))},cleanUp:function(e){var o,i,a,s=this,r=s.current.opts.$orig;s.current.$slide.trigger("onReset"),s.$refs.container.empty().remove(),s.trigger("afterClose",e),s.current.opts.backFocus&&(r&&r.length&&r.is(":visible")||(r=s.$trigger),r&&r.length&&(i=t.scrollX,a=t.scrollY,r.trigger("focus"),n("html, body").scrollTop(a).scrollLeft(i))),s.current=null,o=n.fancybox.getInstance(),o?o.activate():(n("body").removeClass("fancybox-active compensate-for-scrollbar"),n("#fancybox-style-noscroll").remove())},trigger:function(t,e){var o,i=Array.prototype.slice.call(arguments,1),a=this,s=e&&e.opts?e:a.current;if(s?i.unshift(s):s=a,i.unshift(a),n.isFunction(s.opts[t])&&(o=s.opts[t].apply(s,i)),!1===o)return o;"afterClose"!==t&&a.$refs?a.$refs.container.trigger(t+".fb",i):r.trigger(t+".fb",i)},updateControls:function(){var t=this,o=t.current,i=o.index,a=t.$refs.container,s=t.$refs.caption,r=o.opts.caption;o.$slide.trigger("refresh"),r&&r.length?(t.$caption=s,s.children().eq(0).html(r)):t.$caption=null,t.hasHiddenControls||t.isIdle||t.showControls(),a.find("[data-fancybox-count]").html(t.group.length),a.find("[data-fancybox-index]").html(i+1),a.find("[data-fancybox-prev]").prop("disabled",!o.opts.loop&&i<=0),a.find("[data-fancybox-next]").prop("disabled",!o.opts.loop&&i>=t.group.length-1),"image"===o.type?a.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href",o.opts.image.src||o.src).show():o.opts.toolbar&&a.find("[data-fancybox-download],[data-fancybox-zoom]").hide(),n(e.activeElement).is(":hidden,[disabled]")&&t.$refs.container.trigger("focus")},hideControls:function(t){var e=this,n=["infobar","toolbar","nav"];!t&&e.current.opts.preventCaptionOverlap||n.push("caption"),this.$refs.container.removeClass(n.map(function(t){return"fancybox-show-"+t}).join(" ")),this.hasHiddenControls=!0},showControls:function(){var t=this,e=t.current?t.current.opts:t.opts,n=t.$refs.container;t.hasHiddenControls=!1,t.idleSecondsCounter=0,n.toggleClass("fancybox-show-toolbar",!(!e.toolbar||!e.buttons)).toggleClass("fancybox-show-infobar",!!(e.infobar&&t.group.length>1)).toggleClass("fancybox-show-caption",!!t.$caption).toggleClass("fancybox-show-nav",!!(e.arrows&&t.group.length>1)).toggleClass("fancybox-is-modal",!!e.modal)},toggleControls:function(){this.hasHiddenControls?this.showControls():this.hideControls()}}),n.fancybox={version:"3.5.7",defaults:a,getInstance:function(t){var e=n('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),o=Array.prototype.slice.call(arguments,1);return e instanceof b&&("string"===n.type(t)?e[t].apply(e,o):"function"===n.type(t)&&t.apply(e,o),e)},open:function(t,e,n){return new b(t,e,n)},close:function(t){var e=this.getInstance();e&&(e.close(),!0===t&&this.close(t))},destroy:function(){this.close(!0),r.add("body").off("click.fb-start","**")},isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),use3d:function(){var n=e.createElement("div");return t.getComputedStyle&&t.getComputedStyle(n)&&t.getComputedStyle(n).getPropertyValue("transform")&&!(e.documentMode&&e.documentMode<11)}(),getTranslate:function(t){var e;return!(!t||!t.length)&&(e=t[0].getBoundingClientRect(),{top:e.top||0,left:e.left||0,width:e.width,height:e.height,opacity:parseFloat(t.css("opacity"))})},setTranslate:function(t,e){var n="",o={};if(t&&e)return void 0===e.left&&void 0===e.top||(n=(void 0===e.left?t.position().left:e.left)+"px, "+(void 0===e.top?t.position().top:e.top)+"px",n=this.use3d?"translate3d("+n+", 0px)":"translate("+n+")"),void 0!==e.scaleX&&void 0!==e.scaleY?n+=" scale("+e.scaleX+", "+e.scaleY+")":void 0!==e.scaleX&&(n+=" scaleX("+e.scaleX+")"),n.length&&(o.transform=n),void 0!==e.opacity&&(o.opacity=e.opacity),void 0!==e.width&&(o.width=e.width),void 0!==e.height&&(o.height=e.height),t.css(o)},animate:function(t,e,o,i,a){var s,r=this;n.isFunction(o)&&(i=o,o=null),r.stop(t),s=r.getTranslate(t),t.on(f,function(c){(!c||!c.originalEvent||t.is(c.originalEvent.target)&&"z-index"!=c.originalEvent.propertyName)&&(r.stop(t),n.isNumeric(o)&&t.css("transition-duration",""),n.isPlainObject(e)?void 0!==e.scaleX&&void 0!==e.scaleY&&r.setTranslate(t,{top:e.top,left:e.left,width:s.width*e.scaleX,height:s.height*e.scaleY,scaleX:1,scaleY:1}):!0!==a&&t.removeClass(e),n.isFunction(i)&&i(c))}),n.isNumeric(o)&&t.css("transition-duration",o+"ms"),n.isPlainObject(e)?(void 0!==e.scaleX&&void 0!==e.scaleY&&(delete e.width,delete e.height,t.parent().hasClass("fancybox-slide--image")&&t.parent().addClass("fancybox-is-scaling")),n.fancybox.setTranslate(t,e)):t.addClass(e),t.data("timer",setTimeout(function(){t.trigger(f)},o+33))},stop:function(t,e){t&&t.length&&(clearTimeout(t.data("timer")),e&&t.trigger(f),t.off(f).css("transition-duration",""),t.parent().removeClass("fancybox-is-scaling"))}},n.fn.fancybox=function(t){var e;return t=t||{},e=t.selector||!1,e?n("body").off("click.fb-start",e).on("click.fb-start",e,{options:t},i):this.off("click.fb-start").on("click.fb-start",{items:this,options:t},i),this},r.on("click.fb-start","[data-fancybox]",i),r.on("click.fb-start","[data-fancybox-trigger]",function(t){n('[data-fancybox="'+n(this).attr("data-fancybox-trigger")+'"]').eq(n(this).attr("data-fancybox-index")||0).trigger("click.fb-start",{$trigger:n(this)})}),function(){var t=null;r.on("mousedown mouseup focus blur",".fancybox-button",function(e){switch(e.type){case"mousedown":t=n(this);break;case"mouseup":t=null;break;case"focusin":n(".fancybox-button").removeClass("fancybox-focus"),n(this).is(t)||n(this).is("[disabled]")||n(this).addClass("fancybox-focus");break;case"focusout":n(".fancybox-button").removeClass("fancybox-focus")}})}()}}(window,document,jQuery),function(t){"use strict";var e={youtube:{matcher:/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,params:{autoplay:1,autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},paramPlace:8,type:"iframe",url:"https://web.archive.org/web/20241008144813/https://www.youtube-nocookie.com/embed/$4",thumb:"https://web.archive.org/web/20241008144813/https://img.youtube.com/vi/$4/hqdefault.jpg"},vimeo:{matcher:/^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,params:{autoplay:1,hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},paramPlace:3,type:"iframe",url:"//web.archive.org/web/20241008144813/https://player.vimeo.com/video/$2"},instagram:{matcher:/(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,type:"image",url:"//$1/p/$2/media/?size=l"},gmap_place:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/?ll="+(t[9]?t[9]+"&z="+Math.floor(t[10])+(t[12]?t[12].replace(/^\//,"&"):""):t[12]+"").replace(/\?/,"&")+"&output="+(t[12]&&t[12].indexOf("layer=c")>0?"svembed":"embed")}},gmap_search:{matcher:/(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,type:"iframe",url:function(t){return"//maps.google."+t[2]+"/maps?q="+t[5].replace("query=","q=").replace("api=1","")+"&output=embed"}}},n=function(e,n,o){if(e)return o=o||"","object"===t.type(o)&&(o=t.param(o,!0)),t.each(n,function(t,n){e=e.replace("$"+t,n||"")}),o.length&&(e+=(e.indexOf("?")>0?"&":"?")+o),e};t(document).on("objectNeedsType.fb",function(o,i,a){var s,r,c,l,d,u,f,p=a.src||"",h=!1;s=t.extend(!0,{},e,a.opts.media),t.each(s,function(e,o){if(c=p.match(o.matcher)){if(h=o.type,f=e,u={},o.paramPlace&&c[o.paramPlace]){d=c[o.paramPlace],"?"==d[0]&&(d=d.substring(1)),d=d.split("&");for(var i=0;i<d.length;++i){var s=d[i].split("=",2);2==s.length&&(u[s[0]]=decodeURIComponent(s[1].replace(/\+/g," ")))}}return l=t.extend(!0,{},o.params,a.opts[e],u),p="function"===t.type(o.url)?o.url.call(this,c,l,a):n(o.url,c,l),r="function"===t.type(o.thumb)?o.thumb.call(this,c,l,a):n(o.thumb,c),"youtube"===e?p=p.replace(/&t=((\d+)m)?(\d+)s/,function(t,e,n,o){return"&start="+((n?60*parseInt(n,10):0)+parseInt(o,10))}):"vimeo"===e&&(p=p.replace("&%23","#")),!1}}),h?(a.opts.thumb||a.opts.$thumb&&a.opts.$thumb.length||(a.opts.thumb=r),"iframe"===h&&(a.opts=t.extend(!0,a.opts,{iframe:{preload:!1,attr:{scrolling:"no"}}})),t.extend(a,{type:h,src:p,origSrc:a.src,contentSource:f,contentType:"image"===h?"image":"gmap_place"==f||"gmap_search"==f?"map":"video"})):p&&(a.type=a.opts.defaultType)});var o={youtube:{src:"https://web.archive.org/web/20241008144813/https://www.youtube.com/iframe_api",class:"YT",loading:!1,loaded:!1},vimeo:{src:"https://web.archive.org/web/20241008144813/https://player.vimeo.com/api/player.js",class:"Vimeo",loading:!1,loaded:!1},load:function(t){var e,n=this;if(this[t].loaded)return void setTimeout(function(){n.done(t)});this[t].loading||(this[t].loading=!0,e=document.createElement("script"),e.type="text/javascript",e.src=this[t].src,"youtube"===t?window.onYouTubeIframeAPIReady=function(){n[t].loaded=!0,n.done(t)}:e.onload=function(){n[t].loaded=!0,n.done(t)},document.body.appendChild(e))},done:function(e){var n,o,i;"youtube"===e&&delete window.onYouTubeIframeAPIReady,(n=t.fancybox.getInstance())&&(o=n.current.$content.find("iframe"),"youtube"===e&&void 0!==YT&&YT?i=new YT.Player(o.attr("id"),{events:{onStateChange:function(t){0==t.data&&n.next()}}}):"vimeo"===e&&void 0!==Vimeo&&Vimeo&&(i=new Vimeo.Player(o),i.on("ended",function(){n.next()})))}};t(document).on({"afterShow.fb":function(t,e,n){e.group.length>1&&("youtube"===n.contentSource||"vimeo"===n.contentSource)&&o.load(n.contentSource)}})}(jQuery),function(t,e,n){"use strict";var o=function(){return t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||function(e){return t.setTimeout(e,1e3/60)}}(),i=function(){return t.cancelAnimationFrame||t.webkitCancelAnimationFrame||t.mozCancelAnimationFrame||t.oCancelAnimationFrame||function(e){t.clearTimeout(e)}}(),a=function(e){var n=[];e=e.originalEvent||e||t.e,e=e.touches&&e.touches.length?e.touches:e.changedTouches&&e.changedTouches.length?e.changedTouches:[e];for(var o in e)e[o].pageX?n.push({x:e[o].pageX,y:e[o].pageY}):e[o].clientX&&n.push({x:e[o].clientX,y:e[o].clientY});return n},s=function(t,e,n){return e&&t?"x"===n?t.x-e.x:"y"===n?t.y-e.y:Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)):0},r=function(t){if(t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe')||n.isFunction(t.get(0).onclick)||t.data("selectable"))return!0;for(var e=0,o=t[0].attributes,i=o.length;e<i;e++)if("data-fancybox-"===o[e].nodeName.substr(0,14))return!0;return!1},c=function(e){var n=t.getComputedStyle(e)["overflow-y"],o=t.getComputedStyle(e)["overflow-x"],i=("scroll"===n||"auto"===n)&&e.scrollHeight>e.clientHeight,a=("scroll"===o||"auto"===o)&&e.scrollWidth>e.clientWidth;return i||a},l=function(t){for(var e=!1;;){if(e=c(t.get(0)))break;if(t=t.parent(),!t.length||t.hasClass("fancybox-stage")||t.is("body"))break}return e},d=function(t){var e=this;e.instance=t,e.$bg=t.$refs.bg,e.$stage=t.$refs.stage,e.$container=t.$refs.container,e.destroy(),e.$container.on("touchstart.fb.touch mousedown.fb.touch",n.proxy(e,"ontouchstart"))};d.prototype.destroy=function(){var t=this;t.$container.off(".fb.touch"),n(e).off(".fb.touch"),t.requestId&&(i(t.requestId),t.requestId=null),t.tapped&&(clearTimeout(t.tapped),t.tapped=null)},d.prototype.ontouchstart=function(o){var i=this,c=n(o.target),d=i.instance,u=d.current,f=u.$slide,p=u.$content,h="touchstart"==o.type;if(h&&i.$container.off("mousedown.fb.touch"),(!o.originalEvent||2!=o.originalEvent.button)&&f.length&&c.length&&!r(c)&&!r(c.parent())&&(c.is("img")||!(o.originalEvent.clientX>c[0].clientWidth+c.offset().left))){if(!u||d.isAnimating||u.$slide.hasClass("fancybox-animated"))return o.stopPropagation(),void o.preventDefault();i.realPoints=i.startPoints=a(o),i.startPoints.length&&(u.touch&&o.stopPropagation(),i.startEvent=o,i.canTap=!0,i.$target=c,i.$content=p,i.opts=u.opts.touch,i.isPanning=!1,i.isSwiping=!1,i.isZooming=!1,i.isScrolling=!1,i.canPan=d.canPan(),i.startTime=(new Date).getTime(),i.distanceX=i.distanceY=i.distance=0,i.canvasWidth=Math.round(f[0].clientWidth),i.canvasHeight=Math.round(f[0].clientHeight),i.contentLastPos=null,i.contentStartPos=n.fancybox.getTranslate(i.$content)||{top:0,left:0},i.sliderStartPos=n.fancybox.getTranslate(f),i.stagePos=n.fancybox.getTranslate(d.$refs.stage),i.sliderStartPos.top-=i.stagePos.top,i.sliderStartPos.left-=i.stagePos.left,i.contentStartPos.top-=i.stagePos.top,i.contentStartPos.left-=i.stagePos.left,n(e).off(".fb.touch").on(h?"touchend.fb.touch touchcancel.fb.touch":"mouseup.fb.touch mouseleave.fb.touch",n.proxy(i,"ontouchend")).on(h?"touchmove.fb.touch":"mousemove.fb.touch",n.proxy(i,"ontouchmove")),n.fancybox.isMobile&&e.addEventListener("scroll",i.onscroll,!0),((i.opts||i.canPan)&&(c.is(i.$stage)||i.$stage.find(c).length)||(c.is(".fancybox-image")&&o.preventDefault(),n.fancybox.isMobile&&c.parents(".fancybox-caption").length))&&(i.isScrollable=l(c)||l(c.parent()),n.fancybox.isMobile&&i.isScrollable||o.preventDefault(),(1===i.startPoints.length||u.hasError)&&(i.canPan?(n.fancybox.stop(i.$content),i.isPanning=!0):i.isSwiping=!0,i.$container.addClass("fancybox-is-grabbing")),2===i.startPoints.length&&"image"===u.type&&(u.isLoaded||u.$ghost)&&(i.canTap=!1,i.isSwiping=!1,i.isPanning=!1,i.isZooming=!0,n.fancybox.stop(i.$content),i.centerPointStartX=.5*(i.startPoints[0].x+i.startPoints[1].x)-n(t).scrollLeft(),i.centerPointStartY=.5*(i.startPoints[0].y+i.startPoints[1].y)-n(t).scrollTop(),i.percentageOfImageAtPinchPointX=(i.centerPointStartX-i.contentStartPos.left)/i.contentStartPos.width,i.percentageOfImageAtPinchPointY=(i.centerPointStartY-i.contentStartPos.top)/i.contentStartPos.height,i.startDistanceBetweenFingers=s(i.startPoints[0],i.startPoints[1]))))}},d.prototype.onscroll=function(t){var n=this;n.isScrolling=!0,e.removeEventListener("scroll",n.onscroll,!0)},d.prototype.ontouchmove=function(t){var e=this;return void 0!==t.originalEvent.buttons&&0===t.originalEvent.buttons?void e.ontouchend(t):e.isScrolling?void(e.canTap=!1):(e.newPoints=a(t),void((e.opts||e.canPan)&&e.newPoints.length&&e.newPoints.length&&(e.isSwiping&&!0===e.isSwiping||t.preventDefault(),e.distanceX=s(e.newPoints[0],e.startPoints[0],"x"),e.distanceY=s(e.newPoints[0],e.startPoints[0],"y"),e.distance=s(e.newPoints[0],e.startPoints[0]),e.distance>0&&(e.isSwiping?e.onSwipe(t):e.isPanning?e.onPan():e.isZooming&&e.onZoom()))))},d.prototype.onSwipe=function(e){var a,s=this,r=s.instance,c=s.isSwiping,l=s.sliderStartPos.left||0;if(!0!==c)"x"==c&&(s.distanceX>0&&(s.instance.group.length<2||0===s.instance.current.index&&!s.instance.current.opts.loop)?l+=Math.pow(s.distanceX,.8):s.distanceX<0&&(s.instance.group.length<2||s.instance.current.index===s.instance.group.length-1&&!s.instance.current.opts.loop)?l-=Math.pow(-s.distanceX,.8):l+=s.distanceX),s.sliderLastPos={top:"x"==c?0:s.sliderStartPos.top+s.distanceY,left:l},s.requestId&&(i(s.requestId),s.requestId=null),s.requestId=o(function(){s.sliderLastPos&&(n.each(s.instance.slides,function(t,e){var o=e.pos-s.instance.currPos;n.fancybox.setTranslate(e.$slide,{top:s.sliderLastPos.top,left:s.sliderLastPos.left+o*s.canvasWidth+o*e.opts.gutter})}),s.$container.addClass("fancybox-is-sliding"))});else if(Math.abs(s.distance)>10){if(s.canTap=!1,r.group.length<2&&s.opts.vertical?s.isSwiping="y":r.isDragging||!1===s.opts.vertical||"auto"===s.opts.vertical&&n(t).width()>800?s.isSwiping="x":(a=Math.abs(180*Math.atan2(s.distanceY,s.distanceX)/Math.PI),s.isSwiping=a>45&&a<135?"y":"x"),"y"===s.isSwiping&&n.fancybox.isMobile&&s.isScrollable)return void(s.isScrolling=!0);r.isDragging=s.isSwiping,s.startPoints=s.newPoints,n.each(r.slides,function(t,e){var o,i;n.fancybox.stop(e.$slide),o=n.fancybox.getTranslate(e.$slide),i=n.fancybox.getTranslate(r.$refs.stage),e.$slide.css({transform:"",opacity:"","transition-duration":""}).removeClass("fancybox-animated").removeClass(function(t,e){return(e.match(/(^|\s)fancybox-fx-\S+/g)||[]).join(" ")}),e.pos===r.current.pos&&(s.sliderStartPos.top=o.top-i.top,s.sliderStartPos.left=o.left-i.left),n.fancybox.setTranslate(e.$slide,{top:o.top-i.top,left:o.left-i.left})}),r.SlideShow&&r.SlideShow.isActive&&r.SlideShow.stop()}},d.prototype.onPan=function(){var t=this;if(s(t.newPoints[0],t.realPoints[0])<(n.fancybox.isMobile?10:5))return void(t.startPoints=t.newPoints);t.canTap=!1,t.contentLastPos=t.limitMovement(),t.requestId&&i(t.requestId),t.requestId=o(function(){n.fancybox.setTranslate(t.$content,t.contentLastPos)})},d.prototype.limitMovement=function(){var t,e,n,o,i,a,s=this,r=s.canvasWidth,c=s.canvasHeight,l=s.distanceX,d=s.distanceY,u=s.contentStartPos,f=u.left,p=u.top,h=u.width,g=u.height;return i=h>r?f+l:f,a=p+d,t=Math.max(0,.5*r-.5*h),e=Math.max(0,.5*c-.5*g),n=Math.min(r-h,.5*r-.5*h),o=Math.min(c-g,.5*c-.5*g),l>0&&i>t&&(i=t-1+Math.pow(-t+f+l,.8)||0),l<0&&i<n&&(i=n+1-Math.pow(n-f-l,.8)||0),d>0&&a>e&&(a=e-1+Math.pow(-e+p+d,.8)||0),d<0&&a<o&&(a=o+1-Math.pow(o-p-d,.8)||0),{top:a,left:i}},d.prototype.limitPosition=function(t,e,n,o){var i=this,a=i.canvasWidth,s=i.canvasHeight;return n>a?(t=t>0?0:t,t=t<a-n?a-n:t):t=Math.max(0,a/2-n/2),o>s?(e=e>0?0:e,e=e<s-o?s-o:e):e=Math.max(0,s/2-o/2),{top:e,left:t}},d.prototype.onZoom=function(){var e=this,a=e.contentStartPos,r=a.width,c=a.height,l=a.left,d=a.top,u=s(e.newPoints[0],e.newPoints[1]),f=u/e.startDistanceBetweenFingers,p=Math.floor(r*f),h=Math.floor(c*f),g=(r-p)*e.percentageOfImageAtPinchPointX,b=(c-h)*e.percentageOfImageAtPinchPointY,m=(e.newPoints[0].x+e.newPoints[1].x)/2-n(t).scrollLeft(),v=(e.newPoints[0].y+e.newPoints[1].y)/2-n(t).scrollTop(),y=m-e.centerPointStartX,x=v-e.centerPointStartY,w=l+(g+y),$=d+(b+x),S={top:$,left:w,scaleX:f,scaleY:f};e.canTap=!1,e.newWidth=p,e.newHeight=h,e.contentLastPos=S,e.requestId&&i(e.requestId),e.requestId=o(function(){n.fancybox.setTranslate(e.$content,e.contentLastPos)})},d.prototype.ontouchend=function(t){var o=this,s=o.isSwiping,r=o.isPanning,c=o.isZooming,l=o.isScrolling;if(o.endPoints=a(t),o.dMs=Math.max((new Date).getTime()-o.startTime,1),o.$container.removeClass("fancybox-is-grabbing"),n(e).off(".fb.touch"),e.removeEventListener("scroll",o.onscroll,!0),o.requestId&&(i(o.requestId),o.requestId=null),o.isSwiping=!1,o.isPanning=!1,o.isZooming=!1,o.isScrolling=!1,o.instance.isDragging=!1,o.canTap)return o.onTap(t);o.speed=100,o.velocityX=o.distanceX/o.dMs*.5,o.velocityY=o.distanceY/o.dMs*.5,r?o.endPanning():c?o.endZooming():o.endSwiping(s,l)},d.prototype.endSwiping=function(t,e){var o=this,i=!1,a=o.instance.group.length,s=Math.abs(o.distanceX),r="x"==t&&a>1&&(o.dMs>130&&s>10||s>50);o.sliderLastPos=null,"y"==t&&!e&&Math.abs(o.distanceY)>50?(n.fancybox.animate(o.instance.current.$slide,{top:o.sliderStartPos.top+o.distanceY+150*o.velocityY,opacity:0},200),i=o.instance.close(!0,250)):r&&o.distanceX>0?i=o.instance.previous(300):r&&o.distanceX<0&&(i=o.instance.next(300)),!1!==i||"x"!=t&&"y"!=t||o.instance.centerSlide(200),o.$container.removeClass("fancybox-is-sliding")},d.prototype.endPanning=function(){var t,e,o,i=this;i.contentLastPos&&(!1===i.opts.momentum||i.dMs>350?(t=i.contentLastPos.left,e=i.contentLastPos.top):(t=i.contentLastPos.left+500*i.velocityX,e=i.contentLastPos.top+500*i.velocityY),o=i.limitPosition(t,e,i.contentStartPos.width,i.contentStartPos.height),o.width=i.contentStartPos.width,o.height=i.contentStartPos.height,n.fancybox.animate(i.$content,o,366))},d.prototype.endZooming=function(){var t,e,o,i,a=this,s=a.instance.current,r=a.newWidth,c=a.newHeight;a.contentLastPos&&(t=a.contentLastPos.left,e=a.contentLastPos.top,i={top:e,left:t,width:r,height:c,scaleX:1,scaleY:1},n.fancybox.setTranslate(a.$content,i),r<a.canvasWidth&&c<a.canvasHeight?a.instance.scaleToFit(150):r>s.width||c>s.height?a.instance.scaleToActual(a.centerPointStartX,a.centerPointStartY,150):(o=a.limitPosition(t,e,r,c),n.fancybox.animate(a.$content,o,150)))},d.prototype.onTap=function(e){var o,i=this,s=n(e.target),r=i.instance,c=r.current,l=e&&a(e)||i.startPoints,d=l[0]?l[0].x-n(t).scrollLeft()-i.stagePos.left:0,u=l[0]?l[0].y-n(t).scrollTop()-i.stagePos.top:0,f=function(t){var o=c.opts[t];if(n.isFunction(o)&&(o=o.apply(r,[c,e])),o)switch(o){case"close":r.close(i.startEvent);break;case"toggleControls":r.toggleControls();break;case"next":r.next();break;case"nextOrClose":r.group.length>1?r.next():r.close(i.startEvent);break;case"zoom":"image"==c.type&&(c.isLoaded||c.$ghost)&&(r.canPan()?r.scaleToFit():r.isScaledDown()?r.scaleToActual(d,u):r.group.length<2&&r.close(i.startEvent))}};if((!e.originalEvent||2!=e.originalEvent.button)&&(s.is("img")||!(d>s[0].clientWidth+s.offset().left))){if(s.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container"))o="Outside";else if(s.is(".fancybox-slide"))o="Slide";else{if(!r.current.$content||!r.current.$content.find(s).addBack().filter(s).length)return;o="Content"}if(i.tapped){if(clearTimeout(i.tapped),i.tapped=null,Math.abs(d-i.tapX)>50||Math.abs(u-i.tapY)>50)return this;f("dblclick"+o)}else i.tapX=d,i.tapY=u,c.opts["dblclick"+o]&&c.opts["dblclick"+o]!==c.opts["click"+o]?i.tapped=setTimeout(function(){i.tapped=null,r.isAnimating||f("click"+o)},500):f("click"+o);return this}},n(e).on("onActivate.fb",function(t,e){e&&!e.Guestures&&(e.Guestures=new d(e))}).on("beforeClose.fb",function(t,e){e&&e.Guestures&&e.Guestures.destroy()})}(window,document,jQuery),function(t,e){"use strict";e.extend(!0,e.fancybox.defaults,{btnTpl:{slideShow:'<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},slideShow:{autoStart:!1,speed:3e3,progress:!0}});var n=function(t){this.instance=t,this.init()};e.extend(n.prototype,{timer:null,isActive:!1,$button:null,init:function(){var t=this,n=t.instance,o=n.group[n.currIndex].opts.slideShow;t.$button=n.$refs.toolbar.find("[data-fancybox-play]").on("click",function(){t.toggle()}),n.group.length<2||!o?t.$button.hide():o.progress&&(t.$progress=e('<div class="fancybox-progress"></div>').appendTo(n.$refs.inner))},set:function(t){var n=this,o=n.instance,i=o.current;i&&(!0===t||i.opts.loop||o.currIndex<o.group.length-1)?n.isActive&&"video"!==i.contentType&&(n.$progress&&e.fancybox.animate(n.$progress.show(),{scaleX:1},i.opts.slideShow.speed),n.timer=setTimeout(function(){o.current.opts.loop||o.current.index!=o.group.length-1?o.next():o.jumpTo(0)},i.opts.slideShow.speed)):(n.stop(),o.idleSecondsCounter=0,o.showControls())},clear:function(){var t=this;clearTimeout(t.timer),t.timer=null,t.$progress&&t.$progress.removeAttr("style").hide()},start:function(){var t=this,e=t.instance.current;e&&(t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"),t.isActive=!0,e.isComplete&&t.set(!0),t.instance.trigger("onSlideShowChange",!0))},stop:function(){var t=this,e=t.instance.current;t.clear(),t.$button.attr("title",(e.opts.i18n[e.opts.lang]||e.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"),t.isActive=!1,t.instance.trigger("onSlideShowChange",!1),t.$progress&&t.$progress.removeAttr("style").hide()},toggle:function(){var t=this;t.isActive?t.stop():t.start()}}),e(t).on({"onInit.fb":function(t,e){e&&!e.SlideShow&&(e.SlideShow=new n(e))},"beforeShow.fb":function(t,e,n,o){var i=e&&e.SlideShow;o?i&&n.opts.slideShow.autoStart&&i.start():i&&i.isActive&&i.clear()},"afterShow.fb":function(t,e,n){var o=e&&e.SlideShow;o&&o.isActive&&o.set()},"afterKeydown.fb":function(n,o,i,a,s){var r=o&&o.SlideShow;!r||!i.opts.slideShow||80!==s&&32!==s||e(t.activeElement).is("button,a,input")||(a.preventDefault(),r.toggle())},"beforeClose.fb onDeactivate.fb":function(t,e){var n=e&&e.SlideShow;n&&n.stop()}}),e(t).on("visibilitychange",function(){var n=e.fancybox.getInstance(),o=n&&n.SlideShow;o&&o.isActive&&(t.hidden?o.clear():o.set())})}(document,jQuery),function(t,e){"use strict";var n=function(){for(var e=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n={},o=0;o<e.length;o++){var i=e[o];if(i&&i[1]in t){for(var a=0;a<i.length;a++)n[e[0][a]]=i[a];return n}}return!1}();if(n){var o={request:function(e){e=e||t.documentElement,e[n.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)},exit:function(){t[n.exitFullscreen]()},toggle:function(e){e=e||t.documentElement,this.isFullscreen()?this.exit():this.request(e)},isFullscreen:function(){return Boolean(t[n.fullscreenElement])},enabled:function(){return Boolean(t[n.fullscreenEnabled])}};e.extend(!0,e.fancybox.defaults,{btnTpl:{fullScreen:'<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},fullScreen:{autoStart:!1}}),e(t).on(n.fullscreenchange,function(){var t=o.isFullscreen(),n=e.fancybox.getInstance();n&&(n.current&&"image"===n.current.type&&n.isAnimating&&(n.isAnimating=!1,n.update(!0,!0,0),n.isComplete||n.complete()),n.trigger("onFullscreenChange",t),n.$refs.container.toggleClass("fancybox-is-fullscreen",t),n.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter",!t).toggleClass("fancybox-button--fsexit",t))})}e(t).on({"onInit.fb":function(t,e){var i;if(!n)return void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();e&&e.group[e.currIndex].opts.fullScreen?(i=e.$refs.container,i.on("click.fb-fullscreen","[data-fancybox-fullscreen]",function(t){t.stopPropagation(),t.preventDefault(),o.toggle()}),e.opts.fullScreen&&!0===e.opts.fullScreen.autoStart&&o.request(),e.FullScreen=o):e&&e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()},"afterKeydown.fb":function(t,e,n,o,i){e&&e.FullScreen&&70===i&&(o.preventDefault(),e.FullScreen.toggle())},"beforeClose.fb":function(t,e){e&&e.FullScreen&&e.$refs.container.hasClass("fancybox-is-fullscreen")&&o.exit()}})}(document,jQuery),function(t,e){"use strict";var n="fancybox-thumbs";e.fancybox.defaults=e.extend(!0,{btnTpl:{thumbs:'<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},thumbs:{autoStart:!1,hideOnClose:!0,parentEl:".fancybox-container",axis:"y"}},e.fancybox.defaults);var o=function(t){this.init(t)};e.extend(o.prototype,{$button:null,$grid:null,$list:null,isVisible:!1,isActive:!1,init:function(t){var e=this,n=t.group,o=0;e.instance=t,e.opts=n[t.currIndex].opts.thumbs,t.Thumbs=e,e.$button=t.$refs.toolbar.find("[data-fancybox-thumbs]");for(var i=0,a=n.length;i<a&&(n[i].thumb&&o++,!(o>1));i++);o>1&&e.opts?(e.$button.removeAttr("style").on("click",function(){e.toggle()}),e.isActive=!0):e.$button.hide()},create:function(){var t,o=this,i=o.instance,a=o.opts.parentEl,s=[];o.$grid||(o.$grid=e('<div class="'+n+" "+n+"-"+o.opts.axis+'"></div>').appendTo(i.$refs.container.find(a).addBack().filter(a)),o.$grid.on("click","a",function(){i.jumpTo(e(this).attr("data-index"))})),o.$list||(o.$list=e('<div class="'+n+'__list">').appendTo(o.$grid)),e.each(i.group,function(e,n){t=n.thumb,t||"image"!==n.type||(t=n.src),s.push('<a href="javascript:;" tabindex="0" data-index="'+e+'"'+(t&&t.length?' style="background-image:url('+t+')"':'class="fancybox-thumbs-missing"')+"></a>")}),o.$list[0].innerHTML=s.join(""),"x"===o.opts.axis&&o.$list.width(parseInt(o.$grid.css("padding-right"),10)+i.group.length*o.$list.children().eq(0).outerWidth(!0))},focus:function(t){var e,n,o=this,i=o.$list,a=o.$grid;o.instance.current&&(e=i.children().removeClass("fancybox-thumbs-active").filter('[data-index="'+o.instance.current.index+'"]').addClass("fancybox-thumbs-active"),n=e.position(),"y"===o.opts.axis&&(n.top<0||n.top>i.height()-e.outerHeight())?i.stop().animate({scrollTop:i.scrollTop()+n.top},t):"x"===o.opts.axis&&(n.left<a.scrollLeft()||n.left>a.scrollLeft()+(a.width()-e.outerWidth()))&&i.parent().stop().animate({scrollLeft:n.left},t))},update:function(){var t=this;t.instance.$refs.container.toggleClass("fancybox-show-thumbs",this.isVisible),t.isVisible?(t.$grid||t.create(),t.instance.trigger("onThumbsShow"),t.focus(0)):t.$grid&&t.instance.trigger("onThumbsHide"),t.instance.update()},hide:function(){this.isVisible=!1,this.update()},show:function(){this.isVisible=!0,this.update()},toggle:function(){this.isVisible=!this.isVisible,this.update()}}),e(t).on({"onInit.fb":function(t,e){var n;e&&!e.Thumbs&&(n=new o(e),n.isActive&&!0===n.opts.autoStart&&n.show())},"beforeShow.fb":function(t,e,n,o){var i=e&&e.Thumbs;i&&i.isVisible&&i.focus(o?0:250)},"afterKeydown.fb":function(t,e,n,o,i){var a=e&&e.Thumbs;a&&a.isActive&&71===i&&(o.preventDefault(),a.toggle())},"beforeClose.fb":function(t,e){var n=e&&e.Thumbs;n&&n.isVisible&&!1!==n.opts.hideOnClose&&n.$grid.hide()}})}(document,jQuery),function(t,e){"use strict";function n(t){var e={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"};return String(t).replace(/[&<>"'`=\/]/g,function(t){return e[t]})}e.extend(!0,e.fancybox.defaults,{btnTpl:{share:'<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},share:{url:function(t,e){return!t.currentHash&&"inline"!==e.type&&"html"!==e.type&&(e.origSrc||e.src)||window.location},
tpl:'<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://web.archive.org/web/20241008144813/https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://web.archive.org/web/20241008144813/https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://web.archive.org/web/20241008144813/https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'}}),e(t).on("click","[data-fancybox-share]",function(){var t,o,i=e.fancybox.getInstance(),a=i.current||null;a&&("function"===e.type(a.opts.share.url)&&(t=a.opts.share.url.apply(a,[i,a])),o=a.opts.share.tpl.replace(/\{\{media\}\}/g,"image"===a.type?encodeURIComponent(a.src):"").replace(/\{\{url\}\}/g,encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g,n(t)).replace(/\{\{descr\}\}/g,i.$caption?encodeURIComponent(i.$caption.text()):""),e.fancybox.open({src:i.translate(i,o),type:"html",opts:{touch:!1,animationEffect:!1,afterLoad:function(t,e){i.$refs.container.one("beforeClose.fb",function(){t.close(null,0)}),e.$content.find(".fancybox-share__button").click(function(){return window.open(this.href,"Share","width=550, height=450"),!1})},mobile:{autoFocus:!1}}}))})}(document,jQuery),function(t,e,n){"use strict";function o(){var e=t.location.hash.substr(1),n=e.split("-"),o=n.length>1&&/^\+?\d+$/.test(n[n.length-1])?parseInt(n.pop(-1),10)||1:1,i=n.join("-");return{hash:e,index:o<1?1:o,gallery:i}}function i(t){""!==t.gallery&&n("[data-fancybox='"+n.escapeSelector(t.gallery)+"']").eq(t.index-1).focus().trigger("click.fb-start")}function a(t){var e,n;return!!t&&(e=t.current?t.current.opts:t.opts,""!==(n=e.hash||(e.$orig?e.$orig.data("fancybox")||e.$orig.data("fancybox-trigger"):""))&&n)}n.escapeSelector||(n.escapeSelector=function(t){return(t+"").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,function(t,e){return e?"\0"===t?"�":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t})}),n(function(){!1!==n.fancybox.defaults.hash&&(n(e).on({"onInit.fb":function(t,e){var n,i;!1!==e.group[e.currIndex].opts.hash&&(n=o(),(i=a(e))&&n.gallery&&i==n.gallery&&(e.currIndex=n.index-1))},"beforeShow.fb":function(n,o,i,s){var r;i&&!1!==i.opts.hash&&(r=a(o))&&(o.currentHash=r+(o.group.length>1?"-"+(i.index+1):""),t.location.hash!=="#"+o.currentHash&&(s&&!o.origHash&&(o.origHash=t.location.hash),o.hashTimer&&clearTimeout(o.hashTimer),o.hashTimer=setTimeout(function(){"replaceState"in t.history?(t.history[s?"pushState":"replaceState"]({},e.title,t.location.pathname+t.location.search+"#"+o.currentHash),s&&(o.hasCreatedHistory=!0)):t.location.hash=o.currentHash,o.hashTimer=null},300)))},"beforeClose.fb":function(n,o,i){i&&!1!==i.opts.hash&&(clearTimeout(o.hashTimer),/*o.currentHash&&o.hasCreatedHistory?t.history.back():*//*thebazel*/o.currentHash&&("replaceState"in t.history?t.history.replaceState({},e.title,t.location.pathname+t.location.search+(o.origHash||"")):t.location.hash=o.origHash),o.currentHash=null)}}),n(t).on("hashchange.fb",function(){var t=o(),e=null;n.each(n(".fancybox-container").get().reverse(),function(t,o){var i=n(o).data("FancyBox");if(i&&i.currentHash)return e=i,!1}),e?e.currentHash===t.gallery+"-"+t.index||1===t.index&&e.currentHash==t.gallery||(e.currentHash=null,e.close()):""!==t.gallery&&i(t)}),setTimeout(function(){n.fancybox.getInstance()||i(o())},50))})}(window,document,jQuery),function(t,e){"use strict";var n=(new Date).getTime();e(t).on({"onInit.fb":function(t,e,o){e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll",function(t){var o=e.current,i=(new Date).getTime();e.group.length<2||!1===o.opts.wheel||"auto"===o.opts.wheel&&"image"!==o.type||(t.preventDefault(),t.stopPropagation(),o.$slide.hasClass("fancybox-animated")||(t=t.originalEvent||t,i-n<250||(n=i,e[(-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)<0?"next":"previous"]())))})}})}(document,jQuery);

function location_hash_update(hash, loc, push) {
    if (!push && history.replaceState) {
        history.replaceState({
            time: (new Date()).getTime(),
            hash: hash
        }, null, ((typeof loc !== "undefined" && loc) ? loc : "") + ((typeof hash !== "undefined" && hash) ? hash : ""));
    }
    else if (history.pushState) {
        history.pushState({
            time: (new Date()).getTime(),
            hash: hash
        }, null, ((typeof loc !== "undefined" && loc) ? loc : "") + ((typeof hash !== "undefined" && hash) ? hash : ""));
    }
    else {
        location.hash = hash;
    }
}

function location_hash_remove() {
    var scrollV, scrollH, loc = window.location;
    if ("pushState" in history) {
        history.pushState("", document.title, loc.pathname + loc.search);
    }
    else {
        // Prevent scrolling by storing the page's current scroll offset
        scrollV = document.body.scrollTop;
        scrollH = document.body.scrollLeft;

        loc.hash = "";

        // Restore the scroll offset, should be flicker free
        document.body.scrollTop = scrollV;
        document.body.scrollLeft = scrollH;
    }
}

function touchclick() {
    if ($(".no-touchevents").length) return "click";
    else return "touchstart";
}

var addCSSRule = function (sheet_id, rules) {
    $("#" + sheet_id).remove();
    $("<style type='text/css' id='" + sheet_id + "'>" + rules + "</style>").appendTo("head");
};

var removeCSSRule = function (sheet_id) {
    $("#" + sheet_id).remove();
};

var delay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

$.fn.hasScrollBar = function() {
    return this.get(0).scrollHeight > this.outerHeight();
}

$.fn.hasHorzScrollbar = function() {
    return this.get(0).scrollWidth > this.width();
}

function onElementHeightChange(elm, callback){
    var lastHeight = elm.scrollHeight, newHeight;
    (function run(){
        newHeight = elm.scrollHeight;
        if( lastHeight != newHeight )
            callback();
        lastHeight = newHeight;

        if( elm.onElementHeightChangeTimer )
            clearTimeout(elm.onElementHeightChangeTimer);

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
}

function localStorageTest(){
    var test = 'test';
    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch(e) {
        return false;
    }
}

function setCaretPosition(elem, caretPos) {

    if(elem != null) {
        if(elem.createTextRange) {
            var range = elem.createTextRange();
            range.move('character', caretPos);
            range.select();
        }
        else {
            if(elem.selectionStart) {
                elem.focus();
                elem.setSelectionRange(caretPos, caretPos);
            }
            else
                elem.focus();
        }
    }
}

function getCaretPosition (elem) {

    // Initialize
    var iCaretPos = 0;

    // IE Support
    if (document.selection) {

        // Set focus on the element
        elem.focus();

        // To get cursor position, get empty selection range
        var oSel = document.selection.createRange();

        // Move selection start to 0 position
        oSel.moveStart('character', -elem.value.length);

        // The caret position is selection length
        iCaretPos = oSel.text.length;
    }

    // Firefox support
    else if (elem.selectionStart || elem.selectionStart == '0')
        iCaretPos = elem.selectionStart;

    // Return results
    return iCaretPos;
}

var forceRedraw = function(element){

    if (!element) { return; }

    var n = document.createTextNode(' ');
    var disp = element.style.display;  // don't worry about previous display style

    element.appendChild(n);
    element.style.display = 'none';

    setTimeout(function(){
        element.style.display = disp;
        n.parentNode.removeChild(n);
    },20); // you can play with this timeout to make it as short as possible
}

function fix_touch_hovers()
{
    if (Modernizr.touchevents)
    {
        try
        {
            var count = 0;
            var ignore = /:hover/;
            for (var i=0; i<document.styleSheets.length; i++)
            {
                var sheet = document.styleSheets[i];
                for (var j=sheet.cssRules.length-1; j>=0; j--)
                {
                    var rule = sheet.cssRules[j];
                    if (rule.type === CSSRule.STYLE_RULE && ignore.test(rule.selectorText))
                    {
                        sheet.deleteRule(j);
                        count++;

                    }
                }
            }
        }
        catch(e){}
    }
}

function formatNoun(number, one, two, five) {
    var n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) {
        return five;
    }
    n %= 10;
    if (n === 1) {
        return one;
    }
    if (n >= 2 && n <= 4) {
        return two;
    }
    return five;
}

Number.prototype.format = function(c, d, t){
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

// Get function from string, with or without scopes (by Nicolas Gauthier)
window.getFunctionFromString = function(string)
{
    var scope = window;
    var scopeSplit = string.split('.');
    for (i = 0; i < scopeSplit.length - 1; i++)
    {
        scope = scope[scopeSplit[i]];

        if (scope == undefined) return;
    }

    return scope[scopeSplit[scopeSplit.length - 1]];
}


function getAllPathParams(url) {
    var path = url ? url.split('?')[0] : window.location.pathname;
    var path_arr = path.replace(/(^\/|\/$)/, '').split(/\b\/\b/);
    if (path_arr[0].indexOf('//') !== -1) {
        path_arr.shift();
    }
    return path_arr;
}

function getAllUrlParams(url) {

    // get query string from url (optional) or window
    var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

    // we'll store the parameters here
    var obj = {};

    // if query string exists
    if (queryString) {

        // stuff after # is not part of query string, so get rid of it
        queryString = queryString.split('#')[0];

        // split our query string into its component parts
        var arr = queryString.split('&');

        for (var i = 0; i < arr.length; i++) {
            // separate the keys and the values
            var a = arr[i].split('=');

            // set parameter name and value (use 'true' if empty)
            var paramName = a[0];
            var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

            // (optional) keep case consistent
            paramName = paramName.toLowerCase();
            if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

            // if the paramName ends with square brackets, e.g. colors[] or colors[2]
            if (paramName.match(/\[(\d+)?\]$/)) {

                // create key if it doesn't exist
                var key = paramName.replace(/\[(\d+)?\]/, '');
                if (!obj[key]) obj[key] = [];

                // if it's an indexed array e.g. colors[2]
                if (paramName.match(/\[\d+\]$/)) {
                    // get the index value and add the entry at the appropriate position
                    var index = /\[(\d+)\]/.exec(paramName)[1];
                    obj[key][index] = paramValue;
                } else {
                    // otherwise add the value to the end of the array
                    obj[key].push(paramValue);
                }
            } else {
                // we're dealing with a string
                if (!obj[paramName]) {
                    // if it doesn't exist, create property
                    obj[paramName] = paramValue;
                } else if (obj[paramName] && typeof obj[paramName] === 'string'){
                    // if property does exist and it's a string, convert it to an array
                    obj[paramName] = [obj[paramName]];
                    obj[paramName].push(paramValue);
                } else {
                    // otherwise add the property
                    obj[paramName].push(paramValue);
                }
            }
        }
    }

    return obj;
}
//
// function getUrlParam(param, url) {
//     var params = getAllUrlParams(url);
//     return params[param];
// }


if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
        value: function(predicate) {
            // 1. Let O be ? ToObject(this value).
            if (this == null) {
                throw new TypeError('"this" is null or not defined');
            }

            var o = Object(this);

            // 2. Let len be ? ToLength(? Get(O, "length")).
            var len = o.length >>> 0;

            // 3. If IsCallable(predicate) is false, throw a TypeError exception.
            if (typeof predicate !== 'function') {
                throw new TypeError('predicate must be a function');
            }

            // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
            var thisArg = arguments[1];

            // 5. Let k be 0.
            var k = 0;

            // 6. Repeat, while k < len
            while (k < len) {
                // a. Let Pk be ! ToString(k).
                // b. Let kValue be ? Get(O, Pk).
                // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
                // d. If testResult is true, return kValue.
                var kValue = o[k];
                if (predicate.call(thisArg, kValue, k, o)) {
                    return kValue;
                }
                // e. Increase k by 1.
                k++;
            }

            // 7. Return undefined.
            return undefined;
        },
        configurable: true,
        writable: true
    });
}

/*

 Click and touch events helpers

 */

function click_touch_init() {

    $(document).on("click.touchfocused", ".touchevents .touch-focused", function (e) {
        var $o = $(this);
        if (!$o.hasClass("focused")) {
            if (!$o.hasClass("disable-prevent-link-clicks")) {
                e.preventDefault();
            }
            $(".touch-focused").not($o).not($o.closest(".touch-focused")).removeClass("focused");
            $o.addClass("focused");
        }
    });

    $(document).on("click", ".touchevents .touch-focused a", function (e) {
        var $tf = $(this).closest(".touch-focused");
        if (!$tf.hasClass("focused") && !$tf.hasClass("disable-prevent-link-clicks")) {
            e.preventDefault();
        }
    });

    $(document).on("click touchstart", ".touchevents *", function (e) {
        if (!$(e.target).closest(".touch-focused").length) {
            $(".touch-focused").removeClass("focused");
        }
    });

    $(document).on("click", ".no-click", function (e) {
        e.preventDefault();
    });

    $(document).on('click', '.js-trigger-click', function (e) {
        $($(this).data('trigger-click-selector')).trigger('click');
    });

}


/*

Copy to clipboard

 */

function copy_init($o) {

    if (!$("html").hasClass("copy-inited")) {

        $("html").addClass("copy-inited");

        $(document).on('click', '.js-copy', function (e) {
            e.preventDefault();
            new Noty({
                type: 'success',
                timeout: 500,
                text: 'Скопировано',
                killer: 'copy',
                queue: 'copy',
            }).show();
        });

        $("html").addClass("copy-inited");
    }
    if (typeof $o === "undefined") $o = $(".js-copy");
    $o.not(".js-copy-inited").each(function(){
        new Clipboard(this);
        $(this).addClass("js-copy-inited");
    });
}



/*

Menu

 */

function menu_init() {

    $(document).on("click", ".js-menu-switcher", function (e) {
        if ($(e.target).is("a"))
        {
            e.preventDefault();
        }
        $(".aside").toggleClass("active");
    });

    $(document).on("click touchstart", "*", function (e) {
        if (!$(e.target).closest(".js-menu-switcher").length && !$(e.target).closest(".menu-overlay").length && !$(e.target).closest(".tooltipster-popover-in-menu").length)
        {
            $(".aside").removeClass("active");
        }
    });

    $(document).on("mouseup", ".tooltipster-popover-in-menu a", function (e) {
        $(".aside").removeClass("active");
    });
}


/*

Search

 */

function search_init() {

    $(document).on("click", ".js-search-focus", function (e) {
        if ($(e.target).is("a"))
        {
            e.preventDefault();
        }
        $(".search-filter :input").first().trigger("focus");
    });

    $(document).on("click", ".js-search-switcher", function (e) {
        if ($(e.target).is("a"))
        {
            e.preventDefault();
        }
        if ($(e.target).is(".js-search-switcher-focus"))
        {
            delay(function(){
                $(".search-filter :input").first().trigger("focus");
            }, 300);
        }
        $("body").toggleClass("search-overlay-active");
    });

    $(document).on("click touchstart", "*", function (e) {
        if (!$(e.target).closest(".js-search-switcher").length && !$(e.target).closest(".aside__inner, .select2-container, .autocomplete-suggestions").length)
        {
            $("body").removeClass("search-overlay-active");
        }
    });
}

function search_bind_init() {

    if ($(".page-search--what-found").length)
    {
        $(".search-filter :input").first().trigger("focus");
    }
}




/*

Responsive design helpers

 */

function responsive_init() {
    responsive_update();
}

function responsive_update(force, no_animation) {
    if (typeof no_animation !== 'undefined' && no_animation) {
        $("body").addClass('no-transition no-animation');
    }
    if (typeof force === "undefined") force = false;
    var ww = window.innerWidth;

    if (window.matchMedia("(max-width: 1023px)").matches) {
        $(".aside__inner").css("max-height", window.innerHeight - $('.brandbar').outerHeight());
        $(".loginbar").appendTo(".menu-overlay__scroll");
    }
    else {
        $(".aside__inner").css("max-height", '');
        $(".loginbar").appendTo(".aside__crop");
    }

    if ($("body").data("ww") != ww || force) {

        $("[data-place]").each(function(){
            var places = $(this).data("place");
            var breakpoints = Object.keys(places).map(function(value) {
                return parseInt(value);
            }).sort(function(a,b) {
                return a - b;
            }).reverse();
            for (var i in breakpoints) {
                if (window.matchMedia("(min-width: "+breakpoints[i]+"px)").matches) {
                    if ($(places[breakpoints[i]]).length)  {
                        if (!$(this).next(places[breakpoints[i]]).length) {
                            $(this).attr("data-place-breakpoint", breakpoints[i]).insertBefore(places[breakpoints[i]]);
                        }
                    }
                    break;
                }
            }
        });

        $("body").trigger("responsive-update", [force, no_animation]);
        if (no_animation) {
            $("body").trigger("responsive-update-no-animation", [force, no_animation]);
        }

        $("body").data("ww", ww);
    }
    if (typeof no_animation !== 'undefined' && no_animation) {
        $("body")[0].offsetHeight;
        $("body").removeClass('no-transition no-animation');
    }
}


/*

Set Background Image depending on img content inside it

 */

function img_to_bg($o, context) {

    if (!$("body").hasClass("img-to-bg-inited-globally")) {

        $(window).on("resize", function(){
            delay_img_to_bg(function(){
                img_to_bg($(".img-to-bg-resp"));
            }, 100);
        });

        $("body").addClass("img-to-bg-inited-globally");
    }

    if (typeof $o === "undefined" || !$o) $o = $(".img-to-bg", context);
    $o.each(function () {
        var $imgtobg = $(this);
        var $img = $imgtobg.find("> img").first();
        if (!$img.length) {
            $img = $imgtobg.find("> picture img").first();
        }
        if ($img.length) {
            var src = $img[0].currentSrc;
            if (!src) {
                src = $img.attr('src');
            }
            if (src) {
                $imgtobg.css("background-image", "url('" + src + "')");
                $imgtobg.addClass("img-to-bg--inited");
            }
        }
    });
}

var delay_img_to_bg = (function(){
    var timer = 0;
    return function(callback, ms){
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();


/*

 Lazy Loading

 */

function blazy_init() {

    window.Blazy = new Blazy({
        success: function(ele){
            var $o = $(ele).closest(".img-to-bg");
            img_to_bg($o);
            $o.addClass('img-to-bg-lazy-loaded');
        }
        , error: function(ele, msg){
            if(msg === 'missing'){
                //console.log('missing');
            }
            else if(msg === 'invalid'){
                //console.log('invalid');
            }
            var callback = $(ele).not('.blazy-callback-executed').data('src-callback');
            //console.log(callback);
            if (callback) {
                var callback_params = $(ele).data('src-callback-params');
                if (!callback_params) {
                    callback_params = [];
                }
                var fn = getFunctionFromString(callback);
                if (typeof fn === "function") {
                    $(ele).addClass('blazy-callback-executed');
                    fn.apply(null, callback_params);
                }
            }
        }
    });
}


/*

Hide/Show blocks

 */

function toggle_element_init()
{
    $(document).on("click click-pseudo change", ".toggle-element, .show-element, .hide-element", function (e) {
        if ($(this).is("a")) e.preventDefault();
        if (e.type != "change" && $(this).is(":checkbox,:radio")) {
            return true;
        }
        var $o = $();
        if ($(this).attr("href") && $(this).attr("href").length > 1) {
            $o = $($(this).attr("href"));
        }
        if (!$o.length) {
            $o = $($(this).data("selector"));
        }
        var class_name = "hidden";
        if ($(this).data("toggle-class")) {
            class_name = $(this).data("toggle-class");
        }
        var change_label = false;
        if ($(this).hasClass("toggle-element")) {
            change_label = true;
            if ($(this).is(":checkbox,:radio")) {
                if (e.type == "change") {
                    $o.toggleClass(class_name, !$(this).prop("checked"));
                }
            }
            else {
                $(this).toggleClass("active");
                $o.toggleClass(class_name);
            }
            $o.trigger("toggle-element");
        }
        if ($(this).hasClass("show-element")) {
            $o_s = $($(this).data("selector-show"));
            if ($o_s.length) {
                $o = $o_s;
            }
            if (!$(this).hasClass("active")) change_label = true;
            $(this).addClass("active");
            $o.removeClass(class_name);
            $o.trigger("show-element");
        }
        if ($(this).hasClass("hide-element")) {
            $o_h = $($(this).data("selector-hide"));
            if ($o_h.length) {
                $o = $o_h;
            }
            if ($(this).hasClass("active")) change_label = true;
            $(this).removeClass("active");
            $o.addClass(class_name);
            $o.trigger("hide-element");
        }
        if (change_label) {
            var label = $(this).html();
            $(this).html($(this).attr("data-label"));
            $(this).attr("data-label", label);
        }
    });
}



/*

SCroll Load Functionality

 */

function scroll_load_init() {

    $(window).on("load scroll", function () {
        scroll_load();
    });

    $(document).on("click", ".show-more", function (e) {
        e.preventDefault();
        scroll_load({
            wrapper: false,
            container: $(this).attr("data-load-container"),
            initiator: $(this),
            onscroll: false
        });
    });
}

function scroll_load(options) {
    var options = $.extend({}, options);
    if (!options.wrapper) $o = $(window);
    else $o = $(options.wrapper);
    if (!options.container) $c = $(".scroll-load");
    else $c = $(options.container);
    if (!options.initiator) $i = $("body");
    else $i = $(options.initiator);
    if (typeof options.onscroll === "undefined") options.onscroll = true;
    $c.not(".scroll-loading-end").each(function () {
        var $this = $(this);
        var inactive_class = $this.data("scroll-load-inactive-class")?$this.data("scroll-load-inactive-class"):"inactive";
        var offset_top = $this.offset().top;
        if ($o.not($(window)).length) offset_top = 0;
        if (!$this.hasClass("scroll-loading") && !$this.hasClass("scroll-loading-end") && offset_top >= 0 && (offset_top + $this.outerHeight() - $o.height() < $o.scrollTop() + $o.height() / 5) || !options.onscroll) {
            var page = $this.attr("data-scroll-load-page");
            if (typeof page === "undefined") page = 0;
            var url = $this.attr("data-scroll-load-url");
            if (url) {
                $.ajax({
                    url: url,
                    type: "get",
                    data: {page: page},
                    beforeSend: function () {
                        $this.addClass("scroll-loading");
                        $($this.attr("data-hide-on-last-load")).addClass("loading");
                    },
                    complete: function () {
                        $this.removeClass("scroll-loading");
                        $($this.attr("data-hide-on-last-load")).removeClass("loading");
                    },
                    success: function (response) {
                        var $response = $(response);
                        if ($this.data("scroll-load-insert-before")) {
                            $response.insertBefore($this.data("scroll-load-insert-before"));
                        }
                        else {
                            $this.append($response);
                        }
                        $this.attr("data-scroll-load-page", page * 1 + 1);
                        img_to_bg();
                        if (!(response && !$response.find(".scroll-load-last-one").length && !$response.filter(".scroll-load-last-one").length)) {
                            $this.addClass("scroll-loading-end");
                            $($this.attr("data-hide-on-last-load")).addClass(inactive_class);
                        }
                        scroll_load_after($this);
                    },
                    error: function () {
                        new Noty({
                            type: 'error',
                            timeout: 3000,
                            text: 'Ошибка при загрузке',
                            killer: 'page-ajax',
                            queue: 'page-ajax',
                        }).show();
                    }
                });
            }
            else {
                $expand_container = $this.find(".expand-it-container");
                if ($expand_container.length) {
                    removeCSSRule("rule-"+$expand_container.attr("id"));
                }
                $this.addClass("scroll-loading-end");
                $($this.attr("data-hide-on-last-load")).addClass(inactive_class);
                scroll_load_after($this);
                setTimeout(function(){
                    if ($expand_container.length) {
                        expand_it_init_prepare($expand_container);
                    }
                }, 500);
            }
        }
    });

    function scroll_load_after($this) {
        $this.find(".scroll-to-activate").not(".active").each(function (i) {
            $(this).addClass("scroll-to-activate-delay-" + i).removeClass("hidden");
            $(this)[0].offsetHeight;
        });
        $this.find(".scroll-to-activate").not(".active").addClass("active");
    }
}






/*

Expanded Blocks Functionality

 */

function expand_it_init()
{
    // expand_it_init_prepare();
    // $(document).ajaxStop(function () {
    //     expand_it_init_prepare();
    // });
    // $(window).on("resize", function () {
    //     expand_it_init_prepare(null, true);
    // });

    $(window).on("load", function () {
        expand_it_init_prepare(null, true);
    });
    $(window).on("resize", $.throttle(100, function (e) {
        expand_it_init_prepare(null, true);
    }));

    $(document).on("click expand-it", ".expand-it", function(e){
        e.preventDefault();
        var $this = $(this);
        var $o = $($(this).data("expand-selector"));
        if (!$o.length)
        {
            $o = $(this).closest(".expand-it-wrapper").find(".expand-it-container").eq(0);
        }
        if (!$o.length)
        {
            $o = $(this).closest(".expand-it-container");
        }
        if (!$o.length)
        {
            $o = $($(this).attr("href"));
        }
        if (!$o.length) return;

        var url = $(this).data('expand-url');
        if (url && !$(this).hasClass('expand-it-loaded')) {
            $.ajax({
                url: url,
                type: "get",
                beforeSend: function () {
                    $this.addClass("expand-it-loading");
                    $o.addClass("expand-it-loading");
                    loader_add($this);
                },
                complete: function () {
                    $this.removeClass("expand-it-loading");
                    $o.removeClass("expand-it-loading");
                    loader_remove($this);
                },
                success: function (response) {
                    $this.removeClass("expand-it-loading");
                    $o.removeClass("expand-it-loading");
                    loader_remove($this);
                    $o.addClass("expand-it-loaded");
                    $this.addClass("expand-it-loaded");
                    $o.find('.expand-it-inner').append(response);
                    $o.trigger('expand-it-loaded');
                    expand_it_init_prepare($o, true);
                    expand_it_trigger($this, $o, e.type === "expand-it");
                },
                error: function () {
                    new Noty({
                        type: 'error',
                        timeout: 3000,
                        text: 'Ошибка при загрузке',
                        killer: 'page-ajax',
                        queue: 'page-ajax',
                    }).show();
                }
            });
        }
        else
        {
            expand_it_trigger($(this), $o, e.type === "expand-it");
        }
    });

    $(document).on("-webkit-transitionend transitionend", ".expand-it-container", function(e){
        if ($(e.target).hasClass("expand-it-container") && !$(e.target).hasClass("expand-it-container-overflow-hidden") && $(e.target).hasClass("before-transition"))
        {
            var height_default = 0;
            if ($(this).find(".expand-it-container-height-default").length)
            {
                height_default = $(this).find(".expand-it-container-height-default").height();
            }
            if (parseInt($(this).css("max-height"), 10) > height_default)
            {
                $(this).addClass("overflow-visible");
            }
            else
            {
                $(this).removeClass("overflow-visible");
            }
        }
        if ($(e.target).hasClass("expand-it-container") && $(e.target).hasClass("expand-it-container-max-height-auto") && $(e.target).hasClass("before-transition"))
        {
            var id = $(this).attr("id");
            setTimeout(function(){
                removeCSSRule("rule-"+id);
            }, 300);
        }
        $(e.target).removeClass("before-transition");
    });

    if (location.hash)
    {
        if ($(location.hash).filter(".expand-it-wrapper").length)
        {
            var $o = $(location.hash);
            var $loc_link = $(".expand-it[href='"+location.hash+"']");
            if (!$loc_link.length)
            {
                $loc_link = $o.filter(".expand-it-wrapper").find(".expand-it");
            }
            if ($loc_link.not(".active").filter(":visible").length)
            {
                setTimeout(function(){
                    $loc_link.trigger("click");
                }, 300)
            }
        }
    }
}

function expand_it_trigger($handler, $o, soft) {

    var id = $o.attr("id");
    if (!id)
    {
        id = "id"+(new Date()).getTime() + $o.text().length;
        $o.attr("id", id);
    }
    height = $o.find(".expand-it-inner").eq(0).outerHeight(true);
    $o[0].offsetHeight;
    $o.addClass("notransition");
    $o[0].offsetHeight;
    if (!$o.hasClass("expand-it-container-overflow-hidden"))
    {
        $o.removeClass("overflow-visible");
    }
    $o[0].offsetHeight;
    $o.removeClass("notransition");
    if (!$o.hasClass("active") && !$("#rule-"+id).length) {
        addCSSRule("rule-"+id, "#"+id+".active { max-height: "+ height+"px; }");
    }
    $o[0].offsetHeight;

    if ($handler.attr("data-expand-label")) {
        var label = $handler.html();
        $handler.html($handler.attr("data-expand-label"));
        $handler.attr("data-expand-label", label);
    }
    $handler.toggleClass("active");
    $(".expand-it.active[href='#"+$o.attr("id")+"']").not($handler).toggleClass("active");

    var $wrapper = $o.closest(".expand-it-wrapper");
    var save_scroll_pos = $wrapper.offset().top + $wrapper.outerHeight() - $(window).scrollTop();

    if (!soft)
    {
        $o.addClass("before-transition").toggleClass("active").siblings(".expand-it-container").each(function(){
            $(".expand-it.active[href='#"+$handler.attr("id")+"']").trigger("expand-it");
            $handler.addClass("before-transition").removeClass("active");
        });
        var is_active = $o.hasClass("active");
        $wrapper.toggleClass("active", is_active);
        if ($wrapper.hasClass("expand-it-wrapper-collapse-siblings"))
        {
            $wrapper.siblings(".expand-it-wrapper").each(function(){
                var $this = $(this).find(".expand-it-container");
                if ($(this).find(".expand-it").length)
                {
                    $(this).find(".expand-it.active").trigger("expand-it");
                }
                else
                {
                    $(".expand-it.active[href='#"+$this.attr("id")+"']").trigger("expand-it");
                }
                $this.addClass("before-transition").removeClass("active");
                $(this).removeClass("active");
            });
            if ($wrapper.hasClass("active")) {
                setTimeout(function(){
                    if ($wrapper.offset().top < $(window).scrollTop() + $(".header__top--fixed").outerHeight()) {
                        goto_object($wrapper);
                    }
                }, 250);
            }
        }
        if (!$wrapper.hasClass("active") && $wrapper.hasClass("expand-it-wrapper-goto-on-collapse")) {
            if ($o.data('prev-height')) {
                goto_y($wrapper.offset().top + $o.data('prev-height') - save_scroll_pos, 400);
            }
            else {
                setTimeout(function(){
                    goto_y($wrapper.offset().top + $wrapper.outerHeight() - save_scroll_pos, 400);
                }, 400);
            }
        }
        if ($handler.hasClass("expand-it-hash-change"))
        {
            if (is_active)
            {
                if ($handler.attr("href"))
                {
                    location_hash_update($handler.attr("href"));
                }
                else if ($wrapper.attr("id"))
                {
                    location_hash_update("#" + $wrapper.attr("id"));
                }
            }
            else
            {
                var $tabpane = $handler.closest(".tab-pane");
                if ($tabpane.length && $tabpane.attr("id"))
                {
                    location_hash_update("#"+$tabpane.attr("id"));
                }
                else
                {
                    location_hash_remove();
                }
            }
        }
        $o.trigger('expand-it-'+((is_active)?'open':'close'));
    }
    $o.data('prev-height', $o.height());
}

function expand_it_init_prepare($c, force) {
    if (typeof $c === "undefined" || !$c) $c = $(".expand-it-container");
    if (!force) {
        $c = $c.not(".expand-it-container-prepared");
    }
    var rules = '';
    $c.each(function(){
        var $o = $(this);
        var id = $o.attr("id");
        if (!id)
        {
            id = "id"+(new Date()).getTime() + $o.text().length;
            $o.attr("id", id);
        }
        //height = $o.find(".expand-it-inner").outerHeight(true);
        height = $o.find(".expand-it-inner")[0].clientHeight;
        rules += " #"+id+".active { max-height: "+ height+"px; } ";
        $o.addClass("expand-it-container-prepared");
    });
    if (rules) {
        addCSSRule("rule-expand-it", rules);
    }
}


/*

Scroll to needed objects

 */

function goto_init() {
    $(document).on("click", ".goto", function (e) {
        var $o = $($(this).attr("href"));
        if ($o.length) {
            e.preventDefault();
            var $this = $(this);
            if ($this.closest(".goto-list").length)
            {
                $this.closest(".goto-list").find("li").removeClass("active");
                $this.closest("li").addClass("active");
                tabs_update_pointer($this.closest(".tabs"));
            }
            if ($this.closest(".goto-hash-change").length)
            {
                location_hash_update($this.attr("href"));
            }
            goto_object($o);
        }
    });
}

function goto_object($o) {
    if ($o.length)
    {
        $("body").addClass("scroll-animated");
        var offset = $o.offset().top;
        if ($o.closest(".content").length)
        {
            offset -= $(".breadcrumb").outerHeight();
        }
        if (window.matchMedia("(max-width: 1023px)").matches)
        {
            offset -= $(".brandbar").outerHeight();
        }
        goto_y(offset, 500, $o);
    }
}

function goto_y(y, speed, $o) {
    if ($o && $o.length) {
        $o.trigger('goto-y-start');
    }
    if (document.body.offsetHeight != document.body.scrollHeight) {
        $("html, body").stop(true, true).animate({scrollTop: y}, speed, 'swing', function(){
            $("body").removeClass("scroll-animated");
            if ($o && $o.length) {
                $o.trigger('goto-y-end');
            }
        });
    }
    else {
        $("body").removeClass("scroll-animated");
        if ($o && $o.length) {
            $o.trigger('goto-y-end');
        }
    }

}

function activate_goto_link($obj)
{
    $obj.addClass("active").siblings().removeClass("active")
        .end().parent("li").addClass("active").siblings().removeClass("active");
    $obj.trigger("click-tabs-fixed-center");
}


/*

Actions on Scroll

 */

function scroll_animations_init() {
    scroll_animations();
}

function scroll_animations() {
    //body_scrolled();
}

function body_scrolled() {
    var scrolled_condition = $(window).scrollTop() > 0;
    if (scrolled_condition) {
        if (!$("body").hasClass("scrolled")) $("body").addClass("scrolled");
    }
    else {
        if ($("body").hasClass("scrolled")) $("body").removeClass("scrolled");
    }
}



function misc_init() {

    $(document).on('click', '.js-page-reload', function (e) {
        e.preventDefault();
        reloadWithTurbolinks();
    });

    $(document).on("submit submit.valid", "form[data-turboform]", function(e) {
        Turbolinks.visit(this.action+(this.action.indexOf('?') == -1 ? '?' : '&')+$(this).serialize());
        e.preventDefault();
    });

    $(document).on("change", ".js-input-submit-on-change", function (e) {
        $(this).closest('form').trigger('submit');
    });

    $(document).on("click change", ".js-input-set", function (e) {
        e.preventDefault();
        var $input = $($(this).data('input'));
        var value = $(this).data('input-value');
        if (e.type == 'change') {
            value = $(this).val();
        }
        $input.each(function(){
            if ($(this).prop('type') == 'checkbox' || $(this).prop('type') == 'radio') {
                if (typeof value === 'undefined' || $(this).attr('value') == value) {
                    $(this).prop('checked', true).attr('checked', true).trigger('change');
                    return false;
                }
            }
            else if (this.tagName == 'SELECT') {
                $(this).val(value).trigger('change');
            }
            else {
                $(this).val(value).trigger('change');
            }
        });
    });

    $(document).on('click', 'a.object__image-inner', function (e) {
        var $first = $(this).closest(".object").find(".object__gallery a").first();
        if ($first.length)
        {
            e.preventDefault();
            $first.trigger("click");
        }
    });

    $(document).on('expand-it-loaded', '.expand-it-container', function (e) {
        Blazy.revalidate();
    });

    $(document).on('mouseenter', '.sobject-wrapper .sobject', function (e) {
        var $this = $(this);
        delay(function(){
            $(".sobject-wrapper").removeClass("hover");
            $this.parent().addClass("hover");
        }, 30);
    });

    $(document).on('mouseleave', '.sobject-wrapper .sobject', function (e) {
        var $this = $(this);
        delay(function(){
            $(".sobject-wrapper").removeClass("hover");
        }, 30);
    });

    $(document).on('click', '.sobject-wrapper .sobject', function (e) {
        var $a = $(this).find("a").first();
        if ($a.length) {
            var is_hovered = $(this).closest('.sobject-wrapper').hasClass('hover');
            if (!is_hovered && Modernizr.touchevents && $(this)[0].scrollWidth > $(this)[0].offsetWidth) {
                return;
            }
            var url = $a.attr("href");
            if (!$a.attr('target')) {
                Turbolinks.visit(url);
            }
            else {
                $('<a />',{'href': url, 'target': $a.attr('target')}).get(0).click();
            }
        }
    });

    $(document).on('click', '.sobject a', function (e) {
        var $o = $(this).closest('.sobject');
        var is_hovered = $(this).closest('.sobject-wrapper').hasClass('hover');
        if (!is_hovered && Modernizr.touchevents && $o[0].scrollWidth > $o[0].offsetWidth) {
            e.preventDefault();
        }
    });

    $(document).on("click", ".js-sobject-marker", function(e){
        e.preventDefault();
        e.stopPropagation();
        if ($(".js-map").length) {
            var $sobject = $(this).closest('.sobject');
            var latlng = $sobject.data("latlng");
            if (latlng && (latlng = latlng.split(','))) {
                map_moveto(latlng[0], latlng[1]);
            }
        }
    });

    $(document).on('click', '.js-object-param-expand-next-all', function (e) {
        e.preventDefault();
        var $param = $(this).closest(".object__param");
        var $row = $(this).closest(".object__param-row");
        var $next_rows = $row.nextAll();
        if ($next_rows.length)
        {
            $next_rows.toggleClass("hidden");
            $param.toggleClass("next-rows-active");
        }
    });

    $(document).on('keyup', '.js-complexity-spinner', function (e) {
        e.preventDefault();
        var values = ['н/к', '1А', '1Б', '2А', '2Б', '3А', '3Б'];
        var val = $(this).val();
        var delta = 0;
        var current = $.inArray(val.substr(0, 3), values);
        if (current === -1) {
            current = $.inArray(val.substr(0, 2), values);
        }
        if (e.keyCode === 38) {
            delta = 1;
        }
        if (e.keyCode === 40) {
            delta = -1;
        }
        if (current !== -1 && delta) {
            var index = current + delta;
            if (index < 0) index = values.length - 1;
            else if (index >= values.length) index = 0;
            $(this).val(values[index]);
        }
    });

    $(document).on("submit.valid click perform-action", ".js-action", function(e){
        var $this = $(this);
        if ($this.is("form") && e.type !== "submit") {
            return true;
        }
        if ($this.is("[contenteditable]") && e.type !== "perform-action") {
            return true;
        }
        e.preventDefault();
        var url = $this.attr("href");
        var method = "get";
        var data = null;
        var process_data = true;
        if ($this.is("form")) {
            data = $this.serialize();

            if (window.FormData !== undefined) {
                data = new FormData($this[0]);
                process_data = false;
            }

            url = $this.attr("action");
            method = $this.attr("method");
        }
        if ($this.attr("data-action-url")) {
            url = $this.attr("data-action-url");
        }
        if ($this.attr("data-action-method")) {
            method = $this.attr("data-action-method");
        }
        if ($this.data("action-data")) {
            data = $this.data("action-data");
        }

        $.ajax({
            url: url,
            type: method,
            data: data,
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: process_data,
            beforeSend: function () {
                if (typeof tinymce !== "undefined") {
                    tinymce.activeEditor.getBody().setAttribute('contenteditable', false);
                }
                $this.find(":input").prop("disabled", true).closest(".textfield-wrapper").addClass("disabled");
                var $btn = $this.find(".loader-on-submit");
                loader_add($btn);
                if (typeof Turbolinks !== "undefined") {
                    var progress_adapter = new Turbolinks.BrowserAdapter(Turbolinks);
                    progress_adapter.showProgressBarAfterDelay();
                    progress_adapter.progressBar.setValue(0.01);
                    $this.data("progress_adapter", progress_adapter);
                }
            },
            complete: function (response) {
                if (typeof tinymce !== "undefined") {
                    tinymce.activeEditor.getBody().setAttribute('contenteditable', true);
                }
                $this.find(":input").not("[data-disabled]").prop("disabled", false).closest(".textfield-wrapper").removeClass("disabled");
                $this.find(":password").val("");
                var $btn = $this.find(".loader-on-submit");
                loader_remove($btn);
                $this.trigger("after-action-complete");
                if (typeof Turbolinks !== "undefined" && $this.data("progress_adapter")) {
                    $this.data("progress_adapter").progressBar.setValue(1);
                    $this.data("progress_adapter").hideProgressBar();
                }
            },
            success: function (response) {
                if (response.popup) {
                    if (response.text) {
                        $.fancybox.close();
                        $.fancybox.open(response.text, $.fancybox.options_modal);
                    }
                }
                else {
                    if (response.text) {
                        new Noty({
                            type: response.type?response.type:'success',
                            timeout: response.timeout?response.timeout:5000,
                            text: response.text,
                        }).show();
                    }
                }
                $this.trigger("after-action-success", response);
            },
            error: function (jqXHR) {
                form_process_errors($this, jqXHR);
                $this.trigger("after-action-error");
            }
        });
    });

    // Добавление списка объектов к фото в Fancybox
    $(document).on('afterShow.fb', function( e, instance, slide ) {
        if (instance.current.$thumb) {
            $simage = instance.current.$thumb.closest('.simage');
            if ($simage.length) {
                var $c_body = instance.$caption.find('.fancybox-caption__body');
                var id = $simage.data('id');
                var oid = getAllPathParams()[1];
                if (slide.opts.caption.indexOf('fancybox-image-objects-wrapper') === -1) {
                    if (typeof window.image_objects_captions !== 'undefined' && typeof window.image_objects_captions[id] !== 'undefined' ) { // Checking existence of ready caption with objects.
                        $c_body.html(window.image_objects_captions[id]);
                    }
                    else {
                        if (window.image_objects_xhr) {
                            window.image_objects_xhr.abort();
                        }
                        window.image_objects_xhr = $.ajax({
                            url: '/image/'+id+'/objects',
                            type: 'get',
                            data: null,
                            cache: true,
                            dataType: 'json',
                            success: function (response) {
                                var title = '';
                                var title_objects = [];
                                var panel = '';
                                var count = response.objects.length;
                                var title_i = 0;
                                $('.fancybox-image-objects-wrapper').remove();
                                title += '<div class="fancybox-caption__inner-append fancybox-image-objects-wrapper fancybox-caption__objects">';
                                if (count > 1) {
                                    panel += '<div class="fancybox-image-objects hidden"><div id="fancybox-image-objects"><div class="panel panel--image-objects"><div class="panel__title">Объекты на фото</div><div class="panel__content">';
                                    $.each(response.objects, function(k,v){
                                        if (title_i < 3 || v.indexOf('data-id="'+oid+'"') !== -1) {
                                            title_objects.push(v.replace('sobject-wrapper ', 'sobject-wrapper sobject-wrapper--inline mobile-hide'));
                                            title_i++;
                                        }
                                        panel += v;
                                    });
                                    panel += '</div></div></div></div>';
                                    title += '<span class="mobile-hide">На фото: </span>';
                                    title += title_objects.join(' ');
                                    title += '<span class="mobile-hide '+((title_i >= 3 && title_i < count - 1)?'':' hidden')+'"> &mdash;</span> <a class="fancybox-caption__objects-more link--dashed link--border-closer '+((title_i >= 3 && title_i < count - 1)?'':' hidden mobile-show-inline')+'" data-fancybox data-src="#fancybox-image-objects" data-type="inline" href="javascript:;"><span class="mobile-hide">показать все </span><span class="mobile-show-inline">объекты на фото</span></a>';
                                }
                                title += '</div>';
                                if (count > 1) {
                                    $c_body.append(panel);
                                    $c_body.find('.fancybox-caption__inner').append(title);
                                    slide.opts.caption = $c_body.html();
                                }
                                if (typeof window.image_objects_captions === 'undefined') {
                                    window.image_objects_captions = [];
                                }
                                window.image_objects_captions[id] = slide.opts.caption; // Save current caption with objects in instance property.
                            },
                        });
                    }
                }
            }
        }
    });

    // Подсветка полей в попапах
    $(document).on('afterShow.fb', function( e, instance, slide ) {
        if (instance.$trigger) {
            var selector = instance.$trigger.data('fancybox-highlight');
            if (selector) {
                var $o = instance.current.$slide.find(selector);
                if ($o.length) {
                    $o.focus().addClass('highlight').on('blur', function(){
                        $(this).removeClass('highlight');
                    });
                    if (window.tinyMCE && $o.hasClass('wysywyg')) {
                        var mce_ed = tinyMCE.get($o.attr('id'));
                        if (mce_ed) {
                            mce_ed.on('init', function(e) {
                                e.target.focus();
                                $(e.target.editorContainer).addClass('highlight');
                                e.target.on('blur', function(e) {
                                    $(e.target.editorContainer).removeClass('highlight');
                                });
                                window.tinyMCEInitedOnce = true;
                            });
                            if (window.tinyMCEInitedOnce) {
                                mce_ed.focus();
                                $(mce_ed.editorContainer).addClass('highlight');
                            }
                        }
                    }
                }
            }
        }
    });

    $(document).on("change", ".js-image-upload", function(e){
        var $this = $(this);
        $this.closest("form").trigger("submit.valid");
        $this.val("");
    });

    $(document).on("change", ".simage :checkbox", function(e){
        $(this).closest('.simage').toggleClass('checked', $(this).prop('checked'));
        var $checked = $(this).closest('.simages').find(':checkbox:checked');
        $('.simages__actions').toggleClass('hidden', !$checked.length);
        $(window).trigger("resize");
        var $rm_btn = $('.js-object-gallery-remove-all');
        var ids = [];
        $checked.each(function(){
            ids.push($(this).val());
        });
        $rm_btn.attr('data-src', $rm_btn.attr('data-src-pattern').replace('{ids}', ids.join(',')));
    });

    $(document).on("click", ".js-object-gallery-remove-all", function(e){
        e.preventDefault();
        $.fancybox.open({
            src: $(this).attr('data-src'),
            type: 'ajax',
            opts: $.fancybox.options_modal
        })
    });

    $(document).on("submit", ".js-object-gallery-submit", function(e){
        e.preventDefault();
    });

    $(document).on("after-action-success", ".js-action-object-image-upload", function(e, response){
        $('.object__image').remove();
        $(response.image).insertBefore('.object__params');
        $('.object__block--gallery').remove();
        $(response.gallery).insertBefore('.object__block--gallery-upload');
        Blazy.revalidate();
        $(window).trigger("scroll");
    });

    $(document).on("after-action-success", ".js-action-object-image-destroy", function(e, response){
        $('.object__image').remove();
        $(response.image).insertBefore('.object__params');
        $('.object__block--gallery').remove();
        $(response.gallery).insertBefore('.object__block--gallery-upload');
        $(".image-attached-object[data-id='"+response.id+"']").remove();
        var deleted = false;
        $(".image-attached-objects").each(function(){
            if (!$(this).children().length) {
                deleted = true;
                $(this).closest(".form__item").addClass("hidden");
            }
        });
        $.fancybox.close(deleted);
        Blazy.revalidate();
        $(window).trigger("scroll");
    });

    $(document).on("autocomplete-select", ".js-action-image-update .js-autocomplete", function(e, suggestion){
        var $body = $("body");
        var $el = $("<a class='js-action'>");
        $el.attr('data-action-url', $(this).attr('data-action-url') + '&object_id_to_attach=' + suggestion.data.id);
        $el.appendTo($body);
        var $el_old = $body.data("js-action-image-update-action-id");
        if ($el_old) {
            $el_old.remove();
        }
        $body.data("js-action-image-update-action-id", $el);
        $el.trigger('perform-action').on("after-action-success", function(e, response){
            $(".image-attached-objects").empty().append(response.html);
            var $el_old = $("body").data("js-action-image-update-action-id");
            if ($el_old) {
                $el_old.remove();
            }
            $(".js-action-image-update-autocomplete").val("").trigger("change");
        });
    });

    $(document).on("after-action-success", ".js-action-image-update", function(e, response){
        $.fancybox.close();
        var $image = $(".object__gallery-item[data-id='"+response.image_id+"']");
        $image.replaceWith(response.image_html);
        $(window).trigger("scroll");
    });

    // Открыть просмотр страниц отчёта
    $(document).on("click", ".js-fancybox-trip-pages", function(e){
        e.preventDefault();
        var page_count = $(this).data("page-count");
        var page_template = $(this).data("page-template");
        var images = [];
        if (page_template && page_count) {
            for(var i = 1; i <= page_count; i++) {
                var src = page_template.replace("%page%", i);
                images.push({
                    src  : src,
                    opts : {
                        caption : fancybox_append_download_link(src, "Страница " + i, "Скачать страницу"),
                        thumb   : '/build/img/blank.png'
                    }
                });
            }
        }
        $.fancybox.open(images, $.extend(true, {}, $.fancybox.options_default, {
            baseClass: "fancybox-container--pages",
            thumbs: {
                autoStart: true,
            },
            hash : "page",
        }), 0);
    });

    if (location.hash.indexOf('#page-') == 0) {
        $(".js-fancybox-trip-pages").first().trigger('click');
    }


    $(document).on("goto-y-end", ".js-goto-highlight", function(e){
        var $this = $(this);
        $this.addClass('highlight');
        setTimeout(function(){
            $this.removeClass('highlight');
        }, 2000)
    });


    $(document).on("click", ".js-trip-path-view", function(e){
        e.preventDefault();
        var $tp = $('.trip__path');
        $tp.addClass('no-transition');
        $(this).addClass('active cursor-default').siblings('.js-trip-path-view').removeClass('active cursor-default').each(function(){
            $tp.removeClass('trip__path--'+$(this).data('type'));
        });
        $tp.addClass('trip__path--'+$(this).data('type'));
        $tp[0].offsetHeight;
        $tp.removeClass('no-transition');
        Cookies.set("trip_path_view", $(this).data('type'), { expires: 365, path: '/' });
    });

    $(document).on('focus', '[contenteditable="true"]', function(e) {
        var $this = $(this);
        $this.data('contenteditable_start', $this.html());
        $this.data('contenteditable_before', $this.html());
    }).on('focusout keyup paste input', '[contenteditable="true"]', function(e) {
        var $this = $(this);
        if ($this.data('contenteditable_before') !== $this.html()) {
            $this.data('contenteditable_before', $this.html());
            $this.trigger('ichange');
        }
        if (e.type == 'focusout') {
            if ($this.data('contenteditable_start') !== $this.html()) {
                $this.trigger('change');
            }
        }
    });

    $(document).on("mouseenter mouseleave", ".js-trip-path .sobject", function(e){
        var id = $(this).data('id');
        if (id) {
            var $m = $('.object-marker[data-object-id="'+id+'"]');
            var $m_p = $m.closest('ymaps[class*="placemark-overlay"]');
            $m.toggleClass('active', e.type == 'mouseenter');
            if (!$m_p.data('z-index-old')) {
                $m_p.data('z-index-old', $m_p.css('z-index'));
            }
            $m_p.css('z-index', (e.type == 'mouseenter')?$m_p.data('z-index-old')+10:$m_p.data('z-index-old'));
        }
    });

    $(document).on("click", ".js-object-map-zoom", function(e){
        e.preventDefault();
        map_goto_object($(this).data('id'));
    });

    $(document).on('change', '.js-action[contenteditable="true"]', function(e) {
        var $this = $(this);
        var param_name = 'html';
        if ($this.data('contenteditable-param-name')) {
            param_name = $this.data('contenteditable-param-name');
        }
        var data = {};
        data[param_name] = $this.html();
        $this.data('action-data', data);
        $this.trigger('perform-action');
    });
}

function form_process_errors($form, jqXHR) {
    console.log(jqXHR.status, jqXHR.responseJSON);
    var error_text;
    if (jqXHR.status === 401) {
        error_text = 'Нет доступа. <a href="/login">Войдите на сайт</a>.';
    }
    else if (jqXHR.status === 422) {
        var errors = jqXHR.responseJSON;
        var index = 0;
        $.each(errors, function(field_name, field_errors){
            var $field = $form.find("[name='" + field_name + "']");
            if (!index) {
                $field.trigger("focus");
            }
            $field.addClass("error");
            $.each(field_errors, function(error_index, error_text) {
                $field.parent().append("<div class='form__error form__error--"+error_index+"'>" + error_text + "</div>");
            });
            index++;
        });
    }
    else {
        error_text = 'Произошла непредвиденная ошибка. Попробуйте ещё раз.';
    }
    if (jqXHR.status !== 200) {
        if (error_text) {
            new Noty({
                type: 'error',
                timeout: 5000,
                text: error_text,
                killer: 'form',
                queue: 'form',
            }).show();
        }
    }
}

var reloadWithTurbolinks = (function () {
    var scrollPosition;

    function reload () {
        scrollPosition = [window.scrollX, window.scrollY];
        Turbolinks.visit(window.location.toString(), { action: 'replace' });
    }

    document.addEventListener('turbolinks:load', function () {
        if (scrollPosition) {
            window.scrollTo.apply(window, scrollPosition);
            scrollPosition = null;
        }
    })

    return reload;
})();



function minilog(section, message, replace) {
    var $p = $(".page-generation");
    if ($p.length) {
        var sclass = 'page-generation__'+section;
        var $s = $p.find('.'+sclass);
        if (!$s.length) {
            $s = $('<div class="'+sclass+'"></div>');
            $s.appendTo($p);

        }
        if (typeof replace !== "undefined" && replace) {
            $s.empty();
        }
        $s.append(message);
    }
}

function vk_comments_init() {
    if (typeof VK !== 'undefined') {
        if (typeof window['vk_comment_notify_inited'] === 'undefined') {
            VK.Observer.subscribe("widgets.comments.new_comment", function f(count, comment, date, hash) {
                var params = {
                    count: count,
                    comment: comment,
                    date: date,
                    hash: hash,
                    url: window.location.href,
                    title: $.trim($(".title").text()),
                    page_title: document.title
                };
                $.ajax({
                    url: '/comment/notify',
                    data: params
                });
            });
            window['vk_comment_notify_inited'] = true;
        }

        var $comments_count = $(".object__comments-count");
        if ($comments_count.length) {
            $.ajax({
                url: 'https://web.archive.org/web/20241008144813/https://api.vk.com/method/widgets.getComments?v=5.67&widget_api_id='+vk_app_id+'&page_id='+location.pathname.replace(/^\/+|\/+$/, ''),
                dataType: 'jsonp',
                success: function(obj) {
                    if (obj && obj.response && obj.response.count) {
                        $comments_count.text(obj.response.count + ' комментари' + formatNoun(obj.response.count, 'й', 'я', 'ев'));
                        $(".object__comments-count-wrapper").removeClass('hidden');
                        $(".object__comments-add").addClass('hidden');
                    }
                },
                complete: function(obj) {
                    $(".object__comments").removeClass('invisible');
                }
            });
        }
    }
    // else {
    //     setTimeout(function(){
    //         vk_comments_init();
    //     }, 100);
    // }
}



function image_sortable_init() {
    $(".sortable").not(".sortable-inited").each(function () {
        Sortable.create(this, {
            animation: 150,
            handle: ".sortable-handle",
            scrollSensitivity: 55,
            onStart: function (e) {
                // Save order before sort
                this._currentOrder = this.toArray();
                $(e.from).addClass("sortable-sorting");
            },
            onEnd: function (e) {
                $(e.from).removeClass("sortable-sorting");
            },
            onUpdate: function (e) {
                // Disabling sorting
                // noinspection JSUndeclaredVariable
                var _this = this;
                _this.option('disabled', true);

                var $sortable = $(e.item).closest(".sortable");
                var $items = $sortable.children();
                var items = {};
                $items.each(function(i){
                    items[$(this).data("id")] = i;
                });

                $.ajax({
                    url: $sortable.data("sortable-url"),
                    data: {
                        items: items
                    },
                    success: function(response) {
                        new Noty({
                            type: 'success',
                            timeout: 2000,
                            text: response.text,
                            killer: 'image_sortable',
                            queue: 'image_sortable',
                        }).show();
                    },
                    complete: function(obj){
                        _this.option('disabled', false);
                    },
                    error: function() {
                        _this.sort(_this._currentOrder);
                    }
                });
            },
        });
    }).addClass("sortable-inited");
}




/*

Sticky Blocks

 */

function sticky_init($o, context) {

    if (!$("body").hasClass("js-sticky-inited")) {

        $('body').on("responsive-update", function(e, force, noanimation){
            if (force) {
                $(".js-sticky-inited").each(function(){
                    var sticksy = $(this).data('sticksy');
                    if (sticksy) {
                        sticksy.hardRefresh();
                    }
                });
            }
        });

        $("body").addClass("js-sticky-inited");
    }


    if (typeof $o === "undefined" || !$o) $o = $(".js-sticky", context);
    $o.not('.js-sticky-inited').not('.sticksy-dummy-node').each(function () {
        //if (this.offsetParent !== null) {
        if ($(this).css('position') == 'sticky') {
            var stickyEl = new Sticksy(this, {
                topSpacing: parseInt($(this).data('sticky-top-spacing'), 10)
                //,listen: true
            });
            stickyEl.onStateChanged = function (state) {
                if (state === 'fixed') stickyEl.nodeRef.classList.add('sticky-fixed');
                else stickyEl.nodeRef.classList.remove('sticky-fixed');
                if (state === 'stuck') stickyEl.nodeRef.classList.add('sticky-stuck');
                else stickyEl.nodeRef.classList.remove('sticky-stuck');
            }
            $(this).prev('.sticksy-dummy-node').find('.js-sticky-remove').remove();
            $(this).data('sticksy', stickyEl);
            $(this).addClass("js-sticky-inited");
        }
        //}
    });
}


/*

 Textfields (with reset icon, adaptive placeholders etc)

 */

function textfield_init() {
    if (!$("html").hasClass("textfield-inited")) {

        $("html").addClass("textfield-inited");

        $(document).on("keyup change textfield-filled", ".textfield", function (e) {//keydown focus blur
            var is_filled = !!$(this).val();
            //var $placeholder = $(this).nextAll(".textfield-placeholder").first();
            // if (e.type === "textfield-filled") { // remove inline attribute value for CSS [value] selector purpose
            //     if ($(this).val().length) $(this).prop("value", $(this).val());
            //     $(this).removeAttr("value");
            // }
            $(this).toggleClass("filled", is_filled);
        });


        $(document).on("click", ".textfield-reset", function(e){
            var $input = $(this).prevAll(".textfield").not("[disabled],[readonly]").first();
            $input.val("")./*trigger("blur").trigger("focus").trigger("keyup").*/trigger("change");
            if ($(this).closest(".select2-search").length)
            {
                $("select + .select2-container--open").each(function(){
                    $(this).prev().select2("close").select2("open");
                });
            }
            //$(this).removeClass("active");
        });

        // $(document).on("keyup change textfield-reset-init", ".textfield", function(e){//blur
        //     if (e.type == "textfield-reset-init" && $(this).nextAll(".textfield-reset").first().length) $(this).not("[disabled]").addClass("textfield-reset-inited");
        //     $(this).not("[disabled]").nextAll(".textfield-reset").first().toggleClass("active", !!$(this).val());
        //     console.log($(this).val(), !!$(this).val());
        // });
        //
        // $(document).ajaxStop(function () {
        //     $(".textfield").trigger("textfield-reset-init");
        // });


        $(document).on("textfield-after-init", ".textfield", function(e){
            if (e.type == "textfield-after-init") $(this).addClass("textfield-after-inited");
            var $after = $(this).nextAll(".textfield-after").first();
            if ($after.length && !$(this).hasClass("textfield--after-hide-if-reset"))
            {
                var $reset = $(this).nextAll(".textfield-reset").first();
                var reset_width = 0;
                var after_width = $after.outerWidth();
                if ($reset.length)
                {
                    reset_width = $reset.outerWidth() - 20;
                }
                if (after_width)
                {
                    $(this).css("padding-right", after_width + reset_width);
                }
            }
        });

        $(window).on("resize", function () {
            $(".textfield").trigger("textfield-after-init");
        });
    }
}

function textfield_bind_init($o) {
    if (typeof $o === "undefined") $o = $(".textfield");
    $o.trigger("textfield-filled");
    //$o.trigger("textfield-reset-init");
    $o.trigger("textfield-after-init");
    textfield_autosize_init($o);
}

function textfield_autosize_init($o)
{
    if (typeof $o === "undefined") $o = $(".textfield");
    $o.filter(".autosize").not(".autosize-inited").each(function(){
        autosize($(this));
        $(this).addClass("autosize-inited");
    });
}


function wysywyg_init($o) {
    if (typeof $o === "undefined") $o = $("textarea.wysywyg");
    var toolbar = 'bold italic | link unlink | styleselect | charmap';
    if (user_can('edit objects')) {
        toolbar += ' | code';
    }
    toolbar += ' | fullscreen';
    var style_formats = [
        { title: 'Абзац', block: 'p' }
    ];
    if (user_can('edit objects')) {
        style_formats.push({ title: 'Заголовок 1', block: 'div', classes: 'h1' });
    }
    style_formats = style_formats.concat([
        { title: 'Заголовок 2', block: 'h2' },
        { title: 'Заголовок 3', block: 'h3' },
        { title: 'Заголовок 4', block: 'h4' }
    ]);
    $o.not(".wysywyg-inited").each(function(){
        $(this).tinymce({
            script_url: '/build/js/vendor/tinymce/tinymce.min.js',
            language: 'ru',
            theme: 'modern',
            menubar: false,
            statusbar: false,
            branding: false,
            plugins : 'autolink autosave link fullscreen paste charmap code',
            toolbar: toolbar,
            min_height: $(this).data("wysywyg-minheight")?$(this).data("wysywyg-minheight"):150,
            anchor_bottom: false,
            anchor_top: false,
            default_link_target: '_blank',
            target_list: false,
            link_title: false,
            link_context_toolbar: true,
            valid_elements: 'strong/b,em/i,a[href|target=_blank],p,ul,ol,li,table,tbody,thead,tfoot,tr,td,th,br',
            paste_word_valid_elements: "strong/b,em/i,a[href|target=_blank],p,ul,ol,li,table,tbody,thead,tfoot,tr,td,th,br",
            style_formats: style_formats,
            valid_styles: {},
            valid_classes: '',
            content_css : '/build/css/wysywyg-content.css',
            setup: function (editor) {
                editor.on('change', function () {
                    editor.save();
                });
            }
        });
        $(this).addClass("wysywyg-inited");
    });
}


/*

Custom Checkboxes

 */

function checkbox_plain_init() {
    $(".checkbox-plain-js").find("[type='checkbox'], [type='radio']").not(".checkbox-plain-js-inited").on("change change-pseudo", function(e){
        var $o = $(this).closest(".checkbox-plain-js");
        if ($(this).is(":radio"))
        {
            var name = $(this).attr("name");
            var $radios = $(this).closest("form").find("[name='"+name+"']");
            if (!$radios.length) $radios = $("input[name='"+name+"']");
            $radios.closest(".checkbox-plain-js").removeClass("checked");
        }
        if ($(this).prop("checked")) $o.addClass("checked");
        else $o.removeClass("checked");
        if ($(this).prop("disabled")) $o.addClass("disabled");
        else $o.removeClass("disabled");
    }).on("focus", function(e){
        var $o = $(this).closest(".checkbox-plain-js");
        if (!$(this).prop("disabled")) $o.addClass("focused");
    }).on("blur", function(e){
        var $o = $(this).closest(".checkbox-plain-js");
        $o.removeClass("focused");
    }).each(function(){
        var $o = $(this).closest(".checkbox-plain-js");
        if ($(this).prop("checked")) $o.addClass("checked");
        if ($(this).prop("disabled")) $o.addClass("disabled");
    }).addClass("checkbox-plain-js-inited").closest(".checkbox-plain-js").addClass("checkbox-plain-js-inited").find("input:text").on("focus", function(){
        $(this).closest(".checkbox-plain-js").find(":checkbox,:radio").prop("checked", true).trigger("change");
    });

    $('.js-checkboxes-range').not('.js-checkboxes-range-inited').each(function () {
        $(this).checkboxes('range', true);
        $(this).addClass('js-checkboxes-range-inited');
    });

    $('.js-checkboxes-toggle-all').not('.js-checkboxes-toggle-all-inited').on("change click", function (e) {
        var is_checkbox = $(this).is(":checkbox,:radio");
        var is_change_event = e.type == "change";
        if ((is_checkbox && is_change_event) || (!is_checkbox && !is_change_event)) {
            var $selector = $($(this).data("checkboxes-toggle-all-context"));
            if ($selector.length) {
                $selector.checkboxes($(this).prop("checked") ? 'check' : 'uncheck');
            }
        }
    }).addClass('js-checkboxes-toggle-all-inited');
}


/*
* Autocomplete for textfields
* */

var mapSearchLookup = function(query, done) {
    if (this.lookupXHRs) {
        $.each(this.lookupXHRs, function(k,xhr){
            xhr.abort();
        });
    }
    var xhrs = [
        $.getJSON("/search/autocomplete", {"query": query, "coords": 1}, function(){}),
        $.getJSON("//web.archive.org/web/20241008144813/https://nominatim.openstreetmap.org/search", {"format": "json", "addressdetails": 1, "accept-language": "ru", "q": query}, function(){})
    ];
    this.lookupXHRs = xhrs;
    $.when(
        xhrs[0],
        xhrs[1]
    ).done(function(res1, res2){
        var suggestions_arr = [];
        suggestions_arr.push(autocompleteTransformResult(res1[0]));
        suggestions_arr.push(autocompleteTransformResult(res2[0], {serviceUrl: "//web.archive.org/web/20241008144813/https://nominatim.openstreetmap.org/search?format=json&amp;addressdetails=1"}));
        var result_suggestions = [];
        $.each(suggestions_arr, function(key1, value1){
            $.each(value1.suggestions, function(key2, suggestion){
                result_suggestions.push(suggestion);
            });
        });
        result_suggestions = {suggestions: result_suggestions}
        done(result_suggestions);
    })
};


function autocomplete_init() {
    $('.js-autocomplete').not(".js-autocomplete-inited").each(function () {
        var url = null;
        if ($(this).data("autocomplete-url")) {
            url = $(this).data("autocomplete-url");
        }
        var lookup = null;
        if ($(this).data("autocomplete-lookup")) {
            lookup = $(this).data("autocomplete-lookup");
        }
        var lookup_function = $(this).data("autocomplete-lookup-function");
        if (lookup_function && window[lookup_function] && typeof window[lookup_function] === 'function') {
            lookup = window[lookup_function];
        }
        var appendto_parent = $(this).data("autocomplete-appendto-parent");
        $(this).autocomplete({
            lookup: lookup,
            serviceUrl: url,
            paramName: $(this).data("autocomplete-param-name")?$(this).data("autocomplete-param-name"):"query",
            autoSelectFirst: $(this).data("autocomplete-auto-select-first")?$(this).data("autocomplete-auto-select-first"):false,
            dataType: "json",
            deferRequestBy: 50,
            //triggerSelectOnValidInput: false,
            //noCache: true,
            preventBadQueries: false,
            preserveInput: $(this).data("autocomplete-preserve-input")?$(this).data("autocomplete-preserve-input"):false,
            appendTo: (appendto_parent === true || (appendto_parent && window.matchMedia(appendto_parent).matches))?$(this).parent():"body",
            minChars: 2,
            triggerSelectOnValidInput: false,
            onSelect: function (suggestion) {
                if ($(this).hasClass("autocomplete-container-just-hidden")) {
                    if ($(this).data("autocomplete-goto-url") && suggestion.data.goto_url) {
                        Turbolinks.visit(suggestion.data.goto_url);
                    }
                    else if ($(this).data("autocomplete-show-on-map")) {
                        if (suggestion.data.lat && (suggestion.data.lon || suggestion.data.lng)) {
                            map_moveto(suggestion.data.lat, suggestion.data.lng?suggestion.data.lng:suggestion.data.lon, suggestion.data.boundingbox, 14);
                        }
                    }
                    $(this).trigger("autocomplete-select", [suggestion]).trigger("blur");
                    $(this).val($(this).val().replace(/<[^>]+>/g, ""));
                }
            },
            onSearchStart: function (params) {
                $(this).removeClass("autocomplete-search-complete");
                $(this).addClass("autocomplete-searching");
                $(this).removeClass("autocomplete-container-just-hidden");
            },
            onSearchComplete: function (query, suggestions) {
                $(this).removeClass("autocomplete-searching");
                $(this).addClass("autocomplete-search-complete");
            },
            onHide: function (container) {
                $(this).addClass("autocomplete-container-just-hidden");
            },
            onInvalidateSelection: function () {
            },
            transformResult: function(response) {
                return autocompleteTransformResult(response, this);
            },
            beforeRender: function (container, suggestions) {
                var $this = $(this);

                $first_region = $(container).find(".sobject--region").first().closest(".autocomplete-suggestion");
                $('<div class="autocomplete-group">Районы</div>').insertBefore($first_region);

                $first_osm = $(container).find(".osm-suggestion").first().closest(".autocomplete-suggestion");
                $('<div class="autocomplete-group">Результаты с openstreetmap.org</div>').insertBefore($first_osm);

                $first_db = $(container).find(".sobject[data-latlng]").first().closest(".autocomplete-suggestion");
                $('<div class="autocomplete-group">Объекты на pereval.online</div>').insertBefore($first_db);

                $(container).wrapInner("<div class='autocomplete-scroll'></div>");
                $(container).prepend("<div class='autocomplete-close'>закрыть</div>"); // <i class='fa fa-times'></i>
                $(container).find('.autocomplete-close').on("click", function(){
                    $this.autocomplete('hide');
                });
                var maxheight = $(window).scrollTop() + $(window).height() - ($this.offset().top + $this.outerHeight()) - 30 - 20;
                maxheight = Math.max(100, maxheight);
                maxheight = Math.min(400, maxheight);
                $(container).find('.autocomplete-scroll').css("max-height", maxheight);
            },
            formatResult: function (suggestion, currentValue) {
                if (suggestion.data && suggestion.data.view)
                {
                    return suggestion.data.view;
                }
                if (!currentValue) {
                    return suggestion.value;
                }
                var pattern = '(' + currentValue.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&") + ')';
                return suggestion.value.replace(new RegExp(pattern, 'gi'), '<strong>$1<\/strong>');
            }
        }).addClass("js-autocomplete-inited");
    });
}

function autocompleteTransformResult(response, _this) {
    if (_this && _this.serviceUrl && _this.serviceUrl.indexOf("nominatim.openstreetmap.org") > -1) {
        return {
            suggestions: $.map(response, function(item) {
                var type = item.class + ":" +  item.type;
                var osm_types = {
                    'place:island': 'о.',
                    'waterway:river': 'р.',
                    'waterway:stream': 'р.',
                    'natural:peak': 'г.',
                    'natural:volcano': 'вул.',
                    'natural:glacier': 'лед.',
                    'mountain_pass:yes': 'пер.',
                    'natural:water': 'оз.',
                    'tourism:camp_site': 'а/л',
                }
                var type_name = osm_types[type];
                var address = [];
                if (item.address) {
                    if (item.address.country) address.push(item.address.country);
                    if (item.address.state) address.push(item.address.state);
                    if (item.address.county) address.push(item.address.county);
                }
                return { value: "<div class='osm-suggestion'>"+((item.icon && false)?"<div class='autocomplete-suggestion__icon'><img src='" + item.icon + "'></div>":"") + ((type_name)?type_name.toLowerCase() + ' ':'') + item.display_name.split(",")[0] + ((address)?" <span class='color-muted-strong font-smaller'>(" + address.join(", ") + ")</span>":"")+"</div>", data: item };
            })
        };
    }
    else {
        return {
            suggestions: $.map(response.results, function(item) {
                return { value: item.name, data: item };
            })
        };
    }
}

/*

Selectboxes

 */

function selectbox_init($o) {
    if (!$().select2) return;

    if (!$("html").hasClass("selectbox-inited")) {

        $("html").addClass("selectbox-inited");

        $(document).on("focus", '.select2-search__field', function(e) { // resolve focus problem in fancybox popup
            e.stopPropagation();
        });
    }

    $.fn.select2.amd.define('select2/data/maximumSelectionLength1',[

    ], function (){
        function MaximumSelectionLength (decorated, $e, options) {
            this.maximumSelectionLength = options.get('maximumSelectionLength1');

            decorated.call(this, $e, options);
        }

        MaximumSelectionLength.prototype.query =
            function (decorated, params, callback) {
                var self = this;

                this.current(function (currentData) {
                    var count = currentData != null ? currentData.length : 0;
                    if (self.maximumSelectionLength1 > 0 &&
                        count >= self.maximumSelectionLength1) {
                        self.trigger('results:message', {
                            message: 'maximumSelected',
                            args: {
                                maximum: self.maximumSelectionLength1
                            }
                        });
                        return;
                    }
                    decorated.call(self, params, callback);
                });
            };

        return MaximumSelectionLength;
    });

    $.fn.select2.amd.require([
        "select2/utils",
        "select2/dropdown",
        "select2/dropdown/attachContainer",
        "select2/dropdown/search",
        "select2/selection/search",
        "select2/dropdown/search",
        "select2/selection/base",
        "select2/selection/single",
        "select2/selection/multiple",
        "select2/core",
        "select2/selection/allowClear",
        "select2/results"
    ], function (Utils, DropdownAdapter, AttachContainer, DropdownSearch, SelectionSearch, DropdownSearch, BaseSelection, SingleSelection, MultipleSelection, Select2Core, AllowClear, Results) {

        SingleSelection.prototype.render = function () {
            var $selection = SingleSelection.__super__.render.call(this);
            $selection.addClass('select2-selection--single');
            $selection.html(
                '<span class="select2-placeholder"><span class="select2-placeholder__inner">' + this.options.get('placeholder') +'</span></span>' +
                '<span class="select2-selection__rendered"></span>' +
                '<span class="select2-selection__arrow" role="presentation">' +
                '<b role="presentation"></b>' +
                '</span>'
            );

            return $selection;
        };

        MultipleSelection.prototype.render = function () {
            var $selection = MultipleSelection.__super__.render.call(this);
            $selection.addClass('select2-selection--multiple');
            $selection.html(
                '<span class="select2-placeholder"><span class="select2-placeholder__inner">' + this.options.get('placeholder') +'</span></span>' +
                '<ul class="select2-selection__rendered"></ul>' +
                '<span class="select2-selection__arrow" role="presentation">' +
                '<b role="presentation"></b>' +
                '</span>'
            );
            $selection.prop("tabindex", this.$element.data('old-tabindex'));

            return $selection;
        };

        DropdownSearch.prototype.render = function (decorated) {
            var $rendered = decorated.call(this);

            var $search = $(
                '<span class="select2-search select2-search--dropdown">' +
                '<div class="textfield-wrapper">' +
                '<input class="select2-search__field textfield" type="search" tabindex="-1"' +
                ' autocomplete="off" autocorrect="off" autocapitalize="off"' +
                ' spellcheck="false" role="textbox" placeholder=" " />' +
                '<label class="textfield-placeholder" for="">Поиск по названию</label>' +
                '<span class="textfield-reset"></span>' +
                '</div>' +
                '</span>'
            );

            this.$searchContainer = $search;
            this.$search = $search.find('input');

            $rendered.prepend($search);

            return $rendered;
        };

        SelectionSearch.prototype._transferTabIndex = function (decorated) {
            // remove tabindex transfer
        };

        SelectionSearch.prototype.searchRemoveChoice = function (decorated, item) {

            this.trigger('unselect', {
                data: item
            });

            this.$search.val('');
            this.handleSearch();
        };

        AllowClear.prototype.update = function (decorated, data) {
            decorated.call(this, data);

            this.$selection.removeClass("select2-selection--with-clear");
            if (this.$selection.find('.select2-selection__placeholder').length > 0 ||
                data.length === 0) {
                return;
            }

            var $remove = $(
                '<span class="select2-selection__clear">' +
                '&times;' +
                '</span>'
            );
            $remove.data('data', data);

            this.$selection.addClass("select2-selection--with-clear").find('.select2-selection__rendered').prepend($remove);
        };

        Results.prototype.option = function (data) {
            var option = document.createElement('li');
            option.className = 'select2-results__option';

            if (data.element && data.element.className) {
                option.className += " " + data.element.className;
            }

            var attrs = {
                'role': 'treeitem',
                'aria-selected': 'false'
            };

            if (data.disabled) {
                delete attrs['aria-selected'];
                attrs['aria-disabled'] = 'true';
            }

            if (data.id == null) {
                delete attrs['aria-selected'];
            }

            if (data._resultId != null) {
                option.id = data._resultId;
            }

            if (data.title) {
                option.title = data.title;
            }

            if (data.children) {
                attrs.role = 'group';
                attrs['aria-label'] = data.text;
                delete attrs['aria-selected'];
            }

            for (var attr in attrs) {
                var val = attrs[attr];

                option.setAttribute(attr, val);
            }

            if (data.children) {
                var $option = $(option);

                var label = document.createElement('strong');
                label.className = 'select2-results__group';

                var $label = $(label);
                this.template(data, label);

                var $children = [];

                for (var c = 0; c < data.children.length; c++) {
                    var child = data.children[c];

                    var $child = this.option(child);

                    $children.push($child);
                }

                var $childrenContainer = $('<ul></ul>', {
                    'class': 'select2-results__options select2-results__options--nested'
                });

                $childrenContainer.append($children);

                $option.append(label);
                $option.append($childrenContainer);
            } else {
                this.template(data, option);
            }

            Utils.StoreData(option, 'data', data);

            return option;
        };

        if (typeof $o === "undefined") $o = $('select.selectbox');
        $o.not('.selectbox-inited').each(function () {
            var options = {
                tags: false,
                theme: "default",
                dropdownAutoWidth: true,
                dropdownParent: $('.wrap'),
                escapeMarkup: function(m) {
                    return m;
                },
                templateResult: function (d) {
                    var output;
                    if ($(d.element).attr("data-html")) {
                        output = $(d.element).attr("data-html");
                    }
                    else {
                        output = d.text;
                    }
                    return output;
                },
                templateSelection: function (d) {
                    if ($(d.element).attr("data-html")) {
                        return $(d.element).attr("data-html");
                    }
                    return d.text;
                },
            };
            if ($(this).data("selectbox-show-values"))
            {
                options["templateSelection"] = function(state) {
                    if (!state.id) {
                        return state.text;
                    }
                    var $state = state.element.value;
                    return $state;
                };
            }
            if (!$(this).data("selectbox-search"))
            {
                options["minimumResultsForSearch"] = Infinity;
            }
            options["width"] = "style";
            if ($(this).data("selectbox-autowidth"))
            {
                options["width"] = "auto";
            }
            if (!$(this).data("selectbox-tags"))
            {
                options["containerCssClass"] = "select2-selection--notags";
                options["dropdownCssClass"] = "select2-dropdown--notags";
            }
            if ($(this).data("selectbox-allow-clear"))
            {
                options["allowClear"] = $(this).data("selectbox-allow-clear");
            }
            if ($(this).data("selectbox-limit"))
            {
                options["maximumSelectionLength"] = $(this).data("selectbox-limit");
            }
            if ($(this).prop("multiple"))
            {
                options["closeOnSelect"] = false;
            }
            /*if ($(this).closest(".fancybox-slide").length)
            {
                options["dropdownParent"] = $(this).closest(".textfield-wrapper");
            }*/
            if ($(this).data("selectbox-dropdown-parent"))
            {
                options["dropdownParent"] = $($(this).data("selectbox-dropdown-parent"));
            }
            if ($(this).data("selectbox-ajax"))
            {
                options["ajax"] = $(this).data("selectbox-ajax");
            }

            if ($(this).closest(".fancybox-slide").length)
            {
                options["theme"] += " select2-container--in-fancybox";
            }
            $(this).find("option[value='']:empty").remove();
            $(this).on("change", function () {
                var $this = $(this);
                if (!$(this).prop("multiple")) {
                    $(this).select2('close');
                }
                $(this).data('select2').$container.toggleClass("select2-container--filled", !!$(this).val().length);
                if ($(this).hasClass("selectbox-change-tip"))
                {
                    var tip = $(this).find("option:selected").data("form-tip");
                    var $tip = $(this).closest(".form__item").find(".form__tip");
                    if (tip)
                    {
                        $tip.html(tip).removeClass("hidden");
                    }
                    else
                    {
                        $tip.html("").addClass("hidden");
                    }
                }
                if ($(this).data("option-last-changed") && !$($(this).data("option-last-changed")).hasClass("selectbox-on-change-no-refresh")) {
                    selectbox_refresh($this, open);
                }
            }).select2(options).addClass("selectbox-inited");
            $(this).data('select2').$container.toggleClass("select2-container--filled", !!$(this).val().length);

            $(this).data('select2').on("results:all", function (params) {
                var $options = this.$dropdown.find(".select2-results__options");
                setTimeout(function(){
                    $options.toggleClass("select2-results__options--scrollbar", $options.hasScrollBar());
                }, 10);
            });

            $(this).on("select2:open", function (e) {
                var _this = this;
                var $options = $(_this).data('select2').$dropdown.find(".select2-results__options");
                $(_this).data('select2').$dropdown.addClass("select2-container--dropdown");
                if ($(this).data("selectbox-dropdown-nowrap"))
                {
                    $(_this).data('select2').$dropdown.addClass("select2-container--dropdown-nowrap");
                }
                setTimeout(function(){
                    $options.toggleClass("select2-results__options--scrollbar", $options.hasScrollBar());
                }, 1);
            });

            $(this).on("select2:unselecting", function (e) {
                var select2 = $(this).data('select2');
                var opts = select2.options;
                opts.set('disabled', true);
                setTimeout(function() {
                    opts.set('disabled', false);
                }, 1);
            });

            $(this).on("select2:select", function (e) {
                var _this = this;
                setTimeout(function() { // Hotfix for correct dropdown position if more than maximumSelectionLength
                    $(window).scrollTop($(window).scrollTop()+1);
                    $(window).scrollTop($(window).scrollTop()-1);
                }, 1);
            });

            $(this).on("select2:unselect", function (e) {
                var $this = $(this);
                var $options = $this.data('select2').$dropdown.find(".select2-results__options");
                //var scrolltop = $options.scrollTop();
                if ($options.data("scrollTop")) {
                    $options.scrollTop($options.data("scrollTop"));
                }
            });

            $(this).on("select2:selecting select2:unselecting", function (e) {
                if (e.params.args.data) {
                    $(this).data("option-last-changed", e.params.args.data.element);
                }
                var $options = $(this).data('select2').$dropdown.find(".select2-results__options");
                var scrolltop = $options.scrollTop();
                $options.data("scrollTop", scrolltop)
            });

            $(this).on("select2:clear", function (e) {
                selectbox_refresh($(this));
            });

            $(this).on("select2:select select2:unselect select2:selection-aggregate", function (e) {
                var select2 = $(this).data('select2');
                var opts = select2.options;
                var $rendered = select2.$selection.find(".select2-selection__rendered");
                if ($rendered.filter("span").length) {
                    var current_text = $.trim($rendered.filter("span").html());
                    if (current_text) {
                        $rendered.html(current_text);
                    }
                }

                /* http://stackoverflow.com/a/39787191 */
                var values = [];
                var output = "";
                var agg_min = $(this).data("selectbox-aggregate-min");
                $(this).find("option:selected").each(function(i, selected){
                    values[i] = $(selected).html();
                });
                if (values.length >= agg_min)
                {
                    output = "<li class='select2-selection__choice'>Выбрано "+values.length+"</li>";
                }
                if (output)
                {
                    $rendered.children().not(".select2-selection__clear").remove();
                    $rendered.prepend(output);
                }
            }).trigger("select2:selection-aggregate");

        });
    }, null, true);

}

function sync_selects(el1, el2) {
    if ($(el1).data("change-triggering"))
    {
        return false;
    }
    if (!el1)
    {
        return false;
    }
    else
    {
        var options1 = el1.getElementsByTagName('option');
        var options2 = el2.getElementsByTagName('option');
        for (var i = 0, len = options1.length; i < len; i++)
        {
            var val = options1[i].value;
            $(options2).filter("[value='"+val+"']").prop("selected", options1[i].selected);
        }
        $(el2).data("change-triggering", true).trigger("change").trigger("select2:selection-aggregate").data("change-triggering", false);
    }
}

function sync_selects_append(el1, el2) {
    var change_reverse = $(el1).data("change-reverse");
    if ($(el1).data("change-triggering"))
    {
        return false;
    }
    if (!el1)
    {
        return false;
    }
    else {
        var options1 = el1.getElementsByTagName('option');
        var options2 = el2.getElementsByTagName('option');
        if (change_reverse) {
            options3 = options1;
            options1 = options2;
            options2 = options3;
            el3 = el1;
            el1 = el2;
            el2 = el3;
        }
        for (var i = 0, len = options1.length; i < len; i++) {
            var val = options1[i].value;
            if (!change_reverse) {
                var exist = $(options2).filter("[value='" + val + "']").length;
                if (!exist) {
                    $(el2).append($(options1[i]).clone());
                }
            }
            $(options2).filter("[value='" + val + "']").prop("selected", options1[i].selected);
        }
        $(el2).data("change-triggering", true).trigger("change").trigger("select2:selection-aggregate").data("change-triggering", false);
    }
}

function selectbox_refresh($this, open) {
    if ($this.data("selectbox-refreshable-url") && !$this.data("selectbox-refreshable-url-blocked"))
    {
        var r_url = $this.data("selectbox-refreshable-url");
        var $form = $this.closest("form");
        $this.data("selectbox-refreshable-url-blocked", true);
        $.ajax({
            type: 'get',
            cache: false,
            url: r_url,
            data: $form.serialize(),
            success: function (data) {
                var $options = $this.data('select2').$dropdown.find(".select2-results__options");
                $this.refreshDataSelect2(data, open);
                if ($options.data("scrollTop")) {
                    $options.scrollTop($options.data("scrollTop"));
                }
                $this.data("selectbox-refreshable-url-blocked", false);
            }
        });
    }
}

(function ($) {
    $.fn.refreshDataSelect2 = function (data, open) {
        this.select2('data', data);

        // Update options
        var $select = $(this[0]);
        $select.html('');
        var options = data.map(function(item) {
            var newOption = new Option(item.text, item.id, item.selected, item.selected);
            $select.append(newOption);
            if (item.class) {
                $select.find("option").last().addClass(item.class);
            }
        });
        $select.append(options.join(''));
        $select.trigger('change');
        $select.trigger("select2:selection-aggregate");
        if (typeof open !== "undefined" && open) { // refresh dropdown
            $select.select2('close');
            $select.select2('open');
        }
        delay(function(){
            $select.trigger("select2:selection-aggregate");
        }, 1);
    };
})(jQuery);


/*

Dropdown Dots

 */

function dropdown_init()
{
    if (!$("html").hasClass("dropdown-inited")) {
        $("html").addClass("dropdown-inited")

        $(document).on("click", ".menu-list-close-on-click a", function (e) {
            var $this = $(this);
            var $o = $this.closest(".dropdown-selection");
            if (!$o.length)
            {
                var $tooltip = $this.closest(".tooltipster-popover");
                if ($tooltip.length)
                {
                    $.each($.tooltipster.instances(), function(k, v){
                        if ($tooltip.attr("id") == v.__namespace)
                        {
                            $(v._$origin).filter(".dropdown-selection").data("active-index", $this.parent("li").prevAll().length);
                            $(v._$origin).find(".dropdown-selection__rendered").html($this.html());
                            $this.parent("li").addClass("active").siblings().removeClass("active");
                            v.hide();
                            return false;
                        }
                    });
                }
            }
        });
    }
}


/*

Tooltips

 */

function tooltip_init($o, callback, options) {

    if (!$().tooltipster) return;

    if (!$("html").hasClass("tooltip-inited")) {

        $("html").addClass("tooltip-inited");

        $(document).on("mouseup", ".tooltip-closest-hide", function (e) {
            var $this = $(this);
            var $tooltip = $this.closest(".tooltipster-base");
            if ($tooltip.length)
            {
                $.each($.tooltipster.instances(), function(k, v){
                    if ($tooltip.attr("id") == v.__namespace)
                    {
                        v._$origin.tooltipster("close");
                        return false;
                    }
                });
            }
        });

        $(document).on("mouseenter", ".tooltipster-marker-hint", function (e) {
            var $this = $(this);
            var $tooltip = $this.closest(".tooltipster-base");
            if ($tooltip.length)
            {
                $.each($.tooltipster.instances(), function(k, v){
                    if ($tooltip.attr("id") == v.__namespace)
                    {
                        v._$origin.data('marker-hint-opened', true);
                        return false;
                    }
                });
            }
        });

        $(document).on('touchstart touchmove', '.tooltip-popover-for-mobiles.tooltipster-sidetip', function(e) {
            e.stopPropagation();
            $("html").addClass("tooltip-popover-for-mobiles-opened");
        });

        $(document).on("touchstart", ".tooltip-popover-for-mobiles-opened body", function(e){
            $("html").removeClass("tooltip-popover-for-mobiles-opened");
        });

        $(document).on("keyup", function (e) {
            if (e.keyCode == 27) {
                var instances = $.tooltipster.instances();
                $.each(instances, function(i, instance){
                    instance.close();
                });
            }
        });

        $(window).on("scroll", function (e) {
            var instances = $.tooltipster.instances();
            $.each(instances, function(i, instance){
                if (instance._$origin.tooltipster('option', 'theme')[0].indexOf("tooltipster-popover") < 0)
                {
                    instance.close();
                }
            });
        });
    }

    var options_default = {
        interactive: false,
        interactiveTolerance: 200,
        animationDuration: 200,
        delay: [50, 50],
        distance: 5,
        side: "top",
        maxWidth: 350,
        contentAsHTML: true,
        repositionOnScroll: false,
        updateAnimation: false,
        theme: ["tooltipster-default"],
        functionInit: function (instance, helper) {
            var $origin = $(helper.origin),
                dataOptions = $origin.attr('data-tooltipster');

            if (dataOptions) {
                dataOptions = JSON.parse(dataOptions);
                if (typeof dataOptions["theme"] !== "undefined")
                {
                    dataOptions["theme"] = dataOptions["theme"] + " tooltipster-default";
                }
                $.each(dataOptions, function (name, option) {
                    instance.option(name, option);
                });
            }
            $(this).attr("data-tooltip-text", $(this).attr("title"));
        },
        functionBefore: function (instance, helper) {
            $(helper.origin).addClass("tooltip-active");
            if ($(helper.origin).hasClass("tooltip-popover-for-mobiles"))
            {
                $("html").addClass("tooltip-popover-for-mobiles-opened");
            }
            if ($(helper.origin).data("tooltip-url")) {
                if ($(helper.origin).data('ajax') !== 'cached') {
                    $(helper.origin).tooltipster('content', "Загрузка...");
                    $.ajax({
                        type: 'get',
                        cache: false,
                        url: $(helper.origin).data("tooltip-url"),
                        success: function (data) {
                            $(helper.origin).tooltipster('content', data);
                            $(helper.origin).data('ajax', 'cached');
                            $(instance.elementTooltip()).find(".tooltip-hide").on("click.tooltip-hide", function (e) {
                                e.preventDefault();
                                instance.close();
                            });
                        }
                    });
                }
            }
            else {
                if ($(helper.origin).data("title")) {
                    $(helper.origin).tooltipster('content', $(helper.origin).data("title"));
                }
                else if ($(helper.origin).attr("data-tooltip-text")) {
                    $(helper.origin).tooltipster('content', $(helper.origin).attr("data-tooltip-text"));
                }
            }
            var instances = $.tooltipster.instances();
            $.each(instances, function(i, instance){
                instance.close();
            });
        },
        functionReady: function (instance, helper) {
            if ($(instance.elementOrigin()).filter(".tooltip-disabled").length)
            {
                $(instance.elementTooltip()).addClass("hidden");
            }
            $(instance.elementTooltip()).find(".tooltip-hide").off("click.tooltip-hide").on("click.tooltip-hide", function (e) {
                e.preventDefault();
                instance.close();
            });
            if (typeof $(helper.origin).data("active-index") !== "undefined")
            {
                $(instance.elementTooltip()).find(".menu-list li").eq($(helper.origin).data("active-index")).addClass("active").siblings().removeClass("active");
            }
        },
        functionAfter: function (instance, helper) {
            $(helper.origin).removeClass("tooltip-active");
            if ($(helper.origin).hasClass("tooltip-popover-for-mobiles"))
            {
                $("html").removeClass("tooltip-popover-for-mobiles-opened");
            }
        },
    };

    if (typeof $o === "undefined") $o = $('.tooltip');

    $.extend(options_default, options);

    if ($(".touchevents").length) $.extend(options_default, {trigger: "click"});
    if (typeof callback !== "undefined") $.extend(options_default, {functionAfter: callback});
    $o.not('.tooltip-inited').each(function () {
        var options_current = $.extend({}, options_default);

        if ($(this).hasClass("tooltip-popover"))
        {
            options_current["functionPosition"] = function(instance, helper, position){
                var gridBcr = helper.origin.getBoundingClientRect(),
                    $clone = $(helper.tooltipClone).find('.tooltipster-box'),
                    arrowSize = parseInt($clone.css('margin-left'));
                var left_coord = gridBcr.left;
                var top_coord = position.coord.top;
                var dx = 0;
                var dy = 0;
                if ($(helper.origin).hasClass("tooltip-popover-right"))
                {
                    left_coord = gridBcr.right - $clone.outerWidth();
                }
                if ($(helper.origin).hasClass("tooltip-popover-margin"))
                {
                    dx = 15;
                    dy = -40;
                    if ($(helper.origin).hasClass("tooltip-popover-right"))
                    {
                        dx = -1*dx;
                    }
                    if (position.side == "top")
                    {
                        dy = -1*dy;
                    }
                }
                left_coord += dx;
                top_coord += dy;
                // override these
                position.coord = {
                    // move the tooltip so the arrow overflows the grid
                    left: left_coord - arrowSize,
                    top: top_coord
                };

                return position;
            };
            options_current["side"] = "bottom";
            options_current["trigger"] = "custom";
            if ($(".touchevents").length)
            {
                options_current["triggerOpen"] = {
                    tap: true
                };
                options_current["triggerClose"] = {
                    tap: true,
                    scroll: true
                };
            }
            else
            {
                options_current["triggerOpen"] = {
                    click: true
                };
                options_current["triggerClose"] = {
                    click: true,
                    scroll: true
                };
            }
            options_current["interactive"] = true;
            options_current["viewportAware"] = false;
            options_current["distance"] = 5;
            options_current["theme"] = "tooltipster-popover";
            var $ds = $(this).closest(".dropdown-selection");
            if ($ds.length && $ds.find(".dropdown-selection-content").length)
            {
                $.extend(options_current, {content: $ds.find(".dropdown-selection-content")});
            }
            $ds.on("click", function(e){
                e.stopPropagation();
            });
        }
        if ($(this).hasClass("tooltip-notouch")) {
            options_current["trigger"] = "custom";
            if (!Modernizr.touchevents) {
                options_current["triggerOpen"] = {
                    mouseenter: true,
                    touchstart: false
                };
                options_current["triggerClose"] = {
                    mouseleave: true,
                    originClick: false,
                    touchleave: false
                };
            }
        }
        if ($(this).hasClass("tooltip-popover-for-mobiles"))
        {
            options_current["theme"] = "tooltipster-popover tooltip-popover-for-mobiles";
        }
        if ($(this).data("tooltip-trigger")) $.extend(options_current, {trigger: $(this).data("tooltip-trigger")});
        if ($(this).is("input,textarea") && !$(this).data("tooltip-disable-input-behavior")) {
            $.extend(options_current, {trigger: "custom", autoClose: false});
            $(this).on("focus", function () {
                $(':input.tooltip-inited').not(this).tooltipster('hide');
                $(this).tooltipster('show');
            });
        }
        if ($(this).data("tooltip-url")) $.extend(options_current, {content: "Загрузка..."});
        if (typeof $(this).data("interactive") !== "undefined") $.extend(options_current, {interactive: $(this).data("interactive")});
        $(this).tooltipster(options_current).addClass("tooltip-inited");
    });
}



/*

 Input Masks

 */

function mask_init() {

    if ($().keyfilter)  {

        // Для русский и латинских имён, отчеств и фамилий
        $(".mask-name").filter(":not(.mask-inited)").keyfilter(/[\-a-zA-Zа-яА-ЯёЁ ]/).addClass("mask-inited");

        // Для положительного целого, с удалением нецифровых символов
        $(".mask-pint").filter(":not(.mask-inited)").keyfilter(/[0-9]/)
            .on("keydown", function(){
                $(this).data("value-prev", $(this).val());
            })
            .on("keyup", function(){
                if ($(this).data("value-prev") == $(this).val()) return;
                var val = $(this).val();
                val = val.replace(/\D/g, "");
                $(this).val(val);
            }).addClass("mask-inited");

        // Для десятичных чисел без знака
        $(".mask-float").filter(":not(.mask-inited)").keyfilter(/[0-9\.]/).addClass("mask-inited");

        // Для категорийности с заменой ошибочно введенных не на той раскладке, не в том регистре
        $(".mask-complexity").filter(":not(.mask-inited)")
            .keyfilter(/[н\/кАБABF\,\<1-3\*\!\?\-]/i)
            .on("keydown", function(){
                $(this).data("value-prev", $(this).val());
            })
            .on("keyup", function(){
                if ($(this).data("value-prev") == $(this).val()) return;
                var val = $(this).val();
                val = val.replace(/[аaf]/ig, "А").replace(/[бb\,\<]/ig, "Б").replace("нк", "н/к");
                $(this).val(val);
            })
            .addClass("mask-inited");

        // Для координат
        $(".mask-latlng").filter(":not(.mask-inited)")
            .keyfilter(/[0-9\.\-\, ]/)
            .on("keydown", function(){
                $(this).data("value-prev", $(this).val());
            })
            .on("keyup", function(){
                if ($(this).data("value-prev") == $(this).val()) return;
                var val = $(this).val();
                var count_dot = (val.match(/[,\.]/g) || []).length;
                if (count_dot < 4) {
                    var pattern = /^\s*(\-?\d+)([,\.](\d+))?\s*[,\s]\s*(\-?\d+)([,\.](\d+))?\s*$/;
                    var position = getCaretPosition($(this)[0]);
                    if (pattern.test(val)) {
                        val = val.replace(pattern, "$1$2 $4$5").replace(",", ".").replace(" ", ", ");
                        $(this).val(val);
                        setCaretPosition($(this)[0], position);
                    }
                }
            })
            .addClass("mask-inited");
    }

    $(".number-format").filter(":not(.number-format-inited)").number(true, 2, ",", " ").addClass("number-format-inited");

}


/*

 Form Validation

 */

function validate_init()
{
    if (!$.validator) return;

    if (!$("html").hasClass("validate-inited")) {

        $("html").addClass("validate-inited");

        $(document).on("reset", ".form-validate", function () {
            $(this).find(".form__item, :input").removeClass("error");
            setTimeout(function () {
                $(":input").trigger("change");
                $(".checkbox-plain-js input[type='checkbox'], .checkbox-plain-js input[type='radio']").trigger("change-pseudo");
            }, 50);
        })

        $.validator.setDefaults({
        });

        $.extend($.validator.messages, {
            required: "Обязательное поле.",
            email: "Некорректный E-mail.",
            phonecomplete: "Неполный номер телефона.",
            latlng: "Некорректные координаты.",
            complexity: "Некорректный формат.",
            digits: "Только цифры.",
        });

        $.validator.addMethod( "lessThanEqual", function( value, element, param ) {
            var target = $( param );

            if ( this.settings.onfocusout && target.not( ".validate-lessThanEqual-blur" ).length ) {
                target.addClass( "validate-lessThanEqual-blur" ).on( "blur.validate-lessThanEqual", function() {
                    $( element ).valid();
                } );
            }

            return !target.val().length || value <= target.val();
        }, "Please enter a lesser value." );

        $.validator.addMethod( "greaterThanEqual", function( value, element, param ) {
            var target = $( param );

            if ( this.settings.onfocusout && target.not( ".validate-greaterThanEqual-blur" ).length ) {
                target.addClass( "validate-greaterThanEqual-blur" ).on( "blur.validate-greaterThanEqual", function() {
                    $( element ).valid();
                } );
            }

            return !target.val().length || value >= target.val();
        }, "Please enter a greater value." );

        $.validator.addMethod("email", function( value, element ) {
            return this.optional( element ) || /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value ); // /^[a-zA-Z\-\._]+@[a-z0-9\-]+(\.[a-z0-9\-]+)*\.[a-z]+$/i
        });

        $.validator.addMethod("latlng", function( value, element ) {
            var is_lat_lng = /^\-?\d{1,2}(\.\d+)?,\s*\-?\d{1,3}(\.\d+)?$/.test( value );
            // var in_range = false;
            // if (is_lat_lng) {
            //     lat_lng_arr = value.split(/\s*,\s*/);
            // }
            return this.optional( element ) || (is_lat_lng/* && in_range*/);
        });

        $.validator.addMethod("complexity", function( value, element ) {
            var value = $.trim(value);
            var is_complexity = /^[н\/кАБABF\,\<1-3\*\!\?\-]+$/i.test( value );
            //var is_complexity = value == "н/к" || /^[1-3][АБ]*?(?:([\*\?\!])(?!.*\1)){0,3}$/i.test( value ); // [\*\?\!]{1,3}
            return this.optional( element ) || (is_complexity);
        });

        $.validator.addMethod("phonecomplete", function( value, element ) {
            return this.optional( element ) || (value.replace(/\D/, "").length >= 7 && $(element).inputmask('isComplete'));
        });

        $.validator.addMethod("maskcomplete", function( value, element ) {
            return this.optional( element ) || (value.replace(/\D/, "").length >= 7 && $(element).inputmask('isComplete'));
        });

        $.validator.addMethod("password", function( value, element ) {
            return this.optional( element ) || value.length >= 8;
        }, "Должно быть не меньше 8 символов.");

        $.validator.addMethod("passwordconfirm", function( value, element ) {
            var $password = $($(element).data("rule-passwordconfirm-password"));
            return this.optional( element ) || !$password.length || !$password.val() || value === $password.val();
        }, "Пароль не совпадает с подтверждением.");

        $.validator.addMethod("emailconfirm", function( value, element ) {
            var $email = $($(element).data("rule-emailconfirm-password"));
            return this.optional( element ) || !$email.length || !$email.val() || value === $email.val();
        }, "E-mail должны совпадать.");

        $.validator.addMethod("numberRange", function(value, element) {
            return this.optional(element) || /^[1-9][0-9]*\D+([1-9][0-9]*)?$/.test(value);
        }, "Укажите диапазон или первое значение." );

        $.validator.addMethod("numberRangeDirection", function(value, element) {
            var values = value.split(/\D+/);
            var result = true;
            if (values.length > 1)
            {
                if (values[0] && values[1] && values[0]*1 >= values[1]*1)
                {
                    result = false;
                }
            }
            return this.optional(element) || result;
        }, "Второе число должно быть больше." );

        $.validator.addMethod("checksmscode", function( value, element ) {
            return this.optional(element) || $(element).data("smscodevalid");
        });

        $.each($.validator.methods, function (key, value) {
            $.validator.methods[key] = function () {
                if(arguments.length > 0) {
                    arguments[0] = $.trim(arguments[0]);
                }
                return value.apply(this, arguments);
            };
        });

        $(document).on("keyup blur change check-form", ".form-disabled-until-valid :input", function () {
            var $form = $(this).closest(".form-disabled-until-valid");
            var $button = $form.find(".disabled-until-valid");
            $button.prop('disabled', !$form.validate().checkForm());
        });

        $(document).on("change change-checkbox-valid", "input[type='checkbox'], input[type='radio']", function () {
            var $form = $(this).closest("form");
            var validator = $form.data("validator");
            if (validator) $(this).valid();
        });
    }

    var $forms = $(".form-validate").not(".form-validate-inited");
    $forms.each(function(){
        var validator = $(this).validate({
            onkeyup: false,
            normalizer: function( value ) {
                return $.trim( value );
            },
            errorClass: 'form__error',
            validClass: 'valid',
            errorElement: 'div',
            highlight: function(element, errorClass, validClass) {
                $(element).addClass('error').removeClass('valid');
            },
            unhighlight: function(element, errorClass, validClass) {
                $(element).addClass('valid').removeClass('error');
            },
            errorPlacement: function(error, element) {
                $(element).closest(".form__item-field").append(error);
            },
            submitHandler: function(form, e) {
                $(form).trigger("submit.valid");
            }
        });
        $(this).addClass("form-validate-inited");
    });

    $(".form-disabled-until-valid").find(":input").first().trigger("check-form");

}


/*

 Hide/Show/Enable/Disable depending on other elements state

 */

function depends_on_init()
{
    $('.depends-on').not(".depends-on-inited").each(function(){
        var options = null;
        var actions = {hide: false};
        if ($(this).hasClass("depends-on-toggle-class"))
        {
            actions = {
                hide: false,
                onEnable: function(e, $subject){
                    $subject.removeClass('hidden-absolute');
                },
                onDisable: function(e, $subject){
                    $subject.addClass('hidden-absolute');
                }
            };
        }
        var options_current = $(this).data("depends-on-options");
        var actions_current = $(this).data("depends-on-actions");
        if (options_current)
        {
            options = options_current;
        }
        if (actions_current)
        {
            actions = actions_current;
        }
        $(this).dependsOn(options, actions);
        $(this).addClass("depends-on-inited");
    });
}
/*

Notifications

 */

function notification_init() {
    if (typeof Noty === "undefined") return;

    if (!$("html").hasClass("noty-inited")) {

        $("html").addClass("noty-inited");

        Noty.overrideDefaults({
            theme: 'pereval',
            closeWith: ['button']
        });

        $.ajax({
            url: "/notifications/get",
            type: "get",
            dataType: 'json',
            cache: false,
            contentType: false,
            processData: false,
            beforeSend: function () {
            },
            complete: function (response) {
            },
            success: function (response) {
                if (response.id && response.text) {
                    setTimeout(function () {
                        var queue = typeof response.id !== 'undefined' ? response.id : 'ajax-notification';
                        var type = typeof response.type !== 'undefined' ? response.type : 'notification';
                        var timeout = typeof response.timeout !== 'undefined' ? response.timeout : null;
                        var n = new Noty({
                            type: type,
                            text: response.text,
                            timeout: timeout,
                            expires: response.expires,
                            closeWith: [],
                            killer: queue,
                            queue: queue
                        }).on('onClose', function () {
                            if (!Cookies.get(queue)) {
                                var params = {};
                                params.expires = this.options.expires;
                                Cookies.set(queue, true, params);
                            }
                        });
                        n.show()
                    }, response.delay);
                }
            },
            error: function (jqXHR) {
            }
        });


        $(document).on("click", ".js-noty-close", function (e) {
            var queue = $(this).attr("data-noty-queue");
            if (queue) {
                Noty.closeAll(queue);
            }
            else {
                Noty.closeAll();
            }
        });
    }
}


/*
Cookie Init
*/

function cookie_init() {
    if (typeof Cookies === "undefined") return;

    $(document).on("click change", ".js-cookie-set", function (e) {
        let options = {};
        let optionsData = $(this).data('cookie');
        const nameAttr = $(this).attr('name');
        if (nameAttr) {
            options.name = nameAttr;
        }
        options = $.extend(true, {}, options, optionsData);
        let name = '';
        let params = {};
        if (typeof options.name !== 'undefined') {
            name = options.name;
        }
        if (typeof options.expires !== 'undefined') {
            params.expires = options.expires;
        }
        let value = true;
        const valueAttr = $(this).attr('value');
        if (valueAttr) {
            value = valueAttr;
        }
        if (['checkbox'].includes($(this).attr('type')) && !$(this).prop('checked')) {
            value = '';
        }
        if (name) {
            Cookies.set(name, value, params);
        }
    });
}


/*
 Loaders (for buttons)
 */

function loader_init() {
    $btn = $(".loader-on-page-load");
    loader_add($btn);
    $btn.prop("disabled", true);
}

function loader_add($o, color) {
    var loader = '<span class="loader"><svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\
    width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">\
        <path fill="#fff" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">\
        <animateTransform attributeType="xml"\
            attributeName="transform"\
            type="rotate"\
            from="0 25 25"\
            to="360 25 25"\
            dur="0.6s"\
            repeatCount="indefinite"/>\
        </path>\
        </svg></div>';
    $o.wrapInner("<div class='btn__inner'>").append(loader).addClass("loading");
}

function loader_remove($o) {
    $o.find(".btn__inner").children().unwrap();
    $o.removeClass("loading").find("> .loader").remove();
}


/*

Tabs

 */

function tabs_init() {
    $(document).on("click", ".tabs-js a[href^='#'], .tabs-js a[data-tab-selector^='#']", function (e, eparams) {
        if ($(this).hasClass("tabs-js-ignore")) {
            return true;
        }
        e.preventDefault();
        var $o = $($(this).attr("data-tab-selector"));
        if (!$o.length) {
            $o = $($(this).attr("href"));
        }
        var $tabs = $(this).closest(".tabs-js");
        if ($o.length) {
            if ($(this).closest(".tabs-js-toggle").length) {
                $o.toggleClass("active");
                if ($o.hasClass("active")) $(this).parent().addClass("active");
                else $(this).parent().removeClass("active");
            }
            else {
                $o.addClass("active");
                if ($o.hasClass("active")) $(this).parent().addClass("active");
            }

            $(this).parent().siblings().removeClass("active");
            $o.siblings(".tab-pane").removeClass("active");
            if ($o.hasClass("active")) $o.closest(".tab-content-change-height").css("height", 0).css("height", $o.outerHeight());
            else $o.closest(".tab-content-change-height").css("height", 0);
            if ($(this).closest(".tabs-js").hasClass("tabs-js-hash-change")) {
                if (typeof eparams === "undefined" || typeof eparams.nohash === "undefined" || !eparams.nohash) {
                    location_hash_update($(this).attr("href"));
                }
            }
            $o.filter(".active").find(":input:first").trigger("check-form");
            $o.siblings(".tab-pane").find(":input.error").each(function () {
                var $form = $(this).closest("form");
                var validator = $form.data("validator");
                if (validator) $(this).valid();
            });
            $(window).trigger("scroll.fixed-hscroll");

            $ostt = $(this).closest(".tabs-js-onclick-scroll-to-tabs");
            if ($ostt.length) {
                $("html, body").stop(true, true).animate({scrollTop: $ostt.offset().top - $(".header").outerHeight() + $ostt.data("tabs-scroll-offset")}, 500);
            }
            tabs_update_pointer($(this).closest(".tabs-js"));
        }
    });

    tabs_scroll_init();
    $(document).ajaxStop(function () {
        tabs_scroll_init();
    });

    if (location.hash && location.hash.length > 1) {
        if ($(location.hash).filter(".tab-pane").length) {
            $(".tabs-js a[href='" + location.hash + "']").trigger("click");
        }
        else if ($(".tab-pane").find(location.hash).length) {
            $(".tabs-js a[href='#" + $(".tab-pane").find(location.hash).closest(".tab-pane").attr("id") + "']").trigger("click", {nohash: true});
        }
    }

    tabs_update_pointer($(".tabs"));
    $(".tabs-fixed-center a").on("click-tabs-fixed-center", function (e) {
        tabs_update_pointer($(this).closest(".tabs"));
    });
    $(window).on("resize", function () {
        tabs_update_pointer($(".tabs"));
        $(".tabs-fixed-center-scroll").trigger("scroll.emulate");
    });
}

function tabs_scroll_init() {
    $(".tabs-fixed-center-scroll").on("scroll scroll.emulate", function (e) {
        var $tabs = $(this).closest(".tabs-fixed-center");
        if ($(this).scrollLeft() <= 0) {
            $tabs.addClass("scroll-in-start");
        }
        else {
            $tabs.removeClass("scroll-in-start");
        }
        if ($(this).scrollLeft() + $(this).width() >= $(this)[0].scrollWidth - 1) {
            $tabs.addClass("scroll-in-end");
        }
        else {
            $tabs.removeClass("scroll-in-end");
        }
    }).trigger("scroll.emulate");

    $(".tabs-fixed-center a").on("click click-tabs-fixed-center", function (e) {
        var $tabs = $(this).closest(".tabs-fixed-center");
        var $ul = $(this).closest(".tabs-fixed-center-scroll");
        var scroll_to_val = $(this).parent()[0].offsetLeft - $tabs.width() / 2 + $(this).outerWidth() / 2;
        $ul.stop(true, true).animate({scrollLeft: scroll_to_val}, 300);
    });

    $(".tabs-fixed-center li.active a").trigger("click-tabs-fixed-center");
}

function tabs_update_pointer($tabs) {
    $tabs.each(function () {
        var $pointer = $(this).find(".tabs-js-pointer");
        var $scroll = $pointer.closest(".tabs__scroll");
        var scroll_offset = 0;
        if ($pointer.length) {
            if ($scroll.length) {
                scroll_offset = $scroll[0].scrollLeft;
            }
            $pointer.css({
                left: $(this).find("li.active").offset().left - $(this).offset().left + scroll_offset,
                width: $(this).find("li.active").outerWidth(),
            }).addClass("active");
        }
    });
}


/*

Gallery and Modal Popups

 */

function fancybox_init(context) {

    if (!$("html").hasClass("fancybox-inited")) {

        $("html").addClass("fancybox-inited");

        $.fancybox.defaults.i18n.ru = {
            CLOSE: "Закрыть",
            NEXT: "Далее",
            PREV: "Назад",
            ERROR: "Загрузка контента не удалась. <br/> Пожалуйста, попробуйте ещё раз.",
            PLAY_START: "Начать слайдшоу",
            PLAY_STOP: "Приостановить слайдшоу",
            FULL_SCREEN: "Во весь экран",
            THUMBS: "Предпросмотр",
            DOWNLOAD: "Скачать",
            SHARE: "Поделиться",
            ZOOM: "Масштаб"
        };
        $.fancybox.defaults.lang = $('html').attr('lang');

        if ($().fancybox) {
            $.fancybox.options_default = {
                //baseClass: "",
                slideShow: false,
                //hash: false,
                loop: true,
                idleTime: 10,
                margin: [44, 0],
                gutter: 50,
                keyboard: true,
                animationEffect: "zoom",
                arrows: true,
                infobar: true,
                toolbar: true,
                backFocus: false,
                buttons: [
                    'slideShow',
                    'fullScreen',
                    'thumbs',
                    'close'
                ],
                thumbs: {
                    autoStart: false,
                    hideOnClose: true
                },
                caption: function (instance, item) {
                    if (item.type === 'image') {
                        return fancybox_append_download_link(item.src, $(this).attr('data-caption'), '', instance, item);
                    }
                }
            };

            $.fancybox.options_modal = {
                slideShow: false,
                hash: false,
                clickContent: false,
                clickSlide: false,
                clickOutside: false,
                keyboard: false,
                mobile: {
                    clickSlide: false
                },
                ajax: {
                    settings: {
                        cache: false
                    }
                },
                baseClass: "fancybox-container--popup",
                trapFocus: false,
                autoFocus: false,
                touch: false,
                popup_default: true,
                afterLoad: function (instance, current) {
                    current.$content.wrap("<div>");
                    if (current.$content.hasClass('fancybox-content')) {
                        current.$content.removeClass('fancybox-content').parent().addClass('fancybox-content');
                    }
                },
            };

            $.fancybox.defaults.beforeLoad = function (instance, current) {
                var tooltips = $.tooltipster.instances();
                $.each(tooltips, function (i, tooltip) {
                    tooltip.close();
                });
            };
            //$.fancybox.defaults.hash = false;
            $.fancybox.defaults.errorTpl = '<div><div class="panel panel--compact"><div class="panel__content text-align-center"><p>Произошла ошибка при загрузке. <br /> Попробуйте ещё раз.</p></div></div></div>';
        }

        $('body').on('mousewheel', function (e) {
            if ($(".fancybox-is-zoomable").length) {
                e.preventDefault();
                var instance = $.fancybox.getInstance();
                if ($(".fancybox-is-zoomable").length && instance.canPan() && e.deltaY > 0) {
                    instance.scaleToFit();
                } else if ($(".fancybox-can-zoomIn").length && instance.isScaledDown() && e.deltaY < 0) {
                    instance.scaleToActual(e.clientX, e.clientY);
                }
            }
        });

        /*$(document).on("keyup", ".fancybox-container :input", function (e) {
            if (e.keyCode == 27) {
                $.fancybox.getInstance().close();
            }
        });*/

        $(document).off("click.fb-start");

        $("html").addClass("fancybox-inited");
    }

    if (jQuery().fancybox) {

        var options = $.fancybox.options_default;

        $fancybox_links_all = $("[data-fancybox]", context).not(".fancybox-inited");

        $fancybox_links = $fancybox_links_all.not("[data-type='ajax'], [data-type='inline']");
        fancybox_links_by_group = [];
        groups = [];
        $fancybox_links.each(function () {
            var group = $(this).attr("data-fancybox");
            if (!group) group = "";
            if ($.inArray(group, groups) < 0) groups.push(group);
        });
        for (group in groups) {
            options_current = $.extend(true, {}, options);

            var $items = $("[data-fancybox='" + groups[group] + "']", context).not("[data-type='ajax'], [data-type='inline']").off("click.fb-start").removeClass('fancybox-inited');

            //var $items = $fancybox_links.filter("[data-fancybox='" + groups[group] + "']");
            var $first = $items.eq(0);
            if (typeof $first.attr("data-fancybox-loop") !== "undefined") {
                options_current["loop"] = $first.data("fancybox-loop");
            }
            $items.fancybox(options_current).addClass("fancybox-inited");
        }

        $fancybox_links_ajax = $fancybox_links_all.filter("[data-type='ajax'], [data-type='inline']");
        $fancybox_links_ajax.each(function () {
            $(this).fancybox($.fancybox.options_modal);
        }).addClass("fancybox-inited");
    }
}


function fancybox_append_download_link(src, caption, label, instance, item) {
    if (typeof caption === "undefined") caption = "";
    if (typeof label === "undefined" || !label) label = "Скачать";
    // Добавляем копирайт на фото с сайта caucatalog.ru по просьбе/требованию М.Голубева
    if (/caubasephotos1\.narod\.ru/i.test(src) || /caubasephotos2\.narod\.ru/i.test(src) || /caucatalog\.ru/i.test(src)) {
        caption += ' &copy;&nbsp;<a href="https://web.archive.org/web/20241008144813/https://caucatalog.ru/" target="_blank">caucatalog.ru</a>';
    }
    $caption = $('<div>').html(caption);
    $caption.children().children().add($caption).each(function(){
        var html = $(this).html();
        $(this).html(html.replace(/^(\s*<br( \/)?>)*|(<br( \/)?>\s*)*$/g, '')); // remove all <br> in start and end
    });
    caption = $('<div>').append($caption.unwrap());
    link = '<a class="fancybox-download" href="' + src + '" target="_blank" download><i class="fa fa-download"></i><span class="fancybox-download__label">'+label+'</span></a>';
    caption = caption.html();
    link += '<div class="fancybox-caption__inner">' + caption + '</div>';
    return link;
}


/*

Yandex Map UI

 */

function map_load() {
    console.log('map_load called');
    if ($(".js-map").not('.js-map-on-scroll').length && !$("html").hasClass("maps-api-loaded")) {
        $("html").addClass("maps-api-loaded");
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.id = 'api-maps-yandex';
        script.src = '//web.archive.org/web/20241008144813/https://api-maps.yandex.ru/2.1/?lang=ru-RU&onload=map_init';// 2.1.64
        document.head.appendChild(script);
        $("#api-maps-yandex").attr("data-turbolinks-permanent", true);
    }
    else if ($("#api-maps-yandex").length) {
        map_init();
    }
}

function map_init() {
    console.log('map_init called');
    if (typeof ymaps === "undefined") {
        return;
    }
    ymaps.ready({
        require: ['Map'],
        successCallback: function (ym) {
            if (!window['ymaps_inited_once']) {
                ymaps.layout.storage.add('app#markerAccuracy', ymaps.templateLayoutFactory.createClass($("#tmpl-map-marker-accuracy").html()));
                ymaps.layout.storage.add('app#marker', ymaps.templateLayoutFactory.createClass($("#tmpl-map-marker").html()));
                ymaps.layout.storage.add('app#pmarker', ymaps.templateLayoutFactory.createClass($("#tmpl-map-pmarker").html()));

                // Слои карты
                var providers = {
                    'osm_topo': {
                        tileUrlTemplate: function(tileNumber, tileZoom){
                            var subdomains = ['a','b','c'];
                            var url = '//%d.tile.opentopomap.org/%z/%x/%y.png'; // 'https://tile.openstreetmap.org/%z/%x/%y.png',
                            var ymax = 1 << tileZoom;
                            var y = ymax - tileNumber[1] - 1;
                            y = Math.pow(2, tileZoom) - y - 1;
                            url = url
                                .replace('%d', subdomains[(tileNumber[0] + tileNumber[1]) % subdomains.length])
                                .replace('%z', tileZoom)
                                .replace('%x', tileNumber[0])
                                .replace('%y', y);
                            return url;
                        },
                        options: {
                            projection: ymaps.projection.sphericalMercator,
                            tileTransparent: true
                        }
                    },
                    'osm': {
                        tileUrlTemplate: function(tileNumber, tileZoom){
                            var subdomains = ['a','b','c'];
                            var url = 'https://tile.openstreetmap.org/%z/%x/%y.png';
                            var ymax = 1 << tileZoom;
                            var y = ymax - tileNumber[1] - 1;
                            y = Math.pow(2, tileZoom) - y - 1;
                            url = url
                                .replace('%d', subdomains[(tileNumber[0] + tileNumber[1]) % subdomains.length])
                                .replace('%z', tileZoom)
                                .replace('%x', tileNumber[0])
                                .replace('%y', y);
                            return url;
                        },
                        options: {
                            projection: ymaps.projection.sphericalMercator,
                            tileTransparent: true
                        }
                    },
                    'google': {
                        tileUrlTemplate: function(tileNumber, tileZoom){
                            // lyrs params:
                            // h = roads only
                            // m = standard roadmap
                            // p = terrain
                            // r = somehow altered roadmap
                            // s = satellite only
                            // t = terrain only
                            // y = hybrid
                            var url = 'https://mt%d.google.com/vt/lyrs=s&x=%x&y=%y&z=%z';
                            var ymax = 1 << tileZoom;
                            var y = ymax - tileNumber[1] - 1;
                            y = Math.pow(2, tileZoom) - y - 1;
                            url = url
                                .replace('%d', (tileNumber[0] + tileNumber[1]) % 3 + 1)
                                .replace('%z', tileZoom)
                                .replace('%x', tileNumber[0])
                                .replace('%y', y);
                            return url;
                        },
                        options: {
                            projection: ymaps.projection.sphericalMercator,
                            tileTransparent: false,
                            notFoundTile: null
                        }
                    },
                    'bing': {
                        tileUrlTemplate: function(tileNumber, tileZoom){
                            var url = 'https://ecn.{subdomain}.tiles.virtualearth.net/tiles/a{quadkey}.jpeg?g=5864&mkt=ru&shading=hill';

                            var subdomains = ['t0','t1','t2','t3'],
                                quadDigits = [],
                                i = tileZoom,
                                digit,
                                mask,
                                quadKey;
                            // borrowed directly from OpenLayers
                            for (; i > 0; --i) {
                                digit = '0';
                                mask = 1 << (i - 1);
                                if ((tileNumber[0] & mask) != 0) {
                                    digit++;
                                }
                                if ((tileNumber[1] & mask) != 0) {
                                    digit++;
                                    digit++;
                                }
                                quadDigits.push(digit);
                            }
                            url = url
                                .replace('{subdomain}', subdomains[(tileNumber[0] + tileNumber[1]) % subdomains.length])
                                .replace('{quadkey}', quadDigits.join(""));
                            return url;
                        },
                        options: {
                            projection: ymaps.projection.sphericalMercator,
                            tileTransparent: false
                        }
                    },
                    'genshtab': {
                        tileUrlTemplate: function(tileNumber, tileZoom){
                            var types = ['001m', '1000', '500'];
                            var type = types[0];
                            if (tileZoom > 10) {
                                type = types[1];
                            }
                            if (tileZoom > 10) {
                                type = types[1];
                            }
                            if (tileZoom > 13) {
                                type = types[2];
                            }
                            var url = 'https://tiles.nakarte.me/topo'+type+'/%z/%x/%y';
                            var ymax = 1 << tileZoom;
                            var y = ymax - tileNumber[1] - 1;
                            //y = Math.pow(2, tileZoom) - y - 1;
                            url = url
                                .replace('%z', tileZoom)
                                .replace('%x', tileNumber[0])
                                .replace('%y', y);
                            return url;
                        },
                        options: {
                            projection: ymaps.projection.sphericalMercator,
                            tileTransparent: false,
                            //notFoundTile: '/build/img/256x256-ya-map.png'
                        }
                    },
                    'ggc': {
                        tileUrlTemplate: function(tileNumber, tileZoom){
                            var types = ['2000', '1000', '500', '250'];
                            var type = types[0];
                            if (tileZoom > 11) {
                                type = types[1];
                            }
                            if (tileZoom > 13) {
                                type = types[2];
                            }
                            if (tileZoom > 14) {
                                type = types[3];
                            }
                            var url = 'https://tiles.nakarte.me/ggc'+type+'/%z/%x/%y';
                            var ymax = 1 << tileZoom;
                            var y = ymax - tileNumber[1] - 1;
                            //y = Math.pow(2, tileZoom) - y - 1;
                            url = url
                                .replace('%z', tileZoom)
                                .replace('%x', tileNumber[0])
                                .replace('%y', y);
                            return url;
                        },
                        options: {
                            projection: ymaps.projection.sphericalMercator,
                            tileTransparent: false,
                            //notFoundTile: '/build/img/256x256-ya-map.png'
                        },
                    },
                };

                $.each(providers, function(provider_name, provider_object) {
                    var Layer = function () {
                        var layer = new ymaps.Layer(provider_object.tileUrlTemplate, provider_object.options);
                        return layer;
                    };
                    ymaps.layer.storage.add(provider_name + '#layer', Layer);
                    var layers = [provider_name + '#layer'];
                    if ($.inArray(provider_name, ["genshtab", "ggc"]) !== -1) {
                        layers.unshift('yandex#map');
                    }
                    if ($.inArray(provider_name, ["osm_topo", "osm", "genshtab", "ggc"]) == -1) {
                        layers.push('yandex#skeleton');
                    }
                    var mapType = new ymaps.MapType(provider_name + '#map', layers);
                    ymaps.mapType.storage.add(provider_name + '#map', mapType);
                });

                $(document).on("click change", ".js-map-objects-update", function (e) {
                    if ($(this).data('update-event-type') === e.type) {
                        setTimeout(function(){ // TODO подумать как избавится от таймаута (при установке куки при клике на чекбоксы в настройках карты)
                            //$('.js-map').eq(0).data('map').events.fire('objectsUpdate');
                            const $map = $('.js-map');
                            map_update_objects($map.data('map'), $map.data('objects_collection'), null, true);
                        }, 100);
                    }
                });

                window['ymaps_inited_once'] = true;
            }

            // Инициализация
            $('.js-map').not('.js-map-on-scroll').not('.js-map--inited').each(function () {
                var $map = $(this);

                var type = 'bing#map';

                var point = false;
                if ($map.data("point")) {
                    point = $map.data("point").split(",");
                }

                var center = false;
                if ($map.data("center")) {
                    center = $map.data("center").split(",");
                }

                var zoom = $(this).data("zoom");

                var cookie_map_zoom = Cookies.get("map_zoom");
                var cookie_map_center = Cookies.get("map_center");
                var cookie_map_type = Cookies.get("map_type");
                if (!center && cookie_map_center)
                {
                    var cookie_map_center_arr = cookie_map_center.split(",");
                    if ($.isNumeric(cookie_map_center_arr[0]) && $.isNumeric(cookie_map_center_arr[1])) {
                        center = cookie_map_center_arr;
                    }

                }
                if (!center) {
                    center = [0,0]
                }
                if (!zoom && cookie_map_zoom)
                {
                    zoom = cookie_map_zoom;
                }
                if (!zoom)
                {
                    zoom = 10;
                }
                if (cookie_map_type)
                {
                    type = cookie_map_type;
                }

                var map_state = {
                    center: (center) ? center : point,
                    type: type,
                    zoom: zoom,
                    controls: []
                };

                if ((!cookie_map_center && !cookie_map_zoom || $map.data("bounds-primary")) && $map.data("bounds") && $map.data("bounds").length) {
                    map_state.bounds = $map.data("bounds");
                }

                var map_options = {
                    adjustZoomOnTypeChange: false,
                    avoidFractionalZoom: true
                };

                // Ограничение на макс. и мин. уровень зума
                var minZoom = ($map.data("zoom-min")) ? $map.data("zoom-min") : 3;
                var maxZoom = ($map.data("zoom-max")) ? $map.data("zoom-max") : 19;
                map_options.minZoom = minZoom;
                map_options.maxZoom = maxZoom;

                // Ограничение движения по карте в пределах прямоугольной области
                // (отмена возможности бесконечной горизонтальной прокрутки карты)
                //map_options.restrictMapArea = [[-85, -179.999999], [85, 179.999999]];

                var map = new ymaps.Map(this, map_state, map_options);

                var mapAreas = [
                    {
                        top: 0,
                        left: 0,
                        width: '15px',
                        height: '100%'
                    },
                    {
                        top: 0,
                        right: 0,
                        width: '75px',
                        height: '100%'
                    },
                    {
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '15px'
                    },
                    {
                        bottom: 0,
                        right: 0,
                        width: '100%',
                        height: '15px'
                    }
                ];
                mapAreas.forEach(function (area) {
                    var accessor = map.margin.addArea(area);
                });

                $map.data("map", map);
                map.$map = $map;

                console.log('calling map_controls_init');
                map_controls_init($map);

                var ruler = map.controls.add('rulerControl', {
                    position: {
                        right: 10,
                        bottom: 10
                    }
                });
                for (var key in ruler._childElements) {
                    $(ruler._childElements[key]).addClass("map-ruler");
                    break;
                }
                if ($(this).data("scroll-zoom-disable")) {
                    map.behaviors.disable('scrollZoom');
                }
                //map.behaviors.enable('rightMouseButtonMagnifier', {actionCursor: 'arrow'});

                var objects_collection = new ymaps.GeoObjectCollection({}, {
                    preset: "islands#redCircleIcon",
                    strokeWidth: 4,
                    geodesic: true
                });
                $map.data("objects_collection", objects_collection);

                map.geoObjects.add(objects_collection);

                if ($map.data("polygone")) {
                    var polygone = new ymaps.GeoObject({
                        geometry: {
                            type: "Polygon",
                            coordinates: [
                                $map.data("polygone")
                            ],
                            fillRule: "nonZero"
                        },
                        properties:{
                        }
                    }, {
                        fillColor: '#77BB00',
                        fillOpacity: 0,//0.4
                        strokeColor: '#eb5a46', // #77BB00
                        strokeOpacity: 0.8,
                        strokeWidth: 2,
                        strokeStyle: 'dot',
                        interactivityModel: 'default#transparent',
                        cursor: 'inherit'
                    });
                    map.geoObjects.add(polygone);
                }

                if ($map.data("polyline")) {

                    var polyline_coords = $map.data("polyline");

                    var polyline = new ymaps.GeoObject({
                        geometry: {
                            type: "LineString",
                            coordinates: polyline_coords,
                            //fillRule: "nonZero"
                        },
                        properties:{
                        }
                    }, {
                        // fillColor: '#77BB00',
                        // fillOpacity: 0,//0.4
                        strokeColor: '#eb5a46', // #77BB00
                        strokeOpacity: 0.8,
                        strokeWidth: 2,
                        strokeStyle: [4, 3],
                        interactivityModel: 'default#transparent',
                        cursor: 'inherit'
                    });
                    map.geoObjects.add(polyline);

                    if ($map.data("polyline-arrow")) {
                        ymaps_define_geoobject_arrow();
                        ymaps.modules.require(['geoObject.Arrow'], function (Arrow) {
                            $.each(polyline_coords, function(k,v){
                                if (typeof polyline_coords[k+1] !== 'undefined') {
                                    // Добавляем стрелки в конце линии и в середине
                                    var arrows_coords = [[v, [v[0] + (polyline_coords[k+1][0] - v[0])/2, v[1] + (polyline_coords[k+1][1] - v[1])/2]], [v, polyline_coords[k+1]]];
                                    $.each(arrows_coords, function(k2, arrow_coord){
                                        var arrow = new Arrow(arrow_coord, null, {
                                            strokeColor: '#eb5a46',
                                            strokeOpacity: 0.8,
                                            strokeWidth: 2,
                                            strokeStyle: [4, 3],
                                            interactivityModel: 'default#transparent',
                                            cursor: 'inherit',
                                            arrowAngle: 22,
                                            arrowMinLength: 12,
                                            arrowMaxLength: 12,
                                            onlyArrow: true
                                        });
                                        map.geoObjects.add(arrow);
                                    });
                                }
                            });
                        });
                    }

                    if ($map.data("polyline-number")) {
                        $.each(polyline_coords, function(k,v){
                            const numberLayout = ymaps.templateLayoutFactory.createClass(`<div class="sobject-number">${(k+1)}</div>`);
                            const numberPlacemark = new ymaps.Placemark(
                                [polyline_coords[k][0], polyline_coords[k][1]], {}, {
                                    iconLayout: numberLayout,
                                    interactivityModel: 'default#silent',
                                }
                            );
                            map.geoObjects.add(numberPlacemark);
                        });
                    }

                }

                map_update_objects(map, objects_collection);
                map.events.add('boundschange', $.throttle(50, function (e) {
                    if (!map.noupdate) {
                        map_update_objects(map, objects_collection, {event: e});
                    }
                }));
                map_restrict_maparea($map);

                map.events.add('click', function (e) {
                    e.get('target').balloon.close();
                });

                map.events.add('objectsUpdate', function (e) {
                    map_update_objects(map, objects_collection, {event: e});
                });

                map.events.add(['actionbegin', 'boundschange'], function (e) {
                    var $map = $(e.get('target').container.getElement());
                    if ($.tooltipster.instances($map).length) {
                        $map.tooltipster('destroy');
                    }
                    $map.closest(".map").removeClass("multitouch-required");
                });

                map.events.add('contextmenu', function (e) {
                    var $map = $(e.get('target').container.getElement());
                    var coords = [e.get("coords")[0].toFixed(5)*1, e.get("coords")[1].toFixed(5)*1];
                    var content = '';
                    content = '<div class="tooltip-block-links">';
                    content += '<a class="tooltip-block-link js-copy tooltip-closest-hide" data-clipboard-text="' + coords[0] + ", " + coords[1] + '" href="#" title="Копировать координаты">' +
                    '<span class="tooltip-block-link__icon"><i class="fa fa-clone"></i></span>' + coords[0] + ", " + coords[1] + '</a>';
                    if (!Modernizr.touchevents) {
                        content +=
                        '<a class="tooltip-block-link tooltip-closest-hide" target="_blank" href="'+
                        'https://web.archive.org/web/20241008144813/https://www.google.ru/maps/place/'+coords[0]+','+coords[1]+'/@'+(coords[0]/* - 0.07*/)+','+coords[1]+','+6980/*1600*/+'a,35y,0h,0t/data=!3m1!1e3!4m5!3m4!1s0x0:0x0!8m2!3d'+coords[0]+'!4d'+coords[1]+ // 0t - угол наклона камеры, 0h поворот компаса, 0a - высота н.у.м.
                        '">'+
                        '<span class="tooltip-block-link__icon"><i class="icon icon-google-earth"></i></span>Открыть в Google Maps</a>';
                    }
                    content += '</div>';
                    map_context_menu_open(e, $map, content);
                });

                map.geoObjects.events.add('contextmenu', function (e) {
                    var $map = $(e.get('target').getMap().container.getElement());
                    var object_id = e.get('target').options.get('object_id');
                    if (object_id) {
                        e.stopPropagation();
                        var content = '';
                        content = '<div class="tooltip-block-links">';
                        content += '<a class="tooltip-block-link" target="_blank" href="/object/'+object_id+'">' +
                            '<span class="tooltip-block-link__icon"><i class="fas fa-window-restore"></i></span><span>Открыть в новой вкладке</span></a>';
                        if (is_logged_in) {
                            content += '<a class="tooltip-block-link" data-fancybox data-type="ajax" data-src="/object/'+object_id+'/edit" href="#">' +
                                '<span class="tooltip-block-link__icon"><i class="fas fa-pencil-alt"></i></span><span>Изменить объект</span></a>';
                            content += '<a class="tooltip-block-link" data-fancybox data-type="ajax" data-src="/object/'+object_id+'/remove" href="#">' +
                                '<span class="tooltip-block-link__icon"><i class="fas fa-trash"></i></span><span>Удалить объект</span></a>';
                        }
                        content += '</div>';
                        map_context_menu_open(e, $map, content);
                    }
                });

                $map.one("mouseenter", function(){
                    $(this).addClass("hovered-once");
                });

                $map.addClass("js-map--inited");

            });
        }
    });
}

function map_context_menu_open(e, $map, content) {
    if ($.tooltipster.instances($map).length) {
        $map.tooltipster('destroy');
    }
    $map.tooltipster({
        content: content,
        interactive: true,
        interactiveTolerance: 200,
        animationDuration: 200,
        delay: [50, 50],
        distance: 0,
        side: "top",
        maxWidth: 350,
        contentAsHTML: true,
        repositionOnScroll: false,
        updateAnimation: false,
        trigger: "custom",
        arrow: false,
        triggerClose: {
            click: true,
            scroll: true,
            tap: true
        },
        theme: ["tooltipster-default tooltipster-w-block-link"],
        functionPosition: function(instance, helper, position){
            copy_init($(helper.tooltip).find(".js-copy"));
            fancybox_init($(helper.tooltip));
            position.coord.left = e.get('domEvent').originalEvent.clientX;
            position.coord.top = e.get('domEvent').originalEvent.clientY;
            if (position.coord.top + position.size.height > $(window).height()) {
                position.coord.top -= position.size.height;
            }
            if (position.coord.left + position.size.width > $(window).width()) {
                position.coord.left -= position.size.width;
            }
            return position;
        }
    });
    $map.tooltipster('open');
}

function map_on_scroll_init($o, context) {
    console.log('map_on_scroll_init called');
    if (!$("html").hasClass("js-map-on-scroll-inited")) {

        if (!("IntersectionObserver" in window)) {
            $(window).on('resize scroll', function (e) {
                map_on_scroll_load_depricated();
            });
        }

        $("html").addClass("js-map-on-scroll-inited");
    }

    if (typeof $o === 'undefined' || !$o) {
        $o = context?$('.js-map-on-scroll', context):$('.js-map-on-scroll');
    }
    if ("IntersectionObserver" in window) {
        var imageObserver = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    var item = entry.target;
                    map_on_scroll_load_change($(item));
                    imageObserver.unobserve(item);
                }
            });
        });

        $o.not(".js-map-on-scroll-observer-inited").each(function () {
            imageObserver.observe(this);
            $(this).addClass('js-map-on-scroll-observer-inited');
        });
    }
    else {
        map_on_scroll_load_depricated($o, context);
    }
}

function map_on_scroll_load_depricated($o, context) {
    if (typeof $o === 'undefined' || !$o) {
        $o = context ? $('.js-map-on-scroll', context) : $('.js-map-on-scroll');
    }
    $o.not(".js-map-on-scroll-loaded").each(function () {
        if ($(this).offset().top - $(window).height() / 3 < $(window).scrollTop() + $(window).height()) {
            map_on_scroll_load_change($(this));
        }
    });
}

function map_on_scroll_load_change($o, callback) {
    console.log('map_on_scroll_load_change called');
    $o.removeClass('js-map-on-scroll');
    map_load();
    $o.addClass("js-map-on-scroll-loaded");
    $o.trigger('js-map-on-scroll-loading');
}


/*
* Обновление объектов карты по ajax
 */


var map_update_objects_request = function(map, objects_collection, options) {
    if (this.lookupXHRs) {
        $.each(this.lookupXHRs, function(k,xhr){
            xhr.abort();
        });
    }
    var xhrs = [
        $.getJSON("/search/autocomplete", {"query": query, "coords": 1}, function(){}),
        $.getJSON("//web.archive.org/web/20241008144813/https://nominatim.openstreetmap.org/search", {"format": "json", "addressdetails": 1, "accept-language": "ru", "q": query}, function(){})
    ];
    this.lookupXHRs = xhrs;
    $.when(
        xhrs[0],
        xhrs[1]
    ).done(function(res1, res2){
        var suggestions_arr = [];
        suggestions_arr.push(autocompleteTransformResult(res1[0]));
        suggestions_arr.push(autocompleteTransformResult(res2[0], {serviceUrl: "//web.archive.org/web/20241008144813/https://nominatim.openstreetmap.org/search?format=json&amp;addressdetails=1"}));
        var result_suggestions = [];
        $.each(suggestions_arr, function(key1, value1){
            $.each(value1.suggestions, function(key2, suggestion){
                result_suggestions.push(suggestion);
            });
        });
        result_suggestions = {suggestions: result_suggestions}
        done(result_suggestions);
    })
};

var map_update_objects = function (map, objects_collection, options, force) {
    if (typeof options === "undefined" || !options) options = {};
    if (typeof force === "undefined" || !force) force = false;

    var bounds = map.getBounds();

    map_update_objects.collection_cleared = false;
    if (this.lookupXHRs) {
        $.each(this.lookupXHRs, function(k,xhr){
            xhr.abort();
        });
    }
    const data = {
        bounds: JSON.stringify(map.getBounds()),
        zoom: map.getZoom(),
        object_id: map.$map.data("object-id"),
        options: map.$map.attr("data-options")
    };
    if (force) {
        data.timestamp = new Date().getTime();
    }
    const xhrs = [
        $.ajax({
            url: "/objects_by_bounds",
            type: "get",
            cache: true,
            dataType: 'json',
            data: data,
            success: function(res1) {
                if (!map_update_objects.collection_cleared) {
                    objects_collection.removeAll();
                    map_update_objects.collection_cleared = true;
                }
                if (res1) {
                    objects = res1;
                    delete map.object_shapes;
                    $.each(objects, function (i, object) {
                        map_add_object(map, objects_collection, object);
                    });
                    map.events.fire('objectsupdated');
                }
            }
        })
    ];

    var allowed_osm_elements = ["node", "way", "relation"/*, "area"*/];
    var allowed_osm_types = {
        // "rapid": {
        //     "title": "Пороги",
        //     "request": {
        //         "waterway": "rapid",
        //     }
        // },
        // "rapid1": {
        //     "title": "Пороги",
        //     "request": {
        //         "waterway": "rapids",
        //     }
        // },
        // "rapid2": {
        //     "title": "Пороги",
        //     "request": {
        //         "waterway": "hazard",
        //     }
        // },
    };
    if (map.getZoom() >= 13) {
        allowed_osm_types = $.extend(true, {}, allowed_osm_types, {
            "camp": {
                "title": "Стоянка или место ночевки",
                "request": {
                    "tourism": "camp_site"
                }
            },
            "border-guard": {
                "title": "Застава или пост",
                "request": {
                    "landuse": "military"
                }
            },
            "alpine_hut": {
                "title": "Кордон/Хижина",
                "icon": "hut",
                "request": {
                    "tourism": "alpine_hut"
                }
            },
            "wilderness_hut": {
                "title": "Кордон/Хижина",
                "icon": "hut",
                "request": {
                    "tourism": "wilderness_hut"
                }
            }
        });
        if (map.getZoom() >= 15) {
            allowed_osm_types = $.extend(true, {}, allowed_osm_types, {
                "bridge": {
                    "title": "Мост",
                    "request": {
                        "bridge": "yes"
                    }
                },
                "ford": {
                    "title": "Брод",
                    "request": {
                        "ford": "yes"
                    }
                },
                "waterfall": {
                    "title": "Водопад",
                    "request": {
                        "waterway": "waterfall"
                    }
                },
                "cave": {
                    "title": "Пещера",
                    "request": {
                        "natural": "cave_entrance"
                    }
                },
                "water": {
                    "title": "Водоём/озеро/пруд",
                    "icon": "water",
                    "request": {
                        "natural": "water",
                    }
                },
                "lake": {
                    "title": "Озеро",
                    "icon": "water",
                    "request": {
                        "natural": "water",
                        "water": "lake"
                    }
                },
                "spring": {
                    "title": "Источник/родник",
                    "icon": "drop",
                    "request": {
                        "natural": "spring",
                    }
                },
                "well": {
                    "title": "Колодец",
                    "icon": "drop",
                    "request": {
                        "man_made": "water_well",
                    }
                },
            });
        }
        var q_arr = [];
        $.each(allowed_osm_elements, function(k,v){
            $.each(allowed_osm_types, function(k1,v1){
                var q_arr_item = v;
                $.each(v1.request, function(k2,v2){
                    q_arr_item += '['+k2+'='+v2+']';
                });
                q_arr_item += ';';
                q_arr.push(q_arr_item);
            });
        });
        //console.log(q_arr);
        var map_center = map.getCenter();
        var map_zoom = map.getZoom();
        xhrs.push($.ajax({
            url: "https://web.archive.org/web/20241008144813/https://overpass.kumi.systems/api/interpreter?data=[bbox];("+q_arr.join('')+");out center;&bbox="+bounds[0][1]+","+bounds[0][0]+","+bounds[1][1]+","+bounds[1][0], // https://overpass-api.de/api/interpreter
            type: "get",
            cache: true,
            dataType: 'xml',
            success: function(res2){
                if (!map_update_objects.collection_cleared) {
                    objects_collection.removeAll();
                    map_update_objects.collection_cleared = true;
                }
                if (res2) {
                    response = res2;
                    var nodes = false;
                    $.each(allowed_osm_elements, function(k,v) {
                        var node = Array.prototype.slice.call(response.getElementsByTagName(v));
                        if (nodes === false) {
                            nodes = node;
                        }
                        nodes = nodes.concat(node);
                    });
                    var default_shape = {
                        type: 'Circle',
                        coordinates: [0, 0],
                        radius: 6
                    };
                    $.each(nodes, function(k, node){
                        // if (!node.childNodes.length) {
                        //     return true;
                        // }
                        var point = [];
                        if (node.getAttribute('lat') || node.getAttribute('lon')) {
                            point = [parseFloat(node.getAttribute('lat')), parseFloat(node.getAttribute('lon'))];
                        }
                        if (node.getElementsByTagName('center').length) {
                            point = [parseFloat(node.getElementsByTagName('center')[0].getAttribute('lat')), parseFloat(node.getElementsByTagName('center')[0].getAttribute('lon'))];
                        }
                        if (point.length) {
                            var sticker = '';
                            var content = [];
                            var type = 'none';
                            $.each(node.getElementsByTagName('tag'), function(index, tag) {
                                var k = tag.getAttribute('k');
                                var v = tag.getAttribute('v');
                                if (k == 'name') {
                                    content[0] = '<strong class="font-semibold">'+v+'</strong>';
                                }
                                // else {
                                // }
                                if (k == 'alt_name') {
                                    content[1] = '('+v+')';
                                }
                                if (k == 'description') {
                                    content[2] = v;
                                }
                                if (k == 'source_ref') {
                                    content[3] = '<a target="_blank" href="'+v+'">'+v+'</a>';
                                }
                                content[4] = '<span class="font-xsmall color-muted">Информация с&nbsp;<a href="https://web.archive.org/web/20241008144813/https://www.openstreetmap.org/#map='+map_zoom+'/'+map_center[0]+'/'+map_center[1]+'" target="_blank">OSM</a></span>';

                                var current_item = false;
                                var default_title = '';
                                var default_title_used = false;
                                $.each(allowed_osm_types, function(k1,v1){
                                    $.each(v1.request, function(k2,v2){
                                        if (k == k2 && v == v2) {
                                            current_item = v1;
                                            type = (v1.icon)?v1.icon:k1;
                                            default_title = v1.title;
                                            if (v1.title && !content[0]) {
                                                content[0] = '<strong class="font-semibold">'+v1.title+'</strong>';
                                                default_title_used = true;
                                            }
                                            return false;
                                        }
                                    });
                                    if (current_item) {
                                        return false;
                                    }
                                });
                                if (!default_title_used && default_title) {
                                    content[4] = '<span class="font-xsmall color-muted">' + default_title + '. </span>' + content[4];
                                }
                            });

                            var content_str = content.filter(function () { return true }).join('<br>');

                            var options = {
                                zIndex: 647,
                                zIndexHover: 655,
                                iconLayout: 'app#pmarker',
                                iconShape: default_shape,
                                cursor: 'inherit'
                            };

                            if (!content_str) {
                                options = $.extend({}, options, {
                                    interactivityModel: 'default#transparent',
                                    cursor: 'inherit'
                                });
                            }

                            var placemark = new ymaps.Placemark(point, {
                                tmpl: {
                                    type: type,
                                    content: content_str,
                                    sticker: sticker
                                }
                            }, options);

                            if (!Modernizr.touchevents) {
                                placemark.events.add('mouseenter', function (e) {
                                    var dom = e.get('target').getOverlaySync().getLayoutSync().getElement();
                                    var $marker = $(dom).find(".object-pmarker");
                                    $marker.data('marker-hint-opened', false);
                                    if (!$marker.filter(".tooltip-inited").length) tooltip_init($marker);
                                    $marker.tooltipster('open');
                                    $marker.addClass('object-pmarker--hover');
                                });
                                placemark.events.add('mouseleave', function (e) {
                                    var dom = e.get('target').getOverlaySync().getLayoutSync().getElement();
                                    var $marker = $(dom).find(".object-pmarker");
                                    setTimeout(function(){
                                        if (!$marker.data('marker-hint-opened')) {
                                            $marker.filter(".tooltip-inited").tooltipster('close');
                                            $marker.data('marker-hint-opened', false).removeClass('object-pmarker--hover');
                                        }
                                    }, 100);
                                });
                            }
                            else {
                                placemark.events.add('click', function (e) {
                                    var dom = e.get('target').getOverlaySync().getLayoutSync().getElement();
                                    var $marker = $(dom).find(".object-pmarker");
                                    if (!$marker.filter(".tooltip-inited").length) tooltip_init($marker);
                                    $marker.tooltipster('open');
                                });
                            }

                            objects_collection.add(placemark);
                        }
                    });
                }
            }
        }));
    }

    this.lookupXHRs = xhrs;
}


/*
* Функция добавления объекта на карту
 */
function map_add_object(map, objects_collection, object) {
    var point = [object.lat, object.lng];
    var sticker = "";
    if (!object.quantity) {
        if (object.complexity) {
            sticker = object.complexity;
        }
    }
    if (object.id == map.$map.data("object-id")) {
        object.is_active = true;
    }

    var zIndex = 650;
    if (object.type_id == 4) {
        zIndex = 645;
    }
    if (object.is_active) {
        zIndex = 652;
    }

    var default_cluster_shape = {
        type: 'Circle',
        coordinates: [0, 0],
        radius: 16
    };
    var default_marker_shape = {
        type: 'Polygon',
        coordinates: [
            [[0, -32], [8, -28], [12, -20], [8, -10], [0, 0], [-8, -10], [-12, -20], [-8, -28]]
        ]
    };
    var default_glacier_shape = {
        type: 'Circle',
        coordinates: [0, 0],
        radius: 8
    };
    var default_shape = (!object.quantity) ? default_marker_shape : default_cluster_shape;

    if (object.type_id == 4) {
        var area_radius = (object.area > 1)?12:((object.area > 0.25)?8:4);
        object.area_class = 'area-' + area_radius;
        default_shape = default_glacier_shape;
        default_shape.radius = area_radius;

        if (object.shape && object.is_active) {
            map_add_object_shape(map, object.id, object.shape);
        }
    }
    var placemark = new ymaps.Placemark(point, {
        tmpl: {
            object: object,
            sticker: sticker
        }
    }, {
        zIndex: zIndex,
        zIndexHover: 655,
        iconLayout: 'app#marker',
        iconShape: default_shape,
        draggable: !object.quantity && user_can('edit objects')
    });
    if (!object.quantity) {
        // При клике на обычную метку - переход на страницу объекта
        placemark.options.set('object', object);
        placemark.options.set('object_id', object.id);
        placemark.options.set('type_id', object.type_id);

        // placemark.events.add('overlaychange', function (e) {
        //     var dom = e.get('target').getOverlaySync().getLayoutSync().getElement();
        //     var $marker = $(dom).find(".object-marker");
        //     $marker.data('placemark', e.get('target'));
        // });

        if (!Modernizr.touchevents) { //  && !object.is_active
            placemark.events.add('click', function (e) {
                var object_id = e.get('target').options.get('object_id');
                Turbolinks.visit("/object/" + object_id);
            });
            placemark.events.add('mouseenter', function (e) {
                var dom = e.get('target').getOverlaySync().getLayoutSync().getElement();
                var $marker = $(dom).find(".object-marker");
                if (!$marker.filter(".tooltip-inited").length) tooltip_init($marker);
                $marker.tooltipster('open');
                $marker.addClass('hover');

                var object = e.get('target').options.get('object');
                if (object.area) {
                    var map = e.get('target').getMap();
                    delay(function () {
                        if (object.id && !object.is_active) {
                            marker_show_shape(map, object.id);
                        }
                    }, 100);
                }
            });
            placemark.events.add('mouseleave', function (e) {
                var object_id = e.get('target').options.get('object_id');
                var dom = e.get('target').getOverlaySync().getLayoutSync().getElement();
                var $marker = $(dom).find(".object-marker");
                $marker.filter(".tooltip-inited").tooltipster('close');
                $marker.removeClass('hover');

                var object = e.get('target').options.get('object');
                if (object.area) {
                    var map = e.get('target').getMap();
                    delay(function(){
                        if (object.id && !object.is_active) {
                            marker_hide_shape(map, object.id);
                        }
                    }, 0);
                }
            });
        }
        else {
            placemark.events.add('click', function (e) {
                var dom = e.get('target').getOverlaySync().getLayoutSync().getElement();
                var $marker = $(dom).find(".object-marker");
                if (!$marker.filter(".tooltip-inited").length) tooltip_init($marker);
                $marker.tooltipster('open');

                var map = e.get('target').getMap();
                var object = e.get('target').options.get('object');
                if (object.id && object.area && !object.is_active) {
                    marker_show_shape(map, object.id);
                }

                var instance = $marker.tooltipster('instance');
                instance.on('close', function(){
                    if (object.id && object.area && !object.is_active) {
                        marker_hide_shape(map, object.id);
                    }
                });
            });
        }

        // Сохранение новых координат при перетаскивании
        placemark.events.add('dragstart', function (e) {
            map.noupdate = true;
        });
        placemark.events.add('dragend', function (e) {
            var map = e.get('target').getMap();
            var id = e.get('target').options.get('object_id');
            var coords = e.get('target').geometry.getCoordinates();
            setTimeout(function(){
                if (map) {
                    map.noupdate = false;
                }
                var n = new Noty({
                    type: 'alert',
                    text: 'Сохранить новые координаты?',
                    buttons: [
                        Noty.button('Сохранить', 'btn btn--small btn--primary', function () {
                            var $el = $("<a class='js-action'>");
                            $el.attr('data-action-url', $(this.dom).attr('data-action-url'));
                            $el.appendTo("body");
                            $el.trigger('perform-action').remove();
                            n.close();
                        }, {'data-action-url': '/object/'+id+'/coords/save/'+coords.join(',')}),
                        Noty.button('Отмена', 'btn btn--small btn--link', function () {
                            n.close();
                        })
                    ],
                    killer: 'coords_save',
                    queue: 'coords_save',
                }).show();
            }, 700);
        });
        setTimeout(function(){
            if (!window["pin_large_pulsate_once"]) {
                $(".object-marker--pin-large").addClass("object-marker--pulsate");
                window["pin_large_pulsate_once"] = true;
            }
        }, 300);
    }
    else {
        // При клике на метку-кластер изменение вьювпорта карты, чтобы влезли все метки кластера
        placemark.options.set('geohash_prefix', object.geohash_prefix);
        if (object.lat_min)
        {
            placemark.options.set('bounds', [[object.lat_min, object.lng_min], [object.lat_max, object.lng_max]]);
        }
        placemark.events.add('click', function (e) {
            var geohash_prefix = e.get('target').options.get('geohash_prefix');
            var coords = e.get('target').geometry.getCoordinates();
            var bounds = e.get('target').options.get('bounds');
            if (!bounds && geohash_prefix) {
                var cluster_bounds = Geohash.bounds(geohash_prefix);
                bounds = [[cluster_bounds.sw.lat, cluster_bounds.sw.lon], [cluster_bounds.ne.lat, cluster_bounds.ne.lon]]
            }
            if (bounds) {
                var zoom_start = map.getZoom();
                map.setBounds(bounds, {
                    checkZoomRange: false,
                    useMapMargin: true,
                    duration: 300,
                    timingFunction: 'ease-in'
                }).then(function(){
                    var zoom_end = map.getZoom();
                    if (zoom_start >= zoom_end)
                    {
                        map.setCenter(coords, zoom_start + 1, {
                            duration: 200,
                            useMapMargin: true,
                            checkZoomRange: false,
                            timingFunction: 'ease-in'
                        });
                    }
                });
            }
        });
    }
    objects_collection.add(placemark);

    if (object.title) {
        const placemarkTitleLayout = ymaps.templateLayoutFactory.createClass(object.title);
        const placemarkTitle = new ymaps.Placemark(point, {}, {
                iconLayout: placemarkTitleLayout,
                interactivityModel: 'default#silent',
            }
        );
        objects_collection.add(placemarkTitle);
    }
}

/*
* Загрузка и показ контура объекта
 */
function marker_show_shape(map, object_id) {
    if (typeof map.object_shapes === 'undefined') {
        map.object_shapes = [];
    }
    if (typeof map.object_shapes[object_id] !== 'undefined') {
        map.object_shapes[object_id].options.set('visible', true);
    }
    else {
        $.ajax({
            url: "/object_shape_json/"+object_id,
            type: "get",
            cache: true,
            dataType: 'json',
            success: function (shape) {
                map_add_object_shape(map, object_id, shape)
            }
        });
    }
}

function marker_hide_shape(map, object_id) {
    if (typeof map.object_shapes !== 'undefined' && typeof map.object_shapes[object_id] !== 'undefined') {
        // var $map = $(map.container.getElement()).closest(".js-map");
        // var objects_collection = $map.data("objects_collection");
        //objects_collection.remove(map.object_shapes[object_id]);
        map.object_shapes[object_id].options.set('visible', false);
    }
}

function map_add_object_shape(map, object_id, shape) {
    if (typeof map.object_shapes === 'undefined') {
        map.object_shapes = [];
    }
    if (typeof map.object_shapes[object_id] !== 'undefined') {
        map.object_shapes[object_id].options.set('visible', true);
    }
    else {
        var $map = $(map.container.getElement()).closest(".js-map");
        var objects_collection = $map.data("objects_collection");
        var polygone = new ymaps.GeoObject({
            geometry: {
                type: "Polygon",
                coordinates: [
                    shape
                ],
                fillRule: "nonZero"
            },
            properties:{
            }
        }, {
            fillColor: '#77BB00',
            fillOpacity: 0,
            strokeColor: '#027FE6',
            strokeOpacity: 0.8,
            strokeWidth: 2,
            strokeStyle: 'dot',
            interactivityModel: 'default#transparent',
            cursor: 'inherit'
        });
        objects_collection.add(polygone);
        map.object_shapes[object_id] = polygone;
    }
}

/*
* Инициализация контролов карты
 */
function map_controls_init($map) {
    console.log('map_controls_init called');
    var map = $map.data("map");
    $map.append(tmpl("tmpl-map-controls"));
    try {
        tmpl.cache['tmpl-map-controls-custom'] = null;
        $map.append(tmpl("tmpl-map-controls-custom"));
    }
    catch (e) {
    }
    $map.append(tmpl("tmpl-map-multitouch-required"));
    textfield_init($(".map-controls .textfield"));
    var $tooltipControls = $map.find('.map-controls .tooltip, .map-controls .tooltip-popover');
console.log('Tooltip init (original logic):', $tooltipControls.length, $tooltipControls);
tooltip_init($tooltipControls);
    setTimeout(function(){
        $(".map-controls").addClass("active");
    }, 50);
    if (!$("html").hasClass("map-controls-inited")) {

        $("html").addClass("map-controls-inited");

        $(document).on("click", ".js-map-zoom-in", function (e) {
            e.preventDefault();
            var $map = $(this).closest(".js-map");
            if ($(this).hasClass("disabled") || !$map.length) return false;
            var map = $map.data("map");
            var maxzoom = map.options.get('maxZoom');
            if (maxzoom <= map.getZoom() + 1) {
                $(this).addClass("disabled");
            }
            $map.find(".js-map-zoom-out").removeClass("disabled");
            map.setZoom(map.getZoom() + 1, {duration: 200, checkZoomRange: false});
        });

        $(document).on("click", ".js-map-zoom-out", function (e) {
            e.preventDefault();
            var $map = $(this).closest(".js-map");
            if ($(this).hasClass("disabled") || !$map.length) return false;
            var map = $map.data("map");
            var minzoom = map.options.get('minZoom');
            if (minzoom >= map.getZoom() - 1) {
                $(this).addClass("disabled");
            }
            $map.find(".js-map-zoom-in").removeClass("disabled");
            map.setZoom(map.getZoom() - 1, {duration: 200, checkZoomRange: false});
        });

        $(document).on("click", ".js-map-find-me", function (e) {
            e.preventDefault();
            var $map = $(this).closest(".js-map");
            var map = $map.data("map");
            map_accuracy_marker_update(map);
        });

        $(document).on("click", ".js-map-expand", function (e) {
            e.preventDefault();
            $("body").toggleClass("map-expanded");
            var $map = $(this).closest(".js-map");
            var map = $map.data("map");
            setTimeout(function () {
                map.container.fitToViewport();
            }, 10);
        });

        $(document).on("click", ".js-map-type ul a", function (e) {
            e.preventDefault();
            var $map = $(".js-map");
            var map = $map.data("map");
            map.setType($(this).attr("data-value"));
            map_type_control_update(map);
        });

        $(document).on("click", ".js-map-region ul a", function (e) {
            e.preventDefault();
            var $map = $(".js-map");
            var map = $map.data("map");
            var bounds = $(this).data("value");
            var lat = (bounds[1][0] + bounds[0][0])/2;
            var lng = (bounds[1][1] + bounds[0][1])/2;
            map_moveto(lat, lng, [bounds[0][0], bounds[1][0], bounds[0][1], bounds[1][1]]);
        });

        $(document).on("click", ".js-map-search", function (e) {
            $("body").toggleClass("map-search-active");
        });

        $(document).on("focus", ".map-search .textfield", function (e) {
            $("body").addClass("map-search-focused");
        });

        $(document).on("blur", ".map-search .textfield", function (e) {
            $("body").removeClass("map-search-focused");
        });

        $(document).on("click", ".js-map-scroll-down", function (e) {
            var $map = $(this).closest(".js-map");
            $("body").addClass("scroll-animated");
            $("html, body").stop(true, true).animate({scrollTop: $map.outerHeight()}, 500, function () {
                $("body").removeClass("scroll-animated");
            });
        });

        $(document).on("turbolinks:before-visit unload", function (e) {
            map_save_state();
        });

        $(document).on("click", ".js-map-trip-show-all", function (e) {
            var $map = $(this).closest(".js-map");
            var map = $map.data("map");
            map.setBounds($map.data("bounds"), {
                checkZoomRange: false,
                // useMapMargin: true,
                duration: 300,
                timingFunction: 'ease-in'
            })
        });

        $(document).on("click", ".js-map-trip-prev, .js-map-trip-next", function (e) {
            if (!$(this).hasClass('disabled')) {
                var state = map_trip_goto_object(($(this).hasClass('js-map-trip-next'))?1:-1);
                if (typeof state.index !== 'undefined' && state.ids) {
                    $(".js-map-trip-prev").toggleClass('disabled', state.index <= 0);
                    $(".js-map-trip-next").toggleClass('disabled', state.index >= state.ids.length - 1);
                }
            }
        });
    }

    map_controls_update(map);
    map_type_control_update(map);
    map_bounds_update(map);
    $("body").data("onunload_allow", true);
    if ($(".page-object").length)
    {
        $("body").data("onunload_allow", false);
    }
    map.events.add('boundschange', function (e) {
        map_controls_update(e);
        var map = e.get("target");
        map_bounds_update(map);
        if (typeof map.mapAccuracyMarker !== "undefined") {
            map_accuracy_marker_update_css(map.mapAccuracyMarker);
        }
        $("body").data("onunload_allow", true);
    });

    map.events.add(['boundschange', 'actiontick'], function (e) {
        var map = e.get("target");
    });
}

function map_goto_object(id) {
    var $map = $('.js-map--inited').first();
    var map = $map.data('map');
    var result = ymaps.geoQuery($map.data("objects_collection"));
    var r = result.search('properties.tmpl.object.id = ' + id).each(function(geoobject) {
        var object = geoobject.properties.get('tmpl').object;
        if ($map.offset().top < $(window).scrollTop() || $map.offset().top > $(window).scrollTop() + $(window).height() ) {
            goto_object($map);
        }
        map.events.once('objectsupdated', function (e) {//показ тултипа объекта после обновления всех объектов при перемещении на карте
            var result = ymaps.geoQuery($map.data("objects_collection"));
            var r = result.search('properties.tmpl.object.id = ' + id).each(function(geoobject) {
                geoobject.getOverlay().then(function(overlay){
                    geoobject.events.fire(Modernizr.touchevents?'click':'mouseenter');
                });
            });
        });
        map.setCenter([object.lat, object.lng], 13, {duration: 500, checkZoomRange: true}).then(function () {
            geoobject.events.fire(Modernizr.touchevents?'click':'mouseenter');
            // var $m = $('.object-marker[data-object-id="'+id+'"]');
            // var $m_p = $m.closest('ymaps[class*="placemark-overlay"]');
            // $m.addClass('active');
            // if (!$m_p.data('z-index-old')) {
            //     $m_p.data('z-index-old', $m_p.css('z-index'));
            // }
            // $m_p.css('z-index', $m_p.data('z-index-old')+10);
        }, this);
    });
}

function map_trip_goto_object(delta) {
    var $map = $('.js-map--inited').first();
    var map = $map.data("map");
    var options = $map.data('options');
    var ids = options.active_object_ids;
    if (ids) {
        var current_id = $map.data('trip_current_id');
        if (!current_id) {
            current_index = 0;
            current_id = ids[current_index];
        }
        else {
            var current_index = Object.keys(ids).find(function(key) {
                return ids[key] == current_id;
            });
            current_index = current_index*1 + delta;
            if (current_index < 0) {
                current_index = ids.length - 1;
            }
            if (current_index > ids.length - 1) {
                current_index = 0;
            }
            current_id = ids[current_index];
        }
        map_goto_object(current_id);
        $map.data('trip_current_id', current_id);
        return {id: current_id, index: current_index, ids: ids}
    }
    return {};
}

function map_save_state() {
    var $map = $(".js-map");
    var map = $map.data("map");
    if (map && $("body").data("onunload_allow"))
    {
        if (map.getZoom()) {
            Cookies.set("map_zoom", map.getZoom(), { expires: 365, path: '/' });
        }
        if (map.getCenter()) {
            Cookies.set("map_center", map.getCenter().join(","), { expires: 365, path: '/' });
        }
    }
    if (map && map.getType()) {
        Cookies.set("map_type", map.getType(), { expires: 365, path: '/' });
    }
}

function map_bounds_update(map) {
    var $map = $(map.container.getElement()).closest(".js-map");
    var $map_latlng = $map.find(".map-latlng");
    var $map_latlng_value = $map.find(".map-latlng-value");
    if ($map_latlng.length) {
        var c = map.getCenter();
        var coords = c[0].toFixed(5)+", "+c[1].toFixed(5);
        $map_latlng.attr("data-clipboard-text", coords);
        $map_latlng_value.text(coords);
    }
    map_save_state();
}

function map_meters_in_pixel(lat, zoom) {
    return (Math.cos(lat * Math.PI / 180) * 2 * Math.PI * 6378137) / (256 * Math.pow(2, zoom));
}

function map_accuracy_marker_update(map) {
    ymaps.geolocation.get({
        provider: 'auto',
        autoReverseGeocode: false
    }).then(function (result) {
        var coords = result.geoObjects.get(0).geometry.getCoordinates();
        var accuracy = result.geoObjects.accuracy;
        if (accuracy) {
            var suffix = "м";
            var accuracy_formated = Math.round(accuracy);
            if (accuracy > 1000) {
                suffix = "км";
                accuracy_formated = accuracy.toFixed(1);
            }
            var meters_in_pixel = map_meters_in_pixel(coords[0], map.getZoom());
            var radius = accuracy / meters_in_pixel;
            mapAccuracyMarkerRemove(map);
            var placemark_accuracy = new ymaps.Placemark(coords, {
                //hintContent: "Ваше местоположение с точностью " + accuracy_formated + " " + suffix + ".",
                accuracy: accuracy
            }, {
                zIndex: 650,
                zIndexHover: 655,
                iconLayout: 'app#markerAccuracy'
            });
            map.geoObjects.events.once('add', function (e) {
                if (e.get("child").properties.get("accuracy"))
                {
                    map_accuracy_marker_position(e.get("child"));
                }
            });
            map.mapAccuracyMarker = placemark_accuracy;
            map.geoObjects.add(placemark_accuracy);
            mapAccuracyMarkerDelay(function () {
                mapAccuracyMarkerHide(map);
            }, 4500);
        }
    });
}

function map_accuracy_marker_add(map, distance, nochangezoom, nochangecenter) {
    mapAccuracyMarkerRemove(map);
    var placemark_accuracy = new ymaps.Placemark(coords, {
        accuracy: distance
    }, {
        zIndex: 650,
        zIndexHover: 655,
        iconLayout: 'app#markerAccuracy'
    });

    map.geoObjects.events.once('add', function (e) {
        if (e.get("child").properties.get("accuracy"))
        {
            map_accuracy_marker_position(e.get("child"), nochangezoom, nochangecenter);
        }
    });
    map.mapAccuracyMarker = placemark_accuracy;
    map.geoObjects.add(placemark_accuracy);
    mapAccuracyMarkerDelay(function () {
        mapAccuracyMarkerHide(map);
    }, 4500);
}

function map_accuracy_marker_position(marker, nochangezoom, nochangecenter) {
    var map = marker.getMap();
    var meters_in_pixel = map_meters_in_pixel(marker.geometry.getCoordinates()[0], map.getZoom());
    var radius = marker.properties.get('accuracy') / meters_in_pixel;
    var greater_than_viewport = Math.ceil(Math.log2(radius*2 / Math.min($(".js-map").width(), $(".js-map").height())));
    var zoom = map.getZoom();
    if (greater_than_viewport > 1 && zoom >= greater_than_viewport && !nochangezoom) {
        zoom = zoom - greater_than_viewport;
    }
    var coords = marker.geometry.getCoordinates();
    var center = map.getCenter();
    if (!nochangecenter) {
        map.setCenter(coords, zoom, {
            duration: (center[0].toFixed(6) == coords[0].toFixed(6) && center[1].toFixed(6) == coords[1].toFixed(6))?0:300
        }).then(function () {
            setTimeout(function(){
                map_accuracy_marker_activate(marker, zoom);
            }, 50);
        }, function (err) {
            console.log(err);
        });
    }
    else {
        setTimeout(function(){
            map_accuracy_marker_activate(marker, zoom);
        }, 50);
    }
}

function map_accuracy_marker_activate(marker, zoom) {
    map_accuracy_marker_update_css(marker, zoom);
    $(".object-marker--accuracy").addClass("active");
}

function map_accuracy_marker_update_css(marker, zoom) {
    if (typeof marker !== "undefined") {
        var map = marker.getMap();
        if (typeof zoom === "undefined") {
            zoom = map.getZoom();
        }
        var meters_in_pixel = map_meters_in_pixel(marker.geometry.getCoordinates()[0], zoom);
        var radius = Math.round(marker.properties.get('accuracy') / meters_in_pixel);
        if (radius < 10) {
            radius = 10;
        }
        $(".object-marker--accuracy").css({
            width: radius + "px",
            height: radius + "px",
            top: -1 * Math.round(radius / 2) + "px",
            left: -1 * Math.round(radius / 2) + "px"
        });
    }
}

function mapAccuracyMarkerHide(map) {
    if (typeof map.mapAccuracyMarker !== "undefined") {
        map.mapAccuracyMarker.getOverlay().then(function(overlay){
            $(overlay.getElement()).find(".object-marker--accuracy").removeClass("active");
            mapAccuracyMarkerDelay(function () {
                mapAccuracyMarkerRemove(map);
            }, 500)
        });
    }
}

function mapAccuracyMarkerRemove(map) {
    map.geoObjects.remove(map.mapAccuracyMarker);
    delete map.mapAccuracyMarker, map.mapMarkerAccuracyActivate;
}

var mapAccuracyMarkerDelay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();


function map_controls_update(e) {
    var is_event = true;
    if (typeof e.originalEvent !== "undefined") {
        var newZoom = e.get('newZoom');
        var oldZoom = e.get('oldZoom');
        var map = e.get('target');
    }
    else {
        var map = e;
        var newZoom = map.getZoom();
        is_event = false;
    }
    if (!is_event || newZoom != oldZoom) {
        var maxzoom = map.options.get('maxZoom');
        var minzoom = map.options.get('minZoom');
        $(".js-map-zoom-in, .js-map-zoom-out").removeClass("disabled");
        if (newZoom >= maxzoom) $(".js-map-zoom-in").addClass("disabled");
        if (newZoom <= minzoom) $(".js-map-zoom-out").addClass("disabled");
    }
}

function map_type_control_update(map) {
    var type = map.getType();
    var $link = $(".js-map-type a[data-value='"+type+"']");
    $link.parent().addClass("active").siblings().removeClass("active");
    $(".map-control--type .map-control__icon").empty().append($link.find("i").clone());
    map_save_state();
}

// Ограничение области, на которые можно перемещаться до существующих, чтобы не было пустых областей без карты
function map_restrict_maparea($map) {
    var map = $map.data("map");
    map.action.setCorrection(function (tick) {
        var projection = map.options.get('projection');
        var mapSize = map.container.getSize();
        var tickCenter = projection.fromGlobalPixels(tick.globalPixelCenter, tick.zoom);
        var top = [tick.globalPixelCenter[0], tick.globalPixelCenter[1] - mapSize[1] / 2];
        var bot = [tick.globalPixelCenter[0], tick.globalPixelCenter[1] + mapSize[1] / 2];
        var tickTop = projection.fromGlobalPixels(top, tick.zoom);
        var tickBot = projection.fromGlobalPixels(bot, tick.zoom);

        if (tickTop[0] > 85) {
            tick.globalPixelCenter = projection.toGlobalPixels(
                [85, tickCenter[1]],
                tick.zoom
            );
            tick.globalPixelCenter = [tick.globalPixelCenter[0], tick.globalPixelCenter[1] + mapSize[1] / 2];
            tick.duration = 0;
        }

        if (tickBot[0] < -85) {
            tick.globalPixelCenter = projection.toGlobalPixels(
                [-85, tickCenter[1]],
                tick.zoom
            );
            tick.globalPixelCenter = [tick.globalPixelCenter[0], tick.globalPixelCenter[1] - mapSize[1] / 2];
            tick.duration = 0;
        }

        return tick;
    });
}

function map_moveto(lat, lng, boundingbox, maxzoom) {
    var $map = $(".js-map");
    var map = $map.data("map");
    var coords = [lat*1, lng*1];
    var bounds = map.getBounds();
    var bounds_distance = getMapDistance(bounds[0], bounds[1]);
    var pan_distance = getMapDistance(map.getCenter(), coords);
    var panto_duration = pan_distance/bounds_distance*50;
    if (panto_duration > 500) {
        panto_duration = 500;
    }
    else if (panto_duration < 300) {
        panto_duration = 300;
    }
    if (typeof maxzoom === "undefined") {
        maxzoom = 22;
    }
    if (typeof boundingbox !== "undefined" && boundingbox) {
        var source_distance = getMapDistance([boundingbox[0], boundingbox[2]], [boundingbox[1], boundingbox[3]]);
        var distance = (source_distance < 50)?50:source_distance;
        var lat_diff = lng_diff = (distance + 1000)/getMeterPerDegree(coords[0])[0]/2;
        var promise = map.setBounds([[coords[0] - lat_diff, coords[1] - lng_diff], [coords[0] + lat_diff, coords[1] + lng_diff]], {
            duration: 500,
        });
        promise.then(function () {
            // if (map.getZoom() > maxzoom) {
            //     map.setZoom(maxzoom);
            // }
            mapAccuracyMarkerRemove(map);
            var placemark_accuracy = new ymaps.Placemark(coords, {
                accuracy: distance
            }, {
                zIndex: 650,
                zIndexHover: 655,
                iconLayout: 'app#markerAccuracy'
            });

            map.geoObjects.events.once('add', function (e) {
                if (e.get("child").properties.get("accuracy"))
                {
                    map_accuracy_marker_position(e.get("child"), true, true);
                }
            });
            map.mapAccuracyMarker = placemark_accuracy;
            map.geoObjects.add(placemark_accuracy);
            mapAccuracyMarkerDelay(function () {
                mapAccuracyMarkerHide(map);
            }, 4500);

        });
    }
    else {
        map.panTo(coords, {
            duration: panto_duration
        });
    }
}

var getMeterPerDegree = function(latMid) {
    var m_per_deg_lat = 111132.954 - 559.822 * Math.cos(2 * latMid) + 1.175 * Math.cos(4 * latMid);
    var m_per_deg_lon = 111132.954 * Math.cos(latMid);
    return [m_per_deg_lat, m_per_deg_lon];
}

var getMapDistance = function(p1, p2) {

    var rad = function(x) {
        return x * Math.PI / 180;
    };

    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(p2[0] - p1[0]);
    var dLong = rad(p2[1] - p1[1]);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(rad(p1[0])) * Math.cos(rad(p2[0])) *
        Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    return d; // returns the distance in meter
};


function ymaps_define_geoobject_arrow() {

    /*
     * Класс, позволяющий создавать стрелку на карте.
     * Является хелпером к созданию полилинии, у которой задан специальный оверлей.
     * При использовании модулей в реальном проекте рекомендуем размещать их в отдельных файлах.
     */
    ymaps.modules.define("geoObject.Arrow", [
        'Polyline',
        'overlay.Arrow',
        'util.extend'
    ], function (provide, Polyline, ArrowOverlay, extend) {
        /**
         * @param {Number[][] | Object | ILineStringGeometry} geometry Геометрия ломаной.
         * @param {Object} properties Данные ломаной.
         * @param {Object} options Опции ломаной.
         * Поддерживается тот же набор опций, что и в классе ymaps.Polyline.
         * @param {Number} [options.arrowAngle=20] Угол в градусах между основной линией и линиями стрелки.
         * @param {Number} [options.arrowMinLength=3] Минимальная длина стрелки. Если длина стрелки меньше минимального значения, стрелка не рисуется.
         * @param {Number} [options.arrowMaxLength=20] Максимальная длина стрелки.
         */
        var Arrow = function (geometry, properties, options) {
            return new Polyline(geometry, properties, extend({}, options, {
                lineStringOverlay: ArrowOverlay
            }));
        };
        provide(Arrow);
    });

    /*
     * Класс, реализующий интерфейс IOverlay.
     * Получает на вход пиксельную геометрию линии и добавляет стрелку на конце линии.
     */
    ymaps.modules.define("overlay.Arrow", [
        'overlay.Polygon',
        'util.extend',
        'event.Manager',
        'option.Manager',
        'Event',
        'geometry.pixel.Polygon'
    ], function (provide, PolygonOverlay, extend, EventManager, OptionManager, Event, PolygonGeometry) {
        var domEvents = [
                'click',
                'contextmenu',
                'dblclick',
                'mousedown',
                'mouseenter',
                'mouseleave',
                'mousemove',
                'mouseup',
                'multitouchend',
                'multitouchmove',
                'multitouchstart',
                'wheel'
            ],

            /**
             * @param {geometry.pixel.Polyline} pixelGeometry Пиксельная геометрия линии.
             * @param {Object} data Данные оверлея.
             * @param {Object} options Опции оверлея.
             */
            ArrowOverlay = function (pixelGeometry, data, options) {
                // Поля .events и .options обязательные для IOverlay.
                this.events = new EventManager();
                this.options = new OptionManager(options);
                this._map = null;
                this._data = data;
                this._geometry = pixelGeometry;
                this._overlay = null;
            };

        ArrowOverlay.prototype = extend(ArrowOverlay.prototype, {
            // Реализовываем все методы и события, которые требует интерфейс IOverlay.
            getData: function () {
                return this._data;
            },

            setData: function (data) {
                if (this._data != data) {
                    var oldData = this._data;
                    this._data = data;
                    this.events.fire('datachange', {
                        oldData: oldData,
                        newData: data
                    });
                }
            },

            getMap: function () {
                return this._map;
            },

            setMap: function (map) {
                if (this._map != map) {
                    var oldMap = this._map;
                    if (!map) {
                        this._onRemoveFromMap();
                    }
                    this._map = map;
                    if (map) {
                        this._onAddToMap();
                    }
                    this.events.fire('mapchange', {
                        oldMap: oldMap,
                        newMap: map
                    });
                }
            },

            setGeometry: function (geometry) {
                if (this._geometry != geometry) {
                    var oldGeometry = geometry;
                    this._geometry = geometry;
                    if (this.getMap() && geometry) {
                        this._rebuild();
                    }
                    this.events.fire('geometrychange', {
                        oldGeometry: oldGeometry,
                        newGeometry: geometry
                    });
                }
            },

            getGeometry: function () {
                return this._geometry;
            },

            getShape: function () {
                return null;
            },

            isEmpty: function () {
                return false;
            },

            _rebuild: function () {
                this._onRemoveFromMap();
                this._onAddToMap();
            },

            _onAddToMap: function () {
                // Военная хитрость - чтобы в прозрачной ломаной хорошо отрисовывались самопересечения,
                // мы рисуем вместо линии многоугольник.
                // Каждый контур многоугольника будет отвечать за часть линии.
                this._overlay = new PolygonOverlay(new PolygonGeometry(this._createArrowContours()));
                this._startOverlayListening();
                // Эта строчка свяжет два менеджера опций.
                // Опции, заданные в родительском менеджере,
                // будут распространяться и на дочерний.
                this._overlay.options.setParent(this.options);
                this._overlay.setMap(this.getMap());
            },

            _onRemoveFromMap: function () {
                this._overlay.setMap(null);
                this._overlay.options.setParent(null);
                this._stopOverlayListening();
            },

            _startOverlayListening: function () {
                this._overlay.events.add(domEvents, this._onDomEvent, this);
            },

            _stopOverlayListening: function () {
                this._overlay.events.remove(domEvents, this._onDomEvent, this);
            },

            _onDomEvent: function (e) {
                // Мы слушаем события от дочернего служебного оверлея
                // и прокидываем их на внешнем классе.
                // Это делается для того, чтобы в событии было корректно определено
                // поле target.
                this.events.fire(e.get('type'), new Event({
                    target: this
                    // Свяжем исходное событие с текущим, чтобы все поля данных дочернего события
                    // были доступны в производном событии.
                }, e));
            },

            _createArrowContours: function () {
                var contours = [],
                    mainLineCoordinates = this.getGeometry().getCoordinates(),
                    arrowLength = calculateArrowLength(
                        mainLineCoordinates,
                        this.options.get('arrowMinLength', 3),
                        this.options.get('arrowMaxLength', 20)
                    );
                if (this.options.get('onlyArrow')) {
                    contours.push([[0,0],[0,0],[0,0]]);
                }
                else {
                    contours.push(getContourFromLineCoordinates(mainLineCoordinates));
                }
                // Будем рисовать стрелку только если длина линии не меньше длины стрелки.
                if (arrowLength > 0) {
                    // Создадим еще 2 контура для стрелочек.
                    var lastTwoCoordinates = [
                            mainLineCoordinates[mainLineCoordinates.length - 2],
                            mainLineCoordinates[mainLineCoordinates.length - 1]
                        ],
                        // Для удобства расчетов повернем стрелку так, чтобы она была направлена вдоль оси y,
                        // а потом развернем результаты обратно.
                        rotationAngle = getRotationAngle(lastTwoCoordinates[0], lastTwoCoordinates[1]),
                        rotatedCoordinates = rotate(lastTwoCoordinates, rotationAngle),

                        arrowAngle = this.options.get('arrowAngle', 20) / 180 * Math.PI,
                        arrowBeginningCoordinates = getArrowsBeginningCoordinates(
                            rotatedCoordinates,
                            arrowLength,
                            arrowAngle
                        ),
                        firstArrowCoordinates = rotate([
                            arrowBeginningCoordinates[0],
                            rotatedCoordinates[1]
                        ], -rotationAngle),
                        secondArrowCoordinates = rotate([
                            arrowBeginningCoordinates[1],
                            rotatedCoordinates[1]
                        ], -rotationAngle);

                    contours.push(getContourFromLineCoordinates(firstArrowCoordinates));
                    contours.push(getContourFromLineCoordinates(secondArrowCoordinates));
                }
                return contours;
            }
        });

        function getArrowsBeginningCoordinates (coordinates, arrowLength, arrowAngle) {
            var p1 = coordinates[0],
                p2 = coordinates[1],
                dx = arrowLength * Math.sin(arrowAngle),
                y = p2[1] - arrowLength * Math.cos(arrowAngle);
            return [[p1[0] - dx, y], [p1[0] + dx, y]];
        }

        function rotate (coordinates, angle) {
            var rotatedCoordinates = [];
            for (var i = 0, l = coordinates.length, x, y; i < l; i++) {
                x = coordinates[i][0];
                y = coordinates[i][1];
                rotatedCoordinates.push([
                    x * Math.cos(angle) - y * Math.sin(angle),
                    x * Math.sin(angle) + y * Math.cos(angle)
                ]);
            }
            return rotatedCoordinates;
        }

        function getRotationAngle (p1, p2) {
            return Math.PI / 2 - Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
        }

        function getContourFromLineCoordinates (coords) {
            var contour = coords.slice();
            for (var i = coords.length - 2; i > -1; i--) {
                contour.push(coords[i]);
            }
            return contour;
        }

        function calculateArrowLength (coords, minLength, maxLength) {
            var linePixelLength = 0;
            for (var i = 1, l = coords.length; i < l; i++) {
                linePixelLength += getVectorLength(
                    coords[i][0] - coords[i - 1][0],
                    coords[i][1] - coords[i - 1][1]
                );
                if (linePixelLength / 3 > maxLength) {
                    return maxLength;
                }
            }
            var finalArrowLength = linePixelLength / 3;
            return finalArrowLength < minLength ? 0 : finalArrowLength;
        }

        function getVectorLength (x, y) {
            return Math.sqrt(x * x + y * y);
        }

        provide(ArrowOverlay);
    });
}

(function() {
    "use strict";

    window.opener = null;
})();

$(function () {
    init_event_handlers();
});

document.addEventListener("turbolinks:load", function() {
    document_ready();
    window_onload();
    if (typeof window['turbolinks_load_initially'] !== 'undefined') {
        Blazy.revalidate();
    }
    $("html").removeClass("fancybox-enabled");
    $("#fancybox-style-noscroll").remove();
    window['turbolinks_load_initially'] = true;
});

function document_ready() {
    var ts = (new Date()).getTime();
    var $body = $("body");
    $body.addClass("ready");

    var os = navigator.platform.toLowerCase();
    if (os.indexOf("mac") !== -1) {
        $body.addClass("mac");
    }

    responsive_init();
    bind_widgets();

    $(document).ajaxStart(function () {
        $('body').data('lastajax', (new Date()).getTime());
        var te_message = "Ajax Load Time: ??? ms";
        minilog('lastajax', te_message, true);
    });
    $(document).ajaxStop(function () {
        if ($('body').data('lastajax')) {
            var te_message = "Ajax Load Time: " + ((new Date()).getTime() - $('body').data('lastajax')) + ' ms';
            minilog('lastajax', te_message, true);
        }
    });
    $(document).ajaxComplete(function () {
        ajaxCompleteDelay(function(){
            bind_widgets();
        }, 100);
    });

    var $edit_icon = $(".edit-icon");
    if ($edit_icon.length && location.hash === "#edit") {
        $edit_icon.first().trigger("click");
    }

    scroll_animations_init();

    var te_message = "On-Ready Load Time: " + ((new Date()).getTime() - ts) + ' ms';
    console.log(te_message);
    minilog('onready', te_message);
}

var ajaxCompleteDelay = (function () {
    var timer = 0;
    return function (callback, ms) {
        clearTimeout(timer);
        timer = setTimeout(callback, ms);
    };
})();

function window_onload() {
    var ts = (new Date()).getTime();
    $("body").addClass("win-loaded").removeClass("win-not-loaded");

    responsive_update();
    map_load();
    vk_comments_init();

    var te_message = "Window Load Time: " + ((new Date()).getTime() - ts) + ' ms';
    console.log(te_message);
    minilog('winload', te_message);
}

$(window).scroll(function () {
    var $body = $("body");
    if (typeof $body.data("scrollval") === "undefined") $body.data("scrollval", 0);

    scroll_animations();

    $body.data("scrollval", $(window).scrollTop());
});

function init_event_handlers() {

    fix_touch_hovers();
    click_touch_init();
    menu_init();
    search_init();
    textfield_init();
    loader_init();
    expand_it_init();
    toggle_element_init();
    scroll_load_init();
    tabs_init();
    goto_init();
    //map_on_scroll_init();
    cookie_init();
    blazy_init();
    misc_init();
}

$(window).on("resize", function (e) {
    responsive_update();
    scroll_animations();
});

function bind_widgets(context) {
    sticky_init(null, context);
    img_to_bg();
    textfield_bind_init();
    checkbox_plain_init();
    mask_init();
    selectbox_init();
    tooltip_init();
    fancybox_init(context);
    notification_init();
    validate_init();
    depends_on_init();
    autocomplete_init();
    wysywyg_init();
    copy_init();
    search_bind_init();
    map_on_scroll_init(null, context);

    $(".js-noty-onload").not(".js-noty-onload-inited").each(function(){
        var type = $(this).data('type');
        var timeout = $(this).data('timeout');
        var container = $(this).data('container');
        new Noty({
            type: type?type:'alert',
            timeout: timeout?timeout:5000,
            text: $(this).html(),
            container: (container)?container:false
        }).show();
    }).addClass("js-noty-onload-inited");

    if (user_can('edit objects')) {
        image_sortable_init();
    }
}
//# sourceMappingURL=build-noncritical.js.map


}
$(function() {
    // Принудительно переинициализируем все тултипы на странице
    if (window.tooltip_init) {
        tooltip_init($('.tooltip, .tooltip-popover'));
    }
});
/*
     FILE ARCHIVED ON 14:48:13 Oct 08, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 11:22:29 May 16, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.554
  exclusion.robots: 0.029
  exclusion.robots.policy: 0.017
  esindex: 0.011
  cdx.remote: 13.097
  LoadShardBlock: 186.856 (3)
  PetaboxLoader3.datanode: 123.776 (5)
  PetaboxLoader3.resolve: 227.504 (3)
  load_resource: 244.878 (2)
*/