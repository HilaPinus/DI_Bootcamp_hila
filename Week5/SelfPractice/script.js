let pageCounter = 1;

let animalContainer = document.getElementById("animalinfo")

let btn = document.getElementById("btn");
btn.addEventListener("click", getData);


function getData () {
    let myReq = new XMLHttpRequest ();                                                                        // creating variable to my new xmlhttprequest - define the request
    myReq.open("GET", 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');        //open the request with 2 parameters - 1. method of GET 2. the url 
    myReq.onload = function() {                                                                                //what shold happen when the data is load?
    let myData =  JSON.parse(myReq.responseText);                                                                 //create a varible that contains the json data from the url, as js object
    console.log(myData);                                                                                         // login only the data of the first element in the array of objects, meaning, the first object.
    htmlAdd(myData)    
    };
    myReq.send();
    pageCounter++;
    if (pageCounter>3) {
        btn.classList.add("hide-me");
    }
}


function htmlAdd(data) {
    let htmlString = "";

    for (i=0; i<data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat " ;
        
    for (ii=0; ii<data[i].foods.likes.length; ii++) {
        if ( ii ==0 ){
            htmlString += data[i].foods.likes[ii] ;
        } else {
            htmlString += " and " + data[i].foods.likes[ii] + ", " ;
        }
    }

    htmlString += " but dislikes ";
    for (ii=0; ii<data[i].foods.dislikes.length; ii++) {
        if ( ii ==0 ){
            htmlString += data[i].foods.dislikes[ii] ;
        } else {
            htmlString += " and " + data[i].foods.dislikes[ii] ;
        }
    }
        htmlString += ".<p>";

        
        
    }

    animalContainer.insertAdjacentHTML("beforeend", htmlString)
}

