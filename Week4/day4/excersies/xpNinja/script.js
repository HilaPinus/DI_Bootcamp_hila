//Exercise 1 : Bird Class
//Analyze the code below, what will be the output?

class Bird {
  constructor() {
    console.log("I'm a bird. 🦢");
  }
}

class Flamingo extends Bird {
  constructor() {
    console.log("I'm pink. 🌸");
    super();
  }
}

const pet = new Flamingo();

//flamingo is extand of bird, that is why when flamingo() called 
//(regardless the const, I dont understand what is the porpuse of calling the func inside const variable)
//it also loging the bird. 