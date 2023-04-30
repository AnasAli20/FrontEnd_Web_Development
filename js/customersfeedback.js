"use strict";
(() => {
  const menu = document.querySelector('#mobile-menu');
  const menuLinks = document.querySelector('.navbar__menu');
  const navLogo = document.querySelector('#navbar__logo');

  const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

  };
  menu.addEventListener('click', mobileMenu);

  function addItem(text, done) {
    const item = document.createElement('list');
    const label = document.createElement('label');
    const input = document.createElement('input');
    const button = document.createElement('button');
    label.textContent = text;

    input.id = `feedback${feedback.querySelectorAll('li').length + 1}`;
    input.addEventListener('input', ev => {
      saveToStorage();
    });
    label.htmlFor = input.id;
    //button.textContent = "×";
    button.addEventListener('click', ev => {
      //item.remove();
      saveToStorage();
    });

    item.appendChild(label);
    //item.appendChild(button);
    feedback.appendChild(item);
  }


  function saveToStorage() {
    const elements = Array.from(feedback.querySelectorAll('list'));
    const data = elements.map(el => {
      return {
        text: el.querySelector('label').textContent,

      }
    });
    localStorage.setItem(feedback.id, JSON.stringify(data));
  }

  function loadFromStorage() {
    const data = JSON.parse(localStorage.getItem(feedback.id));
    if (data) {

      for (const item of data) {
        addItem(item.text, item.done);
      }
    }
  }

  submit.addEventListener('click', ev => {
    if (text.value) {
      addItem(text.value);
      text.value = null;
      text.focus();
      saveToStorage();
    }
  });


  text.addEventListener('keydown', ev => {
    if (ev.key == "Enter") {
      submit.click();
    }
  });

  loadFromStorage();
})()
