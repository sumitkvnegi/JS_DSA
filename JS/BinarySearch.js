var search = function (nums, target) {
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
};

let nums = [-1, 0, 3, 5, 9, 12], target = 9;
console.log(search(nums, target));

let recursiveFunction = function (arr, x, start, end) {

    // Base Condition
    if (start > end) return false;

    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === x) return true;
    if (arr[mid] > x)
        return recursiveFunction(arr, x, start, mid - 1);
    else
        return recursiveFunction(arr, x, mid + 1, end);
}

console.log(recursiveFunction(nums, target, 0, nums.length - 1));

var searchInsert = function (nums, target) {
    let start = 0, end = nums.length - 1, mid;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return end == start ? end : start;
};

let a = [1, 3, 4, 5], t = 2;
console.log(searchInsert(a, t));