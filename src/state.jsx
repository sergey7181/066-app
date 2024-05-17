const user = {
  id: "1",
  email: "ivan@ya.ru",
  name: "Иван",
  lastname: "Иванов",
  avatar:
    "https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg",
  about: "Тут мой рассказ очень интересный",
};

const users = {
  0: { name: "Юлия", lastname: "Тетерина" },
  1: { name: "Константин", lastname: "Петров" },
  2: { name: "Ксения", lastname: "Добрая" },
  3: { name: "Диана", lastname: "Смирнова" },
  4: { name: "Сергей", lastname: "Весенин" },
};

export function getUser() {
  return user;
}

export function getUsers() {
  return users;
}