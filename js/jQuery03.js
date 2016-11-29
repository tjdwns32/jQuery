/**
 * Created by juni0_000 on 2016-11-16.
 */
function myFunc() {
    var a = $("#apple").text()///text()안에  인자 있으면 그값으로 바꿈, 없으면 알아내기
   console.log(a);
    console.log($("#pineapple").text());
    console.log($("ul > li.myList").text());
   // console.log($("#uId").val("aaa").val())//입력상자 안의 값을 가져 오는 함수, text()는 태그에서나 작동,변동값은 val()
    console.log($("form > input").attr("id"));//.attr("id","kkk") : id 값을 kkk로 바꾼다
    console.log($("ol > li:first").text());//새로운 선택자(순서) ' : '
    console.log($("ol > li:nth-child(2)").text());
    console.log($("ol > li:last").text());
}