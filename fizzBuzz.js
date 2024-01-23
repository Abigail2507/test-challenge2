/* **Specific Testing Tasks:**

    a. **FizzBuzz Function:**
       - Develop a function that accepts a number and evaluates the following conditions:
          - If divisible by 3, return 'Fizz'.
          - If divisible by 5, return 'Buzz'.
          - If divisible by both 3 and 5, return 'FizzBuzz'.
          - Otherwise, return the original number. */

          const evaluateNumber =[

          function evaluateNumer1(numdiv) {
            return numdiv % 3 ===0 ? 'Fizz' : numdiv;
          },

           function evaluateNumber2(numdiv2) {
            return numdiv2 % 5 ===0 ? 'Buzz' : numdiv2;
          },

           function evaluateNumer3(numdiv3){
            return numdiv3 % 3 === 0 && numdiv3 % 5 === 0 ? 'FizzBuzz' : numdiv3 ;
          }
        ];
                  
        module.exports = {evaluateNumber1, evaluateNumber2, evaluateNumer3}
          