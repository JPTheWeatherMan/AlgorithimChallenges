const address = "1.1.1.1";

const defangIPaddr = function(address) {
	let splitaddr = address.split("");

	splitaddr.forEach((char, index) => {
		if (char === ".") {
			splitaddr[index] = "[.]";
		}
	});

  splitaddr.join("");
	return splitaddr;
};

defangIPaddr(address);
