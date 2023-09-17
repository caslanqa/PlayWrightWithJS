#! /usr/bin/bash

npm init playwright@latest

wait

npm i -D @playwright/test

wait

npx playwright test API_TEST/$1.spec.js --project=chromium --headed
