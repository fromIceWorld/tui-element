#!/bin/bash

npm config set registry http://10.11.6.81:8989/nexus/content/groups/npm-all/

npm i

npm run build

