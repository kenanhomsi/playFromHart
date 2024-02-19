import sublogo from '../assets/sublogo.png'
import logo from '../assets/logo.png'

const Navbar = (props) => {
   

    return (
    <div className="Navbar_container">
        <div className="socialmedia">
            <div className="text">
                <p>أحد منتجات</p>
                <img src={sublogo} alt="sublogo"/>
            </div>
            <div className="icons">
                <a href="#"><i className="fa-brands fa-tiktok" ></i></a>
                <a href="#"><i className="fa-brands fa-square-instagram "></i></a>
            </div>
        </div>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
        {props.OrderBtnState =='on' &&
        <div className="order_btn">
            <a href="#Footer" >
            <i className="fa-solid fa-cart-arrow-down"></i>   <span>أطلب اللعبة الاّن</span>

            </a>
        </div>}
    </div>
  )
}

export default Navbar