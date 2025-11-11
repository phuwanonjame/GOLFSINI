// components/Navigation.js

"use client";
import { useState } from 'react';
import Link from 'next/link';
/**
 * Navigation Component (Header)
 * @param {string} primaryBgColor - สีพื้นหลังหลัก (bg-[#0a2e1d])
 * @param {string} accentColor - สีตัวอักษรเน้น (text-[#C19F56])
 * @param {string} accentBgColor - สีพื้นหลังเน้น (bg-[#c19f56])
 * @param {Array<Object>} menuItems - รายการเมนู
 */
export default function Navigation({ primaryBgColor, accentColor, accentBgColor, menuItems }) {
  // A simple placeholder for an icon/SVG for responsiveness, since we can't use actual libraries here.
const EarthIcon = ({ accentColor }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={`w-10 h-10 mr-1 ${accentColor} group-hover:text-white transition-colors`}
    // เพิ่ม mr-1 เพื่อเว้นช่องไฟระหว่าง icon กับ select
  >
    {/* Path สำหรับไอคอนโลก (คล้าย Lucide/Feather Icon) */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
  const [lang, setLang] = useState("EN");

  return (
    <nav className={`w-full ${primaryBgColor} px-4 md:px-12 lg:px-20 pt-6 md:pt-8 pb-4 fixed top-0 left-0 z-50 shadow-lg`}>

      {/* ส่วนบน: Logo, Register, และ Language (ใช้ Flexbox 3 คอลัมน์เพื่อจัดกึ่งกลางแท้จริง) */}
      

        {/* 1. คอลัมน์ซ้าย (Left Spacer) - ใช้ invisible เพื่อกินพื้นที่ถ่วงดุล */}
      <div className="flex items-center justify-between relative h-10 md:h-12">



        {/* 1. Logo (Center - ใช้ Absolute Positioning) */}

        {/* โลโก้จะถูกจัดกึ่งกลางระหว่างขอบซ้าย/ขวาของ nav โดยไม่สนใจองค์ประกอบอื่น */}

        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center order-2">
          <span className={`text-3xl md:text-4xl lg:text-5xl font-serif tracking-widest ${accentColor}`}>
            GOLFSINI
          </span>
        </div>

        {/* 3. Register Button & Language (Right) */}
          <div className="flex items-center gap-2 md:gap-4 text-white order-3 ml-auto">
          {/* ปุ่ม Register */}
        <Link href="/register" passHref legacyBehavior> 
            <a className={`hidden sm:block ${accentBgColor} text-white px-4 py-1 md:px-6 md:py-2 text-xs md:text-base 
                               hover:bg-[#a88847] transition-colors rounded-lg 
                               border border-transparent hover:border-white whitespace-nowrap z-10`}>
              REGISTER
            </a>
          </Link>
          {/* ภาษา */}
          <div className="flex items-center text-white text-base md:text-lg group">
           <EarthIcon className="" accentColor={accentColor} />
           
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="bg-transparent border-none text-sm z-10 md:text-base focus:outline-none cursor-pointer appearance-none text-gray-300 hover:text-white transition-colors"
            >
              <option value="EN" className="bg-gray-800 text-white">
                EN
              </option>
              <option value="TH" className="bg-gray-800 text-white">
                TH
              </option>
            </select>
          </div>
        </div>
      </div>

      {/* Divider Line (เส้นแบ่ง) */}
      <div className={`mt-4 mb-3 h-0.5 bg-[#C19F56] w-full`}></div>
      
      {/* ส่วนล่าง: Menu Items */}
      <div className="hidden lg:flex justify-center gap-6 lg:gap-8 xl:gap-10 text-white text-sm lg:text-base xl:text-lg font-medium">
        {menuItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`whitespace-nowrap hover:text-[#c19f56] transition-colors`}
          >
            {item.name}
          </a>
        ))}
      </div>

    </nav>
  );
}

// *** หมายเหตุ: หากมีการย้าย DestinationCard ไปที่ไฟล์อื่นด้วย ให้ใส่ export default ในไฟล์นั้นแทน