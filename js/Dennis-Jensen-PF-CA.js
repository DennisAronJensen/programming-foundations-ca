/*Question 1
Create a variable called outOfStock and assign it a boolean value.

Create an if else statement that checks the value of outOfStock.

If it is true, console log "Out of stock". Otherwise log "In stock".
*/

var outOfStock = true;

if (outOfStock) {
    // If outOfStock is true, Out of Stock
    console.log("Out of Stock");
} else {
    // If outofStock is false, Out of stock
    console.log("In stock");    
}


/*Question 2
Create a for loop that counts from 15 to 25. Console log the value of the counter variable inside the loop only if it's equal to 17 or 20.
*/

for( i=15; i<=25; i++){
    if (i==17 || i==20){
        console.log(i)
   }
}

/*Question 3
Loop through the array below and add an li item to the ul element in the HTML containing the title and rating of each game only if the rating for the game is below 3.5.
*/

var games = [
	{
		title: "Grand Theft Auto",
		rating: 4.48,
	},
	{
		title: "Portal 2",
		rating: 3.5,
	},
	{
		title: "Team Fortress",
		rating: null,
	},
	{
		title: "The Witcher",
		rating: 3.0,
	},
	{
		title: "The Elder Scrolls",
		rating: 2.9,
	},
];

var list = document.getElementsByClassName("games")[0];
for (let i = 0; i < games.length; i++) {
    if(games[i].rating<3.5){
        var li = document.createElement("li");
        var text = document.createTextNode(games[i].title + ": " + games[i].rating);
        li.appendChild(text);
        list.appendChild(li);  
    }
}


/*
Question 4
Create a function called whatIDontLike that accepts one argument. Choose a good name for the argument.

Inside the function, check if the argument has a string value. If it doesn't log the message "Please send in a string".

If the argument is a string value, log the message "I don't like " together with the argument.

Call the function and pass in a value of your choice.
*/

function whatIDontLike(expansions){
    if(typeof expansions=="string"){
        console.log("I don't like "+ expansions);
    }
    else{
        console.log("Please send in a string");
    }
}

whatIDontLike("Warlords of Draenor");


/*Question 5
Create a function that accepts two arguments.

Inside the function, try to convert the arguments to numbers.

If either of the arguments cannot be converted to a number, return the value: "Invalid argument(s)".

If both arguments are number values or can be converted to number values, subtract the second argument from the first and return the result from the function.

Call the function, pass in to two values and assign the return value to be the innerHTML value of the element with the id subtraction.
*/


function argument(number1, number2){
    if (isNaN(number1) || isNaN(number2)){
        console.log("Invalid argument(s)");
    }
    else{
    console.log(number1);
    console.log(number2);
    return number1-number2;
    }
}   
var total = argument(1, 2);
var sub = document.getElementById("subtraction");
var text = document.createTextNode("total");
sub.appendChild(total)

// COMMENT // Code does not work. 
// "script.js:117 Uncaught TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'."


/*Question 6
Select the button with the class page.

When the button is clicked do the following:

Change the title of the page (the value of the title element in the head) to "Updated title".
Change the background colour of the whole page to "yellow".
Change the color of the h1 element to "green".
Change the h1 element's font to "impact".
Change the value of the h1 element to be a link.
Remove the list style and padding from the ul element.
*/


window.onclick = changePage;
function changePage(page){
	document.getElementsByClassName("page")[0].style.backgroundColor = "yellow";
}

// Not sure how to get this to work. I can only manage to get the button "Change Page" to change color to yellow, not the page itself. //


/* Question 7
Select the button with the class price.

When the button is clicked, loop through the array below, add all the prices and assign the total to be the innerHTML value of the element with the id total.

var toys = [
	{
		name: "Lego",
		price: 15.6,
	},
	{
		name: "Master of the Universe",
		price: "28.3",
	},
	{
		name: "Barbie",
		price: null,
	},
	{
		name: "Mr Potato Head",
		price: 89.99,
	},
];
*/  