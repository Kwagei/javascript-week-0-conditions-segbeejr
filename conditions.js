


//  1. Write a program that prints the gratest common divisor of two numbers

    // Answer:
    let number1 = 13;
    let number2 = 48;
    let gcd = prompt("Enter a number: ")

    if(number1 % gcd == 0 && number2 % gcd == 0){
        console.log(gcd + "is correct!");
    }
    else {
        console.log("Not the right GCD")
    }



//  2. write a program that prints the first twelve prime factors of a number

    // Answer:




//  3. Write a program that tells if a number is even or odd

    // Answer:
    let number = prompt("Enter a number: ");

    if (number % 2 == 0){
        console.log(number + "is Even");
    }
    else {
        console.log(number + "is Odd");
    }


//  4. write a program that prints the factorial to a number

    // Answer:




//  5. write a program that prints FIZZ if a number is a multiple of 3, BUZZ if a number is a multiple 
// of 5, FIZZBUZZ if the number is a multiple of both 3 and 5 otherwise print the number.

    // Answer:
    let number = prompt("Enter a number: ");

    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FIZZBUZZ");
    } else if (number % 3 === 0) {
      console.log("FIZZ");
    } else if (number % 5 === 0) {
      console.log("BUZZ");
    } else {
      console.log(number);
    }
