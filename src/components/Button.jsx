// Button will now take in props
const Button = (props) => {
    // destruct toggleLogIn off of props
    const { toggleLogIn } = props;
    // the Button's handleClick is an anonymous function that runs with the onClick event
    const handleClick = () => {
        // the only time toggleLogIn is invoked -- during the handleClick() function
        toggleLogIn();
    }
    return (
        // add the handleClick anonymous function as the callback for the Button's onClick
        <button onClick={handleClick}>Click me!</button>
    )
}

export default Button