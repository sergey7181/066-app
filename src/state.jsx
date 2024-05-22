const user = {
  id: "1",
  email: "ivan@ya.ru",
  name: "Иван",
  lastname: "Иванов",
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
  about: "Тут мой рассказ очень интересный",
};

// const users = {
//   0: {
//     name: "Юлия",
//     lastname: "Тетерина",
//     id: 24,
//     email: "julia@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
//   },
//   1: {
//     name: "Константин",
//     lastname: "Петров",
//     id: 47,
//     email: "akonst@konst.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80",
//   },
//   2: {
//     name: "Ксения",
//     lastname: "Добрая",
//     id: 32,
//     email: "ksen@mail.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&w=300&q=80",
//   },
//   3: {
//     name: "Диан",
//     lastname: "Смирнов",
//     id: 12,
//     email: "dian@ya.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
//   },
//   4: {
//     name: "Катерина",
//     lastname: "Весенина",
//     id: 4,
//     email: "kate@ogo.ru",
//     avatar:
//       "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHBlcnNvbmF8ZW58MHx8MHx8fDA%3D&w=300&q=80",
//   },
// };
let users = [];

export function getUser(userId) {
  for (let i = 0; i < Object.keys(users).length; i++ ) {
    if (users[i].id == userId) return users[i];
  }
  return user;
}

export async function getUsers() {
  let response = await fetch("https://lusty.p-host.in/getUsers");
  users = await response.json();
  //console.log(users);
  return users;
}