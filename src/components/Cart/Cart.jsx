import React, { useEffect, useState } from 'react';
import { Button, Container, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { commerce } from './../../lib/commerce';
import CartItem from './CartItem/CartItem';
import useStyles from './styles';
import ThankYou from "../Modal/ThankYou";
import './styles.css';

const Cart = ({ cart, onUpdateCartQty, onRemoveFromCart, onEmptyCart, onAddSustainableAlternative }) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [extrapayment, setExtrapayment] = useState(0);
    const [variablePayment, setVariablePayment] = useState(0);
    const [totalPayment, setTotalPayment] = useState(0);
    const handleEmptyCart = () => onEmptyCart();
    const [products, setProducts] = useState([]);
    const [subtotal, setSubtotal] = useState(0);

    const renderProducts = async () => {
        if (cart.line_items) {
            const data = await Promise.all(cart.line_items.map(async (item) => {
                return commerce.products.retrieve(item.product_id);
            }));
            setProducts(data);
        }
    };

    const calcSubtotal = async () => {
        let subtotal = 0;
        if (cart.line_items) {
            cart.line_items.forEach((item) => {
                subtotal += roundPrice(item.price.raw * item.quantity);
            });
            setSubtotal(roundPrice(subtotal));
        }
    };

    const roundPrice = (num) => {
        const m = Number((Math.abs(num) * 100).toPrecision(15));
        return Math.round(m) / 100 * Math.sign(num);
    };

    const renderEmptyCart = () => (
        <div>
            <Typography variant="subtitle1">You have no items in your shopping cart,
                <Link className={classes.link} to="/LyckaWebshop"> start adding some</Link>!
            </Typography>
            <Button className={classes.checkoutButtonEmptyCart} size="large" type="button" variant="contained"
                color="primary" component={Link} to="/LyckaWebshop">Back</Button>
            <Button className={classes.checkoutButtonEmptyCart} onClick={handleOpen} size="large"
                type="button" variant="contained" color="primary">Checkout</Button>
        </div>
    );

    const renderCart = () => (
        <>
            <Grid className="cart-grid" container spacing={3}>
                {cart.line_items.map((lineItem, index) => (
                    <Grid item xs={12} sm={4} key={lineItem.id}>
                        <CartItem product={products[index]} item={lineItem} onUpdateCartQty={onUpdateCartQty}
                            onRemoveFromCart={onRemoveFromCart} onAddSustainableAlternative={onAddSustainableAlternative} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {subtotal}€</Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained"
                        color="primary" component={Link} to="/LyckaWebshop">Back</Button>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained"
                        color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} onClick={handleOpen} size="large"
                        type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    );

    const handleOpen = async () => {
        if (subtotal <= 200) {
            let products = [];
            let productItems = await Promise.all(cart.line_items.map(async (item) => {
                return { product: await commerce.products.retrieve(item.product_id), item };
            }));
    
            const randomProduct = cart.line_items[Math.floor(Math.random() * cart.line_items.length)];
            const randomProductPrice = randomProduct.price.raw;
            const extrapayment = 1.5;
            const variablePayment = parseFloat((randomProductPrice * 0.015).toFixed(3));
            const totalPayment = extrapayment + variablePayment;
    
            setOpen(true);
            setExtrapayment(extrapayment);
            setVariablePayment(variablePayment);
            setTotalPayment(totalPayment);
        } else {
            alert("Your cart's subtotal is bigger than 200€, please remove products");
        }
    };

    useEffect(() => {
        const fetchProducts = async () => {
            await renderProducts();
        };
        fetchProducts();

        calcSubtotal();
    }, [cart.line_items]);

    if (!cart.line_items) return 'Loading';

    return (
        <Container>
            <ThankYou open={open} extrapayment={extrapayment} variablePayment={variablePayment} totalPayment={totalPayment} setOpen={setOpen} />
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? renderEmptyCart() : renderCart()}
        </Container>
    );
};
export default Cart;
