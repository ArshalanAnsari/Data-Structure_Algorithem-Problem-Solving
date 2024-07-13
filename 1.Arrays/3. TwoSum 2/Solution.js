// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

var twoSum = function(numbers, target) {
      let n = numbers.length;
      let i = 0;
      let j = n-1;
      while(i<j){
          if(numbers[i] + numbers[j] == target)
          return [i+1,j+1]
          else if(numbers[i] + numbers[j] > target)
          j--;
          else
          i++;
      }
  };