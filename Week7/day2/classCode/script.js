const getProducts = () => {
    fetch('http://localhost:5000/api/products')
    .then(res => res.json())
    .then(data => {
        creatProducts(data);
    })
    .catch(e => {
        console.log(e);
    })
}

getProducts();

const creatProducts = (arr) => {
    const root = document.getElementById('root');
    arr.forEach((item, i) => {
    let div = document.createElement('div');
    div.innerText = item.name + ' ' + item.price
    root.appendChild(div)
    });
}