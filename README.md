[My Notes](https://www.notion.so/Javascript-d9c809b647e8447d858fff23e8d89c93)

# Javascript

JS does not require semicolons or indentation

- Introduction

    **Comments**

    ```jsx
    // This is a comment

    /*  
    This is a
    multiline
    comment
    */
    ```

    **Print messages**

    ```jsx
    console.log('Hi there!');
    // Prints: Hi there!
    ```

    **Typeoff**

    ```jsx
    let newVariable = 'Playing around with typeof.';

    console.log(typeof newVariable)
    // pints "string"
    ```

    **Library.method**

    ```jsx
    // Returns a number between 0 and 1
    Math.random();
    ```

    **Numbers**

    ```jsx
    let amount = 6;
    let price = 4.99;
    ```

    **Booleans**

    ```jsx
    let lateToWork = true;
    ```

    **Null**

    ```jsx
    let x = null;
    ```

- Strings

    ```jsx
    let message = 'good nite';
    let double = "Wheres my bandit hat?";

    console.log(message.length);
    // Prints: 9
     
    console.log('howdy'.length);
    // Prints: 5
    ```

    **String Concatenation**

    using the `+` operator

    **String Interpolation**

    ```jsx
    let age = 7;
     
    // String concatenation
    'Tommy is ' + age + ' years old.';
     
    // String interpolation
    `Tommy is ${age} years old.`;
    ```

    **Template Literals**

    **Allow embedded expressions, `${expression}`. While regular strings use single `'` or double `"` quotes, template literals use backticks ` instead.**

    ```jsx
    let name = "Codecademy";
    console.log(`Hello, ${name}`); 
    // Prints: Hello, Codecademy
     
    console.log(`Billy is ${6+8} years old.`); 
    // Prints: Billy is 14 years old.
    ```

    **String Methods**

    ```jsx
    console.log('hello'.toUpperCase()); // Prints 'HELLO'
    console.log('Hey'.startsWith('H')); // Prints true

    // Use .toUpperCase() to log 'Codecademy' in all uppercase letters
    console.log('Codecademy'.toUpperCase());

    // Use a string method to log the following string without whitespace at the beginning and end of it.
    console.log('    Remove whitespace   '.trim());
    ```

- Basic Maths

    ```jsx
    // Addition
    5 + 5
    // Subtraction
    10 - 5
    // Multiplication
    5 * 10
    // Division
    10 / 5
    // Modulo
    10 % 5

    // calculates # of weeks in a year, rounds down to nearest integer
    const weeksInYear = Math.floor(365/7);

    // Round up
    console.log(Math.ceil(43.8))

    // Is integer?
    console.log(Number.isInteger(2017))
    ```

    Assignment Operators

    - `+=` addition assignment
    - `=` subtraction assignment
    - `=` multiplication assignment
    - `/=` division assignment

    ```jsx
    let number = 100;
     
    // Both statements will add 10
    number = number + 10;
    number += 10;
    ```

- Declaring Variables
    - `var` is used in pre-ES6 versions of JavaScript.

        ```jsx
        var favoriteFood = 'pizza'
        ```

    - `let` is the preferred way to declare a variable when it can be reassigned. A let variable will contain `undefined` if nothing is assigned to it.

        ```jsx
        let count; 
        console.log(count); // Prints: undefined
        count = 10;
        console.log(count); // Prints: 10
        ```

    - `const` is the preferred way to declare a variable with a constant value. Any attempt of re-assigning a `const` variable will result in JavaScript runtime error.
- Conditionals
    - **Logical Operator**

        ```jsx
        true || false;        // true
        10 > 5 || 10 > 20;    // true
        false || false;       // false
        10 > 100 || 10 > 20;  // false

        true && true;      // true
        1 > 2 && 2 > 1;    // false
        true && false;     // false
        4 === 4 && 3 > 1;  // true
        ```

        ```jsx
        let lateToWork = true;
        let oppositeValue = !lateToWork;
         
        console.log(oppositeValue); 
        // Prints: false
        ```

    - **Comparison**
        - `===` strict equal
        - `!==` strict not equal
        - `>` greater than
        - `>=` greater than or equal
        - `<` less than
        - `<=` less than or equal
    - **Ternary Operator**

        condition followed by a `?` operator, and then two expressions separated by a `:`

        If the condition evaluates to true, the first expression is executed, otherwise, the second expression is executed.

        ```jsx
        let price = 10.5;
        let day = "Monday";
         
        day === "Monday" ? price -= 1.5 : price += 1.5;
        ```

    - **Else/else if**

        ```jsx
        const size = 10;
         
        if (size > 100) {
          console.log('Big');
        } else if (size > 20) {
          console.log('Medium');
        } else if (size > 4) {
          console.log('Small');
        } else {
          console.log('Tiny');
        }
        // Print: Small
        ```

    - **Switch**

        checking an expression against multiple `case` clauses (executing code after `:`, finishing with `break`)

        ```jsx
        const food = 'salad';
         
        switch (food) {
          case 'oyster':
            console.log('The taste of the sea 🦪');
            break;
          case 'pizza':
            console.log('A delicious pie 🍕');
            break;
          default:
            console.log('Enjoy your meal');
        }
         
        // Prints: Enjoy your meal
        ```

- Functions

    ```jsx
    // The parameter is name
    function sayHello(name) {
      return `Hello, ${name}!`;
    }
    ```

    - **Arrow Functions**

        ```jsx
        // Arrow function with two arguments 
        const sum = (a, b) => { 
          return a + b; 
        }; 
        console.log(sum(2,5)); // Prints: 7

        // Arrow functions with a single argument 
        const checkWeight = weight => { 
          console.log(`Baggage weight : ${weight} kilograms.`); 
        }; 
        checkWeight(25); // Prints: Baggage weight : 25 kilograms.
        ```

    - **Functions as variables**

        ```jsx
        let plusFive = (number) => {
          return number + 5;  
        };
        // f is assigned the value of plusFive
        let f = plusFive;
         
        plusFive(3); // 8
        // Since f has a function value, it can be invoked. 
        f(9); // 14
        ```

    - **Callback Function**

        a function passed into another as an argument

        ```jsx
        const isEven = (n) => {
          return n % 2 == 0;
        }
         
        let printMsg = (evenFunc, num) => {
          const isNumEven = evenFunc(num);
          console.log(`The number ${num} is an even number: ${isNumEven}.`)
        }
         
        // Pass in isEven as the callback function
        printMsg(isEven, 4); 
        // Prints: The number 4 is an even number: True.
        ```

    - **Higher Order Functions**

        a function that accepts functions as parameters and/or returns a function

- Scope
    - *Global* scope (declared outside all {}, global variables should be kept to a minimum)
    - *File* or *module* scope (the value/function can only be accessed from within the file)
    - *Function* scope (only visible within the function),
    - *Code block* scope (only visible within a `{ ... }` codeblock)

    `const` and `let` are block scoped variables

    ```jsx
    const isLoggedIn = true;
     
    if (isLoggedIn == true) {
      const statusMessage = 'User is logged in.';
    }
     
    console.log(statusMessage);
     
    // Uncaught ReferenceError: statusMessage is not defined
    ```

- Arrays

    ```jsx
    const myArray = [100, 200, 300];

    myArrat.length // 3
    console.log(myArray[1]); // 200
    ```

    - .push() adds elements to the end

        ```jsx
        // Adding a single element:
        const cart = ['apple', 'orange'];
        cart.push('pear'); 
         
        // Adding multiple elements:
        const numbers = [1, 2];
        numbers.push(3, 4, 5);
        ```

    - .pop() removes and returns last element

        ```jsx
        const ingredients = ['eggs', 'flour', 'chocolate'];
         
        const poppedIngredient = ingredients.pop(); // 'chocolate'
        console.log(ingredients); // ['eggs', 'flour']
        ```

- Loops
    - **Increment & Decrement**

        ```jsx
        let a = 10;
        a++;
        console.log(a); // Output: 11

        let b = 20;
        b--;
        console.log(b); // Output: 19
        ```

    - **While**

        ```jsx
        let i = 0;
         
        while (i < 5) {        
          console.log(i);
          i++;
        }
        ```

    - **Do ... While**

        executes a block of code once, checks if a condition is true, and then repeats the loop as long as the condition is true

        always executes at least once

        ```jsx
        x = 0
        i = 0
         
        do {
          x = x + i;
          console.log(x)
          i++;
        } while (i < 5);
         
        // Prints: 0 1 3 6 10
        ```

    - **For**
        - **Reverse loop**

            ```jsx
            const items = ['apricot', 'banana', 'cherry'];
             
            for (let i = items.length - 1; i >= 0; i -= 1) {
              console.log(`${i}. ${items[i]}`);
            }
             
            // Prints: 2. cherry
            // Prints: 1. banana
            // Prints: 0. apricot
            ```

        - **Array loop**

            ```jsx
            for (let i = 0; i < array.length; i++){
              console.log(array[i]);
            }
             
            // Output: Every item in the array
            ```

    - **Break**

        exits loop immediately

        ```jsx
        for (let i = 0; i < 99; i += 1) {
          if (i > 5) {
             break;
          }
          console.log(i)
        }
         
        // Output: 0 1 2 3 4 5
        ```

- Iterators
    - **array.reduce()**

        a callback function that iterates through an array and returns a single value

        - `(accumulator, currentValue)` as arguments
            - `accumulator` value returned by last iteration
            - `currentValue` current element being read

        ```jsx
        const arrayOfNumbers = [1, 2, 3, 4];
         
        const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {  
          return accumulator + currentValue;
        });
         
        console.log(sum); // 10
        ```

    - **array.forEach()**

        executes a callback function on each of the elements

        ![Javascript%20817e3c308b47420896b8a32f5f670088/Untitled.png](Javascript%20817e3c308b47420896b8a32f5f670088/Untitled.png)

        ```jsx
        const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

        // Iterate over fruits below
        fruits.forEach(fruit => {console.log(`I want to eat a ${fruit}`)})ere, the callback function containing console.log() will be executed 5 times
        ```

    - **array.filter()**

        ```jsx
        const randomNumbers = [4, 11, 42, 14, 39];
        const filteredArray = randomNumbers.filter(n => {  
          return n > 5;
        });
        ```

    - **array.map()**

        like list comprehension, takes an arrow function as an argument

        ```jsx
        const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];
         
        const announcements = finalParticipants.map(member => {
          return member + ' joined the contest.';
        })
         
        console.log(announcements);
        ```