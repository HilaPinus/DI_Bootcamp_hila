//Exercise with JSON


let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`
//Parse this JSON string into a JS object

const jasonToJs = JSON.parse(jsonString);
console.log(jasonToJs);

//Use array or object methods to display 
//THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION

const values = jasonToJs.quiz.sport.q1.options;
values.forEach(element => { console.log(element);});


//Create another variable to stringify the JS object. 
//Console.log the variable
const secondJason = JSON.stringify(jasonToJs)
console.log(secondJason);



//Then use pretty print (look at the lesson)

const pretty = JSON.stringify(jasonToJs, null, 2);
console.log(pretty);




