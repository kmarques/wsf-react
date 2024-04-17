/**
 * TP 1:
 *
 * Créer un composant ProgressBar qui prend en entrée :
 * range: un object de type {20: "red", 60: "yellow", 100: "green", Infinity: "black"}
 * maxCount: un number désignant le nombre maximal
 * current: un number désignant le nombre actuel
 *
 * Utiliser ce composant dans le fichier App.jsx associé à un state qui change grâce à un "bouton"
 * Pouvoir changer l'incrément avec un élément "select" contenant les options 1, 5, 10
 *
 * Exemple d'utilisation :
 * <ProgressBar current={10} maxCount={30} range={{20: "green", 60: "yellow", 100: "red"}}/>
 *
 * Ce composant doit afficher une jauge remplie à 33% de couleur jaune
 */
