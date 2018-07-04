import $ from 'jquery';

class MobileNav{

	constructor(){
		this.dropdownLi = $('.mobile-menu__menu-content--show-dropdown');
		this.dropdownParent = $('.mobile-menu__menu-content--drop-menu');
		this.events();
	}

	events(){
		this.dropdownLi.click(this.toggleTheMenu.bind(this));
		}
	

	toggleTheMenu(){
		this.dropdownParent.toggleClass('show-mobile-dropdown');
	}
}


export default MobileNav;