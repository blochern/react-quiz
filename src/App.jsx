import { useState } from 'react'
import LoggedOut from './components/LoggedOut'
import LoggedIn from './components/LoggedIn'

function App() {
  // initialize the 'loggedIn' state as bool true, 'setLoggedIn' to change it
  const [loggedIn, setLoggedIn] = useState(true)

  // toggleLogIn function (will not be invoked until the Button's onClick)
  const toggleLogIn = () => {
    // setLoggedIn changes the loggedIn state to its opposite
    setLoggedIn(!loggedIn);
  }

  // if loggedIn = true, return the LoggedIn component
  if (loggedIn) {
    // Button will need the toggleLogIn function, so pass it down as a prop
    return <LoggedIn toggleLogIn={toggleLogIn} />
  }

  // ditto
  return <LoggedOut toggleLogIn={toggleLogIn} />
}

export default App