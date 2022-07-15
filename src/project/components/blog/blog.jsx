
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
  

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.primary,
  }));

function BlogComp() {
    return (
        <Grid item>
            <Container>
                <Item><h1>blog comp</h1></Item>
            </Container>
        </Grid>
        );
}

export default BlogComp;