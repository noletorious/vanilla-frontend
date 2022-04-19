api = "https://reqres.in/api/users/";

const wrapper = document.createElement("div");
document.body.append(wrapper);
wrapper.classList.add("wrapper");
const ul = document.createElement("ul");
wrapper.append(ul);

async function fetchData() {
  try {
    const response = await fetch(api);
    const json = await response.json();
    const { data } = json;
    return await data;
  } catch (err) {
    console.warn(err);
  }
}
async function displayData() {
  let response = await fetchData();

  for (i of response) {
    if (i.hasOwnProperty("email")) {
      let li = document.createElement("li");
      ul.append(li);
      li.innerText = i.first_name;
    }
  }
}

displayData();
