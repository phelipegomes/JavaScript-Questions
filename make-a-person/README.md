# Make a Person
Fill in the object constructor with the following methods below:

```javascript
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(first, last)
```

Run the tests to see the expected output for each method. These methods must be the only available means of interacting with the object. Each test will declare a new Person instance as new Person('Bob', 'Ross').

## Rules:

- You should not change the function signature.
- Waiting:You should not reassign the first parameter.
- Waiting:You should not reassign the last parameter.
- Waiting:No properties should be added. Object.keys(Person).length should always return 6.
- Waiting:You should be able to instantiate your Person object.
- Waiting:Your Person object should not have a firstName property.
- Waiting:Your Person object should not have a lastName property.
- Waiting:The .getFirstName() method should return the string Bob.
- Waiting:The .getLastName() should return the string Ross.
- Waiting:The .getFullName() method should return the string Bob Ross.
- Waiting:The .getFullName() method should return the string Haskell Ross after calling setFirstName('Haskell').
- Waiting:The .getFullName() method should return the string Bob Curry after calling .setLastName('Curry').
- Waiting:The .getFullName() method should return the string Haskell Curry after calling .setFullName('Haskell', 'Curry').
- Waiting:The .getFirstName() method should return the string Haskell after calling .setFullName('Haskell', 'Curry').
- Waiting:The .getLastName() method should return the string Curry after calling .setFullName('Haskell', 'Curry').
- Waiting:The .getFullName() method should return the string Emily Martinez de la Rosa after calling .setFullName('Emily Martinez', 'de la Rosa').
- Waiting:The .getFirstName() property should return the string Emily Martinez after calling .setFullName('Emily Martinez', 'de la Rosa').
- Waiting:The .getLastName() property should return the string de la Rosa after calling .setFullName('Emily Martinez', 'de la Rosa').

