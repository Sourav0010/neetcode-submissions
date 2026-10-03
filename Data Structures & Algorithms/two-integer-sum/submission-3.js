class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = new Map();
        for(let e of nums){
            map.set(e,target-e);
        }
        
        for(let i = 0; i< nums.length; i++){
            let e = nums[i];
            let j = nums.lastIndexOf(map.get(e));
            if( j >= 0 && j !== i){
                return[i,j]
            }
        }
    }
}
