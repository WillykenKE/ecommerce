import React from "react"
import {useLocation, Link} from 'react-router-dom';

function Home (){
    const location=useLocation()

    return (
        <div className="homepage">
        <div class="px-4 p5-5 my-4 text-center">
        <h1 class="display-5 fw-bold">Hello {location.state.id}</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-1">Get more, pay less. Complete the payment and get a discount + free delivery on 4 different purchase.</p>
          <p className="text-warning"><span className="text-danger fw-bold me-2">!</span>Sorry, we are maintaining visa and master card, kindly pay via mpesa</p>
        </div>
      </div>
    <div class="container">
  <main>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center" style={{transform: "scale(1)"}}>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Visa</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary disabled">Make payment</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">
          <div class="card-header py-3">
            <h4 class="my-0 fw-normal">Master Card</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary disabled">Make payment</button>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm border-primary">
          <div class="card-header py-3 border-primary">
            <h4 class="my-0 fw-normal">M-pesa</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29<small class="text-body-secondary fw-light">/mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Make payment</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center pb-2">
            <Link to="/" class="btn btn-danger btn-lg px-4" href="/" role="button">Cancel payment</Link>
          </div>
      
            <small class="d-none">Hello {location.state.id} and welcome to our Websiteq</small>

        </div>
    )
}

export default Home