

  const orderBtn = document.querySelectorAll('.btn-order');
  const modal = document.querySelector('.modal');
  const closeBtn = document.querySelector('.close');


 
  // Открытие модального окна
orderBtn.forEach(function(orderBtn) {
  orderBtn.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = 'block';
  
    // Слушаем клики в документе, пока модальное окно открыто
    document.addEventListener('click', outsideClickHandler);
  });
});

// Закрытие модального окна
closeBtn.addEventListener('click', function () {
  modal.style.display = 'none';
});
  

  


  const form = document.querySelector('#myForm');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Предотвращаем перезагрузку страницы

    // Создаем объект FormData для сбора данных формы
    const formData = new FormData(form);

    // Опции запроса
    const options = {
      method: 'POST',
      body: formData
    };

    // Отправляем данные формы на Google Forms
    fetch('https://docs.google.com/forms/d/e/1FAIpQLSeArDbTL-4ZY65duxPVvtHsEwGxhiEvah4Qpygy7HdHp9atzw/formResponse', options)
      .then(response => {
        // Обрабатываем ответ от сервера
        if (response.ok) {
          // Форма успешно отправлена
          // Здесь вы можете выполнить любые дополнительные действия или отобразить сообщение об успешной отправке
          console.log('Form submitted successfully');
        } else {
          // Произошла ошибка при отправке формы
          // Здесь вы можете обработать ошибку или отобразить сообщение об ошибке
          console.error('Form submission error');
        }
      })
      .catch(error => {
        // Произошла ошибка при отправке запроса
        // Здесь вы можете обработать ошибку или отобразить сообщение об ошибке
        console.error('Request error', error);
      });
  });
  


  

