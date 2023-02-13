//두수를 인자로 받아서 더한값을 반환하는 함수를 3가지 방법으로 만들어 보자
function add1(su1, su2){
    return su1 + su2;
}
var add2=function(su1, su2){
    return su1 + su2;
}

var add3 = (su1, su2) => su1+su2;

//리턴하는 값은 변수에 받아서 출력해도 되고 바로해도된다
var sum1 = add1(5,8);
console.log(sum1);

console.log(add2(5,9));

console.log(add3(5,10));