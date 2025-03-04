;/*FB_PKG_DELIM*/

__d("CometFeedUnitOnFeedUnitErrorContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(null);g["default"]=b}),98);
__d("CometFeedUnitShouldPropagateErrorContext",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h||d("react");b=a.createContext(!0);g["default"]=b}),98);
__d("useOnInitialMount",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useEffect,j=b.useRef;function a(a){var b=j(!1);i(function(){b.current||(b.current=!0,a())})}g["default"]=a}),98);
__d("CometOnInitialMount.react",["useOnInitialMount"],(function(a,b,c,d,e,f,g){"use strict";function a(a){a=a.onInitialMount;c("useOnInitialMount")(a);return null}g["default"]=a}),98);
__d("useCommitCountRef",["react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useLayoutEffect,j=b.useRef;function a(){var a=j(0);i(function(){a.current+=1});return a}g["default"]=a}),98);
__d("CometFeedMatchRenderer.react",["CometErrorBoundary.react","CometFeedUnitLoggingContext","CometFeedUnitOnFeedUnitErrorContext","CometFeedUnitShouldPropagateErrorContext","CometOnInitialMount.react","CometRelay","FBLogger","ODS","XPlatReactEnvironment","react","recoverableViolation","requireDeferred","useCommitCountRef"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=h||(h=d("react"));b=h;var k=b.useCallback,l=b.useContext,m=b.useEffect,n=b.useRef,o=c("requireDeferred")("CometFeedStoriesStrategyErrorsTypedLoggerLite").__setRef("CometFeedMatchRenderer.react");function a(a){var b=a.match,e=a.matchRequired,f=e===void 0?!1:e,g=a.onUnsupported;e=a.preventErrorsFromFailingTheFeedUnit_USE_WITH_CAUTION;var h=a.props,p=a.section,q=a.trackingData;a=b!=null&&b.__module_component!=null?b:null;var r=c("useCommitCountRef")(),s=l(c("CometFeedUnitOnFeedUnitErrorContext"));b=l(c("CometFeedUnitShouldPropagateErrorContext"));var t=l(c("CometFeedUnitLoggingContext")),u=t.position,v=t.renderLocation,w=a!=null?d("CometRelay").ModuleResource.getModuleId(a):null,x=n(!1);m(function(){!x.current&&w!=null&&d("XPlatReactEnvironment").isWeb()&&((i||(i=d("ODS"))).bumpFraction(3478,"comet_feed_strategy_errors",w,0,1),i.bumpEntityKey(3478,"comet_feed_strategy_impressions",w),x.current=!0)},[w]);t=function(){g!=null&&g(),f&&c("recoverableViolation")("match required for Comet Feed section "+p+" and none was found","comet_feed")};var y=e!=null?!e:b;e=k(function(a){w!=null&&d("XPlatReactEnvironment").isWeb()&&(i||(i=d("ODS"))).bumpFraction(3478,"comet_feed_strategy_errors",w,1,0);o.onReady(function(b){b.log({error_name:a.message,error_propagated_to_feed_unit:s!=null&&y,is_within_feed_unit:s!=null,num_commits_before_error:r.current,position:u,render_location:v!=="%future added value"?v:null,section:p,strategy:w,tracking_data:q})});if(s==null){var b;c("FBLogger")("CometFeedSectionErrorOutsideFeedUnit").info("%s threw a js error outside of CometFeedUnit.",(b=w)!=null?b:"Unknown Strategy/Attachment Renderer");throw a}else y&&s(a)},[s,y,r,w,u,v,p,q]);return a==null?j.jsx(c("CometOnInitialMount.react"),{onInitialMount:t}):j.jsx(c("CometErrorBoundary.react"),{context:{project:"CometFeedSectionErrorBoundary"},onError:e,children:j.jsx(c("CometFeedUnitShouldPropagateErrorContext").Provider,{value:y,children:j.jsx(d("CometRelay").MatchContainer,{fallback:j.jsx(c("CometOnInitialMount.react"),{onInitialMount:t}),match:a,props:h})})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("usePageletMetadata",["CometHeroInteractionContext","react"],(function(a,b,c,d,e,f,g){"use strict";var h;b=h||d("react");var i=b.useContext,j=b.useLayoutEffect;function a(a,b){var d=i(c("CometHeroInteractionContext").Context);j(function(){d.logMetadata(a,b,d.pageletStack);return function(){d.logMetadata(a,null,d.pageletStack)}},[d,a,b])}g["default"]=a}),98);
__d("usePageletMatchMetadata",["RelayFBModuleResource","usePageletMetadata"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){b=b!=null?d("RelayFBModuleResource").getModuleId(b):null;c("usePageletMetadata")("ddd_"+a,b)}g["default"]=a}),98);