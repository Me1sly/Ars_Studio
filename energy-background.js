// energy-background.js - Обновленная версия для скроллинга
document.addEventListener('DOMContentLoaded', function() {
    const canvas = document.getElementById('energyCanvas');
    if (!canvas) return;
    
    if (window.innerWidth <= 768) {
        canvas.style.display = 'none';
        return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Устанавливаем размеры canvas на ВСЮ высоту документа
    function setCanvasSize() {
        const body = document.body;
        const html = document.documentElement;
        
        // Вычисляем полную высоту документа
        const height = Math.max(
            body.scrollHeight,
            body.offsetHeight,
            html.clientHeight,
            html.scrollHeight,
            html.offsetHeight
        );
        
        canvas.width = window.innerWidth;
        canvas.height = height;
        
        console.log('Canvas size:', canvas.width, 'x', canvas.height);
        console.log('Document height:', height);
        
        return { width: canvas.width, height: canvas.height };
    }
    
    let { width, height } = setCanvasSize();
    
    // Настройки
    const particles = [];
    const particleCount = 80; // Немного больше частиц
    const connectionDistance = 120;
    const mouseRadius = 120;
    
    let mouse = { x: -1000, y: -1000 };
    
    // Создаем частицы распределенные по всей высоте
    function initParticles() {
        particles.length = 0; // Очищаем массив
        
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height, // Распределяем по всей высоте
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                radius: Math.random() * 1.5 + 0.5,
                color: `hsla(${190 + Math.random() * 40}, 80%, 60%, 0.3)`
            });
        }
    }
    
    // Следим за мышью с учетом скролла
    document.addEventListener('mousemove', function(e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY + window.scrollY; // Учитываем скролл
    });
    
    // Анимация
    function animate() {
        // Очищаем ВЕСЬ canvas с легкой прозрачностью для следов
        ctx.fillStyle = 'rgba(10, 25, 47, 0.03)'; // Очень прозрачно для длинных следов
        ctx.fillRect(0, 0, width, height);
        
        // Обновляем частицы
        particles.forEach(p => {
            // Плавное движение
            p.x += p.vx;
            p.y += p.vy;
            
            // Отскок от границ по X, но свободно по Y
            if (p.x < 0 || p.x > width) p.vx *= -1;
            
            // Если частица ушла за нижнюю границу, возвращаем ее наверх
            if (p.y > height) {
                p.y = 0;
            }
            // Если частица ушла за верхнюю границу, возвращаем ее вниз
            if (p.y < 0) {
                p.y = height;
            }
            
            // Реакция на мышь
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < mouseRadius && distance > 10) {
                const force = (mouseRadius - distance) / mouseRadius;
                const angle = Math.atan2(dy, dx);
                
                p.vx -= Math.cos(angle) * force * 0.15;
                p.vy -= Math.sin(angle) * force * 0.15;
            }
            
            // Плавное затухание
            p.vx *= 0.995;
            p.vy *= 0.995;
            
            // Ограничиваем скорость
            const maxSpeed = 1;
            const currentSpeed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
            if (currentSpeed > maxSpeed) {
                p.vx = (p.vx / currentSpeed) * maxSpeed;
                p.vy = (p.vy / currentSpeed) * maxSpeed;
            }
            
            // Рисуем частицу
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });
        
        // Рисуем соединения
        ctx.strokeStyle = 'rgba(0, 168, 255, 0.1)';
        ctx.lineWidth = 0.8;
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];
                
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < connectionDistance) {
                    const opacity = 0.2 * (1 - distance / connectionDistance);
                    ctx.strokeStyle = `rgba(0, 168, 255, ${opacity})`;
                    
                    ctx.beginPath();
                    ctx.moveTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.stroke();
                }
            }
        }
        
        requestAnimationFrame(animate);
    }
    
    // Ресайз окна
    window.addEventListener('resize', function() {
        const newSize = setCanvasSize();
        width = newSize.width;
        height = newSize.height;
        
        // Перераспределяем частицы
        particles.forEach(p => {
            p.x = Math.random() * width;
            p.y = Math.random() * height;
        });
    });
    
    // Обновляем размер canvas при скролле (если контент динамически добавляется)
    window.addEventListener('scroll', function() {
        // Проверяем, не изменилась ли высота документа
        const newHeight = Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight
        );
        
        if (newHeight > height) {
            height = newHeight;
            canvas.height = height;
            console.log('Canvas высота обновлена:', height);
        }
    });
    
    // Инициализация
    initParticles();
    animate();
    
    // Обновляем размер через секунду (на случай динамической загрузки)
    setTimeout(() => {
        setCanvasSize();
    }, 1000);
});
