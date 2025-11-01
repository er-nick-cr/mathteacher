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
         Участие в проектах и конференциях.
      </p>
      <div class="gallery" style="margin-top:18px;">
        <div class="gallery-item" data-image="images/Благодарность Главы Республики Хакасия — Председателя Правительства Республики Хакасия.jpg">
          <img src="images/Благодарность Главы Республики Хакасия — Председателя Правительства Республики Хакасия.jpg" alt="Благодарность Главы Республики Хакасия — Председателя Правительства Республики Хакасия" loading="lazy">
        </div>
        <div class="gallery-item" data-image="images/Представление опыта работы на республиканских Свято-Иннокентьевских чтениях в 2024 году.jpg">
          <img src="images/Представление опыта работы на республиканских Свято-Иннокентьевских чтениях в 2024 году.jpg" alt="Представление опыта работы на республиканских Свято-Иннокентьевских чтениях в 2024 году" loading="lazy">
        </div>
        <div class="gallery-item" data-image="images/Сертификат за участие в конференции Единое образовательное пространство.jpg">
          <img src="images/Сертификат за участие в конференции Единое образовательное пространство.jpg" alt="Сертификат за участие в конференции Единое образовательное пространство современные возможности для качественного обучения и воспитания" loading="lazy">
        </div>
        <div class="gallery-item" data-image="images/Сертификат за участие в республиканских СВЯТО-ИННОКЕНТЬЕВСКИХ ЧТЕНИЯХ.jpg">
          <img src="images/Сертификат за участие в республиканских СВЯТО-ИННОКЕНТЬЕВСКИХ ЧТЕНИЯХ.jpg" alt="Сертификат за участие в республиканских СВЯТО-ИННОКЕНТЬЕВСКИХ ЧТЕНИЯХ" loading="lazy">
        </div>
        <div class="gallery-item" data-image="images/Сертификат за участие в семинаре Духовно-нравственное воспитание.jpg">
          <img src="images/Сертификат за участие в семинаре Духовно-нравственное воспитание.jpg" alt="Сертификат за участие в семинаре Духовно-нравственное воспитание обучающихся в православной гимназии_проблемы, опыт, перспективы" loading="lazy">
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

// Gallery state
const IMAGE_DESCRIPTIONS = {
  "Благодарность Главы Республики Хакасия — Председателя Правительства Республики Хакасия.jpg": "Благодарность Главы Республики Хакасия — Председателя Правительства Республики Хакасия",
  "Представление опыта работы на республиканских Свято-Иннокентьевских чтениях в 2024 году.jpg": "Представление опыта работы на республиканских Свято-Иннокентьевских чтениях в 2024 году",
  "Сертификат за участие в конференции Единое образовательное пространство.jpg": "Сертификат за участие в конференции \"Единое образовательное пространство современные возможности для качественного обучения и воспитания\"",
  "Сертификат за участие в республиканских СВЯТО-ИННОКЕНТЬЕВСКИХ ЧТЕНИЯХ.jpg": "Сертификат за участие в республиканских СВЯТО-ИННОКЕНТЬЕВСКИХ ЧТЕНИЯХ, посвященных \"80-летию Великой Победы: память и великий опыт поколений\"",
  "Сертификат за участие в семинаре Духовно-нравственное воспитание.jpg": "Сертификат за участие в семинаре \"Духовно-нравственное воспитание обучающихся в православной гимназии: проблемы, опыт, перспективы\"",
};
let galleryImages = [];
let currentImageIndex = -1;

function getDescriptionFromFilename(filename) {
  const name = filename.split('/').pop().split('\\').pop(); // извлекаем имя файла
  return IMAGE_DESCRIPTIONS[name] || "Без описания"; // возвращаем описание или дефолт
}

