var a = 0;
while(true){
    a++;
    if(a%2 == 1){
        continue;
    }
    console.log(a);
    if(a==10){
        break;
    }
}
console.log("#반복끝#");