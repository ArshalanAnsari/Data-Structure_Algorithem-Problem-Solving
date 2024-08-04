function bubbleSort(arr){
      let n = arr.length;

      for(i = 0; i < n; i++){
            let is_swapped = false
            
            for(j = 0; j < n-i-1; j++){// why j < n - i - 1 -> because in every iteration we push the biggest element at last so no need to compare that
                  if(arr[j] > arr[j+1]){
                        // adjacent element swapping
                        let temp = arr[j];
                        arr[j] = arr[j+1];
                        arr[j+1] = temp
                        is_swapped = true
                  }
            }
      }
      // if no swapping occured then array is sorted
      if(is_swapped == false) return;// return from function as array is sorted
}

const arr = [5,4,3,2,1]

bubbleSort(arr)

console.log(arr)