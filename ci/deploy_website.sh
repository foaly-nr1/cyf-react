#!/bin/bash

BRANCH="$1"
REPO_NAME="$2"
DATE="$3"

## Build
yarn build

## Some weird github pages requirement
export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
export CLOUDFRONT_DISTRO_ID=E3VCH8Y8STIF56

if [ $BRANCH == "production" ]; then
  BUCKET=cyf-web
else
  BUCKET=cyf-web-staging
fi

sudo apt-get -y -qq install awscli
aws configure set preview.cloudfront true
aws s3 sync build/ s3://${BUCKET} \
  --acl public-read --delete \
  --cache-control max-age=3600


TIMESTAMP=$(date '+%Y-%m-%d-%H-%M-%S')
sed -i -e "s/__TIMESTAMP__/${TIMESTAMP}/g" ci/invalidation-batch.json

# invalidate cache in cloudfront
aws cloudfront create-invalidation \
    --distribution-id $CLOUDFRONT_DISTRO_ID \
    --invalidation-batch file://ci/invalidation-batch.json

## purge cloudflare cache
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_IDENTIFIER/purge_cache" \
-H "Content-Type:application/json" \
-H "X-Auth-Key:$CLOUDFLARE_API_KEY" \
-H "X-Auth-Email:$CLOUDFLARE_EMAIL" \
--data '{"purge_everything":true}'


