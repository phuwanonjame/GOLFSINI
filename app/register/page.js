"use client"; // 🚩 จำเป็นต้องมีบรรทัดนี้เพื่อใช้งาน React Hooks (useState)

import { useState } from 'react';

// ==========================================================
// 1. InputField Component (ไม่มีการเปลี่ยนแปลง)
// ==========================================================

/**
 * Input Field Component
 */
const InputField = ({ 
    label, 
    name, 
    type = 'text', 
    required = true, 
    formData, 
    handleChange 
}) => (
    <div className="mb-4">
        <label htmlFor={name} className="block text-white text-lg font-medium mb-2">
            {label} {required && <span className="text-red-400">*</span>}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            required={required}
            // ปรับสีพื้นหลัง Input ให้เข้มขึ้นเพื่อตัดกับสีพื้นหลัง Card
            className="w-full p-3 border border-gray-600 rounded-lg bg-[#0a2e1d] text-white placeholder-gray-400 focus:ring-2 focus:ring-[#c19f56] focus:border-[#c19f56] transition duration-200 shadow-inner"
            placeholder={`Enter ${label.toLowerCase()}`}
        />
    </div>
);


// ==========================================================
// 2. RegisterPage Component (คอมโพเนนต์หลัก) - 🌟 ปรับปรุง Wallpaper 🌟
// ==========================================================

/**
 * RegisterPage Component
 * หน้าสำหรับจัดการฟอร์มลงทะเบียนผู้ใช้ พร้อมภาพพื้นหลังสนามกอล์ฟ
 */
export default function RegisterPage() {
    // ธีมสีหลัก
    const primaryBgColor = "bg-[#0a2e1d]"; 
    const accentColor = "text-[#C19F56]"; 
    const accentBgColor = "bg-[#c19f56]"; 
    const wallpaperUrl = "https://golfsini.my.canva.site/_assets/media/4c7397066d8a024d484b70c9d457a439.jpg";

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (formData.password !== formData.confirmPassword) {
            alert("Password and Confirm Password do not match.");
            return;
        }

        console.log("Registration successful! Data:", formData);
        alert("ลงทะเบียนสำเร็จ (จำลอง)!");
    };

    return (
        // 1. Container หลัก: กำหนดภาพพื้นหลัง
        <div 
            className={`min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative`}
            style={{ 
                backgroundImage: `url('${wallpaperUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed', // ทำให้ภาพนิ่งเมื่อ Scroll
            }}
        >
            
            {/* 2. Overlay สีดำโปร่งแสง: เพื่อให้ข้อความบนพื้นหลังอ่านง่าย */}
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            
            {/* 3. ฟอร์ม: ให้มี z-index สูงกว่า Overlay */}
            <div className="w-full max-w-md relative z-20">
                
                {/* Header/Title Section */}
                <div className="text-center mb-8">
                    <h1 className={`text-4xl md:text-5xl font-bold ${accentColor}`}>
                        GOLFSINI
                    </h1>
                    <h2 className="mt-2 text-2xl font-semibold text-white">
                        Create Your Account
                    </h2>
                </div>

                {/* Registration Form Card */}
                {/* ปรับพื้นหลัง Card เป็นสีเขียวเข้มโปร่งแสง เพื่อให้เห็น Wallpaper ด้านหลังจางๆ */}
                <div className={`p-8 md:p-10 rounded-xl shadow-2xl ${primaryBgColor} bg-opacity-90`}>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* Username Input */}
                        <InputField 
                            label="Username" 
                            name="username" 
                            type="text" 
                            formData={formData} 
                            handleChange={handleChange}
                        />

                        {/* Email Input */}
                        <InputField 
                            label="Email Address" 
                            name="email" 
                            type="email" 
                            formData={formData}
                            handleChange={handleChange}
                        />

                        {/* Password Input */}
                        <InputField 
                            label="Password" 
                            name="password" 
                            type="password" 
                            formData={formData}
                            handleChange={handleChange}
                        />

                        {/* Confirm Password Input */}
                        <InputField 
                            label="Confirm Password" 
                            name="confirmPassword" 
                            type="password" 
                            formData={formData}
                            handleChange={handleChange}
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            // 🌟 ใช้สีทองเป็นพื้นหลังปุ่มเพื่อให้โดดเด่น 🌟
                            className={`w-full flex justify-center py-3 px-4 border border-transparent 
                                     rounded-lg shadow-sm text-lg font-medium text-[#0a2e1d] 
                                     ${accentBgColor} hover:bg-[#a88847] focus:outline-none focus:ring-2 
                                     focus:ring-offset-2 focus:ring-[#c19f56] transition duration-200 mt-6`}
                        >
                            REGISTER NOW
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-white">
                            Already have an account? 
                            <a href="/login" className={`font-medium ${accentColor} hover:text-white ml-1 transition-colors`}>
                                Log In here
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}