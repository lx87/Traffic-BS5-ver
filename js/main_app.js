//ACCORDION

const elements = document.querySelectorAll('.accordion_element');

elements.forEach(element => {
  element.addEventListener('click', () => { 

    const content = element.querySelector('.accordion_content');
    const icon = element.querySelector('.accordion_icon');
    content.classList.toggle('active');
    element.classList.toggle('active');

    if (content.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      icon.classList.add('active');
      
    } else {
      content.style.maxHeight = 0;
      icon.classList.remove('active');
    }
  });
});



//MENU

const openMenuBtn = document.getElementById('open_menu');
const closeMenuBtn = document.getElementById('close_menu');
const menuContainer = document.getElementById('menu_container');

openMenuBtn.addEventListener('click', function() {
    menuContainer.classList.add('show');
});

closeMenuBtn.addEventListener('click', function() {
    menuContainer.classList.remove('show');
});

window.addEventListener('load', function() {
    menuContainer.classList.remove('menu_hidden');
});

//FLATPickR input

flatpickr("#calltime", {
    enableTime: true,
    noCalendar: false,  // Отображаем календарь, но форматируем без года
    dateFormat: "d.m H:i",  // Формат без года (день.месяц часы:минуты)
    time_24hr: false  // Для 24-часового формата
});



//FORM VALIDATION

document.getElementById('customForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Останавливаем дефолтное поведение формы

    let valid = true;

    // Получаем поля для проверки
    const nameInput = document.getElementById('name');
    const nameParent = nameInput.closest('.form_cell');

    const emailInput = document.getElementById('email');
    const emailParent = emailInput.closest('.form_cell');

    // Проверяем поле "ФИО"
    if (!nameInput.value.trim()) {
        nameParent.classList.add('error');
        document.getElementById('nameError').style.display = 'block';
        valid = false;
    } else {
        nameParent.classList.remove('error');
        document.getElementById('nameError').style.display = 'none';
    }

    // Проверяем поле "Почта"
    if (!emailInput.value.trim() || !emailInput.checkValidity()) {
        emailParent.classList.add('error');
        document.getElementById('emailError').style.display = 'block';
        valid = false;
    } else {
        emailParent.classList.remove('error');
        document.getElementById('emailError').style.display = 'none';
    }

    // Если форма валидна, показываем модальное окно с плавной анимацией
    if (valid) {
        var successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();
    }
});

// Убираем класс "error", если пользователь начал вводить данные в любое поле
document.getElementById('name').addEventListener('input', function() {
    const nameParent = this.closest('.form_cell');
    if (nameParent.classList.contains('error')) {
        nameParent.classList.remove('error');
        document.getElementById('nameError').style.display = 'none';
    }
});

document.getElementById('email').addEventListener('input', function() {
    const emailParent = this.closest('.form_cell');
    if (emailParent.classList.contains('error')) {
        emailParent.classList.remove('error');
        document.getElementById('emailError').style.display = 'none';
    }
});

