<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://ender1311.github.io/minions_store/dist/">
    <img src="https://ender1311.github.io/imgs/minions/Bob.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Minions eCommerce Store</h3>

  <p align="center">
    eCommerce Store
    <br />
    <a href="https://github.com/ender1311/minions_store"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ender1311/minions_store">View Demo</a>
    ·
    <a href="https://github.com/ender1311/minions_store/issues">Report Bug</a>
    ·
    <a href="https://github.com/ender1311/minions_store/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
This is an eCommerce project. 
User can browse different departments of the store through the navbar. 
User can add items to the cart. User can remove individual items from the cart or remove all items from the cart. 
Responsive elements helps user know quantity of items that have been added.
Purchase is done via stripe API
Added client side fetch request to backend server upon initiating purchase
Added server.js which accepts http post request from the client side.

Minions characters created by Illumination. 
[![Product Name Screen Shot][product-screenshot]](https://ender1311.github.io/minions_store/dist/)


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![React][React.js]][React-url]
* [![React Router][React-router]][React-router-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.


### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/ender1311/minions_store.git
   ```
2. Install NPM packages
   use react typescript version
   ```sh
  npm i vite .
  npm i
   ```
3. Start the dev server on your local environment
   ```js
   npm run dev
   ```

4. Start a second server from the /src/stripe_payment/server/server.js file
   ```js
   npm run devStart
   ```

### Info
Try it out. Add items that you want to your cart.
See the items in your shopping cart. 

using stripe API for payment
go to stripe api documentation here
https://stripe.com/docs/api/checkout/sessions/object?lang=node


parameters are here:
https://stripe.com/docs/api/checkout/sessions/create?lang=node

This is a Stripe 'TEST' api which means no actual purchase is being done. 

When testing interactively, use a card number, such as 4242 4242 4242 4242. Enter the card number in the Dashboard or in any payment form.

Use a valid future date, such as 12/34.
Use any three-digit CVC (four digits for American Express cards).
Use any value you like for other form fields.

documentation here:
https://stripe.com/docs/testing


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage


[![add items to cart][product-demo]]

[![stripe payment page][payment-screenshot]]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1: Add/Remove Cart Buttons used to modify items in cart
- [ ] Feature 2: See what is currently in Cart in sidebar
- [ ] Feature 3: Purchase via stripe button
- [ ] Feature 4: Easily add items via json file


See the [open issues](https://github.com/ender1311/minions_store/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - danluk1311@gmail.com

Project Link: [https://github.com/ender1311/minions_store](https://github.com/ender1311/minions_store)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/ender1311/minions_store.svg?style=for-the-badge
[contributors-url]: https://github.com/ender1311/minions_store/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/ender1311/minions_store.svg?style=for-the-badge
[forks-url]: https://github.com/ender1311/minions_store/network/members
[stars-shield]: https://img.shields.io/github/stars/ender1311/minions_store.svg?style=for-the-badge
[stars-url]: https://github.com/ender1311/minions_store/stargazers
[issues-shield]: https://img.shields.io/github/issues/ender1311/minions_store.svg?style=for-the-badge
[issues-url]: https://github.com/ender1311/minions_store/issues
[license-shield]: https://img.shields.io/github/license/ender1311/minions_store.svg?style=for-the-badge
[license-url]: https://github.com/ender1311/minions_store/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/danluk1311
[product-screenshot]: https://ender1311.github.io/coding_central/imgs/ecommerce_demo.png
[payment-screenshot]: https://ender1311.github.io/coding_central/imgs/stripe_payment.png
[product-demo]:https://ender1311.github.io/coding_central/imgs/eCommerce_demo2.gif
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[React-router]: https://img.shields.io/badge/-React%20Router-CA4245?logo=react-router
[React-router-url]: https://reactrouter.com/en/main
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
