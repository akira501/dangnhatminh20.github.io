class MyTableCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: "./images/cart_Page/sp5.jpg",
          name: "Bò bít tết Kobe",
          priceProduct: 150000,
          quanlity: 2
        },
        {
          id: 2,
          image: "./images/cart_Page/img2.jpg",
          name: "Bánh mì",
          priceProduct: 10000,
          quanlity: 1
        },
        {
          id: 3,
          image: "./images/cart_Page/img1.jpg",
          name: "Bánh Matcha",
          priceProduct: 100000,
          quanlity: 1
        }
      ],
      coupon: 0, 
      couponInput: ''
    };
  }
  increnentItem(id) {
    const newProduct = this.state.products.map(product => {
      if (product.id === id && product.quanlity < 20) {
        product.quanlity++;
      }
      return product;
    });
    this.setState({
      product: newProduct
    });
  }
  decreaseItem(id) {
    const newProduct = this.state.products.map(product => {
      if (product.id === id && product.quanlity > 0) {
        product.quanlity--;
      }
      return product;
    });
    this.setState({
      product: newProduct
    });
  }
  //get value in input
  getCouponInput(e){
    const newCouponInput = e.target.value;
    this.setState({
      couponInput: newCouponInput
    });
  }
  //Kiem tra couponCode
  useCoupon(){
    const newCoupon=0.25;
    if(this.state.couponInput=='YUMMY'){
      alert('Đã áp dụng mã giảm giá thành công!');
      this.setState({
        coupon: newCoupon
      })
    }
    else{
      alert('Sai mã, vui lòng thử lại!');
    }
  }
  // Xóa sản phẩm theo id
  removeProduct(id) {
    // Tạo ra mảng mới chứa các sản phẩm có id khác với id truyền vào
    const newProduct = this.state.products.filter(product => {
      return product.id !== id;
    });

    // Cập nhật lại state (không chứa sản phẩm có id truyền vào)
    this.setState({
      products: newProduct
    });
  }


  render() {
    const fomatNumber = new Intl.NumberFormat("vn-VN", {
      style: "currency",
      currency: "vnd"
    });
    const product = [...this.state.products]; //Use spread operator es6
    const coupon =this.state.coupon;
    //Tính tổng
    const subTotal = this.state.products.reduce(
      (totalProduct, product, index, products) => {
        return (totalProduct += product.quanlity * product.priceProduct);
      },
      0
    );
    //Nhập mã giảm giá
    const total = subTotal-(subTotal*(coupon))

    
    const listItems = this.state.products.map(product => (
      <tr className="cart-item" key={product.id}>
        <td className="product-thumbnail">
          <a href="#">
            <img className="img-fluid" src={product.image} />
          </a>
        </td>
        <td className="product-name">
          <a href="#">{product.name}</a>
        </td>
        <td className="product-price">
          {fomatNumber.format(product.priceProduct)}
        </td>
        <td className="product-quantity">
          <div className="quantity">
            <button
              className="qty-decrease"
              onClick={e => this.decreaseItem(product.id, e)}
              type="button"
            >
              -
            </button>
            <input
              id="display_quantity"
              type="text"
              name="quantity"
              value={product.quanlity}
              onChange={this.handleQuantity}
            ></input>
            <button
              className="qty-increase"
              onClick={e => this.increnentItem(product.id, e)}
              type="button"
            >
              +
            </button>
          </div>
        </td>
        <td className="product-subtotal">
          {fomatNumber.format(product.priceProduct * product.quanlity)}
        </td>
        <td className="product-remove">
          <button
            onClick={e => this.removeProduct(product.id, e)}
          >
            <i className="far fa-trash-alt" />
          </button>
        </td>
      </tr>
    ));
    return (
      <section className="section_1 container">
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
              <div className="title_coupon">Nhập mã giảm giá (Nhập "YUMMY")</div>
              <input type="text" onChange={e => this.getCouponInput(e)} placeholder="Nhập mã giảm giá" />
              <button className="btn apply-coupon link-to" onClick={e => this.useCoupon(e)}>Áp dụng</button>
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
                    <td>{subTotal}</td>
                  </tr>
                  <tr className="order-total">
                    <th>Thành tiền</th>
                    <td className="amount">
                      <strong>{total}</strong>
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
      </section>
    );
  }
}
