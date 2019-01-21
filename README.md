# Messly
## JavaScript Developer Assessment

### Introduction

To support our on-boarding process for new JavaScript developers, this
technical assessment helps us to gauge your technical ability and understanding
against our preferred way of working, via a short exercise to create a data
visualisation component, written in React.

The challenge is to make an application that takes data from JavaScript generator
functions and visualises them on the screen. There are both front-end and back-end
components to the challenge, and it is sufficiently open-ended to allow you to
attempt as much or as little as you feel able to.

While there is no time limit, we estimate that the entire challenge should take somewhere between 4-8 hours to complete. If you attempt only the front-end portion, expect it to take between 2-4 hours.

#### Why we assess candidates

Before we ask you spend time on a technical assessment, I think it's important to explain
what it is that we're looking for, and how it feeds into our decision making
process.

This test is designed to assess your ability to do the following:

1. To read and write JavaScript. Quite important really ;)
2. To read a README to find instructions
3. To read and follow online technical references
4. To understand requirements from reading unit tests
5. To iteratively improve your code using test-driven development
6. To create front-end components using React
7. To show initiative in interpreting product requirements and finding solutions
8. To present your work in a professional way
9. To work with git and source control
10. Have fun creating new code!

This isn't a 'test', in the sense that you can do something wrong. We want to
see how far you get, how long you spend on it and how enthusiastically you take on the challenge. We'll consider this against your background and experience; so if you're a junior and only get part-way through, that's great! It tells us what you already know and how much input you'll need from us.

Finally, we promise that we'll reciprocally feedback on your work, and will discuss it in the next interview stage.

### Getting Started

#### Requirements

- You'll need a working version of node.js installed with npm.
- You'll need a GitLab account to fork the repository into.

#### Install

1. Fork the repository into your own GitLab remote and clone a local copy.
2. To setup the dependencies: `npm install`

#### Running the tests

`npm test`

Alternatively, you can run individual parts of the unit test at a time, using
a partial match of the test name. E.g. to run the first combined generator test:

`npm test -- -t "with no generators"`

#### Running the application

This command opens the default 'Hello World' React app on [http://localhost:3000](http://localhost:3000)

`npm start`

## TODO

The challenge is to create a data visualisation application. Attempt as much as
you feel comfortable doing. If you are only attempting the front-end, skip to
the [front-end](#front-end) part of the exercise.

### Back-end

Your task is to create a generator function that takes an arbitrary number of
ordered iterable objects, and emits their values in ascending order. We're
assuming that the input interables contain only numeric values in ascending order.
The sequences can be either finite, such as an array, or infinte.

1. Read the unit tests in the `src/__test__` folder. We've implemented two
generator functions that generate the Fibonacci sequence and triangle numbers.

2. Read the documentation on [iterator protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) and [generator functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*). You'll most probably need to refer back to these later.

3. Read the specification in the `src/__test__/combined_ordered_generator_test.js`. You can run the test using `npm test`. Implement the generator in `src/lib/generators/combined.js`, to make the tests pass. Attempt each test in order, and refactor as you go, rather than attempting to satisfy all the conditions at once. The tests start off relatively easy, before getting more complicated. Implement as much as you can.

### <a name="front-end"></a> Front-end

Your task is to create a React component that visualises the data that the
generators emit, in a user-friendly way. You have got some creative license here,
to deliver on the following user requirements as you interpret them.
As before, they start relatively easy and get more involved.

* A user should see the values of the Fibonacci sequence up to 10
* A user should see the values of the Triangle numbers sequence up to 10
* A user should see the combined values of the Fibonacci and Triangle numbers sequence up to 10 (if you implemented the above)
* A user should see the values of a sequence in a scatter or line chart
* A user should be able to toggle whether a sequence is displayed or not
* A user should be able to set the number of displayed values in the sequence
* A user should see an error message if they set the number of displayed values above 200, or below 0
* A user should see the data on a mobile or a desktop device

Once you've implemented as much as you can, apply some CSS to make it look presentable.

### General Points

- The exercise was created using [create react app](https://github.com/facebook/create-react-app). The source code lives in `src/`, with the unit tests in `src/__test/`
- You can use any extra library / tool that you see fit

## Submission

Once you've finished the assignment, please submit a [merge request](https://docs.gitlab.com/ee/gitlab-basics/add-merge-request.html). We'll aim to review and get back to you within 24 hours with next steps.

## Questions?

If you have any questions about the exercise, please contact dan@messly.co.uk