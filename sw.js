const CACHE_NAME = 'jaad-school-v1';
const assets = [
  '/',
  '/index.html',
  '/12.html',
  '/40.html',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@400;700;900&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'
];

// تثبيت التطبيق وتخزين الملفات المهمة
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق وجلب البيانات بسرعة
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});