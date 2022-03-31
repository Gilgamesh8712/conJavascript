# conJavascript
This is an example javascript application calculating something - it is your task to find out what it is. :nerd_face:

The variables and functions are named a little bit vague on purpose, so that it is not too obvious what the application is doing.

Plase answer the folliwng 10 questions with your own words.

> Please answer the following questions even if you don't know the anwers to all of them.

## Questions

1. How is the `index.html` and `main.js` connected?
    * **Bonus question**: What does `./` mean?
    * index.html is the source of the website and main.js is the source of the javascript code which is integrated there.
    * I am not sure what does ./ mean but I think this source connect the backend code to frontend.

2. What is the purpose of the function `DOMReady` and why is it used?
    * **Bonus question**: Is there an alternative instead of doing it that way?
    * I am not familiar with javascript but it looks like that DOMReady is a method which is imported from a class.
    * I think it is a method from IO (InputOutput) class which enable to read the file with tokens.

3. What is the function `handleCalculation` doing?

This Method initialize the primitive datatype min with from document IO file readed min value and convert it to the integer value.
The same with max value. I think the const datatype is like final datatype from Java which is set to unchangeable. Than it calls checkLimits method -> getCalculationLimit -> calculate and return the value from getCalculationLimit in limit and calculate in result. In the end, it calls
printResult method.

4. What is the function `checkLimits` doing?
    * **Bonus question**: Is there something obsolete in there?
    * This Method check if input min or max is not a number. If not than it will throw an Error Exception which enables to the program do not           crash for instant that file read a String instead of a double,integer etc. And also check if min value is greater than max and throws an           Error. Else it will return true to signals that the inputs are legal.
    * Instad of two if block you can do in all in one like if(!check(min) || !check(max) & (min > max)) and you can set an Exception like
      checkLimits(min,max,) throws e{... throw new e} which you can extends from Exception class and use every time if needed.

5. What is the function `check` doing?
    * **Bonus question**: Is there a better way to do the same?
    * I am not sure if the isNaN function is checking for numbers. isNaN function returns true if value is not a number.
    * check function returns false if value is not a number and true otherwise.
    * You have check function which returns false if a value is not a number and also in the checkLimits function with a double negation.
    * Instead of this you can once check a number with if(!isNaN(max) || !isNaN(min) in checkLimits Method.

6. What is the function `getCalculationLimit` doing?
    * **Bonus question**: Is there something obsolete in there?
    * This function rounds min value up and max value down and return a calculation and rounds down.
    * It calculates a random double from 0 to 1 and multiply the difference with max and min and in the end it add min value.
    * You can set this function with return(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min) which is sufficient.

7. What does the function `calculate` calculate and how is it doing it?
   This function checks and return 0 which is binary equivalent to false if check method returns false if value is not a number.
   And it first check if value is smaller than 2 and returns 1 else it calls a recursive function call n-1 times, if it reach 1 than the recursion    it's finished. Exp. value = 4; 1*2*3*4 which is a factorized recursive function 4! = 24. Recursion calculate in LIFO principle 4 goes first in    the stack than 3 and so on and calculate first with this order 1*2*3*4.

8. What is the function `printResult` doing?
    * **Bonus question**: Is there an alternative for `Intl.NumberFormat`?
    * This function takes the calculated limit and result values and writes down with IO document service and create a limit and result html             objects but I am not sure.

9. Did you manage to run the application on your computer? Which steps were necessary?
I could manage to run the code by jsfiddle.net. 
I only did the main source code with copy and past in JavaScript area and the index.htlml in HTML area and run the code.


10. What is the application doing?
It calculates first the difference between Uper and Lower Limit and multiply with a random number than set the result with factorization. 
If Uper Limit is smaller than Lower Limit than it shows an error like in the checkLimits function.

# Further Information

You can visit us at [concircle.com](https://www.concircle.com/) for further information.
