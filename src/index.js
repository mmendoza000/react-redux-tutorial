// 1. Example counter
// import ExampleCounter from './examples/counter'

//2. Example Todo
// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import todoApp from './reducers'
// import App from './components/App'

// let store = createStore(todoApp)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )

// 3. Reloj
// import React from 'react'
// import { render } from 'react-dom'
// import ExampleClock from './examples/clock'

// render(<ExampleClock />,
//   document.getElementById('root')
// )


// 4. Listas
// import React from 'react'
// import { render } from 'react-dom'
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li key={number.toString()}>
//       {number}
//     </li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];

// render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );


// 5 Forms
import React from 'react'
import { render } from 'react-dom'
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='centeredComponent'>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <h1>{this.state.value}</h1>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
render(
  <NameForm />,
  document.getElementById('root')
);