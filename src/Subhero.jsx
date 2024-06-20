import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import { Carousel } from 'react-bootstrap';
import './App.css';
// import airx1 from './images/airx1.webp'
// import airv1 from './images/airv1.webp'
// import airx4 from './images/airx4.webp'

function Subhero() {
  return (
    <div className="my-4">
        <div id="myCarousel" class="carousel slide pointer-event" data-bs-ride="carousel" data-bs-interval="100">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-label="Slide 1" aria-current="true"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2" class=""></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3" class=""></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>
        
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Example headline.</h1>
            <p>Some representative placeholder content for the first slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="/">Sign up today</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="/">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"></rect></svg>

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="/">Browse gallery</a></p>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
    </div>
  )
}

export default Subhero



// function Subhero1() {
//   return (
//     <div className="container app-container">
//       <h1>E-commerce Website</h1>
//       <div className="main-content">
//         <Carousel>
//           {/* Slide 1 */}
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src= {airx1}
//               alt="Slide 1"
//             />
//           </Carousel.Item>

//           {/* Slide 2 */}
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={airv1}
//               alt="Slide 2"
//             />
//           </Carousel.Item>

//           {/* Slide 3 */}
//           <Carousel.Item>
//             <img
//               className="d-block w-100"
//               src={airx4}
//               alt="Slide 3"
//             />
//           </Carousel.Item>
// <div class="container">
        // <h1 class="mt-5">E-commerce Website</h1>
        // <div class="mt-4">
        //     <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        //         <div class="carousel-inner">
        //             <div class="carousel-item active">
        //                 <img src={airv1}alt="Slide 1"/>
        //             </div>
        //             <div class="carousel-item">
        //                 <img src={airx1} alt="Slide 2"/>
        //             </div>
        //             <div class="carousel-item">
        //                 <img src={airx4} alt="Slide 3"/>
        //             </div>
        //         </div>
        //         <a class="carousel-control-prev" href="#myCarousel" role="button" data-bs-slide="prev">
        //             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        //             <span class="visually-hidden">Previous</span>
        //         </a>
        //         <a class="carousel-control-next" href="#myCarousel" role="button" data-bs-slide="next">
        //             <span class="carousel-control-next-icon" aria-hidden="true"></span>
        //             <span class="visually-hidden">Next</span>
        //         </a>
        //     </div>
        // </div>
    //</div> 
//         </Carousel>
//       </div>
//     </div>
//   );
// }
