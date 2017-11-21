# Lambdas

### Generalities 

AWS Lambdas are mainly for two purposes:
  - Trigger an event periodically using a cron-style scheduler
  - Play the role of a backend endpoint

In this project, we use `serverless`, a framework that builds, creates and deploys the lambdas for us.

All the code you change in the `/lambda` folder will be deployed by Circle-CI when you merge to branches `staging` and `master`.

The serverless environment for those will be respectively `staging` and `production`. You can thus set environment variables as for example in [this file](../lambda/env.pipedrive.yml).

To check the deployed lambdas you can visit https://codeyourfuture.signin.aws.amazon.com/console/. Then connect with your credentials, set the region as `Ireland` and type Lambda in the search bar.

### File structure

The non-trivial parts of `/lambda`'s file structure are:

- `.env.something.yml` contains the environment variables for backend `something`.
- `serverless.yml` contains the definitions of the names, triggers and code locations of the lambdas to deploy. Each definition will lead to two lambdas created: one for `production` and one for `staging`.
- `/testEvents` contains test events to test the lambdas locally. You can copy-paste those test events in the AWS console to test the lambdas once deployed.   

=> Command to test locally:
```
serverless invoke local -s {stage} --path testEvents/{testEvent}.json --function {functionNameInConfigFile}
```
=> Command to test remotely
```
serverless invoke -s {stage} --path testEvents/{testEvent}.json --function {functionNameInConfigFile}
```
- `/functions` contains the actual functions.
- `/tools` contains in particular a helper to fetch encrypted passwords/api keys from the AWS parameter store.  
=> To see and configure the parameter store, connect to AWS, set region to Ireland and go to *EC2 -> parameter store*. If you create a parameter, make sure it is encrypted with the `encryption_key` key. The new lambdas deployed will automatically have permission to access the parameter and decrypt with that key.
- All the functions are registered in `handler.js` to be imported by `serverless.yml`

To be improved....