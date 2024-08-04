// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {
      //    mp = {};
      
      //    for( i = 0; i < nums.length; i++){
      //     if(mp[nums[i]]){
      //         mp[nums[i]] += 1;
      //     }
      //     else{
      //         mp[nums[i]] = 1;
      //     }
      //    }
      
      
      //     for( i=0; i < nums.length; i++){
      //     if(mp[nums[i]] === mp[nums[i]]){
      //         return true;
      //     }else{
      //         mp[nums[i]] -= 1
      //         return false;
      //     }
      //     }
      //    return Object.keys(mp).length == 0;
      
      let s = new Set(nums)
      
      if( s.size === nums.length){
          return false;
      }
      return true;
      
      };
      