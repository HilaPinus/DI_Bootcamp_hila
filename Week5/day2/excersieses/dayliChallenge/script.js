
const formGif = document.querySelector("#gifform");
formGif.addEventListener("submit", retrieveCatgoty);

function retrieveCatgoty(event) {
    event.preventDefault();
    const userCategoty=event.target.catogory.value;
    console.log(event);
    makeRequest(userCategoty)
}

function makeRequest(catogory){
    const xhrObj = new XMLHttpRequest();
    xhrObj.open("GET", `https://api.giphy.com/v1/gifs/search?tag=${catogory}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    xhrObj.responseType = "json";
    xhrObj.send();

xhrObj.onlod = function () {
    console.log(xhrObj);
    if(xhrObj.status !=200) {
        console.log("error");
    }else {
        appendGifToPage(xhrObj.response.data.images.original.url);
    }
}
xhrObj.onerror = function () {
    console.log("error event");
}
}

function appendGifToPage(gifurl) {
    const sectionElement =  document.getElementsByTagName("section");
    const imgElement = document.createElement("img");
    imgElement.setAttribute("src", gifurl);
    sectionElement.appendChild(imgElement);
}