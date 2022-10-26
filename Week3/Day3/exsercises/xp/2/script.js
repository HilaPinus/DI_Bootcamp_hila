//In your Javascript file, use setInterval to move the 
//<div id="animate"> to the right side of the 
//<div id="container">, when the button is clicked on.


function myMove() {
    var container = document.getElementById("container");
    var elem = document.getElementById("animate");
    var myInterval = setInterval(frame, 5);
    var maxDistToTravel = container.offsetWidth - elem.offsetWidth; // container width - red box width
    var startPoint = 0;
    var endPoint = maxDistToTravel;
    var direction = 1;
    
    function frame() { 
     if (startPoint === endPoint) {
       direction *= -1; // reverses current direction
       endPoint = Math.abs(maxDistToTravel - endPoint); 
     }
     startPoint += direction;
     elem.style.left = startPoint + "px";
    }
  }
