export default function Headermobile() {
      return (
        <div  className="header-mobile  d-block  d-md-none d-lg-none d-flex flex-column">
        <div className="mobile-header-secondary d-flex justify-content-evenly mt-4 gap-3">
          <p>monochrome</p>
          <div className="mobile-user-controls d-flex">
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

        <div className="mobile-header-primary">
          <div className="mobile-header-content container-mobile  d-flex gap-5 align-items-center justify-content-evenly">
          <ul>
            <li>
              <a href="" title="Menu">
                <i className="fa-solid fa-bars fa-2x burger"></i>
              </a>
            </li>
          </ul>

          <form className="mobile-search-controls">
            <input type="text" name="search" id="search" placeholder="search" />
            <button className="button-search border-0" title="Search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          </div>
        </div>

        <div className="banner-header-mobile">
          <div className="banner-mobile-content container-mobile  d-flex justify-content-end align-items-end">
          <a className="text-center" href="">new in</a>
          </div>
        </div>

        </div>
      );
}

