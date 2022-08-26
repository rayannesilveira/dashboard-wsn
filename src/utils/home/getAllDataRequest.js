async function  getAllDataRequest(){
  const allData = await fetch('http://localhost:3131/collected-data');

  const [datas] = await Promise.all([allData]);

  const dataJson = await datas.json();

  return dataJson;

}

export { getAllDataRequest };