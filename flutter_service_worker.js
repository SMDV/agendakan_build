'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "cd1baf1ab9ed45c38deed13914dc57eb",
"assets/assets/images/agendakan_logo_horizontal.png": "b2eaaec7e33e9d262f95557a692652ea",
"assets/assets/images/agendakan_logo_with_text.png": "1a98f28c2706d9bbf05f5a05c9e2606c",
"assets/assets/images/ARDHITOPRAMONO.png": "9356ae15157c35b6ce735c397be3078c",
"assets/assets/images/arw.png": "552c1945a88280a68b78c11f53f94f5e",
"assets/assets/images/BG1.png": "688da51396e397e63df14838b416fc3d",
"assets/assets/images/BG2.png": "f5401b83eb4b7eebb2d84e7a944f9d90",
"assets/assets/images/BG4.png": "ccc0ae49797766f7a2855b93fe5a5375",
"assets/assets/images/BG5.png": "67a7529a1eeb42a78df1c617a1508bcc",
"assets/assets/images/bg_home_default.jpg": "a083524ac771f1fead5cc7d35b35f473",
"assets/assets/images/bg_oase.jpg": "01d89f17c1f0a282775f0784ffbc717f",
"assets/assets/images/bg_oase2.jpg": "216aa3bb7dad457c7e3d475b1ea52111",
"assets/assets/images/booknow_hover.png": "a6ecb710e8b5aa3420bdc188e1b1af29",
"assets/assets/images/Booknow_normal.png": "36bddf324016e8ea423e390a36289ae5",
"assets/assets/images/book_mercusuara_bg.jpg": "2eb1f991ac5440c052added1466fd2bb",
"assets/assets/images/Button%2520Menu%2520-%2520Lokasi%25202.png": "39a19ea3b5a223384d68d053dfb66a87",
"assets/assets/images/Button%2520Menu%2520-%2520Lokasi.png": "677510c8ee104197d2e3006437d38df2",
"assets/assets/images/coldiac1.jpg": "98a5d724dee2ca1562b687327af60362",
"assets/assets/images/coldiac2.jpg": "6d684c8886ddd0d8816b6d5cfc1de43f",
"assets/assets/images/coldiac_logo.png": "1c8628f96002bd4bf6550466ca9419cc",
"assets/assets/images/comingsoon.png": "daa819eb2f5d03cae47723244e85fc04",
"assets/assets/images/desc_mercusuara.jpg": "b0d9e60cf22a1998186036330263d2c0",
"assets/assets/images/Deskrip1.png": "a528817b7a895ebb3efd0e73ceab36c0",
"assets/assets/images/Deskrip2_Lokasi.png": "f00d9c5ecc50268d38c6952f7ef1acc4",
"assets/assets/images/deskripm_1.png": "7eb28787655d3077e888bc6f7a4bfa36",
"assets/assets/images/deskripm_2.png": "f7121b762b488e639eff38d14d6331eb",
"assets/assets/images/fipfest_carausel_1.png": "50ff36e66f9e4bbf002a1db51171583c",
"assets/assets/images/fipfest_carausel_2.png": "29cbe3e811560729a6df2423fe213c5e",
"assets/assets/images/fipfest_carausel_3.png": "618ddb192f98d18cca13893fc2589859",
"assets/assets/images/fipfest_date_location_right.png": "8ef891bb1432ef90a22d823dd37ffef4",
"assets/assets/images/fipfest_desc_left.png": "eb684c9f940c6c2948c6480059ebb3cf",
"assets/assets/images/fipfest_gs_1.png": "b75a4c6143fe7247ac084ce0924f2b12",
"assets/assets/images/fipfest_gs_2.png": "560da4d61477e2dae0432534905df2ae",
"assets/assets/images/fipfest_gs_3.png": "6ee8d00f48500efa5df543ce7d2e686b",
"assets/assets/images/fipfest_gs_4.png": "90bf6fea49d405a62c1ecb5db6569767",
"assets/assets/images/fipfest_gs_comingsoon.png": "2a23eeacfafb82517ff7b8dd767a7947",
"assets/assets/images/fipfest_logo.png": "9ce57f03f25abfb641773285b922a15d",
"assets/assets/images/fipfest_p1.png": "463b5985a2f244aff8d0c1f874e339c2",
"assets/assets/images/fipfest_p2.png": "95fc7157c987c19f7b99f9903bcac9e2",
"assets/assets/images/fipfest_poster_main.png": "365f2d0a7ce6e23a8ff14b2448fec297",
"assets/assets/images/flwr.png": "6c58b6125f479af33260430123a7aa22",
"assets/assets/images/footer_bottom_reserved.png": "658ce9adb423f4b313630aaf533bc75d",
"assets/assets/images/gkm_booknow_logo.png": "5f0335eee8ef20c0b0103577c9a2f94a",
"assets/assets/images/gkm_carausel_1.png": "91fe43fe51077b9f93dc07008e3ae6dc",
"assets/assets/images/gkm_carausel_2.png": "204dc9782b025e5a56744ff6b4d3a079",
"assets/assets/images/gkm_carausel_3.png": "f42cc0a92a378d5b024a13ad429472d1",
"assets/assets/images/gkm_date_location_right.png": "d869a3a356b431565d3092f28876919e",
"assets/assets/images/gkm_desc_left.png": "0676f24c0cc6c1e21e0f6e74aec43053",
"assets/assets/images/gkm_gs_comingsoon.png": "2c53cf9921977a03329d0e58540c963f",
"assets/assets/images/gkm_gs_feast.png": "027a26629a2b16bc0c35606dfe871e2d",
"assets/assets/images/gkm_gs_hindia.png": "88833169ba8c91ed9ae34531170d332d",
"assets/assets/images/gkm_gs_logo.png": "3164820702aa471b029c135b58804e42",
"assets/assets/images/gkm_gs_yura.png": "d7061582a2fe9143009ed414b06899e6",
"assets/assets/images/gkm_logo_main_footer.png": "e337536abd3f05115b51faaff5b3dc1f",
"assets/assets/images/gkm_p1.png": "24de7ad920105d49f030eb9373a5345b",
"assets/assets/images/gkm_p2.png": "2c53cf9921977a03329d0e58540c963f",
"assets/assets/images/gkm_p3.png": "f060e2da80bcf446e7c8efb78de0eab5",
"assets/assets/images/gkm_p4.png": "7bc4d89f9f1719d75d6b93dc6186eb9e",
"assets/assets/images/gkm_p5.png": "41ff4148b9d45229050339419c547aa5",
"assets/assets/images/gkm_poster_main.png": "2b2a1c665f6b549c42b5f5077209d17f",
"assets/assets/images/gs_mercusuara_bg.jpg": "982e68fa2989f16a0c473fc056ff941d",
"assets/assets/images/gs_temp.png": "38178b4a3c83c4afe4999acd6715f2f7",
"assets/assets/images/HeaderGS.png": "2e606d940d53895f66ee66404ad470e9",
"assets/assets/images/HeaderOurMaps.png": "332d42b184fdea4934630247ad70dec0",
"assets/assets/images/HeaderSponsor.png": "bbac39f183b4b14e4dccebe46ddd3b39",
"assets/assets/images/header_gs_page.png": "cdb1d040b6d89838653575f9059328f7",
"assets/assets/images/header_title_signautre.png": "a499649faa358bbf46f1dc8e8733c0cc",
"assets/assets/images/icon%2520no%2520bg.jpg.png": "4a25f0f61ef08ea31c5d451f01c0c095",
"assets/assets/images/icon-01.png": "91d5837798cd06e53d8d8e1c3ddf61c3",
"assets/assets/images/iksan.png": "f8071486bdaf9d442b8cf9a3e8a79e68",
"assets/assets/images/isyana.jpg": "6c468843a367645790e8313dff4e56d6",
"assets/assets/images/left_vector.png": "4a2431929e125d6666cafeef265f59ef",
"assets/assets/images/line_header.png": "810b634aee1349ca87c91fd3865c6382",
"assets/assets/images/location_image10.jpg": "7cf9ff72c25eff569eb6d688afaacb9f",
"assets/assets/images/location_image2.jpg": "086d2ffa91f0d0c09fdfac23a8d13bb4",
"assets/assets/images/location_image4.jpg": "8f664d67ef397a19a9508fe3d65f0e60",
"assets/assets/images/location_image5.jpg": "d13d9f4bdc741fb67873429befcf6d6c",
"assets/assets/images/location_image6.jpg": "b959d3c468abe20aa44330fbfb40412f",
"assets/assets/images/location_image7.jpg": "92450a9c64fa88832d0935728eb657dc",
"assets/assets/images/location_image8.jpg": "c7a9469f7453c7caed4054547ae15d51",
"assets/assets/images/location_image9.jpg": "d29dd657aa136ec1f6d06995387c7f41",
"assets/assets/images/logo_mercusuara.png": "79d11c9024064b71bc37f3d492743b16",
"assets/assets/images/logo_nadin.png": "a03c106780840e7a6217e58997475f82",
"assets/assets/images/map_dump.jpg": "dbaa5bb696cee0dba9e0ebfb8ca22b94",
"assets/assets/images/map_dump2.jpg": "d6314b28a5d271be7a5fb6e6fae332eb",
"assets/assets/images/map_dump3.jpg": "fdd16cd6da4097a33b02ef1ad5415d31",
"assets/assets/images/mercu_poster_main.jpg": "87cf3d12a9a8f04fb47727d25aee5032",
"assets/assets/images/nadin1.jpg": "66c9d6f7c118499c6d07ee109a2be5b3",
"assets/assets/images/nadin2.jpg": "0637942afed880fc4c31a858a9d421c7",
"assets/assets/images/nadin3.jpg": "1e98b54a79247297873c82272cbc1dfe",
"assets/assets/images/pamungkas.jpg": "914c5a04865dfd2ae3ced260af2db557",
"assets/assets/images/pamungkas1.jpg": "3a2012de2cc6c966e812e5e23691c108",
"assets/assets/images/pamungkas2.jpg": "3b21d93f04d892fcb9328f812f224526",
"assets/assets/images/pamungkas_hover.png": "38b26cf259770f2945fef37e238e9543",
"assets/assets/images/pamungkas_logo.png": "2dc2dc2b04cb991c9ef9257df11b6e5d",
"assets/assets/images/pamungkas_resize1.png": "28c8847d928570a297e98ed0588ac8f7",
"assets/assets/images/pamungkas_resize2.png": "3edc07d629193781d7bad299ca8f78ce",
"assets/assets/images/poster1.jpg": "40456b0ea7694aeb54b2dd0b69e6e4f5",
"assets/assets/images/poster2.jpg": "3868404897942250d8dc76e4642dc189",
"assets/assets/images/poster3.jpg": "4b56e62ad2e6233c2a8ec1faddd5ece5",
"assets/assets/images/poster_1.png": "e22177bb7eca23b4f32c913e3499c68e",
"assets/assets/images/poster_2.png": "e09c9ff600331fd77de1c5578d147964",
"assets/assets/images/poster_3.png": "817bef85f2b42e9503a34efa1735f96c",
"assets/assets/images/poster_4.png": "d9515660fda5268085ef91c50d6c6705",
"assets/assets/images/poster_mercusuara_1.jpg": "78264212c03fd2fbf4db4d9967de0f41",
"assets/assets/images/poster_mercusuara_2.jpg": "3755e7d650c3f44bdcc3d0f29726df23",
"assets/assets/images/poster_mercusuara_3.jpg": "f0a53c2172bfb5de6e00e16ea936a17c",
"assets/assets/images/poster_mercusuara_4.jpg": "6419c039a60535d26c9f4d280fad82bf",
"assets/assets/images/poster_mercusuara_5.jpg": "5c0fa8c034763008b4b55918c7151f8a",
"assets/assets/images/right_vector.png": "2f13676b6b3cea7fbe2b6636d1e96fa4",
"assets/assets/images/sal_1.png": "01153f9bd4c87209f055f5b8cc5ebe93",
"assets/assets/images/sal_2.png": "1429ba94835d80ef2e4f1e6685f06134",
"assets/assets/images/sal_3.png": "f59a30389efcc378fcb1aac9bb5ee424",
"assets/assets/images/sal_logo.png": "ecc85895167985831a261adbceefda06",
"assets/assets/images/Side%2520Menu%2520-%2520Hover.png": "c026f08a3c93382325b45b115a4cf4e1",
"assets/assets/images/Side%2520Menu%2520-%2520Normal.png": "eea16ebbffded7e853535a92eece4c40",
"assets/assets/images/signature.png": "d5e1c7f7d4e0b91e4a21249814360431",
"assets/assets/images/signatur_dec_main_mobile.png": "a7a99e1d0cf5aa29981b51fbe8f72879",
"assets/assets/images/signatur_poster_main.jpg": "e8eef2275aeb14fd36e553f28decd299",
"assets/assets/images/slider_images.jpg": "514c6ea821cd74478e09c00de0664bc4",
"assets/assets/images/slider_images1.jpg": "725a90e9acb249448d83e1fd14f0f7f8",
"assets/assets/images/sold_out.png": "449c63f6cd71ff8ad34283790ba30dde",
"assets/assets/images/Tgl_Lokasi_Full.jpg": "5895292580ceeab2180f1a226d155ba5",
"assets/assets/images/weekfest_carausel_1.png": "080068b1a2189fe870d258af4ee8f945",
"assets/assets/images/weekfest_date_location_right.png": "7f6d85944eb4bbcf2496bd03298792ac",
"assets/assets/images/weekfest_desc_left.png": "6642cdd123384ed62d5785107ff54885",
"assets/assets/images/weekfest_gs_1.png": "d308ff58642e2e86f340f163a3470bfb",
"assets/assets/images/weekfest_gs_2.png": "84d98f3c2dc0decd3780772326eda53f",
"assets/assets/images/weekfest_gs_3.png": "bb134e79e27df13c637d63517534bbbc",
"assets/assets/images/weekfest_logo.png": "6f6ac59d08b2ab0c2831849839642adf",
"assets/assets/images/weekfest_p1.png": "71db76985e7ffa9ebb7079592cc67103",
"assets/assets/images/weekfest_p2.png": "30b817a1c1acc410175af89a382f2d08",
"assets/assets/images/weekfest_poster_main.png": "e50882bd742fe73e1e28cdbd381e03d2",
"assets/FontManifest.json": "ec0d8b18bf83edd4a10a45dbb701cbbc",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/fonts/savate-italique.otf": "2597c97e31899aa96b64b3c9cbd8f590",
"assets/fonts/savate-regular.otf": "caa6baa119923110d8d205bd8150d5ef",
"assets/fonts/Syne-regular.ttf": "28c1bfab8a44910acdcd8483d1a2aa4b",
"assets/NOTICES": "7c76e45a18d01455713c39e98ff1ce0f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/shaders/ink_sparkle.frag": "2ad5fabd6a36a6deff087b8edfd0c1f8",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "25e8fea439459398a4e824bb0b07c963",
"/": "25e8fea439459398a4e824bb0b07c963",
"main.dart.js": "e76f3ee67c3b4eef63bd04329610d53a",
"manifest.json": "e1b8247101ad2e32931126953cad8138",
"version.json": "fa9ac7aef800a7a2d5173f68754458f8"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
