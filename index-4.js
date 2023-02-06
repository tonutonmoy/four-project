//problem 4: it's a function where array taken as a parameter.and return the sum of negative numbers.


let age=[11,27,25,-1,45,-19,30,-2]

function findingBadData(array){

   if(Array.isArray(array) === false){
      return `it's not an array`
  }

     let count=0;
    for(let i of array){
       
       if(i<0){

        count++
        
       }
    }

 return count;
}

 let totalBadData= findingBadData(age)

 console.log(totalBadData)


 