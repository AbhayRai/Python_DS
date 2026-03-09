// var singleNumber = function(nums) {
//     let xnums = nums
//     xnums = [... new Set(xnums)]
//     console.log(nums)
//     console.log(xnums)
//     let sum3 = ((nums.reduce((partialSum, a) => partialSum + a, 0)))
//     let sum4 = (((xnums.reduce((partialSum, a) => partialSum + a, 0))))
//     console.log(sum3)
//     console.log(sum4)
//     let returnValue = Math.round(((sum4*3)-sum3)/2)
//     console.log(returnValue)
//     return returnValue
// };

// singleNumber([1,0,1,0,1,0,99])


// var findDuplicate = function(nums) {
//     let xnums=[];

//     for(let val of nums){
//         if(xnums[val]){
//             xnums[val] = xnums[val] + 1;
//         }else{
//             xnums[val] = 1;
//         }
//     }

//     console.log(xnums)

//     for (let val of xnums){
//         if(xnums[val]>1){
//             return val
//         }
//     }
// };

// findDuplicate([1,3,4,2,2])




var findDuplicate = function(nums) {
   for(let start=0; start<nums.length;start++){
        for(let check=start+1;check<nums.length;check++){
            if((nums[start] ^ nums[check] )== 0){
                return nums[start]
            }
        }
   }
};

findDuplicate([1,3,4,2,2])

// console.log(1^1)