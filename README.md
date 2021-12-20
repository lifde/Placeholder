# The True Form of PAIN (pun intented)

 L'idée c'est d'avoir un formulaire d'inscription qui a première paraît ergonomique, simple d'accès et intuitif, mais qui deviens de plus en plus horrible et dure a remplir

## La Composition du formulaire

### Input age & numéro :
Qui n'aime pas la génération aléatoire de nombre... surtout quand celle-ci demande d'avoir de bon réflexes.
J'ai utiliser la fonction ci-dessous pour crée cette horreur.
```sh
setInterval(generate_random_age, 100)
```

### Input pseudo, prénom & nom :
Le qwazerty, que vous soyez en azerty ou en qwerty ces deux champs vont vous tapez sur les nerfs.
Je récupère la dernière lettre qui est rentrée l'hors d'un oninput evènement et je la change.
La fonction slice pour avoir des morceau de string
```sh
input.value.slice(-1)
input.value = input.value.slice(0, -1) + letter_swap
```

### Radio bouton :
J'ai mis de l'aléatoire dans mon aléatoire.
Je récupère la dernière lettre qui est rentrée l'hors d'un oninput evènement et je la change.
J'ai accroché les labels aux inputs mais pas ceux qui sont censé allez ensembles

## Les Technologies

### Advance Camera Controls :
L'application qui prend des photos quand l'utilisateur appuie n'importe où sur la page.

## Les Mentions Honorables

### User Idle Detection (aka tant de potentiel gaché) :
La fonctionnalité qui permet de détécter quand l'utilisateur est inactif avait un gros potentiel pour ce formulaire.... Cependant le 'threshold' minimum est de 60 second, ce qui réduit largement les possibilitées pour des applications intéréssants/pertinantes dans mon cas . Sans parler du fais que 60 second rend les tests horribles et la fonctionnalité ne fonctionne que sur chrome en "Experimental Web Platform Feature"

### Local Notifications :
Lancer une notification toutes les X secondes... bon le résultat était un peu prévisible (ne m'a pas empêcher de perdre 2 bonnes heures sur ça) même les eventListener n'ont pas l'air de fonctionner.

### Clipboard (Copy & Paste) :
Forcer l'utilisateur a devoir 'paste' afin de remplir certains champs. Cette fonctionnalité aurait put être mise en place mais l'api ne sert pas à grand chose la plupart du code aurait été fais en js (grossièrement refaire la propriété read-only)

### Le responsive
Well... comme on peut le voir c'est pas vraiment responsive, je n'ai pas vraiment eu le temps sur ce point là.

### Vue.js
J'ai pas non plus eu le temps de transférer mon projet en vue.js comme j'ai ap peine trouver un moyen de crée un projet vue sans avoir de message d'erreur.

## The End
J'aurais aimer pousser le vice plus loin, mais j'ai perdu trop de temps avec vue.js et toutes les sécurités au niveau des fonctionnalitées web (d'où l'état dans lequel le travail est rendu).
