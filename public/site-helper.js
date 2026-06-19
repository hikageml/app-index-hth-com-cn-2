function createCard(title, content, badgeText) {
  const card = document.createElement('div');
  card.className = 'hint-card';

  const badge = document.createElement('span');
  badge.className = 'keyword-badge';
  badge.textContent = badgeText || '提示';

  const heading = document.createElement('h3');
  heading.textContent = title;

  const paragraph = document.createElement('p');
  paragraph.textContent = content;

  card.appendChild(badge);
  card.appendChild(heading);
  card.appendChild(paragraph);
  return card;
}

function generateGuidelines() {
  const container = document.createElement('div');
  container.id = 'site-guidelines';

  const info = [
    {
      title: '快速了解',
      content: '本站提供体育赛事、游戏娱乐等综合信息，请合理使用。',
      badge: '说明'
    },
    {
      title: '关键词聚焦',
      content: '当前核心关注点为：华体会，所有内容均围绕该主题展开。',
      badge: '华体会'
    },
    {
      title: '访问提示',
      content: '建议通过官方渠道访问：https://app-index-hth.com.cn，确保信息安全。',
      badge: '链接'
    }
  ];

  info.forEach(item => {
    const card = createCard(item.title, item.content, item.badge);
    container.appendChild(card);
  });

  return container;
}

function styleInject() {
  const style = document.createElement('style');
  style.textContent = `
    #site-guidelines {
      max-width: 720px;
      margin: 24px auto;
      padding: 16px;
      font-family: system-ui, -apple-system, sans-serif;
    }
    .hint-card {
      background: #f8faff;
      border: 1px solid #dce3f5;
      border-radius: 12px;
      padding: 16px 20px;
      margin-bottom: 14px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.02);
      transition: box-shadow 0.15s;
    }
    .hint-card:hover {
      box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    }
    .keyword-badge {
      display: inline-block;
      background: #3b6eff;
      color: #fff;
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.3px;
      padding: 2px 10px;
      border-radius: 20px;
      margin-bottom: 8px;
    }
    .hint-card h3 {
      margin: 0 0 6px 0;
      font-size: 1.1rem;
      color: #1a2639;
    }
    .hint-card p {
      margin: 0;
      color: #3f4a5e;
      line-height: 1.5;
    }
  `;
  document.head.appendChild(style);
}

function initSiteHelper() {
  styleInject();
  const target = document.querySelector('main') || document.body;
  const guidelines = generateGuidelines();
  target.insertBefore(guidelines, target.firstChild);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSiteHelper);
} else {
  initSiteHelper();
}