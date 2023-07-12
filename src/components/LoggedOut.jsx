import React from 'react'
import Button from './Button'

// LoggedOut must also take in props in order to accept the toggleLogIn function
const LoggedOut = (props) => {
    // destruct toggleLogIn off of props
    const { toggleLogIn } = props;
    return (
        <>
            <h1>Logged out comp...</h1>
            {/*Pass in the toggleLogIn function to the Button component as a prop*/}
            <Button toggleLogIn={toggleLogIn} />
        </>
    )
}

export default LoggedOut
