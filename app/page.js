"use client";
import { useState } from 'react';
// 🌟 นำเข้า Navigation ที่แยกออกมา
import Navigation from './component/Navigation'; // สมมติว่าไฟล์อยู่ใน components/Navigation.js

// --- Sub Components (DestinationCard ยังคงอยู่ในไฟล์หลักหากยังไม่แยก) ---

/**
 * Destination Card Component
 */
function DestinationCard({ title, imageUrl, description, accentBgColor }) {
  // ... (โค้ด DestinationCard เหมือนเดิม)
  const titleClass = "text-white"; 

  return (
    <div className="relative group">
      <div className={`${accentBgColor} rounded-3xl p-4 md:p-6 h-full flex flex-col`}>
        <div className=" rounded-2xl overflow-hidden mb-4 md:mb-6">
          <img
            src={imageUrl}
            alt={`${title} Golf`}
            className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
          />
        </div>
        {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
        <h3 className={`text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-normal mb-2 md:mb-4 text-[#C19F56] text-center`}>{title}</h3>
        <p className="text-white text-sm md:text-base leading-relaxed mb-4 flex-grow">
          {description}
        </p>
        <button className="mt-auto self-end cursor-pointer">
          {/* Placeholder image for Book Now button */}
          <img src="/icon/551e0775-bdfe-4f67-b999-44348cc4c660.png" alt="Book Now" className="h-10 md:h-12" />
        </button>
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

  const destinationDescription = "Golf is more than just a game — it's an unforgettable experience. With perfectly maintained courses surrounded by lush landscapes, warm tropical weather, and the famous Thai hospitality, it's easy to see why golfers call Thailand a paradise on the fairways";

  const destinations = [
    { title: "THAILAND", imageUrl: "https://golfsini.my.canva.site/_assets/media/c064cc1a0674ae9c899e3fdeece17be9.jpg" },
    { title: "VIETNAM", imageUrl: "https://golfsini.my.canva.site/_assets/media/c064cc1a0674ae9c899e3fdeece17be9.jpg" },
    { title: "INDONESIA", imageUrl: "https://golfsini.my.canva.site/_assets/media/c064cc1a0674ae9c899e3fdeece17be9.jpg" },
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

      {/* Hero Section */}
      {/* ... (เนื้อหาส่วน Hero เหมือนเดิม) */}
      <section className="relative h-screen pt-[120px] md:pt-[150px] lg:pt-[180px]">
        {/* Padding top is added to account for the fixed navigation height */}

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
          {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR EXTRA LARGE SCREENS (xl:) */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white text-center mb-8 px-4">
            Best Golf Booking Website in the world
          </h1>

          {/* Search Area */}
          {/* MAX-WIDTH ADJUSTMENT FOR EXTRA LARGE SCREENS (xl:) */}
          <div className="w-11/12 md:w-2/3 max-w-4xl xl:max-w-5xl p-4">
            <div className="bg-white/90 rounded-xl p-4 md:p-8 shadow-2xl">
              <input
                type="text"
                placeholder="Golf Courses, destination…."
                className="w-full text-black text-base md:text-xl p-3 md:p-4 border-none outline-none bg-transparent"
              />
              <div className="mt-4 space-y-2">
                <p className="text-black text-sm md:text-base">Alpine Golf Club, Bangkok, Thailand</p>
                <p className="text-black text-sm md:text-base underline">Bangkok Golf Club, Pathumtani, Thailand</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* ... (เนื้อหาส่วนที่เหลือเหมือนเดิม) ... */}
       <div className='w-full max-w-3xl xl:max-w-[100rem] mx-auto flex flex-col justify-center items-center'>
        {/* Top Golf Destinations Section */}
        <section className="py-12 md:py-20 px-4 md:px-12 lg:px-20" id="courses">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-16">
            <div className={`inline-block border-2 md:border-4 ${accentBorderColor} rounded-full px-8 md:px-12 py-3 md:py-4`}>
              {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
              <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal ${accentColor}`}>TOP GOLF DESTINATIONS</h2>
            </div>
          </div>

          {/* Destination Grid */}
          {/* RESPONSIVE GAP ADJUSTMENT FOR LARGE SCREENS (xl:) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 xl:gap-16">
            {destinations.map((dest) => (
              <DestinationCard
                key={dest.title}
                title={dest.title}
                imageUrl={dest.imageUrl}
                description={destinationDescription}
              />
            ))}
          </div>
        </section>

        {/* Exclusive Deals Section */}
        <section className="py-12 md:py-20 px-4 md:px-12 lg:px-20" id="services">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-16">
            <div className={`inline-block border-2 md:border-4 ${accentBorderColor} rounded-full px-8 md:px-12 py-3 md:py-4`}>
              {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
              <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal ${accentColor}`}>EXCLUSIVE DEALS</h2>
            </div>
          </div>

          {/* Deals Grid */}
          {/* RESPONSIVE GAP ADJUSTMENT FOR LARGE SCREENS (xl:) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="relative group">
                <div className={`${accentBgColor} rounded-3xl h-full flex flex-col`}>

                  {/* 🌟 ปรับขนาด Badge ให้เล็กลงเล็กน้อย 🌟 */}
                  {/* RESPONSIVE HEIGHT ADJUSTMENT FOR LARGE SCREENS (xl:) */}
                  <img
                    src="/icon/d24adb96-4169-4e77-a776-d0bddc982524.png"
                    alt="Badge"
                    width={300}
                    className="h-8 md:h-12 xl:h-14 block mx-auto mb-0 z-20"
                  />

                  {/* 2. Main Course Image Container - ไม่มีการเปลี่ยนแปลง */}
                  <div className="flex-1 rounded-2xl pl-5 pr-5 overflow-hidden mt-[-2rem] relative z-10">
                    <img
                      src="https://golfsini.my.canva.site/_assets/media/695ffafd952e51df55e85d98a19120ab.jpg"
                      alt="Golf Course"
                      className="w-full h-full rounded-2xl object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* 🌟 ปรับขนาดข้อความให้กระชับขึ้น 🌟 */}
                  <div className='p-3 flex flex-col justify-center items-center text-center'>

                    {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
                    <h3 className="text-lg md:text-2xl xl:text-3xl font-normal text-white ">Alpine Golf Club, Bangkok</h3>

                    <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
                      {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
                      <span className="text-white text-sm md:text-2xl xl:text-3xl whitespace-nowrap">Course Rating</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg key={star} className="w-3 h-3 md:w-5 md:h-5 xl:w-6 xl:h-6 fill-current text-yellow-400" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                          </svg>
                        ))}
                      </div>
                    </div>

                    {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
                    <p className="text-white/70  text-sm md:text-2xl xl:text-3xl  ">Course description</p>



                  </div>
                  <div className=" flex justify-center items-center ">
                    <div>

                      {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
                      <p className="text-[#0a2e1d] text-lg md:text-3xl xl:text-4xl font-bold mb-1">Starting from</p>
                      {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
                      <p className="text-white text-lg md:text-2xl xl:text-3xl font-bold mb-4">4,000THB~</p>
                    </div>

                    <button className=' cursor-pointer'>
                      {/* Placeholder image for Book Now button */}
                      {/* RESPONSIVE HEIGHT ADJUSTMENT FOR LARGE SCREENS (xl:) */}
                      <img src="/icon/cfa2e6f8-ef6e-4c19-8a24-4406f0b3d045.png" alt="Book Now" className="h-20 md:h-12 xl:h-14" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GolfSini News Section */}
        <section className="py-12 md:py-20 px-4 md:px-12 lg:px-20" id="blog">
          {/* Section Title */}
          <div className="text-center mb-10 md:mb-16">
            <div className={`inline-block border-2 md:border-4 ${accentBorderColor} rounded-full px-8 md:px-12 py-3 md:py-4`}>
              {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR EXTRA LARGE SCREENS (xl:) */}
              <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-normal ${accentColor}`}>GOLFSINI NEWS</h2>
            </div>
          </div>



          {/* News Content - Grid adjusted for responsiveness */}
          {/* Outer container - สีเขียวมะกอกเข้ม */}
          <div className="bg-[#c19f56] rounded-xl shadow-2xl overflow-hidden p-6 md:p-8"> 
            {/* Inner Card - สีทอง/น้ำตาลอ่อน */}

            {/* Grid layout: ภาพ/หัวข้อ (ซ้าย) และ ข้อความ/ปุ่ม (ขวา) */}
            {/* RESPONSIVE GRID ADJUSTMENT FOR EXTRA LARGE SCREENS (xl:): 
                เปลี่ยนอัตราส่วนเป็น 1.5 ส่วน (ซ้าย) ต่อ 3 ส่วน (ขวา) สำหรับ XL เพื่อให้คอลัมน์ขวามีกว้างขึ้นเล็กน้อย */}
            <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] xl:grid-cols-[1.5fr_3fr] gap-6 lg:gap-8 items-start">

              {/* คอลัมน์ซ้าย: รูปภาพและหัวข้อ */}
              <div className="flex flex-col">

                {/* กรอบรูปภาพ */}
                <div className="rounded-lg overflow-hidden shadow-xl">
                  <img
                    src="https://golfsini.my.canva.site/_assets/media/c064cc1a0674ae9c899e3fdeece17be9.jpg"
                    alt="Golf Tournament Nikanti"
                    
                    className="w-full h-64 md:h-80 lg:h-96 object-cover" 
                  />
                </div>

                {/* หัวข้อ "GOLF TOURNAMENT" */}
                {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR EXTRA LARGE SCREENS (xl:) */}
                <h3 className="text-4xl md:text-3xl xl:text-4xl font-bold text-[#2e4933] leading-none mt-4">GOLF TOURNAMENT</h3>
              </div>

              {/* คอลัมน์ขวา: ข้อความและปุ่ม Read More */}
              <div className="flex flex-col justify-between h-full space-y-6">

                {/* ข้อความบรรยาย - ใช้สีขาวตามรูป */}
                {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR EXTRA LARGE SCREENS (xl:) */}
                <p className="text-white text-base md:text-xl xl:text-xl leading-relaxed">
                  Golf is more than just a game — it's an unforgettable experience. With perfectly maintained courses surrounded by lush landscapes, warm tropical weather, and the famous Thai hospitality, it's easy to see why golfers call Thailand a paradise on the fairways. Golf is more than just a game — it's an unforgettable experience. With perfectly maintained courses surrounded by lush landscapes, warm tropical weather, and the famous Thai hospitality, it's easy to see why golfers call Thailand a paradise on the fairways. Golf is more than just a game — it's an unforgettable experience. With perfectly maintained courses surrounded by lush landscapes, warm tropical weather, and the famous Thai hospitality, it's easy to see why golfers call Thailand a paradise on the fairways
                </p>

                {/* ปุ่ม Read More - จัดชิดขวาด้านล่าง */}
                <div className="flex justify-end w-full">
                  <button className="flex items-center bg-[#2e4933] text-[#c19f56] px-6 py-3 rounded-full font-semibold transition duration-300 hover:opacity-90 shadow-lg">
                    READ MORE
                    <span className="ml-2 font-bold text-xl leading-none">»</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </section>

        {/* Contact Section */}
        <section className="py-12 md:py-20 px-4 md:px-12 lg:px-20" id="contact">
          {/* Title */}  <div className={`h-0.5 ${accentBgColor} mb-8 md:mb-12`}></div>
          <div className="text-start mb-10 md:mb-16">
            {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
            <h2 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#C19F56] mb-8 md:mb-12`}>Contact us</h2>
          </div>

          <div className="relative">
            {/* สมมติว่า accentBgColor ถูกกำหนดไว้ที่อื่น */}
          

            {/* Contact Icons Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8 md:mb-12">
              {[
                { icon: "https://th.bing.com/th/id/R.f72a770b66c473ca343f2dc6cf764fc0?rik=VX7zwOoup2Vc%2bg&pid=ImgRaw&r=0", label: "WECHAT", value: "WeChat ID" },
                { icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/42/b2/5b/42b25b1b-0d0d-3ba2-7e55-b87df00fb8e5/LINE.png/1200x630bb.png", label: "LINE", value: "@golfsini" },
                { icon: "https://th.bing.com/th/id/R.cc3b1ad8ca057a0854c32b4b5a70cac3?rik=snODOUEJOPhpTA&pid=ImgRaw&r=0", label: "PHONE", value: "02-111-1111" },
                { icon: "https://golfsini.my.canva.site/_assets/media/fc8c7cb8c61351a06211fec9dbbb9d93.png", label: "PHONE", value: "02-111-1111" },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  {/* RESPONSIVE ICON SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
                  <img src={item.icon} alt={item.label} className="w-16 h-16 md:w-20 md:h-20 xl:w-24 xl:h-24 mx-auto mb-2 md:mb-4" />
                  {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
                  <p className="text-white text-sm md:text-lg xl:text-xl uppercase">{item.label}</p>
                  {/* RESPONSIVE FONT SIZE ADJUSTMENT FOR LARGE SCREENS (xl:) */}
                  <p className="text-white/70 text-sm md:text-base xl:text-lg">{item.value}</p>
                </div>
              ))}
            </div>

            {/* แก้ไข Container Map/Icon เพื่อป้องกันไอคอนล้นจอ */}
            <div className='flex justify-content-evenly items-center w-full gap-4 md:gap-8'> 
              
              {/* Golf Icon: นำ absolute left-[-180] ออก เพื่อให้ไอคอนอยู่ในจอ */}
              {/* ใช้ hidden/lg:block เพื่อให้ไอคอนแสดงเฉพาะบนจอใหญ่ และอยู่ใน flow ของ flexbox */}
              <div className="hidden lg:block shrink-0"> 
                {/* ปรับความสูง md:h-72 -> md:h-64 เพื่อให้ล้นยากขึ้น */}
                <img 
                  src="https://golfsini.my.canva.site/_assets/media/0c1e9ac42e06967337f540b950a84be0.png" 
                  alt="Golf Icon" 
                  className="h-16 md:h-64 xl:h-32 object-contain" 
                />
              </div>

              {/* Map Image: ให้ใช้พื้นที่ที่เหลือ (w-full บนจอเล็ก, w-4/5 บนจอใหญ่) */}
              <div className="bg-white rounded-xl md:rounded-3xl mb-8 md:mb-12 overflow-hidden w-full lg:w-4/5"> 
                <img
                  src="https://golfsini.my.canva.site/_assets/media/80a257b63f3f82563599d620f6f75bde.jpg"
                  alt="Map"
                  /* เพิ่มความสูงแบบ Responsive เพื่อให้ Map ดูสวยงาม */
                  className="w-full  object-cover rounded-xl md:rounded-3xl"
                />
              </div>
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="order-2 md:order-1">
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 md:gap-8 xl:gap-10 text-white text-xs md:text-base xl:text-lg mb-8">
              <a href="#" className="hover:text-[#c19f56] transition-colors underline whitespace-nowrap">2025 Golfsini TH</a>
              <a href="#" className="hover:text-[#c19f56] transition-colors underline whitespace-nowrap">Payment Terms</a>
              <a href="#" className="hover:text-[#c19f56] transition-colors underline whitespace-nowrap">General Terms & Conditions</a>
              <a href="#" className="hover:text-[#c19f56] transition-colors underline whitespace-nowrap">Privacy Policy</a>
            </div>
          </div>
        </section>

        {/* Footer */}

      </div>
      <footer className="bg-[#c2a056] py-6 md:py-8 px-4 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

          {/* Golf Icon */}


          {/* Payment Logos */}
          {/* RESPONSIVE GAP ADJUSTMENT FOR LARGE SCREENS (xl:) */}
          <div className="flex items-center gap-3 md:gap-6 xl:gap-8 order-1 md:order-2 flex-wrap justify-center">
            {/* RESPONSIVE HEIGHT ADJUSTMENT FOR LARGE SCREENS (xl:) */}
            <img src="https://golfsini.my.canva.site/_assets/media/4ff508b2f06308078c9dad62afbe5353.png" alt="Payment 1" className="h-8 md:h-12 xl:h-14" />
            {/* RESPONSIVE HEIGHT ADJUSTMENT FOR LARGE SCREENS (xl:) */}
            <img src="https://golfsini.my.canva.site/_assets/media/8808931d93523a292221976ddb365dca.png" alt="Payment 2" className="h-12 md:h-20 xl:h-24" />
            {/* RESPONSIVE HEIGHT ADJUSTMENT FOR LARGE SCREENS (xl:) */}
            <img src="https://golfsini.my.canva.site/_assets/media/df34012d49bbc56a4e3ea37b57c8fac7.png" alt="Payment 3" className="h-10 md:h-16 xl:h-18" />
            {/* RESPONSIVE HEIGHT ADJUSTMENT FOR LARGE SCREENS (xl:) */}
            <img src="https://golfsini.my.canva.site/_assets/media/844605a3c96ca90c3b4dad118ff66398.jpg" alt="Payment 4" className="h-10 md:h-16 xl:h-18 rounded" />
          </div>

          {/* Footer Logo */}
          <div className="order-3">
            {/* RESPONSIVE HEIGHT ADJUSTMENT FOR LARGE SCREENS (xl:) */}
            <img src="https://golfsini.my.canva.site/_assets/media/9ba1cfdd23fc99d77907598e7b62579f.png" alt="Footer Logo" className="h-14 md:h-20 xl:h-24" />
          </div>
        </div>
      </footer>
    </div>
  );
}