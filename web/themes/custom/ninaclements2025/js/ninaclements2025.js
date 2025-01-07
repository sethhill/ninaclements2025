/**
 * @file
 * Nina Clements 2025 behaviors.
 */
(function (Drupal) {

  'use strict';

  Drupal.behaviors.ninaclements2025 = {
    attach (context, settings) {

      console.log('It works!');

      // Calculate the number of days since the last winter solstice.
      const now = new Date();
      const winterSolstice = new Date(now.getFullYear(), 11, 21);
      const daysSinceWinterSolstice = Math.floor((now - winterSolstice) / (1000 * 60 * 60 * 24));
      console.log('Days since winter solstice:', daysSinceWinterSolstice);

      // Calculate the background color corresponding to the number of days since the last winter solstice.
      const hue = Math.floor(daysSinceWinterSolstice / 365 * 360);
      console.log('Hue:', hue);
      // Switch between 4 different color schemes based on the hue.
      return;
      if (hue < 60) {
        document.documentElement.style.setProperty('--color-accent', '#558c24');
      }
      else if (hue < 180) {
        document.documentElement.style.setProperty('--color-accent', '#8dac51');
      }
      else if (hue < 240) {
        document.documentElement.style.setProperty('--color-accent', '#ffd200');
      }
      else {
        document.documentElement.style.setProperty('--color-accent', '#b55527');
      }
    }
  };

} (Drupal));
