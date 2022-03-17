import { FaRegUserCircle } from 'react-icons/fa';
import { BiShoppingBag } from 'react-icons/bi';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <img src="./navlogo.png" alt ="ecuipes logo"></img>
      <div id="menuitems">
      <a>HOME</a>
      <a>SHOP</a>
      <a>ABOUT</a>
      </div>
      <div id="menuicons">
      <a><BiShoppingBag size={32}/></a>
      <a><FaRegUserCircle size={30}/></a>
      </div>
    </nav>
  )
}

export default Navbar

