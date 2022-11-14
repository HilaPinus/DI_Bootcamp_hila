//Using URL object

let url= new URL('file:///C:/Users/ADMIN/desktop/DI-Bootcamp/Week5/day1/Exercises/xpGold/indexOne.html');
let params = new URLSearchParams(url.search);

let lastname = params.get('lastname'); 
let name = params.get('name'); 
console.log(lastname, name);
