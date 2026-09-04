class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;

        const compared = (str: string) => {
         return str.split('').sort().join('')
        }

        return compared(s) === compared(t);
    }
}
