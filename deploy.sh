#!/bin/bash

set -ueo pipefail

SOURCE_REPO=$(pwd)
WEBSITE_REPO=../stupid_website

cd $WEBSITE_REPO
echo $PWD
echo $SOURCE_REPO
git checkout master
git pull origin master
git rm -rf ./*
cd $SOURCE_REPO
yarn build
mv ./build/* $WEBSITE_REPO
cd $WEBSITE_REPO
git add ./*
git commit -m "Deployed current version"
git push
echo "Done!"
