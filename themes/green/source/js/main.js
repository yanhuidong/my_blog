/**
 * main.js - Green 主题轻量脚本
 * 提供返回顶部等基础交互
 */
(function () {
  'use strict';

  /* 返回顶部按钮 */
  var btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 300);
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
