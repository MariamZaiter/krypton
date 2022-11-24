/*const s = "Hello Wold";
let val;
val = s.length;
console.log(val);
val = s.toUpperCase();
console.log(val);
val = s.toLowerCase();
console.log(val);
val = s.substring(0, 5);
console.log(val);
val = s.split("");
console.log(val);
const fruits = ["apples", "oranges", "tomatos", "grapes"];
console.log(fruits);
fruits.push("strawberries");
console.log(fruits);
fruits.unshift("mangoes");
console.log(fruits);
fruits.pop();
console.log(fruits);
console.log(Array.isArray(fruits));
console.log(fruits.indexOf("oranges"));
*/
/*const person = {
  firstname: "fathi",
  age: 30,
  hobbies: ["music", "movies", "sports"],
  address: {
    street: "50 main st",
    city: "Damas",
    state: "alhamra",
  },
};
console.log(person.firstname);
console.log(person.hobbies[1]);
console.log(person.address.city);
const todos = [
  {
    id: 1,
    text: "take off the trash",
    isComplete: false,
  },
  {
    id: 2,
    text: "Do homework for course",
    isComplete: true,
  },
  {
    id: 3,
    test: "Google about JS",
    isComplete: false,
  },
];
console.log(todos[1].text);
console.log(JSON.stringify(todos));*/
/*for (let i = 0; i <= 10; i++) {
  if (i == 6) break;
  console.log(i);
}
function myfunction(p1, p2) {
  return p1 + p2;
}
let result = myfunction(2, 2);
console.log(result);*/

let card = document.querySelector(".card");
card.addEventListener("mouseOver", myFunction);
function myFunction() {
  document.getElementById("change").classList.toggle("new");
}
