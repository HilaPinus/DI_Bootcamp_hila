const express =  require('express');
const cors=  require('cors')
const {products}=require('./modules/data.js');
const app=express();
app.use(cors())

app.listen(5000, () => {
    console.log("running on 5000");
})

app.use('/', express.static(__dirname + 'public'))


app.get('/api/products',(req, res) => {
    res.json(products);
});


app.get('/api/products/:productId', (req, res) => {
    // console.log(req.params);
    const {productsId} = req.params;
    const product = products.find(item => {
        return item.id == productsId
    })
    if (!product) {
        return res.status(404).json({msg:'product not found'})
    }
    res.json(product);
})