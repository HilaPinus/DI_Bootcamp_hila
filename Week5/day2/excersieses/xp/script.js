let myRequest = new XMLHttpRequest ();
myRequest.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My");
myRequest.send();

myRequest.addEventListener("load",function () {
    let myData = JSON.parse(myRequest.responseText);
    console.log(myData.data);
});


let myRequest = new XMLHttpRequest ();
myRequest.open("GET", "https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10");
myRequest.addEventListener("load",function () {
    let myData = JSON.parse(myRequest.responseText);
    console.log(myData.data);
});
