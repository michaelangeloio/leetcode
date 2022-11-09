 function applyOperations(nums: number[]): number[] {
    nums = multiply(nums)
    nums = shiftBack(nums, 0)
    return nums
};

function multiply(nums: number[]) {
    if (nums.length < 3) return nums
    for (let i = 0; i < nums.length -1; i++) {
        if (nums[i] === nums[i+1]) {
            nums[i] = nums[i] * 2
            nums[i+1] = 0
        }     
    }
    return nums
}

// we calculate the diff and fill

function shiftBack(nums: number[], target: number) {
    const numsLength = nums.length
    nums = nums.filter(a=>a!=0);
    nums = nums.concat(new Array(numsLength-nums.length).fill(0))
    return nums
}
