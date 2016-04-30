var fb = require('../fizzbuzz');

describe("A program that plays fizzbuzz", function() {

	it("can count from 1 to 6 and make appropriate substitutions", function() {
		expect(fb.count(1,6)).toBe("1 2 fizz 4 buzz fizz");
	});
	
	it("can take multiples of 3 and return 'fizz' for multiples of 3 or otherwise", function()
		expect(fb.fizzer(3)).toBe('Fizz') ;
		expect(fb.fizzer(5)).toBe(5)
		expect(fb.fizzer(6)).toBe(6)

	it("can take multiples of 5 and return 'buzz' for multiples of 5 or otherwise", function()
		expect(fb.buzzer(5)).toBe('Buzz') ;
		expect(fb.buzzer(4)).toBe(4)
		expect(fb.buzzer(2)).toBe(2)
		
	});

	it("can take multiples of 15 and return 'fizzbuzz' for multiples of 15 or otherwise", function()
		expect(fb.fizzbuzzer(15)).toBe('fizzbuzz') ;
		expect(fb.fizzbuzzer(4)).toBe(4)
		expect(fb.fizzbuzzer(2)).toBe(2)
	});