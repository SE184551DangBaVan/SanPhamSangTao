import "./MinhPage.css"
import BookSelector from "../../components/BookSelection/BookSelector.jsx";
import MemoGame from "../../components/MemoGame/MemoGame.jsx";

import pic1 from "../../assets/minhbox/MemoGame/theFunny/1.png"
import pic2 from "../../assets/minhbox/MemoGame/theFunny/2.png"
import pic3 from "../../assets/minhbox/MemoGame/theFunny/3.png"
import pic4 from "../../assets/minhbox/MemoGame/theFunny/4.png"
import pic5 from "../../assets/minhbox/MemoGame/theFunny/5.jpg"
import pic6 from "../../assets/minhbox/MemoGame/theFunny/6.jpg"
import pic7 from "../../assets/minhbox/MemoGame/theFunny/7.png"
import pic8 from "../../assets/minhbox/MemoGame/theFunny/8.jpg"
import pic9 from "../../assets/minhbox/MemoGame/theFunny/9.png"
import pic10 from "../../assets/minhbox/MemoGame/theFunny/10.png"
import pic11 from "../../assets/minhbox/MemoGame/theFunny/11.jpg"
import pic12 from "../../assets/minhbox/MemoGame/theFunny/12.jpeg"


const pictures = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12];

const MinhPage = () =>{
    return(
        <>
            <div className="minh-page">
                <MemoGame pictures={pictures}/>
            </div>
        </>
    )
}

export default MinhPage;