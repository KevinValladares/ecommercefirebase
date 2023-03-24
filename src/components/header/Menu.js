import styled from "styled-components";
import { Link } from "react-router-dom";



export const NavbarContainer = styled.nav`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "100vh" : "8%")};
  background-color: #232830;
  display: flex;
  flex-direction: column;
  @media (min-width: 780px) {
    height: 8%;
  }
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
`;


export const LeftContainer = styled.div`
  flex: 20%;
  display: flex;
  justify-content: flex-start;
  padding-right: 50px;
`;

export const RightContainer = styled.div`
  flex: 62%;
  display: flex;
  align-items: center;
  justify-content:  flex-start;
  padding-left: 5%;
@media (max-width: 780px) {
  justify-content:  flex-end;
}
`;




export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`


  color: white;
  font-size: x-large;
  font-family: 'Quicksand', sans-serif;
  text-decoration: none;
  position: relative;
  margin: 10px;

&:hover{

  color:gold;
}

  @media (max-width: 780px) {
    display: none;
  }

`;


export const NavbarLinkExtended = styled(Link)`
width:100%;
  color: white;
  font-size: x-large;
  font-family: 'Quicksand', sans-serif;
  text-decoration: none;
  //margin: 10px;
  padding:10px;
  border-bottom: 1px solid rgba(255,255,255,.15);
  text-align:start;
`;

export const Logo = styled.img`
 // margin: 10px;
 padding:10px;
  max-width: 180px;
  height: auto;
`;

export const OpenLinksButton = styled.button`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: white;
  font-size: 45px;
  cursor: pointer;
  @media (min-width: 780px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 30px 0px 30px;
  @media (min-width: 780px) {
    display: none;
  }
`;

export const NombreUsuario = styled.div`
 
  display: flex;
  color: white;
  align-items: center;
  justify-content: flex-end;
  margin-right:10px;


@media (max-width: 780px) {
    display: none;
  }

`;

export const NombreUsuarioExtender = styled.div`
  flex: 20%;
  display: flex;
  flex-direction:column;
  color: white;
  align-items: center;
  justify-content: flex-start;

&>span{
  width:100%;
  color: white;
  font-size: x-large;
  font-family: 'Quicksand', sans-serif;
    padding:10px;
  border-bottom: 1px solid rgba(255,255,255,.15);
  text-align:start;
  
}

@media (max-width: 780px) {
   width:100%
  }


`;


export const IconCarrito = styled.div`
  display: flex;
  color: white;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 780px) {

  display: ${(props) => (props.extendNavbar ? "none" : "")};
  }
  @media (min-width: 780px) {
    display: none;
  }

`;



export const Libutton = styled.li`
  list-style: none;
  color: white;
  font-size: x-large;
  font-family: 'Quicksand', sans-serif;
  text-decoration: none;
  position: relative;
  margin: 10px;
  cursor: pointer;

  @media (max-width: 780px) {
    display: none;
  }

`;

export const Titulo = styled.h3`

  margin: 20px;
  color: white;
  font-size:20px;
  font-family: 'Quicksand', sans-serif;

`;

export const NavbarSubLink = styled(Link)`
  display:flex;
  width:100%;
  color: black;
  font-family: 'Quicksand', sans-serif;
  text-decoration: none;
  padding:8px;
  text-align:start;
  cursor: pointer;

&:hover{

  background: lightgrey;
}

  @media (max-width: 780px) {
    display: none;
  }


`;



