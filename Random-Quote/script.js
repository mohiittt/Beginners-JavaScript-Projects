const btn = document.getElementById("btn");
const output = document.querySelector(".output");

const quotes = [
  "The only impossible journey is the one you never begin.",
  "In three words I can sum up everything I've learned about life: it goes on.",
  "Be yourself; everyone else is already taken.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
  "So many books, so little time.",
  "A room without books is like a body without a soul.",
  "You only live once, but if you do it right, once is enough.",
  "Be the change that you wish to see in the world.",
  "In the end, we will remember not the words of our enemies, but the silence of our friends.",
  "Life is what happens when you're busy making other plans.",
  "It is never too late to be what you might have been.",
  "Everything you can imagine is real.",
  "I have not failed. I've just found 10,000 ways that won't work.",
  "What we think, we become.",
  "The best way to predict the future is to invent it.",
  "I think, therefore I am.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "If you tell the truth, you don't have to remember anything.",
  "A friend is someone who knows all about you and still loves you.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
];

btn.addEventListener("click", () => {
  // console.log(quote);
  let random = Math.floor(Math.random() * quotes.length);
  output.textContent = quotes[random];
});
