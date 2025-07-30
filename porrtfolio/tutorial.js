
//console.log("Hi Mide! Your site is now alive 🔥");
  //alert("Let’s run this show 💃");

//  alert("Hey love, I'm learning JavaScript 😘");
//console.log("I’m gonna be so good at this 🔥");

//alert("my bby is teaching me js");
//console.log("i will know it");

  //let yourName = "Mide";
 // let age = 23;
  //let inLoveWithJS = true;

  //console.log("Your name is " + yourName);
  //console.log("You're " + age + " years old.");
  //console.log("Are you loving JavaScript? " + inLoveWithJS);


//let favoritecolor = "black";
//let dressmode  = "boss mode and slaying mode ";

//console.log("My favorite color is " + favoritecolor + " and i prefer " + dressmode + " for my dressing");

//let total = 23 + 7;
//console.log(total);

//adding strings (concatenating)
//let first = "slay";
//let second = "queen";
//console.log(first + " " + second);

//adding string with no's 
//let result = "Price: ₦" + 10000;
//console.log(result); // Price: ₦10000 (not math!)

// Using Template Literals (with backticks ` `)
//let name = "Mide";
//let ages = 23;
//console.log(`My name is ${name} and I am ${ages} years old.`);

//let item = "heels";
//let price = 25000;
//let message = `The ${item} cost ₦${price} and I'm still buying it 😂`;

//console.log(message);

//let a = "10";
//let b = 5;

//console.log(a + b);  //turns it to string 105
//console.log(Number(a) + b); //adds both number and give 15

//let weather = "hot";

//if (weather === "hot") {
  //console.log("Wearing a crop top 🔥");
//} else {
  //console.log("Bring out the hoodie 🧥");
//}

//let mood = "boss";

//if (mood === "boss") {
  //console.log("Walk in with heels and attitude 💅");
//} else if (mood === "chill") {
//console.log("Rocking sneakers and oversized tee 😎");
//} else {
//console.log("Neutral vibe. Keep it simple 💁‍♀️");
//}

//let time = 21; // 9PM

//if (time < 12) {
//console.log("Good morning 🌞");
//} else if (time < 18) {
//console.log("Good afternoon ☀️");
//} else {
//console.log("Good evening 🌙");
//}

//let vibe = "chaotic";
//if (vibe === "soft") {
//console.log("Fluffy dress & gloss 💖");
//} else if (vibe === "chaotic") {
//console.log("Combat boots & fire liner 🔥");
//} else {
//console.log("Minimalist slay. Classy queen 👑");
//}
//fuction template
//function name() {
////task to perform
//}

//function applyLipGloss() {
//console.log("Shiny lips, check! 💄");
//}

//applyLipGloss(); // Call it

//function slay(style) {
//console.log("Today's look: " + style);
//}

//slay("boss babe in black");
//slay("cozy hoodie and lashes");
//slay("whatever it is i want to write");

//function getBagColor() {
//return "nude beige";
//}

//let bag = getBagColor();
//console.log("Bag selected: " + bag);


//function shoeDrop(type, price) {
  //console.log(`Those ${type} cost ₦${price}, but it’s worth it 🔥`);
//}

//shoeDrop("heels", 15000);
//shoeDrop("sneakers", 9000);

 //function outfit(){
  //console.log("Today’s combo is crop top with ripped jeans 🔥");
 //}

  //outfit();

  //let glamRack = ["combat boots", "fur coat", "fire liner", "gold hoops"];
  //console.log(glamRack[0]); // "combat boots"
  //console.log(glamRack[2]); // "fire liner"
  
  //glamRack.push("satin gloves"); //to add to the end of the item
  //glamRack.unshift("sun hat"); // to add to the beginning of the item
  //console.log(glamRack);
 
  //glamRack.pop(); // to remove an item from the end
  //console.log(glamRack);

  //glamRack.shift(); //removes an item from the beginning
  //console.log(glamRack);
  
  //let closet = ["heels", "blazer", "crop top", "bucket hat"];
//closet.splice(2, 0, "cargo pant");
//console.log(closet);

//let closet = ["heels", "blazer", "crop top", "bucket hat"];
//closet.splice(3, 1);
//console.log(closet);

//let glamRack = ["sunglasses", "leather jacket", "graphic tee", "jeans"];
//glamRack.splice(3, 0, "combat boot" );
//glamRack.splice(glamRack.indexOf("leather jacket"), 1);
//console.log(glamRack);

//loops
//let closet = ["heels", "blazer", "crop top", "bucket hat"];

//for (let i = 0; i < closet.length; i++) {
  //console.log((i + 2) + " - " + closet[i]);
//}

//let glamCloset = ["satin dress", "fur coat", "ankle boots", "silver clutch"];
//for (let i = 0; i < glamCloset.length; i++) {
 // console.log((i + 10) + " - " + glamCloset[i]);
//}

//let glamCloset = ["satin dress", "fur coat", "ankle boots", "silver clutch"];
//for (let i = glamCloset.length - 1; i >= 0; i--) {
  //console.log((i + 10) + " - " + glamCloset[i]);
//}

//let glamCloset = ["satin dress", "fur coat", "ankle boots", "silver clutch"];
//let glamLabels = ["Date Night", "Winter Queen", "Street Swagger", "Disco Chic"];

//for (let i = 0; i < glamCloset.length; i++) {
  //console.log(glamLabels[i] + ": " + glamCloset[i]);
//} loop

//objects
/*let myLook = {
  name: "hoodie",
  color: "black",
  vibe: "street",
  accessories: [ "chains", "bandanna" ]
};

myLook.color = "neon green"; this changes the color from black to neon green
myLook.style = "edgy"; this adds style that wasn't included before to the list

console.log("Look Name:", myLook.name);
console.log("Color:", myLook.color);
console.log("Vibe:", myLook.vibe);
console.log("Accessories:", myLook.accessories.join(", "));
*/
//DOM LESSON
let title = document.getElementById("title");
//title.textContent = "Yasss Queen, You're Styled!";

