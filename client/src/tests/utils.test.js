import { changeTimeView } from "../utils";

describe("changeTimeView", () => {
  describe("changeTimeView", () => {
    it.each([
      ["2021-11-16T18:15:13.000Z", "2021-11-16 08:15:13"],
      ["2010-07-01T20:57:34.000Z", "2010-07-01 10:57:34"],
    ])("should return correct value", (strDate, result) => {
      const expected = changeTimeView(strDate);
      expect(expected).toEqual(result);
    });
    it.each([
      ["", "Invalid date format"],
      [undefined, "Invalid date format"],
      [null, "Invalid date format"],
      [[], "Invalid date format"],
      [true, "Invalid date format"],
    ])("should return error string", (strDate, result) => {
      const expected = changeTimeView(strDate);
      expect(expected).toEqual(result);
    });
  });
});
