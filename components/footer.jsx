export default function Footer() {
  return (
    <div className="footer-mobile">
      <div className="content-mobile container-footer">
        {/* nav-inner */}
        <div className="nav-inner">
          <div className="footer-connect">
            <div className="footer-newsletter">
              <h1 className="text-center">Let s connect</h1>
              <p className="text-center">
                Be the first to receive exclusives offers
              </p>
              <form className="form-newsletter-mobile d-flex flex-column align-items-center">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
                <button type="submit" className="d-block">
                  submit
                </button>
              </form>

              <p className="paragraph-mobile text-center">
                I agree with <span>Privacy Policy</span> and i want to receive
                <br /> emails from Monochrome
              </p>
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
                  >
                    <i className="fa-brands fa-youtube"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="twitter"
                  >
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="facebook"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
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
          {/* large screen */}
          <section className="footer-support">
            <ul>
              <li>
                Call us
                <br />
                <a href="tel:+44(0)1023456789" title="Call us">
                  +44(0)1023456789
                </a>
              </li>

              <li>
                <a href="mailto:customercare@yahoo.com" title="customer-care">
                  email customer care
                </a>
              </li>

              <li>
                <a href="" title="mobile-version">
                  see mobile version
                </a>
              </li>
            </ul>

            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="" title="fit-advice">
                    style & fit advice
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
                    exchanges & return
                  </a>
                </li>
              </ul>
            </nav>
            {/* <!-- /.footer-nav --> */}

          </section>
          {/* end large screen */}

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

            </div>

          {/* large screen */}
          <section className="footer-connect-people">
          <form className="footer-newsletter-desktop">
            <label htmlFor="sign-in">sign up for our newsletter</label>
            <br />
            <input type="text" name="sign-in" id="sign-in" />
            <br />

            <button type="submit" title="submit">
              Submit
            </button>
          </form>

          <ul className="footer-social-media">
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="youtube"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="twitter"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </li>

            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                title="instagram"
              >
                <i className="fa-brands fa-instagram-square"></i>
              </a>
            </li>
          </ul>
          {/* <!-- /.footer-social-media --> */}
          </section>
          {/* end large screen */}

            <div className="terms text-center">
              <p>
                <span>terms &amp; conditions</span>
              </p>
              <p>
                <span>privacy &amp; cookies</span>
              </p>
            </div>
          </div>
        </div>
        {/* end nav inner */}
      </div>
    </div>
  );
}
