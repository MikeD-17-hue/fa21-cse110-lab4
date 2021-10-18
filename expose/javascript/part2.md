## Part 2. A Little More of a Challenge...
1. it prints 3, since in the beginning of every iteration of the loop it post-increment i by 1 until it is no longer smaller than 3.
2. it prints 150, since it will print the last price after discount in the prices array, because every iteration the program updates the *discountedPrice*.
3. it prints 150, since it is just the rounded version of answers in question 2.
4. it should return all the discounted prices based on the input, namely [50, 100, 150]. Since the original price was [100, 200, 300], and the discount is 50%, this program will apply the discount to all the prices in the array and return the discounted array, which is [50, 100, 150].
5. it will be an error, since i only exist in the scope of the for-loop.
6. it will produce an error since variable *discountedPrice* can be only access in the for-loop, to access it outside of the loop is out of the scope.
7. it will be 150. Because the scope of this variable is the entire function, so it can be accessed. And it will be rounded-discounted price of the last item.
8. it should return all the discounted prices based on the input, namely [50, 100, 150]. Since the original price was [100, 200, 300], and the discount is 50%, this program will apply the discount to all the prices in the array and return the discounted array, which is [50, 100, 150].
9. it will be an error, since i only exist in the scope of the for-loop.
10. it will be 3, since it just returns the length of the argument, which is 3.
11. it should return all the discounted prices based on the input, namely [50, 100, 150]. Since the original price was [100, 200, 300], and the discount is 50%, this program will apply the discount to all the prices in the array and return the discounted array, which is [50, 100, 150]. The const here does not matter since it does not re-assign the variable.
12. 
    1. student.name
    2. student['Grad Year']
    3. student.greeting()
    4. student['Favorite Teacher']['name']
    5. student.courseLoad[0]
13. 
    1. 32, it will be maped into the string representation.
    2. 1, it will treats them as intger arithmatic.
    3. 3, since null has a value of 0 when cast to intger.
    4. 3null, it treats *null* as "null" in string concantenation.
    5. 4, since *true* has value of 0 when case to int.
    6. 0, since *false* and *null* all have value of 0 when cast to a number.
    7. 3undefined, it treats *undefined* as a string during concatenation.
    8. NaN, since *undefined* was treated as NaN, and operations with NaN will be NaN.
14. 
    1. true, since '2' becomes 2.
    2. true, 2 is alphabetically greater than 12 (2 > 1).
    3. true, '2' is converted to 2, compare the values.
    4. false, 2 and '2' are not the same datatype.
    5. false, *true* has a value of 1, which is not the same as 2.
    6. true, Boolean(2) becomes *true* during conversion, and then they are all the same type(boolean).
15. A strict equality operator *===* checks the equality without type conversion, but regular equality check will convert the types for the operand.
17. The result will be [2, 4, 6]. It applys the function callback to the entire array passed in as argument. The function first initialize a new array for the storing the result, then for each element in the argument array, each element is passed in as the argument for the callback function(namely doSomething), this function doubles the value and returns it, then it will push this processed element into the result array, and return the resulting array.
19. 1, 4, 3, 2. 1 and 4 prints without delays, 3 got 0 sec delay but since it involves more time it is after 4, 2 has a 1 sec delay.