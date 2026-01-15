// Данные для портфолио
const portfolioData = {
    graphic: [
        {
            id: 1,
            title: "Логотип компании O2.Travel",
            description: "Оригинальный дизайн логотипа тур-агенства O2.Travel.",
            category: "Логотипы",
            image: "Graphic visits/10.jpg",
            type: "image"
        },
        // В разделе graphic добавьте:
        {
            id: 2,
            title: "Визитка O2.Travel",
            description: "Оригинальный дизайн визитки компании путешествий O2.Travel. Современный дизайн с акцентом на путешествия.",
            category: "Визитки",
            image: "Graphic visits/6.jpg", // Замените на реальный путь
            type: "image"
        },
        {
            id: 3,
            title: "Логотип компании JOYGO",
            description: "Разработка логотипа хозяйственного магазина JOYGO",
            category: "Логотипы",
            image: "Graphic visits/15.jpg",
            type: "image"
        },
        {
            id: 4,
            title: "Логотип HR компании",
            description: "Дизайн логотипа HR компании.",
            category: "Логотипы",
            image: "Graphic visits/12.jpg",
            type: "image"
        },
        {
            id: 5,
            title: "Логотип экологичного бренда одежды",
            description: "Оригинальный логотип экологичного бренда одежды Ecowear.",
            category: "Логотипы",
            image: "Graphic visits/7.jpg",
            type: "image"
        },
        {
            id: 6,
            title: "Визитка салона красоты Style",
            description: "Дизайн визитки с созданием илюстрации для салона красоты.",
            category: "Визитки",
            image: "Graphic visits/8.jpg",
            type: "image"
        },
        {
            id: 7,
            title: "Логотип игровой команды LAZE",
            description: "Создание оригинального логотипа для команды известной игры GTAV.",
            category: "Логотипы",
            image: "Graphic visits/4.jpg",
            type: "image"
        },
        {
            id: 8,
            title: "Логотип зоо-магазина Fluffy-Friends",
            description: "Разработка логотипа зоо-магазина Fluffy-Friends.",
            category: "Логотипы",
            image: "Graphic visits/9.jpg",
            type: "image"
        },
        {
            id: 9,
            title: "Создание личного постера",
            description: "Дизайн постера олицитворяющий силу и независимость.",
            category: "Постеры",
            image: "Graphic visits/14.jpg",
            type: "image"
        },
        
        {
            id: 10,
            title: "Постер so hard",
            description: "Дизайн постера.",
            category: "Постеры",
            image: "Graphic visits/13.jpg",
            type: "image"
        },

        {
            id: 11,
            title: "Дизайн постера FREEDOM",
            description: "Дизайн постера олицитворяющий тягость к свободе.",
            category: "Постеры",
            image: "Graphic visits/16.jpg",
            type: "image"
        },

        {
            id: 12,
            title: "Логотип Сим-промторг",
            description: "Создание логотипа магазина промышленной торговли.",
            category: "Логотипы",
            image: "Graphic visits/5.jpg",
            type: "image"
        },

        {
            id: 13,
            title: "Логотип игровой команды MIURA",
            description: "Создание логотипа команды для именитой игры GTAV",
            category: "Логотипы",
            image: "Graphic visits/17.jpg",
            type: "image"
        },

        {
            id: 14,
            title: "Логотип компании турестического бюро",
            description: "Создание логотипа для компании SAVANNA.",
            category: "Логотипы",
            image: "Graphic visits/18.jpg",
            type: "image"
        },

        {
            id: 15,
            title: "Логотип ARCHER CLUB",
            description: "Создание логотипа для клуба лучников ARCHER CLUB",
            category: "Логотипы",
            image: "Graphic visits/19.jpg",
            type: "image"
        },

        {
            id: 16,
            title: "Меню бургерной",
            description: "Создание базового меню для ресторана-бургерной",
            category: "Меню",
            image: "Graphic visits/3.jpg",
            type: "image"
        },

        {
            id: 17,
            title: "Логотип для телеграм канала",
            description: "Создание логотипа телеграм для телеграм канала United armenians of Eurasia",
            category: "Логотипы",
            image: "Graphic visits/2.jpg",
            type: "image"
        },

        {
            id: 18,
            title: "Постер для развлекательной зоны",
            description: "Постер PARTY ZONE для зоны развлечений.",
            category: "Постеры",
            image: "Graphic visits/1.jpg",
            type: "image"
        },

        {
            id: 19,
            title: "Логотип для бренда одежды",
            description: "1Логотип + мокап для бренда одежды",
            category: "Одежда",
            image: "Graphic visits/11.jpg",
            type: "image"
        }
        
        
    ],
    
    motion: [
        {
            id: 20,
            title: "Анимация логотипа STRANGE DUDES",
            description: "Создание анимированного логотипа для подкаста именитого сериала очень странные дела.",
            category: "Анимация логотипа",
            video: "Motion/strange.mp4",
            thumbnail: "Motion/thumbnail/strange.png",
            type: "video"
        },
        {
            id: 21,
            title: "Промо-ролик студии",
            description: "Личный проморолик анимации для ARS Studio.",
            category: "Промо-ролик",
            video: "Motion/2.mp4",
            thumbnail: "Motion/thumbnail/2.png",
            type: "video"
        },
        {
            id: 22,
            title: "Анимация логотипа Яндекс Музыка",
            description: "Анимация логотипа-рекламный ролик для Яндекс Музыки.",
            category: "Анимация логотипа",
            video: "Motion/3.mp4",
            thumbnail: "Motion/thumbnail/3.png",
            type: "video"
        },
        {
            id: 23,
            title: "Анимация логотипа DeepSeek",
            description: "Анимация логотипа-рекламный ролик для DeepSeek.",
            category: "Анимация логотипа",
            video: "Motion/11.mp4",
            thumbnail: "Motion/thumbnail/11.jpg",
            type: "video"
        },
        {
            id: 24,
            title: "Анимация логотипа SAVANNA",
            description: "Динамичная анимация логотипа для компании тур-бюро SAVANNA",
            category: "Анимация логотипа",
            video: "Motion/10.mp4",
            thumbnail: "Motion/thumbnail/10.jpg",
            type: "video"
        },
        {
            id: 25,
            title: "Анимация логоипа JOYGO",
            description: "Создание анимации для компании хоз-товаров JOYGO.",
            category: "Анимация логотипа",
            video: "Motion/9.mp4",
            thumbnail: "Motion/thumbnail/9.png",
            type: "video"
        },
        {
            id: 26,
            title: "Анимация логотпа ARCHER CLUB",
            description: "Анимация логотпа клуба лучников ARCHER CLUB. ",
            category: "Анимация логотипа",
            video: "Motion/5.mp4",
            thumbnail: "Motion/thumbnail/5.png",
            type: "video"
        },
        {
            id: 27,
            title: "Анимация логотипа Pinterest",
            description: "Анимация-Инфо ролик для Pinterest.",
            category: "Анимация логотипа",
            video: "Motion/6.mp4",
            thumbnail: "Motion/thumbnail/6.png",
            type: "video"
        },
        {
            id: 28,
            title: "Промо-ролик",
            description: "Промо-ролик используя музыку.",
            category: "Анимация",
            video: "Motion/7.mp4",
            thumbnail: "Motion/thumbnail/7.png",
            type: "video"
        },
        {
            id: 29,
            title: "Анимация логотипа Medipulse",
            description: "Анимация оригинального логотпа Medipulse.",
            category: "Анимация логотипа",
            video: "Motion/8.mp4",
            thumbnail: "Motion/thumbnail/8.png",
            type: "video"
        },
        {
            id: 30,
            title: "Анимация логотипа Elexion Company",
            description: "Анимация логотипа по ремонту техники Elexion Company.",
            category: "Анимация логотипа",
            video: "Motion/4.mp4",
            thumbnail: "Motion/thumbnail/4.png",
            type: "video"
        },
        {
            id: 31,
            title: "Анимация логотпа VPNMAXBOT",
            description: "Анимация логотпа VPNMAXBOT для телеграм канала.",
            category: "Анимация логотипа",
            video: "Motion/1.mp4",
            thumbnail: "Motion/thumbnail/1.png",
            type: "video"
        }
    ],
    
    "3d": [
        {
            id: 32,
            title: "Coming soon",
            description: "",
            category: "Coming soon",
            image: "3D/1.png",
            type: "image",
            comingSoon: true
        },
        {
            id: 33,
            title: "Coming soon",
            description: "",
            category: "Coming soon",
            image: "3D/1.png",
            type: "image",
            comingSoon: true
        },
        {
            id: 34,
            title: "Coming soon",
            description: "",
            category: "Coming soon",
            image: "3D/1.png",
            type: "image",
            comingSoon: true
        }
    ]
};

