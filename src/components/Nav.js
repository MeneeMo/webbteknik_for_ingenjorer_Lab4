import React from "react";  
import {NavLink} from "react-router-dom";

class Nav extends React.Component {
    constructor(props) {
        super(props);
        // states to enable dropdown to open - start
        this.state = {
            hemOpen: false,
            belysningOpen: false,
            hogtiderOpen: false,
            inomhusdekorationerOpen: false,
            utomhusdekorationerOpen: false,
            smyckenOpen: false,
            vaxterOpen: false,
        };
        // states to enable  dropdown to open - slut
        this.myFunction = this.myFunction.bind(this);
        this.mOver = this.mOver.bind(this);
        this.mOut = this.mOut.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this); //dropdown to toggle between open & close
        this.handleClickOutside = this.handleClickOutside.bind(this); //dropdown to close if click outside
        this.dropdownRefs = { // Added reference to elements. Used to close dropdown if click outside
            hem: React.createRef(),
            belysning: React.createRef(),
            hogtider: React.createRef(),
            inomhusdekorationer: React.createRef(),
            utomhusdekorationer: React.createRef(),
            smycken: React.createRef(),
            vaxter: React.createRef(),
        };
    }

    // dropdown to close if click outside - start
    // add eventlistener when component is mounted
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    // remove eventlistener when component is unmounted
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    // checks if the click is outside the dropdown and update state
    handleClickOutside(event) {
        Object.keys(this.dropdownRefs).forEach((key) => { // Loop through refs
            if (
            this.state[`${key}Open`] &&
            this.dropdownRefs[key].current &&
            !this.dropdownRefs[key].current.contains(event.target)
            ) {
            this.setState({ [`${key}Open`]: false });
            }
        });
    }
    // dropdown to close if click outside - end

    /* Webbutik nav
    Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
    myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    //Toggle Dropdown - start
    toggleDropdown(dropdownName) {
        this.setState((prevState) => ({
          [dropdownName]: !prevState[dropdownName],
        }));
    }
    //ToggleDropdown - slut

    /* Laboration 3 - "When the mouse pointer hovers the link, use onmouseover() to change the element's appearance." 
    --> 2025-03-16: Updated for react */
    /* Top buttons */
    mOver (event) { //(obj)
        event.currentTarget.style.backgroundColor = "#81BD96";
    }

    mOut (event) {//(obj)
        event.currentTarget.style.backgroundColor = "";
    }

    render() {
        return(
            <nav className="nav">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div className="topnav" id="myTopnav">      
                        <div className="dropdown dropdown-container" id="dropdown-hem" ref={this.dropdownRefs.hem}>
                            <button className="dropbtn" onMouseOver = {this.mOver} onMouseOut = {this.mOut} onClick={() => this.toggleDropdown("hemOpen")}  /*dropdown*/>HEM 
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content" style={{ display: this.state.hemOpen ? "block" : "none" }} /*dropdown*/ > 
                                <ul>
                                    <li><NavLink to="/" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Hem</NavLink></li>   
                                </ul>            
                            </div>
                        </div>

                        <div className="dropdown dropdown-container" id="dropdown-belysning" ref={this.dropdownRefs.belysning}>
                            <button className="dropbtn" onMouseOver = {this.mOver} onMouseOut = {this.mOut} onClick={() => this.toggleDropdown("belysningOpen")}  /*dropdown*/ >BELYSNING 
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content"  style={{ display: this.state.belysningOpen ? "block" : "none" }} /*dropdown*/ >
                                <ul>
                                    <li><NavLink to="ljusslingor" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Ljusslingor</NavLink></li>
                                    <li><NavLink to="ljusstakar" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Ljusstakar</NavLink></li>
                                    <li><NavLink to="solcellsbelysning" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Solcellsbelysning</NavLink></li>                        
                                </ul>
                            </div> 
                        </div> 

                        <div className="dropdown dropdown-container" id="dropdown-hogtider" ref={this.dropdownRefs.hogtider}>
                            <button className="dropbtn" onMouseOver = {this.mOver} onMouseOut = {this.mOut} onClick={() => this.toggleDropdown("hogtiderOpen")}  /*dropdown*/ >HÖGTIDER  
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content" style={{ display: this.state.hogtiderOpen ? "block" : "none" }} /*dropdown*/ >
                                <ul>
                                    <li><NavLink to="halloweeen" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Halloweeen</NavLink></li>
                                    <li><NavLink to="jul" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Jul</NavLink></li>
                                    <li><NavLink to="pask" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Påsk</NavLink></li>                   
                                </ul>
                            </div>
                        </div>

                        <div className="dropdown dropdown-container" id="dropdown-inomhusdekorationer" ref={this.dropdownRefs.inomhusdekorationer}>
                            <button className="dropbtn" onMouseOver = {this.mOver} onMouseOut = {this.mOut} onClick={() => this.toggleDropdown("inomhusdekorationerOpen")}  /*dropdown*/ >INOMHUSDEKORATIONER  
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content" style={{ display: this.state.inomhusdekorationerOpen ? "block" : "none" }} /*dropdown*/ >
                                <ul>
                                    <li><NavLink to="krukor" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Krukor</NavLink></li>
                                    <li><NavLink to="vasar" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Vasar</NavLink></li>
                                </ul>
                            </div> 
                        </div>

                        <div className="dropdown dropdown-container" id="dropdown-utomhusdekorationer" ref={this.dropdownRefs.utomhusdekorationer}>
                            <button className="dropbtn" onMouseOver = {this.mOver} onMouseOut = {this.mOut} onClick={() => this.toggleDropdown("utomhusdekorationerOpen")}  /*dropdown*/ >UTOMHUSDEKORATIONER
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content" style={{ display: this.state.utomhusdekorationerOpen ? "block" : "none" }} /*dropdown*/ >
                                <ul>
                                    <li><NavLink to="dekorationer_gjutjärn" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Dekorationer i gjutjärn</NavLink></li>
                                    <li><NavLink to="marschaller" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Marschaller</NavLink></li>
                                    <li><NavLink to="rostiga_dekorationer" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Rostiga Dekorationer</NavLink></li> 
                                    <li><NavLink to="vindspel_spiraler" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Vindspel & Spiraler</NavLink></li>
                                </ul>
                            </div> 
                        </div>

                        <div className="dropdown dropdown-container" id="dropdown-smycken" ref={this.dropdownRefs.smycken}>
                            <button className="dropbtn" onMouseOver = {this.mOver} onMouseOut = {this.mOut} onClick={() => this.toggleDropdown("smyckenOpen")}  /*dropdown*/ >SMYCKEN
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content" style={{ display: this.state.smyckenOpen ? "block" : "none" }} /*dropdown*/ >
                                <ul>
                                    <li><NavLink to="armband" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Armband</NavLink></li>
                                    <li><NavLink to="halsband" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Halsband</NavLink></li>
                                    <li><NavLink to="ringar" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Ringar</NavLink></li>
                                </ul>
                            </div>  
                        </div> 

                        <div className="dropdown dropdown-container" id="dropdown-vaxter" ref={this.dropdownRefs.vaxter}>
                            <button className="dropbtn" onMouseOver = {this.mOver} onMouseOut = {this.mOut} onClick={() => this.toggleDropdown("vaxterOpen")}  /*dropdown*/ >VÄXTER
                                <i className="fa fa-caret-down"></i>
                            </button>
                            <div className="dropdown-content" style={{ display: this.state.vaxterOpen ? "block" : "none" }} /*dropdown*/ >
                                <ul>
                                    <li><NavLink to="dahlior" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Dahlior</NavLink></li>
                                    <li><NavLink to="narcisser" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Narcisser</NavLink></li>
                                    <li><NavLink to="tulpaner" onMouseOver = {this.mOver} onMouseOut = {this.mOut} >Tulpaner</NavLink></li>
                                </ul>
                            </div> 
                        </div>

                    <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div> 
            </nav>
        )
    }
}

export default Nav;