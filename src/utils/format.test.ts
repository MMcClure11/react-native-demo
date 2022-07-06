import { formatNumber } from "~utils/format"

test("formats numbers", () => {
  expect(formatNumber(123)).toBe("123")
  expect(formatNumber(123000)).toBe("123,000")
})

test("handles null", () => {
  expect(formatNumber(null)).toBe("")
})
