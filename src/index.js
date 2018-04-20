import { getUsers } from "./api/userApi";

//populate the table of users via API call
getUsers().then(result => {
  let userBody = "";

  result.forEach(user => {
    userBody+= `<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    </tr>`
  });
  console.log('user body:'+ userBody); // eslint-disable-line no-console
  global.document.getElementById('users').innerHTML = userBody;
});
