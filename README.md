# Cypress-e2e

If we want to run a first test, we should:
1. create a new job/build
2. enter name of project 
3. General - advanced - use custom workspace:
      I. directory - (command line **pwd**)
      II. display name - whatever you want. Also, Cypress was a great idea
4. Build Env - add buils step - execute (command line):
      first: > npm i 
      second: > **npm run cy:run** (package.json - "cy:run": "cypress run")
6. Save

Then, find on the left navbar menu Build Now and click 

If you have a error like - cypress verification timed out. this command failed with the following output

Open node_modules\cypress\lib\tasks\verify.js, search for VERIFY_TEST_RUNNER_TIMEOUT_MS and change it from 30000 (default) to **100000**.

Save the file, then try to restart your test again.

