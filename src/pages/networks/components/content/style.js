import styled from "styled-components";

export const StyleContent = styled.div`
  
  background-color: #FAFAFA !important;
  margin: 0px 0px;
 
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    margin: 40px 0 0 50px;
    font-size: 2rem;
    font-weight: 600;

    @media (max-width: 1024px) {
      margin: 1.5rem 0 0 2rem;
    }
  }
  
  .card-node{
    margin: 10vh 13.5vw 0 3vw;
    @media (max-width: 1024px) {
      margin: 10vh 25vw 0 3vw;
    }
  }

  .card-networks{
    margin: 10vh 13.5vw 0 13vw;
  }

`;


export const StyleCardDataWeekly = styled.div`

  .cardData {
    position: absolute;
    display: flex; 
    flex-direction: row;
    max-width: 28.18rem;
    min-height: 21.75rem;
    display: block;
    padding: 1.4rem 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 10px;

  }

  .cardData h1 {
    display: block;
    font-size: 2rem;
    font-weight: 600;
    color: #1B2767;
    text-align: center;
    margin: 0;
  }

  .cardData h1::after {
    content: '';
    width: 19rem;
    height: 1px;
    background-color: #F6F6FC;
    display: block;
    margin: 5px auto;

  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 2rem 2.68rem 0 1.62rem;
    font-size: 13px;
    list-style: none;
  } 

  .buttons p {
    color: #555555;
    font-weight: 600;
    display: list-item;
  }

  .isActive,
  .isDisabled {
    display: flex;
    
  }

  .circle {
    content: '';
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: ${({ isActive}) => 
      isActive ? '#6BF98A' : '#FF5E84'
  }
;
    margin-right: 0.8rem;
    display: inline-block;
  }

  a {
    color: #4D4A81;
  }

`;

export const StyleCardData = styled.div`
  
  .container {
    margin: 20px auto;
    column-count: 2;
  } 

  .container h3 {
    display: block;
    font-size: 1rem;
    color: ${({ isActive}) => 
      isActive ? '#393939' : '#999999'
    };
    font-weight: 600;
  }

  .container p {
    font-size: 0.8rem;
    color: ${({ isActive}) => 
      isActive ? '#4D4A81' : '#999999'
    };
    margin: 0;
  }

  .title {
    margin: 1.41rem 0 0 1.81rem;
  }

  .numberCircle {
    position: relative;
    border-radius: 50%;
    width: 90px;
    margin: 0 auto;
    height:  90px;
    padding: 2vh 1vw;
    border: 5px solid ${({ isActive}) => 
      isActive ? '#6BF98A' : '#999999'
    };
    text-align: center;
    font-size: 32px;
    color :${({ isActive}) => 
      isActive ? '#4D4A81' : '#999999'
    };
  }

  

`;

