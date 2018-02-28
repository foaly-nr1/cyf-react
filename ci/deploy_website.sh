#!/bin/bash

BRANCH="$1"
REPO_NAME="$2"
DATE="$3"

## Build
yarn build

## Some weird github pages requirement
export AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID
export AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY
aws s3 cp build/ s3://cyf-web --acl public-read  --recursive

## purge cloudflare cache
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_IDENTIFIER/purge_cache" \
-H "Content-Type:application/json" \
-H "X-Auth-Key:$CLOUDFLARE_API_KEY" \
-H "X-Auth-Email:$CLOUDFLARE_EMAIL" \
--data '{"purge_everything":true}'


