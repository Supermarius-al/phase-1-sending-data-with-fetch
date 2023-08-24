// Add your code here

const template = document.createElement("div");

document.addEventListener("DOMContentLoaded", submitData);

//fetch("http://localhost:3000/dogs", configurationObject);

function submitData(userName, userEmail) {
  let formData = {
    name: userName,
    email: userEmail,
  };
  const configurationObject = {
    method: `POST`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(formData),
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);
      JSON.stringify(data.id);
    });
}

//  .catch(function (error) {
//   alert("Unauthorized Access");
//     console.log(error.message);
//   });

/*   .then((data) => {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          data: data.id,
        }),
      });
    })
    .then((res) => res.json());
}

/*

//data.id;
//.then((res) => res.json())
//.then((res) => JSON.stringify(res));

/*function updateData(userName, userEmail) {
  return fetch(`http://localhost:3000/users/${(userName, userEmail)}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  })
    .then((res) => res.json())
    .then(data);
}

// function initialize() {}

function cb(x, y) {
  const element = document.querySelector("tbody");
  document.createElement("tr");
  element.appendChild("tr");
  element.appendChild("tr");
  const tr1 = element.children[0];
  const tr2 = element.children[1];
  tr.innerText = x;
  tr.innerText = y;
  return cb;
}
*/
