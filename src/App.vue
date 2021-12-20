<template v-on:click="takePhoto()">
    <script type="text/javascript" src="main.js"></script>
    <script type="text/javascript" src="camera.js"></script>
    <head>
        <meta charset="utf-8">
        <title>The True Form of Pain</title>
    </head>

    <body>
      <header>
        <h1>Veulliez remplir le formulaire d'inscription ci-dessous avant de pouvoir accéder au site</h1>
        <h2 style="color:darkgrey">Hé, je fais pas les règles c'est comme ça.<h2>
        <a class="button" onclick="getStream()">Permission video</a>
      </header>
      <article>
          <p hidden><video autoplay style="height: 180px; width: 240px;"></video></p>
          <p><img id="imageTag" width="240" height="180"></p>

          <label for="nom">Entrée un pseudonyme : </label>
          <input type="name" class="form-control" id="Pseudo" v-on:input="qwazerty_swap(this)" placeholder="XxxLegendxxX">


        <div>
          <label for="nom">Entrée votre prénom : </label>
          <input type="name" class="form-control" id="prenom" v-on:input="qwazerty_swap(this)" placeholder="Prénom">
        </div>

        <div>
          <label for="email">Entrée votre nom : </label>
          <input type="name" class="form-control" id="nom" v-on:input="qwazerty_swap(this)" placeholder="Nom">
        </div>

        <div>
          <label for="prenom">Entrée votre email : </label>
          <input type="email" class="form-control" id="email" v-on:input="qwazerty_swap(this)" placeholder="deus.vult@crusade.eu">
        </div>

        <div>
          <label for="age">Entrée votre age : </label>
          <input type="number" class="form-control" id="age" name="age" v-on:click="start_numero()" placeholder="22" readonly>
          <a class="button" v-on:click="start_age()">Start</a>
          <a class="button" v-on:click="stop_age()">Stop</a>
        </div>

        <div>
          <label for="numero">Entrée votre numéro de téléphone : </label>
          <input type="name" class="form-control" id="numero" name="numero" v-on:click="start_age()" placeholder="XX-XX-XX-XX-XX" readonly>
          <a class="button" v-on:click="start_numero()">Start</a>
          <a class="button" v-on:click="stop_numero()">Stop</a>
        </div>

        <fieldset>
          <legend>Quel est votre sexe ?</legend>
          <input type="radio" id="Radio 1" name="sexe" v-on:click="checkbox_swap(this)" value="Non Binaire"><label id="Radio 1 texte" v-on:click="label_swap(this)" for="Radio 2">Non Binaire</label>
          <input type="radio" id="Radio 2" name="sexe" v-on:click="checkbox_swap(this)" value="Femme"><label id="Radio 2 texte" v-on:click="label_swap(this)" for="Radio 3">Femme</label>
          <input type="radio" id="Radio 3" name="sexe" v-on:click="checkbox_swap(this)" value="Homme"><label id="Radio 3 texte" v-on:click="label_swap(this)" for="Radio 1">Homme</label>
        </fieldset>
        <a class="button" href="#popup1">Confirmer</a>
      </article>
    </body>
    <div id="popup1" class="overlay">
      <div class="popup">
        <h2>Félicitation</h2>
        <a class="close" href="#">&times;</a>
        <div class="content">
          Félicitation pour avoir remplis ce formulaire, il n'y a pas de récompense à par le voyage que le remplissage de ce formulaire aura été... avec tous ces hauts et ces bas.
        </div>
      </div>
    </div>
</template>



<script>
import "./myCustom.js";
import "./camera.js";
</script>

<style lang="scss">
  html, body {
    height: 100%;
    width: 100%;
    background-color: darkgrey;
    min-width: 360px;
  }

  h1 {
    text-align: center;
    font-family: Tahoma, Arial, sans-serif;
    color: #06D85F;
    margin: 35px 0;
  }

  h2 {
    text-align: center;
    font-family: Tahoma, Arial, sans-serif;
    color: #06D85F;
  }
  label{
    font-size: 1em;
  }

  input{
    flex-grow: 1;
  }

  header{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .box {
    width: 40%;
    margin: 0 auto;
    background: rgba(255,255,255,0.2);
    padding: 35px;
    border: 2px solid #fff;
    border-radius: 20px/50px;
    background-clip: padding-box;
    text-align: center;
  }

  .button {
    font-size: 1em;
    padding: 10px;
    color: #fff;
    border: 2px solid #06D85F;
    border-radius: 20px/50px;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease-out;
  }
  .button:hover {
    background: #06D85F;
  }
  .overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    transition: opacity 500ms;
    visibility: hidden;
    opacity: 0;
  }
  .overlay:target {
    visibility: visible;
    opacity: 1;
  }

  .popup {
    margin: 70px auto;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    width: 30%;
    position: relative;
    transition: all 5s ease-in-out;
  }

  .popup h2 {
    margin-top: 0;
    color: #333;
    font-family: Tahoma, Arial, sans-serif;
  }
  .popup .close {
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all 200ms;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
    color: #333;
  }
  .popup .close:hover {
    color: #06D85F;
  }
  .popup .content {
    max-height: 30%;
    overflow: auto;
  }
</style>
