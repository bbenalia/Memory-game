export function playSound(idSound){
     const d = document;
     const startSoundGame = d.getElementById(idSound);
     startSoundGame.play();
   }