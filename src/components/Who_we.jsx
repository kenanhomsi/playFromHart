import who_are_we1 from '../assets/whoAre1.jpeg'
import who_are_we2 from '../assets/whoAre2.png'
const WhoAreWe = () => {
  return (
    <div className="WhoAreWe_container" >
      <div className="text" dir='rtl'>
      <h2>.  <span>من نحن؟</span></h2>
      <p>هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام هنا يوجد محتوى نصي، هنا يوجد محتوى نصي فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب</p>
      </div>
      <div className="photos">
        <div className="photo1">
          <img src={who_are_we1} alt="who_are_we1" />
        </div>
        <div className="photo2">
          <img src={who_are_we2} alt="who_are_we2" />
        </div>
      </div>
    </div>
  )
}

export default WhoAreWe