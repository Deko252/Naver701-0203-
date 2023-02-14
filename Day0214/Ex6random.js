var arr = new Array();
arr.push("안녕하세요");
arr.push("아니요");
arr.push("네");
arr.push("안녕");
arr.push("세요");

//setInterval 을 0.5초마다 위의 문자열중 한개씩 돌아가며 출력되도록 프로그램을 작성하세요.
// setInterval(() => {
//     var r = parseInt(Math.random() * arr.length);
//     console.log(arr[r]);
// } , 1000);

setInterval(function() {
    var r = parseInt(Math.random() * arr.length);
    console.log(arr[r]);
} , 1000);