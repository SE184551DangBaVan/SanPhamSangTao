import './GalleryDisplay.css'
import {useNavigate} from "react-router-dom";
import { DirectionsRun, HomeFilled } from '@mui/icons-material';

export default function GalleryDisplay() {
  const navigate = useNavigate();

  return (
    <div className='gallery-body'>
        <button className='home-button' onClick={() => navigate("/")}>
            <HomeFilled className='home-button-icons'/>
            <span className='home-button-text'>
                Trang chủ
            </span>
            <DirectionsRun className='home-button-icons'/>
        </button>
        <div className="gallery-container">
        <div className="gallery">
            <div className="gallery-item" style={{"--frame":"hsl(30, 30%, 100%);"}}><a className="gallery-item-perspective" href="https://tuoitre.vn/trung-bay-cuoc-song-ha-noi-thoi-bao-cap-1975-1986-143487.htm">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://static.tuoitre.vn/tto/i/s626/2006/06/12/rqsMKGKE.jpg" alt=""/>
                </div></a>
                <h4 className='gallery-picture-label'>Trưng bày "Cuộc sống Hà Nội thời bao cấp" (1975-1986)</h4>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            {/* <div className="gallery-item" style={{"--frame":"hsl(30, 0%, 30%);"}}><a className="gallery-item-perspective" href="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                </div></a>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            <div className="gallery-item" style={{"--frame":"hsl(340, 80%, 75%);"}}><a className="gallery-item-perspective" href="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                </div></a>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            <div className="gallery-item" style={{"--frame":"hsl(166, 28%, 35%);"}}><a className="gallery-item-perspective" href="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                </div></a>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            <div className="gallery-item" style={{"--frame":"hsl(30, 0%, 30%);"}}><a className="gallery-item-perspective" href="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                </div></a>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            <div className="gallery-item" style={{"--frame":"hsl(33, 70%, 82%);"}}><a className="gallery-item-perspective" href="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                </div></a>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            <div className="gallery-item" style={{"--frame":"hsl(15, 40%, 21%);"}}><a className="gallery-item-perspective" href="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                </div></a>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            <div className="gallery-item" style={{"--frame":"hsl(108, 26%, 21%);"}}><a className="gallery-item-perspective" href="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                </div></a>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            <div className="gallery-item" style={{"--frame":"hsl(280, 0%, 20%);"}}><a className="gallery-item-perspective" href="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                </div></a>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            <div className="gallery-item" style={{"--frame":"hsl(30, 0%, 100%);"}}><a className="gallery-item-perspective" href="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=400&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt=""/>
                </div></a>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div> */}
        </div>
        </div>
    </div>
  )
}
