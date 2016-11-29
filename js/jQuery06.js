/**
 * Created by juni0_000 on 2016-11-16.
 */
function myFunc() {
   /*$("ul > li").each(function(idx,item){
       console.log($(item).text() + "입니다.");//문서객체를 jQuery 객체로 변환
   });*/
   $("ul > li").addClass("myStyle");
}
/*each(function(idx,item){}) : 여러개가 선택 되었을때 각각을 인수로 받은 함수를 이용해 처리
1. idx : index 번호   2. item : 현재 선택된 문서객체*/
function inStyle() {
    //현재 선택된 li에 대해서 style을 적용해주면 되요
    console.log("inStyle");
    $(this).addClass("inStyle");
    $(this).removeClass("outStyle");
}
function outStyle(){
    console.log("outStyle");
    $(this).addClass("outStyle");
    $(this).removeClass("inStyle");
}
/*style() : 스타일 변경*/
/*text() : 내용반환*/
/*attr("속성") , attr("속성","값")*/
/*removeAttr("속성")*/

