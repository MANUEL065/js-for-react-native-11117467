# js-for-react-native-11117467

# Array Manipulation and User Profile Creation

This project involves three main tasks focused on array manipulation and creating user profiles using JavaScript.

## Task 1: Array Manipulation

### processArray Function
- File: arrayManipulation.js
- Function: processArray
- Description: 
  - This function takes an array of numbers as an argument.
  - It returns a new array where each even number is squared and each odd number is tripled.
- Example:
  ```javascript
  const examScores = [50, 39, 65, 70, 85, 90, 43, 100];
  const processedNumbers = processArray(examScores);
  console.log(processedNumbers); // Output: [2500, 117, 195, 4900, 255, 8100, 129, 10000]

## Task 2: formatArrayStrings Function
- File: arrayManipulation.js
- Function: formatArrayStrings
- Description:
- This function takes two arrays as arguments: an array of strings and an array of numbers processed by processArray.
- It modifies each string based on its corresponding number: capitalizing the entire string if the number is even, and converting the string to lowercase if the number is odd.

## Task 3: User Profile Creation

# createUserProfiles Function
- File: userInfo.js
- Function: createUserProfiles
- Description:
- This function takes an array of names and an array of modified names from formatArrayStrings.
- It returns an array of objects, each containing originalName, modifiedName, and id (auto-incremented starting from 1).
  
