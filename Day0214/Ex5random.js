//난수 중복처리
var nums = new Array(5);
for (var i = 0; i < nums.length; i++) {
    //i번지 배열에 1~10사이의 난수값을 지정한다
    nums[i] = parseInt(Math.random() * 10 + 1);

    //중복처리 : 이전 배열에 같은값이 있옸을 경우 다시 구한다
    for (var j = 0; j<i; j++) {
        if(nums[i] == nums[j]){
            i--;//break후 i++로 이동하므로 일단 1을 빼준다 (다시 제자리로 가게한다)
            break;//현재 for문을 빠져나간다
        }
        
    }
}

console.log(nums);