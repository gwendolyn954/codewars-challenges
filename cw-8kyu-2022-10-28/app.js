//Convert number to reversed array of digits

// DESCRIPTION:
// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

// P: Give positive num (also 0). Break that number into an array where each num is an element.  Then reverse that array & return it.

//Make num a string, split string into array, reverse array, return reversed array

//Solution: 
function digitize(n) {
    return String(n).split('').map(Number).reverse()
  }
  