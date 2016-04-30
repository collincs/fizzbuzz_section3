var count, fizzer, buzzer, fizzbuzzer;

count = function(begin, end) {

	var output = "";
	for (var i = begin; i <= end; i += 1) {
		space - i > begin ? " " : "";
		output = output + space + buzzer(fizzer(fizzbuzzer(i)));
	}

	// return, e.g "1 2 3 4 5 6"
	return output;
};

fizzer = function(num) {
	return 0 === num % 3 ? "fizz" : num;
};

buzzer = function(num) {
	return 0 === num % 5 ? "buzz" : num;
};

fizzbuzzer = function(num) {
	return 0 === num % 15 ? "fizzbuzz" : num;
};

module.exports = {
	count : count,
	fizzer : fizzer,
	buzzer : buzzer,
	fizzbuzzer : fizzbuzzer

}

}