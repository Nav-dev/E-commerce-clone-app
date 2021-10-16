import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
       return <div className="home"> 
       <div className="home__container">
           <img className= "home__image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv5QO2OUwH0q-
           zmcUmnPd4tY6cfnYWCmsZBA&usqp=CAU" alt=""/>
           <p className="title">Become Familiar</p>

           <div className="home__row">
           <Product
           id="12321341" 
           title='The lean startup' price={29.99} image='http://1.bp.blogspot.com/-T-d3JPMr-Uk/UPshLuidy6I/AAAAAAAAFbU/vOiHd0qgnC4/s1600/lean-startup_book-cover.jpeg' 
           rating={4}/>
               <Product
               id="49538094" 
               title='JBL Pulse 2 Portable Splashproof Bluetooth Speaker, Black ' price={310.09} image='https://www.bhphotovideo.com/images/images2000x2000/jbl_jblpulse2blkus_pulse_2_portable_bluetooth_1182617.jpg' 
               rating={5}/>
           </div>
           <div className="home__row">
           <Product
           id="49538094" 
           title='Real Madrid wallpaper, logo (590*360)' price={10.00} image='https://img5.goodfon.com/wallpaper/big/e/c1/wallpaper-sport-logo-football-real-madrid.jpg' 
           rating={4}/>
           <Product
            id="49538094" 
            title='ASUS VivoBook 14 X412DA-EK141T AMD Quad Core Ryzen 5-3500U 14" (35.56cms) FHD Thin and Light Laptop (1.50 Kg), Transparent Silver ' price={890.14} image='https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6319/6319981_sd.jpg' 
            rating={5} />
           <Product 
            id="49538094" 
            title=' Xiaomi Redmi Note 9 Pro 128GB + 6GB RAM, 6.67" FHD+ , 64MP AI Quad Camera, Qualcomm Snapdragon 720G LTE ' price={450.01} image='https://everythingxiaomi.com/wp-content/uploads/2021/03/Redmi-Note-10-Pro-Max.jpg' 
            rating={5} /> 
           </div>
           <div className="home__row">
           <Product
            id="49538094" 
            title=' Samsung 55" SUHD 4K Flat Smart TV JS8000 Series 8

            UA55JS8000JXZK
            
            Nano Crystal Colour
            SUHD REMASTERING ENGINE
            Peak Illuminator Pro ' price={1120.94} image='https://images.samsung.com/is/image/samsung/sa-en_UA50HU7000RXUM_001_Front_black?$TM-Gallery$' 
            rating={5} />  
           </div>
           </div> 
        </div>
}

export default Home
