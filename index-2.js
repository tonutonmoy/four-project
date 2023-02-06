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