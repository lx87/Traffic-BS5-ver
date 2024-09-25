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


//tabs


const tab_pill = document.querySelectorAll('.custom-btn');
const grid_cards = document.querySelectorAll('.case_card');

tab_pill.forEach(function(element) {
    element.addEventListener('click', function() {

        let card_category = this.dataset.tab; // Получаем категорию карточек из data-tab

        // Скрываем все карточки сначала
        grid_cards.forEach(function(card) {
            card.classList.add('card_hidden');
        });

        // Если нажата кнопка с категорией "все"
        if (card_category === 'category_all') {
            // Показываем все карточки
            grid_cards.forEach(function(card) {
                card.classList.remove('card_hidden'); // Убираем класс скрытия у всех карточек
            });
        } else {
            // Показываем только выбранные карточки с нужным классом
            let selected_cards = document.querySelectorAll('.' + card_category);
            selected_cards.forEach(function(card) {
                card.classList.remove('card_hidden'); // Убираем класс скрытия у выбранных карточек
            });
        }
    });
});