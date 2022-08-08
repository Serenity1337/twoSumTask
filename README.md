In order to run the project, you have to first - npm install, to install the jest package, then you run the tests by running this command - npm run test.

TL;DR I tried to cover most of the possible edge cases with the tests.

The first test was used to test if we would have any weird behavior with negative numbers.

The second test was to check if our algorithm works with positive numbers as expected.

The third test is to check what happens if we pass an array of numbers with no available target sum.

The fourth test is just to check what happens if we pass wrong parameters and see if our algorithm crashes or not.
