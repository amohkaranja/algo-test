function is_valid_brackets(string) {
    // Create a stack to store the open brackets.
    const stack = [];
  
    // Iterate over the string.
    for (const character of string) {
      // If the character is an open bracket, push it onto the stack.
      if (character === '(' || character === '{' || character === '[') {
        stack.push(character);
      } else {
        // If the character is a close bracket, check if it matches the top of the stack.
        if (stack.length === 0) {
          // If the stack is empty, the string is invalid.
          return false;
        }
        const top_of_stack = stack.pop();
        if (character === ')' && top_of_stack !== '(') {
          return false;
        } else if (character === '}' && top_of_stack !== '{') {
          return false;
        } else if (character === ']' && top_of_stack !== '[') {
          return false;
        }
      }
    }
  
    // If the stack is empty, the string is valid.
    return stack.length === 0;
  }
  
console.log(is_valid_brackets("(]"))