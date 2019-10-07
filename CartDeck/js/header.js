function MyHeader(props) {
  return (
    <header className="header_area container-fluid">
      {/*Top Header Area*/}
      {/* Top header*/}
      <div className="top navbar text-white">
        <div className="container-fluid top-content">
          <ul className="nav top-left">
            <li className="nav-item">
              <span className="fas fa-map-marker-alt" /> Tây Hồ Hà Nội
            </li>
            <li className="nav-item mr-menu">
              <span className="fas fa-mobile-alt" />
              0366312255
            </li>
          </ul>
          <ul className="nav top-right">
            <div className="top_social_bar">
              <a href="#">
                <i className="fab fa-facebook" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fab fa-twitter" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fab fa-linkedin" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fab fa-skype" aria-hidden="true" />
              </a>
              <a href="#">
                <i className="fab fa-dribbble" aria-hidden="true" />
              </a>
            </div>
          </ul>
        </div>
      </div>
      {/* Menu*/}
      <div className="menu-main container-fluid">
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand" href="#">
            YUMMY
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="page_1 nav-link" href="index.html">
                  TRANG CHỦ
                </a>
              </li>
              <li className="nav-item">
                <a className="page_2 nav-link" href="about.html">
                  GIỚI THIỆU
                </a>
              </li>
              <li className="nav-item">
                <a className="page_3 nav-link" href="menu.html">
                  THỰC ĐƠN
                </a>
              </li>
              <li className="nav-item">
                <a className="page_4 nav-link" href="blog.html">
                  BÀI VIẾT
                </a>
              </li>
              <li className="nav-item">
                <a className="page_5 nav-link" href="shop.html">
                  CỬA HÀNG
                </a>
              </li>
              <li className="nav-item-sp">
                <a className="nav-link nav-border" href="reservation.html">
                  ĐẶT BÀN
                </a>
              </li>
              <li className="nav-item-sp">
                <a className="nav-link nav-icon" href="cart.html">
                  <i className="fas fa-cart-plus" />
                </a>
              </li>
              <li className="nav-item-sp">
                <a className="nav-link nav-icon" href="#">
                  <i className="fas fa-search" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
