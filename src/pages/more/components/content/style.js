import styled from "styled-components";

export const StyleContent = styled.div`
  
  background-color: #FAFAFA !important;
  margin: 0px 0px;
 
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1 {
    font-size: 3rem;
    margin: 3.5rem 0 0 3.5rem;
    
    @media (max-width: 1024px) {
      margin: 1.5rem 0 0 2rem;
    }
  }


  .row {
    margin: 10vh 13.5vw 0 3vw;
    @media (max-width: 1024px) {
      margin: 10vh 25vw 0 3vw;
    }
  }

  .card-number {
    position: absolute;
    left: 62rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.87rem;
  }

  .card-last {
    position: absolute;
    left: 98rem;
  }

  .table-contents{
    position: absolute;
    top: 45rem;

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

  .buttons p::before {
    content: '';
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    background-color: #6BF98A;
    margin-right: 0.8rem;
    display: inline-block;
  }

  .button {
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
    color: #393939;
    font-weight: 600;
  }

  .container p {
    font-size: 0.8rem;
    color: #4D4A81;
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
    border: 5px solid #6BF98A;
    text-align: center;
    font-size: 32px;
  }

`;

export const StyleCardNumber = styled.div`

.container {
  padding: 0.8rem 2rem;
  background-color: #FFFFFF;
  border-radius: 10px;
}

.container .div {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.container h3 {
  display: block;
  font-size: 1rem;
  color: #393939;
  font-weight: 600;
}


.container p {
  font-size: 0.8rem;
  color: #4D4A81;
  margin: 0;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 4rem;
}

.container button {
  width: 7.8rem;
  height: 2.5rem;
  margin-top: 1.12rem;
  border: none;
  border-radius: 10px;
  text-decoration: none;
  // margin-right: 13px;

}

.container button:nth-child(1) {
  color: #FFFFFF;
  background-color: #007ABF;
}

.container button:nth-child(2) {
  background-color: #FFFFFF;
  border: 2px solid #E6E6EB;
}

.numberCircle {
  border-radius: 50%;
  width: 75px;
  height: 75px;
  padding: 1vh 1vw;
  border: 5px solid #F9896B;
  text-align: center;
  font-size: 32px;
}


`;

export const StyleCardLast = styled.div`

  .cardLast {
    position: absolute;
    min-width: 17rem;
    max-height: 24rem;
    display: block;
    transition: transform .2s; /* Animation */
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
  }

  .cardLast span {
    display: block;
    margin-top: 7%;
    font-size: 0.75rem;
    font-weight: 600;
    text-align: center;
    color: #1B2767;
  }

 
  .circle {
    position: relative;
    margin: 0 auto;
    height: 11vw;
    width: 11vw;
  }


  .circle img {
    position: relative;
    margin: 0 auto;
    height: 11vw;
    width: 11vw;
  }

  .circle h2 {
    font-size: 2rem;
    font-weight: 600;
    position: relative;
    top: -60%;
    left: 88%;
    transform: translate(-50%, -50%);
  }

  .circle p {
    font-size: 0.6rem;
    color: #1B2767;
    position: relative;
    top: -68%;
    left: 91%;
    transform: translate(-50%, -50%);
  }

  .circle-content {
    position: relative;
    margin: 0 auto;
    height: 12vw;
    width: 12vw;
  }

  .circle-content h3 {
    padding-bottom: 1vh;
    font-size: 0.68rem;
    text-align: center;
    color: #1B2767;
    font-weight: 500;
  }

  .circle-content h3:nth-child(1) {
    font-weight: 600;
  }

  .circle-content  p {
    font-size: 1.12rem;
    text-align: center;
  }

`;

export const StyleTableContent = styled.div`

  .tableContent{
    position: absolute;
    display:flex; 
    padding: 20px 20px;
    flex-direction:row;
    width: 73vw;
    margin-top: 10px;
    margin-bottom: 40px;
    transition: transform .2s; /* Animation */
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
  }
  table {
    table-layout: fixed;
    width: 100%;
  }

  thead th:nth-child(1) {
    width: 10%;
  }

  thead th:nth-child(2) {
    width: 20%;
  }

  thead th:nth-child(3) {
    width: 20%;
  }

  thead th:nth-child(4) {
    width: 20%;
  }

  thead th:nth-child(5) {
    width: 20%;
    
  }
  th, td {
    padding: 20px;
    text-align: center
  }

  th{
    color: #007ABF;
    border-bottom: 3px solid #007ABF;
    text-align: center
  }


  
`;
