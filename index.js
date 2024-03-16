function sendGetRequest() {
  // Получаем значения из полей ввода
  let lastName = document.querySelector('input[name="lastName"]').value;
  let firstName = document.querySelector('input[name="firstName"]').value;
  let patronymic = document.querySelector('input[name="patronymic"]').value;
  console.log(lastName, firstName, patronymic);

  // Формируем URL запроса с помощью полученных значений
  let baseUrl ="http://213.108.4.68/people";

  // Отправляем GET запрос
  fetch(`${baseUrl}/${firstName}/${lastName}/${patronymic}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Обрабатываем полученный ответ
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with your fetch operation:", error);
    });
}

// Находим кнопку по её ID и назначаем обработчик события клика
document.getElementById("submitBtn").addEventListener("click", sendGetRequest);
