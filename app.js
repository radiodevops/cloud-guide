// Azure Cloud Services Interactive Application

// Application data
const appData = {
  services: {
    iaas: {
      name: "IaaS (Infrastructure as a Service)",
      description: "Аренда виртуальных машин и инфраструктуры",
      examples: ["Azure Virtual Machines", "Azure Storage", "Azure Virtual Network"],
      customerManages: ["Операционная система", "Приложения", "Данные", "Runtime"],
      azureManages: ["Серверы", "Сеть", "Хранилища", "Виртуализация"],
      targetCustomers: ["Компании с существующими приложениями", "ИТ-отделы", "Разработчики инфраструктуры"],
      benefits: ["Экономия на серверах", "Быстрое масштабирование", "Нет обслуживания оборудования"]
    },
    paas: {
      name: "PaaS (Platform as a Service)", 
      description: "Готовая платформа для разработки приложений",
      examples: ["Azure App Service", "Azure SQL Database", "Azure Functions", "Azure Cosmos DB"],
      customerManages: ["Приложения", "Данные"],
      azureManages: ["Runtime", "Операционная система", "Серверы", "Сеть", "Хранилища", "Виртуализация"],
      targetCustomers: ["Разработчики", "Команды разработки", "Стартапы"],
      benefits: ["Фокус на коде", "Автоматическое масштабирование", "Встроенные инструменты"]
    },
    saas: {
      name: "SaaS (Software as a Service)",
      description: "Готовые приложения через интернет", 
      examples: ["Microsoft 365", "Microsoft Teams", "Dynamics 365"],
      customerManages: ["Использование", "Настройка"],
      azureManages: ["Приложения", "Данные", "Runtime", "Операционная система", "Серверы", "Сеть", "Хранилища", "Виртуализация"],
      targetCustomers: ["Конечные пользователи", "Бизнес-отделы", "HR, продажи, маркетинг"],
      benefits: ["Никаких установок", "Доступ везде", "Предсказуемая оплата"]
    }
  },
  analogies: {
    pizza: {
      onPremises: "Готовить пиццу дома с нуля - покупаете все ингредиенты",
      iaas: "Возьми и запеки - готовое тесто, соус, начинка, но запекаете сами", 
      paas: "Доставка пиццы - пицца готова, осталось съесть",
      saas: "Ресторан - приходите и заказываете готовое блюдо"
    },
    apartment: {
      onPremises: "Покупка квартиры - все ваше, но все проблемы тоже ваши",
      iaas: "Аренда пустой квартиры - есть стены, мебель покупаете сами",
      paas: "Аренда меблированной квартиры - есть кухня, остается готовить",
      saas: "Отель с обслуживанием - все готово, просто пользуйтесь"
    }
  },
  pricing: {
    benefits: ["OpEx вместо CapEx", "Оплата по факту", "Предсказуемые затраты", "Экономия на персонале"],
    hiddenSavings: ["Автоматические обновления", "Резервное копирование", "Безопасность", "Глобальная доступность"]
  }
};

// DOM Elements
let currentTab = 'overview';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeTabNavigation();
  initializeInteractiveElements();
  showTab('overview');
  initializeThemeSwitcher();
  initializeEnhancedFeatures();
  initializeAccessibility();
  initializeScrollProgress();
  initializeBackToTop();
  initializeScrollAnimations();
});

// Tab Navigation
function initializeTabNavigation() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  // Hide all tab contents
  const allTabContents = document.querySelectorAll('.tab-content');
  allTabContents.forEach(content => {
    content.classList.remove('active');
  });
  
  // Remove active class from all tab buttons
  const allTabButtons = document.querySelectorAll('.tab-btn');
  allTabButtons.forEach(button => {
    button.classList.remove('active');
  });
  
  // Show selected tab content
  const selectedTabContent = document.getElementById(tabId);
  if (selectedTabContent) {
    selectedTabContent.classList.add('active');
  }
  
  // Add active class to selected tab button
  const selectedTabButton = document.querySelector(`[data-tab="${tabId}"]`);
  if (selectedTabButton) {
    selectedTabButton.classList.add('active');
  }
  
  currentTab = tabId;
  
  // Scroll to top when switching tabs
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showTab(tabId) {
  switchTab(tabId);
}

// Interactive Elements
function initializeInteractiveElements() {
  // Add click handlers for CTA buttons
  initializeCTAButtons();
  
  // Add keyboard navigation
  initializeKeyboardNavigation();
}

function initializeCTAButtons() {
  const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
      const buttonText = this.textContent.trim();
      handleCTAClick(buttonText);
    });
  });
}

function handleCTAClick(buttonText) {
  let message = '';
  
  switch(buttonText) {
    case 'Связаться с экспертом Azure':
      message = 'Спасибо за интерес! Наш эксперт Azure свяжется с вами в ближайшее время.';
      break;
    case 'Получить демо-доступ':
      message = 'Отлично! Мы подготовим демо-окружение Azure для вашего тестирования.';
      break;
    case 'Скачать презентацию':
      message = 'Презентация будет отправлена на вашу электронную почту.';
      break;
    default:
      message = 'Спасибо за интерес к Azure Cloud Services!';
  }
  
  showNotification(message, 'success');
}

