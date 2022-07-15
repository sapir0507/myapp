
import './App.css';
import {Routes, Route} from 'react-router-dom';
import MainComp from './project/components/main/main';
import ProductsComp from './project/components/products/products';
import NavbarComp from './project/components/navbar/navbar';
import { styled } from '@mui/material/styles';
import {Outlet} from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BlogComp from './project/components/blog/blog';
import PricingComp from './project/components/pricing/pricing';
import ProfileComp from './project/components/profile/profile';
import DashboardComp from './project/components/dashboard/dashboard';
import AccountComp from './project/components/account/account';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function App() {


  return (<div>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} style={{placeContent:'center'}}>
        <Grid item xs={12} style={{placeContent:'center'}}>
          <NavbarComp></NavbarComp>
        </Grid>
        <Grid item xs={11} style={{placeContent:'center'}}>
          <Outlet item={Item}/>
        </Grid>
      </Grid>
    </Box>

  <Routes>
        <Route 
            path='/' 
            element={<MainComp/>}
        />
        <Route 
            path='/products' 
            element={<ProductsComp/>}
        />
        <Route 
            path='/pricing' 
            element={<PricingComp/>}
        />
        <Route 
            path='/Profile' 
            element={<ProfileComp/>}
        />
        <Route 
            path='/Blog' 
            element={<BlogComp/>}
        />
        <Route
            path='/Dashboard'
            element={<DashboardComp/>}
        ></Route>
        <Route
            path='/Account'
            element={<AccountComp/>}
        ></Route>
  </Routes>
  </div>);
}

export default App;
