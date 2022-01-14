if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(reg => console.log('service worker registered'))
        .catch(err => console.log('service worker not registered', err));
}
ServiceWorkerRegistration.prototype.travelManager
    = new BackgroundGeolocation();

function BackgroundGeolocation() {
    navigator.geolocation.watchPosition(
        scrollMap, handleError
    );
    
    // alert(`aaaa`)
}
function scrollMap(position) {
    const { latitude, longitude } = position.coords;
    console.log(latitude, longitude)
    // Scroll map to latitude / longitude.
}

function handleError(error) {
    // Display error based on the error code.
    const { code } = error;
    if (!code) {
        alert(`aaa`)
    }
    switch (code) {
        case GeolocationPositionError.TIMEOUT:
            // Handle timeout.
            break;
        case GeolocationPositionError.PERMISSION_DENIED:
            window.location.href = '/allow.html';
            // User denied the request.
            break;
        case GeolocationPositionError.POSITION_UNAVAILABLE:
            // Position not available.
            break;
    }
}