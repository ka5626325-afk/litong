const fs = require('fs');

// 修复 support.html 模板中的 JavaScript
let content = fs.readFileSync('templates/brands/support.html', 'utf8');

// 替换整个 script 块
const oldScript = /<script>[\s\S]*?<\/script>/;
const newScript = `<script>
    // Support tab filter functionality
    document.addEventListener('DOMContentLoaded', function() {
      const tabBtns = document.querySelectorAll('.support-tabs .tab-btn');
      const articleCards = document.querySelectorAll('.articles-list .article-card');

      tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          // Remove active state from all buttons
          tabBtns.forEach(b => b.classList.remove('active'));
          // Add active state to current button
          this.classList.add('active');

          const category = this.dataset.category;

          // Filter articles
          articleCards.forEach(card => {
            if (category === 'all' || card.dataset.category.toLowerCase().includes(category.toLowerCase())) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          });
        });
      });
    });
  </script>`;

content = content.replace(oldScript, newScript);
fs.writeFileSync('templates/brands/support.html', content, 'utf8');
console.log('Fixed support.html');
