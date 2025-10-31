/* Minimal SPA-like router and content renderer */

const ROUTES = {
  'metod': {
    title: 'Методические разработки',
    html: `
      <h2>Методические разработки</h2>
      <div class="rule"></div>
      <p>
        На этой странице представлены статьи, конспекты и материалы для скачивания.
      </p>
      <div class="grid" style="margin-top:18px;">
        <a class="card card-link" href="downloads/method/ИЗ ОПЫТА РАБОТЫ ИЗУЧЕНИЕ ЗНАЧЕНИЯ ЧИСЕЛ В ЕВАНГЕЛИИ НА МАТЕМАТИЧЕСКИХ ЗАНЯТИЯХ В 6-7 КЛАССАХ.docx" download target="_blank" rel="noopener">
          <h3>Изучение значения чисел в евангелии на математических занятиях в 6-7 классах</h3>
          <p>В статье представлен опыт работы по сохранению традиций православного образования через создание учебных проектов.</p>
        </a>
        <a class="card card-link" href="downloads/method/ИИСУС ХРИСТОС – УЧИТЕЛЬ ДЛЯ СОВРЕМЕННОГО УЧИТЕЛЯ.docx" download target="_blank" rel="noopener">
          <h3>Иисус Христос – учитель для современного учителя</h3>
          <p>В статье представлены особенности личности Иисуса Христа как великого Учителя.</p>
        </a>
        <a class="card card-link" href="downloads/method/урок геометрии с использованием ЦОК.docx" download target="_blank" rel="noopener">
          <h3>Практическая работа по проектированию урока с использованием материалов библиотеки ЦОК</h3>
          <p>Структура урока по теме «Первый признак равенства треугольников»: актуализация, изучение нового, закрепление и домашняя работа с материалами ЦОК.</p>
        </a>
        <a class="card card-link" href="downloads/method/игра страхование по основам финансовой грамотности.doc" download target="_blank" rel="noopener">
          <h3>Игра по основам потребительских знаний</h3>
          <p>Методическая разработка игры по финансовой грамотности: страхование, потребительские права и принятие ответственных решений.</p>
        </a>
      </div>
    `
  },
  'za-uchebnikom': {
    title: 'За страницами учебника',
    html: `
      <h2>За страницами учебника</h2>
      <div class="rule"></div>
      <p>
        Интересные факты из истории математики, занимательные задачи и
        межпредметные связи, которые помогут увидеть математику вокруг нас.
      </p>
      <div class="grid" style="margin-top:18px;">
        <a class="card card-link" href="https://skillbox.ru/media/code/zagadki-na-logiku-s-otvetami/#stk-1" target="_blank" rel="noopener">
          <h3>Загадки с подвохом</h3>
          <p>Загадки кажутся простыми, но не спешите с ответом.</p>
        </a>
        <a class="card card-link" href="https://azbyka.ru/deti/logicheskie-i-zanimatelnye-zadachi-100-zadach" target="_blank" rel="noopener">
          <h3>Логические и занимательные задачи</h3>
          <p>Подборка задач на логику и смекалку для тренировки мышления и внимания.</p>
        </a>
        <a class="card card-link" href="https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B4%D0%B0%D1%87%D0%B8_%D1%82%D1%8B%D1%81%D1%8F%D1%87%D0%B5%D0%BB%D0%B5%D1%82%D0%B8%D1%8F" target="_blank" rel="noopener">
          <h3>Нерешенные задачи тысячелетия</h3>
          <p>Существует несколько известных нерешённых математических задач, включая «Задачи тысячелетия» Института Клэя.</p>
        </a>
        <a class="card card-link" href="https://ru.ruwiki.ru/wiki/%D0%A1%D0%B0%D0%BC%D0%B0%D1%8F_%D1%81%D0%BB%D0%BE%D0%B6%D0%BD%D0%B0%D1%8F_%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%B7%D0%B0%D0%B4%D0%B0%D1%87%D0%B0" target="_blank" rel="noopener">
          <h3>Самая сложная логическая задача</h3>
          <p>Логическая задача Джорджа Булоса, опубликованная в 1992 году в итальянской газете «la Repubblica».</p>
        </a>
      </div>
    `
  },
  'raboty': {
    title: 'Работы учеников',
    html: `
      <h2>Работы учеников</h2>
      <div class="rule"></div>
      <p>
        Лучшие проекты, презентации и исследовательские работы учащихся.
      </p>
      <div class="grid" style="margin-top:18px;">
        <div class="card">
          <h3>«Да не смущается сердце ваше и да не устрашается» (Ин.14:27)</h3>
          <p>Мир страхов человека весьма разнообразен и удивителен. Чего только не боятся люди: тараканов, лягушек, опоздать на работу, сломать ногу, попасть в авиакатастрофу, конца света.</p>
          <div class="download-links">
            <a class="download-link" href="downloads/students/Исследовательская работа учащихся 1.docx" download target="_blank" rel="noopener">
              <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" stroke-width="1.6"/><path d="M14 2v6h6" stroke="currentColor" stroke-width="1.6"/><path d="M12 12v6" stroke="currentColor" stroke-width="1.6"/><path d="M9 15h6" stroke="currentColor" stroke-width="1.6"/></svg>
              <span>Текст (.docx)</span>
            </a>
            <a class="download-link" href="downloads/students/Презентация для богословской секции.pptx" download target="_blank" rel="noopener">
              <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M7 9h10M7 12h6M7 15h4" stroke="currentColor" stroke-width="1.6"/></svg>
              <span>Презентация (.pptx)</span>
            </a>
          </div>
        </div>
        <div class="card">
          <h3>Линейные уравнения и их практическое применение</h3>
          <p>Для многих математиков уравнения являются настоящими произведениями искусства. Как художественные шедевры или музыкальные композиции, математические выражения могут быть столь же увлекательными и вдохновляющими, как и в искусстве.</p>
          <div class="download-links">
            <a class="download-link" href="downloads/students/Уравнения исследовательская работа.doc" download target="_blank" rel="noopener">
              <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" stroke-width="1.6"/><path d="M14 2v6h6" stroke="currentColor" stroke-width="1.6"/><path d="M12 12v6" stroke="currentColor" stroke-width="1.6"/><path d="M9 15h6" stroke="currentColor" stroke-width="1.6"/></svg>
              <span>Текст (.doc)</span>
            </a>
            <a class="download-link" href="downloads/students/Презентация   история уравнений  19.11.pptx" download target="_blank" rel="noopener">
              <svg class="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" stroke-width="1.6"/><path d="M7 9h10M7 12h6M7 15h4" stroke="currentColor" stroke-width="1.6"/></svg>
              <span>Презентация (.pptx)</span>
            </a>
          </div>
        </div>
      </div>
    `
  },
  'rezultaty': {
    title: 'Результаты деятельности',
    html: `
      <h2>Результаты деятельности</h2>
      <div class="rule"></div>
      <p>
        Достижения учащихся на олимпиадах и конкурсах, результаты промежуточной
        и итоговой аттестации, участие в проектах и конференциях.
      </p>
      <div class="grid" style="margin-top:18px;">
        <div class="card">
          <h3>Олимпиады и конкурсы</h3>
          <p>Список наград и дипломов за последние годы.</p>
        </div>
        <div class="card">
          <h3>Итоговая аттестация</h3>
          <p>Сводные показатели успеваемости и динамика результатов.</p>
        </div>
      </div>
    `
  }
};

