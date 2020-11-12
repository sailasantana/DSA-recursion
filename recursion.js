
/* ==========================================
For each of these exercises, without using any code, 
you are expected to identify the following:
    What is the input to the program?
    What is the output of the program?
    What is the input to each recursive call?
    What is the output of each recursive call?
=============================================== */

/* ======== 1. Counting Sheep ============ */
let number = 3

function counter(number){
//general case
if(number != 0 && number > 0){
   counter(number -1)
   return "Another sheep jumps over the fence"

}
//base case
else return "All Sheep jumped over the fence"

}

counter(number);

//QUESTION
/* ======== 2. Power Calculator ============ */

//how do I make this recursive?

function powerCalculator(n,m){

    //general
    if(m >= 0){
        return n**m
    }
    //base
    else return "exponent should be >= 0"
}

//function power(base, exponent) {
   // if (exponent === 0) {
       // return 1;
    //} else {
        //return base * power(base, exponent - 1);
   // }
//}

//QUESTION
/* ======== 3. Reverse String ============ */

string = "hello"

function reverse(string){
//base
    if (string.length === 1){
        return string 
    }
//general - this will go on forever (I think)
    else  return  string.slice(-1) + reverse(string.slice(0,-1))
}


/* ======== 4. nth Triangular Number ========*/

const nth = function(nDots) {
    if (nDots === 1) {
      return nDots;
    }
    return nDots + nth(nDots - 1);
  };
  
  console.log(nth(5));




/*QUESTION - I'm not sure how to do this without split
or how to make something like this recursive*/
/*========= 5. String Splitter =======*/
const stringSplitter = function(string) {
    result = string.split("/");
    return result;
  };
  
  console.log(stringSplitter("02/20/2020"));

  /*========= 6. Fibonacci  =======*/

  function fibonacci(nth){
      if(nth <= 0 ){
          return "Please enter a number > 0"
      }
      //base
      else if(nth === 1){
          return number
      }
      else if (nth === 2){
          return 1
      }
      //general 
      else return (fibonacci(nth-1) + fibonacci(nth-2))

  }

  fibonacci(4)

  /*======== 7.Factorial =======*/

  function factorial(n){

    if(n == 1 || n == 2){
        return n
    }
    else return num * factorial(num - 1)
    
  }

  factorial (4);

 // QUESTION - need help mending the logic and making it recursive
  /* ======== 8.Maze ========== */

  let maze = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

  //solution RRDDLLDDRRRRRR

  let start = [0][0]
  let current = [x][y]
  let up = [x-1][y]
  let down = [x+1][y]
  let right = [x][y+1]
  let left = [x][y-1]

  //I should only ever need to move either right or down
  //from my start point of [0][0]

  function solveMaze(maze){
      if(current = start){
          return current = [0][1]
      }
      //move to right 
      else if([x][y+1] == ''){
          return current = [x][y+1]

      }
      //move down
      else if ([x][y+1] == '*'){
          return current = [x+1][y]
      }
      //reach exit and complete maize
      else return 'e'
  }