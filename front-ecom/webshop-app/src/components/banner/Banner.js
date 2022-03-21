import './Banner.css';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    let navigate = useNavigate();
  return (
    <div id="bannerContainer">
      <img src="./bannerimg1.png" alt="Banner Image 1"></img>
      <img src="./bannerimg2.png" alt="Banner Image 2"></img>
      <button 
      onClick={() =>
        navigate("/shop")
        }>VIEW ALL</button>
    </div>
  )
}

export default Banner;
