var menuData = {
  "for-people": [
    {
      name: "Карты",
      blocks: [
        {
          name: "Дебетовые карты",
          items: [
            { text: "Альфа-Карта", link: "#" },
            { text: "Альфа-Карта с гравировкой", link: "#" },
            { text: "Платёжные Альфа-Стикеры", link: "#" },
            { text: "My-Карта", link: "#" },
            { text: "Карта Alfa Only", link: "#" },
            { text: "Детская карта", link: "#" },
            { text: "Alfa Travel", link: "#" },
            { text: "Карта Апельсин", link: "#" }
          ]
        },
        {
          name: "Кредитные карты",
          items: [
            { text: "Кредитная карта 100 дней", link: "#" },
            { text: "Полезные статьи", link: "#" }
          ]
        },
        {
          name: "Специальные условия",
          items: [
            { text: "Альфа-Карта для зарплаты", link: "#" },
            { text: "Альфа-Карта с кобо-счётом", link: "#" },
            { text: "Зарплата каждый день", link: "#" },
            { text: "15 привилегий Альфа-Смарт", link: "#" }
          ]
        }
      ]
    },
    { name: "Накопления", blocks: [] },
    { name: "Кредиты", blocks: [] },
    { name: "Ипотека", blocks: [] },
    { name: "Инвестиции", blocks: [] },
    { name: "Альфа-Смарт", blocks: [] },
    { name: "Alfa Only", blocks: [] },
    { name: "Мобильная связь", blocks: [] },
    { name: "Самозанятость", blocks: [] },
    { name: "Семья и дети", blocks: [] },
    { name: "Альфа-Будущее", blocks: [] },
    { name: "А-Клуб", blocks: [] },
    { name: "Ещё", blocks: [] }
  ],
  "for-business": [],
  "for-corporate": []
};

var popupMenu = document.createElement('div');
var darkLayer = document.createElement('div');
popupMenu.className = 'popup-menu';
darkLayer.className = 'dark-layer';
document.body.appendChild(popupMenu);
document.body.appendChild(darkLayer);


var menuButtons = document.querySelectorAll('.top-bar__link[data-type]');


function hideMenu() {
  popupMenu.classList.remove('show');
  darkLayer.classList.remove('show');
}

function showMenu(type) {
  var currentData = menuData[type];
  if (!currentData || currentData.length === 0) return;

  popupMenu.innerHTML = '';

  var mainWrapper = document.createElement('div');
  mainWrapper.className = 'popup-menu__wrapper';

  var leftPart = document.createElement('div');
  leftPart.className = 'popup-menu__left';

  var rightPart = document.createElement('div');
  rightPart.className = 'popup-menu__right';

  for (var i = 0; i < currentData.length; i++) {
    var section = currentData[i];
    var categoryBtn = document.createElement('button');
    categoryBtn.className = 'popup-menu__category';
    categoryBtn.textContent = section.name;
    categoryBtn.setAttribute('data-idx', i);


    categoryBtn.addEventListener('mouseenter', (function(idx) {
      return function() {
        var allBtns = leftPart.querySelectorAll('.popup-menu__category');
        for (var b = 0; b < allBtns.length; b++) {
          allBtns[b].classList.remove('active');
        }
        this.classList.add('active');
        rightPart.innerHTML = '';

        var selectedSection = currentData[idx];
        if (selectedSection.blocks && selectedSection.blocks.length > 0) {
          for (var s = 0; s < selectedSection.blocks.length; s++) {
            var block = selectedSection.blocks[s];
            var blockDiv = document.createElement('div');
            blockDiv.className = 'popup-menu__block';
            
            var blockTitle = document.createElement('div');
            blockTitle.className = 'popup-menu__block-title';
            blockTitle.textContent = block.name;
            blockDiv.appendChild(blockTitle);
            
            if (block.items && block.items.length > 0) {
              for (var l = 0; l < block.items.length; l++) {
                var linkItem = block.items[l];
                var linkElem = document.createElement('a');
                linkElem.href = linkItem.link;
                linkElem.textContent = linkItem.text;
                linkElem.className = 'popup-menu__link';
                blockDiv.appendChild(linkElem);
              }
            }
            
            rightPart.appendChild(blockDiv);
          }
        } else {
          var placeholder = document.createElement('div');
          placeholder.className = 'popup-menu__placeholder';
          placeholder.textContent = 'Скоро здесь будут новые продукты';
          rightPart.appendChild(placeholder);
        }
      };
    })(i));
    
    leftPart.appendChild(categoryBtn);
    if (i === 0) {
      categoryBtn.dispatchEvent(new Event('mouseenter'));
    }
  }
  
  mainWrapper.appendChild(leftPart);
  mainWrapper.appendChild(rightPart);
  popupMenu.appendChild(mainWrapper);
  
  popupMenu.classList.add('show');
  darkLayer.classList.add('show');
}

for (var i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener('mouseenter', function(e) {
    var categoryType = this.getAttribute('data-type');
    showMenu(categoryType);
  });
}

popupMenu.addEventListener('mouseleave', hideMenu);
darkLayer.addEventListener('click', hideMenu);