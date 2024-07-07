let names = ["Steven Paul Jobs",
    "Bill Gates",
    "Mark Eliot Zuckerberg",
    "Elon Musk",
    "Jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein"
]

// 1. map 문제
// let data1 = names.map((item) => {
//     return item.toUpperCase()
// }) 
// console.log(data1)

// let data2 = names.map((item) => item.split(' ')[0])
// console.log(data2)

// let data3 = names.map((item) => item.split(''))
// console.log(data3)



// 2. filter 문제
// let data4 = names.filter((item) => item.includes("a"))
// console.log(data4)

// let data5 = names.filter()


// 3. some 문제
// let data5 = names.some((item) => item.length>=20)
// console.log(data5)

// let data6 = names.some((item) => )


// 4. every 문제
// let data7 = names.every((item) => item.length>=20)
// console.log(data7)

// let data8 = names.every(item => item.includes("a"))
// console.log(data8)


// 5. find 문제
let data9 = names.find(item => item.length >= 20)
console.log(data9)