// Analogies functionality
function showAnalogy(type) {
  const resultDiv = document.getElementById('analogy-result');
  let content = '';
  
  if (type === 'pizza') {
    content = `
      <h4>🍕 Аналогия с пиццей</h4>
      <p><strong>Клиенту:</strong> "Представьте, что вы хотите пиццу..."</p>
      <ul style="text-align: left; margin: 10px 0;">
        <li><strong>Дома (собственные серверы):</strong> ${appData.analogies.pizza.onPremises}</li>
        <li><strong>IaaS:</strong> ${appData.analogies.pizza.iaas}</li>
        <li><strong>PaaS:</strong> ${appData.analogies.pizza.paas}</li>
        <li><strong>SaaS:</strong> ${appData.analogies.pizza.saas}</li>
      </ul>
      <p><em>Так же и с IT: чем выше уровень сервиса, тем меньше вам нужно делать самим!</em></p>
    `;
  } else if (type === 'apartment') {
    content = `
      <h4>🏠 Аналогия с жильем</h4>
      <p><strong>Клиенту:</strong> "Это как выбирать, где жить..."</p>
      <ul style="text-align: left; margin: 10px 0;">
        <li><strong>Собственная квартира:</strong> ${appData.analogies.apartment.onPremises}</li>
        <li><strong>IaaS:</strong> ${appData.analogies.apartment.iaas}</li>
        <li><strong>PaaS:</strong> ${appData.analogies.apartment.paas}</li>
        <li><strong>SaaS:</strong> ${appData.analogies.apartment.saas}</li>
      </ul>
      <p><em>Выбирайте уровень сервиса в зависимости от ваших потребностей!</em></p>
    `;
  }
  
  resultDiv.innerHTML = content;
  resultDiv.classList.remove('hidden');
  
  // Scroll to result
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Pricing Calculator
function calculateSavings() {
  const servers = parseInt(document.getElementById('servers').value) || 0;
  const serverCost = parseInt(document.getElementById('serverCost').value) || 0;
  
  if (servers <= 0 || serverCost <= 0) {
    showNotification('Пожалуйста, введите корректные значения', 'error');
    return;
  }
  
  // Simplified calculation
  const totalHardwareCost = servers * serverCost;
  const maintenanceCostPerYear = totalHardwareCost * 0.15; // 15% per year
  const cloudCostPerYear = totalHardwareCost * 0.3; // Roughly 30% of hardware cost per year
  const savingsPerYear = maintenanceCostPerYear + (totalHardwareCost * 0.1); // Depreciation + maintenance
  const totalSavings3Years = savingsPerYear * 3;
  
  const resultDiv = document.getElementById('calculatorResult');
  resultDiv.innerHTML = `
    <h4>Результаты расчета экономии</h4>
    <div style="text-align: left;">
      <p><strong>Стоимость оборудования:</strong> $${totalHardwareCost.toLocaleString()}</p>
      <p><strong>Обслуживание в год:</strong> $${maintenanceCostPerYear.toLocaleString()}</p>
      <p><strong>Стоимость Azure в год:</strong> $${cloudCostPerYear.toLocaleString()}</p>
      <p style="color: #0078d7; font-weight: bold;"><strong>Экономия за 3 года:</strong> $${totalSavings3Years.toLocaleString()}</p>
    </div>
    <p style="font-size: 0.9em; color: #666; margin-top: 15px;">
      <em>* Расчет приблизительный. Точную стоимость поможет рассчитать калькулятор Azure.</em>
    </p>
  `;
  resultDiv.classList.remove('hidden');
  
  // Scroll to result
  resultDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Keyboard Navigation
function initializeKeyboardNavigation() {
  document.addEventListener('keydown', function(e) {
    // Tab navigation with arrow keys
    if (e.ctrlKey || e.metaKey) {
      const tabButtons = document.querySelectorAll('.tab-btn');
      const currentIndex = Array.from(tabButtons).findIndex(btn => btn.classList.contains('active'));
      
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        tabButtons[currentIndex - 1].click();
      } else if (e.key === 'ArrowRight' && currentIndex < tabButtons.length - 1) {
        e.preventDefault();
        tabButtons[currentIndex + 1].click();
      }
    }
    
    // Quick navigation shortcuts
    if (e.altKey) {
      switch(e.key) {
        case '1':
          e.preventDefault();
          switchTab('overview');
          break;
        case '2':
          e.preventDefault();
          switchTab('iaas');
          break;
        case '3':
          e.preventDefault();
          switchTab('paas');
          break;
        case '4':
          e.preventDefault();
          switchTab('saas');
          break;
        case '5':
          e.preventDefault();
          switchTab('analogies');
          break;
        case '6':
          e.preventDefault();
          switchTab('pricing');
          break;
      }
    }
  });
}

// Notification System
function showNotification(message, type = 'info') {
  // Update aria-live region
  const region = document.getElementById('notification-region');
  if (region) {
    region.textContent = message;
  }
  
  // Remove existing notifications
  const existingNotification = document.querySelector('.notification');
  if (existingNotification) {
    existingNotification.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${type === 'success' ? '#e6f3ff' : type === 'error' ? '#ffe6e6' : '#f0f0f0'};
    color: ${type === 'success' ? '#0078d7' : type === 'error' ? '#d63384' : '#333'};
    padding: 16px 20px;
    border-radius: 8px;
    border-left: 4px solid ${type === 'success' ? '#0078d7' : type === 'error' ? '#d63384' : '#666'};
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    z-index: 1000;
    max-width: 300px;
    font-weight: 500;
    animation: slideIn 0.3s ease-out;
  `;
  
  notification.textContent = message;
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.style.animation = 'slideOut 0.3s ease-in';
      setTimeout(() => {
        if (notification.parentNode) {
          notification.remove();
        }
      }, 300);
    }
  }, 5000);
  
  // Add click to dismiss
  notification.addEventListener('click', () => {
    notification.remove();
  });
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  .notification {
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .notification:hover {
    transform: scale(1.02);
  }
`;
document.head.appendChild(style);

// Enhanced Interactive Features
function initializeEnhancedFeatures() {
  // Add hover effects for service cards
  const serviceCards = document.querySelectorAll('.example-item, .customer-item, .analogy-card');
  
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-2px)';
      this.style.transition = 'transform 0.2s ease';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });
  
  // Add click effects for interactive elements
  const interactiveElements = document.querySelectorAll('.btn, .tab-btn');
  
  interactiveElements.forEach(element => {
    element.addEventListener('click', function() {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  });
}

// Accessibility enhancements
function initializeAccessibility() {
  // Add ARIA labels and roles
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabButtons.forEach((button, index) => {
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', button.getAttribute('data-tab'));
    button.setAttribute('tabindex', button.classList.contains('active') ? '0' : '-1');
    button.setAttribute('aria-selected', button.classList.contains('active'));
  });
  tabContents.forEach((content, index) => {
    content.setAttribute('role', 'tabpanel');
    content.setAttribute('tabindex', '0');
    content.setAttribute('aria-labelledby', content.id);
  });
  // Ensure skip link is focusable
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.setAttribute('tabindex', '0');
  }
}

// Initialize enhanced features
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    initializeEnhancedFeatures();
    initializeAccessibility();
  }, 100);
});

