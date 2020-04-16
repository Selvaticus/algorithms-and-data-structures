const reverse = require('./reverse');

test('the reverse of "awesome" is "emosewa"', () => {
  expect(reverse("awesome")).toBe("emosewa");
});

test('the reverse of "rithmschool" is "loohcsmhtir"', () => {
  expect(reverse("rithmschool")).toBe("loohcsmhtir");
});
