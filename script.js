// Navigation Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const navToggle = document.getElementById('navToggle');
  const navDropdown = document.getElementById('navDropdown');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Toggle navigation dropdown
  navToggle.addEventListener('click', function(e) {
    navDropdown.classList.toggle('show');
    
    // Add ripple effect to button
    createRipple(e, this);
  });
  
  // Close dropdown when clicking outside
  document.addEventListener('click', function(e) {
    if (!navToggle.contains(e.target) && !navDropdown.contains(e.target)) {
      navDropdown.classList.remove('show');
    }
  });
  
  // Page navigation
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Get the page to show
      const pageId = this.getAttribute('data-page');
      
      // Hide all pages
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active-page');
      });
      
      // Show the selected page
      document.getElementById(pageId + 'Page').classList.add('active-page');
      
      // Update active link
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });
      this.classList.add('active');
      
      // Close the dropdown
      navDropdown.classList.remove('show');
    });
  });
  
  // Ripple effect function for buttons
  function createRipple(event, button) {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    button.appendChild(ripple);
    
    setTimeout(() => {
      ripple.remove();
    }, 600);
  }
  
  // Add ripple effect to all buttons
  const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', function(e) {
      createRipple(e, this);
    });
  });
  
  // Create flower rain background
  function createFlowerRain() {
    const flowerRainContainer = document.getElementById('flowerRain');
    const flowerEmojis = ['🌸', '🌷', '🌹', '🌺', '🌻', '🌼', '💐', '🏵️'];
    const flowerCount = 50;
    
    // Clear existing flowers
    flowerRainContainer.innerHTML = '';
    
    // Create new flowers
    for (let i = 0; i < flowerCount; i++) {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      
      // Random flower emoji
      const randomFlower = flowerEmojis[Math.floor(Math.random() * flowerEmojis.length)];
      flower.textContent = randomFlower;
      
      // Random position and animation
      const size = Math.random() * 20 + 10;
      flower.style.fontSize = `${size}px`;
      flower.style.left = `${Math.random() * 100}%`;
      flower.style.animationDuration = `${Math.random() * 15 + 10}s`;
      flower.style.animationDelay = `${Math.random() * 10}s`;
      
      flowerRainContainer.appendChild(flower);
    }
  }
  
  // Initialize flower rain
  createFlowerRain();
  
  // Recreate flower rain periodically
  setInterval(createFlowerRain, 30000);
  
  // Literary Game
  const quotes = [
    { id: 1, text: "Дорогие девочки, сердечно поздравляю вас с Международным женским днем 8 марта! Желаю вам счастья и успехов во всех ваших начинаниях.", author: "Александр Мареклов" },
    { id: 2, text: "Дорогие девочки, поздравляю вас с 8 марта, желаю вас счастья, успехов", author: "Владимир Слюсарь" },
    { id: 3, text: "Дорогие девочки, поздравляю вас с пасхой, хочу пожелать вам крепкого крепкого здоровья, успехов в учёбе, благополучия в семье, любви, счастья и всего самого наилучшего, с праздником🥰❤️", author: "Даня Журавлев" },
    { id: 4, text: "Дорогие девочки, поздравляю вас с 8 марта, желаю вас счастья, успехов!!!", author: "Дмитрий Токарский" },
    { id: 5, text: "Дорогие девочки, поздравляем с женским днем, желаем всего самого наилучшего и оставайтесь такими же!", author: "Егор Шабаганов" },
    { id: 6, text: "Дорогие девчата, поздравляю вас всех с 8 марта!!! И желаю вам счастья, здоровья, любви, успехов, удачи, благополучия, исполнения желаний и всего самого наилучшего ❤️🍰🔥🎊🎂 Будьте спортивными, а самое главное не курите, это зло", author: "Максим Журавлев" },
    { id: 7, text: "Дорогие девчонки, поздравляю с 8 марта, желаю быть королевами школы и чтобы были такими же крутыми как я", author: "Павел Матвеев" },
    { id: 8, text: "Поздравляю с 8 марта, желаю всего самого крутого, и всегда слушайте учителей", author: "Матвей Калкатин" },
    { id: 9, text: "С 8 марта, любите и будьте любимыми)", author: "Сергей Калашников" },
    { id: 10, text: "Дорогие девочки, поздравляю вас с 8 марта, желаю вам счастья, здоровья, и успехов во всем!", author: "Гриша Мягких" },
    { id: 11, text: "Дорогие девочки! поздравляю вас с этим прекрасным праздником❤️желаю быть всегда красивыми, женственными и успехов в учебе!!", author: "Даня Макаров" },
    { id: 12, text: "Дорогие девочки, поздравляю вас с 8 марта, желаю вам счастья, здоровья и оставайтесь такими же красивыми.", author: "Илья Мягких" },
    { id: 13, text: "С 8 марта девочки наши любимые всего вам хорошего желаю я вас помню и буду помнить", author: "Гагик Аракелян" },
    { id: 14, text: "Дорогие наши девочки, хочу поздравить вас с вашим днем, 8 марта! Хочу пожелать всего наилучшего и чтобы вы оставались такими же красивыми и позитивными,какими я вас помню) Не забывайте что мы у вас есть, не забывайте что мы одна маленькая семья", author: "Дживан Карапетян" },
    { id: 15, text: "Дорогие дамы! Пусть в этот чудесный праздник солнышка, весны, нежности, женственности вас осыпают цветами и комплиментами. Желаю вам, чтобы не только в этот день, а и всегда вас бесконечно ценили и любили, радовали и восхищались вами. Будьте счастливы! С 8 Марта, с Женским днем!", author: "Мартин Оганнисян " },
    { id: 16, text: "С 8 Марта, девчонки! Пусть будет море улыбок, горы конфет и океан счастья!", author: "Илья Крюков" },
    { id: 17, text: "С праздником, красавицы! Пусть каждый день будет ярким и чудесным, как волшебная сказка!", author: "Сергей Суханкин" },
    { id: 18, text: "Дорогие девочки, международным женским днем! В этот прекрасный весенний день хочу пожелать вам счастья, здоровья и вдохновения. Пусть каждый день приносит радость, а мечты сбываются. Вы — источник любви и тепла, с вашей улыбкой мир становится ярче. С праздником вас!!", author: "Егор Александров " },
    { id: 19, text: "Дорогие девчата, сегодня, в этот прекрасный весенний день, я хочу от всей души поздравить вас с Международным женским днём — 8 Марта! Пусть этот день будет наполнен теплом, улыбками и радостью, а в вашей жизни всегда светит солнце, даже в самые пасмурные дни. Пусть ваша жизнь будет такой же яркой, как ваши улыбки, такой же лёгкой, как весенний ветерок, и такой же прекрасной, как этот праздник. Пусть сбываются все ваши мечты, а каждый день приносит новые возможности и счастливые моменты. Я верю, что наши пути ещё пересекутся, и мы сможем вспомнить наши школьные годы, поделиться новыми историями и порадоваться успехам друг друга. А пока — желаю вам оставаться такими же прекрасными, сильными и уверенными в себе. С 8 Марта, дорогие мои! Пусть этот день станет для вас настоящим праздником, наполненным любовью, заботой и вниманием. Спасибо вам за всё, что вы сделали для меня, и за те прекрасные воспоминания, которые мы создали вместе. Отдельное спасибо нашему наилучшему классному руководителю. Благодаря вам я научился многому, а правила по русскому, естественно, важнее всего. Спасибо вам большое, всех поздравляю с 8 марта", author: "Юра Мкртчян" },
    { id: 20, text: "Дорогие наши девочки, сегодня ваш день — день весны, красоты и нежности. Мы хотим поздравить вас с 8 Марта и пожелать вам всего самого лучшего. Вы душа и сердце нашего мира. Вы сильные и умные, мудрые и талантливые. Вы умеете улыбаться и радоваться жизни. И в этот день мы желаем вам, чтобы улыбка никогда не сходила с ваших лиц, а жизнь была полна радости и счастья. Мы ценим вас за мудрость, доброту и терпение, которые помогают нам преодолевать все трудности жизни. Пусть в вашей жизни будет больше ярких моментов, новых открытий и знакомств. Пусть вы всегда будете окружены любовью и заботой близких вам людей, а ваша жизнь будет наполнена смыслом и радостью. С Международным женским днем! Желаем вам красивых цветов, теплых объятий и много улыбок.", author: "Никита Длясин" },
    { id: 21, text: "Привет деваньки,всех с ЖЕНСКИМ!!!! ДНЕМ,всего вам наилучшего,желаю максимум на егэ,верю в вас,до сих пор в моем сердце ", author: "Тимофей Солдатов" },
    { id: 22, text: "Дорогие дамы, поздравляю вас всех с 8 марта, желаю вам счастья, любви, благополучия, энергии, чтобы все ваши мечты сбывались, и вы всегда оставались такими красивыми, счастливыми и нежными❤️", author: "Владимир Беядовский" },
    { id: 23, text: "С 8 Марта! В этот прекрасный весенний день хочу поздравить вас и пожелать море счастья, океан любви и горы успехов! Пусть каждый день дарит вам радость, вдохновение и новые возможности. Пусть в вашей жизни сбудутся все мечты, а впереди будет только светлое и счастливое будущее! С праздником! 🌷", author: "Константин Веряскин" },
    { id: 24, text: "Поздравляю вас всех с вашим днем ,желаю вам успехов в творчестве и учебе ,что бы у вас всегда все подучалось", author: "Никита Паршин" },
    { id: 25, text: "Поздравляю всех девочек с 8 марта. Я хочу пожелать вам развития, женского счастья, здоровья, достижения всех поставленных целей, а также успехов во всём, 🍾особенно в учёбе. В таком возрасте нужно думать о том как обеспечить себе лучшую жизнь, а сделать это можно во многом только благодаря учёбе, на сколько я помню в классе все девчёнки очень умные, так что не думаю что у вас будут проблемы с этим. В любом случаи главное желание, и я уверен что у вас всё получится! Девчёнки, любите, цените себя, вы все особенные и красивые. Так же очень важно всегда идити вперёд даже если очень тяжело, при желании всё получится ) всех помню и скучаю. С праздником вас. Отдельно хотел бы поздравить Аллу Александровну, именно этот человек дал мне огромную силу и мотивацию идти дальше.", author: "Артем Мукаев" },
    { id: 26, text: "Поздравляю вас с восьмым марта, желаю чтобы вы оставались такими крутыми и прекрасными", author: "Ярослав Инюшкин" },
    { id: 27, text: "Поздравляю с 8 Марта! Желаю, чтобы вся жизнь была похожа на прекрасный весенний день, наполненный любовью и радостью, веселым пением птиц и яркостью прекрасных цветов. Пусть сбываются мечты, пусть случаются только приятные сюрпризы!", author: "Денис Билецкий" },
    { id: 28, text: "Веселья и фарта, поздравляю с Восьмым марта!", author: "Угурчиев Тагир" },
    { id: 29, text: "Поздравляю наших дорогих девочек 10 класса с 8 марта! Оставайтесь такими же красивыми и позитивными. Желаю всем вам, красоткам, удачи с подготовкой к ЕГЭ, высоких баллов и отметок. Чтобы все ваши мечты сбылись! Улыбайтесь чаще и не расслабляйтесь!", author: "Владислав Гриневич" },
    { id: 30, text: "Девочки, поздравляю вас с 8 марта!!Веселитесь, отдыхайте. Словно солнышко, сияйте.Непременно хорошейте, Не грустите, не болейте!", author: "Даня Назаров" }
  ];

  const authors = [
    { id: 1, name: "Александр Мареклов" },
    { id: 2, name: "Владимир Слюсарь" },
    { id: 3, name: "Даня Журавлев" },
    { id: 4, name: "Дмитрий Токарский" },
    { id: 5, name: "Егор Шабаганов" },
    { id: 6, name: "Максим Журавлев" },
    { id: 7, name: "Павел Матвеев" },
    { id: 8, name: "Матвей Калкатин" },
    { id: 9, name: "Сергей Калашников" },
    { id: 10, name: "Гриша Мягких" },
    { id: 11, name: "Даня Макаров" },
    { id: 12, name: "Илья Мягких" },
    { id: 13, name: "Гагик Аракелян" },
    { id: 14, name: "Дживан Карапетян" },
    { id: 15, name: "Мартин Оганнисян " },
    { id: 16, name: "Илья Крюков" },
    { id: 17, name: "Сергей Суханкин" },
    { id: 18, name: "Егор Александров " },
    { id: 19, name: "Юра Мкртчян" },
    { id: 20, name: "Никита Длясин" },
    { id: 21, name: "Тимофей Солдатов" },
    { id: 22, name: "Владимир Беядовский" },
    { id: 23, name: "Константин Веряскин" },
    { id: 24, name: "Никита Паршин" },
    { id: 25, name: "Артем Мукаев" },
    { id: 26, name: "Ярослав Инюшкин" },
    { id: 27, name: "Денис Билецкий" },
    { id: 28, name: "Угурчиев Тагир" },
    { id: 29, name: "Владислав Гриневич" },
    { id: 30, name: "Даня Назаров" }
  ];
  
  const quotesContainer = document.getElementById('quotes-container');
  const authorsContainer = document.getElementById('authors-container');
  const resultMessage = document.getElementById('result-message');
  const resetGameButton = document.getElementById('reset-game');
  
  let draggedItem = null;
  let matches = 0;
  let totalMatches = quotes.length;
  
  // Initialize game
  function initGame() {
    // Clear containers
    quotesContainer.innerHTML = '';
    authorsContainer.innerHTML = '';
    resultMessage.textContent = '';
    matches = 0;
    
    // Shuffle quotes and authors
    const shuffledQuotes = [...quotes].sort(() => Math.random() - 0.5);
    const shuffledAuthors = [...authors].sort(() => Math.random() - 0.5);
    
    // Add quotes to container
    shuffledQuotes.forEach(quote => {
      const quoteElement = document.createElement('div');
      quoteElement.classList.add('quote-item');
      quoteElement.textContent = quote.text;
      quoteElement.dataset.author = quote.author;
      quoteElement.draggable = true;
      
      quoteElement.addEventListener('dragstart', dragStart);
      quoteElement.addEventListener('dragend', dragEnd);
      addTouchListeners(quoteElement);
      
      quotesContainer.appendChild(quoteElement);
    });
    
    // Add authors to container
    shuffledAuthors.forEach(author => {
      const authorElement = document.createElement('div');
      authorElement.classList.add('author-item');
      authorElement.textContent = author.name;
      authorElement.dataset.author = author.name;
      
      authorElement.addEventListener('dragover', dragOver);
      authorElement.addEventListener('dragenter', dragEnter);
      authorElement.addEventListener('dragleave', dragLeave);
      authorElement.addEventListener('drop', drop);
      addTouchListeners(authorElement);
      
      authorsContainer.appendChild(authorElement);
    });
  }
  
  // Drag and drop functions
  function dragStart() {
    draggedItem = this;
    setTimeout(() => {
      this.classList.add('dragging');
    }, 0);
  }
  
  function dragEnd() {
    this.classList.remove('dragging');
  }
  
  function dragOver(e) {
    e.preventDefault();
  }
  
  function dragEnter(e) {
    e.preventDefault();
    this.classList.add('hovered');
  }
  
  function dragLeave() {
    this.classList.remove('hovered');
  }
  
  function drop() {
    this.classList.remove('hovered');
    
    // Check if the author matches the quote
    if (draggedItem.dataset.author === this.dataset.author) {
      this.classList.add('correct');
      draggedItem.classList.add('correct');
      matches++;
      
      // Remove the matched elements after a short delay
      setTimeout(() => {
        this.remove();
        draggedItem.remove();
      }, 500); // Delay before removing elements
      
      if (matches === totalMatches) {
        resultMessage.textContent = 'Поздравляем! Вы правильно сопоставили все цитаты!';
      } else {
        resultMessage.textContent = 'Правильно! Продолжайте в том же духе!';
      }
    } else {
      this.classList.add('incorrect');
      draggedItem.classList.add('incorrect');
      resultMessage.textContent = 'Неверно. Попробуйте еще раз!';
      
      // Reset incorrect state after a short delay
      setTimeout(() => {
        this.classList.remove('incorrect');
        draggedItem.classList.remove('incorrect');
      }, 1000);
    }
  }
  
  // Reset game
  resetGameButton.addEventListener('click', initGame);
  
  // Initialize the game on page load
  initGame();
});

