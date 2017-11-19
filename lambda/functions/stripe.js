// Charge a transaction identified by `token` for the amount `amount`.
import stripeLoader from 'stripe';
import { getSSMParameter } from '../tools';

export default (event, context, callback) => {
  if (event.method === 'POST') {
    const { token, amount } = event.body;

    getSSMParameter(process.env.STRIPE_PRIVATE_KEY_ALIAS)
      .then(stripePrivateKey => stripeLoader(stripePrivateKey))
      .then(stripe => (
        stripe.charges
          .create({
            amount: amount * 100,
            currency: 'gbp',
            description: 'CYF Donation',
            source: token,
          })
          .then(() => callback(null, '[200] Payment succesful.'))
          .catch((error) => {
            console.error(error);
            return callback(error, '[400] Error during payment.');
          })
      ))
      .catch((error) => {
        console.error(error);
        return callback(error, '[400] Error during payment.');
      });
  }
};
