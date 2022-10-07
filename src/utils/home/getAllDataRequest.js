async function  getAllDataRequest(){
  const allData = await fetch('http://35.203.64.238:3131/collected-data');

  const [datas] = await Promise.all([allData]);

  const dataJson = await datas.json();

  return dataJson;

}

export { getAllDataRequest };