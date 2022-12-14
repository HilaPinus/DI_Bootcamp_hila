
//In this exercise, you will use object oriented programming concepts 
//to define and use a custom object in JavaScript.

//Create a class named Video. The class should be constructed with the following parameters:
//title (a string)
//uploader (a string, the person who uploaded it)
//time (a number, the duration of the video - in seconds)

//Create a method called watch() which displays a string as follows:
//“uploader parameter watched all time parameter of title parameter!”

//Instantiate a new Video instance and call the watch() method.
//Instantiate a second Video instance with different values.

//Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
//Think of the best data structure to save this information within the array.
//Bonus: Loop through the array to instantiate those instances.


class video {
    constructor(title, uplouder, time) {
        this.title = title;
        this.uplouder = uplouder;
        this.time = time;
    }

    watch () {
        const sentence = `${this.uplouder} watch all ${this.title} of ${this.time}`;
       console.log(sentence);
    }
}

const userHila = new video ("Hila", "Breaking bad", "1 hour");
const userMatan = new video ("Matan", "Break", "2 hours");

userHila.watch()
userMatan.watch()