// Обратная связь - модальное окно
const feedbackButton = document.getElementById('feedbackButton');
const feedbackModal = document.getElementById('feedbackModal');
const closeModal = document.querySelector('.close');

// Открытие модального окна
feedbackButton.addEventListener('click', function(e) {
  e.preventDefault();
  feedbackModal.style.display = 'block';
});

// Закрытие модального окна
closeModal.addEventListener('click', function() {
  feedbackModal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function(event) {
  if (event.target === feedbackModal) {
    feedbackModal.style.display = 'none';
  }
});

// Добавляем обработчики для сенсорных событий
function addTouchListeners(element) {
  element.addEventListener('touchstart', touchStart);
  element.addEventListener('touchmove', touchMove);
  element.addEventListener('touchend', touchEnd);
}

// Обработчик начала касания
function touchStart(event) {
  event.preventDefault();
  const touch = event.touches[0];
  const element = document.elementFromPoint(touch.clientX, touch.clientY);
  if (element.classList.contains('quote-item') || element.classList.contains('author-item')) {
    draggedItem = element;
    draggedItem.classList.add('dragging');
  }
}

// Обработчик перемещения касания
function touchMove(event) {
  event.preventDefault();
  if (draggedItem) {
    const touch = event.touches[0];
    draggedItem.style.position = 'absolute';
    draggedItem.style.left = `${touch.clientX - draggedItem.offsetWidth / 2}px`;
    draggedItem.style.top = `${touch.clientY - draggedItem.offsetHeight / 2}px`;
  }
}

// Обработчик окончания касания
function touchEnd(event) {
  event.preventDefault();
  if (draggedItem) {
    const touch = event.changedTouches[0];
    const targetElement = document.elementFromPoint(touch.clientX, touch.clientY);
    if (targetElement && (targetElement.classList.contains('quote-item') || targetElement.classList.contains('author-item'))) {
      drop.call(targetElement);
    }
    draggedItem.classList.remove('dragging');
    draggedItem.style.position = '';
    draggedItem.style.left = '';
    draggedItem.style.top = '';
    draggedItem = null;
  }
}

// Проверка на сенсорные устройства
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

if (isTouchDevice) {
  // Добавляем обработчики для сенсорных устройств
  document.querySelectorAll('.quote-item, .author-item').forEach(element => {
    addTouchListeners(element);
  });
}