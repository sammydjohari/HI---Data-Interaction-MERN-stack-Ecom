import { FaRegUserCircle } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let navigate = useNavigate();
  return (
    <nav>
      <img src="./navlogo.png" alt ="ecuipes logo"  onClick={() =>
        navigate("/")
        }></img>
      <div id="menuitems">
        <Link to="/">HOME</Link>
        <Link to="/shop">SHOP</Link>
        <Link to="/about">ABOUT</Link>
      </div>
      <div id="menuicons">
      <Link to="/checkout"><BiShoppingBag size={32}/></Link>
      <Link to="/staff"><FaRegUserCircle size={30}/></Link>
      </div>
    </nav>
  )
}

export default Navbar;

