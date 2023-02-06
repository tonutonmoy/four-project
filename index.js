//problem 1: it's a function where a number taken as a parameter. and that number will multiplication with 3, and plus 10 and  division 2 and at the last from that minus 5 and return the number.



function mindGame(number){
   
   

    if(typeof number !== 'number'){
        return ' please give a number '
    }
 
     let multiplicationNumber=  number * 3;
 
     let additionNumber= multiplicationNumber + 10;
 
     let divisionNumber=  additionNumber / 2	;
 
     let subtractionNumber= divisionNumber - 5;
 
 
     return subtractionNumber
 
   
 
  }
 
  let totalNumber= mindGame(10)
 
 
  console.log(totalNumber)




  //problem 2: it's a function where string taken as a parameter and even or odd will be return.


function evenOdd(input){

    if(typeof input !== 'string'){
        return ' please only string '
    }
 

if( input.length % 2 == 0){
    
    return 'even'
}
else{
    return 'odd'
}
 


}

let result=   evenOdd('tonu')

console.log(result)




//problem 3: it's a function  where parameter taken as a number and from that 7 will minus.whatever result be if it will small than 7 then it will return.and if it will bigger than 7 then it will return with 2 multiplication.


function isLGSeven(input){

    if(typeof input !== 'number'){
        return ' please give a number '
    }
 

    let subtractionNumber= input -7;

    if(subtractionNumber< 7){

        return subtractionNumber;
    }
    else if( subtractionNumber>= 7){

        return subtractionNumber *2;
    }

}

    let resultIsLGSeven= isLGSeven(15);

    console.log(resultIsLGSeven)




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


 
 
 //problem 5: its's a function a where 3 friend's gems will taken as parameter.and it will return  the sum of diamond or the sum of gems 


let firstFriend= 10;

let secondFriend= 20;

let thirdFriend= 30;


function gemsToDiamond(firstInput,secondInput,thirdInput){

  if(typeof firstInput !== 'number' || typeof secondInput!== 'number' || typeof thirdInput !== 'number'){
    return ' please provide all valid numbers '
  }


     let firstInputNumber= firstInput * 21;

     let secondInputNumber= secondInput * 32;

     let thirdInputNumber= thirdInput * 43 ;

     let totalGems= firstInputNumber + secondInputNumber + thirdInputNumber;


     if(totalGems>= 1000*2){
       
        return totalGems - 2000
     }
      else{
        return totalGems ;
      }
     

}



console.log( gemsToDiamond(firstFriend,secondFriend,thirdFriend))


