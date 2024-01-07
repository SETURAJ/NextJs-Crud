/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
     MONGO_URI: "mongodb+srv://superheros:*@cluster0.lleo2fz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  }
} 

module.exports = nextConfig
 
