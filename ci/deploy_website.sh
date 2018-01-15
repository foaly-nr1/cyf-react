#!/bin/bash

BRANCH="$1"
REPO_NAME="$2"
DATE="$3"

## Build
yarn build

## Some weird github pages requirement
if [ $BRANCH == "production" ]; then
	echo "codeyourfuture.io" > ./build/CNAME
else
	echo "$BRANCH.codeyourfuture.io" > ./build/CNAME
fi

##
git clone git@github.com:Code-Your-Future/$REPO_NAME.git
cd $REPO_NAME
git rm -r ./*
cp -a ../build/* .
git config --global user.email "admin@codeyourfuture.io"
git config --global user.name "Automated bot"
git add .
git commit -m "Rebuilt on $DATE"
git push

## purge cloudflare cache
curl -X DELETE "https://api.cloudflare.com/client/v4/zones/$CLOUDFLARE_IDENTIFIER/purge_cache" \
-H "Content-Type:application/json" \
-H "X-Auth-Key:$CLOUDFLARE_API_KEY" \
-H "X-Auth-Email:$CLOUDFLARE_EMAIL" \
--data '{"purge_everything":true}'


