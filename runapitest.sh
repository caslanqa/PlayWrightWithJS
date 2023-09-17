#! /usr/bin/bash

wait

npx playwright test API_TEST/$1.spec.js --project=chromium --headed
