class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const str = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        const reversed = str.split("").reverse().join("");

        return str === reversed;

    }
}
