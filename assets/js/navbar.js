// assets/js/navbar.js
/**
 * 导航栏交互功能
 * - 移动端菜单切换
 * - 滚动阴影效果
 * - ARIA 状态管理
 */

document.addEventListener('DOMContentLoaded', function() {
  const navbar = document.getElementById('navbar');
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarMenu = document.getElementById('navbar-menu');
  
  // 移动端菜单切换
  if (navbarToggle && navbarMenu) {
    navbarToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      const newExpanded = !isExpanded;
      
      // 切换菜单状态
      navbarMenu.classList.toggle('active');
      
      // 更新 ARIA 状态
      this.setAttribute('aria-expanded', newExpanded);
      
      // 防止背景滚动
      if (newExpanded) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // 点击菜单项关闭菜单
    const menuItems = navbarMenu.querySelectorAll('.nav-item');
    menuItems.forEach(item => {
      item.addEventListener('click', function() {
        navbarToggle.setAttribute('aria-expanded', 'false');
        navbarMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }
  
  // 滚动时添加阴影效果
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
      navbar.style.boxShadow = 'var(--shadow-md)';
    } else {
      navbar.style.boxShadow = 'var(--shadow-sm)';
    }
    
    lastScroll = currentScroll;
  });
  
  // ESC 键关闭菜单
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && navbarMenu && navbarMenu.classList.contains('active')) {
      navbarToggle.setAttribute('aria-expanded', 'false');
      navbarMenu.classList.remove('active');
      document.body.style.overflow = '';
      navbarToggle.focus();
    }
  });
});
