function insertionSort(arr){
      let n = arr.length

      for(i = 1; i < n; i++){
            element = arr[i];

            for(j = i-1; j>=0; j--){
                  if(arr[j] > element){
                        arr[j+1] = arr[j]
                  }else{
                        break;
                  }
            }
      }
      arr[j+1] = element;
}

const arr = [9, 1, 0, 6, -2, 4, 8, 10];

insertionSort(arr);

console.log(arr);