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
            <div className="gallery-item" style={{"--frame":"hsl(30, 30%, 100%);"}}><a className="gallery-item-perspective" href="https://vov.vn/e-magazine/25-nam-gia-nhap-asean-viet-nam-buoc-qua-nhung-rao-can-1074201.vov">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://media.vov.vn/sites/default/files/styles/large/public/2020-07/nguyen%20manh%20cam.jpg" alt=""/>
                </div></a>
                <h4 className='gallery-picture-label'>Gia nhập ASEAN 1995</h4>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            <div className="gallery-item" style={{"--frame":"hsl(30, 0%, 30%);"}}><a className="gallery-item-perspective" href="https://vnanet.vn/vi/anh/anh-chuyen-de-1053/ky-niem-24-nam-ngay-binh-thuong-hoa-quan-he-ngoai-giao-viet-nam--hoa-ky-1171995--1172019-3951828.html">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://vnanet.vn/Data/Articles/2019/07/02/3951898/vna_potal_ky_niem_24_nam_ngay_binh_thuong_hoa_quan_he_ngoai_giao_viet_nam_%E2%80%93_hoa_ky_1171995_%E2%80%93_1172019_%E2%80%9Cgac_lai_qua_khu_vuot_qua_khac_bi_195529143_stand.jpg" alt=""/>
                </div></a>
                <h4 className='gallery-picture-label'>Bình thường hóa quan hệ Việt Nam – Hoa Kỳ (1995)</h4>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            <div className="gallery-item" style={{"--frame":"hsl(340, 80%, 75%);"}}><a className="gallery-item-perspective" href="https://tuoitre.vn/trung-bay-cuoc-song-ha-noi-thoi-bao-cap-1975-1986-143487.htm">
                <div className="gallery-item-wrap">
                <div className="gallery-item-overlay"></div><img className="gallery-img" src="https://static.tuoitre.vn/tto/i/s626/2006/06/12/rqsMKGKE.jpg" alt=""/>
                </div></a>
                <h4 className='gallery-picture-label'>Trưng bày "Cuộc sống Hà Nội thời bao cấp" (1975-1986)</h4>
            <div className="gallery-item-strings-perspective">
                <div className="gallery-item-strings"></div>
            </div>
            </div>
            
        </div>
        </div>
    </div>
  )
}
