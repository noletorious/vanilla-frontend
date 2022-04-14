const bodyElement = document.createElement("div");
document.body.append(bodyElement);
bodyElement.classList = "container";
const ulElement = document.createElement("ul");
bodyElement.append(ulElement);
const liElement = document.createElement("li");

async function fetchData() {
  try {
    const response = await fetch("https://reqres.in/api/users/");
    return await response.json();
  } catch (err) {
    window.alert(err);
  }
}

async function displayData() {
  let res = await fetchData();

  res.data.forEach((i) => {
    let name = i["first_name"];
    ulElement.append(name);
  });
  console.log(res.data);
}

displayData();
