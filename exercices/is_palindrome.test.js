const isPalindrome = require('./is_palindrome');

test('"awesome" is not a palindrome', () => {
    expect(isPalindrome("awesome")).toStrictEqual(false);
});

test('"foobar" is not a palindrome', () => {
    expect(isPalindrome("foobar")).toStrictEqual(false);
});

test('"tacocat" is a palindrome', () => {
    expect(isPalindrome("tacocat")).toStrictEqual(true);
});

test('"amanaplanacanalpanama" is a palindrome', () => {
    expect(isPalindrome("amanaplanacanalpanama")).toStrictEqual(true);
});

test('"amanaplanacanalpandemonium" is not a palindrome', () => {
    expect(isPalindrome("amanaplanacanalpandemonium")).toStrictEqual(false);
});