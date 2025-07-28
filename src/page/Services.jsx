import React from 'react'
import img1 from '../image/illustration (1).png'
import Button from '@mui/material/Button';
import img2 from '../image/video.png'
import img3 from '../image/ic-chart.png'
import img4 from '../image/ic-speaker.png'
import img5 from '../image/Group (3).png'
import img6 from '../image/background4.png'
import img7 from '../image/image (41).png'
import img8 from '../image/image (42).png'
import img9 from '../image/image (43).png'
import img10 from '../image/image (44).png'
import img11 from '../image/client-logo.png'
import img12 from '../image/Higher Fit Logo - Untitled Page.png'
import img13 from '../image/Sentinal Consulting Logo.png'
import img14 from '../image/Happy Home Logo.png'
import img15 from '../image/For Sale Logo.png'
import img16 from '../image/Sunset Realty Logo.png'
import { motion } from "framer-motion";
import img17 from '../image/image (45).png'
import img18 from '../image/circle-progress.png'
import img19 from '../image/circle-progress (1).png'
import img20 from '../image/circle-progress (2).png'
import img21 from '../image/circle-progress (3).png'
import img22 from '../image/illustration (3).png'
import img23 from '../image/illustration (4).png'
import img24 from '../image/case-card (1).png'
import img25 from '../image/hover.png'
import img26 from '../image/case-card (2).png'
import img27 from '../image/braces (2).png'
import img28 from '../image/image (46).png'
import img29 from '../image/3b83b87a5e2d5957ab232d418aa6f0159628db3a.jpg'
import img30 from '../image/6be4b0dc8563d4871b244b2d686b9eca3fe77f5e.jpg'
import img222 from '../image/illustration (2).png'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';

