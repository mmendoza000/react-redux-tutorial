import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

const App = () => (
  <div className='row'>
  	<div className='col-md-4 col-md-offset-4 todoComponent'>
  	<Footer />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  	</div>
  </div>
)

export default App