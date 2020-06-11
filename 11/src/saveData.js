function saveData(data) {
  console.log("뭐냐", data);
  console.log(JSON.stringify(data));
  localStorage.setItem("data", JSON.stringify(data));
}

function loadData(data) {
  const dataString = localStorage.getItem("data") || "[]";
  console.log(dataString);
  return JSON.parse(dataString);
}

export { saveData, loadData };
