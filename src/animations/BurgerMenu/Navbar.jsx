import { Link } from '@material-ui/core';
import React from 'react';
import Button from '@mui/material/Button';
import './style.scss'


const Navbar = () => {
   
    return (
    <>  
<header>

    <nav class="nav" >
        <Link to="/" >
        <a href="/" class="logo">CCC</a>
        </Link>
        <ul class="nav-list">
            <li>
                <Link>
                <a href="#home" class="nav-link">CCC</a>
                </Link>
            </li>
            <li>
            <Link>
                <a href="#mars" class="nav-link">Информация</a>
                </Link>
            </li>
            <li>
            <Link>
                <a href="#earth" class="nav-link">Cостав</a>
                </Link>
            </li>
            <li>
            <Link>
                {/* <a class="nav-link" href="#news">Новости</a> */}
                </Link>
            </li>
            <li>
            <Link>
                <a class="nav-link" href="#header">Магазин</a>
                </Link>
            </li>
        </ul>
        <div className="link">

<Link>
                <Button variant="outlined"><a href="/admin">Add</a></Button>
</Link>
<Link>
                {/* <Button variant="outlined"><a href="/table">edit</a></Button> */}
</Link>

                <Button variant="outlined"><a href="/sign-in">Sing in</a></Button>
                {/* <Button variant="outlined"><a href="/sign-up"> Sign up</a></Button> */}

        </div>

    </nav>

<div>
</div>
</header>

    </>
    );
};

export default Navbar;