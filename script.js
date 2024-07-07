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
// * 모든 이름을 대문자로 바꾸어서 출력하시오.
// let data1 = names.map((item)=>item.toUpperCase())
// console.log(data1)

// * 성을 제외한 이름만 출력하시오.
// let data2 = names.map((item)=>item.split(' ')[0])
// console.log(data2)

// * 이름의 이니셜만 출력하시오.
// let data3 = names.map((item) => {
//     let splitName = item.split(" ");
//     let data3 = "";
//     splitName.forEach((nameItem) => (data3 += nameItem[0]));
//     return data3;
//   })
// console.log(data3)


// 2. filter 문제
// * 이름에 a를 포함한 사람들을 출력하시오.
// let data4 = names.filter((item) => item.includes("a"))
// console.log(data4)

// * 이름에 같은 글자가 연속해서 들어간 사람을 출력하시오.
// let data5 =  names.filter((item) => {
//     let splitName = item.split("");
//     return splitName.some((letter, index) => letter == splitName[index + 1]);
//   })
// console.log(data5)


// 3. some 문제
// * 전체 이름의 길이가 20자 이상인 사람이 있는가?
// let data6 = names.some((item) => item.length >= 20);
// console.log(data6);

// * 성을 제외한 이름에 p를 포함한 사람이 있는가?
// let data7 = names.some((item) => {
//     let firstName = item.split(" ").slice(0, -1).join(" ");
//     return firstName.toLowerCase().includes('p');
// });
// console.log(data7); 

// 4. every 문제
// * 모두의 전체 이름의 길이가 20자 이상인가?
// let data8 = names.every((item) => item.length>=20)
// console.log(data8)

// * 모두의 이름에 a가 포함되어 있는가?
// let data9 = names.every((item) => item.toLowerCase().includes('a'));
// console.log(data9);  

// 5. find 문제
// * 전체 이름의 길이가 20자 이상인 사람을 찾으시오.
// let data10 = names.find((item) => item.length >= 20);
// console.log(data10);

// * 미들네임이 포함되어 있는 사람을 찾으시오.
// let data11 = names.find((item) => {
//     let nameParts = item.split(" ");
//     return nameParts.length > 2;
// });
// console.log(data11);

// 6. findIndex 문제
// * 전체 이름의 길이가 20자 이상인 사람의 인덱스 번호를 찾으시오.
// let data12 = names.findIndex((item) => item.length >= 20);
// console.log(data12); 

// * 미들네임이 포함되어 있는 사람의 인덱스 번호를 찾으시오.
// let data13 = names.findIndex((item) => {
//     let nameParts = item.split(" ");
//     return nameParts.length > 2;
// });
// console.log(data13); 