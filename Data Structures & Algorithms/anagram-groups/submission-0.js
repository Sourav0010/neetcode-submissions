class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let set = new Set();
   for (let s of strs) {
      set.add(s.split('').sort().join(''));
   }
   let map = new Map();

   for (let e of strs) {
      let key = e.split('').sort().join('');
      map.set(key, map.has(key) ? [...map.get(key), e] : [e]);
   }
   return [...map.values()];
    }
}
