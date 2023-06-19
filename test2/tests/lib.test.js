const lib = require("../lib/lib");

describe("registerUser", () => {
  it("should throw error if username is falshy", () => {
    const args=[null,undefined,NaN,'',false];
    args.forEach(a=>{
      expect(()=>{
        lib.registerUser(a)}).tothrow()})
    })
  });
