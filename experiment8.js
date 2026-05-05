const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/productCatalog')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB', err));


const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: String,
    price: Number,
});

const Product = mongoose.model('Product', productSchema);


app.post('/api/products', async (req, res) => {
    try {
        const product = new Product(req.body);
        const result = await product.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


app.get('/api/products', async (req, res) => {
    const products = await Product.find().sort('name');
    res.send(products);
});


app.get('/api/products/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).send('Product not found.');
    res.send(product);
});


app.put('/api/products/:id', async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(
            req.params.id, 
            { $set: req.body }, 
            { new: true, runValidators: true }
        );
        if (!product) return res.status(404).send('Product not found.');
        res.send(product);
    } catch (error) {
        res.status(400).send(error.message);
    }
});


app.delete('/api/products/:id', async (req, res) => {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).send('Product not found.');
    res.send({ message: 'Deleted successfully', product });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
