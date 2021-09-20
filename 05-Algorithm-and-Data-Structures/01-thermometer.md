Pseudocode to convert temperature into celcius. With formula :
- `fahrenheit` to `celcius` = `(N - 32) * (5/9)`
- `kelvin` to `celcius` = `(N - 273.15)`
- `celcius` to `celcius` = `N`

## Pseudocode
```
1. START

2. FUNCTION to_celcius(temperature: NUMBER, type: STRING)
3.   IF type equals "Celcius" OR type equals "celcius" THEN
4.      RETURN temperature
5.   ELSE IF type equals "Fahrenheit" OR type equals "fahrenheit" THEN
6.      RETURN (temperature - 32) times (5/9)
7.   ELSE IF type equals "Kelvin" OR type equals "kelvin" THEN
8.      RETURN temperature minus 273.15
9.   ELSE
10.     RETURN "Unknown temperature type"
11.  END IF
12. END FUNCTION

13. STORE temperature with any NUMBER
14. STORE type with any STRING
15. CALL to_celcius(temperature, type)

16. FINISH
```
