js.
const navikiBlock = document.querySelector('.naviki');
if (!navikiBlock) {
    console.error("Блок '.naviki' не найден");
} else {
    const skillsList = [
        "Postman (GET/POST, переменные, cURL, коллекции)",
        "DevTools (Network, Application, Console, Elements, Throttling, cURL)",
        "Metabase (SQL: SELECT, FROM, JOIN, агрегатные функции)",
        "Linux (командная строка, ssh, tail -f)",
        "Charles (просмотр запросов, имитация медленного соединения)",
        "Apache Kafka (чтение сообщений, проверка JSON, добавление сообщений, Kibana)"
    ];

    const ul = document.createElement('ul');
    skillsList.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        ul.appendChild(li);
    });
    navikiBlock.appendChild(ul);
}


// Пример изменения цвета текста при загрузке страницы (можно заменить на другую логику)
const paragraphs = document.querySelectorAll('.text-column p');
paragraphs.forEach(p => {
  p.style.color = 'blue';
});


// Пример добавления события на клик по ссылкам (добавит alert при клике)
const links = document.querySelectorAll('.contacts a');
links.forEach(link => {
  link.addEventListener('click', (event) => {
    alert('Вы кликнули по ссылке: ' + event.target.href);
    // Можно добавить здесь другую логику, например, отслеживание кликов в аналитике
  });
});