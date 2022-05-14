const choruses = [
  "a Partridge in a Pear Tree",
  "2 Turtle Doves",
  "3 French Hens",
  "4 Calling Birds",
  "5 Golden Rings",
  "6 Geese a Laying",
  "7 Swans a Swimming",
  "8 Maids a Milking",
  "9 Ladies Dancing",
  "10 Lords a Leaping",
  "11 Pipers Piping",
  "12 Drummers Drumming",
];

const songBox = document.getElementById("songBox");

/**
 * Get the last chorus to use
 * @param {number} index - Get the chorus to use on the iteration
 * @returns {string} Chorus to use
 */
const getLastChorus = (index) => {
  let chorusToUse = "";

  for (let i = 0; i < index; i++) {
    chorusToUse += `${choruses[i]}\n`;
  }

  return chorusToUse;
};

/**
 * Get the chorus to get
 * @param {number} chorus - Number of the chorus to get
 * @returns {string} Chorus to use
 * @example
 * const chorusA = getFirstChorus(2); // --> On the second day of Christmas. My true love sent to me:
 * const chorusB = getFirstChorus(5); // --> On the fifth day of Christmas. My true love sent to me:
 */
const getFirstChorus = (chorus) => {
  const firstPartChorus = "On the";
  const finalPartChorus = `day of Christmas my true love sent to me:`;

  switch (chorus) {
    case 1:
      return `${firstPartChorus} first ${finalPartChorus}`;
    case 2:
      return `${firstPartChorus} second ${finalPartChorus}`;
    case 3:
      return `${firstPartChorus} third ${finalPartChorus}`;
    case 4:
      return `${firstPartChorus} fourth ${finalPartChorus}`;
    case 5:
      return `${firstPartChorus} fifth ${finalPartChorus}`;
    case 6:
      return `${firstPartChorus} sixth ${finalPartChorus}`;
    case 7:
      return `${firstPartChorus} seventh ${finalPartChorus}`;
    case 8:
      return `${firstPartChorus} eighth ${finalPartChorus}`;
    case 9:
      return `${firstPartChorus} ninth ${finalPartChorus}`;
    case 10:
      return `${firstPartChorus} tenth ${finalPartChorus}`;
    case 11:
      return `${firstPartChorus} eleventh ${finalPartChorus}`;
    case 12:
      return `${firstPartChorus} twelfth ${finalPartChorus}`;
  }
};

function configurePlayButton() {
  const playSongButtonDom = document.getElementById("playSong");

  if (playSongButtonDom) {
    playSongButtonDom.addEventListener("click", () => {
      singSong();
      playSongButtonDom.setAttribute("disabled", "true");
    });
  }
}

function singSong() {
  choruses.forEach((chorus, index) => {
    setTimeout(() => {
      const firstChorusDom = document.createElement("p");
      firstChorusDom.innerText = getFirstChorus(index + 1);
      firstChorusDom.className = "marginChorus";

      const lastChorusDom = document.createElement("p");
      lastChorusDom.innerText = getLastChorus(index);

      songBox.appendChild(firstChorusDom);
      songBox.appendChild(lastChorusDom);

      scrollToEnd();
    }, 1000 * index + 1);
  });
}

function scrollToEnd() {
  songBox.scrollTop = songBox.scrollHeight;
}

//////////////////////////////////////////////////////////////

configurePlayButton();
