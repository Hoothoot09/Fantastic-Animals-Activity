import Accordion from "./modules/accordion.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initModal from "./modules/modal.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import ScrollSuave from "./modules/smooth-scroll.js";
import TabNav from "./modules/tabnav.js";
import initTooltip from "./modules/tooltip.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import InitFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const smoothScroll = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

initDropDownMenu();
initModal();
initAnimacaoScroll();
initTooltip();
initMenuMobile();
initFuncionamento();
InitFetchAnimais();
initFetchBitcoin();
