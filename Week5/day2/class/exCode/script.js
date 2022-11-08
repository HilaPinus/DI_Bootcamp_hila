//AJAX
//Make an HTTP request using the GET METHOD on this API: https://jsonplaceholder.typicode.com/users
//Use the method onload, onprogress, onerror
//If there is no error, display on the page the name, email, city of the 3 first users

const button = document.querySelector("button");
button.addEventListener("click", getData)


//create XMLHttpRequest

const xhr = new XMLHttpRequest();
function getData() {
    //initialize XMLHttpRequest
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.responseType = "json";
    xhr.send(); //sending the XMLHttpRequest
}

//handeling response - add eventListener to **load event** with a function defiening what happens when sucsses (200) and else (error)
xhr.addEventListener ("load", function() { 
    console.log(xhr);
    if(xhr.status === 200) {
        console.log("SUCCESS");
        console.log(xhr.response);
        displayUsersData(xhr.response) // here, I'm calling the function of displayUsersData
    } else {
        console.log("ERROR");
        displayError()
    }
} )

//progress event
xhr.addEventListener ("progress", function() { //server looks for data
    console.log(xhr);
} );


//error event
xhr.addEventListener ("error", function() { //
    console.log(xhr);
    if(xhr.status === 200) {
        console.log("SUCCESS");
        console.log(xhr.response);
        displayUsersData(xhr.response) 
    } else {
        console.log("ERROR");
        displayError()
    }
} )


function displayUsersData (users) {
    const container = document.querySelector("#results")
    users.forEach((element) => {
        const info = document.createElement("p");
        const usersToShow = document.getElementById
        const text = document.createTextNode(`${element.name}, ${element.email}, ${element.address.city}`)
        info.appendChild(text);
        container.appendChild(info)
    })
}