// Export functions for global access
window.switchTab = switchTab;
window.showAnalogy = showAnalogy;
window.calculateSavings = calculateSavings;

// Service Worker for offline capability (optional)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    // Service worker registration would go here
    console.log('Azure Cloud Services App loaded successfully!');
  });
}

// Analytics tracking (placeholder)
function trackEvent(eventName, properties = {}) {
  console.log('Event tracked:', eventName, properties);
  // Real analytics implementation would go here
}

// Track tab switches
document.addEventListener('DOMContentLoaded', function() {
  const originalSwitchTab = window.switchTab;
  window.switchTab = function(tabId) {
    trackEvent('tab_switch', { tab: tabId, previous_tab: currentTab });
    return originalSwitchTab(tabId);
  };
});

function initializeThemeSwitcher() {
  const themeToggle = document.getElementById('theme-toggle');
  if (!themeToggle) return;
  themeToggle.addEventListener('click', () => {
    const root = document.documentElement;
    const current = root.getAttribute('data-color-scheme');
    const next = current === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-color-scheme', next);
    localStorage.setItem('color-scheme', next);
    themeToggle.setAttribute('aria-label', next === 'dark' ? 'Включить светлую тему' : 'Включить тёмную тему');
  });
  // On load, set theme from localStorage or system
  const saved = localStorage.getItem('color-scheme');
  if (saved) {
    document.documentElement.setAttribute('data-color-scheme', saved);
  }
}

// Add focus to skip link on tab
const skipLink = document.querySelector('.skip-link');
if (skipLink) {
  skipLink.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      document.getElementById('main-content').focus();
    }
  });
}

function initializeScrollProgress() {
  const progress = document.getElementById('scrollProgress');
  if (!progress) return;
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const percent = docHeight > 0 ? scrollTop / docHeight : 0;
    progress.style.transform = `scaleX(${percent})`;
  });
}

function initializeBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initializeScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Utility: set button loading state
function setButtonLoading(btn, isLoading) {
  if (!btn) return;
  if (isLoading) {
    btn.classList.add('btn--loading');
    btn.setAttribute('disabled', 'disabled');
  } else {
    btn.classList.remove('btn--loading');
    btn.removeAttribute('disabled');
  }
}