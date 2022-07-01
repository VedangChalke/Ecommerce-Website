const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML =`
    <div class="footer-content">
            <img src="IMG/Craftivia-removebg-preview.png" class="logo" alt="">
        </div>
        <p class="footer-title">about company</p>
        <p class="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam facere harum corrupti ex dicta unde at porro ut doloremque necessitatibus voluptas tempore odio voluptate quasi consequuntur, vel totam quia vitae.</p>
        <p class="info-contact">Write to us - help@craftivia.com, customersupport@craftivia.com</p>
        <p class="info-contact">Call us - 1800 000 0012</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">terms & services</a>
                <a href="#" class="social-link">privacy policies</a>
            </div>
            <div>
                <a href="#" class="social-media">
                    <img src="img/instagram icon.png" alt="">
                    <img src="img/facebook icon.png" alt="">
                    <img src="img/twitter icon.png" alt="">            
                </a>
            </div>
        </div>
        <P class="footer-credit">Everything for Your Home</P>
    `;
 }

 createFooter();