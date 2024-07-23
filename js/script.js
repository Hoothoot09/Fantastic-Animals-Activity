import Accordion from "./modules/accordion.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import Modal from "./modules/modal.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import ScrollSuave from "./modules/smooth-scroll.js";
import TabNav from "./modules/tabnav.js";
import Tooltip from "./modules/tooltip.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import InitFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const scrollSuave = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav(
  '[data-tab="menu"] li',
  '[data-tab="content"] section'
);
tabNav.init();

const modal = new Modal(
  '[data-modal= "abrir"]',
  '[data-modal= "fechar"]',
  '[data-modal= "container"]'
);
modal.init();

const tooltip = new Tooltip("[data-tooltip");

initDropDownMenu();
initAnimacaoScroll();
initMenuMobile();
initFuncionamento();
InitFetchAnimais();
initFetchBitcoin();
