function isIsogram(str) {
    //ignore letter case by converting all to lowercase
    const lowerCase = str.toLowerCase();
    //store string in array
    const strArray = Array.from(lowerCase);
    // boolean set to true until reaches case
    let bool = true;
    // iterate through string array and store values
    strArray.forEach((element, index, array) => {
      //store value of elemnet
      const letter = element;
      //store value of index
      const letterIndex = index;
      //iterate through rerefrenced array from foreach loop.
      array.forEach((element, index) => {
        //if letter and index === element and index do nothing
        //if they don't === do the next statement
        if (letter + letterIndex !== element + index) {
          //if letter is === to element change bool to false
          // otherwise do nothing.
          if (letter === element) {
            bool = false;
          }
        }
      });
    });
    return bool;
  }
  