if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"baedb6a46c68c756d4cefcdaa46ee04a","url":"404.html"},{"revision":"5d31c8c74c9a62955a88f85c424ba06c","url":"799cd5eda3d1d5a6c849.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"baedb6a46c68c756d4cefcdaa46ee04a","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"b5853ac1397727add0505d09fd97e94b","url":"static/css/22.18c158eb.chunk.css"},{"revision":"0ff5cf098070438329a1271ddf981ca0","url":"static/js/0.a0c39cc9.chunk.js"},{"revision":"5c6f9d815009dd42dca7fe98c2c5c4e5","url":"static/js/1.08bcc8b1.chunk.js"},{"revision":"c8fe7eb762bd41f68e45c1e7152be120","url":"static/js/11.f2143050.chunk.js"},{"revision":"7d762f9261e6032a4703b5d875276863","url":"static/js/12.427eaf07.chunk.js"},{"revision":"ad00d1185be037521bdd03c9f9577d7b","url":"static/js/13.0cdfbd42.chunk.js"},{"revision":"e85260a56f09ded8c68e4f79084a566a","url":"static/js/14.aac42dd2.chunk.js"},{"revision":"c90125718707abab7cd50f8abce3745d","url":"static/js/15.916eb732.chunk.js"},{"revision":"7e165e7c7269a18c68cbee6427ae4e99","url":"static/js/16.900346b7.chunk.js"},{"revision":"bf3cd13d67c165d5546183b3d1881d4c","url":"static/js/17.01bc8e04.chunk.js"},{"revision":"dce16fb539d66629077d9e5d4cc53c6f","url":"static/js/18.420d3ab0.chunk.js"},{"revision":"d7292aaeef3a16fe9e86d41f177d2c6e","url":"static/js/19.d0364674.chunk.js"},{"revision":"47dedd3f7f96eb1d6c4fa2a9f6f8dfdd","url":"static/js/2.7fbf9a0d.chunk.js"},{"revision":"cf8f5affc008546496a22f6c5c7c592a","url":"static/js/20.8caa13aa.chunk.js"},{"revision":"fc7127db1648cf5f0e968249296859bf","url":"static/js/21.6af09e34.chunk.js"},{"revision":"4c1507e58835d634f0de87b07793e683","url":"static/js/22.1a27142e.chunk.js"},{"revision":"f7950c5cb009e9100c34f2e62fa585a7","url":"static/js/23.39ae8cfa.chunk.js"},{"revision":"ce06842273bfe275e4737ac1daf7dc16","url":"static/js/24.8a6fff04.chunk.js"},{"revision":"21d373116ebe86417f41ebf3cba23f25","url":"static/js/25.cc7851ee.chunk.js"},{"revision":"2021e94cf387f02cdbf3a36e90d7031d","url":"static/js/26.2416cfdf.chunk.js"},{"revision":"27f91a93c6a8afa1e9f4a48ba6f59051","url":"static/js/27.9509dbf6.chunk.js"},{"revision":"62511de481b6dd5a07913143e758fc26","url":"static/js/28.97023b2f.chunk.js"},{"revision":"b0a0037fdce0e7a78449151263fc5ba9","url":"static/js/29.40f59c61.chunk.js"},{"revision":"57e440b4479a1dfb0adb2e86d37b3adf","url":"static/js/3.d5fc8932.chunk.js"},{"revision":"d291d919f773a360007218a3cb12c815","url":"static/js/30.7ab7dcff.chunk.js"},{"revision":"fb256d30c8f0017fcb7d6e7c0858875b","url":"static/js/31.6100d4d5.chunk.js"},{"revision":"74e9680b365c7186b3643f1f9cce9db0","url":"static/js/32.177efa5e.chunk.js"},{"revision":"97470936ee2c13625645b010b4ee7355","url":"static/js/33.169a5f31.chunk.js"},{"revision":"2dc7b5c2b5cca0b17beb7c842b89e093","url":"static/js/34.bc1dd366.chunk.js"},{"revision":"0961800f06359e48aaa1240ceee9eb31","url":"static/js/35.4e3e7858.chunk.js"},{"revision":"b0808772e0b673bdb94d6923858e29b1","url":"static/js/36.0d8bde85.chunk.js"},{"revision":"3330d56decd2a4b084ec738b33c1cdd3","url":"static/js/37.f11dd1dc.chunk.js"},{"revision":"f2495eaf7752457dac55d9330a3a51a8","url":"static/js/38.d5ed0328.chunk.js"},{"revision":"1b4ec1e90fb5ab762d2f7703caaeefed","url":"static/js/39.d1182d34.chunk.js"},{"revision":"a8204f1e8a5f312d8aab0d9232c98a9d","url":"static/js/4.e7153077.chunk.js"},{"revision":"5403f54631d0289986f601b5d8ac464c","url":"static/js/40.2263a161.chunk.js"},{"revision":"d0810dd8fddd4381f545601e8e30568b","url":"static/js/41.4ea6b4cf.chunk.js"},{"revision":"7a258ceb431b2067bfad24c2fd601ae6","url":"static/js/42.94341d33.chunk.js"},{"revision":"4c1d6c066ea23f4e3ffd4d0183465bfe","url":"static/js/43.46fbb569.chunk.js"},{"revision":"2c5e2d9565c5979a414d4463530837e4","url":"static/js/44.992e0740.chunk.js"},{"revision":"13cefcd0461769506093a21639276e12","url":"static/js/45.bd4ac566.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"b168a00ee6910b66efc30439a6efd2dc","url":"static/js/5.431d6550.chunk.js"},{"revision":"10c3793def004f43dfcdb77663ed573b","url":"static/js/6.f1babed3.chunk.js"},{"revision":"685a5ab8c030d3b9b38ab827d8d37336","url":"static/js/7.25f0e432.chunk.js"},{"revision":"eb995ebaef6135ce2f65e3a5b9bb190e","url":"static/js/8.ebec8a28.chunk.js"},{"revision":"a6dbbe28907776a0870865f4dbb78f1c","url":"static/js/main.30fe474e.chunk.js"},{"revision":"556c870f38d999b7912491b922745c9f","url":"static/js/runtime-main.d41bf384.js"}]);

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
