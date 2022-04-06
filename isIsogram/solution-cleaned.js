isIsogram = str => {
  const lowerCase = str.toLowerCase();
  const strArray = Array.from(lowerCase);
  let bool = true;
  strArray.forEach((element, index, array) => {
    const letter = element;
    const letterIndex = index;
    array.forEach((element, index) => {
      if (letter + letterIndex !== element + index) {
        if (letter === element) {
          bool = false;
        }
      }
    });
  });
  return bool;
}
