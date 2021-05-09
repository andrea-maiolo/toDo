(()=>{"use strict";const e=function(){!function(e,t){let n=document.querySelector("#newTaskForm").elements.priority;for(let e=0;e<n.length;e++)n[e].checked&&(n[e].checked=!1)}()},t=[];function n(e,t,n,r,a){this.title=e,this.description=t,this.schedule=n,this.category=r,this.priority=a}function r(e){this.title=e}const a=new r("Inbox"),i=[];function o(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function u(e){o(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function s(e){o(1,arguments);var t=u(e);return!isNaN(t)}i.push(a);var c={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}};function l(e){return function(t){var n=t||{},r=n.width?String(n.width):e.defaultWidth;return e.formats[r]||e.formats[e.defaultWidth]}}var d,f={date:l({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:l({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:l({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},h={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function m(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function g(e){return function(t,n){var r=String(t),a=n||{},i=a.width,o=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],u=r.match(o);if(!u)return null;var s,c=u[0],l=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth];return s="[object Array]"===Object.prototype.toString.call(l)?function(e,t){for(var n=0;n<e.length;n++)if(e[n].test(c))return n}(l):function(e,t){for(var n in e)if(e.hasOwnProperty(n)&&e[n].test(c))return n}(l),s=e.valueCallback?e.valueCallback(s):s,{value:s=a.valueCallback?a.valueCallback(s):s,rest:r.slice(c.length)}}}const v={code:"en-US",formatDistance:function(e,t,n){var r;return n=n||{},r="string"==typeof c[e]?c[e]:1===t?c[e].one:c[e].other.replace("{{count}}",t),n.addSuffix?n.comparison>0?"in "+r:r+" ago":r},formatLong:f,formatRelative:function(e,t,n,r){return h[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:m({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:m({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return Number(e)-1}}),month:m({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:m({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:m({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(d={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e,t){var n=String(e),r=t||{},a=n.match(d.matchPattern);if(!a)return null;var i=a[0],o=n.match(d.parsePattern);if(!o)return null;var u=d.valueCallback?d.valueCallback(o[0]):o[0];return{value:u=r.valueCallback?r.valueCallback(u):u,rest:n.slice(i.length)}}),era:g({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:g({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:g({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:g({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function w(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}function y(e,t){o(2,arguments);var n=u(e).getTime(),r=w(t);return new Date(n+r)}function p(e,t){o(2,arguments);var n=w(t);return y(e,-n)}function b(e,t){for(var n=e<0?"-":"",r=Math.abs(e).toString();r.length<t;)r="0"+r;return n+r}const T=function(e,t){var n=e.getUTCFullYear(),r=n>0?n:1-n;return b("yy"===t?r%100:r,t.length)},C=function(e,t){var n=e.getUTCMonth();return"M"===t?String(n+1):b(n+1,2)},M=function(e,t){return b(e.getUTCDate(),t.length)},k=function(e,t){return b(e.getUTCHours()%12||12,t.length)},D=function(e,t){return b(e.getUTCHours(),t.length)},S=function(e,t){return b(e.getUTCMinutes(),t.length)},L=function(e,t){return b(e.getUTCSeconds(),t.length)},x=function(e,t){var n=t.length,r=e.getUTCMilliseconds();return b(Math.floor(r*Math.pow(10,n-3)),t.length)};var E=864e5;function N(e){o(1,arguments);var t=1,n=u(e),r=n.getUTCDay(),a=(r<t?7:0)+r-t;return n.setUTCDate(n.getUTCDate()-a),n.setUTCHours(0,0,0,0),n}function U(e){o(1,arguments);var t=u(e),n=t.getUTCFullYear(),r=new Date(0);r.setUTCFullYear(n+1,0,4),r.setUTCHours(0,0,0,0);var a=N(r),i=new Date(0);i.setUTCFullYear(n,0,4),i.setUTCHours(0,0,0,0);var s=N(i);return t.getTime()>=a.getTime()?n+1:t.getTime()>=s.getTime()?n:n-1}function P(e){o(1,arguments);var t=U(e),n=new Date(0);n.setUTCFullYear(t,0,4),n.setUTCHours(0,0,0,0);var r=N(n);return r}var q=6048e5;function O(e,t){o(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.weekStartsOn,i=null==a?0:w(a),s=null==n.weekStartsOn?i:w(n.weekStartsOn);if(!(s>=0&&s<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var c=u(e),l=c.getUTCDay(),d=(l<s?7:0)+l-s;return c.setUTCDate(c.getUTCDate()-d),c.setUTCHours(0,0,0,0),c}function W(e,t){o(1,arguments);var n=u(e,t),r=n.getUTCFullYear(),a=t||{},i=a.locale,s=i&&i.options&&i.options.firstWeekContainsDate,c=null==s?1:w(s),l=null==a.firstWeekContainsDate?c:w(a.firstWeekContainsDate);if(!(l>=1&&l<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var d=new Date(0);d.setUTCFullYear(r+1,0,l),d.setUTCHours(0,0,0,0);var f=O(d,t),h=new Date(0);h.setUTCFullYear(r,0,l),h.setUTCHours(0,0,0,0);var m=O(h,t);return n.getTime()>=f.getTime()?r+1:n.getTime()>=m.getTime()?r:r-1}function Y(e,t){o(1,arguments);var n=t||{},r=n.locale,a=r&&r.options&&r.options.firstWeekContainsDate,i=null==a?1:w(a),u=null==n.firstWeekContainsDate?i:w(n.firstWeekContainsDate),s=W(e,t),c=new Date(0);c.setUTCFullYear(s,0,u),c.setUTCHours(0,0,0,0);var l=O(c,t);return l}var H=6048e5;function F(e,t){var n=e>0?"-":"+",r=Math.abs(e),a=Math.floor(r/60),i=r%60;if(0===i)return n+String(a);var o=t||"";return n+String(a)+o+b(i,2)}function z(e,t){return e%60==0?(e>0?"-":"+")+b(Math.abs(e)/60,2):B(e,t)}function B(e,t){var n=t||"",r=e>0?"-":"+",a=Math.abs(e);return r+b(Math.floor(a/60),2)+n+b(a%60,2)}const j={G:function(e,t,n){var r=e.getUTCFullYear()>0?1:0;switch(t){case"G":case"GG":case"GGG":return n.era(r,{width:"abbreviated"});case"GGGGG":return n.era(r,{width:"narrow"});case"GGGG":default:return n.era(r,{width:"wide"})}},y:function(e,t,n){if("yo"===t){var r=e.getUTCFullYear(),a=r>0?r:1-r;return n.ordinalNumber(a,{unit:"year"})}return T(e,t)},Y:function(e,t,n,r){var a=W(e,r),i=a>0?a:1-a;return"YY"===t?b(i%100,2):"Yo"===t?n.ordinalNumber(i,{unit:"year"}):b(i,t.length)},R:function(e,t){return b(U(e),t.length)},u:function(e,t){return b(e.getUTCFullYear(),t.length)},Q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"Q":return String(r);case"QQ":return b(r,2);case"Qo":return n.ordinalNumber(r,{unit:"quarter"});case"QQQ":return n.quarter(r,{width:"abbreviated",context:"formatting"});case"QQQQQ":return n.quarter(r,{width:"narrow",context:"formatting"});case"QQQQ":default:return n.quarter(r,{width:"wide",context:"formatting"})}},q:function(e,t,n){var r=Math.ceil((e.getUTCMonth()+1)/3);switch(t){case"q":return String(r);case"qq":return b(r,2);case"qo":return n.ordinalNumber(r,{unit:"quarter"});case"qqq":return n.quarter(r,{width:"abbreviated",context:"standalone"});case"qqqqq":return n.quarter(r,{width:"narrow",context:"standalone"});case"qqqq":default:return n.quarter(r,{width:"wide",context:"standalone"})}},M:function(e,t,n){var r=e.getUTCMonth();switch(t){case"M":case"MM":return C(e,t);case"Mo":return n.ordinalNumber(r+1,{unit:"month"});case"MMM":return n.month(r,{width:"abbreviated",context:"formatting"});case"MMMMM":return n.month(r,{width:"narrow",context:"formatting"});case"MMMM":default:return n.month(r,{width:"wide",context:"formatting"})}},L:function(e,t,n){var r=e.getUTCMonth();switch(t){case"L":return String(r+1);case"LL":return b(r+1,2);case"Lo":return n.ordinalNumber(r+1,{unit:"month"});case"LLL":return n.month(r,{width:"abbreviated",context:"standalone"});case"LLLLL":return n.month(r,{width:"narrow",context:"standalone"});case"LLLL":default:return n.month(r,{width:"wide",context:"standalone"})}},w:function(e,t,n,r){var a=function(e,t){o(1,arguments);var n=u(e),r=O(n,t).getTime()-Y(n,t).getTime();return Math.round(r/H)+1}(e,r);return"wo"===t?n.ordinalNumber(a,{unit:"week"}):b(a,t.length)},I:function(e,t,n){var r=function(e){o(1,arguments);var t=u(e),n=N(t).getTime()-P(t).getTime();return Math.round(n/q)+1}(e);return"Io"===t?n.ordinalNumber(r,{unit:"week"}):b(r,t.length)},d:function(e,t,n){return"do"===t?n.ordinalNumber(e.getUTCDate(),{unit:"date"}):M(e,t)},D:function(e,t,n){var r=function(e){o(1,arguments);var t=u(e),n=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var r=t.getTime(),a=n-r;return Math.floor(a/E)+1}(e);return"Do"===t?n.ordinalNumber(r,{unit:"dayOfYear"}):b(r,t.length)},E:function(e,t,n){var r=e.getUTCDay();switch(t){case"E":case"EE":case"EEE":return n.day(r,{width:"abbreviated",context:"formatting"});case"EEEEE":return n.day(r,{width:"narrow",context:"formatting"});case"EEEEEE":return n.day(r,{width:"short",context:"formatting"});case"EEEE":default:return n.day(r,{width:"wide",context:"formatting"})}},e:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"e":return String(i);case"ee":return b(i,2);case"eo":return n.ordinalNumber(i,{unit:"day"});case"eee":return n.day(a,{width:"abbreviated",context:"formatting"});case"eeeee":return n.day(a,{width:"narrow",context:"formatting"});case"eeeeee":return n.day(a,{width:"short",context:"formatting"});case"eeee":default:return n.day(a,{width:"wide",context:"formatting"})}},c:function(e,t,n,r){var a=e.getUTCDay(),i=(a-r.weekStartsOn+8)%7||7;switch(t){case"c":return String(i);case"cc":return b(i,t.length);case"co":return n.ordinalNumber(i,{unit:"day"});case"ccc":return n.day(a,{width:"abbreviated",context:"standalone"});case"ccccc":return n.day(a,{width:"narrow",context:"standalone"});case"cccccc":return n.day(a,{width:"short",context:"standalone"});case"cccc":default:return n.day(a,{width:"wide",context:"standalone"})}},i:function(e,t,n){var r=e.getUTCDay(),a=0===r?7:r;switch(t){case"i":return String(a);case"ii":return b(a,t.length);case"io":return n.ordinalNumber(a,{unit:"day"});case"iii":return n.day(r,{width:"abbreviated",context:"formatting"});case"iiiii":return n.day(r,{width:"narrow",context:"formatting"});case"iiiiii":return n.day(r,{width:"short",context:"formatting"});case"iiii":default:return n.day(r,{width:"wide",context:"formatting"})}},a:function(e,t,n){var r=e.getUTCHours()/12>=1?"pm":"am";switch(t){case"a":case"aa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"aaa":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"aaaa":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},b:function(e,t,n){var r,a=e.getUTCHours();switch(r=12===a?"noon":0===a?"midnight":a/12>=1?"pm":"am",t){case"b":case"bb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"bbb":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"bbbb":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},B:function(e,t,n){var r,a=e.getUTCHours();switch(r=a>=17?"evening":a>=12?"afternoon":a>=4?"morning":"night",t){case"B":case"BB":case"BBB":return n.dayPeriod(r,{width:"abbreviated",context:"formatting"});case"BBBBB":return n.dayPeriod(r,{width:"narrow",context:"formatting"});case"BBBB":default:return n.dayPeriod(r,{width:"wide",context:"formatting"})}},h:function(e,t,n){if("ho"===t){var r=e.getUTCHours()%12;return 0===r&&(r=12),n.ordinalNumber(r,{unit:"hour"})}return k(e,t)},H:function(e,t,n){return"Ho"===t?n.ordinalNumber(e.getUTCHours(),{unit:"hour"}):D(e,t)},K:function(e,t,n){var r=e.getUTCHours()%12;return"Ko"===t?n.ordinalNumber(r,{unit:"hour"}):b(r,t.length)},k:function(e,t,n){var r=e.getUTCHours();return 0===r&&(r=24),"ko"===t?n.ordinalNumber(r,{unit:"hour"}):b(r,t.length)},m:function(e,t,n){return"mo"===t?n.ordinalNumber(e.getUTCMinutes(),{unit:"minute"}):S(e,t)},s:function(e,t,n){return"so"===t?n.ordinalNumber(e.getUTCSeconds(),{unit:"second"}):L(e,t)},S:function(e,t){return x(e,t)},X:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();if(0===a)return"Z";switch(t){case"X":return z(a);case"XXXX":case"XX":return B(a);case"XXXXX":case"XXX":default:return B(a,":")}},x:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"x":return z(a);case"xxxx":case"xx":return B(a);case"xxxxx":case"xxx":default:return B(a,":")}},O:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"O":case"OO":case"OOO":return"GMT"+F(a,":");case"OOOO":default:return"GMT"+B(a,":")}},z:function(e,t,n,r){var a=(r._originalDate||e).getTimezoneOffset();switch(t){case"z":case"zz":case"zzz":return"GMT"+F(a,":");case"zzzz":default:return"GMT"+B(a,":")}},t:function(e,t,n,r){var a=r._originalDate||e;return b(Math.floor(a.getTime()/1e3),t.length)},T:function(e,t,n,r){return b((r._originalDate||e).getTime(),t.length)}};function X(e,t){switch(e){case"P":return t.date({width:"short"});case"PP":return t.date({width:"medium"});case"PPP":return t.date({width:"long"});case"PPPP":default:return t.date({width:"full"})}}function G(e,t){switch(e){case"p":return t.time({width:"short"});case"pp":return t.time({width:"medium"});case"ppp":return t.time({width:"long"});case"pppp":default:return t.time({width:"full"})}}const Q={p:G,P:function(e,t){var n,r=e.match(/(P+)(p+)?/),a=r[1],i=r[2];if(!i)return X(e,t);switch(a){case"P":n=t.dateTime({width:"short"});break;case"PP":n=t.dateTime({width:"medium"});break;case"PPP":n=t.dateTime({width:"long"});break;case"PPPP":default:n=t.dateTime({width:"full"})}return n.replace("{{date}}",X(a,t)).replace("{{time}}",G(i,t))}};function I(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}var A=["D","DD"],R=["YY","YYYY"];function J(e){return-1!==A.indexOf(e)}function Z(e){return-1!==R.indexOf(e)}function $(e,t,n){if("YYYY"===e)throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("YY"===e)throw new RangeError("Use `yy` instead of `YY` (in `".concat(t,"`) for formatting years to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("D"===e)throw new RangeError("Use `d` instead of `D` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"));if("DD"===e)throw new RangeError("Use `dd` instead of `DD` (in `".concat(t,"`) for formatting days of the month to the input `").concat(n,"`; see: https://git.io/fxCyr"))}var _=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,V=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,K=/^'([^]*?)'?$/,ee=/''/g,te=/[a-zA-Z]/;function ne(e){return e.match(K)[1].replace(ee,"'")}var re=36e5,ae={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},ie=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,oe=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,ue=/^([+-])(\d{2})(?::?(\d{2}))?$/;function se(e){var t,n={},r=e.split(ae.dateTimeDelimiter);if(r.length>2)return n;if(/:/.test(r[0])?(n.date=null,t=r[0]):(n.date=r[0],t=r[1],ae.timeZoneDelimiter.test(n.date)&&(n.date=e.split(ae.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){var a=ae.timezone.exec(t);a?(n.time=t.replace(a[1],""),n.timezone=a[1]):n.time=t}return n}function ce(e,t){var n=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),r=e.match(n);if(!r)return{year:null};var a=r[1]&&parseInt(r[1]),i=r[2]&&parseInt(r[2]);return{year:null==i?a:100*i,restDateString:e.slice((r[1]||r[2]).length)}}function le(e,t){if(null===t)return null;var n=e.match(ie);if(!n)return null;var r=!!n[4],a=de(n[1]),i=de(n[2])-1,o=de(n[3]),u=de(n[4]),s=de(n[5])-1;if(r)return function(e,t,n){return t>=1&&t<=53&&n>=0&&n<=6}(0,u,s)?function(e,t,n){var r=new Date(0);r.setUTCFullYear(e,0,4);var a=7*(t-1)+n+1-(r.getUTCDay()||7);return r.setUTCDate(r.getUTCDate()+a),r}(t,u,s):new Date(NaN);var c=new Date(0);return function(e,t,n){return t>=0&&t<=11&&n>=1&&n<=(ge[t]||(ve(e)?29:28))}(t,i,o)&&function(e,t){return t>=1&&t<=(ve(e)?366:365)}(t,a)?(c.setUTCFullYear(t,i,Math.max(a,o)),c):new Date(NaN)}function de(e){return e?parseInt(e):1}function fe(e){var t=e.match(oe);if(!t)return null;var n=he(t[1]),r=he(t[2]),a=he(t[3]);return function(e,t,n){return 24===e?0===t&&0===n:n>=0&&n<60&&t>=0&&t<60&&e>=0&&e<25}(n,r,a)?n*re+6e4*r+1e3*a:NaN}function he(e){return e&&parseFloat(e.replace(",","."))||0}function me(e){if("Z"===e)return 0;var t=e.match(ue);if(!t)return 0;var n="+"===t[1]?-1:1,r=parseInt(t[2]),a=t[3]&&parseInt(t[3])||0;return function(e,t){return t>=0&&t<=59}(0,a)?n*(r*re+6e4*a):NaN}var ge=[31,null,31,30,31,30,31,31,30,31,30,31];function ve(e){return e%400==0||e%4==0&&e%100}const we=function(e){const t=document.querySelector("#categoryContainer");let n=document.createElement("div");n.classList.add("divCategory");let r=document.createElement("button");r.classList.add("pOfCategory"),r.innerHTML=e.title;let a=document.createElement("button");a.classList.add("deleteCategoryButton");let i=document.createElement("i");i.classList.add("glyphicon"),i.classList.add("glyphicon-trash"),a.appendChild(i),a.addEventListener("click",(()=>{t.removeChild(n),pe(r)})),n.appendChild(a),n.appendChild(r),t.appendChild(n)},ye=function(){let e=document.getElementsByClassName("tasks");if(null!=e)for(let t=e.length-1;t>=0;t--)e[t].parentNode.removeChild(e[t])},pe=function(e){let n=i.indexOf(e);i.splice(n,1);let r=e.innerHTML;t.forEach((e=>{if(e.category==r){let n=t.indexOf(e);t.splice(n,1),xe()}})),be()},be=function(){let e=JSON.stringify(i);window.localStorage.setItem("localLOC",e)};let Te;const Ce=function(){let e=i[i.length-1];Te=e.title},Me=function(){let n=document.querySelectorAll(".pOfCategory");const r=function(){let e=document.getElementsByClassName("tasks");if(null!=e)if("Inbox"==this.innerHTML){const n=t.filter((e=>"Done"!=e.category));for(let t=e.length-1;t>=0;t--)e[t].parentNode.removeChild(e[t]);n.forEach((e=>De(e)))}else{const n=t.filter((e=>e.category==this.innerHTML));for(let t=e.length-1;t>=0;t--)e[t].parentNode.removeChild(e[t]);n.forEach((e=>De(e)))}},a=function(){Te=this.innerHTML};n.forEach((e=>e.addEventListener("click",r))),n.forEach((e=>e.addEventListener("click",a))),n.forEach((t=>t.addEventListener("click",e())))},ke=function(e){t.push(e),De(e),xe()},De=function(e){const t=document.querySelector("#taskContainer");let n=document.createElement("div");n.classList.add("tasks");let r=document.createElement("p");r.classList.add("pOfTask"),r.classList.add("taskTitle"),r.innerHTML=e.title;let a=document.createElement("div");a.classList.add("details");let i=document.createElement("p");i.classList.add("pOfTask"),i.classList.add("taskDescription"),i.innerHTML=e.description;let c=document.createElement("p");c.classList.add("pOfTask"),c.classList.add("taskCategory"),c.innerHTML=e.category,a.appendChild(i),a.appendChild(c),a.style.display="none";let l=document.createElement("p");l.classList.add("pOfTask"),l.classList.add("taskSchedule");let d=function(e,t,n){o(2,arguments);var r=String(t),a=n||{},i=a.locale||v,c=i.options&&i.options.firstWeekContainsDate,l=null==c?1:w(c),d=null==a.firstWeekContainsDate?l:w(a.firstWeekContainsDate);if(!(d>=1&&d<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var f=i.options&&i.options.weekStartsOn,h=null==f?0:w(f),m=null==a.weekStartsOn?h:w(a.weekStartsOn);if(!(m>=0&&m<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!i.localize)throw new RangeError("locale must contain localize property");if(!i.formatLong)throw new RangeError("locale must contain formatLong property");var g=u(e);if(!s(g))throw new RangeError("Invalid time value");var y=I(g),b=p(g,y),T={firstWeekContainsDate:d,weekStartsOn:m,locale:i,_originalDate:g};return r.match(V).map((function(e){var t=e[0];return"p"===t||"P"===t?(0,Q[t])(e,i.formatLong,T):e})).join("").match(_).map((function(n){if("''"===n)return"'";var r=n[0];if("'"===r)return ne(n);var o=j[r];if(o)return!a.useAdditionalWeekYearTokens&&Z(n)&&$(n,t,e),!a.useAdditionalDayOfYearTokens&&J(n)&&$(n,t,e),o(b,n,i.localize,T);if(r.match(te))throw new RangeError("Format string contains an unescaped latin alphabet character `"+r+"`");return n})).join("")}(function(e,t){o(1,arguments);var n=t||{},r=null==n.additionalDigits?2:w(n.additionalDigits);if(2!==r&&1!==r&&0!==r)throw new RangeError("additionalDigits must be 0, 1 or 2");if("string"!=typeof e&&"[object String]"!==Object.prototype.toString.call(e))return new Date(NaN);var a,i=se(e);if(i.date){var u=ce(i.date,r);a=le(u.restDateString,u.year)}if(isNaN(a)||!a)return new Date(NaN);var s,c=a.getTime(),l=0;if(i.time&&(l=fe(i.time),isNaN(l)||null===l))return new Date(NaN);if(!i.timezone){var d=new Date(c+l),f=new Date(0);return f.setFullYear(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate()),f.setHours(d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),f}return s=me(i.timezone),isNaN(s)?new Date(NaN):new Date(c+l+s)}(e.schedule),"dd/MM/yyyy");l.innerHTML=d;let f=document.createElement("div");f.classList.add("divForButtons"),n.addEventListener("click",(()=>{"flex"==a.style.display?a.style.display="none":"none"==a.style.display&&(a.style.display="flex")}));let h=document.createElement("button");h.classList.add("deleteTask");let m=document.createElement("i");m.classList.add("glyphicon"),m.classList.add("glyphicon-trash"),h.appendChild(m),h.addEventListener("click",(()=>{t.removeChild(n),Se(e)}));let g=document.createElement("button");g.classList.add("modifyTask");let y=document.createElement("i");y.classList.add("glyphicon"),y.classList.add("glyphicon-edit"),g.appendChild(y),g.addEventListener("click",(()=>{let t=document.querySelector(".modificationFormDiv");t.classList.remove("deactivated"),t.classList.add("active"),document.querySelector("#modifyTitle").value=r.innerHTML,document.querySelector("#modifyDescription").value=i.innerHTML,document.querySelector("#modifyCategory").value=c.innerHTML,document.querySelector("#modifySchedule");let a=document.querySelector("#modifyTitle"),o=document.querySelector("#modifyDescription"),u=document.querySelector("#modifyCategory"),s=document.querySelector("#modifySchedule");document.querySelector("#confirmButton").addEventListener("click",(()=>{""!=a.value&&""!=s.value?(r.innerHTML=a.value,l.innerHTML=s.value,i.innerHTML=o.value,""!=u.value?c.innerHTML=u.value:alert("Please enter a category, use 'Inbox' as default"),t.classList.remove("active"),t.classList.add("deactivated")):alert("Please enter a valid date"),Le(n,e)})),document.querySelector("#discardButton").addEventListener("click",(()=>{t.classList.remove("active"),t.classList.add("deactivated")}))}));let b=document.createElement("div");b.classList.add("priorityBox"),function(e){switch(e){case"medium":b.style.backgroundColor="orange";break;case"low":b.style.backgroundColor="yellow";break;case"high":b.style.backgroundColor="red"}}(e.priority),n.appendChild(b),n.appendChild(r),n.appendChild(a),n.appendChild(l),f.appendChild(g),f.appendChild(h),n.appendChild(f),t.appendChild(n)},Se=function(e){let n=t.indexOf(e);t.splice(n,1),xe()},Le=function(e,n){let a=t.indexOf(n),o=t[a],u=e.childNodes[1].innerHTML,s=e.childNodes[3].innerHTML,c=e.childNodes[2].childNodes[0].innerHTML,l=e.childNodes[2].childNodes[1].innerHTML;if(u!=o.title&&(o.title=u),s!=o.schedule&&(o.schedule=s),c!=o.description&&(o.description=c),l!=o.category){o.category=l;let e=0;for(let t=0;t<i.length;t++){if(o.category==i[t].title)return;e++}if(e==i.length){let e=new r(o.category);i.push(e),we(e),Me(),be()}}xe()},xe=function(){let e=JSON.stringify(t);window.localStorage.setItem("localTG",e)};document.querySelector("#newTaskButton").addEventListener("click",(function(){document.querySelector(".taskFormCreation").classList.remove("taskFormCreation-invisible")})),function(){document.querySelector("#addToList").addEventListener("click",(function(){if(""!=t.value&&""!=a.value){let e=function(){let e;return function(t,n){let r=document.querySelector("#newTaskForm").elements.priority;for(var a=0;a<r.length;a++)if(r[a].checked){e=r[a].value;break}}(),e}();if(null==Te&&null==e){let e=new n(t.value,r.value,a.value,"Inbox","default");ke(e)}else if(null==Te&&null!=e){let i=new n(t.value,r.value,a.value,"Inbox",e);ke(i)}else if(null!=Te&&null==e){let e=new n(t.value,r.value,a.value,Te,"default");ke(e)}else if(null!=Te&&null!=e){let i=new n(t.value,r.value,a.value,Te,e);ke(i)}}e()}));let t=document.querySelector("#taskTitle"),r=document.querySelector("#taskDescription"),a=document.querySelector("#taskDate")}(),function(){const t=document.querySelector("#clear");t.addEventListener("click",(function(){let e=document.querySelector("#taskTitle"),t=document.querySelector("#taskDescription"),n=document.querySelector("#taskDate");e.value="",t.value="",n.value=""})),t.addEventListener("click",e)}(),document.querySelector("#addCategory").addEventListener("click",(function(){let e=document.querySelector("#categoryName");if(""!=e.value){for(let t=0;t<i.length;t++)if(e.value==i[t].title)return void alert("Please use a different category name");!function(e){i.push(e),we(e),ye(),Me(),Ce(),be()}(new r(e.value))}else alert("Please enter a value");e.value=""})),Me(),function(){let e=JSON.parse(localStorage.getItem("localTG"));if(e.length>0){for(let n=0;n<e.length;n++)t.push(e[n]);!function(){if(t.length>0)for(let e=0;e<t.length;e++)De(t[e])}()}}(),function(){let e=JSON.parse(localStorage.getItem("localLOC"));if(e.length>0){for(let t=1;t<e.length;t++)i.push(e[t]);!function(){if(i.length>0)for(let e=1;e<i.length;e++)we(i[e])}()}}()})();