function isIsogram(str) {
  const lowerCase = str.toLowerCase();
  const strArray = Array.from(lowerCase);
  let bool = true;
  strArray.forEach((element, index, array) => {
    const letter1 = element;
    const letter1Index = index;
    array.forEach((element, index) => {
      if (letter1 + letter1Index !== element + index) {
        if (letter1 === element) {
          bool = false;
        }
      }
    });
  });
  return bool;
}
