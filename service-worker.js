if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"d232bf7e0e0918fda307e70bd69c5057","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"b6be275452186e3ad7897e689d9a138f","url":"static/css/26.f5f9d973.chunk.css"},{"revision":"b9a0172d2b3ffda96cf7157327aab4d6","url":"static/css/27.4e97b452.chunk.css"},{"revision":"c0e7b7056e7491d5fc249568cb6166fb","url":"static/js/0.4c4cccd3.chunk.js"},{"revision":"148ffcb2c9699511bc404b6b18499fff","url":"static/js/1.864e8da4.chunk.js"},{"revision":"e32e2df6cffddc59ba431590c30e0756","url":"static/js/10.3445c257.chunk.js"},{"revision":"8194ec392f5fa6fc4e80c4d5b4d1872d","url":"static/js/11.24c34193.chunk.js"},{"revision":"88aa3cec5550f25857ec88de50521467","url":"static/js/12.bbabf636.chunk.js"},{"revision":"9a853294b4cc0e69295f2a599aad027d","url":"static/js/13.739f959d.chunk.js"},{"revision":"b4a35ef0f8dc8c2feb5d0908741cdb3b","url":"static/js/16.158f1a7d.chunk.js"},{"revision":"21a362a97a1716e37d30858ec6c06aae","url":"static/js/17.cae220d5.chunk.js"},{"revision":"7bfccd9bf470b2dac7c32e2256b4e5f6","url":"static/js/18.ac7179a7.chunk.js"},{"revision":"8333c06e5ddd76b17ed04bf9c4835ade","url":"static/js/19.f3b4ac03.chunk.js"},{"revision":"2b815b16ac3473ce3b5dca4584213cfc","url":"static/js/2.b308477f.chunk.js"},{"revision":"25a446003171a049f8ff09841eb54f41","url":"static/js/20.af771600.chunk.js"},{"revision":"094fe04bbfb75b8032d1fe91c5189190","url":"static/js/21.275b037e.chunk.js"},{"revision":"f36bc24dc9c418414105f13e798cbb23","url":"static/js/22.b5738e0d.chunk.js"},{"revision":"399ceb95c6800d998b41041cfbe58b59","url":"static/js/23.e718beb3.chunk.js"},{"revision":"90f58bab7dd25d9e4c60df1d497eacfd","url":"static/js/24.e6b1d1ae.chunk.js"},{"revision":"5b7b1e9ac7c2dfc507571ba773300683","url":"static/js/25.510902d5.chunk.js"},{"revision":"8aaf6556cc3a277180e10fe8bc105608","url":"static/js/26.79e52431.chunk.js"},{"revision":"fdfd57138b2e02a7719aca6f4a91668a","url":"static/js/27.7e200456.chunk.js"},{"revision":"1c7a8d8923a9366876f9cae5fb3f5cf6","url":"static/js/28.97f0ffa2.chunk.js"},{"revision":"7a1ee0b8b91f19712b5cb63e7bd14ae3","url":"static/js/29.c13c9b6f.chunk.js"},{"revision":"4d287122adce40f29c5d810d7a9c37b7","url":"static/js/3.695139be.chunk.js"},{"revision":"a0bfefff6813942cb5080976a2a15920","url":"static/js/30.e65059c9.chunk.js"},{"revision":"99cc74724ba12f01dbbac3c8c2628739","url":"static/js/31.788d5637.chunk.js"},{"revision":"1f8b4a9907547ee96a27d6e319871c2b","url":"static/js/32.9d80fdf4.chunk.js"},{"revision":"f1639393791289aa8e6b5a12b6781608","url":"static/js/33.861b8c49.chunk.js"},{"revision":"05702e4f618fed7c28cce193dfe595e0","url":"static/js/34.eec627bc.chunk.js"},{"revision":"bc374f2c299b9df5a7e87e03ff6544df","url":"static/js/35.bd6726d5.chunk.js"},{"revision":"4b556b210bc4338f6a99fe695c1f4867","url":"static/js/36.841546dc.chunk.js"},{"revision":"b763a3654ccd3f783353e05d4a29306b","url":"static/js/37.606d615a.chunk.js"},{"revision":"51592c9b5d1d6cfcb46486965c235a1c","url":"static/js/38.2c340201.chunk.js"},{"revision":"0c9b47d966dbbb3bd9bd8cb6ef3286ee","url":"static/js/39.b17806e9.chunk.js"},{"revision":"98e22ed619beaa9641af08c21b9ef4df","url":"static/js/4.884f3bb3.chunk.js"},{"revision":"c404fa2072df1f3ec9f94a9bb63840ae","url":"static/js/40.6483f6ad.chunk.js"},{"revision":"8d9f22bc1df887e6057f8358346965f6","url":"static/js/41.69430621.chunk.js"},{"revision":"86e48a7fd28c6c359eb19ed82644f3ae","url":"static/js/42.5244fa5d.chunk.js"},{"revision":"39173c1b4dbfff7484e01ba8c9c29891","url":"static/js/43.60eec213.chunk.js"},{"revision":"f07f6710f0cfdc97942b4b1850b9fa7c","url":"static/js/44.900506fe.chunk.js"},{"revision":"66a484be073b47449677d4e6e0ba77ca","url":"static/js/45.b422ac88.chunk.js"},{"revision":"4e4f6cb8295528cbb2ce7c149a4335c5","url":"static/js/46.2fccfb54.chunk.js"},{"revision":"09b5ca50da91e55e4da3a850b5c107ca","url":"static/js/47.fc1628e7.chunk.js"},{"revision":"2a2201790675f96f360a3bb869a75b5e","url":"static/js/48.14bb64d1.chunk.js"},{"revision":"12d1dc6316abfc9ddbd73a2edcc0cb4e","url":"static/js/49.085d2fe0.chunk.js"},{"revision":"263840a1341efe64dc987e049f33a0eb","url":"static/js/5.055cf0f1.chunk.js"},{"revision":"adec55659f80583d986b64718764915c","url":"static/js/50.20ffc6bc.chunk.js"},{"revision":"edcd80f7195d5c56cdf8a35125edb569","url":"static/js/51.515cccaa.chunk.js"},{"revision":"b21d5b8b98fa70715eb8e847e01e52f6","url":"static/js/6.ec9c7338.chunk.js"},{"revision":"2a8ac73e9d9d0425a457e5e5bbc0853b","url":"static/js/7.aa7737c5.chunk.js"},{"revision":"d12133cd34fa8a043bce38baba1d5c97","url":"static/js/8.c3797325.chunk.js"},{"revision":"984c2a045391c32a07a46a6cf128e4cb","url":"static/js/9.2ff67a85.chunk.js"},{"revision":"03b512990764ee317c80fe92980b0086","url":"static/js/main.d3c848a2.chunk.js"},{"revision":"f77812a562a62818b4edc3c32fefebc9","url":"static/js/runtime-main.719ce99a.js"}]);

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