// Функция для создания карточек портфолио
function createPortfolioItems() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    if (!portfolioGrid) return;
    
    portfolioGrid.innerHTML = '';
    
    let itemIndex = 0;
    
    // Графический дизайн (10 карточек)
    portfolioData.graphic.forEach(item => {
        const card = createPortfolioCard(item, 'graphic', itemIndex);
        portfolioGrid.appendChild(card);
        itemIndex++;
    });
    
    // Моушен дизайн (10 карточек)
    portfolioData.motion.forEach(item => {
        const card = createPortfolioCard(item, 'motion', itemIndex);
        portfolioGrid.appendChild(card);
        itemIndex++;
    });
    
    // 3D дизайн (3 карточки)
    portfolioData["3d"].forEach(item => {
        const card = createPortfolioCard(item, '3d', itemIndex);
        portfolioGrid.appendChild(card);
        itemIndex++;
    });
}

// Функция создания карточки
function createPortfolioCard(item, category, index) {
    const card = document.createElement('div');
    card.className = 'work-item';
    card.setAttribute('data-category', category);
    card.style.setProperty('--item-index', index % 10); // Ограничиваем до 10 для анимации
    
    let mediaContent = '';
    
    if (item.type === 'video') {
        mediaContent = `
            <div class="video-container">
                <video class="video-thumbnail" poster="${item.thumbnail}">
                    <source src="${item.video}" type="video/mp4">
                </video>
                <div class="play-button" onclick="openModal('${item.id}')">
                    <i class="fas fa-play"></i>
                </div>
            </div>
        `;
    } else {
        mediaContent = `
            <div class="work-img" onclick="openModal('${item.id}')">
                <img src="${item.image}" alt="${item.title}"> 
                </div>
            </div>
        `;
    }
    
    card.innerHTML = `
        ${mediaContent}
        <div class="work-info">
            <div class="work-info-content">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <span class="work-category">${item.category}</span>
                <div style="margin-top: 15px;">
                    <button class="view-work-btn" onclick="openModal('${item.id}')">
                        <i class="fas fa-eye"></i> Посмотреть
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Функция открытия модального окна
function openModal(itemId) {
    // Находим элемент
    let item = null;
    let category = '';
    
    // Ищем элемент во всех категориях
    for (const cat in portfolioData) {
        const found = portfolioData[cat].find(i => i.id == itemId);
        if (found) {
            item = found;
            category = cat;
            break;
        }
    }
    
    if (!item) return;
    
    // Если это "скоро будет" для 3D
    if (item.comingSoon) {
        const message = document.createElement('div');
        message.className = 'coming-soon-message';
        message.textContent = '3D Дизайн скоро будет доступен! Следите за обновлениями.';
        document.body.appendChild(message);
        
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 3000);
        return;
    }
    
    const modal = document.getElementById('imageModal');
    const modalMediaContainer = document.getElementById('modalMediaContainer');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalCategory = document.getElementById('modalCategory');
    
    // Заполняем контент
    modalTitle.textContent = item.title;
    modalDescription.textContent = item.description;
    modalCategory.textContent = item.category;
    
    // Очищаем контейнер
    modalMediaContainer.innerHTML = '';
    
    // Добавляем медиа контент
    if (item.type === 'video') {
        modalMediaContainer.innerHTML = `
            <video class="modal-video" controls autoplay>
                <source src="${item.video}" type="video/mp4">
                Ваш браузер не поддерживает видео.
            </video>
        `;
    } else {
        modalMediaContainer.innerHTML = `
            <img class="modal-img" src="${item.image}" alt="${item.title}">
        `;
    }
    
    // Показываем модальное окно
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Функция закрытия модального окна
function closeModal() {
    const modal = document.getElementById('imageModal');
    const modalMediaContainer = document.getElementById('modalMediaContainer');
    
    // Останавливаем видео если оно играет
    const video = modalMediaContainer.querySelector('video');
    if (video) {
        video.pause();
    }
    
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Через небольшое время очищаем контент
    setTimeout(() => {
        modalMediaContainer.innerHTML = '';
    }, 300);
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    createPortfolioItems();
    
    // Инициализация фильтрации с небольшой задержкой
    setTimeout(() => {
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Смена активной кнопки
                filterButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                const filterValue = this.getAttribute('data-filter');
                filterPortfolio(filterValue);
            });
        });
    }, 100);
});

// Глобальная функция фильтрации
function filterPortfolio(filterValue) {
    const workItems = document.querySelectorAll('.work-item');
    
    workItems.forEach(item => {
        const category = item.getAttribute('data-category');
        
        if (filterValue === 'all' || category === filterValue) {
            item.style.display = 'block';
            // Добавляем анимацию
            item.style.animation = 'fadeInUp 0.5s ease forwards';
        } else {
            item.style.display = 'none';
        }
    });
}
