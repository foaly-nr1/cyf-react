#!/bin/bash

DATE=$(date +%Y%m%d_%H%M%s)
BRANCH="$1"

if [ "$#" -ne 1 ]; then
	echo "Please provide an environment (demo, staging, production)"
	exit 1
fi

if [ $BRANCH == "staging" ]; then
    export REACT_APP_HOST=$HOST_STAGING
    export REACT_APP_EVENTS_URL="https://ijg1gf9exa.execute-api.eu-west-1.amazonaws.com/staging/events"
    export REACT_APP_STRIPE_PUBLIC_KEY=pk_test_noH4KPBQ7w5U3wZaRVo6NbmS
    export REACT_APP_DONATION_ENDPOINT=https://ivc9bvmb2d.execute-api.eu-west-1.amazonaws.com/production/donate
    export REACT_APP_PIPEDRIVE_ENDPOINT=https://ivc9bvmb2d.execute-api.eu-west-1.amazonaws.com/production/database
    REPO_NAME="web-static-staging"
elif [ $BRANCH == "production" ]; then
    export REACT_APP_HOST=$HOST_PRODUCTION
    export REACT_APP_EVENTS_URL="https://mipzdw4o0c.execute-api.eu-west-1.amazonaws.com/production/events"
    export REACT_APP_STRIPE_PUBLIC_KEY=pk_live_wvm6YFWTG1FrYAGVuzCLIPx8
    export REACT_APP_DONATION_ENDPOINT=https://fsdynf2mse.execute-api.eu-west-1.amazonaws.com/staging/donate
    export REACT_APP_PIPEDRIVE_ENDPOINT=https://fsdynf2mse.execute-api.eu-west-1.amazonaws.com/staging/database

    REPO_NAME="web-static-production"
else
	echo "Please provide a valid branch"
	exit 1
fi

./ci/deploy_website.sh $BRANCH $REPO_NAME $DATE &
./ci/deploy_lambda.sh $BRANCH &

# Ensure fail on Circle-Ci if parallel deployments fail.
for job in `jobs -p`
do
	wait $job || let "FAIL=1"
done

exit $FAIL
