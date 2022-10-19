//Reversed Strings
//Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow

function solution(str){
    return str.split("").reverse().join("");
  }

  //The string is split & retuns a new array, the reverse method is used to reverse the newly created array, then the join method is used to join all elements of the array into a string :)

  