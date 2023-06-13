import Reveal from 'https://cdn.skypack.dev/reveal.js';
import _ from 'https://cdn.skypack.dev/lodash';

let deck

const init = () => {

   if (deck) deck.destroy()

   deck = new Reveal({ 
      hash: true,
      margin: 0.00,
      controlsTutorial: false,
   })

   deck.initialize({
      margin: 0,
      controls: false,
      transition: 'slide',
      backgroundTransition: 'slide',
      width: window.innerWidth,
      height: window.innerHeight,
   })   
}

init()

window.addEventListener('resize', _.debounce(init, 300))