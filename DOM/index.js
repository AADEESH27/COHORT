const container = document.getElementsByClassName("container")[0];
const input = document.getElementById("numberOfWords");

const makeWord = (lengthOfWord) => {
  let word = "";
  const source = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < lengthOfWord; ++i) {
    const random = (Math.random() * source.length).toFixed(0);
    word += source[random];
  }
  return word;
};

const getPara = () => {
  const numberOfWords = Number(input.value);
  let text = "";
  for (let i = 0; i < numberOfWords; ++i) {
    let random = (Math.random() * 15).toFixed(0);
    text += makeWord(random);
    text += " ";
  }
  const p = document.createElement("p");
  p.setAttribute("class", "paras");
  p.innerText = text;
  container.append(p);
};

const clearContainer = () => {
  input.value = "";
  const paras = container.querySelectorAll(".paras");
  paras.forEach((para) => para.remove());
};
