
// https://leetcode.com/problems/squares-of-a-sorted-array/

var sortedSquares = function(nums) {
      // let n = nums.length
      // let result = Array(n);
      
      // for(i=0; i<n; i++){                   (have some error)
      //     result[i] = nums[i]**2;
      // }
      //     result[i] = result.sort((x,y) => x-y)
      
      let n = nums.length;
      let result = Array(n);
      let left = 0;
      let right = n-1;
      
      for(i = n-1; i >= 0; i--){
          if( nums[left]**2 < nums[right]**2 ){
              result[i] = nums[right]**2
              right--;
          }else{
              result[i] = nums[left]**2
              left++;
          }
      }
          return result
      }