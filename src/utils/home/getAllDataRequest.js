async function  getAllDataRequest(){
  const allData = await fetch('https://62e34e4fb54fc209b8873346.mockapi.io/networks/dados');

  const [datas] = await Promise.all([allData]);

  const dataJson = await datas.json();

  return dataJson;

}

export { getAllDataRequest };