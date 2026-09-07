class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const groups = new Map<string, string[]>();

        for (const str of strs) {
            const key = str.split('').sort().join('');

            if(!groups.has(key)) {
                groups.set(key, [])
            }
            groups.get(key).push(str);
        }

        return Array.from(groups.values())
    }
}
