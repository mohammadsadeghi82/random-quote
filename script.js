// weriten by Mohammad Sadeghi

let text = document.querySelector(".text");
let person = document.querySelector(".person");
// option variable
let btn = document.querySelector(".add");
let like = document.querySelector('.bi-heart-fill');
let copy = document.querySelector('.fa-copy');
let bold = document.querySelector('.fa-bold');
// Quote Item;

let QuotesItem = [
  {
    id: 1,
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "–– Martin Fowler",
  },

  {
    id: 2,
    quote: "First, solve the problem. Then, write the code.",
    author: "–– John Johnson",
  },

  {
    id: 3,
    quote: "Experience is the name everyone gives to their mistakes.",
    author: "–– Oscar Wilde",
  },

  {
    id: 4,
    quote: "In order to be irreplaceable, one must always be different.",
    author: "–– Coco Chanel",
  },

  {
    id: 5,
    quote: "ava is to Javascript what car is to Carpet.",
    author: "–– Chris Heilmann",
  },
];

function generateQuote(QuotesItem) {
  let randomQuote = Math.round(Math.random() * QuotesItem.length);

  let genterat = QuotesItem[randomQuote];

  text.innerHTML = genterat.quote;
  person.innerHTML = genterat.author;

  setToLocalStorage(genterat);
}

btn.addEventListener('click',() => {
  generateQuote(QuotesItem);
});

like.addEventListener('click',e => {
    like.style.color = 'royalblue';
})

function copyQuote () {
    window.navigator.clipboard.writeText(text.innerHTML);
}

function boldQuote () {
  if(text.style.fontWeight == "bold") {
    text.style.fontWeight = "normal";
  } else {
    text.style.fontWeight = "bold";
  }
}

function setToLocalStorage(genterat) {
  localStorage.setItem("quote", JSON.stringify(genterat));
  giveLocalValue(genterat);
}



function giveLocalValue(genterat) {
  let localValue = localStorage.getItem("quote");
  if(!localValue) {
     let parseLocalValue = JSON.parse(localValue);
     generateQuote(parseLocalValue);
  }
}

window.addEventListener(
  'load',giveLocalValue()
);
copy.addEventListener('click', copyQuote);
bold.addEventListener('click', boldQuote);