import React from 'react'  
import ReactDOM from 'react-dom'  
import { createStore } from 'redux'  
const reducer = (state = 0, action) => {  
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
}
const store = createStore(reducer);  
const Counter = ({value}) => {  
  return (
    <div className='centeredComponent'>
     <h3>Counter con React + Redux</h3>
     <button className="btn btn-success" onClick={() => store.dispatch({ type: 'INCREMENT'})}> + </button>
     {' '}
     <button className="btn btn-danger" onClick={() => store.dispatch({ type: 'DECREMENT'})}> - </button>
     <h3>{value}</h3>
    </div>
  )
}
const render = () => {  
  ReactDOM.render(
   <Counter value={store.getState()} />,
    document.getElementById('root')
  )
}
store.subscribe(render);  
render();

export default Counter