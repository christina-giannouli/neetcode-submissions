class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        // [1,2,2,3,3,3] => [num, k = 2]
        const counts = nums.reduce((acc, num) => {
            acc.set(num, (acc.get(num)?? 0) + 1)
            return acc;
        }, new Map<number, number>());

        return [...counts.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map((entry) => entry[0])  
    }
}
