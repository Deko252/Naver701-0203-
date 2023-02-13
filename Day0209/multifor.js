//다중 for문에 대해 공부하자
for (var i = 0; i < 3; i++) {
    console.log("Hello Happy");
    for (var j = 0; j < 4; j++) {
        console.log(`\t"Hello Sed"`);
        if( j == 2 ){
            break;
        }
        
    }
}