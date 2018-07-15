import _ from 'lodash';
import printMe from './print.js';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  var btn = document.createElement('button'); 
  btn.onclick = printMe;
  
  element.appendChild(btn);

  return element;
}


document.body.appendChild(component());
if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!');
		printMe();
	})
}
