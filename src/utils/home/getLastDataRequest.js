async function  getLastDataRequest(){
    const allData = await fetch('http://localhost:3131/collected-data/last');
  
    const [datas] = await Promise.all([allData]);
  
    const dataJson = await datas.json();
  
    return dataJson;
  
  }
  
  export { getLastDataRequest };