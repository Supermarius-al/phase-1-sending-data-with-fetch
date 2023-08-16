// Add your code here

const template = document.createElement("div");

const configurationObject = {
  method: `POST`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  body: JSON.stringify({
    dogName: "Byron",
    dogBreed: "Poodle",
  }),
};
fetch("http://localhost:3000/dogs", configurationObject);

function submitData(userName, userEmail) {
  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  })
    .then((res) => res.json())
    .then(cb(userName, userEmail));
}

function initialize() {}

function cb(x, y) {
  const element = document.querySelector("body");
  document.createElement("p");
  element.appendChild("p");
  element.appendChild("p");
  const p1 = element.children[0];
  const p2 = element.children[1];
  p1.innerText = x;
  p2.innerText = y;
  return cb;
}
