#!/usr/bin/sh

tag=`git tag --points-at HEAD`
if [ -z $tag ]; then echo "No version tag found."; exit 0; fi
version=`echo $tag | cut -c 2-`
echo tag is $tag
echo version is $version

yarn install
if [ "$?" != 0 ]; then echo "Build Failed"; exit 1; fi

yarn generate-files
if [ "$?" != 0 ]; then echo "Build Failed"; exit 1; fi

yarn docker-tasks build
if [ "$?" != 0 ]; then echo "Build Failed"; exit 1; fi

docker login wh-govspm-docker-local.artifactory.swg-devops.com -u $IBM_DOCKER_USERNAME -p $IBM_DOCKER_PASSWORD
if [ "$?" != 0 ]; then echo "Build Failed"; exit 1; fi

yarn docker-tasks release $version
if [ "$?" != 0 ]; then echo "Build Failed"; exit 1; fi
