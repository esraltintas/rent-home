export const validateEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email);
};

export const validateFullName = (name: string, surname: string): boolean => {
  return name.trim() !== "" && surname.trim() !== "";
};
