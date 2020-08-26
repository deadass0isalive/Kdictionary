if (typeof rvAgentPlayer !== 'undefined') {
    throw new Error('ResponsiveVoice Website Agent is already running');
}

var rvAgentPlayer = { version : 1 };
var rvApiKey = 'WGciAW2s';
var rvApiEndpoint = 'https://texttospeech.responsivevoice.org/v1/text:synthesize';

if (typeof responsiveVoice === 'undefined') {

/*
 ResponsiveVoice JS v1.6.2

 (c) 2015-2019 LearnBrite

 License: http://responsivevoice.org/license
*/
Array.from||(Array.from=function(){var t=Object.prototype.toString,r=function(q){return"function"===typeof q||"[object Function]"===t.call(q)},u=Math.pow(2,53)-1;return function(q){var a=Object(q);if(null==q)throw new TypeError("Array.from requires an array-like object - not null or undefined");var l=1<arguments.length?arguments[1]:void 0,p;if("undefined"!==typeof l){if(!r(l))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&
(p=arguments[2])}var b=Number(a.length);b=isNaN(b)?0:0!==b&&isFinite(b)?(0<b?1:-1)*Math.floor(Math.abs(b)):b;b=Math.min(Math.max(b,0),u);for(var c=r(this)?Object(new this(b)):Array(b),d=0,e;d<b;)e=a[d],c[d]=l?"undefined"===typeof p?l(e,d):l.call(p,e,d):e,d+=1;c.length=b;return c}}());
if("undefined"!=typeof responsiveVoice)console.log("ResponsiveVoice already loaded"),console.log(responsiveVoice);else var ResponsiveVoice=function(){function t(a){a=a.replace(/([\n\r])+/gm,"\n");for(var b=/([,.:!\u00a1?\u00bf;()\[\]\u2014\u00ab\u00bb])+[\n\r]/gm,d=!0;d;)null===a.match(b)?d=!1:a=a.replace(b,"$1 ");return a}function r(a,c){if(!l)return a;console.log(c);var b=a;try{for(var e=0;e<l.length;e++){var h=l[e],f=!1,g=h.collectionvoices;g?(Array.isArray(g)||(g=[g]),c.collectionvoice&&c.collectionvoice.name&&
-1!=g.indexOf(c.collectionvoice.name)&&(f=!0)):f=!0;var n=!1,k=h.systemvoices;k?(Array.isArray(k)||(k=[k]),c.systemvoice&&c.systemvoice.name&&-1!=k.indexOf(c.systemvoice.name)&&(n=!0)):n=!0;(null==g||null!=g&&f)&&(null==k||null!=k&&n)&&(b=b.replace(h.searchvalue,h.newvalue))}return b}catch(m){return console.warn("ResponsiveVoice: There was an error while processing the textReplacements array"),a}}function u(){var a=document.getElementsByTagName("script"),c;for(c=0;c<a.length;++c)if(a[c].src&&p.test(a[c].src)){var d=
a[c].src;var e=document.createElement("a");var h={};e.href=d;if(e.search){var f=e.search.replace(/^\?/,"").split("&");for(d=0;d<f.length;d++)e=f[d].split("="),h[e[0]]=e[1];h=h.source?h.source:!1}else h=!1;if(h&&"wp-plugin"==h)return p.lastIndex=0,!0}return!1}function q(){var a=document.getElementsByTagName("script"),c;for(c=0;c<a.length;++c)if(a[c].src&&p.test(a[c].src))return p.lastIndex=0,!1;return!0}var a=this;a.version="1.6.2";console.log("ResponsiveVoice r"+a.version);a.responsivevoices=[{name:"UK English Female",
flag:"gb",gender:"f",lang:"en-GB",voiceIDs:[3,7,171,201,5,1,257,286,342,258,287,343,8]},{name:"UK English Male",flag:"gb",gender:"m",lang:"en-GB",voiceIDs:[0,277,202,75,4,2,256,285,341,159]},{name:"US English Female",flag:"us",gender:"f",lang:"en-US",voiceIDs:[432,433,434,40,41,42,383,205,204,43,173,235,283,339,408,44]},{name:"US English Male",flag:"us",gender:"m",lang:"en-US",voiceIDs:[431,39,234,282,338,236,284,340,2,4,0,75,195,169]},{name:"Arabic Male",flag:"ar",gender:"m",lang:"ar-SA",voiceIDs:[96,
95,97,196,388]},{name:"Arabic Female",flag:"ar",gender:"f",lang:"ar-SA",voiceIDs:[98]},{name:"Armenian Male",flag:"hy",gender:"f",lang:"hy-AM",voiceIDs:[99]},{name:"Australian Female",flag:"au",gender:"f",lang:"en-AU",voiceIDs:[415,276,201,87,5,88]},{name:"Australian Male",flag:"au",gender:"m",lang:"en-AU",voiceIDs:[86,386]},{name:"Bangla Bangladesh Female",flag:"bd",gender:"f",lang:"bn-BD",voiceIDs:[435]},{name:"Bangla Bangladesh Male",flag:"bd",gender:"m",lang:"bn-BD",voiceIDs:[410,436]},{name:"Bangla India Female",
flag:"bd",gender:"f",lang:"bn-IN",voiceIDs:[447]},{name:"Bangla India Male",flag:"bd",gender:"m",lang:"bn-IN",voiceIDs:[411,448]},{name:"Brazilian Portuguese Female",flag:"br",gender:"f",lang:"pt-BR",voiceIDs:[245,124,123,125,186,223,126]},{name:"Brazilian Portuguese Male",flag:"br",gender:"m",lang:"pt-BR",voiceIDs:[315,332,371,399]},{name:"Chinese Female",flag:"cn",gender:"f",lang:"zh-CN",voiceIDs:[249,58,59,380,281,231,155,60,191,268,297,353,269,298,354,409,61]},{name:"Chinese Male",flag:"cn",gender:"m",
lang:"zh-CN",voiceIDs:[317,334,373,389]},{name:"Chinese (Hong Kong) Female",flag:"hk",gender:"f",lang:"zh-HK",voiceIDs:[192,193,232,250,251,270,299,355,409,444,252]},{name:"Chinese (Hong Kong) Male",flag:"hk",gender:"m",lang:"zh-HK",voiceIDs:[430,318,335,374,445,390]},{name:"Chinese Taiwan Female",flag:"tw",gender:"f",lang:"zh-TW",voiceIDs:[194,233,253,254,305,322,361,384,319,336,375,409,255]},{name:"Chinese Taiwan Male",flag:"tw",gender:"m",lang:"zh-TW",voiceIDs:[320,337,376,391]},{name:"Czech Female",
flag:"cz",gender:"f",lang:"cs-CZ",voiceIDs:[412,101,100,102,197,103]},{name:"Czech Male",flag:"cz",gender:"m",lang:"cs-CZ",voiceIDs:[161]},{name:"Danish Female",flag:"dk",gender:"f",lang:"da-DK",voiceIDs:[413,105,104,106,198,107]},{name:"Danish Male",flag:"da",gender:"m",lang:"da-DK",voiceIDs:[162]},{name:"Deutsch Female",flag:"de",gender:"f",lang:"de-DE",voiceIDs:[27,28,29,30,78,170,275,199,31,261,290,346,262,291,347,32]},{name:"Deutsch Male",flag:"de",gender:"m",lang:"de-DE",voiceIDs:[307,324,363,
377,393]},{name:"Dutch Female",flag:"nl",gender:"f",lang:"nl-NL",voiceIDs:[243,219,84,157,158,184,45]},{name:"Dutch Male",flag:"nl",gender:"m",lang:"nl-NL",voiceIDs:[157,220,407]},{name:"Estonian Male",flag:"ee",gender:"m",lang:"et-EE",voiceIDs:[416,446]},{name:"Filipino Female",flag:"ph",gender:"f",lang:"fil-PH",voiceIDs:[418,437]},{name:"Finnish Female",flag:"fi",gender:"f",lang:"fi-FI",voiceIDs:[417,90,89,91,209,92]},{name:"Finnish Male",flag:"fi",gender:"m",lang:"fi-FI",voiceIDs:[160]},{name:"French Female",
flag:"fr",gender:"f",lang:"fr-FR",voiceIDs:[240,21,22,23,77,178,279,210,266,295,351,304,321,360,26]},{name:"French Male",flag:"fr",gender:"m",lang:"fr-FR",voiceIDs:[311,328,367,378,392]},{name:"French Canadian Female",flag:"ca",gender:"f",lang:"fr-CA",voiceIDs:[419,210,449]},{name:"French Canadian Male",flag:"ca",gender:"m",lang:"fr-CA",voiceIDs:[450]},{name:"Greek Female",flag:"gr",gender:"f",lang:"el-GR",voiceIDs:[414,62,63,80,200,64]},{name:"Greek Male",flag:"gr",gender:"m",lang:"el-GR",voiceIDs:[163]},
{name:"Hindi Female",flag:"hi",gender:"f",lang:"hi-IN",voiceIDs:[247,66,154,179,213,259,288,344,67]},{name:"Hindi Male",flag:"hi",gender:"m",lang:"hi-IN",voiceIDs:[394]},{name:"Hungarian Female",flag:"hu",gender:"f",lang:"hu-HU",voiceIDs:[420,9,10,81,214,11]},{name:"Hungarian Male",flag:"hu",gender:"m",lang:"hu-HU",voiceIDs:[164]},{name:"Indonesian Female",flag:"id",gender:"f",lang:"id-ID",voiceIDs:[241,111,112,180,215,113]},{name:"Indonesian Male",flag:"id",gender:"m",lang:"id-ID",voiceIDs:[395]},
{name:"Italian Female",flag:"it",gender:"f",lang:"it-IT",voiceIDs:[242,33,34,35,36,37,79,181,216,271,300,356,38]},{name:"Italian Male",flag:"it",gender:"m",lang:"it-IT",voiceIDs:[312,329,368,406]},{name:"Japanese Female",flag:"jp",gender:"f",lang:"ja-JP",voiceIDs:[51,280,217,52,153,182,273,302,358,274,303,359,53]},{name:"Japanese Male",flag:"jp",gender:"m",lang:"ja-JP",voiceIDs:[248,50,313,330,369,396]},{name:"Korean Female",flag:"kr",gender:"f",lang:"ko-KR",voiceIDs:[54,55,56,156,183,218,306,323,
362,384,57]},{name:"Korean Male",flag:"kr",gender:"m",lang:"ko-KR",voiceIDs:[397]},{name:"Latin Female",flag:"va",gender:"f",lang:"la",voiceIDs:[114],deprecated:!0},{name:"Latin Male",flag:"va",gender:"m",lang:"la",voiceIDs:[165]},{name:"Nepali",flag:"np",gender:"f",lang:"ne-NP",voiceIDs:[423,441]},{name:"Norwegian Female",flag:"no",gender:"f",lang:"nb-NO",voiceIDs:[422,72,73,221,74]},{name:"Norwegian Male",flag:"no",gender:"m",lang:"nb-NO",voiceIDs:[166]},{name:"Polish Female",flag:"pl",gender:"f",
lang:"pl-PL",voiceIDs:[244,120,119,121,185,222,267,296,352,122]},{name:"Polish Male",flag:"pl",gender:"m",lang:"pl-PL",voiceIDs:[314,331,370,398]},{name:"Portuguese Female",flag:"br",gender:"f",lang:"pt-BR",voiceIDs:[128,127,129,187,224,272,301,357,130]},{name:"Portuguese Male",flag:"br",gender:"m",lang:"pt-BR",voiceIDs:[400]},{name:"Romanian Female",flag:"ro",gender:"f",lang:"ro-RO",voiceIDs:[424,151,150,152,225,46]},{name:"Russian Female",flag:"ru",gender:"f",lang:"ru-RU",voiceIDs:[246,47,48,83,
188,226,260,289,345,49]},{name:"Russian Male",flag:"ru",gender:"m",lang:"ru-RU",voiceIDs:[316,333,372,387]},{name:"Sinhala",flag:"lk",gender:"f",lang:"si-LK",voiceIDs:[425,442]},{name:"Slovak Female",flag:"sk",gender:"f",lang:"sk-SK",voiceIDs:[426,133,132,134,227,135]},{name:"Slovak Male",flag:"sk",gender:"m",lang:"sk-SK",voiceIDs:[167],deprecated:!0},{name:"Spanish Female",flag:"es",gender:"f",lang:"es-ES",voiceIDs:[19,238,16,17,18,20,76,174,207,263,292,348,264,293,349,15]},{name:"Spanish Male",
flag:"es",gender:"m",lang:"es-ES",voiceIDs:[309,326,365,401]},{name:"Spanish Latin American Female",flag:"es",gender:"f",lang:"es-MX",voiceIDs:[239,137,136,138,175,208,265,294,350,139]},{name:"Spanish Latin American Male",flag:"es",gender:"m",lang:"es-MX",voiceIDs:[136,310,327,366,402]},{name:"Swedish Female",flag:"sv",gender:"f",lang:"sv-SE",voiceIDs:[427,85,149,228,65]},{name:"Swedish Male",flag:"sv",gender:"m",lang:"sv-SE",voiceIDs:[148,168]},{name:"Tamil Female",flag:"hi",gender:"m",lang:"hi-IN",
voiceIDs:[451]},{name:"Tamil Male",flag:"hi",gender:"m",lang:"hi-IN",voiceIDs:[141]},{name:"Thai Female",flag:"th",gender:"f",lang:"th-TH",voiceIDs:[143,142,144,189,229,145]},{name:"Thai Male",flag:"th",gender:"m",lang:"th-TH",voiceIDs:[403]},{name:"Turkish Female",flag:"tr",gender:"f",lang:"tr-TR",voiceIDs:[69,70,82,190,230,71]},{name:"Turkish Male",flag:"tr",gender:"m",lang:"tr-TR",voiceIDs:[404]},{name:"Ukrainian Female",flag:"ua",gender:"f",lang:"uk-UA",voiceIDs:[428,443]},{name:"Vietnamese Female",
flag:"vi",gender:"f",lang:"vi-VN",voiceIDs:[429,405]},{name:"Vietnamese Male",flag:"vi",gender:"m",lang:"vi-VN",voiceIDs:[146]},{name:"Afrikaans Male",flag:"af",gender:"m",lang:"af-ZA",voiceIDs:[93]},{name:"Albanian Male",flag:"sq",gender:"m",lang:"sq-AL",voiceIDs:[94]},{name:"Bosnian Male",flag:"bs",gender:"m",lang:"bs",voiceIDs:[14]},{name:"Catalan Male",flag:"catalonia",gender:"m",lang:"ca-ES",voiceIDs:[68]},{name:"Croatian Male",flag:"hr",gender:"m",lang:"hr-HR",voiceIDs:[13]},{name:"Esperanto Male",
flag:"eo",gender:"m",lang:"eo",voiceIDs:[108]},{name:"Icelandic Male",flag:"is",gender:"m",lang:"is-IS",voiceIDs:[110]},{name:"Latvian Male",flag:"lv",gender:"m",lang:"lv-LV",voiceIDs:[115]},{name:"Macedonian Male",flag:"mk",gender:"m",lang:"mk-MK",voiceIDs:[116]},{name:"Moldavian Female",flag:"md",gender:"f",lang:"md",voiceIDs:[117]},{name:"Moldavian Male",flag:"md",gender:"m",lang:"md",voiceIDs:[117],deprecated:!0},{name:"Montenegrin Male",flag:"me",gender:"m",lang:"me",voiceIDs:[118]},{name:"Serbian Male",
flag:"sr",gender:"m",lang:"sr-RS",voiceIDs:[12]},{name:"Serbo-Croatian Male",flag:"hr",gender:"m",lang:"hr-HR",voiceIDs:[131]},{name:"Swahili Male",flag:"sw",gender:"m",lang:"sw-KE",voiceIDs:[140]},{name:"Welsh Male",flag:"cy",gender:"m",lang:"cy",voiceIDs:[147]},{name:"Fallback UK Female",flag:"gb",gender:"f",lang:"en-GB",voiceIDs:[8]}];a.voicecollection=[{name:"Google UK English Male"},{name:"Agnes"},{name:"Daniel Compact"},{name:"Google UK English Female"},{name:"en-GB",rate:.25,pitch:1},{name:"en-AU",
rate:.25,pitch:1},{name:"ingl\u00e9s Reino Unido"},{name:"English United Kingdom"},{name:"Fallback en-GB Female",lang:"en-GB",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Eszter Compact"},{name:"hu-HU",rate:.4},{name:"Fallback Hungarian Female",lang:"hu",fallbackvoice:!0,service:"g1"},{name:"Fallback Serbian Male",lang:"sr",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Croatian Male",lang:"hr",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Bosnian Male",lang:"bs",
fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Spanish Female",lang:"es",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Spanish Spain"},{name:"espa\u00f1ol Espa\u00f1a"},{name:"Diego Compact",rate:.3},{name:"Google Espa\u00f1ol"},{name:"es-ES",rate:.2},{name:"Google Fran\u00e7ais"},{name:"French France"},{name:"franc\u00e9s Francia"},{name:"Virginie Compact",rate:.5},{name:"fr-FR",rate:.25},{name:"Fallback French Female",lang:"fr",fallbackvoice:!0,service:"g1",gender:"female"},
{name:"Google Deutsch"},{name:"German Germany"},{name:"alem\u00e1n Alemania"},{name:"Yannick Compact",rate:.5},{name:"de-DE",rate:.25},{name:"Fallback Deutsch Female",lang:"de",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google Italiano"},{name:"Italian Italy"},{name:"italiano Italia"},{name:"Paolo Compact",rate:.5},{name:"it-IT",rate:.25},{name:"Fallback Italian Female",lang:"it",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google US English",timerSpeed:1},{name:"English United States"},
{name:"ingl\u00e9s Estados Unidos"},{name:"Vicki"},{name:"en-US",rate:.2,pitch:1,timerSpeed:1.3},{name:"Fallback US English",lang:"en-US",fallbackvoice:!0,timerSpeed:0,service:"g1",gender:"female"},{name:"Fallback Dutch Female",lang:"nl",fallbackvoice:!0,timerSpeed:0,service:"g1",gender:"female"},{name:"Fallback Romanian",lang:"ro",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Milena Compact"},{name:"ru-RU",rate:.25},{name:"Fallback Russian",lang:"ru",fallbackvoice:!0,service:"g1",gender:"female"},
{name:"Google \u65e5\u672c\u4eba",timerSpeed:1},{name:"Kyoko Compact"},{name:"ja-JP",rate:.25},{name:"Fallback Japanese Female",lang:"ja",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google \ud55c\uad6d\uc758",timerSpeed:1},{name:"Narae Compact"},{name:"ko-KR",rate:.25},{name:"Fallback Korean Female",lang:"ko",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google \u4e2d\u56fd\u7684",timerSpeed:1},{name:"Ting-Ting Compact"},{name:"zh-CN",rate:.25},{name:"Fallback Chinese",lang:"zh-CN",
fallbackvoice:!0,service:"g1",gender:"female"},{name:"Alexandros Compact"},{name:"el-GR",rate:.25},{name:"Fallback Greek",lang:"el",fallbackvoice:!0,service:"g3",gender:"female"},{name:"Fallback Swedish",lang:"sv",fallbackvoice:!0,service:"g3",gender:"female"},{name:"hi-IN",rate:.25},{name:"Fallback Hindi Female",lang:"hi",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Catalan",lang:"ca",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Aylin Compact"},{name:"tr-TR",rate:.25},{name:"Fallback Turkish",
lang:"tr",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Stine Compact"},{name:"no-NO",rate:.25},{name:"Fallback Norwegian",lang:"no",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Daniel"},{name:"Monica"},{name:"Amelie"},{name:"Anna"},{name:"Alice"},{name:"Melina"},{name:"Mariska"},{name:"Yelda"},{name:"Milena"},{name:"Xander"},{name:"Alva"},{name:"Lee Compact"},{name:"Karen"},{name:"Fallback Australian Female",lang:"en-AU",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Mikko Compact"},
{name:"Satu"},{name:"fi-FI",rate:.25},{name:"Fallback Finnish",lang:"fi",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Afrikans",lang:"af",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Albanian",lang:"sq",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Maged Compact"},{name:"Tarik"},{name:"ar-SA",rate:.25},{name:"Fallback Arabic",lang:"ar",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Armenian",lang:"hy",fallbackvoice:!0,service:"g1",gender:"male"},
{name:"Zuzana Compact"},{name:"Zuzana"},{name:"cs-CZ",rate:.25},{name:"Fallback Czech",lang:"cs",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Ida Compact"},{name:"Sara"},{name:"da-DK",rate:.25},{name:"Fallback Danish",lang:"da",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Esperanto",lang:"eo",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Haitian Creole",lang:"ht",fallbackvoice:!0},{name:"Fallback Icelandic",lang:"is",fallbackvoice:!0,service:"g1",gender:"male"},
{name:"Damayanti"},{name:"id-ID",rate:.25},{name:"Fallback Indonesian Female",lang:"id",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Latin Female",lang:"la",fallbackvoice:!0,service:"g2",gender:"female"},{name:"Fallback Latvian Male",lang:"lv",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Macedonian Male",lang:"mk",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Moldavian Female",lang:"mo",fallbackvoice:!0,service:"g2",gender:"female"},{name:"Fallback Montenegrin Male",
lang:"sr-ME",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Agata Compact"},{name:"Zosia"},{name:"pl-PL",rate:.25},{name:"Fallback Polish Female",lang:"pl",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Raquel Compact"},{name:"Luciana"},{name:"pt-BR",rate:.25},{name:"Fallback Brazilian Portuguese Female",lang:"pt-BR",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Joana Compact"},{name:"Joana"},{name:"pt-PT",rate:.25},{name:"Fallback Portuguese",lang:"pt-PT",fallbackvoice:!0,service:"g1",
gender:"female"},{name:"Fallback Serbo-Croation",lang:"sh",fallbackvoice:!0,service:"g2",gender:"male"},{name:"Laura Compact"},{name:"Laura"},{name:"sk-SK",rate:.25},{name:"Fallback Slovak",lang:"sk",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Javier Compact"},{name:"Paulina"},{name:"es-MX",rate:.25},{name:"Fallback Spanish (Latin American) Female",lang:"es-419",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Swahili",lang:"sw",fallbackvoice:!0,service:"g1",gender:"male"},
{name:"Fallback Tamil",lang:"ta",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Narisa Compact"},{name:"Kanya"},{name:"th-TH",rate:.25},{name:"Fallback Thai Female",lang:"th",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Vietnamese Male",lang:"vi",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Welsh",lang:"cy",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Oskar Compact"},{name:"sv-SE",rate:.25},{name:"Simona Compact"},{name:"Ioana"},{name:"ro-RO",rate:.25},
{name:"Kyoko"},{name:"Lekha"},{name:"Ting-Ting"},{name:"Yuna"},{name:"Xander Compact"},{name:"nl-NL",rate:.25},{name:"Fallback UK English Male",lang:"en-GB",fallbackvoice:!0,service:"g1",voicename:"rjs",gender:"male"},{name:"Finnish Male",lang:"fi",fallbackvoice:!0,service:"g3",voicename:"",gender:"male"},{name:"Czech Male",lang:"cs",fallbackvoice:!0,service:"g3",voicename:"",gender:"male"},{name:"Danish Male",lang:"da",fallbackvoice:!0,service:"g3",voicename:"",gender:"male"},{name:"Greek Male",
lang:"el",fallbackvoice:!0,service:"g3",voicename:"",gender:"male"},{name:"Hungarian Male",lang:"hu",fallbackvoice:!0,service:"g3",voicename:"",gender:"male"},{name:"Latin Male",lang:"la",fallbackvoice:!0,service:"g1",voicename:"",gender:"male"},{name:"Norwegian Male",lang:"no",fallbackvoice:!0,service:"g3",voicename:"",gender:"male"},{name:"Slovak Male",lang:"sk",fallbackvoice:!0,service:"g3",voicename:"",gender:"male"},{name:"Swedish Male",lang:"sv",fallbackvoice:!0,service:"g3",voicename:"",gender:"male"},
{name:"Fallback US English Male",lang:"en-US",fallbackvoice:!0,service:"g3",voicename:"",gender:"male"},{name:"German Germany",lang:"de_DE"},{name:"English United Kingdom",lang:"en_GB"},{name:"English India",lang:"en_IN"},{name:"English United States",lang:"en_US"},{name:"Spanish Spain",lang:"es_ES"},{name:"Spanish Mexico",lang:"es_MX"},{name:"Spanish United States",lang:"es_US"},{name:"French Belgium",lang:"fr_BE"},{name:"French France",lang:"fr_FR"},{name:"Hindi India",lang:"hi_IN"},{name:"Indonesian Indonesia",
lang:"in_ID"},{name:"Italian Italy",lang:"it_IT"},{name:"Japanese Japan",lang:"ja_JP"},{name:"Korean South Korea",lang:"ko_KR"},{name:"Dutch Netherlands",lang:"nl_NL"},{name:"Polish Poland",lang:"pl_PL"},{name:"Portuguese Brazil",lang:"pt_BR"},{name:"Portuguese Portugal",lang:"pt_PT"},{name:"Russian Russia",lang:"ru_RU"},{name:"Thai Thailand",lang:"th_TH"},{name:"Turkish Turkey",lang:"tr_TR"},{name:"Chinese China",lang:"zh_CN_#Hans"},{name:"Chinese Hong Kong",lang:"zh_HK_#Hans"},{name:"Chinese Hong Kong",
lang:"zh_HK_#Hant"},{name:"Chinese Taiwan",lang:"zh_TW_#Hant"},{name:"Alex"},{name:"Maged",lang:"ar-SA"},{name:"Zuzana",lang:"cs-CZ"},{name:"Sara",lang:"da-DK"},{name:"Anna",lang:"de-DE"},{name:"Melina",lang:"el-GR"},{name:"Karen",lang:"en-AU"},{name:"Daniel",lang:"en-GB"},{name:"Moira",lang:"en-IE"},{name:"Samantha (Enhanced)",lang:"en-US"},{name:"Samantha",lang:"en-US"},{name:"Tessa",lang:"en-ZA"},{name:"Monica",lang:"es-ES"},{name:"Paulina",lang:"es-MX"},{name:"Satu",lang:"fi-FI"},{name:"Amelie",
lang:"fr-CA"},{name:"Thomas",lang:"fr-FR"},{name:"Carmit",lang:"he-IL"},{name:"Lekha",lang:"hi-IN"},{name:"Mariska",lang:"hu-HU"},{name:"Damayanti",lang:"id-ID"},{name:"Alice",lang:"it-IT"},{name:"Kyoko",lang:"ja-JP"},{name:"Yuna",lang:"ko-KR"},{name:"Ellen",lang:"nl-BE"},{name:"Xander",lang:"nl-NL"},{name:"Nora",lang:"no-NO"},{name:"Zosia",lang:"pl-PL"},{name:"Luciana",lang:"pt-BR"},{name:"Joana",lang:"pt-PT"},{name:"Ioana",lang:"ro-RO"},{name:"Milena",lang:"ru-RU"},{name:"Laura",lang:"sk-SK"},{name:"Alva",
lang:"sv-SE"},{name:"Kanya",lang:"th-TH"},{name:"Yelda",lang:"tr-TR"},{name:"Ting-Ting",lang:"zh-CN"},{name:"Sin-Ji",lang:"zh-HK"},{name:"Mei-Jia",lang:"zh-TW"},{name:"Microsoft David Mobile - English (United States)",lang:"en-US"},{name:"Microsoft Zira Mobile - English (United States)",lang:"en-US"},{name:"Microsoft Mark Mobile - English (United States)",lang:"en-US"},{name:"native",lang:""},{name:"Google espa\u00f1ol"},{name:"Google espa\u00f1ol de Estados Unidos"},{name:"Google fran\u00e7ais"},
{name:"Google Bahasa Indonesia"},{name:"Google italiano"},{name:"Google Nederlands"},{name:"Google polski"},{name:"Google portugu\u00eas do Brasil"},{name:"Google \u0440\u0443\u0441\u0441\u043a\u0438\u0439"},{name:"Google \u0939\u093f\u0928\u094d\u0926\u0940"},{name:"Google \u65e5\u672c\u8a9e"},{name:"Google \u666e\u901a\u8bdd\uff08\u4e2d\u56fd\u5927\u9646\uff09"},{name:"Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"},{name:"zh-HK",rate:.25},{name:"Fallback Chinese (Hong Kong) Female",lang:"zh-HK",
fallbackvoice:!0,service:"g1",gender:"female"},{name:"Google \u7ca4\u8a9e\uff08\u9999\u6e2f\uff09"},{name:"zh-TW",rate:.25},{name:"Fallback Chinese (Taiwan) Female",lang:"zh-TW",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Microsoft George Mobile - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Susan Mobile - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Hazel Mobile - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Heera Mobile - English (India)",lang:"en-In"},
{name:"Microsoft Irina Mobile - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda Mobile - German (Germany)",lang:"de-DE"},{name:"Microsoft Katja Mobile - German (Germany)",lang:"de-DE"},{name:"Microsoft Helena Mobile - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Laura Mobile - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Sabina Mobile - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie Mobile - French (France)",lang:"fr-FR"},{name:"Microsoft Paulina Mobile - Polish (Poland)",lang:"pl-PL"},
{name:"Microsoft Huihui Mobile - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao Mobile - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy Mobile - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-CN"},{name:"Microsoft Elsa Mobile - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Maria Mobile - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Haruka Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Helena",
lang:"de-DE"},{name:"Catherine",lang:"en-AU"},{name:"Arthur",lang:"en-GB"},{name:"Martha",lang:"en-GB"},{name:"Marie",lang:"fr-FR"},{name:"O-ren",lang:"ja-JP"},{name:"Yu-shu",lang:"zh-CN"},{name:"Microsoft David - English (United States)",lang:"en-US"},{name:"Microsoft Zira - English (United States)",lang:"en-US"},{name:"Microsoft Mark - English (United States)",lang:"en-US"},{name:"Microsoft George - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Susan - English (United Kingdom)",lang:"en-GB"},
{name:"Microsoft Hazel - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Heera - English (India)",lang:"en-In"},{name:"Microsoft Irina - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda - German (Germany)",lang:"de-DE"},{name:"Microsoft Katja - German (Germany)",lang:"de-DE"},{name:"Microsoft Helena - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Laura - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Sabina - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie - French (France)",
lang:"fr-FR"},{name:"Microsoft Paulina - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Huihui - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-CN"},{name:"Microsoft Elsa - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Maria - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Haruka - Japanese (Japan)",
lang:"ja-JP"},{name:"Microsoft Hortense - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan - German (Germany)",lang:"de-DE"},{name:"Microsoft Ravi - English (India)",lang:"en-IN"},{name:"Microsoft Pablo - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Raul - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Paul - French (France)",lang:"fr-FR"},{name:"Microsoft Cosimo - Italian (Italy)",
lang:"it-IT"},{name:"Microsoft Ichiro - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Pavel - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Kangkang - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Danny - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-HK"},{name:"Microsoft Yating - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Zhiwei - Chinese (Traditional, Taiwan)",
lang:"zh-TW"},{name:"Microsoft Hortense Mobile - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan Mobile - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami Mobile - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan Mobile - German (Germany)",lang:"de-DE"},{name:"Microsoft Ravi Mobile - English (India)",lang:"en-IN"},{name:"Microsoft Pablo Mobile - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Raul Mobile - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Paul Mobile - French (France)",
lang:"fr-FR"},{name:"Microsoft Cosimo Mobile - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Ichiro Mobile - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam Mobile - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel Mobile - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Pavel Mobile - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Kangkang Mobile - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Danny Mobile - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-HK"},{name:"Microsoft Yating Mobile - Chinese (Traditional, Taiwan)",
lang:"zh-TW"},{name:"Microsoft Zhiwei Mobile - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft David Desktop - English (United States)",lang:"en-US"},{name:"Microsoft Zira Desktop - English (United States)",lang:"en-US"},{name:"Microsoft Mark Desktop - English (United States)",lang:"en-US"},{name:"Microsoft George Desktop - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Susan Desktop - English (United Kingdom)",lang:"en-GB"},{name:"Microsoft Hazel Desktop - English (United Kingdom)",
lang:"en-GB"},{name:"Microsoft Heera Desktop - English (India)",lang:"en-In"},{name:"Microsoft Irina Desktop - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Hedda Desktop - German (Germany)",lang:"de-DE"},{name:"Microsoft Katja Desktop - German (Germany)",lang:"de-DE"},{name:"Microsoft Helena Desktop - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Laura Desktop - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Sabina Desktop - Spanish (Mexico)",lang:"es-MX"},{name:"Microsoft Julie Desktop - French (France)",
lang:"fr-FR"},{name:"Microsoft Paulina Desktop - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Huihui Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Yaoyao Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Tracy Desktop - Chinese (Traditional, Hong Kong S.A.R.)",lang:"zh-CN"},{name:"Microsoft Elsa Desktop - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Maria Desktop - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Ayumi Desktop - Japanese (Japan)",lang:"ja-JP"},
{name:"Microsoft Haruka Desktop - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Hortense Desktop - French (France)",lang:"fr-FR"},{name:"Microsoft Hanhan Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami Desktop - Korean (Korean)",lang:"ko-KR"},{name:"Microsoft Stefan Desktop - German (Germany)",lang:"de-DE"},{name:"Microsoft Ravi Desktop - English (India)",lang:"en-IN"},{name:"Microsoft Pablo Desktop - Spanish (Spain)",lang:"es-ES"},{name:"Microsoft Raul Desktop - Spanish (Mexico)",
lang:"es-MX"},{name:"Microsoft Paul Desktop - French (France)",lang:"fr-FR"},{name:"Microsoft Cosimo Desktop - Italian (Italy)",lang:"it-IT"},{name:"Microsoft Ichiro Desktop - Japanese (Japan)",lang:"ja-JP"},{name:"Microsoft Adam Desktop - Polish (Poland)",lang:"pl-PL"},{name:"Microsoft Daniel Desktop - Portuguese (Brazil)",lang:"pt-BR"},{name:"Microsoft Pavel Desktop - Russian (Russia)",lang:"ru-RU"},{name:"Microsoft Kangkang Desktop - Chinese (Simplified, PRC)",lang:"zh-CN"},{name:"Microsoft Danny Desktop - Chinese (Traditional, Hong Kong S.A.R.)",
lang:"zh-HK"},{name:"Microsoft Yating Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Microsoft Zhiwei Desktop - Chinese (Traditional, Taiwan)",lang:"zh-TW"},{name:"Martin",lang:"de-DE"},{name:"Daniel",lang:"fr-FR"},{name:"Hattori",lang:"ja-JP"},{name:"Li-mu",lang:"zh-CN"},{name:"Gordon",lang:"en-AU"},{name:"Aaron",lang:"en-US"},{name:"Nicky",lang:"en-US"},{name:"Microsoft Hanhan Desktop - Chinese (Taiwan)",lang:"zh-TW"},{name:"Microsoft Heami Desktop - Korean",lang:"ko-KR"},{name:"Fallback Australian Male",
lang:"en-AU",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Russian Male",lang:"ru",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Arabic Male",lang:"ar",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Chinese",lang:"zh-CN",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Chinese HK",lang:"zh-HK",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Chinese TW",lang:"zh-TW",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback French Male",
lang:"fr",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Deutsch Male",lang:"de",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Hindi Male",lang:"hi",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Indonesian Male",lang:"id",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Japanese Male",lang:"ja",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Korean Male",lang:"ko",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Polish Male",
lang:"pl",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Brazilian Portuguese Male",lang:"pt-BR",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Portuguese Male",lang:"pt-PT",fallbackvoice:!0,service:"g1",gender:"male"},{name:"Fallback Spanish Male",lang:"es",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Spanish (Latin American) Male",lang:"es-419",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Thai Male",lang:"th",fallbackvoice:!0,service:"g3",
gender:"male"},{name:"Fallback Turkish Male",lang:"tr",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Vietnamese Female",lang:"vi",fallbackvoice:!0,service:"g1",gender:"female"},{name:"Fallback Italian Male",lang:"it",fallbackvoice:!0,service:"g3",gender:"male"},{name:"Fallback Dutch Male",lang:"nl",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"male"},{name:"Microsoft Anna - English (United States)",lang:"en-US",gender:"female"},{name:"Microsoft Lili - Chinese (China)",lang:"zh-CN",
gender:"female"},{name:"Bangla Bangladesh",lang:"bn_BD",gender:"male"},{name:"Bangla India",lang:"bn_IN",gender:"male"},{name:"Czech Czechia",lang:"cs_CZ",gender:"female"},{name:"Danish Denmark",lang:"da_DK",gender:"female"},{name:"Greek Greece",lang:"el_GR",gender:"female"},{name:"English Australia",lang:"en_AU",gender:"female"},{name:"Estonian Estonia",lang:"et_EE",gender:"male"},{name:"Finnish Finland",lang:"fi_FI",gender:"female"},{name:"Filipino Philippines",lang:"fil_PH",gender:"female"},{name:"French Canada",
lang:"fr_CAF",gender:"female"},{name:"Hungarian Hungary",lang:"hu_HU",gender:"female"},{name:"Khmer Cambodia",lang:"km_KH",gender:"female"},{name:"Norwegian Bokm\u00e5l Norway",lang:"nb_NO",gender:"female"},{name:"Nepali Nepal",lang:"ne_NP",gender:"female"},{name:"Romanian Romania",lang:"ro_RO",gender:"female"},{name:"Sinhala Sri Lanka",lang:"si_LK",gender:"female"},{name:"Slovak Slovakia",lang:"sk_SK",gender:"female"},{name:"Swedish Sweden",lang:"sv_SE",gender:"female"},{name:"Ukrainian Ukraine",
lang:"uk_UA",gender:"female"},{name:"Vietnamese Vietnam",lang:"vi_VN",gender:"female"},{name:"Cantonese Hong Kong",lang:"yue_HK_#Hant",gender:"female"},{name:"Microsoft Server Speech Text to Speech Voice (en-US, Guy24kRUS)",lang:"en-US",gender:"male"},{name:"Microsoft Server Speech Text to Speech Voice (en-US, Jessa24kRUS)",lang:"en-US",gender:"female"},{name:"Microsoft Server Speech Text to Speech Voice (en-US, JessaRUS)",lang:"en-US",gender:"female"},{name:"Microsoft Server Speech Text to Speech Voice (en-US, ZiraRUS)",
lang:"en-US",gender:"female"},{name:"Fallback Bangla Bangladeh Female",lang:"bn-BD",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"female"},{name:"Fallback Bangla Bangladeh Male",lang:"bn-BD",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"male"},{name:"Fallback Filipino Female",lang:"fil-PH",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"female"},{name:"Fallback Filipino Male",lang:"fil-PH",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"male"},{name:"Fallback Cambodian Khmer Female",
lang:"km-KH",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"female"},{name:"Fallback Cambodian Khmer Male",lang:"km-KH",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"male"},{name:"Fallback Nepali Female",lang:"ne-NP",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"female"},{name:"Fallback Sinhala Female",lang:"si-LK",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"female"},{name:"Fallback Ukrainian Female",lang:"uk-UA",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"female"},{name:"Fallback Cantonese Hong Kong Female",
lang:"yue-HK",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"female"},{name:"Fallback Cantonese Hong Kong Male",lang:"yue-HK",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"male"},{name:"Fallback Estonian Male",lang:"et-EE",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"male"},{name:"Fallback Bangla India Female",lang:"bn-IN",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"female"},{name:"Fallback Bangla India Male",lang:"bn-IN",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"male"},
{name:"Fallback French Canadian Female",lang:"fr-CA",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"female"},{name:"Fallback French Canadian Male",lang:"fr-CA",fallbackvoice:!0,timerSpeed:0,service:"g3",gender:"male"},{name:"Fallback Tamil",lang:"ta",fallbackvoice:!0,service:"g1",gender:"female"}];a.iOS=/(iPad|iPhone|iPod)/g.test(navigator.userAgent);a.iOS9=/(iphone|ipod|ipad).* os 9_/.test(navigator.userAgent.toLowerCase());a.iOS10=/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());
a.iOS11=/(iphone|ipod|ipad).* os 11_/.test(navigator.userAgent.toLowerCase());a.iOS9plus=/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase())||/(iphone|ipod|ipad).* os 10_/.test(navigator.userAgent.toLowerCase());a.iOS12_0=/(iphone|ipod|ipad).* os 12_0/.test(navigator.userAgent.toLowerCase());a.iOS12=/(iphone|ipod|ipad).* os 12_/.test(navigator.userAgent.toLowerCase());a.iOS13_0=/(iphone|ipod|ipad).* os 13_0/.test(navigator.userAgent.toLowerCase());a.iOS13=/(iphone|ipod|ipad).* os 13/.test(navigator.userAgent.toLowerCase());
a.is_chrome=-1<navigator.userAgent.indexOf("Chrome");a.is_safari=-1<navigator.userAgent.indexOf("Safari");a.is_chrome&&a.is_safari&&(a.is_safari=!1);a.is_opera=!!window.opera||0<=navigator.userAgent.indexOf(" OPR/");a.is_android=-1<navigator.userAgent.toLowerCase().indexOf("android");a.iOS_initialized=!1;a.iOS9_initialized=!1;a.iOS10_initialized=!1;a.iOS11_initialized=!1;a.cache_ios_voices=[{name:"he-IL",voiceURI:"he-IL",lang:"he-IL"},{name:"th-TH",voiceURI:"th-TH",lang:"th-TH"},{name:"pt-BR",voiceURI:"pt-BR",
lang:"pt-BR"},{name:"sk-SK",voiceURI:"sk-SK",lang:"sk-SK"},{name:"fr-CA",voiceURI:"fr-CA",lang:"fr-CA"},{name:"ro-RO",voiceURI:"ro-RO",lang:"ro-RO"},{name:"no-NO",voiceURI:"no-NO",lang:"no-NO"},{name:"fi-FI",voiceURI:"fi-FI",lang:"fi-FI"},{name:"pl-PL",voiceURI:"pl-PL",lang:"pl-PL"},{name:"de-DE",voiceURI:"de-DE",lang:"de-DE"},{name:"nl-NL",voiceURI:"nl-NL",lang:"nl-NL"},{name:"id-ID",voiceURI:"id-ID",lang:"id-ID"},{name:"tr-TR",voiceURI:"tr-TR",lang:"tr-TR"},{name:"it-IT",voiceURI:"it-IT",lang:"it-IT"},
{name:"pt-PT",voiceURI:"pt-PT",lang:"pt-PT"},{name:"fr-FR",voiceURI:"fr-FR",lang:"fr-FR"},{name:"ru-RU",voiceURI:"ru-RU",lang:"ru-RU"},{name:"es-MX",voiceURI:"es-MX",lang:"es-MX"},{name:"zh-HK",voiceURI:"zh-HK",lang:"zh-HK"},{name:"sv-SE",voiceURI:"sv-SE",lang:"sv-SE"},{name:"hu-HU",voiceURI:"hu-HU",lang:"hu-HU"},{name:"zh-TW",voiceURI:"zh-TW",lang:"zh-TW"},{name:"es-ES",voiceURI:"es-ES",lang:"es-ES"},{name:"zh-CN",voiceURI:"zh-CN",lang:"zh-CN"},{name:"nl-BE",voiceURI:"nl-BE",lang:"nl-BE"},{name:"en-GB",
voiceURI:"en-GB",lang:"en-GB"},{name:"ar-SA",voiceURI:"ar-SA",lang:"ar-SA"},{name:"ko-KR",voiceURI:"ko-KR",lang:"ko-KR"},{name:"cs-CZ",voiceURI:"cs-CZ",lang:"cs-CZ"},{name:"en-ZA",voiceURI:"en-ZA",lang:"en-ZA"},{name:"en-AU",voiceURI:"en-AU",lang:"en-AU"},{name:"da-DK",voiceURI:"da-DK",lang:"da-DK"},{name:"en-US",voiceURI:"en-US",lang:"en-US"},{name:"en-IE",voiceURI:"en-IE",lang:"en-IE"},{name:"hi-IN",voiceURI:"hi-IN",lang:"hi-IN"},{name:"el-GR",voiceURI:"el-GR",lang:"el-GR"},{name:"ja-JP",voiceURI:"ja-JP",
lang:"ja-JP"}];a.cache_ios9_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA",localService:!0,"default":!0},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",lang:"cs-CZ",localService:!0,"default":!0},{name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",lang:"da-DK",localService:!0,"default":!0},{name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",lang:"de-DE",localService:!0,"default":!0},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",
lang:"el-GR",localService:!0,"default":!0},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU",localService:!0,"default":!0},{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB",localService:!0,"default":!0},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",lang:"en-IE",localService:!0,"default":!0},{name:"Samantha (Enhanced)",voiceURI:"com.apple.ttsbundle.Samantha-premium",lang:"en-US",localService:!0,"default":!0},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",
lang:"en-US",localService:!0,"default":!0},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA",localService:!0,"default":!0},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",lang:"es-ES",localService:!0,"default":!0},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",lang:"es-MX",localService:!0,"default":!0},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",lang:"fi-FI",localService:!0,"default":!0},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",
lang:"fr-CA",localService:!0,"default":!0},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR",localService:!0,"default":!0},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",lang:"he-IL",localService:!0,"default":!0},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",lang:"hi-IN",localService:!0,"default":!0},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",lang:"hu-HU",localService:!0,"default":!0},{name:"Damayanti",voiceURI:"com.apple.ttsbundle.Damayanti-compact",
lang:"id-ID",localService:!0,"default":!0},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT",localService:!0,"default":!0},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP",localService:!0,"default":!0},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",lang:"ko-KR",localService:!0,"default":!0},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",lang:"nl-BE",localService:!0,"default":!0},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",
lang:"nl-NL",localService:!0,"default":!0},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO",localService:!0,"default":!0},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",lang:"pl-PL",localService:!0,"default":!0},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",lang:"pt-BR",localService:!0,"default":!0},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",lang:"pt-PT",localService:!0,"default":!0},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",
lang:"ro-RO",localService:!0,"default":!0},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",lang:"ru-RU",localService:!0,"default":!0},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK",localService:!0,"default":!0},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",lang:"sv-SE",localService:!0,"default":!0},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",lang:"th-TH",localService:!0,"default":!0},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",
lang:"tr-TR",localService:!0,"default":!0},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN",localService:!0,"default":!0},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK",localService:!0,"default":!0},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",lang:"zh-TW",localService:!0,"default":!0}];a.cache_ios10_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA"},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",
lang:"cs-CZ"},{name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",lang:"da-DK"},{name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",lang:"de-DE"},{name:"Helena",voiceURI:"com.apple.ttsbundle.siri_female_de-DE_compact",lang:"de-DE"},{name:"Martin",voiceURI:"com.apple.ttsbundle.siri_male_de-DE_compact",lang:"de-DE"},{name:"Nikos (Enhanced)",voiceURI:"com.apple.ttsbundle.Nikos-premium",lang:"el-GR"},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",lang:"el-GR"},{name:"Nikos",voiceURI:"com.apple.ttsbundle.Nikos-compact",
lang:"el-GR"},{name:"Catherine",voiceURI:"com.apple.ttsbundle.siri_female_en-AU_compact",lang:"en-AU"},{name:"Gordon",voiceURI:"com.apple.ttsbundle.siri_male_en-AU_compact",lang:"en-AU"},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU"},{name:"Daniel (Enhanced)",voiceURI:"com.apple.ttsbundle.Daniel-premium",lang:"en-GB"},{name:"Arthur",voiceURI:"com.apple.ttsbundle.siri_male_en-GB_compact",lang:"en-GB"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB"},
{name:"Martha",voiceURI:"com.apple.ttsbundle.siri_female_en-GB_compact",lang:"en-GB"},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",lang:"en-IE"},{name:"Nicky (Enhanced)",voiceURI:"com.apple.ttsbundle.siri_female_en-US_premium",lang:"en-US"},{name:"Samantha (Enhanced)",voiceURI:"com.apple.ttsbundle.Samantha-premium",lang:"en-US"},{name:"Aaron",voiceURI:"com.apple.ttsbundle.siri_male_en-US_compact",lang:"en-US"},{name:"Fred",voiceURI:"com.apple.speech.synthesis.voice.Fred",lang:"en-US"},
{name:"Nicky",voiceURI:"com.apple.ttsbundle.siri_female_en-US_compact",lang:"en-US"},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",lang:"en-US"},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA"},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",lang:"es-ES"},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",lang:"es-MX"},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",lang:"fi-FI"},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",
lang:"fr-CA"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.siri_male_fr-FR_compact",lang:"fr-FR"},{name:"Marie",voiceURI:"com.apple.ttsbundle.siri_female_fr-FR_compact",lang:"fr-FR"},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR"},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",lang:"he-IL"},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",lang:"hi-IN"},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",lang:"hu-HU"},{name:"Damayanti",
voiceURI:"com.apple.ttsbundle.Damayanti-compact",lang:"id-ID"},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT"},{name:"Hattori",voiceURI:"com.apple.ttsbundle.siri_male_ja-JP_compact",lang:"ja-JP"},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP"},{name:"O-ren",voiceURI:"com.apple.ttsbundle.siri_female_ja-JP_compact",lang:"ja-JP"},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",lang:"ko-KR"},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",
lang:"nl-BE"},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",lang:"nl-NL"},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO"},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",lang:"pl-PL"},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",lang:"pt-BR"},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",lang:"pt-PT"},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",lang:"ro-RO"},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",
lang:"ru-RU"},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK"},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",lang:"sv-SE"},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",lang:"th-TH"},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",lang:"tr-TR"},{name:"Li-mu",voiceURI:"com.apple.ttsbundle.siri_male_zh-CN_compact",lang:"zh-CN"},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN"},{name:"Yu-shu",voiceURI:"com.apple.ttsbundle.siri_female_zh-CN_compact",
lang:"zh-CN"},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK"},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",lang:"zh-TW"}];a.cache_ios11_voices=[{name:"Maged",voiceURI:"com.apple.ttsbundle.Maged-compact",lang:"ar-SA"},{name:"Zuzana",voiceURI:"com.apple.ttsbundle.Zuzana-compact",lang:"cs-CZ"},{name:"Sara",voiceURI:"com.apple.ttsbundle.Sara-compact",lang:"da-DK"},{name:"Anna",voiceURI:"com.apple.ttsbundle.Anna-compact",lang:"de-DE"},{name:"Helena",voiceURI:"com.apple.ttsbundle.siri_female_de-DE_compact",
lang:"de-DE"},{name:"Martin",voiceURI:"com.apple.ttsbundle.siri_male_de-DE_compact",lang:"de-DE"},{name:"Melina",voiceURI:"com.apple.ttsbundle.Melina-compact",lang:"el-GR"},{name:"Catherine",voiceURI:"com.apple.ttsbundle.siri_female_en-AU_compact",lang:"en-AU"},{name:"Gordon",voiceURI:"com.apple.ttsbundle.siri_male_en-AU_compact",lang:"en-AU"},{name:"Karen",voiceURI:"com.apple.ttsbundle.Karen-compact",lang:"en-AU"},{name:"Arthur",voiceURI:"com.apple.ttsbundle.siri_male_en-GB_compact",lang:"en-GB"},
{name:"Daniel",voiceURI:"com.apple.ttsbundle.Daniel-compact",lang:"en-GB"},{name:"Martha",voiceURI:"com.apple.ttsbundle.siri_female_en-GB_compact",lang:"en-GB"},{name:"Moira",voiceURI:"com.apple.ttsbundle.Moira-compact",lang:"en-IE"},{name:"Aaron",voiceURI:"com.apple.ttsbundle.siri_male_en-US_compact",lang:"en-US"},{name:"Fred",voiceURI:"com.apple.speech.synthesis.voice.Fred",lang:"en-US"},{name:"Nicky",voiceURI:"com.apple.ttsbundle.siri_female_en-US_compact",lang:"en-US"},{name:"Samantha",voiceURI:"com.apple.ttsbundle.Samantha-compact",
lang:"en-US"},{name:"Tessa",voiceURI:"com.apple.ttsbundle.Tessa-compact",lang:"en-ZA"},{name:"Monica",voiceURI:"com.apple.ttsbundle.Monica-compact",lang:"es-ES"},{name:"Paulina",voiceURI:"com.apple.ttsbundle.Paulina-compact",lang:"es-MX"},{name:"Satu",voiceURI:"com.apple.ttsbundle.Satu-compact",lang:"fi-FI"},{name:"Amelie",voiceURI:"com.apple.ttsbundle.Amelie-compact",lang:"fr-CA"},{name:"Daniel",voiceURI:"com.apple.ttsbundle.siri_male_fr-FR_compact",lang:"fr-FR"},{name:"Marie",voiceURI:"com.apple.ttsbundle.siri_female_fr-FR_compact",
lang:"fr-FR"},{name:"Thomas",voiceURI:"com.apple.ttsbundle.Thomas-compact",lang:"fr-FR"},{name:"Carmit",voiceURI:"com.apple.ttsbundle.Carmit-compact",lang:"he-IL"},{name:"Lekha",voiceURI:"com.apple.ttsbundle.Lekha-compact",lang:"hi-IN"},{name:"Mariska",voiceURI:"com.apple.ttsbundle.Mariska-compact",lang:"hu-HU"},{name:"Damayanti",voiceURI:"com.apple.ttsbundle.Damayanti-compact",lang:"id-ID"},{name:"Alice",voiceURI:"com.apple.ttsbundle.Alice-compact",lang:"it-IT"},{name:"Hattori",voiceURI:"com.apple.ttsbundle.siri_male_ja-JP_compact",
lang:"ja-JP"},{name:"Kyoko",voiceURI:"com.apple.ttsbundle.Kyoko-compact",lang:"ja-JP"},{name:"O-ren",voiceURI:"com.apple.ttsbundle.siri_female_ja-JP_compact",lang:"ja-JP"},{name:"Yuna",voiceURI:"com.apple.ttsbundle.Yuna-compact",lang:"ko-KR"},{name:"Ellen",voiceURI:"com.apple.ttsbundle.Ellen-compact",lang:"nl-BE"},{name:"Xander",voiceURI:"com.apple.ttsbundle.Xander-compact",lang:"nl-NL"},{name:"Nora",voiceURI:"com.apple.ttsbundle.Nora-compact",lang:"no-NO"},{name:"Zosia",voiceURI:"com.apple.ttsbundle.Zosia-compact",
lang:"pl-PL"},{name:"Luciana",voiceURI:"com.apple.ttsbundle.Luciana-compact",lang:"pt-BR"},{name:"Joana",voiceURI:"com.apple.ttsbundle.Joana-compact",lang:"pt-PT"},{name:"Ioana",voiceURI:"com.apple.ttsbundle.Ioana-compact",lang:"ro-RO"},{name:"Milena",voiceURI:"com.apple.ttsbundle.Milena-compact",lang:"ru-RU"},{name:"Laura",voiceURI:"com.apple.ttsbundle.Laura-compact",lang:"sk-SK"},{name:"Alva",voiceURI:"com.apple.ttsbundle.Alva-compact",lang:"sv-SE"},{name:"Kanya",voiceURI:"com.apple.ttsbundle.Kanya-compact",
lang:"th-TH"},{name:"Yelda",voiceURI:"com.apple.ttsbundle.Yelda-compact",lang:"tr-TR"},{name:"Li-mu",voiceURI:"com.apple.ttsbundle.siri_male_zh-CN_compact",lang:"zh-CN"},{name:"Ting-Ting",voiceURI:"com.apple.ttsbundle.Ting-Ting-compact",lang:"zh-CN"},{name:"Yu-shu",voiceURI:"com.apple.ttsbundle.siri_female_zh-CN_compact",lang:"zh-CN"},{name:"Sin-Ji",voiceURI:"com.apple.ttsbundle.Sin-Ji-compact",lang:"zh-HK"},{name:"Mei-Jia",voiceURI:"com.apple.ttsbundle.Mei-Jia-compact",lang:"zh-TW"}];a.systemvoices=
null;a.CHARACTER_LIMIT=100;a.VOICESUPPORT_ATTEMPTLIMIT=5;a.voicesupport_attempts=0;a.fallbackMode=!1;a.WORDS_PER_MINUTE=130;a.fallback_audio=null;a.fallback_playbackrate=1;a.def_fallback_playbackrate=a.fallback_playbackrate;a.fallback_audiopool=[];a.msgparameters=null;a.timeoutId=null;a.OnLoad_callbacks=[];a.useTimer=!1;a.utterances=[];a.userInteractionEvents=["mousedown","mouseup","mousewheel","keydown"];a.fallbackBufferLength=5;a.iOS&&(a.fallbackBufferLength=2);var l=null;a.tstCompiled=function(){return!/param/.test(function(a){})};
a.fallbackServicePath="undefined"!=typeof rvApiEndpoint&&rvApiEndpoint?rvApiEndpoint:"https://code.responsivevoice.org/"+(a.tstCompiled()?"":"develop/")+"getvoice.php";a.default_rv=a.responsivevoices[0];a.debug=!1;a.rvsMapped=!1;a.forcedFallbackMode=!1;a.speechAllowedByUser=!0;a.enableEstimationTimeout=!0;a.log=function(b){a.debug&&console.log(b)};a.init=function(){a.is_wordpress=u();a.is_bundle=q();"undefined"==typeof rvApiKey&&console.error("ResponsiveVoice missing API key. See https://responsivevoice.org/register?devtools="+
encodeURIComponent(window.location.href));if(a.is_android||a.iOS||a.is_safari)a.useTimer=!0;a.is_opera||"undefined"===typeof speechSynthesis?(console.log("RV: Voice synthesis not supported"),a.enableFallbackMode()):setTimeout(function(){var b=setInterval(function(){var c=window.speechSynthesis.getVoices();0!=c.length||null!=a.systemvoices&&0!=a.systemvoices.length?(console.log("RV: Voice support ready"),a.systemVoicesReady(c),clearInterval(b)):(console.log("Voice support NOT ready"),a.voicesupport_attempts++,
a.voicesupport_attempts>a.VOICESUPPORT_ATTEMPTLIMIT&&(clearInterval(b),null!=window.speechSynthesis?a.iOS?(a.iOS11||a.iOS12||a.iOS13_0||a.iOS13?a.systemVoicesReady(a.cache_ios11_voices):a.iOS10?a.systemVoicesReady(a.cache_ios10_voices):a.iOS9?a.systemVoicesReady(a.cache_ios9_voices):a.systemVoicesReady(a.cache_ios_voices),console.log("RV: Voice support ready (cached)")):(console.log("RV: speechSynthesis present but no system voices found"),a.enableFallbackMode()):a.enableFallbackMode()))},100)},100);
(a.iOS||a.is_android||a.is_safari)&&a.enableWindowClickHook();a.Dispatch("OnLoad")};a.systemVoicesReady=function(b){a.systemvoices=b;a.mapRVs();null!=a.OnVoiceReady&&a.OnVoiceReady.call();a.Dispatch("OnReady");window.hasOwnProperty("dispatchEvent")&&window.dispatchEvent(new Event("ResponsiveVoice_OnReady"))};a.enableFallbackMode=function(){a.fallbackMode=!0;a.forcedFallbackMode=!0;console.log("RV: Enabling fallback mode");a.mapRVs();null!=a.OnVoiceReady&&a.OnVoiceReady.call();a.Dispatch("OnReady");
window.hasOwnProperty("dispatchEvent")&&window.dispatchEvent(new Event("ResponsiveVoice_OnReady"));a.Dispatch("OnServiceSwitched")};a.getVoices=function(){for(var b=[],c=0;c<a.responsivevoices.length;c++)b.push({name:a.responsivevoices[c].name});return b};a.speak=function(b,c,d){if(null==b)a.log("No text provided");else if(a.initializePermissionsTimeout&&clearTimeout(a.initializePermissionsTimeout),a.rvsMapped){var e=function(a){-1!=a.search(/[\u3002]/gm)?a.split(/[\u3002]/).filter(function(a){a&&
n.push(a)}):n.push(a)},h=null;if(a.isPlaying())a.log("Cancelling previous speech"),a.cancel(),setTimeout(function(){a.speak(b,c,d)},50);else{if(null==c){var f=a.default_rv;a.setDefaultVoice(f.name)}else f=a.getResponsiveVoice(c);!0===f.deprecated&&console.warn("ResponsiveVoice: Voice "+f.name+" is deprecated and will be removed in future releases");var g={};if(null!=f.mappedProfile)g=f.mappedProfile;else if(g.systemvoice=a.getMatchedVoice(f),g.collectionvoice={},null==g.systemvoice){console.log("RV: ERROR: No voice found for: "+
c);return}b=r(b,g);b=b.replace(/["`]/gm,"'");a.msgparameters=d||{};a.msgtext=b;a.msgvoicename=c;a.onstartFired=!1;var n=[];if(b.length>a.CHARACTER_LIMIT){for(var k=b=t(b);k.length>a.CHARACTER_LIMIT;){f=k.search(/([\u3002:!\u00a1?\u00bf;\(\)\[\]\u2014\u00ab\u00bb\n]+|\.[^0-9]+)/);var m="";if(-1==f||f>=a.CHARACTER_LIMIT)f=k.search(/,[^0-9]+/);if((-1==f||f>=a.CHARACTER_LIMIT)&&-1!=k.search(" ")){var l=k.split(" ");for(f=0;f<l.length;f++){if(m.length+l[f].length+1>a.CHARACTER_LIMIT){l[f].length>=a.CHARACTER_LIMIT&&
(m+=l[f].substr(0,a.CHARACTER_LIMIT-m.length-1));break}m+=(0!=f?" ":"")+l[f]}}else{if(-1==f||f>=a.CHARACTER_LIMIT)f=a.CHARACTER_LIMIT-1;m=k.substr(0,f+1)}k=k.substr(m.length,k.length-m.length);n.push(m)}0<k.length&&e(k)}else e(b);console.log(n);a.multipartText=n;if(a.checkSpeechAllowed()){a.fallbackMode&&0<a.fallback_audiopool.length&&a.clearFallbackPool();a.msgprofile=g;a.log("Voice picked: "+a.msgprofile.systemvoice.name);a.utterances=[];a.fallbackChunks=[];for(f=0;f<n.length;f++)if(!a.fallbackMode&&
a.getServiceEnabled(a.services.NATIVE_TTS))a.log("Using SpeechSynthesis"),h=a.services.NATIVE_TTS,e=new SpeechSynthesisUtterance,e.voiceURI=g.systemvoice.voiceURI,e.volume=a.selectBest([g.collectionvoice.volume,g.systemvoice.volume,1]),e.rate=a.selectBest([a.iOS9plus?1:null,g.collectionvoice.rate,g.systemvoice.rate,1]),e.pitch=a.selectBest([g.collectionvoice.pitch,g.systemvoice.pitch,1]),e.text=n[f],e.lang=a.selectBest([g.collectionvoice.lang,g.systemvoice.lang]),e.rvIndex=f,e.rvTotal=n.length,0==
f&&(e.onstart=a.speech_onstart),a.msgparameters.onendcalled=!1,null!=d?(e.voice="undefined"!==typeof d.voice?d.voice:g.systemvoice,f<n.length-1&&1<n.length?(e.onend=a.onPartEnd,e.hasOwnProperty("addEventListener")&&e.addEventListener("end",a.onPartEnd)):(e.onend=a.speech_onend,e.hasOwnProperty("addEventListener")&&e.addEventListener("end",a.speech_onend)),e.onerror=d.onerror||function(b){a.log("RV: Unknow Error");a.log(b)},d.rate=a.validateParameters(d,"rate"),d.pitch=a.validateParameters(d,"pitch"),
d.volume=a.validateParameters(d,"volume"),e.onpause=d.onpause,e.onresume=d.onresume,e.onmark=d.onmark,e.onboundary=d.onboundary||a.onboundary,e.pitch=null!=d.pitch?d.pitch:e.pitch,e.rate=a.iOS?(null!=d.rate?d.rate*d.rate:1)*e.rate:(null!=d.rate?d.rate:1)*e.rate,e.volume=null!=d.volume?d.volume:e.volume):(a.log("No Params received for current Utterance"),e.voice=g.systemvoice,e.onend=a.speech_onend,e.onboundary=a.onboundary,e.onerror=function(b){a.log("RV: Unknow Error");a.log(b)}),a.utterances.push(e),
0==f&&(a.currentMsg=e),console.log(e),a.tts_speak(e);else if(a.fallbackMode&&a.getServiceEnabled(a.services.FALLBACK_AUDIO)){h=a.services.FALLBACK_AUDIO;a.fallback_playbackrate=a.def_fallback_playbackrate;e=a.selectBest([g.collectionvoice.pitch,g.systemvoice.pitch,1]);k=a.selectBest([a.iOS9plus?1:null,g.collectionvoice.rate,g.systemvoice.rate,1]);m=a.selectBest([g.collectionvoice.volume,g.systemvoice.volume,1]);if(null!=d){e*=null!=d.pitch?d.pitch:1;k*=null!=d.rate?d.rate:1;m*=null!=d.volume?d.volume:
1;var p=d.extraParams||null}e/=2;k/=2;m*=2;e=Math.min(Math.max(e,0),1);k=Math.min(Math.max(k,0),1);m=Math.min(Math.max(m,0),1);l="?t="+encodeURIComponent(n[f])+"&tl="+(g.collectionvoice.lang||g.systemvoice.lang||"en-US")+"&sv="+(g.collectionvoice.service||g.systemvoice.service||"")+"&vn="+(g.collectionvoice.voicename||g.systemvoice.voicename||"")+"&pitch="+e.toString()+"&rate="+k.toString()+"&vol="+m.toString();"undefined"!=typeof rvApiEndpoint&&rvApiEndpoint&&(l="?text="+encodeURIComponent(n[f])+
"&lang="+(g.collectionvoice.lang||g.systemvoice.lang||"en-US")+"&engine="+(g.collectionvoice.service||g.systemvoice.service||"")+"&name="+(g.collectionvoice.voicename||g.systemvoice.voicename||"")+"&pitch="+e.toString()+"&rate="+k.toString()+"&volume="+m.toString());e=a.fallbackServicePath+l;"undefined"!=typeof rvApiKey&&(e+="&key="+rvApiKey);"undefined"==typeof rvApiKey&&a.is_bundle&&(e+="&key=FQ9r4hgY");"undefined"==typeof rvApiKey&&a.is_wordpress&&(e+="&key=HY7lTyiS");void 0!==g.collectionvoice.gender&&
(e+="&gender="+g.collectionvoice.gender);p&&(e+="&extraParams="+JSON.stringify(p));a.fallbackChunks.push({text:n[f],url:e,audio:null})}a.fallbackMode&&a.getServiceEnabled(a.services.FALLBACK_AUDIO)&&(a.fallbackChunkIndex=0,a.fallback_startPart());a.log("Service used: "+h)}else a.scheduledSpeak={text:b,voicename:c,parameters:d}}}else setTimeout(function(){a.speak(b,c,d)},15)};a.startTimeout=function(b,c){var d=a.msgprofile.collectionvoice.timerSpeed;null==a.msgprofile.collectionvoice.timerSpeed&&(d=
1);0>=d||(a.timeoutId=setTimeout(c,a.getEstimatedTimeLength(b,d)),a.log("Timeout ID: "+a.timeoutId))};a.checkAndCancelTimeout=function(){null!=a.timeoutId&&(clearTimeout(a.timeoutId),a.timeoutId=null)};a.speech_timedout=function(){a.cancel();a.cancelled=!1;a.speech_onend()};a.speech_onend=function(){a.checkAndCancelTimeout();!0===a.cancelled?a.cancelled=!1:(a.log("on end fired"),null!=a.msgparameters&&null!=a.msgparameters.onend&&1!=a.msgparameters.onendcalled&&(a.log("Speech on end called  -"+a.msgtext),
a.msgparameters.onendcalled=!0,a.msgparameters.onend()))};a.speech_onstart=function(){if(!a.onstartFired&&(a.onstartFired=!0,a.log("Speech start"),a.enableEstimationTimeout&&a.useTimer&&(a.fallbackMode||a.startTimeout(a.msgtext,a.speech_timedout)),a.msgparameters.onendcalled=!1,null!=a.msgparameters&&null!=a.msgparameters.onstart))a.msgparameters.onstart()};a.fallback_startPart=function(){0==a.fallbackChunkIndex&&a.speech_onstart();a.fallback_updateChunksBuffer();a.fallback_audio=a.fallbackChunks[a.fallbackChunkIndex].audio;
null==a.fallback_audio?a.log("RV: Fallback Audio is not available"):(function(){var b=a.fallback_audio;setTimeout(function(){b.playbackRate=a.fallback_playbackrate},50);b.onloadedmetadata=function(){b.playbackRate=a.fallback_playbackrate};var c=function(b){setTimeout(function(){if(0==b.currentTime){a.log("Audio chunk not playing. Trying to recover. Disabling time estimation");a.enableEstimationTimeout=!1;a.checkAndCancelTimeout();b.load();var c=function(){b.play();b.removeEventListener("canplaythrough",
c)};b.addEventListener("canplaythrough",c,!1)}},700)};if(2<=b.readyState)b.play(),c(b);else{var d=function(){b.play();b.removeEventListener("canplaythrough",d)};b.addEventListener("canplaythrough",d,!1)}}(),a.fallback_audio.onerror=function(a){function b(){if(this.readyState==this.DONE&&200!==this.status)switch(this.status){case 400:console.error("ResponsiveVoice audio could not be loaded. Invalid parameters.");break;case 403:console.error("ResponsiveVoice invalid API key. See https://responsivevoice.org/register?devtools="+
encodeURIComponent(window.location.href));break;default:console.error("ResponsiveVoice audio could not be loaded. There is an issue connecting your browser to the API endpoint.")}}switch(a.target.error.code){case a.target.error.MEDIA_ERR_SRC_NOT_SUPPORTED:var d=new XMLHttpRequest;d.open("GET",a.target.src,!0);d.send();d.onreadystatechange=b;break;default:console.error("ResponsiveVoice: an unknown error occurred.")}},a.fallback_audio.addEventListener("ended",a.fallback_finishPart),a.enableEstimationTimeout&&
a.useTimer&&a.startTimeout(a.multipartText[a.fallbackChunkIndex],a.fallback_finishPart))};a.isFallbackAudioPlaying=function(){var b;for(b=0;b<a.fallback_audiopool.length;b++){var c=a.fallback_audiopool[b];if(!c.paused&&!c.ended&&c.currentTime!=c.duration)return!0}return!1};a.fallback_finishPart=function(b){a.isFallbackAudioPlaying()?(a.checkAndCancelTimeout(),a.timeoutId=setTimeout(a.fallback_finishPart,1E3*(a.fallback_audio.duration-a.fallback_audio.currentTime))):(a.checkAndCancelTimeout(),a.fallbackChunkIndex<
a.fallbackChunks.length-1?(a.fallbackChunkIndex++,a.fallback_startPart()):a.speech_onend())};a.cancel=function(){a.checkAndCancelTimeout();a.fallbackMode?(null!=a.fallback_audio&&a.fallback_audio.pause(),a.clearFallbackPool()):(a.cancelled=!0,speechSynthesis.cancel())};a.voiceSupport=function(){return"speechSynthesis"in window};a.OnFinishedPlaying=function(b){if(null!=a.msgparameters&&null!=a.msgparameters.onend)a.msgparameters.onend()};a.setDefaultVoice=function(b){if(a.rvsMapped){var c=a.getResponsiveVoice(b);
null!=c&&(a.default_rv=c)}else setTimeout(function(){a.setDefaultVoice(b)},15)};a.mapRVs=function(){if("object"==typeof navigator){var b,c="anguage";var d=navigator;d=(b=d["l"+c+"s"],b&&b.length?b:(c=d["l"+c]||d["browserL"+c]||d["userL"+c])?[c]:c)}else d=void 0;b=d[0];for(c=0;c<a.responsivevoices.length;c++){d=a.responsivevoices[c];for(var e=0;e<d.voiceIDs.length;e++){var h=a.voicecollection[d.voiceIDs[e]];if(1!=h.fallbackvoice){var f=a.getSystemVoice(h.name);a.forcedFallbackMode&&(f=null);a.iOS12_0&&
d.lang.toLowerCase()!=b.toLowerCase()&&d.lang.toLowerCase().split("-")[0]!=b.toLowerCase()&&(f=null);if(null!=f){d.mappedProfile={systemvoice:f,collectionvoice:h};break}}else{d.mappedProfile={systemvoice:{},collectionvoice:h};break}}}a.rvsMapped=!0};a.getMatchedVoice=function(b){for(var c=0;c<b.voiceIDs.length;c++){var d=a.getSystemVoice(a.voicecollection[b.voiceIDs[c]].name);if(null!=d)return d}return null};a.getSystemVoice=function(b){var c=String.fromCharCode(160);var d=b.replace(new RegExp("\\s+|"+
c,"g"),"");if("undefined"===typeof a.systemvoices||null===a.systemvoices)return null;for(var e=0;e<a.systemvoices.length;e++)if(0===a.systemvoices[e].name.localeCompare(b)||0===a.systemvoices[e].name.replace(new RegExp("\\s+|"+c,"g"),"").replace(/ *\([^)]*\) */g,"").localeCompare(d))return a.systemvoices[e];return null};a.getResponsiveVoice=function(b){for(var c=0;c<a.responsivevoices.length;c++)if(a.responsivevoices[c].name==b)return b=a.fallbackMode,a.fallbackMode=!0===a.responsivevoices[c].mappedProfile.collectionvoice.fallbackvoice||
!0===a.forcedFallbackMode?!0:!1,b!=a.fallbackMode&&(a.mapRVs(),a.Dispatch("OnServiceSwitched")),a.responsivevoices[c];return null};a.Dispatch=function(b){if(a.hasOwnProperty(b+"_callbacks")&&null!=a[b+"_callbacks"]&&0<a[b+"_callbacks"].length){for(var c=a[b+"_callbacks"],d=0;d<c.length;d++)c[d]();return!0}var e=b+"_callbacks_timeout",h=b+"_callbacks_timeoutCount";a.hasOwnProperty(e)||(a[h]=10,a[e]=setInterval(function(){--a[h];(a.Dispatch(b)||0>a[h])&&clearTimeout(a[e])},50));return!1};a.AddEventListener=
function(b,c){a.hasOwnProperty(b+"_callbacks")||(a[b+"_callbacks"]=[]);a[b+"_callbacks"].push(c)};a.addEventListener=a.AddEventListener;a.RemoveEventListener=function(b,c){a[b+"_callbacks"]&&-1!=a[b+"_callbacks"].indexOf(c)&&a[b+"_callbacks"].splice(a[b+"_callbacks"].indexOf(c),1)};a.clickEvent=function(){a.log("Click event");a.click_event_detected=!0;a.initializePermissionsTimeout=setTimeout(a.initializePermissions,5);a.userInteractionEvents.forEach(function(b){window.removeEventListener(b,a.clickEvent,
!1)});a.Dispatch("OnClickEvent")};a.initializePermissions=function(){if(a.iOS&&!a.iOS_initialized){a.log("Initializing iOS click event");var b=new SpeechSynthesisUtterance(" ");speechSynthesis.speak(b);a.iOS_initialized=!0}a.is_android&&!a.android_initialized&&(a.log("Initializing Android click event"),b=new SpeechSynthesisUtterance(" "),speechSynthesis.speak(b));a.initFallbackPool()};a.isPlaying=function(){return a.fallbackMode?null!=a.fallback_audio&&!a.fallback_audio.ended&&!a.fallback_audio.paused:
"undefined"!=typeof speechSynthesis?speechSynthesis.speaking:!1};a.clearFallbackPool=function(){for(var b=0;b<a.fallback_audiopool.length;b++)null!=a.fallback_audiopool[b]&&a.fallback_audiopool[b].pause();a.fallback_audiopool_index=0;a.fallbackChunks=[]};a.initFallbackPool=function(){if(!a.fallback_audiopool||0==a.fallback_audiopool.length){for(var b=0;10>b;b++){var c=b,d=document.createElement("AUDIO");d.preload="auto";a.is_android&&(d.src="data:audio/mpeg;base64,/+NIxAAAAAAAAAAAAFhpbmcAAAAPAAAAEwAACZAAIiIiIiIqKioqKjMzMzMzRERERERETExMTExdXV1dXWZmZmZmd3d3d3d3gICAgICRkZGRkZmZmZmZqqqqqqqqs7Ozs7PExMTExMzMzMzM3d3d3d3d5ubm5ub39/f39///////AAAAUExBTUUzLjEwMAQoAAAAAAAAAAAVCCQCQCEAAeAAAAmQ/qJL7wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+NIxAAGkAJAGAAAAABn///////////////6w//L/IeGCGc//+U61QAP/4LmWycNjPzmXtEL0VxbXSoQaadV7pSNs2X6hJ3Ok1a9yNRtf7ddPJrLR2nyP/p/30b0OdF6Su29GKp9Ls6LORkWRJ1sOsGr4mUADf9n/P+9v/FR5t08rK1UubPiChtJS2Yoop4MH48ec+PjR01tJJOmX8O3Mvmf//nf6s7pnCzO5wl8y7aVyzX5lLGdCKJYgd6S33q26FtBZVczczydHIbM6oMQuaUADf9n/9v//js/ijDGj7uNKCaLVPLY2TzXwmkzHCZrHdGypjNcBdIf+cssK+/f4397ez1JaRw1aI3FlV5ubTY1LQIWVb2m7K89qpjxLf5g/+MYxPgS5FZAeADFKNGO6mh1fMqEEQGWqWYmg3FqAA2vQlp77/uffWS702wqfv8vFD5PuNitqPG8p77pLmWf/+/HA5ryUlu7/+MYxOcXRFo8eAGHKS//vwnLX//6HPNCIzXla56JRuFPNdKV2pety8ID4VN+uRuoU+VV8zTMMfXYUQ4eh9ZoGKKlPHBCqgAN/+MoxMUX3CY8eAGHKbdmn+OeVJTGIlzpdOsUYwaXtdxnHOiuHjAFIU+ZnMzIo2eVWlxPy//y8rD9GK8OTKZXL6Wply47bXzyeYUcuXSE5qSwGGPcoJv2DchBu8Jw8gGwmW09AA23RXO3nb6WmOopONBSqNIeqnXWiAz7K4XEHwmcIdATmzwV0jJ9s4V/k////+MYxOgYlGo4eAGHLO/5f9nlL8kDpHZv+mbMu4mH7HHuyyqHq6TeK5/8aMjm1eRixEgQJqGo+0p5lQAN/0f477nlU9IqLh3g/+MoxMAV6+48eABHIXO7Otw9wgTCohOLjxNDi9CJZRx1mRayrbDuUE9K1/pzV12nzc/+fe9/4ZerXKtVHrfdcl3Snkp5pGPb7DmYQNJNSh9zwUw9UvZi6fQYM8eKDZqHEZhiAA3/Y/3//e/ncbwBH455AViDJuJXNlQhwMiabt6ZEy6bRZ0EyOvDkSz2KvaZ/+MYxOsWVDY8eAFHJX7d09JbPf7UcpGYFU4MK/TuiMtVI3U+7sa9XVlqveysYtTVmOxmQruJCGeRFdkDcQANv0P3v3+7/3v8/+MoxMwY7F48eAIHLXy7nE/l1671KjRcnSXttqsdJjz2h+kezUHiUdTRuwjpGa8vMy/+f55c7D+2xUlyOfmTv66UvLp0GeRl5WIljlTvLXeKT5Jwvad3F1mByDEbg4DVAA33Y/siOm/FK0CDQEmy6l1gwcQJgyQLX8QIFrg8G8A8hcy4q8OF+ZHkb0p5fP/K/+MYxOsXRCo8eAGFKUPMFnky0+ddOU/S++kPVj1z5qq55m56zXyFmmU0V3mwIsuiUKchEUZjC1y1AA33Y+///fv+5GmZj12N/+MoxMkXhGI8eAGHKcORvd5V0ztA0tUM1d+s21a+e6KTMnBOORPRyKWf/+1Of+f5OxsW9IyZ2uy3M/mef1/vzuZZ1+5S4ttla/eWHjROLbPed0N/NGppAxUqAA33YL08vVo7VkuqIZR2GbZVHBO0MUUIGSGq5ID2e8wpwECpKV8878nSmv//S/Ms5dUdI5Hm/+MYxO4W3F48eABHIQiMTfh86Vs7nfvC9Uz8pZcymIeTPMKyUIcIsjkcyeKlrzc2k0CVAA3/Y+Pr/fn//7zv3OWUiaOhGM2//+MoxM0Wy+48eAGHKRjF4VTgSyzCCRr9P73Jc005wH9MiLp5G/2/Kn+yf/86jUqeNwFTqP5fqU4xMbl/8SdmZ/NtnZjdrWFF6UKjAWGFTDC2EeELBAvBAA2vI/f7nm2z7j8yZbGhowotlks7nfrmUdf4x2L/eGdHO1CiZMbZmtjJ08Rr/e+YzL1v///y7/3O/+MYxPQW3G48eAAGPNpFgkl87qjOVlLOrn9vCSGL5fOHCRe/Unm5gbFu+VQFRSCPW4kxnBUHAA2/R//35++f7/8f5UFOi5dp/+MoxNMXs/48eAGHKeb7ShEhrRrJ7ox2Dwom6lJchCIyAxmlmRblJ8/+J///5/9kbi6dYzc7Dzh3ZeZJOeKImygKWGTGRWucLNkQ180DEbzPRTV2MRjGM6SOHQoADfdn/vX13Zq7bvdmzAaHWaYxtxRuGeiA/JGqh7PMwvZd9KC2NEoEYzKdkrrd/Z21t1u7/+MYxPcYhGY4eAGHLTf0v8++Rq1UzJCdC1k5f3yfRSooW/dmui4H0GqxkF8S+GJJmuU6GQOYJDfCiLo9zim9ElBNAA+/gj5S/+MoxNAYHGY8eAGHKKw6Zmxn++StD2qiVTXJhRFSftxQ4s7mwjZjKC1IcjKvv8xXov/77EeQqjPV3az/vqlNe6XVJFSs7UVlR7oxnY/eeRFcis7KrkJGMgtyc+lMAFWYnvEQQh4ViYhGFC/59/vG+MdJtVsaBhUV3+FHcKDf/EVLf/6KCeBWWK2STEFNRTMu/+MYxPIaLG44eAGHLDEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq/+MoxMQVRE48eADFKaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq/+MYxPELK54oGABHoaqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
d.load(),9==c&&(a.log("Android HTML audio initialized"),a.android_initialized=!0));a.iOS&&(d.src="data:audio/mpeg;base64,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",
d.load(),9==c&&(a.log("iOS HTML audio initialized"),a.iOS_initialized=!0));a.fallback_audiopool.push(d)}a.fallback_audiopool_index=0}};a.allowSpeechClicked=function(b){a.allowSpeechDiv.parentNode.removeChild(a.allowSpeechDiv);a.allowSpeechDiv=null;if(a.speechAllowedByUser=b)a.clickEvent(),a.scheduledSpeak&&(a.speak(a.scheduledSpeak.text,a.scheduledSpeak.voicename,a.scheduledSpeak.parameters),a.scheduledSpeak=null);a.Dispatch("OnAllowSpeechClicked")};a.checkSpeechAllowed=function(b){if(0==a.speechAllowedByUser)return!1;
var c=a.is_android||a.iOS,d=a.is_safari&&(a.fallbackMode||a.forcedFallbackMode);if(!0!==a.disablePermissionPopup&&(!0===a.allowPermissionPopupEverywhere||c||d)&&!a.click_event_detected){if(a.allowSpeechDiv)return;a.allowSpeechDiv_appearances=null==a.allowSpeechDiv_appearances?1:++a.allowSpeechDiv_appearances;if(2<a.allowSpeechDiv_appearances)return console.log("ResponsiveVoice: Speech not allowed by user"),!1;c=document.createElement("style");c.innerHTML='.rvNotification{position:fixed;background-color:#fff;text-align:center;font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:400;line-height:1.5;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);z-index:10000;width:100vw;left:0;bottom:0;font-size:1rem;padding-bottom:.5em;padding-right:.5em}.rvButtonRow{padding-right:2em;padding-bottom:1em;text-align:right;font-size:medium}.rvButton{cursor:pointer;display:inline-block;margin-left:1em;padding:.8em 2em;border-radius:3px;font-size:small}.rvButtonAllow{border:none;background-color:#2b8cff;color:#fff}.rvButtonDeny{border:1px solid #2b8cff;color:#2b8cff;background-color:#fff}.rvTextRow{padding-top:1em;padding-bottom:2em}@media (min-width:576px){.rvNotification{width:60vw;left:20vw}}@media (min-width:768px){.rvNotification{width:50vw;left:25vw}}@media (min-width:992px){.rvNotification{width:40vw;left:30vw}}@media (min-width:1200px){.rvNotification{width:30vw;left:35vw}}';
document.body.appendChild(c);a.allowSpeechDiv=document.createElement("div");a.allowSpeechDiv.classList.add("rvNotification");void 0==b&&(b={});a.allowSpeechDiv.innerHTML='<div class="rvTextRow"><strong>'+(void 0!=b.urlOverride?b.urlOverride:window.location.hostname)+"</strong> "+(void 0!=b.textOverride?b.textOverride:"wants to play speech")+'</div><div class="rvButtonRow"><div onclick="responsiveVoice.allowSpeechClicked(false);" class="rvButton rvButtonDeny">DENY</div><div onclick="responsiveVoice.allowSpeechClicked(true);" class="rvButton rvButtonAllow">ALLOW</div></div>';
document.body.appendChild(a.allowSpeechDiv);return!1}return!0};a.fallback_audioPool_getAudio=function(){a.initFallbackPool();a.fallback_audiopool_index>=a.fallback_audiopool.length&&(a.fallback_audiopool_index=0);return a.fallback_audiopool[a.fallback_audiopool_index++]};a.fallback_updateChunksBuffer=function(){for(var b=a.fallbackChunkIndex;b<Math.min(a.fallbackChunks.length,a.fallbackChunkIndex+a.fallbackBufferLength);b++){var c=a.fallbackChunks[b];null==c.audio&&(c.audio=a.fallback_audioPool_getAudio(),
function(c){var d=function(){c.audio.src=c.url;c.audio.playbackRate=a.fallback_playbackrate;c.audio.preload="auto";c.audio.load()};0==b?d():setTimeout(d,50*b)}(c))}};a.selectBest=function(a){for(var b=0;b<a.length;b++)if(null!=a[b])return a[b];return null};a.pause=function(){a.fallbackMode?null!=a.fallback_audio&&a.fallback_audio.pause():(speechSynthesis.pause(),a.ttsCancelledByTimeout=!1,a.ttsKeepAliveTimeout=setTimeout(function(){a.ttsKeepAliveTimeout=null;speechSynthesis.cancel();a.ttsCancelledByTimeout=
!0},6E4))};a.resume=function(){if(a.fallbackMode)null!=a.fallback_audio&&a.fallback_audio.play();else if(a.ttsCancelledByTimeout)for(var b=a.ttsCancelledByTimeout=!1,c=0;c<a.utterances.length;c++){var d=a.utterances[c];a.currentMsg==d&&(b=!0);b&&a.tts_speak(d)}else a.ttsKeepAliveTimeout&&(clearTimeout(a.ttsKeepAliveTimeout),a.ttsKeepAliveTimeout=null),speechSynthesis.resume()};a.tts_speak=function(b){setTimeout(function(){a.cancelled=!1;speechSynthesis.speak(b)},.01)};a.setVolume=function(b){if(a.isPlaying())if(a.fallbackMode){for(var c=
0;c<a.fallback_audiopool.length;c++)a.fallback_audiopool[c].volume=b;a.fallback_audio.volume=b}else for(c=0;c<a.utterances.length;c++)a.utterances[c].volume=b};a.onPartEnd=function(b){if(null!=a.msgparameters&&null!=a.msgparameters.onchuckend)a.msgparameters.onchuckend();a.Dispatch("OnPartEnd");b=a.utterances.indexOf(b.utterance);a.currentMsg=a.utterances[b+1]};a.onboundary=function(b){a.log("On Boundary");a.iOS&&!a.onstartFired&&a.speech_onstart()};a.numToWords=function(b){function c(a){if(Array.isArray(a)){for(var b=
0,c=Array(a.length);b<a.length;b++)c[b]=a[b];return c}return Array.from(a)}var d=function(){return function(a,b){if(Array.isArray(a))return a;if(Symbol.iterator in Object(a)){var c=[],d=!0,e=!1,f=void 0;try{for(var g=a[Symbol.iterator](),h;!(d=(h=g.next()).done)&&(c.push(h.value),!b||c.length!==b);d=!0);}catch(w){e=!0,f=w}finally{try{if(!d&&g["return"])g["return"]()}finally{if(e)throw f;}}return c}throw new TypeError("Invalid attempt to destructure non-iterable instance");}}(),e=function(a){return 0===
a.length},h=function(a){return function(b){return b.slice(0,a)}},f=function(a){return function(b){return b.slice(a)}},g=function(a){return a.slice(0).reverse()},l=function(a){return function(b){return function(c){return a(b(c))}}},k=function(a){return!a},m=function v(a){return function(b){return e(b)?[]:[h(a)(b)].concat(c(v(a)(f(a)(b))))}},p=" one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen".split(" "),q="  twenty thirty forty fifty sixty seventy eighty ninety".split(" "),
r=" thousand million billion trillion quadrillion quintillion sextillion septillion octillion nonillion".split(" "),t=function(a){var b=d(a,3);a=b[0];var c=b[1];b=b[2];return[0===(Number(b)||0)?"":p[b]+" hundred ",0===(Number(a)||0)?q[c]:q[c]&&q[c]+" "||"",p[c+a]||p[a]].join("")},u=function(a,b){return""===a?a:a+" "+r[b]};return"number"===typeof b?a.numToWords(String(b)):"0"===b?"zero":l(m(3))(g)(Array.from(b)).map(t).map(u).filter(l(k)(e)).reverse().join(" ").trim()};a.getWords=function(b){b=b.replace(/$|\u00a5|\u20a1|\u20ac|\u00a3|\u20aa|\u20b9|\uffe5|\u17db|\u20a9|\u20a6|\u0e3f|\u20b4|\u20ab/gi,
" dummy currency ");var c=b.split(/(\s*[\s,]\s*|\?|;|:|\.|\(|\)|!)/);c=c.filter(function(a){return/[^\s]/.test(a)});for(var d=0;d<c.length;d++)null!=(b=c[d].toString().match(/\d+/))&&(c.splice(d,1),a.numToWords(+b[0]).split(/\s+/).map(function(a){c.push(a)}));return c};a.getEstimatedTimeLength=function(b,c){b=a.getWords(b);var d=0,e=a.fallbackMode?1300:700;c=c||1;b.map(function(a,b){d+=(a.toString().match(/[^ ]/igm)||a).length});var h=b.length,f=60/a.WORDS_PER_MINUTE*c*1E3*h;5>h&&(f=c*(e+50*d));a.log("Estimated time length: "+
f+" ms, words: ["+b+"], charsCount: "+d);return f};a.validateParameters=function(a,c){if("undefined"===typeof a[c])return a[c];switch(c){case "rate":case "pitch":case "volume":var b=Number(a[c]);isNaN(b)&&console.warn("ResponsiveVoice: the parameter "+c+' has a wrong value "'+a[c]+'". Defaults were used.');a[c]=isNaN(b)?"1":a[c]}return a[c]};a.services={NATIVE_TTS:0,FALLBACK_AUDIO:1};a.servicesPriority=[0,1];a.servicesEnabled=[];a.setServiceEnabled=function(b,c){a.servicesEnabled[b]=c};a.getServiceEnabled=
function(b){return a.servicesEnabled[b]||!1};a.setServiceEnabled(a.services.NATIVE_TTS,!0);a.setServiceEnabled(a.services.FALLBACK_AUDIO,!0);a.forceFallbackMode=function(b){a.forcedFallbackMode=b;a.fallbackMode=b;a.mapRVs();a.Dispatch("OnServiceSwitched")};a.enableWindowClickHook=function(){a.userInteractionEvents.forEach(function(b){window.addEventListener(b,a.clickEvent,!1)})};a.setTextReplacements=function(a){if(null==a)l=null;else{l=[];for(var b=0;b<a.length;b++){var d=a[b],e=d.searchvalue;if("string"==
typeof e)try{var h=e.match(/^\/(.*?)\/([gimy]*)$/),f=new RegExp(h[1],h[2]);f instanceof RegExp&&(e=f)}catch(g){e=new RegExp(e,"g")}l.push({searchvalue:e,newvalue:d.newvalue,collectionvoices:d.collectionvoices,systemvoices:d.systemvoices})}}};var p=/(code\.responsivevoice\.org|local-lb).*?responsivevoice(\.\w+)?\.js/ig;"interactive"===document.readyState?a.init():document.addEventListener("DOMContentLoaded",function(){a.init()})},responsiveVoice=new ResponsiveVoice;


