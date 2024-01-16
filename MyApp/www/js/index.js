
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
App.controller('home', function (page) {
    // put stuff here
  });

  App.controller('page2', function (page) {
    // put stuff here
  });
  App.controller('page3', function (page) {
    // put stuff here
  });
  App.controller('page4', function (page) {
    // put stuff here
  });

  try {
    App.restore();
  } catch (err) {
    App.load('home');
  }
//camera plugin
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("Device is ready");
}

function takePicture() {
    navigator.camera.getPicture(onSuccess, onFail, {
        quality: 50,
        destinationType: Camera.DestinationType.FILE_URI
    });
}

function onSuccess(imageURI) {
    var image = document.getElementById("imagePreview");
    image.src = imageURI;
}

function onFail(message) {
    alert("Failed because: " + message);
}


// location plugin
document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    console.log("Device is ready");
}

function getCurrentLocation() {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
}

function onSuccess(position) {
    var locationElement = document.getElementById("location");
    locationElement.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function onError(error) {
    alert("Error getting location: " + error.message);
}