function updateModalImage(index) {
  if (index < 0 || index >= galleryImages.length) return;
  
  currentImageIndex = index;
  const imageData = galleryImages[index];
  const modal = document.getElementById('image-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalDownload = document.getElementById('modal-download');
  const prevBtn = document.getElementById('modal-prev');
  const nextBtn = document.getElementById('modal-next');
  
  if (!modal || !modalImage || !modalTitle || !modalDownload) return;
  
  const description = getDescriptionFromFilename(imageData.path);
  modalImage.src = imageData.path;
  modalImage.alt = imageData.alt || description;
  modalTitle.textContent = description;
  modalDownload.href = imageData.path;
  modalDownload.download = imageData.path.split('/').pop().split('\\').pop();
  
  // Update navigation buttons
  if (prevBtn) prevBtn.style.display = galleryImages.length > 1 ? 'flex' : 'none';
  if (nextBtn) nextBtn.style.display = galleryImages.length > 1 ? 'flex' : 'none';
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) nextBtn.disabled = index === galleryImages.length - 1;
}

function openImageModal(imagePath, altText, index = -1) {
  const modal = document.getElementById('image-modal');
  if (!modal) return;
  
  // Find the index if not provided
  if (index === -1) {
    index = galleryImages.findIndex(img => img.path === imagePath);
    if (index === -1) return;
  }
  
  updateModalImage(index);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function nextImage() {
  if (currentImageIndex < galleryImages.length - 1) {
    updateModalImage(currentImageIndex + 1);
  }
}

function prevImage() {
  if (currentImageIndex > 0) {
    updateModalImage(currentImageIndex - 1);
  }
}

function closeImageModal() {
  const modal = document.getElementById('image-modal');
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Initialize gallery using event delegation (works with dynamically added content)
let galleryInitialized = false;
function initGallery() {
  // Only set up the listener once
  if (galleryInitialized) return;
  galleryInitialized = true;
  
  // Use document-level event delegation to handle clicks on gallery items
  // This works even when content is dynamically replaced
  document.addEventListener('click', function(e) {
    const galleryItem = e.target.closest('.gallery-item');
    if (!galleryItem) return;
    
    // Make sure the gallery item is within the content panel
    const contentPanel = document.getElementById('content-root');
    if (!contentPanel || !contentPanel.contains(galleryItem)) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    // Collect all gallery images
    const allItems = contentPanel.querySelectorAll('.gallery-item');
    galleryImages = Array.from(allItems).map((item, index) => {
      const img = item.querySelector('img');
      return {
        path: item.getAttribute('data-image'),
        alt: img ? img.alt : '',
        index: index
      };
    });
    
    // Find clicked item index
    const clickedIndex = Array.from(allItems).indexOf(galleryItem);
    const imagePath = galleryItem.getAttribute('data-image');
    const img = galleryItem.querySelector('img');
    const altText = img ? img.alt : '';
    
    if (imagePath && clickedIndex >= 0) {
      openImageModal(imagePath, altText, clickedIndex);
    }
  });
}

// Initialize modal handlers once on page load
function initModalHandlers() {
  const modal = document.getElementById('image-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  const modalContent = document.querySelector('.modal-content');
  const prevBtn = document.getElementById('modal-prev');
  const nextBtn = document.getElementById('modal-next');
  
  if (modalClose) {
    modalClose.addEventListener('click', closeImageModal);
  }
  
  // Close when clicking on background (modal-content but not on interactive elements)
  if (modalContent) {
    modalContent.addEventListener('click', (e) => {
      // Close if clicking directly on modal-content (background) or overlay
      // But not if clicking on image, buttons, or info panel
      const isImage = e.target.id === 'modal-image' || e.target.closest('#modal-image');
      const isButton = e.target.closest('.modal-nav') || e.target.closest('.modal-close') || e.target.closest('.download-btn');
      const isInfo = e.target.closest('.modal-info');
      
      if (!isImage && !isButton && !isInfo && e.target === modalContent) {
        closeImageModal();
      }
    });
  }
  
  // Also close when clicking directly on overlay
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeImageModal();
      }
    });
  }
  
  // Navigation buttons
  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      prevImage();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      nextImage();
    });
  }
  
  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    const modal = document.getElementById('image-modal');
    if (!modal || !modal.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
      closeImageModal();
    } else if (e.key === 'ArrowLeft') {
      prevImage();
    } else if (e.key === 'ArrowRight') {
      nextImage();
    }
  });
}

window.addEventListener('hashchange', onHashChange);
window.addEventListener('DOMContentLoaded', () => {
  initYear();
  initNavClicks();
  initModalHandlers();
  initGallery(); // Set up gallery event delegation once
  const initial = location.hash.replace('#','') || 'metod';
  render(initial);
});


