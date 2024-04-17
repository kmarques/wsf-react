# Tps

## TP 1
 Créer un composant ProgressBar qui prend en entrée :
 range: un object de type {20: "red", 60: "yellow", 100: "green", Infinity: "black"}
 maxCount: un number désignant le nombre maximal
 current: un number désignant le nombre actuel

 Utiliser ce composant dans le fichier App.jsx associé à un state qui change grâce à un "bouton"
 Pouvoir changer l'incrément avec un élément "select" contenant les options 1, 5, 10

 Exemple d'utilisation :
 ```jsx
 <ProgressBar current={10} maxCount={30} range={{20: "green", 60: "yellow", 100: "red"}}/>
 ```

 Ce composant doit afficher une jauge remplie à 33% de couleur jaune
 
 ## TP 2

Créer une système de pages qui permet tout en utilisant le layout actuelle d'avoir une liste de jeux en sidebar.
En cliquant sur un jeu la sidebar doit rester et une page correspondant au jeu doit apparaitre à sa droite
```
---------------------------------
|  Games       |                |
|              |                |
|  tic-tac-toe |                |
|  hangman     |                |
---------------------------------
```
En cliquant sur hangman
```
---------------------------------
|  Games       |  Hangman       |
|              |                |
|  tic-tac-toe |                |
|  hangman     |   _ _ _ _ _    |
---------------------------------
```
Ajouter une page de scores, accessible via la navbar, qui affiche les scores de chaque jeu, sauvegarder les scores dans le localStorage