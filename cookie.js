const tableHead = document.querySelector("thead");
const tableBody = document.querySelector("tbody");
const form = document.querySelector("form");
const keyInput = document.querySelector("#key");
const valueInput = document.querySelector("#value");

const setCookieBtn = document.querySelector("#set-cookie");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const keyInputValue = keyInput.value;
  const valueInputValue = valueInput.value;
  console.log({ keyInputValue, valueInputValue });
  const cookieString = `${keyInputValue}=${valueInputValue};`;
  document.cookie = cookieString;
  renderCookiesTable();
});

function renderCookiesTable() {
  const cookies = document.cookie;
  // cookies are stored in a key=value format always
  const cookiesArray = cookies.split(";");
  tableBody.innerHTML = "";
  cookiesArray.forEach((cookie) => {
    const keyValue = cookie.split("=");

    const [key, value] = keyValue;

    const tr = document.createElement("tr");
    const tdKey = document.createElement("td");
    const tdValue = document.createElement("td");
    // adding delete button functionality
    const tdButton = document.createElement("td");
    const btnDeleteCookie = document.createElement("button");
    btnDeleteCookie.classList.add("delete-cookie");
    btnDeleteCookie.textContent = "❌";

    tdKey.textContent = key;
    tdValue.textContent = value;
    tdButton.append(btnDeleteCookie); //adding the button to the table data (td)

    tr.appendChild(tdKey);
    tr.appendChild(tdValue);
    tr.appendChild(tdButton);
    tableBody.appendChild(tr);
  });
}

renderCookiesTable();

// function removeCookie(name, value) {
//   const cookieString = `${name}=${value}; expires = Thu, 01 Jan 1970 00:00:00 UTC;`;
//   document.cookie = cookieString;
// }

// btnDeleteCookie.addEventListener("click");
