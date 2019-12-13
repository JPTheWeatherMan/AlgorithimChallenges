const s = "RLRRLLRLRL";

const balancedStringSplit = function(s) {
	let count = 0;
	let temp = 1;
	for (let char of s) {
		if (char === "R") {
			temp++;
		} else {
			temp--;
		}

		if (temp === 1) {
			count++;
		}
  }
	return count;
};

balancedStringSplit(s);
