import React from 'react'

function Blog() {
  return (
    <div className="container-fluid p-5">
    <div className="mb-5 text-center">
      <h5 className="text-primary text-uppercase">Our Blog</h5>
      <h1 className="display-3 text-uppercase mb-0">Latest Blog Post</h1>
    </div>
    <div className="row g-5">
      <div className="col-lg-4">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src="img/blog-1.jpg" alt />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-light text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 text-uppercase text-light" href>Sed amet tempor amet sit kasd sea lorem</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src="img/blog-2.jpg" alt />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-light text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 text-uppercase text-light" href>Sed amet tempor amet sit kasd sea lorem</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="blog-item">
          <div className="position-relative overflow-hidden rounded-top">
            <img className="img-fluid" src="img/blog-3.jpg" alt />
          </div>
          <div className="bg-dark d-flex align-items-center rounded-bottom p-4">
            <div className="flex-shrink-0 text-center text-secondary border-end border-secondary pe-3 me-3">
              <span>01</span>
              <h6 className="text-light text-uppercase mb-0">January</h6>
              <span>2045</span>
            </div>
            <a className="h5 text-uppercase text-light" href>Sed amet tempor amet sit kasd sea lorem</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Blog