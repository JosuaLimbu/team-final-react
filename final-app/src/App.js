import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Classes from './components/Classes';
import Trains from './components/Trains';

function App() {
  return (
    <>
    <div>
    <Navbar />
    <Header />
    <About />
    <Classes />
    <Trains />
  
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
  <div className="container-fluid bg-dark text-secondary px-5 mt-5">
    <div className="row gx-5">
      <div className="col-lg-8 col-md-6">
        <div className="row gx-5">
          <div className="col-lg-4 col-md-12 pt-5 mb-5">
            <h4 className="text-uppercase text-light mb-4">Get In Touch</h4>
            <div className="d-flex mb-2">
              <i className="bi bi-geo-alt text-primary me-2" />
              <p className="mb-0">123 Street, New York, USA</p>
            </div>
            <div className="d-flex mb-2">
              <i className="bi bi-envelope-open text-primary me-2" />
              <p className="mb-0">info@example.com</p>
            </div>
            <div className="d-flex mb-2">
              <i className="bi bi-telephone text-primary me-2" />
              <p className="mb-0">+012 345 67890</p>
            </div>
            <div className="d-flex mt-4">
              <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-twitter" /></a>
              <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-facebook-f" /></a>
              <a className="btn btn-primary btn-square rounded-circle me-2" href="#"><i className="fab fa-linkedin-in" /></a>
              <a className="btn btn-primary btn-square rounded-circle" href="#"><i className="fab fa-instagram" /></a>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
            <h4 className="text-uppercase text-light mb-4">Quick Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Home</a>
              <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />About Us</a>
              <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Class Schedule</a>
              <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Our Trainers</a>
              <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Latest Blog</a>
              <a className="text-secondary" href="#"><i className="bi bi-arrow-right text-primary me-2" />Contact Us</a>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5">
            <h4 className="text-uppercase text-light mb-4">Popular Links</h4>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Home</a>
              <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />About Us</a>
              <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Class Schedule</a>
              <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Our Trainers</a>
              <a className="text-secondary mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2" />Latest Blog</a>
              <a className="text-secondary" href="#"><i className="bi bi-arrow-right text-primary me-2" />Contact Us</a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-5">
          <h4 className="text-uppercase text-white mb-4">Newsletter</h4>
          <h6 className="text-uppercase text-white">Subscribe Our Newsletter</h6>
          <p className="text-light">Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
          <form action>
            <div className="input-group">
              <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
              <button className="btn btn-dark">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid py-4 py-lg-0 px-5" style={{background: '#111111'}}>
    <div className="row gx-5">
      <div className="col-lg-8">
        <div className="py-lg-4 text-center">
          <p className="text-secondary mb-0">© <a className="text-light fw-bold" href="#">Your Site Name</a>. All Rights Reserved.</p>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="py-lg-4 text-center credit">
          <p className="text-light mb-0">Designed by <a className="text-light fw-bold" href="https://htmlcodex.com">HTML Codex</a></p>
        </div>
      </div>
    </div>
  </div>
  <a href="#" className="btn btn-dark py-3 fs-4 back-to-top"><i className="bi bi-arrow-up" /></a>
</div>



    </>
  );
}

export default App;
