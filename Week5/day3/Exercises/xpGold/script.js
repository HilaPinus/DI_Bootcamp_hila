const urls = [
    'https://www.swapi.tech/api/people/1',
    'https://www.swapi.tech/api/people/2',
    'https://www.swapi.tech/api/people/3',
    'https://www.swapi.tech/api/people/4'
  ];
  
Promise.all(urls.map(url => 
    fetch(url)
        .then(res=> res.json())
))
.then(arr => {
    console.log(arr[0]);
    console.log(arr[1]);
    console.log(arr[2]);
    console.log(arr[3]);
})
.catch(err =>{
    console.log(err);
}) 

//Use Promise.all to fetch all the characters from 
//the array above with only one request.
//Console.log the output and make sure it has a catch block as well.
//Expected Output:


//Part II

//Change one of the urls in the array provided above. 
//This should cause an error. Make sure your catch block works.
//Expected Output:



