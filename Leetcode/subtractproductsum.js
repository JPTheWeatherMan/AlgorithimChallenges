const num = 678

const subtractProductAndSum = function(n) {
  let deconstructed_numbers = n.toString().split('').map(Number)
  let product = 1,
      sum = 0
  deconstructed_numbers.forEach((number, index) => {
    sum += deconstructed_numbers[index];
    product *= deconstructed_numbers[index];
  })
  difference_of_product_and_sum = product - sum
  return difference_of_product_and_sum
};

subtractProductAndSum(num)