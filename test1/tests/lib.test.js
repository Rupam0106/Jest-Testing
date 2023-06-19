const lib = require("../lib/lib");

test("absolute-should return a positive no. if input number is positive", () => {
  const res = lib.absolute(1);
  expect(res).toBe(1);
});
