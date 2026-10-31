

const weather = {
  temperature: Number(prompt("Введіть температуру:")),
  humidity: 60,
  windSpeed: 10,

  checkTemperature() {
    return this.temperature < 0;
  }
};

if (weather.checkTemperature()) {
  console.log("Температура нижче 0 градусів Цельсія");
} else {
  console.log("Температура вище або рівна 0 градусів Цельсія");
}





const user = {
  name: "Arsenii",
  email: "arsen@gmail.com",
  password: "12345",

  login() {
    const email = prompt("Введіть email:");
    const password = prompt("Введіть пароль:");

    if (email === this.email && password === this.password) {
      console.log("Вхід успішний!");
    } else {
      console.log("Неправильний email або пароль!");
    }
  }
};

user.login();




const movie = {
  title: "Interstellar",
  director: "Christopher Nolan",
  year: 2014,
  rating: 8.7,

  isPopular() {
    return this.rating > 8;
  }
};

console.log(movie.title);
console.log(movie.director);
console.log(movie.year);
console.log(movie.rating);
console.log(movie.isPopular());