/// -------- RESPONSIVE VOICE ends
    responsiveVoice.debug = true;
}

if( document.location.search && /rvWebsiteVerify=WGciAW2s/gi.test(document.location.search) ){
    function rvNotificationPopup(){

        var css = '#rv_WGciAW2s_notification,#rv_WGciAW2s_notification *{font-family:"Open Sans",Helvetica,Arial,sans-serif,Tahoma!important}#rv_WGciAW2s_notification{transition-duration:.3s;opacity:1;transform:scale(1);background:#fff;border:1px solid rgba(0,0,0,.125);border-radius:.3rem;position:fixed;z-index:2147483646;top:20px;left:20px;width:400px;padding:25px;-webkit-box-shadow:0 2px 4px 0 rgba(0,0,0,.3);-moz-box-shadow:0 2px 4px 0 rgba(0,0,0,.3);box-shadow:0 2px 4px 0 rgba(0,0,0,.3)}#rv_WGciAW2s_notification .rv_notification_logo{background:url(https://app.responsivevoice.org/favicon-96x96.png) no-repeat;background-size:50px 50px;float:left;margin:0 20px 0 0;width:50px;height:50px}#rv_WGciAW2s_notification_play{background:url(https://app.responsivevoice.org/images/play.png) no-repeat;background-size:25px 25px;float:left;margin:0 5px 0 0;width:25px;height:25px;cursor:pointer}#rv_WGciAW2s_notification .rv_notification_body{float:left;color:#343a40;font-size:13px;width:78%;min-height:50px;vertical-align:middle}#rv_WGciAW2s_notification .rv_notification_title{color:#1d643b;font-size:16px;font-weight:700;margin:1px 0 4px 0;display:inline-block}#rv_WGciAW2s_notification_close{position:absolute;top:15px;right:15px;font-size:22px;color:#343a40;cursor:pointer;line-height:11px}.rv_notification_clear{clear:both}',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        head.appendChild(style);
        style.type = 'text/css';

        if (style.styleSheet){

            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css) );
        }


        var rvNotification = document.createElement('div');
        rvNotification.innerHTML = '<div id=rv_WGciAW2s_notification><div id=rv_WGciAW2s_notification_close>×</div><div class=rv_notification_logo></div><div class=rv_notification_body><div id=rv_WGciAW2s_notification_play></div><span class=rv_notification_title>ResponsiveVoice URL verified</span><br><span class=rv_notification_text>Your <i style="display: none;">ResponsivVoice</i> code snippet is correctly installed, you may now close this window.</span></div><div class=rv_notification_clear></div></div>';
        document.body.appendChild(rvNotification);


        function speakVerification(){
            responsiveVoice.speak( document.getElementById('rv_WGciAW2s_notification').getElementsByClassName('rv_notification_text')[0].textContent );
        }

        document.getElementById("rv_WGciAW2s_notification_play").addEventListener( "click" , function(e) {
            speakVerification();
        });

        document.getElementById("rv_WGciAW2s_notification_close").addEventListener( "click" , function(e) {
            style.remove();
            rvNotification.remove();
        });

        speakVerification();
    }

    document.addEventListener('DOMContentLoaded', function(){
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST", "https://code.responsivevoice.org/verify/WGciAW2s", true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("rv=" + (typeof responsiveVoice !== 'undefined') );
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                rvNotificationPopup();
            }
        };
    }, false);
}


