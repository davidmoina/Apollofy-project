import { useState, useContext } from 'react';
import { useNavigate } from "react-router";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { users } from '../../data/users';
import styles from './navBar.module.scss';
import { AuthContext, ContextType } from '../../context/authContext/AuthContext';

export const Navbar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const { logout } = useContext(AuthContext) as ContextType;

  const { name, accountType, thumbnail } = users[0];

  function handleClick() {
    setShowModal(!showModal);
  }

  function handleLogout(){
    logout();
    navigate('/login');
  }

  return (
    <nav className={`flex justify-end lg:justify-between p-5 ${styles.containerNav}`}>
      <div className={`hidden lg:flex ${styles.arrowNav}`}>
        <button onClick={ () => navigate(-1) }>
          <MdArrowBackIosNew />
        </button>
        <button onClick={ () => navigate(1) }>
          <MdArrowForwardIos />
        </button>
      </div>
      <div>
      <button className={`flex items-center p-1 lg:pr-4  mr-0 lg:min-w-fit lg:mr-2 ${styles.buttonProfile}`} onClick={ handleClick }>
        <img src={ thumbnail } alt="" />
        <span className="hidden lg:flex">{ name }</span>
      </button>
      {showModal 
        ? (<ul className="right-4">
              <li>  
                <a href="/"> Edit Profile </a> 
              </li>
              <li>
                <a href="">{ accountType }</a>
              </li>
              <li> 
                <button onClick={ handleLogout }> Logout </button>
              </li>
          </ul>) 
        : null}
      </div>
    </nav>
  )

}


