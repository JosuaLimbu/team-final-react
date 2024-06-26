import React from 'react'

function About() {
  return (
    <div className="container-fluid p-5">
    <div className="row gx-5">
      <div className="col-lg-5 mb-5 mb-lg-0" style={{minHeight: 500}}>
        <div className="position-relative h-100">
          <img className="position-absolute w-100 h-100 rounded" src="img/about.jpg" style={{objectFit: 'cover'}} />
        </div>
      </div>
      <div className="col-lg-7" data-aos="fade-down" data-aos-easing="ease-in-back"
          data-aos-delay="4000"
          data-aos-offset="0"
          data-aos-duration="1000">
        <div className="mb-4">
          <h5 className="text-primary text-uppercase">About Us</h5>
          <h1 className="display-3 text-uppercase mb-0">Welcome to Gymster</h1>
        </div>
        <h4 className="text-body mb-4">Diam dolor diam ipsum tempor sit. Clita erat ipsum et lorem stet no labore lorem sit clita duo justo magna dolore</h4>
        <p className="mb-4">Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo at ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.</p>
        <div className="rounded bg-dark p-5">
          <ul className="nav nav-pills justify-content-between mb-3">
            <li className="nav-item w-50">
              <a className="nav-link text-uppercase text-center w-100 active" data-bs-toggle="pill" href="#pills-1">About Us</a>
            </li>
            <li className="nav-item w-50">
              <a className="nav-link text-uppercase text-center w-100" data-bs-toggle="pill" href="#pills-2">Why Choose Us</a>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade show active" id="pills-1">
              <p className="text-secondary mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
            </div>
            <div className="tab-pane fade" id="pills-2">
              <p className="text-secondary mb-0">Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About
