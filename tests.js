// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
//test for sayHello world
describe('sayHello', function (){
    it('should be defined a function', function (){
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function (){
        expect(typeof sayHello()).toBe('string');
    });
    it('should return the string "Hello, Jane!", when executed', function (){
        expect(sayHello("Jane")).toBe('Hello, Jane!');
    });
    it('should never return "undefined" when called', function () {
        expect(sayHello()).not.toBe(undefined)
    });
    it('should return the string "Hello, Alex", when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return the string "Hello, Pat", when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World", when executed', function (){
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return the string "Hello, World", when true', function (){
        expect(sayHello()).toBe("Hello, World!")
    });
});
//test for isFive
describe('isFive', function (){
    it('should be defined a function ', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should return true when 5 is passed through', function (){
        expect(isFive(5)).toBe(true)
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe('boolean')
    });
    it('should return true when the string "5" is passed through', function () {
        expect(isFive("5")).toBe(true)
    });
});
describe('isEven', function (){
    it('should be defined a function', function () {
        expect(typeof isEven).toBe('function')
    });
    it('should return true when an even number', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return false when an odd number', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when given the string "banana"', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return as a boolean', function () {
        expect(typeof isEven()).toBe('boolean')
    });
    it('should return false with a boolean input', function () {
        expect(isEven(true)).toBe(false)
    });
    it('should return false with no input', function () {
        expect(isEven()).toBe(false)
    });
    it('should return true with a number string', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return false when called with infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
});
describe('isVowel', function (){
    it('should should be described as a function', function () {
        expect(typeof isVowel).toBe('function')
    });
    it('"a" should return true', function () {
        expect(isVowel("a")).toBe(true)
    });
    it('should return false for anything not a vowel such as "y"', function () {
        expect(isVowel("y")).toBe(false)
    });
    it('should return a number as false', function () {
        expect(isVowel(4)).toBe(false)
    });
    it('should return true for a capital "A"', function () {
        expect(isVowel("A")).toBe(true)
    });
})