
import React, { useState ,useEffect} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { useMediaQuery } from "react-responsive";
import { DeviceSize } from "./size";
import './sidebar.css'
const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
  
const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
  
const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;
  
const SidebarWrap = styled.div`
  width: 100%;
`;
  
const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);
  const [sidebarMobile, setsidebarMobile] = useState(true);
  const showSidebar = () => setSidebar(!sidebar);
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  useEffect(() => {
    if(!isMobile){
      setSidebar(true)
    }
  })
  return (
    
    <React.Fragment >
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav style={{marginBottom: "2rem"}}>
        {isMobile && <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
          </NavIcon>}
          <h1 className='navH1'>
            Gymific‎‎‎ 
          </h1>
        </Nav>
        <SidebarNav sidebar={sidebar} style={{marginRight: "10rem"}}>
          <SidebarWrap>
            <NavIcon to="#">
            {isMobile && <AiIcons.AiOutlineClose onClick={showSidebar} />}
            </NavIcon>
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </React.Fragment>
  );
};
  
export default Sidebar;