# Steamroller

Flatten a nested array. You must account for varying levels of nesting.

## Rules:
- steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
- Waiting:steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
- Waiting:steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
- Waiting:steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
- Waiting:Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.
- Waiting:Global variables should not be used.