Create new testing folder (node-tests)

    run $npm init
    
    run $npm i --save-dev mocha (only for dev purposes)

Organize files:
    Put all functions to be tested in utils.js
    Test all function test cases by describing what they should do in utils.test.js
        -Test using mocha's 'it' method to describe behaviours, call utils.function name
        -Store result in a variable, and use if statement to check results or throw error
    
Run tests:

    Run $nodemon --exec 'npm test' to automatically run tests when file changes , include in start scripts
    
    To implement custom start scripts, run $npm run test-watch
    
    Throw errors by making functions in utils.js run incorrectly
    

Assertion Library: jackson
    makes assertions about values: ex if array has elements, type of value
    we want to make assertions on our results (var res)
    
    run $ npm install expect@1.20.2 --save-dev
    run $ npm run test-watch