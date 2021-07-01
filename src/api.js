import axios from "axios"
export const fetchProductList=async()=>{
    const {data}=await axios.get("https://60b8a865b54b0a0017c04257.mockapi.io/api/v1/products");
    return data;
}
export const fetchProduct=async()=>{
    const {data}=await axios.get(`https://60b8a865b54b0a0017c04257.mockapi.io/api/v1/products`);
    return data;
}