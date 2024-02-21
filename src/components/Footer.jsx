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
        
        const response = await axios.post('https://www.playwith5.com/el3b-server/api/v1/Customer/',formData).then((res)=>{
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
    if(props.OrderBtnState === 'off'){
        let x= document.querySelector('.info');
        if(x){
        x.setAttribute('class','info Active');
        }
    }else if(props.OrderBtnState === 'on'){
        let x= document.querySelector('.info');
        if(x){
             x.setAttribute('class','info');
            }
    }
  return (
    <div className="Footer" dir="rtl" id='Footer'>
        <div className="info">
            <div className="logo">
                    <img src={logo} alt="logo" />
            </div>
            {
        props.OrderBtnState === 'on' &&  <div className="order-here">
        <form onSubmit={handleSubmit} action="">
            <h3>ودّك تطلب البكج ؟</h3>
            <p>قم بملء البيانات التالية</p>
            <input type="text" className='FullName' placeholder='الإسم بالكامل' onChange={handleChange}/>
          
            <input type='text' className='phoneNumebr' placeholder='  رقم الجوال  05xxxxxxx'   onChange={handleChange} />
            <button className='order_click_btn' onClick={handleClick} type='submit'  >طلب اللعبه</button>
        </form>
        </div>   
       } 
            <div className="text">
                <div className="up">
                    {/* <div className="btns">
                        <a href="#">الرئيسيه</a>
                        <a href="#">الدعم الفني</a>
                        <a href="#">الشروط و الأحكام</a>
                    </div> */}
                    <div className="socialMedia">
                    <a href="https://www.tiktok.com/@play_with5" target='blank'><i className="fa-brands fa-tiktok" ></i></a>
                    <a href="https://www.instagram.com/play_with5/" target='blank'><i className="fa-brands fa-square-instagram "></i></a>
                    </div>
                </div>
                <div className="down">
                    <p>جميع حقوق النشر والطبع محفوظة  لـ تخيّر 2024©</p>
                </div>
            </div>
        </div>
    
        
    </div>
  )
}

export default Footer