/**
 Copyright (c) Tristen Brown

 Permission is hereby granted, free of charge, to any person obtaining
 a copy of this software and associated documentation files (the
 "Software"), to deal in the Software without restriction, including
 without limitation the rights to use, copy, modify, merge, publish,
 distribute, sublicense, and/or sell copies of the Software, and to
 permit persons to whom the Software is furnished to do so, subject to
 the following conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(e,t){if("function"==typeof define&&define.amd)define("hoverintent",["module"],t);else if("undefined"!=typeof exports)t(module);else{var n={exports:{}};t(n),e.hoverintent=n.exports}}(this,function(e){"use strict";var t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};e.exports=function(e,n,o){function i(e,t){return y&&(y=clearTimeout(y)),b=0,p?void 0:o.call(e,t)}function r(e){m=e.clientX,d=e.clientY}function u(e,t){if(y&&(y=clearTimeout(y)),Math.abs(h-m)+Math.abs(E-d)<x.sensitivity)return b=1,p?void 0:n.call(e,t);h=m,E=d,y=setTimeout(function(){u(e,t)},x.interval)}function s(t){return L=!0,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1!==b&&(h=t.clientX,E=t.clientY,e.addEventListener("mousemove",r,!1),y=setTimeout(function(){u(e,t)},x.interval)),this}function c(t){return L=!1,y&&(y=clearTimeout(y)),e.removeEventListener("mousemove",r,!1),1===b&&(y=setTimeout(function(){i(e,t)},x.timeout)),this}function v(t){L||(p=!0,n.call(e,t))}function a(t){!L&&p&&(p=!1,o.call(e,t))}function f(){e.addEventListener("focus",v,!1),e.addEventListener("blur",a,!1)}function l(){e.removeEventListener("focus",v,!1),e.removeEventListener("blur",a,!1)}var m,d,h,E,L=!1,p=!1,T={},b=0,y=0,x={sensitivity:7,interval:100,timeout:0,handleFocus:!1};return T.options=function(e){var n=e.handleFocus!==x.handleFocus;return x=t({},x,e),n&&(x.handleFocus?f():l()),T},T.remove=function(){e&&(e.removeEventListener("mouseover",s,!1),e.removeEventListener("mouseout",c,!1),l())},e&&(e.addEventListener("mouseover",s,!1),e.addEventListener("mouseout",c,!1)),T}});

var config = {"welcomeMessage":false,"speakSelectedText":true,"speakLinks":false,"speakInactivity":false,"speakEndPage":true,"exitIntent":false,"accesibilityNavigation":false,"accesibilityNavigation2":false,"welcomeMessageTime":true,"text_welcomeMessage":"Welcome to Natural Reader.","text_speakInactivity":"","text_speakEndPage":"","text_exitIntent":"","trackEvents":false,"abTesting":false,"analytics_id":null,"another_field":null};

 /*<!-- LearnBriteAnalytics -->
var _wla = _wla || [];
_wla.push(['trackPageView']);
//_wla.setCountPrerender(true);
_wla.push(['enableLinkTracking']);
(function() {
    var u="//ai.learnbrite.com/";
    _wla.push(['setTrackerUrl', u+'analytics.php']);
    _wla.push(['setSiteId', 75]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript';
    g.async=true; g.defer=true; g.src=u+'analytics.js.php'; s.parentNode.insertBefore(g,s); })(); */

