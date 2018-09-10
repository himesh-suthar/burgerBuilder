import React from 'react';
import Aux from './../../hoc/aux';
import classes from './layout.css';
const Layout = (props) => {
    return(
        <Aux>
            <div>
                toolbar
            </div>
            <main className={classes.content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout ;