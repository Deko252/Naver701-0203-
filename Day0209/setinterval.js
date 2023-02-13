//setInterval(함수, 시간) 일정시간마다 함수가 호출된다
//변수명 = setInterval(함수,시간) 멈추고싶을때 clearInterval(변수명)

var n=1;
var interval = setInterval(()=>{
    console.log(n + "초가 지났어요");
    n++;
    if(n > 15){
        clearInterval(interval);//interval을 멈추겠다
        console.log("끝?");
    }
    },1000);
