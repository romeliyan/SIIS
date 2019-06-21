import React from 'react';
import auth from './auth';
import {Route, Redirect} from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {

    return(
        <Route {...rest} render={props => {
            
            if(auth.isAuthenticated()){
                console.log(auth.isAuthenticated())
                return <Component {...props} {...rest}/>
            }
            else{
                return <Redirect to={
                    {
                        pathname: '/',
                        state:{
                            from: props.location
                        }
                    }
                } />
            }
            }} />
    );

};

export default ProtectedRoute;

