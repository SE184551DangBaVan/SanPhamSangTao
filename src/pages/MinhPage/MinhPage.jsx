import "./MinhPage.css"
import Background from "../../assets/minhbox/img_3.png"
import MemoGame from "../../components/MemoGame/MemoGame.jsx";

import pic1 from "../../assets/minhbox/MemoGame/production-grade/img.png"
import pic2 from "../../assets/minhbox/MemoGame/production-grade/img_1.png"
import pic3 from "../../assets/minhbox/MemoGame/production-grade/img_2.png"
import pic4 from "../../assets/minhbox/MemoGame/production-grade/img_3.png"
import pic5 from "../../assets/minhbox/MemoGame/production-grade/img_4.png"
import pic6 from "../../assets/minhbox/MemoGame/production-grade/img_5.png"
import pic7 from "../../assets/minhbox/MemoGame/production-grade/img_6.png"
import pic8 from "../../assets/minhbox/MemoGame/production-grade/img_7.png"
import pic9 from "../../assets/minhbox/MemoGame/production-grade/img_8.png"
import pic10 from "../../assets/minhbox/MemoGame/production-grade/img_9.png"
import pic11 from "../../assets/minhbox/MemoGame/production-grade/img_10.png"
import pic12 from "../../assets/minhbox/MemoGame/production-grade/img_11.png"


const pictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12];

const MinhPage = () =>{
    return(
        <>
            <div className="minh-page"
                 style={{backgroundImage: `url(${Background})`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                     backgroundRepeat: 'no-repeat',
                     backgroundAttachment: 'fixed',
                     minHeight: '100vh'

            }} >
                <MemoGame pictures={pictures}/>
            </div>
        </>
    )
}

export default MinhPage;