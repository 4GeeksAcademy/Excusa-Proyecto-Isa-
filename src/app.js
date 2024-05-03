/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#excuse").innerHTML = excuseGenerator();
};

/** 1- Index.html
 * 2- Crear las variables
 * 3- Crear función Random
 * 4- Modificación HTML
 */

function excuseGenerator() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const whoRandom = Math.floor(Math.random() * who.length);
  const actionRandom = Math.floor(Math.random() * who.length);
  const whatRandom = Math.floor(Math.random() * who.length);
  const whenRandom = Math.floor(Math.random() * who.length);

  const excuse =
    who[whoRandom] + action[actionRandom] + what[whatRandom] + when[whenRandom];
  return excuse;
}
