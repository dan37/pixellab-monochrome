  export default function Footermobile() {
    return (
      <div className="footer-mobile">
        <div className="content-mobile container-mobile  d-block  d-md-none d-lg-none">
        <div className="footer-connect">
          <div className="footer-newsletter">
            <h1 className="text-center">Let s connect</h1>
            <p className="text-center">Be the first to receive exclusives offers</p>
            <form className="form-newsletter d-flex flex-column align-items-center">
              <label htmlFor="email">Email</label>
              <input type="email"  name="email" id="email" />
              <button type="submit"  className="d-block">submit</button>
            </form>

          <p className="paragraph-mobile text-center">I agree with <span>Privacy Policy</span> and i want to receive<br/> emails from Monochrome</p>
          </div>
          <div className="footer-social">
            <p className="text-center">We are highly likeable</p>

            <ul className="nav-mobile d-flex justify-content-center gap-3">
              <li>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="youtube"
                ><i className="fa-brands fa-youtube"></i></a>
              </li>

              <li>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="twitter"
                ><i className="fa-brands fa-twitter"></i></a>
              </li>

              <li>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="facebook"
                ><i className="fa-brands fa-facebook"></i></a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="instagram"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="footer-nav-help">

          <h1 className="heading-footer text-center">How can we help?</h1>
          <div className="nav-mobile-content d-flex justify-content-center gap-5">
          <nav className="footer-nav-mobile">
            <ul>
              <li>
                <a href="" title="about-us">
                  about us
                </a>
              </li>

              <li>
                <a href="" title="career">
                  career
                </a>
              </li>

              <li>
                <a href="" title="affiliates">
                  affiliates
                </a>
              </li>

              <li>
                <a href="" title="advertising">
                  advertising
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- /.footer-nav --> */}

          <nav className="footer-nav-mobile">
            <ul>
              <li>
                <a href="" title="fit-advice">
                  style &amp; fit
                </a>
              </li>

              <li>
                <a href="" title="faqs">
                  faqs
                </a>
              </li>

              <li>
                <a href="" title="delivery">
                  delivery
                </a>
              </li>

              <li>
                <a href="" title="exchanges-return">
                return
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- /.footer-nav --> */}
        </div>

          <div className="terms text-center">
            <p><span>terms 	&amp; conditions</span></p>
            <p><span>privacy 	&amp; cookies</span></p>
          </div>

        </div>


        </div>

      </div>




    );

    }
