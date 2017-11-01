// config
const STRIPE_PRIVATE = process.env.STRIPE_PRIVATE;
const STRIPE_PUBLIC = process.env.STRIPE_PUBLIC;

// deps
const express = require('express');
const app = express();
const cors = require('cors')
const bodyParser = require('body-parser');
const stripe = require('stripe')(STRIPE_PRIVATE);

// server
app.use(cors());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.post('/donate', donate);
app.listen(5000);

function donate(req, res) {
    console.log(req.body);
    const { token, amount } = req.body;
    stripe.charges.create({
        amount: amount * 100,
        currency: 'gbp',
        description: 'CYF Donation',
        source: token,
    })
    .then(() => res.send(200))
    .catch((err) => res.send(500, err));
}