class MyTableCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          image: './images/cart_Page/sp5.jpg',
          name: 'Bò bít tết Kobe',
          priceProduct: 150000,
          quality: 2,
        },
        {
          image: './images/cart_Page/img2.jpg',
          name: 'Bánh mì',
          priceProduct: 10000,
          quality: 1,
        },
        {
          image: './images/cart_Page/img1.jpg',
          name: 'Bánh Matcha',
          priceProduct: 100000,
          quality: 1,
        },
      ]
    };
  }
  render() {
    let fomatNumber=new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'vnd' });
    console.log();
    const product = this.state.products[0, 1, 2];
    const listItems = this.state.products.map((product) =>
      <tr className="cart-item">
        <td className="product-thumbnail">
          <a href="#">
            <img
              className="img-fluid"
              src={product.image}
            />
          </a>
        </td>
        <td className="product-name">
          <a href="#">{product.name}</a>
        </td>
        <td className="product-price">{fomatNumber.format(product.priceProduct)}</td>
        <td className="product-quantity">
          <div className="quantity">
            <button className="qty-decrease" onclick type="button">
              -
                </button>
            <input
              id="qty"
              type="text"
              name="quantity"
              defaultValue={product.quality}
              size={4}
            />
            <button className="qty-increase" onclick type="button">
              +
                </button>
          </div>
        </td>
        <td className="product-subtotal" />
        <td className="product-remove">
          <button>
            <i className="far fa-trash-alt" />
          </button>
        </td>
      </tr>
    )
    return (
      < section className="section_1 container" >
        <div className="title text-center">
          Giỏ hàng
        <hr />
        </div>
        <div className="sub_title text-center">Home &gt; Giỏ hàng</div>
        <div className="row cart_area">
          <div className="cart-container col-12">
            <table className="cart">
              <thead>
                <tr>
                  <th className="product-thumbnail">Ảnh sản phẩm</th>
                  <th className="product-name">
                    <span className="hidden-mobile">Tên sản phẩm</span>
                  </th>
                  <th className="product-price">
                    <span className="hidden-mobile">Đơn giá</span>
                  </th>
                  <th className="product-quantity">
                    <span className="hidden-mobile">Số lượng</span>
                  </th>
                  <th className="product-subtotal">Thành tiền</th>
                  <th className="product-remove">Chỉnh sửa</th>
                </tr>
              </thead>
              <tbody>
                {/* copy */}
                {/* {products} */}
                {listItems}
                <tr>
                  <td className="actions" colSpan={6}>
                    <a className="link-to continue" href="shop.html">
                      Tiếp tục mua hàng <i className="fa fa-angle-right" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-6 cart-coupon-area">
            <div className="cart-coupon">
              <div className="title_coupon">Nhập mã giảm giá</div>
              <input type="text" defaultValue placeholder="Nhập mã giảm giá" />
              <button className="btn apply-coupon link-to">Áp dụng</button>
            </div>
          </div>
          <div className="col-6 cart-total-area">
            <div className="cart-total">
              <div className="title_total text-center">Tổng tiền</div>
              <hr />
              <table>
                <tbody>
                  <tr className="cart-subtotal">
                    <th>Tạm tính</th>
                    <td />
                  </tr>
                  <tr className="cart-discount">
                    <th>
                      Giảm giá
                    <span className="discount-rate" />
                    </th>
                    <td>0</td>
                  </tr>
                  <tr className="order-total">
                    <th>Thành tiền</th>
                    <td className="amount">
                      <strong />
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="checkout-proceed">
                <a href="checkOut.html">
                  <div className="text-right">
                    <button className="btn">Đặt hàng</button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section >
    )
  }
}
