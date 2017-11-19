import Aws from 'aws-sdk';

const ssm = new Aws.SSM({ region: 'eu-west-1' });

const getSSMParameter = name => (
  new Promise((resolve, reject) => {
    ssm.getParameters(
      {
        Names: [name],
        WithDecryption: true,
      },
      (err, data) => (
        err ? reject(err) : resolve(data.Parameters[0].Value)
      ),
    );
  })
);

export default getSSMParameter;
