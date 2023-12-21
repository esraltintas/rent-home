import {
  validatePhone,
  validateEmail,
  validateFullName,
} from "./validationUtils";

describe("ValidateEmail function", () => {
  it("returns true for a valid email", () => {
    const validEmail = "test@example.com";
    expect(validateEmail(validEmail)).toBe(true);
  });

  it("returns false for an invalid email", () => {
    const invalidEmail = "invalid-email";
    expect(validateEmail(invalidEmail)).toBe(false);
  });

  it("returns false for an empty email", () => {
    const emptyEmail = "";
    expect(validateEmail(emptyEmail)).toBe(false);
  });
});

describe("ValidateFullName function", () => {
  it("Returns true for a valid name and surname", () => {
    const validName = "Test";
    const validSurname = "Test";
    expect(validateFullName(validName, validSurname)).toBe(true);
  });

  it("returns false for an empty name", () => {
    const emptyName = "";
    const validSurname = "Doe";
    expect(validateFullName(emptyName, validSurname)).toBe(false);
  });

  it("returns false for an empty surname", () => {
    const validName = "Test";
    const emptySurname = "";
    expect(validateFullName(validName, emptySurname)).toBe(false);
  });

  it("Returns false for both empty name and surname", () => {
    const emptyName = "";
    const emptySurname = "";
    expect(validateFullName(emptyName, emptySurname)).toBe(false);
  });
});

describe("validatePhone", () => {
  test("should return true for a valid phone number", () => {
    const validPhoneNumber = "+491573473949";
    expect(validatePhone(validPhoneNumber)).toBe(true);
  });

  test("should return false for an invalid phone number", () => {
    const invalidPhoneNumber = "abc";
    expect(validatePhone(invalidPhoneNumber)).toBe(false);
  });
});
