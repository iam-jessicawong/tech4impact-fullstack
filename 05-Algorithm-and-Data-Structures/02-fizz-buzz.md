A program to prints the number from 1 to n wherein :
- for multiples of `3` print `"Fizz"` instead of the number
- for the multiples of `5` print `"Buzz"` instead of the number
- for numbers which are multiplies of both `3` and `5` print `"FizzBuzz"`
- for numbers not divisible by, `3`, `5`, or `both`, print the number as is
<br><br>

## Pseudocode
```
1. START
2. STORE n with any number
3. SET i = 1
4. WHILE i less than or equal to n
5.    IF i MOD 3 is 0 AND i MOD 5 is 0 THEN
6.      DISPLAY "FizzBuzz"
7.    ELSE IF i MOD 3 is 0 THEN
8.      DISPLAY "Fizz"
9.    ELSE IF i MOD 5 is 0 THEN
10.     DISPLAY "Buzz"
11.   ELSE
12.     DISPLAY i
13.   END IF
14.   ADD i by 1
15. END WHILE
16. FINISH
```
