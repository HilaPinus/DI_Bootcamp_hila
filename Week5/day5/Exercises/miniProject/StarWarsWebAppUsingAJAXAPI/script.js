const btn = document.getElementById("btn");
const name = document.getElementById("name");
const heigth = document.getElementById("heigth");
const gender = document.getElementById("gender");
const bd = document.getElementById("by");
const home = document.getElementById("home");

let url = fetch ("https://www.swapi.tech/api/people/${random}")   

btn.addEventListener("click", getData);

function getData() {
    fetch(url)
    .then(function (avatarData) {
        return avatarData.json();
    }).then(function(character){

    })

}


function getData (e) {
    e.preventDefault(); 

    fetch(url)
    .then(function(result){
        return result.json();
     })
    .catch(function(error){

    });
}

getData()



//In this project you will have to build a single page application 
//that uses AJAX to retrieve information and display it on your website as follows:

//You should use this API: https://www.swapi.tech/ to get the data 
//and update it “randomly” in your website by clicking a button.
//Note: The API contains 83 different characters

//1-    Create your HTML file, and add the relevant elements.

//2-    In your JS file, create your functions :
//to retrieve the elements from the DOM.
//to get the data from the API (star wars characters).
//to display the info on the DOM: the name, height, gender, birth year, and home world of the character.

//3-    Display the data using AJAX. Make sure to display a loading message as follows:
//You can use any of these animation icons for the loading message.

//4-    If there is an error getting the data, display a message as follows:

// 5-   You can use your own css to style the website as you see fit



