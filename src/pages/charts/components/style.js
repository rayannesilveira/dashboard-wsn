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
  
  .card-gauge{
    margin: 10vh 13.5vw 0 3vw;
    @media (max-width: 1024px) {
      margin: 10vh 25vw 0 3vw;
    }
  }

  .card-temperature-1{
    margin: 10vh 13.5vw 0 8vw;
  }

  .card-temperature-2{
    margin: 10vh 20vw 0 8vw;
  }

`;


export const StyleCardDataWeekly = styled.div`

  .cardData {
    position: absolute;
    display: flex; 
    flex-direction: row;
    max-width: 28.18rem;
    display: block;
    padding: 1.4rem 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 10px;

  }

  .title,
  .footer {
    padding: 0 29px;
  }

  .title h3 {
    font-weight: 600;
    font-size: 18px;
    color: #393939;
  }

  .title p {
    color: #4D4A81;
    font-size: 13px;
    font-weight: 600;
  }

  .title::after ,
  .footer::before {
    content: '';
    width: 19rem;
    height: 1px;
    background-color: #F6F6FC;
    display: block;
    margin: 20px auto;

  }

  .footer p {
    font-size: 13px;
    color: #393939;
  }

`;

export const StyleCardThermometer = styled.div`

.cardData {
    position: absolute;
    display: flex; 
    flex-direction: row;
    max-width: 28.18rem;
    display: block;
    padding: 1.4rem 0;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 10px;

  }

  .temperature_chart {
    display: flex;
    justify-content: center;
  }

  .title {
    padding: 0 29px;
  }

  .title h3 {
    font-weight: 600;
    font-size: 18px;
    color: #393939;
  }

  .title p {
    color: #4D4A81;
    font-size: 13px;
    font-weight: 600;
  }

  .title::after {
    content: '';
    width: 19rem;
    height: 1px;
    background-color: #F6F6FC;
    display: block;
    margin: 20px auto;
  }

`;

