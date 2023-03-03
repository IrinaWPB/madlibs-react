const addCommas = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });
});

describe("works with whole numbers", () => {
  test("works with less then 3 digit numbers", () => {
    expect(addCommas(6)).toEqual("6")
    expect(addCommas(30)).toEqual("30")
  })
  test("works with 1,2 or 3 digits before comma", () => {
    expect(addCommas(6000)).toEqual("6,000")
    expect(addCommas(30000)).toEqual("30,000")
    expect(addCommas(300000)).toEqual("300,000")
  })
  test("works with negative integers", () => {
    expect(addCommas(-6000)).toEqual("-6,000")
    expect(addCommas(-12345667)).toEqual("-12,345,667")
    expect(addCommas(-3)).toEqual("-3")
  })
})

describe("works with floats", () => {
  test("works with all numbers with floating point", () => {
    expect(addCommas(6.667)).toEqual("6.667")
    expect(addCommas(-430.9)).toEqual("-430.9")
    expect(addCommas(1000.01)).toEqual("1,000.01")
  })
})