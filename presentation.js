import Reveal from 'https://cdn.skypack.dev/reveal.js';
import Notes from 'https://cdn.skypack.dev/reveal.js/plugin/notes/notes.js';
import _ from 'https://cdn.skypack.dev/lodash';

let deck

const init = () => {

   if (deck) deck.destroy()

   deck = new Reveal()

   deck.initialize({
      hash: true,
      margin: 0.00,
      controlsTutorial: false,
      margin: 0,
      plugins: [Notes],
      controls: false,
      transition: 'slide',
      backgroundTransition: 'slide',
      width: window.innerWidth,
      height: window.innerHeight,
   })   
}


init()

window.addEventListener('resize', _.debounce(() => {
   deck.configure({ 
      width: window.innerWidth,
      height: window.innerHeight,
   })
   deck.layout()
}, 300))