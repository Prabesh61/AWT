## HTTP Methods
- **GET**: Retrieves data from a server.
- **POST**: Sends new data to the server.
- **PUT**: Updates existing data.
- **DELETE**: Removes data.

**HTTP Status Codes**:
- **200 OK** → Everything worked fine.
- **201 Created** → New data was successfully created.
- **400 Bad Request** → There’s something wrong with the request we sent.
- **404 Not Found** → The thing we asked for doesn’t exist.
- **500 Internal Server Error** → Something went wrong on the server’s side

## CSS Selectors

These are ways to select and style HTML elements using CSS.

- **Element Selector** → The element selector targets all elements of a given type.
  Example: `p { color: red; }`

- **Class Selector** → Targets elements with a class name.
  Example: `.sky { background: blue; }`

- **ID Selector** → Targets one unique element with an ID.
  Example: `#sky { background: black; }`

- **Universal Selector** → Targets every element on the page.
  Example: `* { margin: 0; padding: 0; }`

---

## Git Basics
- `git init` - Initializes a repo.
- `git add .` - Stages all changes.
- `git commit -m "message"` - Saves staged changes.
- `git push` - Uploads to GitHub.
- `git pull` - Downloads updates from remote.
- `git clone` - Copies a remote repo locally.
- `git branch` - Manages branches.

## Callback & Higher-Order Function

- **Callback Function** → A function passed into another function to be executed later.
  - *Example:*  
    ```javascript
    function greet(name, callback) {
      console.log("Hello " + name);
      callback();
    }
    ```

- **Higher-Order Function** → A function that takes another function as an argument or returns a function.
  - *Example:*  
    ```javascript
    function calculate(a, b, operation) {
      return operation(a, b);
    }
    ```

---


## Array Methods
- **filter()** → Creates a new array with only the elements that pass a specific condition.

  **Example:**
  ```javascript
  let numbers = [1, 2, 3, 4, 5];
  let even = numbers.filter(num => num % 2 === 0);
  console.log(even); // [2, 4]

- **map()** → Creates a new array by applying a function to each element of the original array.

  **Example:**
  ```javascript
  let numbers = [1, 2, 3];
  let doubled = numbers.map(num => num * 2);
  console.log(doubled); // [2, 4, 6]

- **forEach()** → Runs a function for each element in the array.  
  It doesn’t return a new array — it just performs the action.

 **Example:**
 ```javascript
 let names = ["Ram", "Shyam", "Hari"];
 names.forEach(name => {
  console.log("Hello " + name);

- **push()** → Adds one or more elements to the end of an array and returns the new length.

  **Example:**
  ```javascript
  let fruits = ['apple', 'banana'];
  fruits.push('orange');
  console.log(fruits);

- **pop()** → Removes the last element from an array and returns that element.

  **Example:**
  ```javascript
  let fruits = ['apple', 'banana', 'orange'];
  let lastFruit = fruits.pop();
  console.log(lastFruit); // Output: 'orange'
  console.log(fruits);
});





