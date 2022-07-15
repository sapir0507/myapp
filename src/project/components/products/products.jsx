import { Container, Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

function ProductsComp() {
    return ( <Grid item>
        <Container>
            <Item><h1>products comp</h1></Item>
        </Container>
    </Grid> );
}

export default ProductsComp;