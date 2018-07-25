import $ from 'jquery';

class MobileNav{

	constructor(){
		this.dropdownLi = $('.mobile-menu__menu-content--show-dropdown');
		this.dropdownParent = $('.mobile-menu__menu-content--drop-menu');
		this.caretRight = $('.fa-caret-right');
		this.caretDown = $('.caret-down');
		this.events();
	}

	events(){
		this.dropdownLi.click(this.toggleTheMenu.bind(this));
		}
	

	toggleTheMenu(){
		this.dropdownParent.toggleClass('show-mobile-dropdown');
		this.caretRight.toggleClass('caret-right--is-hidden');
		this.caretDown.toggleClass('caret-down--is-visible');
	}
}


export default MobileNav;