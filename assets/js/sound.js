/*
 * Use this function to play sounds
 * @ Author:
 */
export function playSound(idSound) {
  const d = document;
  const startSoundGame = d.getElementById(idSound);
  startSoundGame.play();
}

/*
 * Use this function to toggle sounds
 * @ Author:
 */
export function toggleMuteSound(idSound) {
  const d = document;
  const audio = d.getElementById(idSound);
  if (audio.muted) {
    audio.muted = false;
  } else {
    audio.muted = true;
  }
}
