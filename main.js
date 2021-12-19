
function generate_random_age() {
  var input = document.getElementById("age");
  input.value = Math.floor(Math.random() * 115);
}

var interval_age

function start_age() {
  if(!interval_age) {
    interval_age = setInterval(generate_random_age, 100);
  }
}
function stop_age() {
  clearInterval(interval_age);
  interval_age = null
}

function generate_random_numero() {
  var input = document.getElementById("numero");
  var first_digit_pair = "0" + Math.floor(Math.random() * 7);
  input.value = first_digit_pair;
  for (let i = 0; i < 4; i++){
    next_two_digit = Math.floor(Math.random() * 99);
    if (next_two_digit < 10) {
      input.value = input.value+"-0"+next_two_digit;
    }
    else {
      input.value = input.value+"-"+next_two_digit;
    }
  }
}

var interval_numero

function start_numero() {
  if(!interval_numero) {
    interval_numero = setInterval(generate_random_numero, 100);
  }
}
function stop_numero() {
  clearInterval(interval_numero);
  interval_numero = null
}

//Fonction qui swap la lettre entrée dans un input si celle-ci change entre la disposition azerty et qwerty
function qwazerty_swap(ele) {
  var input = document.getElementById(ele.id);

  switch (input.value.slice(-1)){
    case 'a':
      letter_swap = "q";
      break;
    case 'q':
      letter_swap = "a";
      break;
    case 'w':
      letter_swap = "z";
      break;
    case 'z':
      letter_swap = "w";
      break;
    case 'm':
      letter_swap = ",";
      break;
    case ',':
      letter_swap = "m";
      break;
    default:
      letter_swap = input.value.slice(-1);
  }
  input.value = input.value.slice(0, -1) + letter_swap;
}

//change la valeur d'un radio bouton quand on click sur le bouton et du label associer
function checkbox_swap(ele) {
  const sexes = ["Non binaire", "Femme", "Homme"];
  var checkbox = document.getElementById(ele.id);
  var text = document.getElementById(ele.id + " texte");
  checkbox.value = sexes[Math.floor(Math.random() * 3)];
  text.innerHTML = checkbox.value;
}

//change la valeur d'un radio bouton quand on click sur le label associer et le label en lui même
function label_swap(ele) {
  const sexes = ["Non binaire", "Femme", "Homme"];
  var text = document.getElementById(ele.id);
  var checkbox = document.getElementById(ele.id.slice(0, -6));
  checkbox.value = sexes[Math.floor(Math.random() * 3)];
  text.innerHTML = checkbox.value;
}
