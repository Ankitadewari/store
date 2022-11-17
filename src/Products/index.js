import React,{useEffect, useState} from 'react'
import MediaCard from './MediaCard'
import { useNavigate } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { Container } from '@mui/system';
import Navbar from '../Navbar/Navbar';


function Products() {
    const [products, setProducts] = useState([])
    let navigate = useNavigate()
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
              .then(res=>res.json())
              .then(json=>setProducts(json))
    }, []);
    
    return (
      <>
      <Navbar></Navbar>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                {
                    products.map(item =>
                        <MediaCard item={item} key={item.id} />
                    )
                }
        </Box>
      </Container>
    </>
    )
}
export default Products