var splitTestEnabled = config.abTesting || false;
var splitTest_useGS  = (Math.random() < 0.5);

function GetRandomMsg(text) {
    var texts = text.split("|");
    return texts[Math.floor(Math.random() * texts.length)];
}

function getHiddenProp(){
    var prefixes = ['webkit', 'moz', 'ms', 'o'];

    // if 'hidden' is natively supported just return it
    if ('hidden' in document) return 'hidden';

    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++) {
        if ((prefixes[i] + 'Hidden') in document)
            return prefixes[i] + 'Hidden';
    }

    // otherwise it's not supported
    return null;
}

function getVisibilityState() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];

    // if 'visibilityState' is natively supported just return it
    if ('visibilityState' in document) return 'visibilityState';

    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++) {
        if ((prefixes[i] + 'VisibilityState') in document)
            return prefixes[i] + 'VisibilityState';
    }
    // otherwise it's not supported
    return null;
}

function isHidden() {
    var prop = getHiddenProp();
    if (!prop) return false;

    return document[prop];
}

function isPrerendered() {
    var prop = getVisibilityState();
    //console.log(prop);
    if (!prop) return false;
    //console.log(document[prop]);
    if (document[prop] != "prerender") return false;
    return document[prop];
}
console.log("isHidden: " + isHidden());
console.log("Prerender: " + isPrerendered());

