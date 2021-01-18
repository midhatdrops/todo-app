import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader.jsx'
import Form from './todoForm.jsx'
import List from './todoList.jsx'



export default class Todo extends Component {
  render() {
    return(<div>
      <PageHeader name="Tarefas" small="Cadastro"/>
      <Form />
      <List />
    </div>) 
  }
}