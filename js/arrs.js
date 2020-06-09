let arrayA = [{ "displayName": "John" }, { "displayName": "Sandra" },{ "displayName": "Peter" }]
let arrayB = [{ "name": "Bobby" }, { "name": "John" }, { "name": "Sandra" }]

arrayB = arrayB.map((key) => key.name)
console.log(arrayB)
arrayA = arrayA.filter((key) => arrayB.includes(key.displayName))
	.map((key) => key.displayName)
console.log(arrayA)