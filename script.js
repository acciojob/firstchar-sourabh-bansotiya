function firstChar(text) {
  // your code here
	let empty = ('');
	for (let i = 0; i < text.length; i++) {
		if (text[i] == empty) {
			return empty;
		}
		else{
			return text[i][0];
		}
	}
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
