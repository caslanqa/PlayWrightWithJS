#! /usr/bin/bash
npx playwright test Reporters.spec.js --project=chromium --headed --reporter=allure-playwright

wait

allure generate allure-results -o allure-report --clean

wait

allure open allure-report

