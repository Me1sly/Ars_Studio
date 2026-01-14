// Навигация между вкладками
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinksContainer = document.getElementById('navLinks');
    const body = document.body;
    const logoLink = document.querySelector('.logo');
    
    // ========== Кликабельный логотип ==========
    logoLink.addEventListener('click', function(e) {
        e.preventDefault();
        
        navLinks.forEach(item => item.classList.remove('active'));
        sections.forEach(section => section.classList.remove('active'));
        
        const homeLink = document.querySelector('.nav-link[data-target="home"]');
        if (homeLink) {
            homeLink.classList.add('active');
        }
        
        const homeSection = document.getElementById('home');
        if (homeSection) {
            homeSection.classList.add('active');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        if (navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            body.style.overflow = 'auto';
        }
    });
    
    // Мобильное меню
    mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        navLinksContainer.classList.toggle('active');
        
        if (navLinksContainer.classList.contains('active')) {
            this.innerHTML = '<i class="fas fa-times"></i>';
            body.style.overflow = 'hidden';
        } else {
            this.innerHTML = '<i class="fas fa-bars"></i>';
            body.style.overflow = 'auto';
        }
    });
    
    // Навигационные ссылки
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            navLinks.forEach(item => item.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            this.classList.add('active');
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.classList.add('active');
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
            
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                body.style.overflow = 'auto';
            }
        });
    });
    
    // Закрытие меню при клике вне меню
    document.addEventListener('click', function(e) {
        if (!navLinksContainer.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                body.style.overflow = 'auto';
            }
        }
    });
    
    // ========== УПРОЩЕННАЯ ФИЛЬТРАЦИЯ ==========
    const filterButtons = document.querySelectorAll('.filter-btn');
    const workItems = document.querySelectorAll('.work-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Смена активной кнопки
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            // ПРОСТАЯ фильтрация без сложной анимации
            workItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    // Просто показываем
                    item.style.display = 'block';
                } else {
                    // Просто скрываем
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // ========== КЛИК ПО УСЛУГАМ НА ГЛАВНОЙ ==========
    // Находим все карточки услуг
    const serviceCards = document.querySelectorAll('.service-card[data-filter]');
    
    // Добавляем обработчик клика на каждую карточку
    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const filterType = this.getAttribute('data-filter');
            
            // Если это 3D дизайн (скоро будет), показываем сообщение
            if (filterType === '3d') {
                // Показываем всплывающее сообщение
                const message = document.createElement('div');
                message.className = 'coming-soon-message';
                message.textContent = '3D Дизайн скоро будет доступен! Следите за обновлениями.';
                document.body.appendChild(message);
                
                // Убираем сообщение через 3 секунды
                setTimeout(() => {
                    if (message.parentNode) {
                        message.parentNode.removeChild(message);
                    }
                }, 3000);
                return;
            }
            
            // Переключаем навигацию на портфолио
            navLinks.forEach(item => item.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Активируем ссылку "Портфолио"
            const portfolioLink = document.querySelector('.nav-link[data-target="works"]');
            if (portfolioLink) {
                portfolioLink.classList.add('active');
            }
            
            // Показываем секцию портфолио
            const portfolioSection = document.getElementById('works');
            if (portfolioSection) {
                portfolioSection.classList.add('active');
                
                // Прокручиваем к портфолио
                window.scrollTo({
                    top: portfolioSection.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Через небольшую задержку активируем нужный фильтр
                setTimeout(() => {
                    // Находим нужную кнопку фильтра
                    const filterBtn = document.querySelector(`.filter-btn[data-filter="${filterType}"]`);
                    if (filterBtn) {
                        // Снимаем активный класс со всех кнопок
                        filterButtons.forEach(btn => btn.classList.remove('active'));
                        
                        // Добавляем активный класс на нужную кнопку
                        filterBtn.classList.add('active');
                        
                        // Вызываем фильтрацию
                        const filterValue = filterBtn.getAttribute('data-filter');
                        
                        workItems.forEach(item => {
                            const category = item.getAttribute('data-category');
                            
                            if (filterValue === 'all' || category === filterValue) {
                                item.style.display = 'block';
                            } else {
                                item.style.display = 'none';
                            }
                        });
                    }
                }, 500); // Небольшая задержка для плавности
            }
            
            // Закрываем мобильное меню если открыто
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                body.style.overflow = 'auto';
            }
        });
    });
    
    // Отправка формы
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Отправка...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                formMessage.textContent = 'Заявка отправлена! Мы свяжемся с вами в ближайшее время.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                
                contactForm.reset();
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
                
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
                
                console.log('Данные для отправки на arsenbudagyan3@mail.ru:');
                console.log('Имя:', name);
                console.log('Email:', email);
                console.log('Тема:', subject);
                console.log('Сообщение:', message);
            }, 1500);
        });
    }
    
    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.classList.contains('logo')) return;
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                
                navLinks.forEach(item => item.classList.remove('active'));
                sections.forEach(section => section.classList.remove('active'));
                
                const correspondingLink = document.querySelector(`.nav-link[href="${targetId}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
                
                targetElement.classList.add('active');
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Автоматическое изменение года в футере
    const yearSpan = document.querySelector('.copyright');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = yearSpan.textContent.replace('2023', currentYear);
    }
    
    // ИНИЦИАЛИЗАЦИЯ - Убедимся что все элементы видны при загрузке
    setTimeout(() => {
        workItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.style.display = 'block';
        });
    }, 100);
});

// ========== КЛИКАБЕЛЬНОСТЬ КАРТОЧЕК ПОРТФОЛИО ==========
// Пока это заглушка для будущей функциональности
workItems.forEach(item => {
    item.addEventListener('click', function() {
        const category = this.getAttribute('data-category');
        const title = this.querySelector('h3').textContent;
        
        // В будущем здесь будет переход на отдельную страницу с работами
        console.log(`Клик по категории: ${category}, заголовок: ${title}`);
        
        // Временное сообщение
        const message = document.createElement('div');
        message.className = 'coming-soon-message';
        message.textContent = `Раздел "${title}" в разработке. Скоро здесь будут работы!`;
        document.body.appendChild(message);
        
        setTimeout(() => {
            if (message.parentNode) {
                message.parentNode.removeChild(message);
            }
        }, 3000);
    });
    
    // Добавляем курсор указателя
    item.style.cursor = 'pointer';
});
