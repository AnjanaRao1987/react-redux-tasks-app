import React from "react";
import Logo from '../resources/logo.png';

const Header = () => (
    <React.Fragment>
       <hr />
       <div style={{display:'inline-block',width:'100%'}}>
    		<div style= {{float: 'left'}} className= "text-center">
        		<h1   style={{fontFamily:"Fira Sans",marginLeft:20}}>Task management</h1>
        	</div>
        	<div style= {{float: 'right'}}>
        		<img src={Logo} width="100" height="100" />
        	</div>
        </div>
       <hr />
    </React.Fragment>
);

export default Header;