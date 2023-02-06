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