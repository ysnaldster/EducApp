import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from "react-router-dom";
import styled from 'styled-components'
import { AiFillShopping } from 'react-icons/ai';
import { TiDocumentText } from 'react-icons/ti'
import { ImHome } from 'react-icons/im'
import { FaUser } from 'react-icons/fa'
import { IoPeopleCircleOutline } from 'react-icons/io5'
import {VscReferences} from 'react-icons/vsc'
import {useDispatch} from 'react-redux'
import {starLogout, logout} from '../actions/auth'
import {Button} from 'react-bootstrap'
import {BiArrowBack} from 'react-icons/bi'

// Estilos Adicionales 
const StyledTextNav = styled(ListItemText)`
    font-size: 1rem;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: 0.00938em;
`


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    },
    title: {
        flexGrow: 1,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

const StyledIconNav = styled.div`
    fill: currentColor;
    width: 1em;
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
`
const StyledImgLogo = styled.img`
  height: 70px !important;
`;

export default function PersistentDrawerRight() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const dispatch = useDispatch()
    const handleLogout = () => {
      console.log('F.');
      dispatch(starLogout())
    }

    return (
        <div className={classes.root} >
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
                style={{ background: '#393E46' }}
            >
                <Toolbar>
                    <Typography variant="h6" noWrap className={classes.title}>
                        <StyledImgLogo src="https://i.ibb.co/26ZyFJV/logot.png" />
                    </Typography>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}>
                <div className={classes.drawerHeader} >
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        <p>EducApp</p>
                    </IconButton>
                </div>
                <Divider />
                <List >
                    <div style={{ padding: '8px 16px' }}>
                        <Link to='/ofertas' style={{ display: 'flex' }}>
                            < StyledIconNav style={{ marginRight: '30px' }}>
                                <ImHome style={{ color: '#7a8184' }} />
                            </ StyledIconNav>
                            <StyledTextNav >
                                Inicio
                            </StyledTextNav>
                        </Link>
                    </div>
                    <div style={{ padding: '8px 16px' }}>
                        <Link to='/ofertas' style={{ display: 'flex' }}>
                            < StyledIconNav style={{ marginRight: '30px' }}>
                                <FaUser style={{ color: '#7a8184' }} />
                            </ StyledIconNav>
                            <StyledTextNav >
                                Ingresar
                            </StyledTextNav>
                        </Link>
                    </div>
                    <div style={{ padding: '8px 16px' }}>
                        <Link to='/ofertas' style={{ display: 'flex' }}>
                            < StyledIconNav style={{ marginRight: '30px' }}>
                                <AiFillShopping style={{ color: '#7a8184' }} />
                            </ StyledIconNav>
                            <StyledTextNav >
                                Ofetas
                            </StyledTextNav>
                        </Link>
                    </div>
                    <div style={{ padding: '8px 16px' }}>
                        <Link to='/ofertas' style={{ display: 'flex' }}>
                            < StyledIconNav style={{ marginRight: '30px' }}>
                                <TiDocumentText style={{ color: '#7a8184' }} />
                            </ StyledIconNav>
                            <StyledTextNav >
                                Novedades
                            </StyledTextNav>
                        </Link>
                    </div>
                </List>
                <Divider />
                <List >
                    <div style={{ padding: '8px 16px' }}>
                        <Link to='/ofertas' style={{ display: 'flex' }}>
                            < StyledIconNav style={{ marginRight: '30px' }}>
                                <IoPeopleCircleOutline style={{ color: '#7a8184' }} />
                            </ StyledIconNav>
                            <StyledTextNav >
                                Nosotros
                            </StyledTextNav>
                        </Link>
                    </div>
                    <div style={{ padding: '8px 16px' }}>
                        <Link to='/ofertas' style={{ display: 'flex' }}>
                            < StyledIconNav style={{ marginRight: '30px' }}>
                                <VscReferences style={{ color: '#7a8184' }} />
                            </ StyledIconNav>
                            <StyledTextNav >
                                Referencias
                            </StyledTextNav>
                        </Link>
                    </div>
                    <div style={{ padding: '8px 16px' }} onClick = {handleLogout}>
                        <Link to='/ofertas' style={{ display: 'flex' }}>
                            < StyledIconNav style={{ marginRight: '30px' }}>
                                <BiArrowBack style={{ color: '#7a8184' }} />
                            </ StyledIconNav>
                            <StyledTextNav >
                                Salir
                                {/* <Button onClick = {handleLogout}>Logout</Button> */}
                            </StyledTextNav>
                        </Link>
                    </div>
                </List>
            </Drawer>
        </div>
    );
}
