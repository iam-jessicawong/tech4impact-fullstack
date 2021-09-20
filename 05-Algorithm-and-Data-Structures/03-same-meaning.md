Pseudocode program to check if 1 value is palindrome

## Pseudocode
```
1.  START

2.  DECLARE FUNCTION palindrome(word: STRING)
3.    SET word to lowercase
4.    remove spaces from word and STORE to word
5.    SET j = 0
6.    FOR i = word length - 1 to 0 DO
7.      IF word[i] not equals word[j] THEN
8.        RETURN FALSE
9.      ADD j by 1
10.      SUBTRACT i by 1
11.   END FOR
12.   RETURN TRUE
13. END FUNCTION

13. STORE word with any STRING
14. STORE result without any value
15. CALL palindrome(word) and STORE to result
16. DISPLAY result

15. FINISH
```
