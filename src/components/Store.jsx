// import React, {useContext} from 'react';
import './Store.scss'
// import top from '../image/top.jpeg'
import { clientContext } from '../contexts/ClientContext'
import React, { useContext, useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
// import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Truncate from 'react-truncate';
// import { clientContext } from '../contexts/ClientContext'
import { Grid, IconButton} from '@material-ui/core';
// import { useProducts } from '../contexts/ProductContext';
// import Aos from 'aos';
// import '../index.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 280,
        margin: '0 10px 10px 10px',
        width: 240,
        minWidth: 240,
        height: 590,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly"
    },
    media: {
        height: 140,
        backgroundSize: "contain",
        backgroundColor: "rgb(197, 199, 214)"

    },
});

export default function Store ({item}) {
    const classes = useStyles();
    const { addAndDeleteProductInCart, checkProductInCart } = useContext(clientContext)

    console.log()

    return (
        <>
        {/* <section className='section_store' >
            <div className="section_text">
                <h6 className='section_h6' >Наш магазин😍</h6>
            </div>
            <div className="section_block">
        <div className="cards">
            <div>
                <div variant="top"/>
                <img  style={{ width: '30rem' }}alt="">{item.image}</img>
                    <div>
                        <div>{item.brand}</div>
                        <div className="">{item.model}</div>
                            <div>{item.description}</div>
                    <div className="">{item.price}</div>
                        <button onClick={() => addAndDeleteProductInCart(item)} className='section_button' variant="primary">Подробнее</button>
                </div>
            </div>
        </div>
            </div>
        </section> */}

        <Card data-aos="fade-up" className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={item.photo}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography variant="h6" component="h2" noWrap>
                        {item.model}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <Truncate lines={3} ellipsis={<span>... <a href='/link/to/article'>далее</a></span>}>
                            {item.cloth}
                            {item.year}
                        </Truncate>
                        {/* <span style={{ display: 'block', fontSize: "16px" }}>Цена: {item.price} сом</span> */}
                    </Typography>
                    <h3>Цена: {item.price} $</h3>
                    {item.size}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button
                    onClick={() => addAndDeleteProductInCart(item)}
                    size="small"
                    color="dark">
                    <ShoppingCartIcon
                        color={checkProductInCart(item.id) ? "secondary" : "dark"}
                    />
                </Button>
                <Button variant="outlined" size="small" color="dark">
                    Подробнее
                </Button>
            </CardActions>
            <Grid container justify="center">
          <IconButton >
            <Button variant="contained" 
              >Buy</Button>
          </IconButton>
        </Grid>

        </Card>
        ReactDOM.render(<Store />, document.getElementById('root'));
        </>
    );
};
