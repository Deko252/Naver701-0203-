//임의의 숫자를 구한다 Math.random();
var a = Math.random() * 100;
console.log(a); //0.0000 ~ 0.9999 사이의 실수형 난수 발생

console.log("0 ~ 9 사이의 난수 5개 구하기");
for (var i = 0; i < 5; i++) {
    let r = parseInt(Math.random()*10);
    console.log(r);
}

console.log("0 ~ 99 사이의 난수 5개 구하기");
for (var i = 0; i < 5; i++) {
    let r = parseInt(Math.random()*100);
    console.log(r);
}

console.log("1 ~ 10 사이의 난수 5개 구하기");
for (var i = 0; i < 5; i++) {
    let r = parseInt(Math.random()*10 + 1);
    console.log(r);
}

console.log("1 ~ 45 사이의 난수 5개 구하기");
for (var i = 0; i < 5; i++) {
    let r = parseInt(Math.random()*45 + 1);
    console.log(r);
}