/** product: calculate the product of an array of numbers. */

function product(nums, i = 0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i = 0, longestLength = 0) {
  if (i === words.length) return longestLength;
  if (words[i].length > longestLength) { longestLength = words[i].length; }
  return longest(words, i + 1, longestLength);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newStr = '') {
  if (i < str.length) {
    if (i % 2 === 0) { newStr = newStr + str[i] };
    return everyOther(str, i + 1, newStr);
  }
  return newStr;
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i = 0) {
  if (i === str.length) return true;
  if (str[i] === str[str.length - (i + 1)]) {
    return isPalindrome(str, i + 1);
  } else return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) return i;
  return findIndex(arr, val, i + 1);

}

/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr = '') {
  if (str.length === 0) return newStr;
  return str[str.length - 1] + revString(str.slice(0, -1), newStr);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (const prop in obj) {
    if (typeof obj[prop] === 'object') {
      gatherStrings(obj[prop], arr);
    } else if (typeof obj[prop] === 'string') arr.push(obj[prop]);
  }
  return arr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = (arr.length - 1)) {
  if (rightIdx === leftIdx && arr[leftIdx] !== val) return -1;

  let midIdx = Math.floor((rightIdx + leftIdx) / 2);
  if (val === arr[midIdx]) {
    return midIdx;
  } else if (val < arr[midIdx]) {
    return binarySearch(arr, val, leftIdx, midIdx - 1);
  } else {
    return binarySearch(arr, val, midIdx + 1, rightIdx);
  }

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
