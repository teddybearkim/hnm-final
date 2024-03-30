import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const menuList = [
    'Women',
    'Men',
    'Baby',
    'Kids',
    'Sale'
  ]
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn); // 로그인 상태 토글
    if (!isLoggedIn) {
      // 현재 로그아웃 상태이면 로그인 처리를 해야 함
      navigate("/login"); // 여기서는 예시로 navigate 함수만 호출
    }
    // 로그인 상태이면 추가적인 로그아웃 처리 로직을 여기에 구현할 수 있습니다.
  };
  const search = (event) => {
    if (event.key === "Enter") {
      // 입력한 검색어를 읽어와서 url를 바꿔준다.
      let keyword = event.target.value;
      navigate(`?q=${keyword}`)
    }
  }
  return (
    <div>
      
      <div>
      <div>
        <div className="login-button" onClick={handleAuthClick}>
          {/* 아이콘을 로그인 상태에 따라 변경 */}
          <FontAwesomeIcon icon={isLoggedIn ? faSignOutAlt : faUser} />
          {/* 버튼 글자를 로그인 상태에 따라 변경 */}
          <div className='login-text'>{isLoggedIn ? '로그아웃' : '로그인'}</div>
        </div>
      </div>
      </div>

      <div className="nav-section">
        <img width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4duXk2YsS37K_BZIt-J309pv0dddd-_Ch1373Ha9cVQ&s" alt="Logo" />
      </div>

      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu, index) => (
            <li key={index} className="menu-items">{menu}</li>
          ))}
        </ul>

        <div className="menu-search">
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" className="menu-search-text" onKeyPress={search} placeholder='제품 검색' />
        </div>
      </div>
    </div>
  );
}

export default Navbar