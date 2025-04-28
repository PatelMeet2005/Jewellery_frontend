// src/utils/wishlist.js

export const getWishlist = () => {
    return JSON.parse(localStorage.getItem('wishlist')) || [];
  };
  
  export const addToWishlist = (product) => {
    const wishlist = getWishlist();
    wishlist.push(product);
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
  
  export const removeFromWishlist = (productId) => {
    const wishlist = getWishlist();
    const updatedWishlist = wishlist.filter((item) => item._id !== productId);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };
  
  export const isProductInWishlist = (productId) => {
    const wishlist = getWishlist();
    return wishlist.some((item) => item._id === productId);
  };
  