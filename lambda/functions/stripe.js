const ssm = require('../tools/ssm');

// config

module.exports = (event, context, callback)  => {
  if (event.method === 'POST') {  
    const { token, amount } = event.body;
    ssm.getParameter(process.env.STRIPE_PRIVATE_KEY_ALIAS)
       .then(stripe_private_key => {
          return require('stripe')(stripe_private_key);
        }
      ).then(stripe => {
        return stripe.charges
        .create({
          amount: amount * 100,
          currency: 'gbp',
          description: 'CYF Donation',
          source: token
        })
        .then(() => callback(null, '200'))
        .catch(err => {
          console.log(err);
          callback(500, err)
        })
      }
    )
  }
};
