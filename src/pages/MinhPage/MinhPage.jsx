import "./MinhPage.css"
import BookSelector from "../../components/BookSelection/BookSelector.jsx";
import MemoGame from "../../components/MemoGame/MemoGame.jsx";
import pic1 from "../../assets/minhbox/MemoGame/img.png"
import pic2 from "../../assets/minhbox/MemoGame/img_1.png"
import pic3 from "../../assets/minhbox/MemoGame/img_2.png"
import pic4 from "../../assets/minhbox/MemoGame/img_3.png"
import pic5 from "../../assets/minhbox/MemoGame/img_4.png"

const pictures = [pic1, pic2, pic3, pic4, pic5,pic1, pic2, pic3, pic4, pic5, pic4, pic5];

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