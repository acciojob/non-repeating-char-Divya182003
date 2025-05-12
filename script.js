//function firstNonRepeatedChar(str) {
 //let count0;
	//let length=str.length;
	//for i in str:
	//for j in
	 //count=count+1;
function firstNonRepeatedChar(str) {
  const charCount = {};
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}


