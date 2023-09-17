#! /usr/bin/bash

npm init playwright@latest

wait

npx playwright test API_TEST/$1.spec.js --project=chromium --headed
