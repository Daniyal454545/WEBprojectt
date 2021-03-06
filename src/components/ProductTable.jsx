import React, { useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { adminContext } from '../contexts/AdminContext'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import '../admin/EditProdcut.scss'
// import DeleteIcon from '@mui/icons-material/Delete';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        // minHeight: 650,
    },
});

export default function ProductTable() {
    const classes = useStyles();
    const { products, getProducts, deleteProduct } = useContext(adminContext)
    useEffect(() => {
        getProducts()
    }, [])
    return (
        <>
            {
                products ? (
                    <TableContainer component={Paper} >
                        <Table className={classes.table} aria-label="caption table">
                            <caption>A basic table example with a caption</caption>
                            <TableHead>
                                <TableRow>
                                    <TableCell>№</TableCell>
                                    <TableCell align="left">Модель</TableCell>
                                    <TableCell align="left">Цена</TableCell>
                                    <TableCell align="left">Фото</TableCell>
                                    <TableCell align="left">Год</TableCell>
                                    <TableCell align="left">Ткань</TableCell>
                                    <TableCell align="left">размер</TableCell>
                                    <TableCell align="left">#</TableCell>
                                    <TableCell align="left">#</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((row, index) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {index + 1}
                                        </TableCell>
                                        <TableCell align="left">{row.model}</TableCell>
                                        <TableCell align="left">{row.year}</TableCell>
                                        <TableCell align="left">
                                            <img width="100" src={row.photo} alt="" />
                                        </TableCell>
                                        <TableCell align="left">{row.cloth}</TableCell>
                                        <TableCell align="left">{row.size}</TableCell>
                                        <TableCell aling="left">{row.price} $</TableCell>
                                        <TableCell align="left">
                                            <Button
                                                onClick={() => deleteProduct(row.id)}
                                                variant="outlined" 
                                                color="error"
                                            >
                                                Del
                                            </Button>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Link to={`/edit/${row.id}`}>
                                                <Button variant="contained" color="primary">
                                                    Edit
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <div class="loader">Loading...</div>
                )
            }
        </>
    );
}
