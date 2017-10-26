/*jshint esversion: 6 */
const {createStore} = Redux;

function counter(state = 0, action) {
  switch (action.type){
    case 'SUMA':
      return state + 1;
    case 'RESTA':
      if(state < 1) return 0;
      return state - 1;
    default:
      return state;
  }
}


let store = createStore(counter);
let root = $('#root');
let suma = $('#suma');
let resta = $('#resta');

suma.click(()=>{
  store.dispatch({
    type: 'SUMA'
  });
});

resta.click(()=>{
  store.dispatch({
    type: 'RESTA'
  });
});

store.subscribe(() => {
  console.log(store.getState());
  root.text(store.getState());
});
