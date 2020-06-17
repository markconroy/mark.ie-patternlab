"use strict";/**
 * @file JS file for the header component.
 */(function(a){a.behaviors.header={attach:function attach(a){// Set offset canvas below header
function b(){j=i.offsetHeight,h.style.top=j+i.offsetTop+"px"}// When the "Menu" or "Close" buttons are clicked, this function is called.
// It just toggles some classes to bring the .header__off-canvas into/out of view.
function c(a){var b="true"===a.target.getAttribute("aria-expanded");// Hide the menu overlay.
b?(a.target.setAttribute("aria-expanded",!1),a.target.setAttribute("aria-label",a.target.dataset.menuHiddenLabel),a.target.textContent=a.target.dataset.menuExpandText,a.target.classList.remove("open"),a.target.focus(),h.classList.remove("header__off-canvas--is-on-canvas"),h.classList.add("header__off-canvas--is-off-canvas")):(a.target.setAttribute("aria-expanded",!0),a.target.setAttribute("aria-label",a.target.dataset.menuExpandedLabel),a.target.textContent=a.target.dataset.menuHideText,a.target.classList.add("open"),h.style.top=j+i.offsetTop+"px",h.classList.remove("header__off-canvas--is-off-canvas"),h.classList.add("header__off-canvas--is-on-canvas"))}// This function is called when the window is resized. If we are on a large screen
// it just resets the .header__off-canvas, so we can see the desktop version of the menu.
function d(){window.matchMedia("(min-width: 1024px)").matches&&(h.classList.remove("header__off-canvas--is-on-canvas"),h.classList.add("header__off-canvas--is-off-canvas"),f.style.display="block",f.setAttribute("aria-expanded","false"),f.classList.remove("open"))}function e(){window.matchMedia("(max-width: 1023px)").matches&&n.addEventListener("keydown",function(){f.focus()})}a=a||document;var f=document.querySelector(".header__menu-toggle .menu-toggle__button");// If we've already processed the content and added the event listeners,
// we don't need to continue.
if(!f.classList.contains("js-menu-toggle-button")){var g=document.querySelector(".header__menu-toggle .menu-toggle__link"),h=document.querySelector(".header__off-canvas"),i=document.querySelector("header.header"),j=i.offsetHeight,k=i.querySelector(".header__off-canvas .menu--main"),l=k.getAttribute("id"),m=h.querySelectorAll("button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])"),n=m[m.length-1];f.classList.add("js-menu-toggle-button"),f.removeAttribute("hidden"),f.setAttribute("aria-controls",l),g.setAttribute("hidden",!0),b(),e(),window.addEventListener("resize",d),window.addEventListener("resize",b),f.addEventListener("click",c);// Add class to body for styling hook
var o=f.closest("body");o.classList.add("js-header")}}}})(Drupal,drupalSettings);
//# sourceMappingURL=header.js.map
