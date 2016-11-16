/**
 * Created by juni0_000 on 2016-11-16.
 */
function myFunc(){
    //현재 html안에 있는 모든 element 들을 다 선택해서 글자색을 red로 변경
    //$(" * ").css("color","red");//모든 걸 다 선택하는 코드, * : selector 중 하나
    //$("h1,input").css("color","red");
    //$("#incheon").remove();
    //$(".myClass").css("background-color","yellow");
    //$("[type=button]").css("color","red");
    //$("div li[id] ")//후손관계
    // $("div > ul > li[id]").css("color","red");//자식관계
    alert($("#incheon + li").text());//형제관계
}