#! /usr/bin/bash
rm -r allure-results | rm -r allure-report

wait

npx playwright test API_TEST/$1.spec.js --project=chromium --headed --reporter=allure-playwright

wait

allure generate allure-results -o allure-report --clean

wait

allure open allure-report
