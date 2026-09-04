class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numMap = new Map<number, number>();

        for(let i = 0;  i<nums.length; i++) {
            const result = target - nums[i];
            // 7 - 4 = 3 ---> that's the num index I am looking for

            if(numMap.has(result)) {
                return [numMap.get(result), i];
            }
            numMap.set(nums[i], i); // {3, 0}
        }

         return []; 
    }
}
