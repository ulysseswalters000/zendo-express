import MobileMenu from './modules/MobileMenu';
import MobileNav from './modules/MobileNav';
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';


var mobileMenu = new MobileMenu();
var mobileNav = new MobileNav();
new RevealOnScroll($('.feature-item'), '85%');
new RevealOnScroll($('.team'), '60%');
var stickyHeader = new StickyHeader;