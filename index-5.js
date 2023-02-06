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


