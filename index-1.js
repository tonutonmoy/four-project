//problem 1: it's a function where a number taken as a parameter. and that number will multiplication with 3, and plus 10 and division 2 and at the last from that minus 5 and return the number.



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