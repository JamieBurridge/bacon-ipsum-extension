const copiedMessage = document.getElementById("copied-message");
const buttonGenerate = document.getElementById("button-generate");
const inputSentencesAmount = document.getElementById("input-sentences-amount");
const loader = document.getElementById("loader");

async function getBaconIpsum(sentences = 5) {
  copiedMessage.style.display = "none";
  loader.style.display = "block";

  const response = await fetch(
    `https://baconipsum.com/api/?type=all-meat&sentences=${sentences}&start-with-lorem=1`
  );
  const result = await response.json();

  navigator.clipboard.writeText(result);
  copiedMessage.style.display = "block";
  loader.style.display = "none";
}

function getNumberOfSentences() {
  return inputSentencesAmount.value;
}

buttonGenerate.addEventListener("click", () => {
  getBaconIpsum(getNumberOfSentences());
});
