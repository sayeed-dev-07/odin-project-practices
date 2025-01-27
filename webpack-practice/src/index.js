import "./style.css"
import { greeting } from "./greeting.js";

console.log(greeting);

// import ginImg from "./gin.jpeg";
const img = document.createElement('img');
img.src = "https://cdn.create.vista.com/api/media/medium/423208882/stock-photo-cropped-view-young-woman-brown-blazer-squeezing-lemon-glass-alcohol?token=";
document.body.appendChild(img);