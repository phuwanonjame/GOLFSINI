"use client";
import { useState } from "react";
// 🌟 นำเข้า Navigation ที่แยกออกมา
import Navigation from "./component/Navigation"; // สมมติว่าไฟล์อยู่ใน components/Navigation.js

// --- Sub Components (DestinationCard) ---
// (ใช้โค้ด DestinationCard ที่ปรับปรุงแล้วข้างบน)
function DestinationCard({ title, imageUrl, description, accentBgColor = "bg-[#c19f56]" }) {
  // ... (โค้ด DestinationCard ที่ปรับปรุงแล้ว)
  const titleClass = "text-white";

  return (
    <div className="relative group">
      <div
        className={`${accentBgColor} rounded-3xl p-4 md:p-6 h-full flex flex-col shadow-xl transition duration-300 group-hover:shadow-2xl`}
      >
        <div className="rounded-2xl overflow-hidden mb-4 md:mb-6 h-48 sm:h-64 md:h-56 lg:h-72"> 
          <img
            src={imageUrl}
            alt={`${title} Golf`}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
        
        <h3
          className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-2 md:mb-4 text-[#C19F56] text-center`}
        >
          {title}
        </h3>
        <p className="text-white text-sm md:text-base leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        
        <div className="mt-auto self-end flex items-center justify-end">
          <button className="cursor-pointer">
            <img
              src="/icon/551e0775-bdfe-4f67-b999-44348cc4c660.png"
              alt="Book Now"
              className="h-10 md:h-12 transition duration-300 hover:opacity-80"
            />
          </button>
        </div>
      </div>
    </div>
  );
}


/**
 * Main HomePage Component
 */
export default function HomePage() {
  const primaryBgColor = "bg-[#0a2e1d]";
  const accentColor = "text-[#C19F56]";
  const accentBgColor = "bg-[#c19f56]";
  const accentBorderColor = "border-[#c19f56]";

  const menuItems = [
    { name: "ABOUT ME", href: "#about" },
    { name: "OUR SERVICE", href: "#services" },
    { name: "GOLF COURSES", href: "#courses" },
    { name: "BLOG", href: "#blog" },
    { name: "GOLF GOODS/ACCESSORIES", href: "#goods" },
    { name: "FAQS", href: "#faqs" },
    { name: "CONTACT US", href: "#contact" },
  ];

  const destinationDescription =
    "Golf is more than just a game — it's an unforgettable experience. With perfectly maintained courses surrounded by lush landscapes, warm tropical weather, and the famous Thai hospitality, it's easy to see why golfers call Thailand a paradise on the fairways";

  const destinations = [
    {
      title: "THAILAND",
      imageUrl:
        "https://golfsini.my.canva.site/_assets/media/c064cc1a0674ae9c899e3fdeece17be9.jpg",
    },
    {
      title: "VIETNAM",
      imageUrl:
        "https://golfsini.my.canva.site/_assets/media/c064cc1a0674ae9c899e3fdeece17be9.jpg",
    },
    {
      title: "INDONESIA",
      imageUrl:
        "https://golfsini.my.canva.site/_assets/media/c064cc1a0674ae9c899e3fdeece17be9.jpg",
    },
  ];

  return (
    <div className={`min-h-screen ${primaryBgColor}`}>
      {/* Navigation (Fixed to the top) - 🌟 ใช้ Navigation ที่ Import เข้ามา 🌟 */}
      <Navigation
        primaryBgColor={primaryBgColor}
        accentColor={accentColor}
        accentBgColor={accentBgColor}
        menuItems={menuItems}
      />
      {/* --- Hero Section --- */}
      <section className="relative h-screen pt-[120px] md:pt-[150px] lg:pt-[180px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 h-full">
          <img
            src="https://golfsini.my.canva.site/_assets/media/4c7397066d8a024d484b70c9d457a439.jpg"
            alt="Golf Course"
            className="w-full h-full object-cover opacity-65"
          />
        </div>
        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full pt-16 md:pt-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-8 px-4">
            Best Golf Booking Website in the world
          </h1>
          {/* Search Area */}
          <div className="w-11/12 md:w-2/3 max-w-4xl xl:max-w-5xl p-4">
            <div className="bg-white/90 rounded-xl p-4 md:p-8 shadow-2xl">
              <input
                type="text"
                placeholder="Golf Courses, destination…."
                className="w-full text-black text-base md:text-xl p-3 md:p-4 border-none outline-none bg-transparent"
              />
              <div className="mt-4 space-y-2">
                <p className="text-black text-sm md:text-base">
                  Alpine Golf Club, Bangkok, Thailand
                </p>
                <p className="text-black text-sm md:text-base underline">
                  Bangkok Golf Club, Pathumtani, Thailand
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Main Content Container --- */}
      {/* 🌟 ปรับ max-w-3xl ให้เป็น max-w-7xl เพื่อให้มีพื้นที่บนจอใหญ่ 🌟 */}
      <div className="w-full max-w-7xl xl:max-w-[100rem] mx-auto flex flex-col justify-center items-center">
        
        {/* --- Top Golf Destinations Section --- */}
        <section className="py-12 md:py-20 px-4 md:px-12 lg:px-20" id="courses">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-16">
            <div
              className={`inline-block border-2 md:border-4 ${accentBorderColor} rounded-full px-8 md:px-12 py-3 md:py-4`}
            >
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal ${accentColor}`}
              >
                TOP GOLF DESTINATIONS
              </h2>
            </div>
          </div>

          {/* Destination Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
            {destinations.map((dest) => (
              <DestinationCard
                key={dest.title}
                title={dest.title}
                imageUrl={dest.imageUrl}
                description={destinationDescription}
                accentBgColor={primaryBgColor} // 👈 ส่ง primaryBgColor เป็นพื้นหลังการ์ด
              />
            ))}
          </div>
        </section>

        {/* --- Exclusive Deals Section --- */}
        <section
          className="py-12 md:py-20 px-4 md:px-12 lg:px-20 w-full"
          id="services"
        >
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-16">
            <div
              className={`inline-block border-2 md:border-4 ${accentBorderColor} rounded-full px-8 md:px-12 py-3 md:py-4 `}
            >
              <div className=" flex justify-content-center items-center space-x-2">
                <img
                  src="/icon/de772a1e1771d3586a274c62d973b462.png"
                  className="w-10 md:w-16 h-auto" // 👈 ปรับขนาดไอคอน
                  alt="deal icon"
                ></img>
                <h2
                  className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal ${accentColor}`}
                >
                  EXCLUSIVE DEALS
                </h2>
                <img
                  src="/icon/de772a1e1771d3586a274c62d973b462.png"
                  className="w-10 md:w-16 h-auto" // 👈 ปรับขนาดไอคอน
                  alt="deal icon"
                ></img>
              </div>
            </div>
          </div>

          {/* Deals Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative group">
                <div
                  // 🌟 เพิ่ม shadow และ transition 🌟
                  className={`${accentBgColor} rounded-3xl h-full flex flex-col  shadow-xl transition duration-300 group-hover:shadow-2xl`}
                >
                  {/* 1. Badge Image */}
                  <img
                    src="/icon/d24adb96-4169-4e77-a776-d0bddc982524.png"
                    alt="Badge"
                    className="h-8 md:h-12 xl:h-16 block mx-auto --mb-8 md:-mb-12 xl:-mb-13  z-20  object-contain" // 👈 ปรับ mb-0 เป็น -mb-8 เพื่อให้รูปภาพทับ
                  />

                  {/* 2. Main Course Image Container */}
                  <div className="flex-1 rounded-2xl p-2  overflow-hidden relative z-10">
                    <img
                      src="https://golfsini.my.canva.site/_assets/media/695ffafd952e51df55e85d98a19120ab.jpg"
                      alt="Golf Course"
                      // 🌟 กำหนดความสูงตายตัวเพื่อให้การ์ดเท่ากัน 🌟
                      className="w-full h-48 md:h-60 lg:h-72 rounded-2xl object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* 3. Text Content */}
                  <div className="p-3 flex flex-col justify-center items-center text-center">
                    <h3 className="text-lg md:text-2xl xl:text-3xl font-normal text-white mb-2">
                      Alpine Golf Club, Bangkok
                    </h3>

                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mb-2">
                      <span className="text-white text-sm md:text-base xl:text-lg whitespace-nowrap">
                        Course Rating
                      </span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className="w-3 h-3 md:w-5 md:h-5 fill-current text-yellow-400"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    <p className="text-white/80 text-sm md:text-base xl:text-lg">
                      Course description
                    </p>
                  </div>

                  {/* 4. Price and Button Row */}
                  <div className="flex justify-between items-center p-3 pt-0">
                    <div>
                      <p className="text-[#0a2e1d] text-lg md:text-xl xl:text-2xl font-bold mb-0">
                        Starting from
                      </p>
                      <p className="text-white text-lg md:text-xl xl:text-2xl font-bold">
                        4,000THB~
                      </p>
                    </div>
                    <button className="cursor-pointer flex-shrink-0">
                      <img
                        src="/icon/cfa2e6f8-ef6e-4c19-8a24-4406f0b3d045.png"
                        alt="Book Now"
                        className="h-10 md:h-12 xl:h-14 transition duration-300 hover:opacity-90" // 👈 ปรับความสูงและ hover
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- GolfSini News Section --- */}
        <section className="py-12 md:py-20 px-4 md:px-12 lg:px-20 w-full" id="blog">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-16">
             
            <div
              className={`inline-block border-2 md:border-4 ${accentBorderColor} rounded-full px-8 md:px-12 py-3 md:py-4`}
            >
              <div className=" flex w-full justify-center items-center space-x-2">
  <img
    src="/icon/1414f33b175724437ab9101bb934c538.png"
    className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
    alt="GOLFSINI NEWS logo"
  />
              <h2
                className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal ${accentColor}`}
              >
                GOLFSINI NEWS
              </h2>
              </div>
           
              
            </div>
          </div>

          {/* News Content */}
          <div className="bg-[#c19f56] rounded-xl shadow-2xl overflow-hidden p-6 md:p-8">
            {/* Grid layout: Image/Title (Left) and Text/Button (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] xl:grid-cols-[1.5fr_3fr] gap-6 lg:gap-8 items-start">
              {/* Left Column: Image and Title */}
              <div className="flex flex-col">
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://golfsini.my.canva.site/_assets/media/c064cc1a0674ae9c899e3fdeece17be9.jpg"
                    alt="Golf Tournament Nikanti"
                    // 🌟 ปรับความสูงให้ Responsive ขึ้น (h-auto แต่กำหนด max-h เพื่อควบคุม) 🌟
                    className="w-full h-auto max-h-96 object-cover" 
                  />
                </div>

                <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#2e4933] leading-tight mt-4">
                  {/* 🌟 ปรับขนาดตัวอักษรให้เหมาะสมกับ h3 🌟 */}
                  GOLF TOURNAMENT
                </h3>
              </div>

              {/* Right Column: Text and Read More Button */}
              <div className="flex flex-col justify-between h-full space-y-6">
                <p className="text-white text-base md:text-lg xl:text-xl leading-relaxed">
                  Golf is more than just a game — it's an unforgettable
                  experience. With perfectly maintained courses surrounded by
                  lush landscapes, warm tropical weather, and the famous Thai
                  hospitality, it's easy to see why golfers call Thailand a
                  paradise on the fairways. Golf is more than just a game — it's
                  an unforgettable experience. With perfectly maintained courses
                  surrounded by lush landscapes, warm tropical weather, and the
                  famous Thai hospitality, it's easy to see why golfers call
                  Thailand a paradise on the fairways. Golf is more than just a
                  game — it's an unforgettable experience. With perfectly
                  maintained courses surrounded by lush landscapes, warm
                  tropical weather, and the famous Thai hospitality, it's easy
                  to see why golfers call Thailand a paradise on the fairways
                </p>

                <div className="flex justify-end w-full mt-auto"> {/* 👈 ใช้ mt-auto เพื่อดันลงด้านล่าง */}
                  <button className="flex items-center bg-[#2e4933] text-[#c19f56] px-6 py-3 rounded-full font-semibold transition duration-300 hover:bg-[#3a5d42] shadow-lg"> {/* 👈 เพิ่ม hover effect */}
                    READ MORE
                    <span className="ml-2 font-bold text-xl leading-none">
                      »
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Contact Section --- */}
        <section className="py-12 md:py-20 px-4 md:px-12 lg:px-20 w-full" id="contact">
          {/* Title */}
          <div className={`h-0.5 ${accentBgColor} mb-8 md:mb-12`}></div>
          <div className="text-start mb-10 md:mb-16">
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#C19F56] mb-8 md:mb-12`}
            >
              Contact us
            </h2>
          </div>
          <div className="relative">
            {/* Contact Icons Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12"> {/* 👈 ปรับ grid-cols-2 เป็น sm:grid-cols-4 */}
              {[
                {
                  icon: "https://th.bing.com/th/id/R.f72a770b66c473ca343f2dc6cf764fc0?rik=VX7zwOoup2Vc%2bg&pid=ImgRaw&r=0",
                  label: "WECHAT",
                  value: "WeChat ID",
                },
                {
                  icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/42/b2/5b/42b25b1b-0d0d-3ba2-7e55-b87df00fb8e5/LINE.png/1200x630bb.png",
                  label: "LINE",
                  value: "@golfsini",
                },
                {
                  icon: "https://th.bing.com/th/id/R.cc3b1ad8ca057a0854c32b4b5a70cac3?rik=snODOUEJOPhpTA&pid=ImgRaw&r=0",
                  label: "PHONE",
                  value: "02-111-1111",
                },
                {
                  icon: "https://golfsini.my.canva.site/_assets/media/fc8c7cb8c61351a06211fec9dbbb9d93.png",
                  label: "PHONE",
                  value: "02-111-1111",
                },
              ].map((item, index) => (
                <div key={index} className="text-center p-2"> {/* 👈 เพิ่ม padding เล็กน้อย */}
                  <img
                    src={item.icon}
                    alt={item.label}
                    className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 mx-auto mb-2 md:mb-4 object-contain" // 👈 เพิ่ม object-contain
                  />
                  <p className="text-white text-sm md:text-lg xl:text-xl uppercase font-semibold">
                    {item.label}
                  </p>
                  <p className="text-white/70 text-sm md:text-base xl:text-lg">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Map and Golf Icon Container */}
            <div className="flex justify-center items-center w-full gap-4 md:gap-8"> {/* 👈 ใช้ justify-center แทน justify-content-evenly */}
              <div className="hidden lg:block shrink-0">
                <img
                  src="https://golfsini.my.canva.site/_assets/media/0c1e9ac42e06967337f540b950a84be0.png"
                  alt="Golf Icon"
                  className="h-24 md:h-32 xl:h-48 object-contain" // 👈 ปรับความสูงให้เหมาะสมกับพื้นที่
                />
              </div>

              {/* Map Image: ให้ใช้พื้นที่ที่เหลือ */}
              <div className="bg-white rounded-xl md:rounded-3xl mb-8 md:mb-12 overflow-hidden w-full lg:w-4/5 shadow-2xl">
                <img
                  src="https://golfsini.my.canva.site/_assets/media/80a257b63f3f82563599d620f6f75bde.jpg"
                  alt="Map"
                  className="w-full h-auto object-cover rounded-xl md:rounded-3xl"
                />
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="order-2 md:order-1">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-8 xl:gap-10 text-white text-xs md:text-base xl:text-lg mb-8">
              <a
                href="#"
                className="hover:text-[#c19f56] transition-colors underline whitespace-nowrap"
              >
                2025 Golfsini TH
              </a>
              <a
                href="#"
                className="hover:text-[#c19f56] transition-colors underline whitespace-nowrap"
              >
                Payment Terms
              </a>
              <a
                href="#"
                className="hover:text-[#c19f56] transition-colors underline whitespace-nowrap"
              >
                General Terms & Conditions
              </a>
              <a
                href="#"
                className="hover:text-[#c19f56] transition-colors underline whitespace-nowrap"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </section>
      </div>
      
      {/* --- Footer --- */}
      <footer className="bg-[#c2a056] py-6 md:py-8 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          {/* Payment Logos */}
          <div className="flex items-center gap-3 md:gap-6 xl:gap-8 order-1 md:order-2 flex-wrap justify-center">
            <img
              src="https://golfsini.my.canva.site/_assets/media/4ff508b2f06308078c9dad62afbe5353.png"
              alt="Payment 1"
              className="h-8 md:h-12 xl:h-14 object-contain"
            />
            <img
              src="https://golfsini.my.canva.site/_assets/media/8808931d93523a292221976ddb365dca.png"
              alt="Payment 2"
              className="h-10 md:h-16 xl:h-20 object-contain" // 👈 ปรับความสูง
            />
            <img
              src="https://golfsini.my.canva.site/_assets/media/df34012d49bbc56a4e3ea37b57c8fac7.png"
              alt="Payment 3"
              className="h-10 md:h-16 xl:h-18 object-contain"
            />
            <img
              src="https://golfsini.my.canva.site/_assets/media/844605a3c96ca90c3b4dad118ff66398.jpg"
              alt="Payment 4"
              className="h-10 md:h-16 xl:h-18 rounded object-contain"
            />
          </div>

          {/* Footer Logo */}
          <div className="order-3">
            <img
              src="https://golfsini.my.canva.site/_assets/media/9ba1cfdd23fc99d77907598e7b62579f.png"
              alt="Footer Logo"
              className="h-14 md:h-20 xl:h-24 object-contain"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}