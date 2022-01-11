// install event
self.addEventListener('install', evt => {
    console.log('service worker installed');
});

// activate event
self.addEventListener('activate', evt => {
    console.log('service worker activated');
});

// fetch event
self.addEventListener('fetch', evt => {
    console.log('fetch event', evt);
});

// Register for Background Geolocation tracking. Take default for accuracy, max age.    
// navigator.serviceWorker.ready.then((reg) => {
//     console.log(reg)
// })