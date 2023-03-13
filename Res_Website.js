let gallery = [
  "https://images.wallpaperscraft.com/image/single/lion_art_vector_122213_1024x768.jpg",
  "https://images.wallpaperscraft.com/image/single/deer_art_vector_134088_1024x768.jpg",
  "https://images.wallpaperscraft.com/image/single/astronaut_spacesuit_reflection_144426_1024x768.jpg",
  "https://images.wallpaperscraft.com/image/single/deer_minimalism_vector_93845_1024x768.jpg",
  "https://images.wallpaperscraft.com/image/single/city_vector_panorama_119914_1024x768.jpg",
  "https://images.wallpaperscraft.com/image/single/river_home_art_128746_1024x768.jpg"
];

const render = () =>{
 let images = "";
 for(let i=0;i<gallery.length;i++){
    images += "<div class='card'><img src = "+gallery[i]+" alt='image'/></div>"
 }
 document.getElementById("container").innerHTML = images;
}