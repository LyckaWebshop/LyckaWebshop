import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    title: {
        marginTop: '5%',
    },
    emptyButton: {
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
            marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
            marginRight: '20px',
        },
    },
    grid:{
        display: 'inline-block',
        flexDirection:'column'
    },
    checkoutButton: {
        minWidth: '150px',
    },
    checkoutButtonEmptyCart: {
        minWidth: '150px',
        marginTop: '15px',
        marginRight: '15px',
    },
    link: {
        textDecoration: 'none',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '7%',
        marginBottom: '5%',
        width: '100%',
        justifyContent: 'space-between',
    },
}));
