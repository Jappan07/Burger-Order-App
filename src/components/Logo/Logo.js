import React from "react"
import { useHistory } from "react-router"
import burgerLogo from "../../assets/images/burger-logo.png"
import classes from "./Logo.css"

const Logo = (props) => {
    const history = useHistory()

    const onClickHandler = () => {
        history.push("/")
    }

    return (
        <div className={classes.Logo} onClick={onClickHandler} style={{ height: props.height }}>
            <img src={burgerLogo} alt="MyBurger" />
        </div>
    )
}

export default Logo