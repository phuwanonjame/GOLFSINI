"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerUser } from "./apiActions";
import {
  validateFullName,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateDateOfBirth,
  validateNationality,
  validateSex,
  validatePhone,
  validateAddress
} from "./validations";

// InputField & SelectField Components (เหมือนเดิม)
const InputField = ({ label, name, type = "text", formData, handleChange, error }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-white text-lg font-medium mb-2">
      {label} <span className="text-red-400">*</span>
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={formData[name]}
      onChange={handleChange}
      className={`w-full p-3 border rounded-lg bg-[#0a2e1d] text-white placeholder-gray-400 focus:ring-2 focus:border-[#c19f56] transition duration-200 shadow-inner ${error.length ? 'border-red-500' : 'border-gray-600'}`}
      placeholder={`Enter ${label.toLowerCase()}`}
    />
    {error.length > 0 && (
      <ul className="text-red-400 text-sm mt-1 list-disc list-inside">
        {error.map((e, idx) => <li key={idx}>{e}</li>)}
      </ul>
    )}
  </div>
);

const SelectField = ({ label, name, options, formData, handleChange, error }) => (
  <div className="mb-4">
    <label htmlFor={name} className="block text-white text-lg font-medium mb-2">
      {label} <span className="text-red-400">*</span>
    </label>
    <select
      id={name}
      name={name}
      value={formData[name]}
      onChange={handleChange}
      className={`w-full p-3 border rounded-lg bg-[#0a2e1d] text-white focus:ring-2 focus:border-[#c19f56] transition duration-200 shadow-inner ${error.length ? 'border-red-500' : 'border-gray-600'}`}
    >
      <option value="">Select {label.toLowerCase()}</option>
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>{opt.label}</option>
      ))}
    </select>
    {error.length > 0 && (
      <ul className="text-red-400 text-sm mt-1 list-disc list-inside">
        {error.map((e, idx) => <li key={idx}>{e}</li>)}
      </ul>
    )}
  </div>
);

export default function RegisterPage() {
  const router = useRouter();
  const primaryBgColor = "bg-[#0a2e1d]";
  const accentColor = "text-[#C19F56]";
  const accentBgColor = "bg-[#c19f56]";
  const wallpaperUrl = "https://golfsini.my.canva.site/_assets/media/4c7397066d8a024d484b70c9d457a439.jpg";

  const [formData, setFormData] = useState({
    full_name: "", email: "", password: "", confirmPassword: "",
    date_of_birth: "", nationality: "", sex: "", phone: "", address: "",
  });

  const [errors, setErrors] = useState({
    full_name: [], email: [], password: [], confirmPassword: [],
    date_of_birth: [], nationality: [], sex: [], phone: [], address: [],
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // validate on change
    let fieldErrors = [];
    switch(name){
      case "full_name": fieldErrors = validateFullName(value); break;
      case "email": fieldErrors = validateEmail(value); break;
      case "password": fieldErrors = validatePassword(value); break;
      case "confirmPassword": fieldErrors = validateConfirmPassword(formData.password, value); break;
      case "date_of_birth": fieldErrors = validateDateOfBirth(value); break;
      case "nationality": fieldErrors = validateNationality(value); break;
      case "sex": fieldErrors = validateSex(value); break;
      case "phone": fieldErrors = validatePhone(value); break;
      case "address": fieldErrors = validateAddress(value); break;
      default: break;
    }
    setErrors(prev => ({ ...prev, [name]: fieldErrors }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      full_name: validateFullName(formData.full_name),
      email: validateEmail(formData.email),
      password: validatePassword(formData.password),
      confirmPassword: validateConfirmPassword(formData.password, formData.confirmPassword),
      date_of_birth: validateDateOfBirth(formData.date_of_birth),
      nationality: validateNationality(formData.nationality),
      sex: validateSex(formData.sex),
      phone: validatePhone(formData.phone),
      address: validateAddress(formData.address),
    };
    setErrors(newErrors);
    const hasErrors = Object.values(newErrors).some(arr => arr.length > 0);
    if(hasErrors) return;

    setLoading(true);
    try{
      const result = await registerUser(formData);
      if(result.errors){
        const serverErrors = {};
        result.errors.forEach(err => serverErrors[err.param] = [err.msg]);
        setErrors(prev => ({ ...prev, ...serverErrors }));
      } else {
        // redirect ไปหน้า verify พร้อม email query
        router.push(`/verify?email=${encodeURIComponent(formData.email)}`);
      }
    }catch(err){
      alert(err.message || "Something went wrong!");
    }finally{
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative"
      style={{
        backgroundImage: `url('${wallpaperUrl}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
      <div className="w-full max-w-5xl relative z-20">
        <div className="text-center mb-8">
          <h1 className={`text-4xl md:text-5xl font-bold ${accentColor}`}>GOLFSINI</h1>
          <h2 className="mt-2 text-2xl font-semibold text-white">Create Your Account</h2>
        </div>

        <div className={`p-8 md:p-10 rounded-xl shadow-2xl ${primaryBgColor} bg-opacity-90`}>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField label="Full Name" name="full_name" formData={formData} handleChange={handleChange} error={errors.full_name}/>
            <InputField label="Email" name="email" type="email" formData={formData} handleChange={handleChange} error={errors.email}/>
            <InputField label="Password" name="password" type="password" formData={formData} handleChange={handleChange} error={errors.password}/>
            <InputField label="Confirm Password" name="confirmPassword" type="password" formData={formData} handleChange={handleChange} error={errors.confirmPassword}/>
            <InputField label="Date of Birth" name="date_of_birth" type="date" formData={formData} handleChange={handleChange} error={errors.date_of_birth}/>
            <InputField label="Nationality" name="nationality" formData={formData} handleChange={handleChange} error={errors.nationality}/>
            <SelectField label="Sex" name="sex" formData={formData} handleChange={handleChange} options={[{ value:"M", label:"Male"},{value:"F", label:"Female"}]} error={errors.sex}/>
            <InputField label="Phone" name="phone" formData={formData} handleChange={handleChange} error={errors.phone}/>
            <InputField label="Address" name="address" formData={formData} handleChange={handleChange} error={errors.address}/>

            <div className="md:col-span-2">
              <button type="submit" disabled={loading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg font-medium text-[#0a2e1d] ${accentBgColor} hover:bg-[#a88847] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#c19f56] transition duration-200 mt-4`}>
                {loading ? "Registering..." : "REGISTER NOW"}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-white">
              Already have an account?
              <a href="/login" className={`font-medium ${accentColor} hover:text-white ml-1 transition-colors`}>Log In here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
