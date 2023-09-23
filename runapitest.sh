#!/bin/bash


sudo apt-get install zip -y
wait
npm init playwright@latest

wait

npm i -D @playwright/test

wait

npm i allure-playwright

wait

npm install -g allure-commandline --save-dev

wait

npx playwright test API_TEST/$1.spec.js --project=chromium --reporter=allure-playwright

wait

allure generate allure-results -o allure-report --clean

wait

cd /Users/cihanaslan/.jenkins/workspace/playwrighttest/

wait

zip -r test-results/allureReport.zip allure-report/*

wait

mv test-results/allureReport.zip test-results/allureReport.txt