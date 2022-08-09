const insertion_Sort = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1

        let current = nums[i]

    // Shifts the element nums[j] to the right.
    //? Example: nums[j] = 27 | current = 4 
        while (j >= 0 && nums[j] > current) {
        // nums[j + 1] = nums[i] = current
        //* nums[j] is shifting the to right and keeps shifting
        //* till exit condition is met
            nums[j + 1] = nums[j]
            j--;
        }
        // At this point, j = -1 (if at the bottom of index)
        // nums[0] = current(4)
        nums[j+1] = current
    }
    return nums;
}



