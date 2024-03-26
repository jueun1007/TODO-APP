// 데이터 타입 
// string "가나다" 
// number 1 12 343 
// // boolean 참 거짓 
// true;
// false;
// // null 정의했지만 업는것
// null;  
// // undefined 그냥 아예 정의가 안되어 있는 것 
// undefined;



// // 변수 데이터를 저장해놓는 공간
// height = 180;
// console.log("height"height);
// christ = true;
// // = 대입 연산자

// 나 객체
// - 이름 속성
// - 성별 속성
// - 미혼 속성
// - 나이 속성

// 객체 = 오브젝트
// me = {
//   name: 'jueun'
//   gender: 'female'
//   age: '26'
// }

// you = {
//   name: 'yeaju'
//   gender: 'female'
//   age:'29'
//   address: null
//   sum: sum (메소드라고 칭함)
// }

// // 객체에서 속성접근할 때 . 사용
// you.address;
// me.age;

// 함수 {}
// // // 함수 문법 function 함수이름(input값) {나와야하는 값;}
// function sum(x, y) {
//   result = x + y;
//   return result;
// }

// function hi(name) {
//   console.log("hi~"+name)
// }

// hi ('jueun')
// sumreult = sum (24,49)

// console.log("sumreult", sumreult)

// 조건문
// if (조건) {조건이 참일 때 실행될 코드}
// 조건이 '0', 'null', 'undefined' 일때는 거짓이 됨

// lf
// name = 'jeong'
// if (name == 'lee') {
//   console.log("hi lee");
// } else if (name == "kim"){
//   console.log ("hi kim");
// }else {
//   console.log("hi");
// }

// switch 는 조건이 많을 때
// // switch (변수) {
// //   case 1: console.log('1');
// //   break;}

// name = 'lee'

// switch(name) {
//   case 'lee' :
//   case 'kim' :
//     console.log ('hello');
//     break;
//     default:
//       console.log ("hi")
// }

// == 또는 ===는 비교 연산자

// 변수를 선언하는 방법

// var
// funtion SubmitEvent(a,b) {
//   var num = 2;
//   return (a + b) * num;
// }

// var name = 'park';  var를 쓰는 순간 해당 scope 에서만 표시 그래서 햇갈림

// let
// let name = 'lee';

// const
// const name = 'kim';

// 무조건 const로 변수를 선언하고 나중에 에러가 나면 let으로 변수 선언 
// const는 가장 좁은 scope을 가짐
// const는 한 번 선언 하면 바 꿀 수 없음
// let으로 선언 한 친구들은 변경 가능 가장 가까운 중괄호한에서 scope 영역 설정됨


// 반복문 - for
// for(초기값; 범위; 증감연산;) {
//   반복할 코드
// }

// for (let i = 2; i <= 9; i = +1) {
//   for (let j = 1; j <= 9; j++){
//     console.log(1+ "x" + j + "=" + 1 * j)
//   };
// }


// let a = 1;
// console.log(a++);
// console.log(++a);

// 반복문 - 배열 array
// [1, 2, 3, 4, 5, 6, 7]; - 대괄호 안에 , 로 구분
// [1, "a", true, {name:'lee'}, 1, 2]
// 데이터타입은 아무거나 섞어서 넣어도 무관 심지어 오브젝트도 가능
// // length라는 값을 갖고 있음
// index는 무조건 0부터 순차적으로 올라감
// 무조건 마지막 인덱스는 length에서 +1

// const A = [2,3,4,5,6,7,8,9];
// const b = [1,2,3,4,5,6,7,8,9];
// console.log (A);
// console.log (A.length);
// console.log(A[0]); - 첫번째 요소 부르기
// console.log(A[A.length - 1]); - 마지막 요소 부르기 
// A.push(10)
// console.log(A)


// forEach 는 return을 안함

// const A = [2,3,4,5,6,7,8,9];
// const result = [];

// function fn(elem, idx) {
//   if(elem % 2 === 0){
//     result.push(elem)
//   }
// }
// A.forEach(fn);

// console.log(result);

// filter는 return value "true"만 값이 나옴

// function fa(e) {
//   console.log("e",e);
// }

// A.filter(fa);


// map





// 숙제 //
// for (var i=1; i<=9; i++) {
//   console.log(i + "단")
//   for (var j=1; j<=9; j++){
//     console.log(i + "*" + j + "=" + i*j )
//   }
// }


// const PersonInfo = [
//   {
//     name : 'mike',
//     height : 175,
//     age : 29
//   },
//   {
//     name : 'jane',
//     height : 163,
//     age : 24
//   },
//   {
//     name : 'jessica',
//     height : 158,
//     age : 27
//   },
//   {
//     name : 'james',
//     height : 180,
//     age : 30,
//   },
//   {
//     name : 'kate',
//     height : 170,
//     age : 23
//   }
// ];

// const pass1 =[];
// PersonInfo.forEach((person) => {
//   if (person.height>=165) {
//     pass1.push(person.name);
//   }
// });

// const pass2 = PersonInfo.filter((person) => {
//   return person.age >= 25
// });

// const pass3 = PersonInfo.map((person) => {
//   return person.age 
// });


// console.log(pass1, pass2, pass3)

// const totalHeight = PersonInfo.reduce((accumulator, person) => {
//   return accumulator + person.height;
// },0);

// console.log(totalHeight);