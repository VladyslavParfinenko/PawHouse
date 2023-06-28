const orderBtn = document.querySelectorAll('.btn-order');
const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const closeBtn = document.querySelector('.close');

// Открытие модального окна
orderBtn.forEach(function (orderBtn) {
  orderBtn.addEventListener('click', function (event) {
    event.preventDefault();
    modal.style.display = 'block';
    modal2.style.display = 'none';

    // Слушаем клики в документе, пока модальное окно открыто
    document.addEventListener('click', outsideClickHandler);
  });
});

// Закрытие модального окна
closeBtn.addEventListener('click', function (event) {
  event.stopPropagation(); // Остановка всплытия события клика
  modal.style.display = 'none';
  
});

const form = document.querySelector('#myForm');

form.addEventListener('submit', function (e) {
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
  modal.style.display = 'none';
  modal2.style.display = 'block';
  setTimeout(function () {
    modal2.style.display = 'none';
  }, 2000);
  
});

// Функция для обработки кликов вне модального окна
// function outsideClickHandler(event) {
//   // Проверяем, является ли цель клика вторым модальным окном или его содержимым
//   if (!modal2.contains(event.target)) {
//     modal.style.display = 'none';
//     document.removeEventListener('click', outsideClickHandler); // Удаляем слушатель кликов, так как модальное окно закрыто
//   }
// }




  var products = [
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery4" href="./img/har-kor1/har-kor1.jpg">' +
    '<img src="./img/har-kor1/har-kor1.jpg" alt="" class="item-img" />' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Сірий</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">150х240</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Цегла</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="./img/har-kor1/har-kor2.jpg" data-fancybox="gallery4"></a>' +
    '<a href="./img/har-kor1/har-kor3.jpg" data-fancybox="gallery4"></a>' +
    
    '</div>' +
    '<p class="item-type">Лежанка</p>' +
    '<p class="item-name">Infiniti</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">2390 UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery5" href="./img/har-sir1/har-sir1.jpg">' +
    '<img src="./img/har-sir1/har-sir1.jpg" alt="" class="item-img" />' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Сірий</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">150х240</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Цегла</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="./img/har-sir1/har-sir2.jpg" data-fancybox="gallery5"></a>' +
    '<a href="./img/har-sir1/har-sir3.jpg" data-fancybox="gallery5"></a>' +
    '<a href="./img/har-sir1/har-sir4.jpg" data-fancybox="gallery5"></a>' +
    '<a href="./img/har-sir1/har-sir5.jpg" data-fancybox="gallery5"></a>' +
    
    '</div>' +
    '<p class="item-type">Лежанка</p>' +
    '<p class="item-name">Infiniti</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">2390 UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery6" href="./img/inf-kor-l/inf-kor-l1.jpg">' +
    '<img src="./img/inf-kor-l/inf-kor-l1.jpg" alt="" class="item-img" />' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Сірий</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">150х240</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Цегла</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="./img/inf-kor-l/inf-kor-l2.jpg" data-fancybox="gallery6"></a>' +
    '<a href="./img/inf-kor-l/inf-kor-l3.jpg.jpg" data-fancybox="gallery6"></a>' +
    '<a href="./img/inf-kor-l/inf-kor-l4.jpg" data-fancybox="gallery6"></a>' +
    '<a href="./img/inf-kor-l/inf-kor-l5.jpg" data-fancybox="gallery6"></a>' +
    
    '</div>' +
    '<p class="item-type">Лежанка</p>' +
    '<p class="item-name">Infiniti</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">2390 UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    '<li class="item-product"><div class="image-container">' +
    '<a class="item-link" data-fancybox="gallery7" href="./img/inf-ser-l/inf-ser-l1.jpg">' +
    '<img src="./img/inf-ser-l/inf-ser-l1.jpg" alt="" class="item-img" />' +
    '<div>' +
    '<ul class="item-description">' +
    '<li class="desc-container">' +
    '<p>Колір: <span class="desc-type">Сірий</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Розмір: <span class="desc-type">150х240</span></p>' +
    '</li>' +
    '<li class="desc-container">' +
    '<p>Матеріал: <span class="desc-type">Цегла</span></p>' +
    '</li>' +
    '</ul>' +
    '</div>' +
    '</a>' +
    '</div>' +
    '<div style="display: none;">' +
    '<a href="./img/inf-ser-l/inf-ser-l2.jpg" data-fancybox="gallery7"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l3.jpg" data-fancybox="gallery7"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l4.jpg" data-fancybox="gallery7"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l5.jpg" data-fancybox="gallery7"></a>' +
    '<a href="./img/inf-ser-l/inf-ser-l6.jpg" data-fancybox="gallery7"></a>' +
    
    '</div>' +
    '<p class="item-type">Лежанка</p>' +
    '<p class="item-name">Infiniti</p>' +
    '<img src="./img/stars.png" alt=""  class="img-stars"/>' +
    '<p class="price">2390 UAH</p>' +
    '<button class="btn-order">' +
    '<svg class="icon-order">' +
    '<use xlink:href="./img/symbol-defs.svg#icon-shopping_bag"></use>' +
    '</svg>' +
    '</button></li>',
    
    
    // Добавьте дополнительные HTML-коды товаров здесь
  ];
  function attachEventToButtons() {
    const orderBtn = document.querySelectorAll('.btn-order');
    
    orderBtn.forEach(function (orderBtn) {
      orderBtn.addEventListener('click', function (event) {
        event.preventDefault();
        modal.style.display = 'block';
        modal2.style.display = 'none';
        // Ваш код для обработки клика на кнопку
      });
    });
  }

  var loadButton = document.getElementById('loadButton');
  loadButton.addEventListener('click', function() {
    var productList = document.querySelector('.product-container');
    var ul = document.createElement('ul');
    ul.className = 'product-container';
    ul.setAttribute('data-category', 'furniture');
  
    products.forEach(function(product) {
      var li = document.createElement('li');
      li.innerHTML = product;
      ul.appendChild(li);
    });
  
    productList.insertAdjacentElement('afterend', ul);
  
    // Скрыть кнопку
    loadButton.style.display = 'none';
    attachEventToButtons();
  });
  

  