//Analytics




//Search Message

var prerenderUsed = false;

if (isPrerendered() && !prerenderUsed) {
    prerenderUsed = true;
    setTimeout(function () {

        if (!splitTestEnabled || (splitTestEnabled && splitTest_useGS)) {
            var txt = GetRandomMsg('');
            if (txt != null && txt != "") {
                console.log("Launching search message");
                responsiveVoice.speak("According to Voicebrite, " + txt, 'UK English Female');
            }
        }

        //Search Message Split Test - Impression
        if (splitTestEnabled) {
            if (splitTest_useGS) {
                trackEvent('searchMessage', 'impressionAB', 'true');
            } else {
                trackEvent('searchMessage', 'impressionAB', 'false');
            }
        } else {
            trackEvent('searchMessage', 'impression');
        }

    }, 1500);

}

window.addEventListener('load', function() {
//We came from prerender
    var smessInterval = null;
    if (prerenderUsed) {
        smessInterval = setInterval(function () {
            if (!isPrerendered()) {

                clearInterval(smessInterval);

                //Search Message Split Test - Impression
                if (splitTestEnabled) {
                    if (splitTest_useGS) {
                        trackEvent('searchMessage', 'visitAB', 'true');
                    } else {
                        trackEvent('searchMessage', 'visitAB', 'false');
                    }
                } else {
                    trackEvent('searchMessage', 'visit');
                }
            }
        }, 1000);
    }

    console.log("Configuring");

    //Speak links
    var _allLinks = document.getElementsByTagName('a')
    Array.prototype.forEach.call(_allLinks, function(el) {
        hoverintent(el,
            function () {
                if (config.speakLinks) {
                    //responsiveVoice.cancel();
                    responsiveVoice.speak(el.textContent, 'UK English Female');
                    trackEvent('agentFeature', 'spokenLink');
                }
            }, function () {
            }
        );
    });


    //Speak selected text
    var selectedText      = "";
    var last_selectedText = "";

    function getSelectionText() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") { // for Internet Explorer 8 and below
            text = document.selection.createRange().text;
        }
        return text;
    }

    if (config.speakSelectedText) {
        attachToElements( document.querySelectorAll("PRE,DIV"), ['mouseup', 'touchend'], onMouseUp);
    }

    function attachToElements(elements, events, callback){
        if(elements.length > 0){
            for(var i = 0; i < elements.length; i++){
                events.forEach(function(event){
                    elements[i].addEventListener(event, function(e){
                        callback();
                    });
                });
            }
        }
    }

    function onMouseUp() {
        selectedText = getSelectionText();
        console.log("Selected text *" + selectedText + "*");
        if (selectedText != last_selectedText && selectedText != "") {
            last_selectedText = selectedText;

            responsiveVoice.cancel(); // stop anything currently being spoken
            responsiveVoice.speak(selectedText, 'UK English Female'); //speak the text as returned by getSelectionText
            trackEvent('agentFeature', 'highlightText');
        }
    }

    //Speak welcome message. Will only play if user didn't came from google.
    var welcomeMessageLaunched = false;
    if (config.welcomeMessage && (!config.welcomeMessageTime || oneTimeTest("welcomeMessage")) && !isPrerendered() && !prerenderUsed) {
        welcomeMessageLaunched = true;
        setTimeout(function () {
            if (config.text_welcomeMessage != null && config.text_welcomeMessage != "") {
                console.log("Launching welcome message");
                responsiveVoice.speak(GetRandomMsg(config.text_welcomeMessage), 'UK English Female');
                trackEvent('agentFeature', 'welcomeMessage');
            }
        }, 1500);
    }

    //Speak welcome message when user came from Google. Won't play if default message played
    var welcomeMessage2Launched = false;
    var welcomeMessage2Interval = null;
    if (!welcomeMessageLaunched && config.welcomeMessage2 && (!config.welcomeMessageTime || oneTimeTest("welcomeMessage2"))
        && config.text_welcomeMessage2 != null && config.text_welcomeMessage2 != "") {
        //Wait until we're visible and launch message

        welcomeMessage2Interval = setInterval(function () {
            console.log("Welcome Message from Google Waiting");
            if (!isPrerendered() && !welcomeMessage2Launched) {
                console.log("Welcome Message from Google launched");

                welcomeMessage2Launched = true;
                responsiveVoice.speak(GetRandomMsg(config.text_welcomeMessage2), 'UK English Female');
                trackEvent('agentFeature', 'welcomeMessage2');
                clearInterval(welcomeMessage2Interval);
            }

        }, 1000);
    }

    //Speak when scroll end
    function bindScroll() {
        if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100 && config.text_speakEndPage != null && config.text_speakEndPage != "") {
            console.log("bottom");
            window.removeEventListener('scroll', bindScroll);

            responsiveVoice.speak(GetRandomMsg(config.text_speakEndPage), 'UK English Female');
            trackEvent('agentFeature', 'scrollEnd');
        }
    }

    if (config.speakEndPage) {
        window.addEventListener('scroll', bindScroll);
    }

    //Inactivity
    var idleTime = 0;
    if (config.speakInactivity) {
        setInterval(timerIncrement, 1000);

        window.addEventListener('mousemove', function() {
            idleTime = 0;
        });

        window.addEventListener('keyup', function() {
            idleTime = 0;
        });
    }

    function timerIncrement() {
        idleTime += 1000;

        if (idleTime >= 30000) {
            responsiveVoice.speak(GetRandomMsg(config.text_speakInactivity), 'UK English Female');
            trackEvent('agentFeature', 'inactivity');
            idleTime = 0;
        }
    }

    //Exit intent
    if (config.speakInactivity) {
        console.info("setting up exit intent");
        document.addEventListener('mouseout', exitIntent);
    }

    function exitIntent(e) {
        if (e.clientY < 0) {
            responsiveVoice.speak(GetRandomMsg(config.text_exitIntent), 'UK English Female');
            trackEvent('agentFeature', 'exitIntent');
        }
    }

    //Tab and ctrl to speak - Accessibility Navigation
    var started = 0;
    if (config.accesibilityNavigation) {
        console.log("accesibilityNavigation");

        document.addEventListener('keyup',function(e){
            console.log('keyup called');

            var code = e.keyCode || e.which;

            if(e.target){
                switch(e.target.tagName){
                    case 'A':
                        if (code == '9') {
                            responsiveVoice.speak('Link 2 ' + e.target.text, 'UK English Female');
                            trackEvent('agentFeature', 'accesibilityNavigation', 'tab');
                        }
                        break;

                    case 'BUTTON':
                        if (code == '9') {
                            setTimeout(responsiveVoice.speak( e.target.textContent + ' button', 'UK English Female'), 1000);
                            trackEvent('agentFeature', 'accesibilityNavigation', 'tab');
                        }
                        break;

                    case 'TEXTAREA':
                        if (code == '9') {
                            responsiveVoice.speak('Text Input ' + document.querySelectorAll(':focus')[0].getAttribute('placeholder'), 'UK English Female');
                            trackEvent('agentFeature', 'accesibilityNavigation', 'tab');
                        }
                        break;
                }
            }
        });
    }

    if (config.accesibilityNavigation2) {

        document.addEventListener('keyup',function(e){
            console.log('keyup called');

            var code = e.keyCode || e.which;

            if (code == '40' && e.ctrlKey) {
                console.log('ctrl + down arrow');

                responsiveVoice.speak(document.querySelectorAll('p')[started].textContent, 'UK English Female');
                trackEvent('agentFeature', 'accesibilityNavigation', 'ctrl-arrow');
                document.querySelectorAll('p')[started].scrollIntoView(false);
                started = started + 1;
            }
            if (code == '38' && e.ctrlKey) {
                console.log('ctrl + up arrow');

                responsiveVoice.speak(document.querySelectorAll('p')[started].textContent, 'UK English Female');
                trackEvent('agentFeature', 'accesibilityNavigation', 'ctrl-arrow');
                document.querySelectorAll('p')[started].scrollIntoView(false);
                started = started - 1;
                if(started < 1){
                    started = 0;
                }
            }
        });
    }
});


