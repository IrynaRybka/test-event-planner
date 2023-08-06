Тестове завдання Frontend

Створіть Event Planner - веб-додаток, який дозволяє користувачам планувати та організовувати події. 
Технології 

React
Матеріали

Макет
Критерії прийому

Event Planner повинен мати такі сторінки:

Головна сторінка, на якій користувачі можуть переглядати список найближчих подій.
Сторінка створення події, на якій користувачі можуть заповнити форму з необхідною інформацією про подію, таку як назва, дата, час, місце, опис тощо.
Сторінка події, на якій відображається детальна інформація про конкретну подію.

При виконанні рівня високої складності додається додаткова сторінка

Сторінка редагування події, на якій користувачі можуть редагувати заповнену форму з інформацією про подію, таку як назва, дата, час, місце, опис тощо. 

Рівень базової складності:

Головна сторінка - список найближчих подій з основною інформацією про них(назва, дата тощо). При верстці списку подій скористатися алгоритмом CSS Grid.
Сторінка створення події - форма для заповнення необхідної інформації про подію (назва, дата, час, місце, опис тощо). Після заповнення форми користувач може створити подію. Зображення події може бути на Ваш розсуд - або дефолтне або посиланням з беку. Відповідне поле події буде або disabled, або активне.
Сторінка події - детальна інформація про конкретну подію, включаючи всю заповнену інформацію зі сторінки створення події.

Рівень середньої складності:

Головна сторінка - усе з базового рівня. Додайте можливість фільтрування подій за категоріями (наприклад, музика, спорт, культура тощо).
Сторінка створення події - усе з базового рівня. Розширте форму створення події, додавши можливість вибору категорії.
Сторінка події - усе з базового рівня. Додайте можливість видаляти подію. При видаленні події користувач перенаправляється на головну сторінку.

Рівень високої складності:

Головна сторінка - усе з рівня середньої складності. Події з різним пріоритетом відображаються різними кольорами (зробити позначку пріоритету в картці).
Сторінка створення події - усе з рівня середньої складності. Додайте можливість встановлювати пріоритет події (наприклад, високий, середній, низький).
Сторінка події - усе з рівня середньої складності. Додайте можливість редагувати подію. При натисканні на кнопку Edit користувач перенаправляється на сторінку редагування події, на якій можна редагувати заповнену форму з інформацією про подію, таку як назва, дата, час, місце, опис тощо. При закінченні редагування користувач перенаправляється на сторінку події.

Додаткові ідеї для натхнення:

Сортування подій - додайте можливість сортувати події за різними критеріями, наприклад, за назвою, датою або пріоритетом.
Пошук події - додайте можливість шукати подію за назвою чи описом, скориставшись інпутом в хедері. Пошук відбувається посимвольно.
Пагінація на головній сторінці.
Підтримка різних мов - додайте можливість вибору мови (react-i18next).

Вимоги до виконання:

Верстка фіксована в рх.
Верстка семантична та валідна, бонусом буде доступність (а11y).
Верстка адаптивна та кросбраузерна - мобілка від 320px, планшет від 768px, десктоп від 1280px.
Використати підхід Mobile first.
Код повинен бути чистим, із збереженням форматування. Рекомендується використання ESLint/Prettier.
Код розбитий на окремі компоненти.

Зверніть увагу на те, що в першу чергу буде оцінюватись якість роботи, а потім вже додатковий функціонал. 
