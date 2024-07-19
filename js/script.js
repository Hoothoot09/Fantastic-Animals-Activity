import initAccordian from "./modules/accordion.js";
import initDropDownMenu from "./modules/dropdown-menu.js";
import initModal from "./modules/modal.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import ScrollSuave from "./modules/smooth-scroll.js";
import initTabNav from "./modules/tabnav.js";
import initTooltip from "./modules/tooltip.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import InitFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";

const smoothScroll = new ScrollSuave('[data-menu="suave"] a[href^="#"]');
smoothScroll.init();

initAccordian();
initDropDownMenu();
initModal();
initAnimacaoScroll();
initTabNav();
initTooltip();
initMenuMobile();
initFuncionamento();
InitFetchAnimais();
initFetchBitcoin();
