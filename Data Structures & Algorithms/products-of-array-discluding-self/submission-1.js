class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
       let leftProds = [];
   let rightProds = [];
   let prod = 1;
   for (let i of nums) {
      prod = prod * i;
      leftProds.push(prod);
   }
   prod = 1;
   for (let i = nums.length - 1; i >= 0; i--) {
      prod = prod * nums[i];
      rightProds[i] = prod;
   }
   console.log(leftProds, rightProds);
   const result = [];
   for (let i = 0; i < nums.length; i++) {
      if (i == 0) {
         result[i] = rightProds[i+1];
      } else if (i == nums.length - 1) {
         result[i] = leftProds[nums.length - 2];
      } else {
         result[i] = leftProds[i - 1] * rightProds[i + 1];
      }
   }
   return result;
    }
}
