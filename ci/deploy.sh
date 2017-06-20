#!/bin/bash

DATE=$(date +%Y%m%d_%H%M%s)
BRANCH="$1"

if [ "$#" -ne 1 ]; then
	echo "Please provide an environment (demo, staging, production)"
	exit 1
fi

if [ $BRANCH == "staging" ]; then
	REPO_NAME="web-static-staging"
else
	echo "Please provide a valid branch"
	exit 1
fi

## Some weird github pages requirement
echo "$BRANCH.codeyourfuture.co" > ./public/CNAME
##
git clone git@github.com:Code-Your-Future/$REPO_NAME.git
cd $REPO_NAME
git rm -r ./*
cp -a ../build/* .
git config --global user.email "admin@codeyourfuture.co"
git config --global user.name "Automated bot"
git add .
git commit -m "Rebuilt on $DATE"
git push
