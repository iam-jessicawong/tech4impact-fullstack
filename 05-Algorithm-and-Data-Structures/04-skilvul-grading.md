## Pseudocode
```
1.  START
2.  STORE nilaiAwal with any NUMBER
3.  STORE nilaiAkhir without any value
4.  IF nilaiAwal greater than 100 and less than 0
5.    DISPLAY "Grade range from 0 to 100"
6.  ELSE
7.    IF nilaiAwal < 68 THEN
8.      SET nilaiAkhir = nilaiAwal
9.    ELSE
10.     STORE gap with value (5 - nilaiAwal MOD 5)
11.     IF gap less then 3 THEN
12.       SET nilaiAkhir = nilaiAwal + gap
13.     ELSE
14.       SET nilaiAkhir = nilaiAwal
15.   END IF
16.   DISPLAY nilaiAkhir
17. END IF
```
