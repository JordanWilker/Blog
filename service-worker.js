if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-f8d4e228"],(function(e){"use strict";e.setCacheNameDetails({prefix:"mr-hope"}),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"assets/css/0.styles.f2077539.css",revision:"cd1aa59af4439eb61c8bfaa7151da76f"},{url:"assets/img/default-skin.b257fa9c.svg",revision:"b257fa9c5ac8c515ac4d77a667ce2943"},{url:"assets/img/search.83621669.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/js/49.c0de9099.js",revision:"2cf033b7273979249d7cf90ea207b25f"},{url:"assets/js/50.ec95952e.js",revision:"37bcca23ab7262ce3410e6b47293d9f1"},{url:"assets/js/app.8d366bed.js",revision:"dfc294952d28c41c00c118b06ed4fc68"},{url:"assets/js/layout-Blog.82dce7ad.js",revision:"4a37940a87e1bf3afe89dc4a06ed8db4"},{url:"assets/js/layout-Layout.2be11ea2.js",revision:"8a417b3ba71d3d56e844f20a7f4a55dd"},{url:"assets/js/layout-NotFound.409c3cda.js",revision:"bed1d2da53d3986ce5c5a8966ef8f6a5"},{url:"assets/js/layout-Slide.fbcce3e0.js",revision:"1f3ec4ce20babc832a87aeb16908ef4d"},{url:"assets/js/page--4c69b3e0.179f7bd2.js",revision:"ee9b13483b72ae039aa6f7da9a2ddc75"},{url:"assets/js/page--6d437a88.c40f9e4c.js",revision:"0909cb8c32cd21baf45ab7aafb2fea38"},{url:"assets/js/page--7024a1db.0267e72f.js",revision:"758cc1f8b98adfb4e0e8b20d6d966ea1"},{url:"assets/js/page--dff2a364.94229ec2.js",revision:"5db0e7854c118f1fedf7269d50f92b9b"},{url:"assets/js/page-AdvancedFront-EndFrameworks--e3bd767c.53b60f8b.js",revision:"49ae22ea19b1f32caa1982ec85f9ee4a"},{url:"assets/js/page-ApplicationArchitecture,MVCDesignPattern--7376447c.23b60e1d.js",revision:"4d6ed815f1ddba9884c208109a9cf59e"},{url:"assets/js/page-CFundamentals--41c6417c.f2086a8e.js",revision:"a4c7a4721e522a68b2b108b881d67ddc"},{url:"assets/js/page-DeployingApplications--7fcf42fc.189a8494.js",revision:"71607b13f099bf2c8f41500e316fd6c9"},{url:"assets/js/page-FindMoreAboutmehere--0f690267.fd1e444b.js",revision:"0d83f9abb2412326c54757d18cdc92f1"},{url:"assets/js/page-FoundationsofWebDevelopment--6256aa42.209c37d2.js",revision:"dedec1eb360f090ac02404aeed511ac5"},{url:"assets/js/page-IntrotoJavaScript--d76477fc.7fa2b056.js",revision:"6a912291b515e7dc91513b24adc9a67b"},{url:"assets/js/page-IntrotoServersideconcernswithJavaScript--2a331142.bb71e886.js",revision:"cd1da4a37f6f190ee42c45e2fdc2fdd4"},{url:"assets/js/page-JournalDay1Week1--ad5cc908.ebaa8b37.js",revision:"5be17cfe06a1befb36f5983cf0ae3e00"},{url:"assets/js/page-JournalDay1Week2--60d5993e.8dcf2c3f.js",revision:"5bd5e044e2c7f1b0055155d31fad12a8"},{url:"assets/js/page-JournalDay2Week1--11da44fa.35e62d2b.js",revision:"1cbfb67d4c424e47688bfefdf99d740a"},{url:"assets/js/page-JournalDay3Week1--7a62ee78.11e21b63.js",revision:"e794b5bf1278eaff848b01fde9981dba"},{url:"assets/js/page-JournalDay3Week2--31e6ec3a.a9b8a044.js",revision:"1856fe6b66aef8c4f5bb87e4efea6466"},{url:"assets/js/page-JournalDay4Week1--3a28d014.4e4b40ec.js",revision:"d85bcf3031a984cc8717122540feeb12"},{url:"assets/js/page-JournalDay4Week2--cb20d490.3b1e5cd2.js",revision:"32ecab9ef4818119e97b5d6fe05e9c1f"},{url:"assets/js/page-JournalDay5Week1--4b744174.e6e119f6.js",revision:"4326d0a3a6277251af00b0af6fab3f5f"},{url:"assets/js/page-JournalDay5Week2--02f83f36.3da56c5f.js",revision:"c73ada6d7b7edb1acd790ee28a5d340b"},{url:"assets/js/page-JournalWeek3Day3--2d2a2c08.7adc97ff.js",revision:"483e5eb73f0bfa62f5a8e960d60c3737"},{url:"assets/js/page-JournalWeek3Day4--51f3937a.258c1972.js",revision:"efae179a2317e941faf791d0e299d7aa"},{url:"assets/js/page-JournalWeek3Day5--8b078610.f821fae4.js",revision:"f9be3d751442cb59bcfe5c7a59211c60"},{url:"assets/js/page-JournalWeek4Day1--18599700.8888f2bf.js",revision:"65f50e73e032efa1d7774338ed9e81d8"},{url:"assets/js/page-JournalWeek5Day1--31791a78.c6e7992f.js",revision:"283939b39f339ccd7cfe3d72a563a133"},{url:"assets/js/page-JournalWeek5Day2--4fcc1c42.f622c190.js",revision:"45714cefd673cb36e4f93121773d0ad4"},{url:"assets/js/page-JournalWeek5Day3--8f567480.624e5a69.js",revision:"1b609722df1d114318aa04e178d4dfe3"},{url:"assets/js/page-JournalWeek5Day4--20dd6f3e.6d713b70.js",revision:"e76ff99c618a4dfec5a14d39bb710a59"},{url:"assets/js/page-JournalWeek5Day5--ed33ce88.619ef974.js",revision:"5638851516f14132e0c73c06e0dcecd8"},{url:"assets/js/page-UnderStandingAsynchronousCode,andAPI's--0f8810fc.70b8c584.js",revision:"14dcc687f95a66afc2deab92adef327b"},{url:"assets/js/page-UnderstandingPersistentRelationalData--5c2a2b02.078cc69b.js",revision:"46b7c360d37f87556ad4f563df84e2ab"},{url:"assets/js/page-Week3Day2--fe3b7f04.4c03c3ca.js",revision:"a05950deb2839c510a5d29e35a75891f"},{url:"assets/js/page-Week4Day1--2fbf7502.79e3a5a1.js",revision:"90fdb4a3596162bbc3c606f2b288ec53"},{url:"assets/js/page-Week4Day2--cf6fc300.a656ee0b.js",revision:"0e83220540dc0e81e59b3747325b877c"},{url:"assets/js/page-Week4Day3--00d0c7fe.220f38dd.js",revision:"d6855c2be81ef0c269078f51628d62f0"},{url:"assets/js/page-Week4Day4--6959717c.b1af7cd9.js",revision:"6013da59a78126caca2a360a070a8ed9"},{url:"assets/js/page-Week4Day5--5c3bca0c.3ae5c11d.js",revision:"a6232e3208ec750c2e00b36bce41290d"},{url:"assets/js/page-WorkinginaProfessionalEnvironment--1be10f7c.62925285.js",revision:"ac5a9afc3c3b6429a4b2cb7f4dfeb32f"},{url:"assets/js/vendors~layout-Blog~layout-Layout.60a5b978.js",revision:"667943e234586fa90b70902cb04fc8d4"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound.022dd1bd.js",revision:"4e78380c045460fc098c93f949d5619c"},{url:"assets/js/vendors~layout-Blog~layout-Layout~layout-NotFound~layout-Slide.a6166c07.js",revision:"fbd3678b04a3945e66331259905922af"},{url:"assets/js/vendors~photo-swipe.9a000f70.js",revision:"994a5392cad05b47d84affd233140f35"},{url:"404.html",revision:"ebc318656e23179aa66475ffe37faa3a"},{url:"article/index.html",revision:"6d7f018f54e3afa57382eeead078fe25"},{url:"category/index.html",revision:"b1e5316ff14199e44050bb0f00cdf0f1"},{url:"encrypt/index.html",revision:"7c3540afba2c5d68d09a492ca5750f55"},{url:"index.html",revision:"19891117e2335daefb5e2da6387736e6"},{url:"reflections/index.html",revision:"d2313393915fad2873bdb2411a67be6f"},{url:"reflections/wk1/01-day/index.html",revision:"3a24c8428b71a53621c54cd91531b30a"},{url:"reflections/wk1/02-day/index.html",revision:"d4adffa4479574332cc6867717712a55"},{url:"reflections/wk1/03-day/index.html",revision:"16e54175a6330eecf0d27c142131e28d"},{url:"reflections/wk1/04-day/index.html",revision:"b4a45f6d518f60f9a0c205d81256abb2"},{url:"reflections/wk1/05-day/index.html",revision:"fa8d39ed4306d1cc7c25b2d1ace754a5"},{url:"reflections/wk1/quiz1/index.html",revision:"3ce741a63d7565010f0f640dac7026c0"},{url:"reflections/wk10/quiz10/index.html",revision:"ed7d701531ff5fc218eab5290d75010c"},{url:"reflections/wk11/placeholder/index.html",revision:"cb5fbbfca4eeb51cedd5466d897b6037"},{url:"reflections/wk12/placeholder/index.html",revision:"ff6bfa5115dc20230c045dc494359a47"},{url:"reflections/wk2/01-day/index.html",revision:"0fc28c5383b57f38d3c9e4f986fabc58"},{url:"reflections/wk2/02-day/index.html",revision:"2e16111491d9d85f06355f52febc2173"},{url:"reflections/wk2/03-day/index.html",revision:"1bd49321f94ddd74c44a7e51ac8c69bf"},{url:"reflections/wk2/04-day/index.html",revision:"958999c722f83fa48a31fd5fba0864b7"},{url:"reflections/wk2/05-day/index.html",revision:"0e736a294b07acf5eb53168b0cc848c9"},{url:"reflections/wk2/quiz2/index.html",revision:"3d40dbeee277aa67e46ee9d50714e9a4"},{url:"reflections/wk3/01-day/index.html",revision:"d32be792f459bf38cb83fd9b04645800"},{url:"reflections/wk3/02-day/index.html",revision:"9393bae9d89b1636cf98a979f11d27e7"},{url:"reflections/wk3/03-day/index.html",revision:"4adcd5f5b0d13f856e5cb42c7740799b"},{url:"reflections/wk3/04-day/index.html",revision:"2f3bf469efdca8110219d530e88293e7"},{url:"reflections/wk3/05-day/index.html",revision:"32153e381701ab0b88f7a5d51bfb5862"},{url:"reflections/wk3/quiz3/index.html",revision:"4373d16ea856de39f715aa1907a21f01"},{url:"reflections/wk4/01-Day/index.html",revision:"9c190b837b65bf7e13ebac046989eab5"},{url:"reflections/wk4/02-Day/index.html",revision:"e0ff386d18792b849471de9ac919ca1f"},{url:"reflections/wk4/03-Day/index.html",revision:"8417ecb9b261115bfe6bc21cb0d48aca"},{url:"reflections/wk4/04-Day/index.html",revision:"4aa80b98bc05278b7ca9435bb710eed1"},{url:"reflections/wk4/05-Day/index.html",revision:"eaa5654689a18868e46c75943101fec4"},{url:"reflections/wk4/quiz4/index.html",revision:"ff8fc455dfa53e5e9a25786004b8b764"},{url:"reflections/wk5/01-Day/index.html",revision:"dff8e50e2a76b868deddcbafc35567ae"},{url:"reflections/wk5/02-Day/index.html",revision:"8a1c0d8c9a3accb0173ae84fbbb6f6da"},{url:"reflections/wk5/03-Day/index.html",revision:"76df92c943be168687560ba6984d9e4e"},{url:"reflections/wk5/04-Day/index.html",revision:"148cb299730911af8f7adc0c1375da60"},{url:"reflections/wk5/05-Day/index.html",revision:"600384642b138f4be082a3229d277b7e"},{url:"reflections/wk5/quiz5/index.html",revision:"d2c16050c26b0328a06f8fc65e6279e8"},{url:"reflections/wk6/quiz6/index.html",revision:"c955f55f13c04f4deedf2052d2271d7c"},{url:"reflections/wk7/quiz7/index.html",revision:"7cd0f3a04f961ebb0a2c8c11923ca35b"},{url:"reflections/wk8/quiz8/index.html",revision:"5ff377919b0ead477523c7adaa596db1"},{url:"reflections/wk9/quiz9/index.html",revision:"fc1c2811504c1ad38d045210cb6fba10"},{url:"slide/index.html",revision:"3c73cb35f85bfe401c6781f5efabbf78"},{url:"tag/index.html",revision:"ac5dab896b9abc62d37c5ad9e20c198e"},{url:"timeline/index.html",revision:"5130ea3afc7900e365620dc078e1ef17"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
addEventListener("message", (event) => {
  const replyPort = event.ports[0];
  const message = event.data;
  if (replyPort && message && message.type === "skip-waiting")
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        (error) => replyPort.postMessage({ error })
      )
    );
});
