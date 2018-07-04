import $ from 'jquery';

class MobileMenu {

	constructor(){
		this.siteHeader = $('.mobile-menu');
		this.menuIcon = $('.mobile-menu__menu-icon');
		this.menuContent = $('.mobile-menu__menu-content');
		this.events();
	}

	events(){
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu(){
		this.menuContent.toggleClass('mobile-menu__menu-content--is-visible');
		this.siteHeader.toggleClass('mobile-menu--is-expanded');
		this.menuIcon.toggleClass('mobile-menu__menu-icon--close-x');
	}
}


export default MobileMenu;