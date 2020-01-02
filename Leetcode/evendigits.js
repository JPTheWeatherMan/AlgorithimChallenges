const findNumbers = function(nums){
  let evenNumberCount = 0;
  nums.forEach(num => {
      if(num.toString().length % 2 == 0){
          evenNumberCount++
      }
  })
  return evenNumberCount;
}