function selectNav(hash) {
  document.querySelectorAll('.nav-item').forEach(a => {
    const key = a.getAttribute('href').replace('#','');
    a.classList.toggle('active', key === hash);
  });
}

function render(hash) {
  const key = ROUTES[hash] ? hash : 'metod';
  const route = ROUTES[key];
  const root = document.getElementById('content-root');

  // exit animation
  root.classList.remove('transition-enter', 'transition-enter-active');
  root.classList.add('transition-exit');
  requestAnimationFrame(() => {
    root.classList.add('transition-exit-active');
    setTimeout(() => {
      root.innerHTML = route.html;
      root.classList.remove('transition-exit', 'transition-exit-active');
      root.classList.add('transition-enter');
      requestAnimationFrame(() => root.classList.add('transition-enter-active'));
    }, 200);
  });

  document.title = `${route.title} — Учитель математики`;
  selectNav(key);
}

function onHashChange() {
  const hash = location.hash.replace('#','');
  render(hash);
}

function initYear() {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
}

function initNavClicks() {
  document.querySelectorAll('.nav-item').forEach(a => {
    a.addEventListener('click', e => {
      // Allow default hash behavior for shareable URLs but ensure smooth render
      // We only prevent if clicking the already active section to avoid flicker
      const target = a.getAttribute('href');
      if (location.hash === target) {
        e.preventDefault();
        render(target.replace('#',''));
      }
    });
  });
}

window.addEventListener('hashchange', onHashChange);
window.addEventListener('DOMContentLoaded', () => {
  initYear();
  initNavClicks();
  const initial = location.hash.replace('#','') || 'metod';
  render(initial);
});