function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca     = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}

function getOrCreateTest(name, prob, days) {

    var c = readCookie(name);

    if (c == null) {
        console.log("Cookie set");
        var v = (Math.random() < (prob != null ? prob : 0.5));
        //1 hour
        createCookie(name, v.toString(), (days != null ? days : (1 / 24)));
        return v;
    }
    console.log("Cookie read");
    return c == (true).toString();

}

function oneTimeTest(name, days) {

    var c = readCookie(name);

    if (c == null) {
        console.log("Cookie set - one time True");
        //1 hour
        createCookie(name, (false).toString(), (days != null ? days : (0.5 / 24)));
        return true;
    }
    console.log("Cookie read - one time False");
    return false;

}

function trackEvent(category, action, name, value) {

    if (config.trackEvents != true) return;

    console.log("Track " + category + "," + action + "," + name);

    var url = 'https://ai.learnbrite.com/analytics.php';
    var postArray = [];

    var data = {
        idsite: config.analytics_id,
        rec: 1,
        url: window.location.href,
        rand: Math.floor(Math.random() * 1000000000),
        e_c: category,
        e_a: action,
        e_n: name,
        e_v: value
    };

    for (var property in data){
        postArray.push( encodeURI(property + '=' + data[property]));
    }

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", url, true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send( postArray.join('&') );

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Tracking Success");
            console.log(data);
        }
    };
}
