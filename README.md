# Unit 4 - Lab 1

In today's lab, we're going to build some classes to practice design.

## Getting started
You need to make an `npm` project so you can use fancy things like `npm start` or install a dependency like `nodemon` or `jest`. Remember, to make a new project:

- create a new empty folder
- run `git init` to start your git history
- cd into it
- run `npm init -y`
- add a `start` script into your `package.json`
- run `npm install <package name>` if you want a dependency

You can check *any* of your assignments to see examples of this if you get lost. Or just Google or GPT it! Commit early and often.

# Challenge 1: Animal Kingdom
For this challenge we want you to build an `Animal` class, and then a `Bird` and `Dog` class. What kind of relationship would `Animal` have to those other two? Inheritance? Has Many? Do `Bird` and `Dog` have any direct relationship with each other? Maybe? Maybe not.

- On each class, you must include *at least*
  - 3 instance methods
  - 3 instance properties
  - 2 class methods
  - 1 class property
- You need to incorporate at least 1 polymorphic method on `Bird` and `Dog` (that's relationship hint!).
- `Animal` should know about every animal created, but `Bird` and `Dog` should only know about every bird or dog.
- Each class must be in its own file!

# Challenge 2: Taxis
Create a `TaxiCompany` and `TaxiCar` class. This time let's do the requirements as user stories:

- A taxi company can register many cars
- Each car can only register to one taxi company
- A taxi company can list all its cars
- Each car can show its company
- A taxi can swap from one company to another
- A taxi can be created without *immediately* joining a company
- A taxi company can exist without any taxis
- Each taxi knows how many jobs its driven
-     A taxi company knows the *total* jobs of all cars in its fleet
- A taxi can do a job, which lowers its gas and adds to it's total job count
- A taxi can break down, meaning it can't drive
- A taxi can run out of gas, meaning it can't drive
- A taxi can't take a job if it's farther that the gas tank will carry
- A taxi company can list how many cars are currently functional
- A taxi company knows what city it operates in
- A taxi company can find a car given an id or a license plate number
- The `TaxiCompany` class can find the company with the most jobs driven


# Some questions for you
Ok, we just gave you a lot of information, and since this is a lab, there are no tests. It's up to you to think critically about what methods and properties would make sense and be necessary.

Should each taxi have a make and model? What type of data should be used to store gas info? Gallons and then a separate miles per gallon function to figure out how much gas a trip would burn? Do you save it as miles left in the tank? Should you add another method "fillUpTank" or something? Do animals need ids? How many methods should be shared? What are good methods that any `Animal` would need, but then what might only a `Dog` or `Bird` do? What data should a method return? If nothing is there, should it return `undefined` or `null`, or something like an empty array? What goes on the class and what goes on the instance? Should you add methods or properties not listed here, in order to make your life easier (like an `.getIsFunctional` method that incorporates both fuel tank and broken down data *without* corrupting the source of truth)?

These are questions that you need to start thinking about. As you move into projects on your own, we won't be able to lay out the answers for you. Always ask yourself "What makes sense here?" during each step of building. And things can change! Just be sure that if you change your mind, you do so with a purpose

Don't forget about linting and code style!

## Bonus
So *we* didn't add any tests to this project but **you** sure can. If you finish this project, try installing jest and adding some basic tests.

