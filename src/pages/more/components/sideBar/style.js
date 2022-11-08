import styled from "styled-components";

export const StyleSideBar = styled.div`
  background-color: #FAFAFA;
  width: 20vw;
  height: 100vh;
  margin: 0px 0px;
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
  
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  .sideBar{
    background-color: #fff;
    width: 20vw;
    height: 100vh;
  }

  .sideBar img{
    display: block;
    padding-top: 40px;
    margin-bottom: 60px;
    margin-left: auto;
    margin-right: auto;
    width: 199px;
    height: 100px;
    
    @media (max-width: 1024px) {
      width: 130px;
      height: 80px;
    }
    
  }
`;

export const StyleMenuItem = styled.div`

* {
    margin:20px 0px;
    display: flex;
    padding:0;
    box-sizing: border-box;
}

.menuItem{
  padding: 0 30px;
  transition: 0.4s;
  color: ${props => props.isActive === "true" ? "#007ABF !important" : "#999"} ;
  
  font-size: 20px;
  @media (max-width: 1024px) {
    font-size: 16px;
  }

  text-decoration: none;

}

svg{ 
  margin-right: 20px;
  @media (max-width: 1024px) {
    margin-right: 10px;
  }
}

.menuItem:hover{
  cursor: pointer;
  background-color: #007ABF;
  padding: 0px 10px;
  color: #fff;
}

.isActive{
  color: #007ABF !important;
}
.isActive:hover{
  color: #fff !important;
}

`;
