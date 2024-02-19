import logo from '../assets/logo.png'
import { useState } from 'react';
import axios from 'axios'
const Footer = (props) => {
    const [formData, setFormData] = useState({
        FullName: '',
        phoneNumebr: 0,
        zipCode:0,
        OrderStatus:"قيد الانتظار"
        });
        
        const handleChange = (e) => {
        
        const { className, value } = e.target;
        
        setFormData({...formData, [className]: value });
        
        };
        const handleSelect= (e)=>{
            const { value }= e.target;
            setFormData({...formData, zipCode: value });

        }
        
        const handleSubmit = async (e) => {

        e.preventDefault();
        
        try {
        
        const response = await axios.post('https://game-api-hex6.onrender.com/api/v1/Customer/',formData).then((res)=>{
        })
        
        console.log('Form data submitted successfully:', response.data);
        
        } catch (error) {
        
        console.error('Error submitting form data:', error);
        
        }
        document.querySelector('.FullName').value="";
        document.querySelector('.phoneNumebr').value="";

        };
        const handleClick=()=>{
            document.querySelector('.order_click_btn').innerHTML="تم تأكيد الطلب بنجاج "
        document.querySelector('.order_click_btn').setAttribute('id','Active');
    }
    if(props.OrderBtnState){
        let x= document.querySelector('.info');
        x.setAttribute('class','info Active');
    }else{
        let x= document.querySelector('.info');
        x.setAttribute('class','info');
    }
  return (
    <div className="Footer" dir="rtl" id='Footer'>
        <div className="info">
            <div className="logo">
                    <img src={logo} alt="logo" />
            </div>
            <div className="text">
                <div className="up">
                    <div className="btns">
                        <a href="#">الرئيسيه</a>
                        <a href="#">الدعم الفني</a>
                        <a href="#">الشروط و الأحكام</a>
                    </div>
                    <div className="socialMedia">
                    <a href="#"><i className="fa-brands fa-tiktok" ></i></a>
                    <a href="#"><i className="fa-brands fa-square-instagram "></i></a>
                    </div>
                </div>
                <div className="down">
                    <p>جميع حقوق النشر والطبع محفوظة 2024©</p>
                </div>
            </div>
        </div>
       {
        props.OrderBtnState === 'on' &&  <div className="order-here">
        <form onSubmit={handleSubmit} action="">
            <h3>هل تريد طلب اللعبه؟</h3>
            <p>قم بملء البيانات التالية</p>
            <input type="text" className='FullName' placeholder='الإسم بالكامل' onChange={handleChange}/>
            <select name="zipcode" className='zipcode'  id="select1" onChange={handleSelect} >
                    <option value="963">963</option>
                    <option  value="666">666</option>
                    <option  value="222">222</option>
            </select>
            <input type='number' className='phoneNumebr' placeholder='رقم الجوال' onChange={handleChange} />
            <button className='order_click_btn' onClick={handleClick} type='submit'  >طلب اللعبه</button>
        </form>
        </div>   
       } 
        
    </div>
  )
}

export default Footer