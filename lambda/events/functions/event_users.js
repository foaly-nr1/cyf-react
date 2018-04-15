import request from 'request';
import { success, failure } from '../libs/response-lib';

function getAuthToken() {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'POST',
      url: 'https://code-your-future.eu.auth0.com/oauth/token',
      headers: { 'content-type': 'application/json' },
      body: {
        grant_type: 'client_credentials',
        client_id: 'fjPqeEHUHWPT4pPXAvX5zijAn2P7IdiB',
        client_secret: process.env.AUTH0_ADMIN_CLIENT_SECRET,
        audience: 'https://code-your-future.eu.auth0.com/api/v2/',
      },
      json: true,
    };

    request(options, (error, response, body) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        reject(error);
      }

      resolve(body.access_token);
    });
  });
}

const BASE_URL_USER = 'https://code-your-future.eu.auth0.com/api/v2/users/';

function getUser(userId, accessToken) {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      url: `${BASE_URL_USER}${userId}`,
      headers: {
        authorization: `Bearer ${accessToken}`,
        'content-type': 'application/json',
      },
      json: true,
    };

    request(options, (error, response, body) => {
      if (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        reject(error);
      }
      if (body.error) {
        // eslint-disable-next-line no-console
        console.log(error);
        reject(body);
      }

      resolve(body);
    });
  });
}

/* eslint-disable import/prefer-default-export */
export async function main(lambdaEvent, context, callback) {
  const userId = lambdaEvent.pathParameters.id;
  const accessToken = await getAuthToken();

  try {
    const user = await getUser(userId, accessToken);
    callback(null, success(user));
  } catch (error) {
    callback(null, failure({ status: 'error', result: error }));
  }

  callback(null, failure({ status: false, message: 'User not found' }));
}
