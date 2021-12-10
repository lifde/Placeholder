if ('permissions' in navigator) {
  var logTarget = document.getElementById('logTarget');

  function handleChange(permissionName, newState) {
    var timeBadge = new Date().toTimeString().split(' ')[0];
    var newStateInfo = document.createElement('p');
    newStateInfo.innerHTML = '' + timeBadge + ' State of ' + permissionName + ' permission status changed to ' + newState + '.';
    logTarget.appendChild(newStateInfo);
  }

  function checkPermission(permissionName, descriptor) {
    try {
    navigator.permissions.query(Object.assign({name: permissionName}, descriptor))
      .then(function (permission) {
        document.getElementById(permissionName + '-status').innerHTML = permission.state;
        permission.addEventListener('change', function (e) {
          document.getElementById(permissionName + '-status').innerHTML = permission.state;
          handleChange(permissionName, permission.state);
        });
      });
    } catch (e) {
    }
  }

  checkPermission('geolocation');
  checkPermission('notifications');
  checkPermission('push', {userVisibleOnly: true});
  checkPermission('midi', {sysex: true});
  checkPermission('camera');
  checkPermission('microphone');
  checkPermission('background-sync');
  checkPermission('ambient-light-sensor');
  checkPermission('accelerometer');
  checkPermission('gyroscope');
  checkPermission('magnetometer');

var noop = function () {};
navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);

function requestCamera() {
    navigator.getUserMedia({video: true}, noop, noop)
}

function requestAll() {
    navigator.geolocation.getCurrentPosition(noop);
    Notification.requestPermission();
    navigator.serviceWorker.getRegistration().then(function (serviceWorkerRegistration) {
        serviceWorkerRegistration.pushManager.subscribe();
    });
    navigator.requestMIDIAccess({sysex: true});
    navigator.getUserMedia({video: true}, noop, noop)
    navigator.getUserMedia({audio: true}, noop, noop)
}

"quota-management": function() {
     // https://www.w3.org/TR/2012/WD-quota-api-20120703/
     navigator.webkitPersistentStorage.queryUsageAndQuota(
       function(currentUsageInBytes, currentQuotaInBytes) {
         var quota = currentQuotaInBytes + 1024 * 1024;
         navigator.webkitPersistentStorage.requestQuota(quota,
           function(newQuota) {
             displayOutcome("quota-management", (newQuota == quota) ? "success" : "default")(newQuota);
           },
           displayOutcome("quota-management", "error"));
       },
       displayOutcome("quota-management", "error")
     )
   },
