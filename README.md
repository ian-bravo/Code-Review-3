# _Mr Roboger's Neighborhood - Code-Review-3_

#### By _**Ian Bravo**_

#### _This website turns the user's inputted number into a string of numbers with fun quotes!_

## GitHub Page ##

https://ian-bravo.github.io/Code-Review-2/


## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_


## Description

This webpage will ask the User five questions to generate results to be displayed after clicking submit. After submitting, the results are displayed. The results are formed from a specific set of answers. There is an option to show what the specific combinations are by hovering over a box-area.

## Setup/Installation Requirements

1. Open Terminal.
2. Change your directory to where you would want the cloned directory.
3. Input the following command into your terminal:  
 _git clone https://github.com/ian-bravo/Code-Review-3_
4. Navigate to the top level of this newly cloned directory.
5. Open index.html in your browser to view the webpage. 


## Known Bugs

* _No known bugs_


## License

MIT License  

Copyright (c) 18-Aug-2023 Ian Bravo  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



_For questions or concerns, please email me at bravo.ian@gmail.com_


## Tests - Business Logic
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