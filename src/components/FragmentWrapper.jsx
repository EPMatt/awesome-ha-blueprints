import React from 'react'

function FragmentWrapper(props){
    return(
        <React.Fragment>
            {props.children}
        </React.Fragment>
    )
}

export default FragmentWrapper