if (!self.define) {
  let e,
    s = {}
  const a = (a, n) => (
    (a = new URL(a + '.js', n).href),
    s[a] ||
      new Promise((s) => {
        if ('document' in self) {
          const e = document.createElement('script')
          ;(e.src = a), (e.onload = s), document.head.appendChild(e)
        } else (e = a), importScripts(a), s()
      }).then(() => {
        const e = s[a]
        if (!e) throw new Error(`Module ${a} didn’t register its module`)
        return e
      })
  )
  self.define = (n, c) => {
    const t = e || ('document' in self ? document.currentScript.src : '') || location.href
    if (s[t]) return
    const i = {}
    const r = (e) => a(e, t),
      o = { module: { uri: t }, exports: i, require: r }
    s[t] = Promise.all(n.map((e) => o[e] || r(e))).then((e) => (c(...e), i))
  }
}
define(['./workbox-f1770938'], (e) => {
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: '/_next/static/VK7-4uReje8WlebvTgRao/_buildManifest.js',
          revision: 'd40f7ccd4d43f191f8a7acf78aa441c0',
        },
        {
          url: '/_next/static/VK7-4uReje8WlebvTgRao/_ssgManifest.js',
          revision: 'b6652df95db52feb4daf4eca35380933',
        },
        { url: '/_next/static/chunks/160-8ac9d437631ccf61.js', revision: '8ac9d437631ccf61' },
        { url: '/_next/static/chunks/4bd1b696-cf72ae8a39fa05aa.js', revision: 'cf72ae8a39fa05aa' },
        { url: '/_next/static/chunks/881-8fbe4978c99e3ad6.js', revision: '8fbe4978c99e3ad6' },
        {
          url: '/_next/static/chunks/app/_not-found/page-2a22acd908466dcc.js',
          revision: '2a22acd908466dcc',
        },
        {
          url: '/_next/static/chunks/app/layout-4bd4f56836b34eba.js',
          revision: '4bd4f56836b34eba',
        },
        { url: '/_next/static/chunks/app/page-08a259e747a95d83.js', revision: '08a259e747a95d83' },
        { url: '/_next/static/chunks/b536a0f1-4232d88a580f66ee.js', revision: '4232d88a580f66ee' },
        { url: '/_next/static/chunks/bd904a5c-99b7da1c327c9e01.js', revision: '99b7da1c327c9e01' },
        { url: '/_next/static/chunks/framework-7c95b8e5103c9e90.js', revision: '7c95b8e5103c9e90' },
        { url: '/_next/static/chunks/main-97f3c6736ba493d1.js', revision: '97f3c6736ba493d1' },
        { url: '/_next/static/chunks/main-app-1cedf56318e20887.js', revision: '1cedf56318e20887' },
        {
          url: '/_next/static/chunks/pages/_app-0a0020ddd67f79cf.js',
          revision: '0a0020ddd67f79cf',
        },
        {
          url: '/_next/static/chunks/pages/_error-03529f2c21436739.js',
          revision: '03529f2c21436739',
        },
        {
          url: '/_next/static/chunks/polyfills-42372ed130431b0a.js',
          revision: '846118c33b2c0e922d7b3a7676f81f6f',
        },
        { url: '/_next/static/chunks/webpack-ffbc15395550cd4e.js', revision: 'ffbc15395550cd4e' },
        { url: '/_next/static/css/be7476c02ce97480.css', revision: 'be7476c02ce97480' },
        {
          url: '/_next/static/media/569ce4b8f30dc480-s.p.woff2',
          revision: 'ef6cefb32024deac234e82f932a95cbd',
        },
        {
          url: '/_next/static/media/747892c23ea88013-s.woff2',
          revision: 'a0761690ccf4441ace5cec893b82d4ab',
        },
        {
          url: '/_next/static/media/8d697b304b401681-s.woff2',
          revision: 'cc728f6c0adb04da0dfcb0fc436a8ae5',
        },
        {
          url: '/_next/static/media/93f479601ee12b01-s.p.woff2',
          revision: 'da83d5f06d825c5ae65b7cca706cb312',
        },
        {
          url: '/_next/static/media/9610d9e46709d722-s.woff2',
          revision: '7b7c0ef93df188a852344fc272fc096b',
        },
        {
          url: '/_next/static/media/ba015fad6dcf6784-s.woff2',
          revision: '8ea4f719af3312a055caf09f34c89a77',
        },
        { url: '/file.svg', revision: 'd09f95206c3fa0bb9bd9fefabfd0ea71' },
        { url: '/globe.svg', revision: '2aaafa6a49b6563925fe440891e32717' },
        { url: '/next.svg', revision: '8e061864f388b47f33a1c3780831193e' },
        { url: '/vercel.svg', revision: 'c0af2f507b369b085b35ef4bbe3bcf1e' },
        { url: '/window.svg', revision: 'a2760511c65806022ad20adf74370ff3' },
      ],
      { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      '/',
      new e.NetworkFirst({
        cacheName: 'start-url',
        plugins: [
          {
            cacheWillUpdate: (e) => {
              var s = e.response
              return _async_to_generator(function () {
                return _ts_generator(this, (e) => [
                  2,
                  s && 'opaqueredirect' === s.type
                    ? new Response(s.body, { status: 200, statusText: 'OK', headers: s.headers })
                    : s,
                ])
              })()
            },
          },
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: 'google-fonts-stylesheets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-font-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-image-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 2592e3 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/static.+\.js$/i,
      new e.CacheFirst({
        cacheName: 'next-static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-image',
        plugins: [new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: 'static-audio-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:mp4|webm)$/i,
      new e.CacheFirst({
        cacheName: 'static-video-assets',
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-js-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 48, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'static-style-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: 'next-data',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: 'static-data-assets',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      (e) => {
        var s = e.sameOrigin,
          a = e.url.pathname
        return !(!s || a.startsWith('/api/auth/callback') || !a.startsWith('/api/'))
      },
      new e.NetworkFirst({
        cacheName: 'apis',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      (e) => {
        var s = e.request,
          a = e.url.pathname,
          n = e.sameOrigin
        return (
          '1' === s.headers.get('RSC') &&
          '1' === s.headers.get('Next-Router-Prefetch') &&
          n &&
          !a.startsWith('/api/')
        )
      },
      new e.NetworkFirst({
        cacheName: 'pages-rsc-prefetch',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      (e) => {
        var s = e.request,
          a = e.url.pathname,
          n = e.sameOrigin
        return '1' === s.headers.get('RSC') && n && !a.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'pages-rsc',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      (e) => {
        var s = e.url.pathname
        return e.sameOrigin && !s.startsWith('/api/')
      },
      new e.NetworkFirst({
        cacheName: 'pages',
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 })],
      }),
      'GET'
    ),
    e.registerRoute(
      (e) => !e.sameOrigin,
      new e.NetworkFirst({
        cacheName: 'cross-origin',
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 })],
      }),
      'GET'
    )
})
