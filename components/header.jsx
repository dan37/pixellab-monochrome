export default function Header() {
  return (
    <header className="header">
      <div className="banner-header d-none d-md-block d-lg-block">
        <div className="banner-header-content container-desktop">
          <section className="header-top">
            <section className="header-connect">
              <ul>
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

                <li>
                  <a href="tel:+4401023456789" title="Call us">
                    CALL US +4401023456789
                  </a>
                </li>
              </ul>
            </section>
            {/* <!-- /.header-connect --> */}

            <section className="header-controls">
              <form className="header-search-controls">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search"
                />
                <button title="Search">
                  <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                </button>
              </form>
              {/* <!-- /.header-search-controls --> */}

              <section className="header-user-controls">
                <ul>
                  <li>
                    <a title="user account" href="">
                      <i className="fa-solid fa-user"></i>
                    </a>
                  </li>

                  <li>
                    <a title="whish list" href="">
                      <span className="product-tile-badge">
                        <i className="fa-solid fa-heart"></i>
                      </span>
                    </a>
                  </li>

                  <li>
                    <a title="cart" href="">
                      <i className="fa-solid fa-bag-shopping"></i>
                    </a>
                  </li>
                </ul>
              </section>
              {/* <!-- /.header-user-controls --> */}
            </section>
            {/* <!-- /.header-controls --> */}
          </section>
          {/* <!-- /.header-top --> */}
        </div>
        {/* <!-- /.banner-header-content --> */}
      </div>
      {/* <!-- banner-header --> */}

      <section className="header-bottom d-none d-md-block d-lg-block">
        <nav className="nav-bottom container">
          <ul>
            <li>
              <a href="" title="new arrivals">
                NEW ARRIVALS
              </a>
            </li>

            <li>
              <a href="" title="brands">
                BRANDS
              </a>
            </li>

            <li>
              <a href="" title="men's">
                MEN S
              </a>
            </li>

            <li>
              <a href="" title="women's">
                WOMEN S
              </a>
            </li>

            <li>
              <a href="" title="accessories">
                ACCESSORIES
              </a>
            </li>

            <li>
              <a href="" title="lookbook">
                LOOKBOOK
              </a>
            </li>
          </ul>
        </nav>
      </section>
      {/* <!-- /.header-bottom --> */}
    </header>
  );
}
