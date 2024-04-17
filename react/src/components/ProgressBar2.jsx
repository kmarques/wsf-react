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

import React from "react";

export default function ProgressBar({
  variant = "horizontal",
  current,
  maxCount,
  range,
}) {
  const boundStyle = {
    container: {},
    progress: {},
  };
  if (variant === "horizontal") {
    boundStyle.container = {
      maxWidth: "100%",
      minWidth: "100%",
      height: "100%",
    };
    boundStyle.progress = {
      height: "100%",
    };
  } else if (variant === "vertical") {
    boundStyle.container = {
      width: "100%",
      minHeight: "100%",
      maxHeight: "100%",
    };
    boundStyle.progress = {
      width: "100%",
    };
  }
  const currentPercent = (current / maxCount) * 100;
  let lastTreshold = null;
  for (const treshold in range) {
    if (currentPercent > treshold) {
      continue;
    }
    if (currentPercent <= treshold) {
      lastTreshold = treshold;
      break;
    }
  }

  return (
    <div
      style={{
        border: "1px solid blue",
        borderRadius: "50px",
        overflow: "hidden",
        backgroundColor: "white",
        position: "relative",
        ...boundStyle.container,
      }}
    >
      <div
        style={{
          position: "absolute",
          [variant === "horizontal" ? "left" : "bottom"]: 0,
          backgroundColor: range[lastTreshold],
          [variant === "horizontal" ? "width" : "height"]: currentPercent + "%",
          ...boundStyle.progress,
        }}
      />
    </div>
  );
}
