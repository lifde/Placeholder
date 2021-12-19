var $status = document.getElementById('status');

if ('Notification' in window) {
  $status.innerText = Notification.permission;
}

function requestPermission() {
  if (!('Notification' in window)) {
    alert('Notification API not supported!');
    return;
  }

  Notification.requestPermission(function (result) {
    $status.innerText = result;
  });
}

const phrases_notification = ["Alors comment ce passe ce remplissage de formulaire ?",
                              "J'espère que vous avez pas trop de mal avec le formulaire",
                              "Vous y arriver ?",
                              "Aucun problèmes ?",
                              "besoin d'aide ?",
                              "Pas trop compliqué le formulaire j'espère"];

function nonPersistentNotification() {
  if (!('Notification' in window)) {
    alert('Notification API not supported!');
    return;
  }

  try {
    var notification = new Notification(phrases_notification[Math.floor(Math.random() * 6)]);
  } catch (err) {
    alert('Notification API error: ' + err);
  }
}

setInterval(nonPersistentNotification(), 1000);
