class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length == 0) return '';
   let result = '';
   for (let s of strs) {
      result = `${result}${s.length}#${s}`;
   }
   return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
         if (str.length == 0) return [];
   let chunks = [];
   let i = 0;
   while (i <= str.length - 1) {
      let j = i;
      let count = '';
      while (str[j] !== '#') {
         count = `${count}${str[j]}`;
         j++;
      }
      count = parseInt(count);
      let s = str.slice(j + 1, j + count + 1);
      chunks.push(s);
      i = j + count + 1;
   }
   return chunks;
    }
}