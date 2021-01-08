import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Routes from '../main/routes.jsx'
import Menu from '../template/menu.jsx'

export default props => (
  <div className="container">
    <Menu/>
    <Routes/>
  </div>
)