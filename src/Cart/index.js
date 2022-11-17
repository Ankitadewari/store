import React,{useEffect, useState} from 'react'
import MediaCard from './MediaCard'
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { Box, CssBaseline } from '@mui/material';
import { Container } from '@mui/system'

function Cart() {
    let navigate = useNavigate();
    const [cartItems, setCartItems] = useState([])

    useEffect(() => {
      let savedCartItems = localStorage.getItem("cartItems")
      if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
      }
    }, []);
    return (
     <>
     <Navbar></Navbar>
     <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                {
                    cartItems.map(item =>
                        <MediaCard item={item} key={item.id} />
                    )
                }
        </Box>
      </Container>
      </>
    )
}
export default Cart