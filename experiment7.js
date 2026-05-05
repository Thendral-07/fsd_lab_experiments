const express = require('express');
const app = express();
const PORT = 3000;

// --- MIDDLEWARE ---

// Built-in middleware to parse JSON bodies
app.use(express.json());

// Custom Logger Middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} request to ${req.url}`);
    next(); // Pass control to the next handler
});

// --- DATA SOURCE (In-Memory) ---
let inventory = [
    { id: 1, item: "Laptop", quantity: 10 },
    { id: 2, item: "Mouse", quantity: 50 }
];

// --- ROUTES ---

// GET: Fetch all inventory items
app.get('/api/inventory', (req, res) => {
    res.status(200).json(inventory);
});

// GET: Fetch a single item by ID
app.get('/api/inventory/:id', (req, res) => {
    const item = inventory.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});

// POST: Add a new item
app.post('/api/inventory', (req, res) => {
    const newItem = {
        id: inventory.length + 1,
        item: req.body.item,
        quantity: req.body.quantity
    };
    inventory.push(newItem);
    res.status(201).json(newItem);
});

// PUT: Update an existing item
app.put('/api/inventory/:id', (req, res) => {
    const item = inventory.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');

    item.item = req.body.item || item.item;
    item.quantity = req.body.quantity || item.quantity;
    res.json(item);
});

// DELETE: Remove an item
app.delete('/api/inventory/:id', (req, res) => {
    const itemIndex = inventory.findIndex(i => i.id === parseInt(req.params.id));
    if (itemIndex === -1) return res.status(404).send('Item not found');

    const deletedItem = inventory.splice(itemIndex, 1);
    res.json(deletedItem);
});

// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`Inventory API running at http://localhost:${PORT}`);
});
