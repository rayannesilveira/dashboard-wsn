import styled from "styled-components";

export const StyleContent = styled.div`
  background-color: #FAFAFA !important;
  width: 80vw;
  height: 140vh;
  margin: 0px 0px;
  overflow-x: hidden;
  overflow-y: hidden;
 
  
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }

  h1{
    margin: 40px 0 0 50px;
    font-size: 3rem;
    font-family: "Gilroy";
  }
  
  .row{
    display:flex; 
    flex-direction:row;
  }

  .card-last{
    margin: 5vh 10vw 0 3vw;
  }

  .analytics{
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

  .cardLast{
    position: absolute;
    width: 20vw;
    min-width: 400px;
    max-width: 400px;
    height: 55vh;
    display: block;
    transition: transform .2s; /* Animation */
    background: #FFFFFF;
    box-shadow: 10px 4px 10px rgba(0, 0, 200, 0.2);
    border-radius: 10px;
  }

  /*.cardLast:hover{
    box-shadow: 10px 4px 10px rgba(0, 100, 200, 0.2);
  }
  */

  h1{
    display: block;
    margin-top: 10%;
    font-size: 1rem;
    text-align: center;
    color: #1B2767;
  }

 
  .circle{
    position: relative;
    margin: 0 auto;
    height: 18vw;
    width: 18vw;
  }


  .circle img{
    position: relative;
    margin: 0 auto;
    height: 18vw;
    width: 18vw;
  }

  .circle h2{
    font-size: 2.5rem;
    position: relative;
    top: -60%;
    left: 90%;
    transform: translate(-50%, -50%);
  }

  .circle p{
    font-size: 1.3vw;
    color: #1B2767;
    position: relative;
    top: -65%;
    left: 85%;
    transform: translate(-50%, -50%);
  }

  .circle-content{
    position: relative;
    margin: 0 auto;
    height: 18vw;
    width: 18vw;
  }

  .circle-content h3{
    padding-bottom: 1vh;
    font-size: 1rem;
    text-align: center;
    color: #1B2767;
  }

  .circle-content  p{
    font-size: 1.3rem;
    text-align: center;
  }

`;


export const StyleCardChart = styled.div`

  .cardChart{
    position: absolute;
    width: 50%;
    height: 50%;
    display: block;
    margin-top: 10px;
    transition: transform .2s; /* Animation */
    background: #FFFFFF;
    box-shadow: 10px 4px 10px rgba(0, 0, 200, 0.2);
    border-radius: 10px;
  }

  /*
  .cardChart:hover{
    box-shadow: 10px 4px 10px rgba(0, 100, 200, 0.2);
  }
  */
  h1{
    display: block;
    margin-top: 20px;
    font-size: 1rem;
    text-align: center;
    color: #1B2767;
  }

  h3{
    display: block;
    padding-bottom: 20px;
    font-size: 1rem;
    text-align: center;
    color: #1B2767;
  }

  p{
    font-size: 1.3rem;
    text-align: center;
  }

  .chart{
    margin-top: 5%;
    margin-left: 5%;
    margin-right: auto;
  }

`;


export const StyleCardData = styled.div`

  .cardData{
    position: absolute;
    display:flex; 
    flex-direction:row;
    width: 20vw;
    height: 15vh;
    display: block;
    margin-top: 10px;
    transition: transform .2s; /* Animation */
    background: #FFFFFF;
    box-shadow: 10px 4px 10px rgba(0, 0, 200, 0.2);
    border-radius: 10px;
  }

  /*
  .cardChart:hover{
    box-shadow: 10px 4px 10px rgba(0, 100, 200, 0.2);
  }
  */
  h1{
    display: block;
    margin-top: 0px;
    font-size: 1rem;
    text-align: center;
    color: #1B2767;
  }

  h3{
    display: block;
    padding-bottom: 20px;
    font-size: 1rem;
    text-align: center;
    color: #1B2767;
  }

  p{
    font-size: 1.3rem;
    text-align: center;
  }

  .container {
    margin: 20px auto;
    column-count: 2;
  } 

  .container h1{
    font-size: 1.5rem;
  }

  .container-p{
    margin: 10px 0 0 40px;
  }

  .container-p p{
    font-size: 1rem;
    color: #1B2767;
    text-align: center;
  }

  .numberCircle {
    position: relative;
    border-radius: 50%;
    width: 90px;
    margin: 0 auto;
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
    box-shadow: 10px 4px 10px rgba(0, 0, 200, 0.2);
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
