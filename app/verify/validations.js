// validations.js

// ===========================
// Validation Functions
// ===========================
export const validateFullName = (name) => {
  const errors = [];
  if (!name) errors.push("Full name is required");
  if (name && name.length > 255) errors.push("Full name must be at most 255 characters");
  return errors;
};

export const validateEmail = (email) => {
  const errors = [];
  if (!email) errors.push("Email is required");
  else if (!/\S+@\S+\.\S+/.test(email)) errors.push("Email must be valid");
  if (email && email.length > 255) errors.push("Email must be at most 255 characters");
  return errors;
};

export const validatePassword = (password) => {
  const errors = [];
  if (!password) errors.push("Password is required");
  if (password && password.length < 6) errors.push("Password must be at least 6 characters");
  if (password && !/[A-Z]/.test(password)) errors.push("Password must contain uppercase letter");
  if (password && !/[a-z]/.test(password)) errors.push("Password must contain lowercase letter");
  if (password && !/[0-9]/.test(password)) errors.push("Password must contain number");
  return errors;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  if (confirmPassword !== password) return ["Passwords do not match"];
  return [];
};

export const validateDateOfBirth = (dob) => {
  if (!dob) return ["Date of birth is required"];
  if (isNaN(Date.parse(dob))) return ["Date of birth must be valid date"];
  return [];
};

export const validateNationality = (nationality) => {
  const errors = [];
  if (!nationality) errors.push("Nationality is required");
  if (nationality && nationality.length > 100) errors.push("Nationality must be at most 100 characters");
  return errors;
};

export const validateSex = (sex) => {
  if (!sex) return ["Sex is required"];
  if (!["M", "F"].includes(sex)) return ["Sex must be 'M' or 'F'"];
  return [];
};

export const validatePhone = (phone) => {
  const errors = [];
  if (!phone) errors.push("Phone is required");
  if (phone && !/^\+?\d{7,20}$/.test(phone)) errors.push("Phone must be valid number");
  return errors;
};

export const validateAddress = (address) => {
  if (!address) return ["Address is required"];
  return [];
};
