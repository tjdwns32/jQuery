/**
 * Created by juni0_000 on 2016-11-16.
 */
function myFunc(){
    //현재 html안에 있는 모든 element 들을 다 선택해서 글자색을 red로 변경
    $(" * ").css("color","red");
    $("h1,input").css("color","red");
    $("#incheon").remove();
    $(".myClass").css("background-color","yellow");
    $("[type=button]").css("color","red");
    $("div li[id] ")//후손관계
    $("div > ul > li[id]").css("color","red");//자식관계
    alert($("#incheon + li").text());//형제관계
}
<!--* selector => 문자열, 내가 제어하고자하는 html element를 선택해서 jQuery객체로 바꾼다. -->
<!--document object(문서 객체)와는 별개이고, 따라서 적용되는 메소드도 다르다-->
<!--* 1. 전체 선택자 (selector) : *-->
<!--* 2. 태그 선택자 :-->
<!--* 3. ID 선택자 : #-->
<!--* 4. class 선택자 : .-->
<!--* 5. 속성 선택자 : []-->
<!--* 6. 구조 선택자 : >(자식관계) , 공백(space)(후손관계)-->
<!--selector 이후에 원하는 작업을 위해 method를 적용한다.-->