export default function Footer() {
  return (
    <footer className="footer  d-none d-md-block d-lg-block">
      <div className="footer-tail container-desktop">
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

            <li className="mobile-version">
              <a href="" title="mobile-version">
                see mobile version
              </a>
            </li>
          </ul>

          <nav className="footer-nav">
            <ul>
              <li>
                <a href="" title="fit-advice">
                  style &amp; fit advice
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
                  exchanges &amp; return
                </a>
              </li>
            </ul>
          </nav>
          {/* <!-- /.footer-nav --> */}

          <nav className="footer-nav">
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
        </section>
        {/* <!-- footer-support --> */}

        <section className="footer-connect">
          <form className="footer-newsletter">
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
        {/* <!-- footer-connect --> */}
      </div>
    </footer>
  );
}
