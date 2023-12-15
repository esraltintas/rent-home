export const validateEmail = (email: string): boolean => {
  return /\S+@\S+\.\S+/.test(email);
};

export const validateFullName = (name: string, surname: string): boolean => {
  return name.trim() !== "" && surname.trim() !== "";
};

export const validatePhone = (phone: string): boolean => {
  return /^\+\d{12}$/.test(phone);
};
