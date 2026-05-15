var burger = document.getElementById('burgerBtn');
var menu = document.getElementById('navMenu');

if (burger && menu) {
    burger.addEventListener('click', function() {
        burger.classList.toggle('is-open');
        menu.classList.toggle('is-open');
    });

    var links = menu.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            burger.classList.remove('is-open');
            menu.classList.remove('is-open');
        });
    }
}


var tabGroups = document.querySelectorAll('.tab-group');
for (var i = 0; i < tabGroups.length; i++) {
    var group = tabGroups[i];
    var tabs = group.querySelectorAll('.tab-group__item');
    for (var j = 0; j < tabs.length; j++) {
        tabs[j].addEventListener('click', function() {
            var parent = this.closest('.tab-group');
            var items = parent.querySelectorAll('.tab-group__item');
            for (var k = 0; k < items.length; k++) {
                items[k].classList.remove('is-active');
            }
            this.classList.add('is-active');
        });
    }
}


var toggles = document.querySelectorAll('.toggle-switch');
for (var i = 0; i < toggles.length; i++) {
    var toggleGroup = toggles[i];
    var btns = toggleGroup.querySelectorAll('.toggle-switch__item');
    for (var j = 0; j < btns.length; j++) {
        btns[j].addEventListener('click', function() {
            var container = this.closest('.toggle-switch');
            var all = container.querySelectorAll('.toggle-switch__item');
            for (var k = 0; k < all.length; k++) {
                all[k].classList.remove('is-active');
            }
            this.classList.add('is-active');
        });
    }
}


var chipBlocks = document.querySelectorAll('.phone-chips');
for (var i = 0; i < chipBlocks.length; i++) {
    var chips = chipBlocks[i].querySelectorAll('.phone-chips__item');
    for (var j = 0; j < chips.length; j++) {
        chips[j].addEventListener('click', function() {
            var parent = this.closest('.phone-chips');
            var allChips = parent.querySelectorAll('.phone-chips__item');
            for (var k = 0; k < allChips.length; k++) {
                allChips[k].classList.remove('is-active');
            }
            this.classList.add('is-active');
        });
    }
}