// components/Navigation.js

"use client";
import { useState } from 'react';
import Link from 'next/link';

// Simple placeholder for the Hamburger Icon
const HamburgerIcon = ({ strokeColor }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={`w-8 h-8 ${strokeColor}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

// Simple placeholder for the Close Icon (X)
const CloseIcon = ({ strokeColor }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={`w-8 h-8 ${strokeColor}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);


// Earth Icon for Language Selector (แก้ไขการรับ props: รับ className แทน)
const EarthIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    // ใช้ className ที่ส่งมาภายนอกในการกำหนดสี
    className={`w-6 h-6 mr-1 ${className} group-hover:text-white transition-colors`} 
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20"/>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);


/**
 * Navigation Component (Header) - แก้ไขและปรับปรุงให้ใช้งานได้จริง
 * @param {string} primaryBgColor - สีพื้นหลังหลัก (bg-[#0a2e1d])
 * @param {string} accentColor - สีตัวอักษรเน้น (text-[#C19F56])
 * @param {string} accentBgColor - สีพื้นหลังเน้น (bg-[#c19f56])
 * @param {Array<Object>} menuItems - รายการเมนู [{ name: 'HOME', href: '/' }, ...]
 */
export default function Navigation({ primaryBgColor, accentColor, accentBgColor, menuItems }) {
  const [lang, setLang] = useState("EN");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State สำหรับเปิด/ปิด Mobile Menu

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Utility function for menu links
  const MenuLink = ({ item, baseClasses = '', hoverClasses = '' }) => (
    <Link href={item.href} passHref legacyBehavior> 
      <a 
        className={`${baseClasses} ${hoverClasses} whitespace-nowrap transition-colors`}
        onClick={() => setIsMenuOpen(false)} // Close menu on click (for mobile)
      >
        {item.name}
      </a>
    </Link>
  );

  return (
    <nav className={`w-full ${primaryBgColor} px-4 md:px-12 lg:px-20 pt-6 md:pt-8 pb-4 fixed top-0 left-0 z-50 shadow-lg`}>

      {/* 1. ส่วนบน: Logo, Hamburger/Language, Register (ใช้ Grid/Flexbox เพื่อจัดองค์ประกอบ) */}
      {/* ใช้ justify-between เพื่อผลักองค์ประกอบซ้ายและขวาออกจากกัน */}
      <div className="flex items-center justify-between relative h-10 md:h-12">

        {/* 1.1 Hamburger Icon (Left - Visible on screens < lg) */}
        <div className="flex lg:hidden items-center order-1">
          <button 
            onClick={handleMenuToggle} 
            aria-label="Toggle Menu" 
            className={`text-white p-2 ${accentColor}`}
          >
            {isMenuOpen ? <CloseIcon strokeColor={accentColor} /> : <HamburgerIcon strokeColor={accentColor} />}
          </button>
        </div>
        
        {/* 1.2 Logo (Center - ใช้ Absolute Positioning เหมือนเดิม แต่ไม่ต้องมี Left/Right Spacer ใน Flex) */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center order-2 pointer-events-none">
          <span className={`text-3xl md:text-4xl lg:text-5xl font-serif tracking-widest ${accentColor} pointer-events-auto`}>
            GOLFSINI
          </span>
        </div>

        {/* 1.3 Register Button & Language (Right) */}
        {/* ใช้ ml-auto เพื่อให้ Register/Language อยู่ขวาสุดเสมอ */}
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
          <div className="flex items-center text-white text-base md:text-lg group z-10">
           {/* **จุดที่แก้ไข:** ส่ง accentColor เข้าไปใน className โดยตรง */}
           <EarthIcon className={accentColor} />
           
           <select
             value={lang}
             onChange={(e) => setLang(e.target.value)}
             className={`bg-transparent border-none text-sm md:text-base focus:outline-none cursor-pointer appearance-none text-gray-300 hover:text-white transition-colors ${primaryBgColor}`}
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
      <div className={`mt-4 mb-3 h-0.5 ${accentBgColor} w-full`}></div>
      
      {/* 2. ส่วนล่าง: Menu Items (Desktop) */}
      <div className="hidden lg:flex justify-center gap-6 lg:gap-8 xl:gap-10 text-white text-sm lg:text-base xl:text-lg font-medium">
        {menuItems.map((item) => (
          <MenuLink 
            key={item.name} 
            item={item} 
            baseClasses="text-white" 
            hoverClasses="hover:text-[#c19f56]" 
          />
        ))}
      </div>

      {/* 3. Mobile Menu Overlay (Visible when isMenuOpen is true on screens < lg) */}
      {isMenuOpen && (
        <div 
          className={`lg:hidden fixed top-0 left-0 w-full h-full ${primaryBgColor} bg-opacity-95 pt-28 pb-8 z-40 overflow-y-auto`}
          // เพิ่ม onClick={handleMenuToggle} ตรงนี้เพื่อคลิกที่พื้นหลังแล้วปิดเมนูได้
          onClick={handleMenuToggle}
        >
          <div className="flex flex-col items-center gap-6 text-white text-xl font-medium">
            {menuItems.map((item) => (
              <MenuLink 
                key={item.name} 
                item={item} 
                baseClasses="text-white py-2 w-full text-center" 
                hoverClasses={`hover:${accentBgColor} hover:text-black`} 
              />
            ))}
            {/* Mobile Register Button (visible if it was hidden on small screens) */}
             <Link href="/register" passHref legacyBehavior> 
                <a className={`sm:hidden ${accentBgColor} text-white px-8 py-3 text-lg 
                           hover:bg-[#a88847] transition-colors rounded-lg 
                           border border-transparent hover:border-white w-3/4 text-center mt-4`}>
                    REGISTER
                </a>
              </Link>
          </div>
        </div>
      )}

    </nav>
  );
}