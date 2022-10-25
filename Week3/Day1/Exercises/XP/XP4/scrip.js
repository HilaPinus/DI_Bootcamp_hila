let allBooks = [];

    let firstBook = {
        title: "hila",
        aouthor: "zamir",
        imgurl: "https://www.istockphoto.com/photo/teacher-helping-a-young-student-with-her-homework-in-the-library-after-school-two-gm1401178460-454511874?utm_source=unsplash&utm_medium=affiliate&utm_campaign=category_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fimages%2Fthings%2Fbook&utm_term=book%3A%3A%3A",
        alreadyRead: "false" 
        }

        let secondBook = {
    title: "Mia",
    aouthor: "Pinus",
    imgurl: "https://www.istockphoto.com/photo/teacher-helping-a-young-student-with-her-homework-in-the-library-after-school-two-gm1401178460-454511874?utm_source=unsplash&utm_medium=affiliate&utm_campaign=category_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fimages%2Fthings%2Fbook&utm_term=book%3A%3A%3A",
    alreadyRead: "true" 
}

allBooks.push(firstBook, secondBook);

let newTable = document.getElementsByClassName("listBooks");
newTable = document.createElement("table");
newTable.innerHTML = `
<thead>
<tr>
    <th>my book List</th>
</tr>
</thead>
<tr>
<td> </td>
</tr>
`
const bookListDiv = doc.queryselector("list-book")
bookListDiv?.appendChild(table);

//The point of this challenge is to display a list 
//of two books on your browser.

//In the js file, create an array called allBooks.
//This is an array of objects. 
//Each object is a book that has 4 keys (ie. 4 properties) :
/*
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).

let newBookOne = document.getElementsByClassName("listBooks");
newBookOne = document.createElement("object");

let newBookTwo = document.getElementsByClassName("listBooks");
newBookOne = document.createElement("object");

*/