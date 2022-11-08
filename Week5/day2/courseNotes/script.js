//1st step
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://zivuch.github.io/emails.xml');

xhr.withCredentials = false;

xhr.responseType = 'json';
xhr.send();



//2nd step
xhr.onload = function(){
    if(xhr.status != 200){
      console.log(`Error: ${xhr.status}: ${xhr.statusText}`);
    }
    else{
      console.log(xhr.response);
      loadXml(xhr.response);
    }
  }
  
  xhr.onprogress = function(event) {
    if (event.lengthComputable) {
      console.log(`Received ${event.loaded} of ${event.total} bytes`);
    } else {
      console.log(`Received ${event.loaded} bytes`); // no Content-Length
    }
  };
  
  xhr.onerror = function() {
    console.log('Error something wrong###');
  };

  function loadXml(xmlDoc) {
    var cd = xmlDoc.getElementsByTagName("email");
    for (let i = 0; i <cd.length; i++) {
        console.log(cd[i].getElementsByTagName("to")[0].childNodes[0].nodeValue);
        console.log(cd[i].getElementsByTagName("from")[0].childNodes[0].nodeValue);
    }
}