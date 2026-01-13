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
