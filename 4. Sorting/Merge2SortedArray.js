let merge = function(nums1, m, nums2, n){
      // actual length of nums1 is m+n, which we will use to store the final result

      let result = Array(m+n);

      let i = 0, j = 0, k = 0;

      while(i < m && j < n){
            if(nums1[i] <= nums2[j]){// this loop ends when either i == m or j == n
                  result[k] = nums1[i];
                  i++;
                  k++;
            }else{
                  result[k] = nums2[j];
                  j++;
                  k++;
            }
      }
      
      // if j == n, nums2 is exhausted
      // we have elements left in nums1, lets fill that directly
      while(i < m){
            result[k] = nums1[i]
            i++;
            k++;
      }
      
      // if i == m, nums1 is exhausted
      // we have elements left in nums2, lets fill that directly
      while(j < n){
            result[k] = nums2[j]
            j++;
            k++;
      }

      k = 0;
      while(k < m + n) {
          nums1[k] = result[k];
          k++;
      }

}