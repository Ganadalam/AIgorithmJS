function solution(nums) {
    return Math.min(new Set(nums).size, nums.length / 2);
}

//  중복 없앤 가짓수 vs N / 2해서 더 작은 것 택
// function solution(nums) {
//     var answer = 0;
    
//     const uniqueTypes = new Set(nums);
//     const maxPick = nums.length / 2;
//     answer = Math.min(uniqueTypes.size, maxPick);
    
//     return answer;
//    
// }