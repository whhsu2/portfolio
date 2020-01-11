import React from 'react';
import ScrollIntoView from 'react-scroll-into-view'

const MenuStyles = {
    menu: {
        position: "fixed",
        width: "100vw",
        height: "30px",
        top: 0,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "left",
        background: "rgb(60, 93, 00)", 
        color: "black",
        zIndex: 100,
        opacity: 100,
        backgroundColor: "rgba(255,255,255,0.5)",
    },
    menuLink: {
        width: "40%",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        listStyle: "none",
        fontFamily: "Georgia, serif",
        fontWeight: "bold",
    },
}

const Menu = () => {
    const classes = MenuStyles
    return (
            <header style={classes.menu}>
            <ul style={classes.menuLink}>
                <ScrollIntoView className="nav-button" selector=".about">
                        About
                </ScrollIntoView>              
                <ScrollIntoView className="nav-button" selector=".experience">
                        Experiences
                </ScrollIntoView>
                <ScrollIntoView className="nav-button" selector=".projects">
                        Projects
                </ScrollIntoView>
                <ScrollIntoView className="nav-button" selector=".interests">
                        Interests
                </ScrollIntoView>
            </ul>
        </header>
    )
}

export default Menu;