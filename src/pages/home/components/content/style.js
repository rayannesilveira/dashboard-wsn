import styled from "styled-components";

export const StyleContent = styled.div`
  background-color: #FAFAFA !important;
  width: 80vw;
  height: 140vh;
  margin: 0px 0px;
  overflow-x: hidden;
  overflow-y: hidden;
 
  
  * {
    margin:0;
    padding:0;
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

  h2 {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.7rem

  }
  
  .row {
    display: flex; 
    flex-direction:row;
  }

  .card-last {
    margin: 5vh 10vw 0 3vw;
  }

  .analytics {
    margin: 5vh 0 5vh 13vw;
  }

  .card-node{
    margin: 50vh 13.5vw 0 3vw;
  }

  .card-networks{
    margin: 50vh 13.5vw 0 13vw;
  }

  .card-sensors{
    margin: 50vh 13.5vw 0 13vw;
  }

  .table-contents{
    margin: 20vh 10vw  0 3vw;

  }
`;

export const StyleCardLast = styled.div`

  .cardLast {
    position: absolute;
    min-width: 13.125rempx;
    max-height: 480px;
    display: block;
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
  }

  h1 {
    margin: 1.6rem 0 1.87rem 0;
    display: block;
    font-size: 0.9rem;
    text-align: center;
    color: #1B2767;
  }

 
  .circle {
    position: relative;
    margin: 0 auto;
    height: 12vw;
    width: 12vw;
  }


  .circle img {
    position: relative;
    margin: 0 auto;
    height: 12vw;
    width: 12vw;
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

  .circle-content{
    position: relative;
    margin: 0 auto;
    height: 18vw;
    width: 18vw;
  }

  .circle-content h3 {
    padding-bottom: 1vh;
    font-size: 0.75rem;
    text-align: center;
    color: #242121;
    font-weight: 600;

  }

  .circle-content  p {
    font-size: 1.3rem;
    text-align: center;
    color: #1C1E2F;
    font-weight: 700;
  }

`;


export const StyleCardChart = styled.div`

  .cardChart {
    position: absolute;
    min-width: 60rem;
    min-height: 27rem;
    display: block;
    margin-top: 10px;
    transition: transform .2s; /* Animation */
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
  }

  h1 {
    display: block;
    margin-top: 20px;
    font-size: 1rem;
    text-align: center;
    color: #1B2767;
  }

  h3 {
    display: block;
    padding-bottom: 20px;
    font-size: 1rem;
    text-align: center;
    color: #1B2767;
  }

  p {
   font-size: 1.3rem;
    text-align: center;
  }

  .chart {
    margin-top: 5%;
    margin-left: 5%;
    margin-right: auto;
  }

`;


export const StyleCardData = styled.div`

  .cardData {
    position: absolute;
    display: flex; 
    flex-direction: row;
    max-width: 20vw;
    min-height: 15vh;
    display: block;
    margin-top: 10px;
    transition: transform .2s; /* Animation */
    background: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.02);
    border-radius: 10px;
  }

  h1 {
    display: block;
    margin-top: 0px;
    font-size: 1.12rem;
    font-weight: 600;
    text-align: center;
    color: #393939;
  }

  h3 {
    display: block;
    padding-bottom: 20px;
    font-size: 1rem;
    text-align: center;
    color: #1B2767;
  }

  p {
    font-size: 0.8rem;
    text-align: center;
  }

  .container {
    margin: 20px auto;
    column-count: 2;
  } 


  .container-p {
    margin: 10px 0 0 40px;
  }

  .container-p p {
    color: #4D4A81;
    text-align: center;
    font-weight: 600;
  }

  .numberCircle {
    position: relative;
    border-radius: 50%;
    max-width: 90px;
    margin-left: 1.87rem;
    height:  90px;
    padding: 2vh 1vw;
    border: 5px solid #6BF98A;
    color: #666;
    text-align: center;
    font-size: 32px;
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
