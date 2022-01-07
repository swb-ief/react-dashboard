if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"05c61856131d513508fd12f2bc5bb769","url":"404.html"},{"revision":"5d31c8c74c9a62955a88f85c424ba06c","url":"799cd5eda3d1d5a6c849.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"05c61856131d513508fd12f2bc5bb769","url":"index.html"},{"revision":"dd1275db20c1060d88a9284db367dc49","url":"static/css/19.18c158eb.chunk.css"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"ee193d41615fb8cf1732f6191cb78d96","url":"static/css/22.f5f9d973.chunk.css"},{"revision":"0ff5cf098070438329a1271ddf981ca0","url":"static/js/0.a0c39cc9.chunk.js"},{"revision":"3afa952063bc0d7d0d4673d4c49a282d","url":"static/js/1.68876ac4.chunk.js"},{"revision":"c8fe7eb762bd41f68e45c1e7152be120","url":"static/js/11.f2143050.chunk.js"},{"revision":"39a0485f21e782bf38e3414913e3d8ee","url":"static/js/12.6f2890de.chunk.js"},{"revision":"58c8c8752fe15fab7f17ab35ec04853c","url":"static/js/13.6fadb814.chunk.js"},{"revision":"cd1a04a42e90fbf579756370120d0140","url":"static/js/14.a6049ae0.chunk.js"},{"revision":"36f09f23ee7b724278d84f8f3e14bba5","url":"static/js/15.5d7e9379.chunk.js"},{"revision":"6e6332e47f620bb3ce3b47487ee07c25","url":"static/js/16.2f49e105.chunk.js"},{"revision":"ac96b14a34f92b960e16487262c346a5","url":"static/js/17.384f7866.chunk.js"},{"revision":"f27d70771858079d93a8200128abe25d","url":"static/js/18.c166bd37.chunk.js"},{"revision":"0ae7f6ea864e0389247c1e87f3c3598b","url":"static/js/19.8b9aa8e7.chunk.js"},{"revision":"3571674456136ed139c2be484b3989a3","url":"static/js/2.091dd7ed.chunk.js"},{"revision":"ca4f224407b6b7b1270b9d4ee26ffae8","url":"static/js/20.dadebd44.chunk.js"},{"revision":"77d85a0db62dec36b8f60fa944f8ae6a","url":"static/js/21.73d2942b.chunk.js"},{"revision":"a114e71768812cdbe6a23410970d2449","url":"static/js/22.223a3cf8.chunk.js"},{"revision":"a2720d102b2b81f12669d1d637096cf5","url":"static/js/23.6d376ffd.chunk.js"},{"revision":"72713850a4c3bef1ed936888d577c19f","url":"static/js/24.d7c5ae18.chunk.js"},{"revision":"878f231651e76c8cee8e3620f67b9037","url":"static/js/25.7cde4247.chunk.js"},{"revision":"84f48e6e7ec1904da11a91d43f9686c6","url":"static/js/26.abe2348b.chunk.js"},{"revision":"0f9eff55a6b06b8db00d1f21358afead","url":"static/js/27.b7032c93.chunk.js"},{"revision":"584b09069142fea516ab14c8e3bce04e","url":"static/js/28.7d60c16d.chunk.js"},{"revision":"c5297327dfff0817e18c79f420cf055c","url":"static/js/29.fd782687.chunk.js"},{"revision":"462bdbbb9d080d52b300f25e328c2a22","url":"static/js/3.9901573b.chunk.js"},{"revision":"64267dac7dbcc629df75ac30025efe9d","url":"static/js/30.cc2ab58c.chunk.js"},{"revision":"4260deb817b56b8d7579706e1b71f442","url":"static/js/31.fba06b6c.chunk.js"},{"revision":"0cb4bbf4701ded904c8ad88a73186f75","url":"static/js/32.2c3da765.chunk.js"},{"revision":"97345d7cead573896aed69b92e738da3","url":"static/js/33.4d3e7347.chunk.js"},{"revision":"2dc7b5c2b5cca0b17beb7c842b89e093","url":"static/js/34.bc1dd366.chunk.js"},{"revision":"89d9a30532a0acfbbb9a65cf26f27aba","url":"static/js/35.a770759b.chunk.js"},{"revision":"a88954b143d8cf4ade663389112ea8a0","url":"static/js/36.e8eb995e.chunk.js"},{"revision":"d2ad3b007a5a9dfd9e7699361e66a22d","url":"static/js/37.8d5956a8.chunk.js"},{"revision":"e838744af8d48bcc7b2024e170da9ce1","url":"static/js/38.4548db73.chunk.js"},{"revision":"ae3aa08f665587ce1d78a7e06ebb9ee7","url":"static/js/39.df7d0136.chunk.js"},{"revision":"f68c410d99fb1c29bf24c7aaeeb68536","url":"static/js/4.e014f500.chunk.js"},{"revision":"fd442181bf071c84a091a0b43dcb7c71","url":"static/js/40.ec87a3d0.chunk.js"},{"revision":"d0810dd8fddd4381f545601e8e30568b","url":"static/js/41.4ea6b4cf.chunk.js"},{"revision":"3d374ef9f6ddc405353e82f3137d77fc","url":"static/js/42.d7526e44.chunk.js"},{"revision":"79a805b4474c300d6c815231c8bfd487","url":"static/js/43.06cb8dfe.chunk.js"},{"revision":"7d2329fcb42c359384db075db929fdfd","url":"static/js/44.6593b3c8.chunk.js"},{"revision":"9c1f509bbe92e419c9f971015d21332d","url":"static/js/45.198d6211.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"92f649610632503d52a4e0816c2d3410","url":"static/js/5.f8a9d4c0.chunk.js"},{"revision":"ce77ab19de4137bb912e8fefa5bb75a2","url":"static/js/6.87d4dc0a.chunk.js"},{"revision":"685a5ab8c030d3b9b38ab827d8d37336","url":"static/js/7.25f0e432.chunk.js"},{"revision":"3c6977c5cf6a73675f75e379416a6aae","url":"static/js/8.76deb537.chunk.js"},{"revision":"80817f67c7b59d8591453fb3c20b2ed6","url":"static/js/main.827c8209.chunk.js"},{"revision":"afdd0a2533989d669407a9bc091ecf7d","url":"static/js/runtime-main.1660b361.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
