import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from '../container/Login/Login'
import Vista from '../container/Index/Index'

const App = () => (

    <BrowserRouter>
        <Switch>

            <Route exact path="/" component={Login}  />
            <Route exact path="/vista" component={Vista} />

        </Switch>
    </BrowserRouter>


)

export default App

