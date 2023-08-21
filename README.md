```
Describe: subAlgo();

Test 1: It should take a number and split it into an array.
Code:
const userInput = "5"
subAlgo(userInput);
Expected Output:
["1", "2", "3", "4", "5"]

Test 2: It should replace 1 with a string, within the array.
Code:
const userInput = "5"
subAlgo(userInput);
Expected Output:
[0, "a", 2, 3, 4, 5]

Test 3: It should replace 2 with a string, within the array.
Code:
const userInput = "5"
subAlgo(userInput);
Expected Output:
[0, 'a', 'b', 3, 4, 5]

Test 4: It should replace '3' with a string, within the string.
Code:
const userInput = "5"
subAlgo(userInput);
Expected Output:
'0, a, b, c, 4, 5'

Test 5: It should replace 'a0' with 'a'.
Code:
const userInput = "10"
subAlgo(userInput);
Expected Output:
'0, a, b, c, 4, 5, 6, 7, 8, 9, a'

Test 6: It should replace 'aa' with 'a'.
Code:
const userInput = "11"
subAlgo(userInput):
Expected Output:
'0, a, b, c, 4, 5, 6, 7, 8, 9, a, a'

Test 7: It should replace 'ab' with 'b'.
Code:
const userInput = "12"
subAlgo(userInput):
Expected Output:
'0, a, b, c, 4, 5, 6, 7, 8, 9, a, a, b'

Test 8: It should replace 13 (or ac) with 'c'.
Code:
const userInput = "13"
subAlgo(userInput);
Expect Output:
'0, a, b, c, 4, 5, 6, 7, 8, 9, a, a, b, c'

Test 9: It should replace 'a' with 'Beep!', 'b' with 'Boop!', 'c' with 'Won't you be my neighbor?'
Code:
const userInput = "15"
Expected Output:
0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!"

```