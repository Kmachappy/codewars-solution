// function isIsogram(str){
//     //toLowerCase
//     const lowerCase = str.toLowerCase()
//   //   console.log(lowerCase)
//     //store in array
//     const strArray = Array.from(lowerCase)
//   //   console.log(strArray)
//     strArray.forEach( (element, index, array) =>{
//   //       console.log(element + " " + index)
//       const letter1 = element
//       const letter1Index = index
//       console.log(`~letter1: ${letter1} index: ${letter1Index}`)
//       array.forEach((element, index)=>{
//         console.log(element + index)
//         if(letter1 + letter1Index === element + index){
//             if(letter1 + letter1Index === element + index){
//               console.log("false")
//             }
//           }
//         else{
//             console.log("true")
//             return true
//           }
//   //       console.log(`letter1: ${letter1}`)
//   //       while()

//       })
//   //     console.log(array)
//   //     if(element )
//     })

// }//compare values in array

//     //grab index of on value in the array then loop to check through the rest of the string
//   //   ignore its own index
//   //   return x || y

function isIsogram(str) {
    //ignore upper or lowe case by making string all lowercase
    const lowerCase = str.toLowerCase();
    //store string in array
    const strArray = Array.from(lowerCase);
    // bool var that is set to true until it come into false case
    let bool = true;
    //loop through  string array
    strArray.forEach((element, index, array) => {
      //store  element
      const letter1 = element;
      //store index
      const letter1Index = index;
  
      console.log(`~letter1: ${letter1} index: ${letter1Index}`);
      //loop through array again
      array.forEach((element, index) => {
        console.log(element + index);
  
        if (letter1 + letter1Index !== element + index) {
          if (letter1 === element) {
            console.log("false");
            bool = false;
          } else {
            console.log("true");
            //bool = true
            //return bool
          }
        }
      });
    });
    return bool;
  }
  