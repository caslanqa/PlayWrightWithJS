#!/bin/bash
rm -r allure-report | rm -r allure-results | rm -r test-results/*.*

wait

sudo apt-get install zip -y

wait

npm init playwright@latest

wait

npm i -D @playwright/test

wait

npx playwright test API_TEST/$1.spec.js --project=chromium

wait

allure generate allure-results -o allure-report --clean

wait

cd /Users/cihanaslan/.jenkins/workspace/playwrighttest/

wait

zip -r test-results/allureReport.zip allure-report/*