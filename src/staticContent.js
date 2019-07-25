const drawHeader = (containingElement) => {
    let parent = document.getElementById(containingElement)
    
    let image = document.createElement("img");
    image.src = "assets/images/restaurant_wall.jpg";
    image.alt = "Image of brick wall from restaurant";
    image.height = "500";

    let restaurantName = "Rye Restaurant";
    let h1 = document.createElement("h1");
    h1.classList.add("restaurantName");
    h1.innerText = restaurantName;

    let tagline = "Serving fresh, local ingrediants in a relaxed neighborhood setting.";
    let h2 = document.createElement("h2");
    h2.classList.add("tagline");
    h2.innerText = tagline;

    parent.appendChild(image);
    parent.appendChild(h1);
    parent.appendChild(h2);
}

export default drawHeader