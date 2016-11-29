/**
 * Created by juni0_000 on 2016-11-15.
 */
/*
 자바 스크립트는 2 phase로 실행된다.
 1 phase : 변수를 찾고 해당 변수를 undefined로 설정
 2 phase : 위에서 부터 한 줄 한 줄 실행
 alert("Warning!!!") 안끄면 그 뒤 코드 실행 안됨
 */


/*javascript
* - 변수를 사용할 수 있어요
* JavaScript 의 데이터 타입은??*/

/** -기본 테이터 타입
 *  -number : 정수와 실수를 구분하지 않아요
 *  -boolean : true, false
 *  -string : "a" =+ 'a'
 *  -undefined
 *  -null : 값이 없다*/


var test1 = 100;//자료형 선언 ㄴㄴ, 걍 var변수, 데이터 타입이 지정되지 않았기 때문에 아무값이나 다 가능
var test2 = true;
var test3 = null;
var test4 = "소리없는 아우성";
var test5;

console.log(typeof(test1));
console.log(typeof(test2));
console.log(typeof(test3));
console.log(typeof(test4));
console.log(typeof(test5));

/* -레퍼런스 데이터 타입
 * -객체 var obj = {}, 변수(property)와 함수(method)로 이루어져있다.*/
var obj = {
    myName : "홍길동",//property
    myAge  : 23,//property
    "my Hobby" : "Over Watch",//키 값에 공백 포함, 하지만 쓰려면 배열형태로 출력, 거의 안씀
    myInfo : function(){}
    //method
};
console.log(obj.myName);
console.log(obj.myAge);
console.log(obj["my Hobby"]);//배열 형태를 통해 (키값은 문자열 형으로) 값에 접근 가능
obj.myInfo();
/*
 JavaScript function
 1. 선언적 함수
 */
function myFunc(temp1,temp2){return temp1 + temp2;}
var result =  myFunc(10,20);
console.log(result);

/*
 2. 익명 함수(람다 함수) , 변수에 저장되는 형태로 존재, 함수를 값의 역할로 사용, 일급함수(first_classes function)
 즉, JavaScript 는 일급함수를 지원하는 프로그래밍 언어다.
 */
var lambda = function(temp1,temp2){return temp1+temp2;}
console.log(lambda(50,50));
