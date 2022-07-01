const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <div class="nav-items">
    <img src="IMG/Craftivia-removebg-preview.png" class="brand-logo" alt="">
        <div class="search">
            <input type="text" class="search-box" placeholder=" search brand, product" id="searchBar">
            <button class="search-btn" type="button">search</button>
        </div>
        <a href="login.php"><img src="img/user.png" alt=""></a>
        <a href="cart.html"><img src="img/cart.png" alt=""></a>
        <a href="aboutus.html"><img src="img/aboutus8.png" alt=""></a>
        

    </div>
</div>
<ul class="links-container">
    <li class="link-items"><a href="index.html" class="link">Home</a> </li>
    <li class="link-items"><a href="livingroom.html" class="link">Living Room</a> </li>
    <li class="link-items"><a href="bedroom.html" class="link">Bed Room</a> </li>
    <li class="link-items"><a href="kitchenware.html" class="link">Kitchenware</a> </li>
    <li class="link-items"><a href="bathroom.html" class="link">Bathroom Products</a> </li>
    
</ul>
    `;
}

createNav();

// search box

const searchBtn = document.querySelector('.search-btn');
const searchBox = document.querySelector('.search-box');
searchBtn.addEventListener('click', () => {
    if(searchBox.value.length){
        location.href = `/project5/${searchBox.value}.html`
    }
})