const Services = () => {
  return (
<div>


     <div style={{background: `url(${img6}) no-repeat center center / cover`, minHeight: '50vh', width: '102.15%', marginLeft:"-16px", marginTop:"-100px" }} >
    
     <div className='flex justify-around pt-[100px]'>
      <div className='mt-[100px]'>
        <div className='flex gap-3'>
        <h1 className='text-[50px] text-white font-bold'><em>Best</em></h1>
        <h1 className='text-[#7772F1] text-[50px] font-bold'><em>SEO & Marketing</em></h1>
        </div>
        <h1 className='text-[50px] text-white font-bold'><em>Solutions for You</em></h1>
        <div className='flex  mt-[50px] ml-[10px]'>
        <Button variant="outlined"sx={{border: '1px solid white', color: 'white', borderRadius:"5px", '&:hover': { border: '1px solid white',backgroundColor: 'rgba(255, 255, 255, 0.1)',},}}>Get a free analysi</Button>
        <div className='flex gap-3 ml-[30px]'>
          <img className='w-[50px]' src={img2} alt="" />
          <p className='text-[#c9c6c6] mt-[10px]'>Play video</p>
        </div>
        </div>
      </div>
      <img className='w-[500px] h-[400px] mt-[90px]' src={img1} alt="" />
     </div>
     <div className='flex justify-around mt-[80px] pb-[60px]'>

      <div className='flex gap-4'>
        <img className='w-[30px] h-[30px]' src={img3} alt="" />
        <p className='text-white mt-[2px]'>SEO Content Strategy</p>
      </div>

      <div className='flex gap-4'>
        <img className='w-[30px] h-[30px]' src={img4} alt="" />
        <p className='text-white mt-[2px]'>SEO Content Strategy</p>
      </div>

      <div className='flex gap-4'>
        <img className='w-[30px] h-[30px]' src={img5} alt="" />
        <p className='text-white'>SEO Content Strategy</p>
      </div>
     </div>
</div>


<div className="flex flex-wrap justify-between items-start gap-10 p-10 bg-white/10 mt-[70px]">
  <div className="w-full lg:w-[35%]">
    <p className="text-[18px] font-bold leading-relaxed text-[#1E212C] mt-[10px]">
      Createx SEO Agency is a full-service digital marketing agency. We help businesses make more money through a wealth of performance data and market research. We create science-based SEO strategies to empower our clients.
    </p>
  </div>


  <div className="w-full lg:w-[50%] flex flex-col gap-6">
    <div className="flex gap-5">
      <div className="flex gap-4 items-center">
        <img src={img7} alt="Award" className="w-12 h-12 object-contain" />
        <p className="text-base text-[#424551] ">Top SEO Companies 2020 by Clutch</p>
      </div>
      <div className="flex gap-3 items-center ml-[80px]">
        <img src={img8} alt="Award" className="w-12 h-12 object-contain" />
        <p className="text-base w-[70%] text-[#424551]">Top Digital Marketing Agency 2019 by UpCity</p>
      </div>
    </div>

    <div className="flex gap-5 mt-[20px]">
      <div className="flex gap-3 items-center">
        <img src={img9} alt="Award" className="w-12 h-12 object-contain" />
        <p className="text-base w-[50%] text-[#424551]">Official Member 2020 by Forbes Agency Council</p>
      </div>
      <div className="flex gap-3 items-center">
        <img src={img10} alt="Award" className="w-12 h-12 object-contain" />
        <p className="text-base w-[80%] text-[#424551]">Top SEO Companies 2020 by Top Developers</p>
      </div>
    </div>
  </div>
</div>


<div className='w-[100%] h-[450px] bg-gray-100 rounded-2xl mt-[70px]'>
  <motion.h1 className="text-[30px] pt-[60px] text-center text-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}transition={{ duration: 0.8, ease: "easeOut" }}>Company</motion.h1>
<Swiper navigation={true} modules={[Navigation]} className="mySwiper w-[50%]">
 <SwiperSlide>
    <div style={{border:"2px solid black"}} className="w-[400px] h-[200px] border border-gray-500 shadow-[10px_10px_10px_black] bg-[#3b3f64] rounded-xl mt-[50px] flex items-center justify-center mx-auto">
      <img  src={img12} alt="" className=" object-cover" />
    </div>
  </SwiperSlide>

 <SwiperSlide>
    <div style={{border:"2px solid black"}} className="w-[400px] h-[200px] border border-gray-500 shadow-[10px_10px_10px_black] bg-[#3b3f64] rounded-xl mt-[50px] flex items-center justify-center mx-auto">
      <img  src={img13} alt="" className=" object-cover" />
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div style={{border:"2px solid black"}} className="w-[400px] h-[200px] border border-gray-500 shadow-[10px_10px_10px_black] bg-[#3b3f64] rounded-xl mt-[50px] flex items-center justify-center mx-auto">
      <img  src={img14} alt="" className=" object-cover" />
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div style={{border:"2px solid black"}} className="w-[400px] h-[200px] border border-gray-500 shadow-[10px_10px_10px_black] bg-[#3b3f64] rounded-xl mt-[50px] flex items-center justify-center mx-auto">
      <img  src={img15} alt="" className=" object-cover" />
    </div>
  </SwiperSlide>

  <SwiperSlide>
    <div style={{border:"2px solid black"}} className="w-[400px] h-[200px] border border-gray-500 shadow-[10px_10px_10px_black] bg-[#3b3f64] rounded-xl mt-[50px] flex items-center justify-center mx-auto">
      <img  src={img16} alt="" className=" object-cover" />
    </div>
  </SwiperSlide>
    <SwiperSlide>
    <div style={{border:"2px solid black"}} className="w-[400px] h-[200px] border border-gray-500 shadow-[10px_10px_10px_black] bg-[#3b3f64] rounded-xl mt-[50px] flex items-center justify-center mx-auto">
      <img  src={img11} alt="" className=" object-cover" />
    </div>
  </SwiperSlide>
</Swiper>
</div>



<div className="flex justify-between items-center gap-10 px-10 py-16 max-w-[1200px] mx-auto">
  <div className="flex-1">
    <h1 className="text-[36px] font-bold text-[#1E212C] mb-6">Createx Agency</h1>
    <p className="text-[17px] text-[#424551] leading-[30px] mb-8 max-w-[600px]"> Lacus ac mollis vitae viverra. Tincidunt est, feugiat montes, viverra ullamcorper mi dui, nulla pharetra. Sapien urna nullam elit diam mauris orci. Volutpat quam tempus justo, aliquam. Tortor ultrices mattis eget orci eu nisi sed augue odio. Et senectus risus, pharetra, tristique libero. Dolor risus ac quam dictum mattis ultrices laoreet sapien. Feugiat lacus, suscipit eu sociis et  quis hendrerit. Cras at ac magna ultricies orci.
    </p>
    <Button sx={{ backgroundColor: "#7772F1", textTransform: "none", padding: "10px 24px" }} variant="contained">More about us</Button>
  </div>
  <div className="flex-1 flex justify-end">
    <img className="w-[500px] max-w-full h-auto object-contain" src={img17} alt="Agency" />
  </div>
</div>



<div className='w-screen h-[280px]  bg-gray-100 ml-[-31px] pt-[60px] mt-[50px]'>
  <div className='flex justify-around  w-[70%] ml-[15%]'>
  <img className='w-[100px]' src={img18} alt="" />
  <img className='w-[100px]' src={img19} alt="" />
  <img className='w-[100px]' src={img20} alt="" />
  <img className='w-[100px]' src={img21} alt="" />
</div>

<div className='flex justify-around text-grey-700 mt-[30px] text-[17px] w-[70%] ml-[15%]'>
  <p>Projects</p>
  <p>Projects</p>
  <p>Projects</p>
  <p>Projects </p>
</div>
</div>



<h1 className='text-[40px] text-[#1E212C] text-center font-bold mt-[100px]'>Our services</h1>



<div className='flex justify-around mt-[30px]'>
  <Button variant="outlined"sx={{border: '1px solid #7772F1', borderRadius:"3px", '&:hover': { border: '1px solid #7772F1',backgroundColor: 'rgba(255, 255, 255, 0.1)',},}}>Social Media</Button>
 <p className='text-gray-500'>SEO</p>
 <p className='text-gray-500'>Research</p>
 <p className='text-gray-500'>Content & PR</p>
 <p className='text-gray-500'>Payed Traffic</p>
</div>




<div className='flex justify-around mt-[30px]'>
<div className='leading-[50px] mt-[50px]'>
  <h1 className='text-[25px] font-bold'>Complete Worflow For Any SEO Professional</h1>
  <div className='text-[#424551]'>
  <p className='mt-[30px]'>✔️ Aenean enim tellus morbi nisl vulputate dictumst.</p>
  <p>✔️ Nibh sapien volutpat lacus augue.</p>
  <p>✔️ Gravida ornare sit in et ut sit sem id.</p>
  <p>✔️ Ultrices pellentesque dictum enim egestas ac diam.</p>
  <p>✔️ Sit semper enim senectus integer ut turpis et.</p>
  </div>
  <div className='flex gap-10 mt-[30px]'>
  <Button variant="outlined"sx={{border: '1px solid #7772F1', borderRadius:"3px", '&:hover': { border: '1px solid #7772F1',backgroundColor: 'rgba(255, 255, 255, 0.1)',},}}>Learn more</Button>
  <Button sx={{ backgroundColor: "#7772F1", textTransform: "none", padding: "10px 24px" }} variant="contained">Try SEO toolkit</Button>
</div>
</div>
<div>
  <img className='mt-[60px] w-[500px]' src={img222} alt="" />
</div>

</div>


<div className="w-screen h-[500px] bg-[#1E212C] ml-[-31px] mt-[100px] flex justify-around pt-[70px] pl-[100px]">  
  <div>
    <img className='w-[350px]' src={img22} alt="" />
  </div>
  <div>
    <h1 className='text-[#FFFFFF] text-[35px] font-bold mt-[30px]'>Get a Free SEO Analysis!</h1>
  <div className='flex gap-10 mt-[40px]'>
    <input className='bg-[#42444d] w-[220px] h-[35px] text-white rounded-[7px]' type="text" />
    <input className='bg-[#42444d] w-[220px] h-[35px] text-white rounded-[7px]' type="text" />
  </div>
  <input className='bg-[#42444d] w-[480px] mt-[30px] h-[45px] text-white rounded-[7px]' type="text" />
  
   <div className='text-[white] flex gap-10 mt-[40px]'>
    <p className='w-[50%]'>I agree to receive communications from Createx SEO Agency</p>
    <Button sx={{ backgroundColor: "#7772F1", textTransform: "none", padding: "10px 24px" }} variant="contained">More about us</Button>
  </div>
  </div>
</div>







<div className='flex justify-around mt-[150px]'>

  <div className='leading-[50px]'>
    <h1 className='text-[25px] text-[#1E212C] font-bold'>Freequently Ask Questions</h1>
    <p className='text-gray-600 text-[18px] mt-[20px]'>➖  Aliquet lectus urna viverra in odio?</p>
    <p className='text-gray-600 text-[18px] '>➕ Orci commodo, viverra orci mollis ut euismod?</p>
    <p className='text-gray-600 text-[18px] '>➕ Sagittis vitae facilisi rutrum amet mauris quisque vel convallis?</p>
    <p className='text-gray-600 text-[18px] '>➕ In id dolor quis nunc, urna hendrerit pharetra?</p>
    <Button sx={{ backgroundColor: "#7772F1", textTransform: "none", padding: "10px 24px", marginTop:"50px" }} variant="contained">Discover more</Button>
  </div>
  <div>
    <img src={img23} alt="" />
  </div>

</div>



<div className="w-full  py-20 px-4 bg-[#F4F5F6] h-[550px] rounded-[20px] mt-[100px]">
  <h1 className="text-[36px] text-[#1E212C] font-bold text-center mb-12">
    Read our clients' case studies
  </h1>

  <div className="max-w-[400px] mx-auto ">
    <Swiper pagination={{ clickable: true }}modules={[Pagination]}className="mySwiper">
      <SwiperSlide>
        <div className="rounded-xl overflow-hidden ">
          <img src={img24} alt="Case Study 1" className="w-full h-auto object-cover" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="rounded-xl overflow-hidden ">
          <img src={img25} alt="Case Study 2" className="w-full h-auto object-cover" />
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="rounded-xl overflow-hidden ">
          <img src={img26} alt="Case Study 3" className="w-full h-auto object-cover" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</div>





<h1 className='text-[30px] font-bold text-center text-[#1E212C] mt-[80px]'>Flexible pricing plans</h1>



<div className='flex justify-around mt-[50px]'>

  <div className='w-[300px] shadow-[0px_0px_10px_gray] h-[410px] pt-[20px]'>
    <p className='text-[25px] text-center font-bold'>Basic</p>
    <p className='text-[30px] text-[#7772F1] font-bold text-center mt-[15px]'><em>$24/mon</em></p>
    <div className='w-[250px] h-[1px] bg-gray-400 ml-[25px] mt-[10px]'></div>
    <div className='ml-[50px] mt-[30px]'>
    <p className='mt-[10px]'>✔️ Advanced Analytics</p>
    <p className='mt-[10px]'>✔️ Change Management</p>
    <p className='mt-[10px]'>✔️ Corporate Finance</p>
    <p className='mt-[10px]'>✔️ Social Media Marketing</p>
    <p className='mt-[10px]'>✔️ One Way Link Building</p>
    <Button variant="outlined"sx={{border: '1px solid #7772F1', borderRadius:"3px", marginTop:"35px",marginLeft:"30px", '&:hover': { border: '1px solid #7772F1',backgroundColor: 'rgba(255, 255, 255, 0.1)',},}}>Choose plan</Button>
    </div>


  </div>

  <div className='w-[300px] shadow-[0px_0px_10px_gray] h-[410px] pt-[20px] bg-[#1e212c] text-white'>
    <p className='text-[25px] text-center font-bold'>Optimal</p>
    <p className='text-[30px] text-[#03CEA4] font-bold text-center mt-[15px]'><em>$20/mon</em></p>
    <div className='w-[250px] h-[1px] bg-gray-400 ml-[25px] mt-[10px]'></div>
    <div className='ml-[50px] mt-[30px]'>
    <p className='mt-[10px]'>✔️ Advanced Analytics</p>
    <p className='mt-[10px]'>✔️ Change Management</p>
    <p className='mt-[10px]'>✔️ Corporate Finance</p>
    <p className='mt-[10px]'>✔️ Social Media Marketing</p>
    <p className='mt-[10px]'>✔️ One Way Link Building</p>
    <Button variant="outlined"sx={{border: '1px solid #7772F1', borderRadius:"3px", marginTop:"35px",marginLeft:"30px", '&:hover': { border: '1px solid #7772F1',backgroundColor: 'rgba(255, 255, 255, 0.1)',},}}>Choose plan</Button>
    </div>


  </div>

  <div className='w-[300px] shadow-[0px_0px_10px_gray] h-[410px] pt-[20px]'>
    <p className='text-[25px] text-center font-bold'>Premium</p>
    <p className='text-[30px] text-[#7772F1] font-bold text-center mt-[15px]'><em>$19/mon</em></p>
    <div className='w-[250px] h-[1px] bg-gray-400 ml-[25px] mt-[10px]'></div>
    <div className='ml-[50px] mt-[30px]'>
    <p className='mt-[10px]'>✔️ Advanced Analytics</p>
    <p className='mt-[10px]'>✔️ Change Management</p>
    <p className='mt-[10px]'>✔️ Corporate Finance</p>
    <p className='mt-[10px]'>✔️ Social Media Marketing</p>
    <p className='mt-[10px]'>✔️ One Way Link Building</p>
    <Button variant="outlined"sx={{border: '1px solid #7772F1', borderRadius:"3px", marginTop:"35px",marginLeft:"30px", '&:hover': { border: '1px solid #7772F1',backgroundColor: 'rgba(255, 255, 255, 0.1)',},}}>Choose plan</Button>
    </div>


  </div>




</div>



<h1 className='text-[30px] font-bold text-center text-[#1E212C] mt-[100px]'>What our clients say</h1>





<div className='w-[80%] bg-gray-200 h-[280px] ml-[10%] rounded-[20px] mt-[50px]'>

  <div className='flex gap-10 pt-[50px] pl-[150px]'>
    <img className='w-[30px] h-[30px]' src={img27} alt="" />
    <p className='w-[80%] text-[#424551]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.</p>
  </div>

   <div className='flex gap-10 items-center pl-[230px] pt-[50px]'>
      <img className='w-[60px]' src={img28} alt="" />
      <div>
        <p>Courtney Alexander</p>
        <p className='text-gray-500'>Position, Company name</p>
      </div>
     </div>

</div>


<div className='flex justify-around mt-[100px]'>
  <div className='w-[300px]'>
    <p className='text-[30px] font-bold'>Latest news</p>
    <p className='mt-[20px] text-gray-600'>Check more posts in our blog for featured news and advertising insights</p>
     <Button sx={{ backgroundColor: "#7772F1", textTransform: "none", padding: "10px 24px", marginTop:"40px" }} variant="contained">More about us</Button>
  </div>
  <div>
    <img className='w-[250px] h-[200px]' src={img29} alt="" />
    <p className='text-[20px] mt-[10px] text-gray-500'>The Basics of Blogging </p>
  </div>
   <div>
    <img className='w-[250px] h-[200px]' src={img30} alt="" />
    <p className='text-[20px] mt-[10px] text-gray-500'>Search Engine Optimization.</p>
  </div>


</div>
















</div>
  )
}

export default Services