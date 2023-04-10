function merge(nums1, nums2) {
  let pos1 = 0;
  let pos2 = 0;
  let merged = [];

  for (let i = 0; i < (nums1.length + nums2.length); i++) {
    if (pos1 === nums1.length) {
      merged[i] = nums2[pos2];
      pos2++;
    }
    else if (pos2 === nums2.length) {
      merged[i] = nums1[pos1];
      pos1++;
    }
    else if (nums1[pos1] < nums2[pos2]) {
      merged[i] = nums1[pos1];
      pos1++;
    }
    else {
      merged[i] = nums2[pos2];
      pos2++;
    }
  }

  return merged;
}

// testing
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);