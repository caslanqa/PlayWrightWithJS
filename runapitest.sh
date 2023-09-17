#!/bin/bash

npm init playwright@latest

wait

npm i -D @playwright/test

wait

npm i allure-playwright

wait

npm install -g allure-commandline --save-dev

wait

npx playwright test API_TEST/$1.spec.js --project=chromium --headed

wait

allure generate allure-results -o allure-report --clean