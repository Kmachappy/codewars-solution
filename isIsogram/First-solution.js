function isIsogram(str){
    const lowerCase = str.toLowerCase()
    const strArray = Array.from(lowerCase)
    let bool = true
      strArray.forEach( (element, index, array) =>{
        const letter1 = element
        const letter1Index = index
        
        console.log(`~letter1: ${letter1} index: ${letter1Index}`)
      array.forEach((element, index)=>{
        console.log(element + index)  
        if(letter1 + letter1Index !== element + index){
  //         console.log("dupe")
            if(letter1  === element ){
              console.log("false")
              bool = false
              
              
            }else{
            console.log("true")
  //             bool = true
  //           return bool
           }  
        } 
      })
   
    })
    return bool
  }
  
  
  