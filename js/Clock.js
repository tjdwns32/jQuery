var clock;/**
 * Created by juni0_000 on 2016-11-15.
 */
function startClock(){
    /*
     현재시간을 구해요 "2016-11-15 20:10:50" 형식으로
     html div 영역에 출력! 하지만 바로 연결이 안됨.
     */
     //1. html div 영역을 javascript  객체로 바꿔서 들고가기 ( 순수 javascript로만)
     var div = document.getElementById("clockDiv");
     //html element를  javascript 객체(document object)로 변환시키고 변수(div)에 저장
     //document : html 문서의 body부분 지칭
     //1초 마다 반복적으로 현재시간을 구해서 div에 출력
     clock =  window.setInterval(function(){
     //현재시간을 우리나라에 익숙한 형식으로 구해요
     var now = (new Date()).toLocaleString();
     div.innerHTML = now;
     },1000);
     //window.setInterval("반복할 함수 자리(람다 함수),시간(miils));


     //2. jQuery (JavaScript Library)사용해서 해결  write less, do more.

}

function stopClock(){
  window.clearInterval(clock) ;
}