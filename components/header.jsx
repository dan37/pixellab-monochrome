export default function Header() {
  return (
    <div className="header-mobile  d-flex flex-column mt-2">
      <div className="header-secondary">
        {/* header-secondary-inner */}
        <div className="banner-header">
          <div className="header-secondary-inner container d-flex justify-content-between px-0">
            <p className="d-block  d-md-none d-lg-none">monochrome</p>

            {/* banner-header-content */}
            <div className="banner-header-content d-flex justify-content-between container-desktop">
              <section className="header-connect d-none  d-md-block d-lg-block mt-2 px-4">
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
              <div className="header-controls d-flex">
                <form className="mobile-search-controls d-none  d-md-block d-lg-block">
                  <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="search"
                  />
                  <button className="button-search border-0" title="Search">
                    <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                  </button>
                </form>

                <div className="mobile-user-controls d-flex ms-3">
                  <ul className="d-flex gap-4">
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
                </div>
              </div>
            </div>
            {/* end banner-header-content */}
          </div>
        </div>
        {/* end header secondary inner */}
      </div>

      <div className="header-primary">
        <div className="header-primary-inner">
          <div className="mobile-header-content container d-flex gap-5 align-items-center justify-content-between px-0 d-block  d-md-none d-lg-none">
            <ul>
              <li>
                <a href="" title="Menu">
                  <i className="fa-solid fa-bars fa-2x burger"></i>
                </a>
              </li>
            </ul>

            <form className="mobile-search-controls">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="search"
              />
              <button className="button-search border-0" title="Search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </div>

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
        </div>
      </div>

      <div className="banner-header-mobile">
        <div className="banner-mobile-content container  d-flex justify-content-end align-items-end d-block  d-md-none d-lg-none">
          <a className="text-center" href="">
            new in
          </a>
        </div>
      </div>
    </div>
  );
}
