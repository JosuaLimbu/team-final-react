import React from 'react'

function Classes() {
  return (
    <div className="container-fluid programe position-relative px-5 mt-5" style={{marginBottom: 135}}>
    <div className="row g-5 gb-5">
      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
          <i className="flaticon-six-pack display-1 text-primary" />
          <h3 className="text-uppercase my-4">Body Building</h3>
          <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
          <i className="flaticon-barbell display-1 text-primary" />
          <h3 className="text-uppercase my-4">Weight Lefting</h3>
          <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="bg-light rounded text-center p-5">
          <i className="flaticon-bodybuilding display-1 text-primary" />
          <h3 className="text-uppercase my-4">Muscle Building</h3>
          <p>Sed amet tempor amet sit kasd sea lorem dolor ipsum elitr dolor amet kasd elitr duo vero amet amet stet</p>
          <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
        </div>
      </div>
      <div className="col-lg-12 col-md-6 text-center">
        <h1 className="text-uppercase text-light mb-4">30% Discount For This Summer</h1>
        <a href className="btn btn-primary py-3 px-5">Become A Member</a>
      </div>
    </div>
  </div>
  )
}

export default Classes