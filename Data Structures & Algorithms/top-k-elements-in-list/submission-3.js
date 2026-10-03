class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let map = new Map();
   for (let e of nums) {
      map.set(e, map.has(e) ? map.get(e) + 1 : 1);
   }
   const data = [...map].sort((a, b) => b[1] - a[1]);
   const result = [];
   for (let e of data) {
      if (result.length == k) return result;
      result.push(e[0]);
   }
   return result; 
    }
}
