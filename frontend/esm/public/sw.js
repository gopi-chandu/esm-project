var CACHE_STATIC_NAME = "static-v1";
var CACHE_DYNAMIC_NAME = "dynamic-v1";
const offlineCache = "./offline.html";

self.addEventListener("install", function (event) {
  // console.log("[Service Worker] Installing Service Worker ...", event);

  event.waitUntil(
    caches.open(CACHE_STATIC_NAME).then(function (cache) {
      console.log("[Serive worker] precaching app shell");
      cache.addAll(["/", "/offline", "/profile"]);
      cache.add(offlineCache);
    })
  );
});

self.addEventListener("activate", function (event) {
  // console.log("[Service Worker] Activating Service Worker ....", event);
  event.waitUntil(
    caches.keys().then(function (keyList) {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
            console.log("[Service Worker] removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

function trimCache(cacheName, maxItems) {
  caches.open(cacheName).then(function (cache) {
    return cache.keys().then(function (keys) {
      if (keys.length > maxItems) {
        cache.delete(keys[0]).then(trimCache(cacheName, maxItems));
      }
    });
  });
}

// self.addEventListener("fetch", (event) => {
//   if (!navigator.onLine) {
//     event.respondWith(
//       caches.match(event.request).then((res) => {
//         if (res) {
//           return res;
//         }
//         let requestUrl = event.request.clone();
//         fetch(requestUrl);
//       })
//     );
//   }
// });

self.addEventListener("fetch", function (event) {
  // Normal data
  event.respondWith(
    fetch(event.request)
      .then(function (res) {
        return caches.open(CACHE_DYNAMIC_NAME).then(function (cache) {
          trimCache(CACHE_DYNAMIC_NAME, 30);
          cache.put(event.request.url, res.clone());

          return res;
        });
      })
      .catch(function (err) {
        // console.log("eve req111 : ", event.request);
        // console.log("ERROR no Internet", err);
        // console.log(event.request.url);
        return caches.match(event.request).then(function (response) {
          if (response) {
            // console.log("Response found");
            return response;
          } else {
            // not found in cache
            console.log(
              "~~~~~~~~~~~~~Go to this route~~~~~~~~~~~~~~~~~~~~~~~~~"
            );
            // console.log("eve req : ", event.request);
            // return caches.match("/");
            // return caches.open(CACHE_STATIC_NAME).then((cache) => {
            //   cache.matchAll("/").then((responses) => {
            //     for (const response of responses) {
            //       return response;
            //     }
            //   });
            // });

            caches.match(offlineCache);
          }
        });

        // return caches
        //   .open(CACHE_DYNAMIC_NAME)
        //   .then((cache) => cache.match(event.request.url));
      })
  );
});

// // Network-only
// self.addEventListener("fetch", function (event) {
//   event.respondWith(fetch(event.request));
// });
