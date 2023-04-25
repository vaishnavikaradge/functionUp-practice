//import React from 'react'
import './App.css';
import  ProductCard from './productCard';

const App=()=> {
  
    return( 
    
    <div className="App">
    <ProductCard

      productId = '1'
      productPic = "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i4jPhKEFw1NE/v0/1200x857.jpg"
      productName = 'Smart Sneaker'
      brand = 'Nike'
      productDescription = 'Adapet to track real time sport performance'
      price = '$350'
      rating = '4.9'

    />  

    <ProductCard

      productId = '2'
      productPic = "https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/bc365e4b823146c39befa95101256107_9366/Trefoil_Hoodie_Black_DV2870_01_laydown.jpg"
      productName = 'Hoodie'
      brand = 'ADIDAS'
      productDescription = 'adidas Trefoil Hoodie - Black'
      price = '$45.00'
      rating = '4'

    />

    <ProductCard

      productId = '3'
      productPic = "https://www.apple.com/newsroom/images/product/ipad/standard/apple_ipad-pro-spring21_lp_04202021.jpg.news_app_ed.jpg"
      productName = 'iPad Pro'
      brand = 'Apple'
      productDescription = 'iPad Pro featuring breakthrough M1 chip, ultra-fast 5G, and stunning 12.9-inch Liquid Retina XDR display'
      price = '$1381.76'
      rating = '4.9'

    />

    <ProductCard

      productId = '4'
      productPic = "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//l/i/pink-transparent-pink-full-rim-cat-eye-lenskart-air-classic-la-e11583-c9-eyeglasses_g_9534.jpg"
      productName = 'Eye-Glasses'
      brand = 'lenskart'
      productDescription = 'Pink Transparent Full Rim Cat Eye Eyeglasses'
      price = '$12.19'
      rating = '4.5'

    />

    <ProductCard

      productId = '5'
      productPic = "https://www.beatsbydre.com/content/dam/beats/web/product/earbuds/beats-fit-pro/plp/bbd.plpasset.earbuds.fitpro-v2.jpg.large.2x.jpg"
      productName = 'Earbuds'
      brand = 'Beats'
      productDescription = 'wireless, Flexible, secure-fit wingtips Active Noise Cancelling (ANC) and Transparency mode'
      price = '$199.99'
      rating = '4.9'

    />
    
   
  </div>

  );
}

export default App;
