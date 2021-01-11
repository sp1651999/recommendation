import React from 'react'
import {Route,Switch,BrowserRouter} from 'react-router-dom'
import Login from './login'
import Card from './Card'

const App1=()=>{
    return(
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/recommendation" component={Login} />
                <Route path="/recommenddation/user/:id" component={Card} /> 
            </Switch>
        </BrowserRouter>
        </>
    )
}

export default App1;
