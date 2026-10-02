class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const mapS = new Map();
   const mapT = new Map();

   for (let e of [...s]) {
      mapS.set(e, mapS.has(e) ? mapS.get(e) + 1 : 1);
   }

   for (let e of [...t]) {
      mapT.set(e, mapT.has(e) ? mapT.get(e) + 1 : 1);
   }
   for (let k of mapS.keys()) {
      if (!mapS.get(k) || !mapT.get(k) || mapS.get(k) !== mapT.get(k)) {
         return false;
      }
   }

   for (let k of mapT.keys()) {
      if (!mapS.get(k) || !mapT.get(k) || mapS.get(k) !== mapT.get(k)) {
         return false;
      }
   }
   return true;
    }
}
