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
 fetch("http://localhost:3000/users", configurationObject)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.id);
      JSON.stringify(data.id);
    });
}.catch(function (error) {
alert("Unauthorized Access");
    console.log(error.message);
  }).then((data) => {
      return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          data: data.id,
        }),
      })
    })
    .then((res) => res.json())

/*
data.id;
//.then((res) => res.json())
//.then((res) => JSON.stringify(res));
*/
