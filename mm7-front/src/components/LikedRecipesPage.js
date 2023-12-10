import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BaseArea from './HomePage/BaseArea';

function LikedRecipesPage() {

    const [recipes, setRecipes] = React.useState([]);
    React.useEffect(() => {
        const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
        setRecipes(existingRecipes);
    }, []);

    const innerContainerStyle = {
        minWidth: '25%',
        minHeight: '50%',
        textAlign: 'center',
        padding: "50px 0",
    };

    const flexC_ContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        ...innerContainerStyle
    } 

    const flexR_ContainerStyle = {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        ...innerContainerStyle
    }
  
    return (
        <>
            {recipes&&(
                <BaseArea>
                    <Typography variant="h2" color="text.primary" paragraph maxWidth="md" style={{fontWeight: 'bold'}}>
                        VOS RECETTES PREFEREES
                    </Typography>

                    <Container style={flexC_ContainerStyle} >
                        {recipes
                        .map(recipe => (
                            <Container style={flexR_ContainerStyle} >
                                <img
                                src={require(`../assets/images/Recipes/${recipe.image}`)}
                                alt={recipe.name}
                                style={{
                                    width: '250px',
                                    height: '250px',
                                    maxWidth:'80%',
                                }}/>
                                <Container style={flexC_ContainerStyle} >
                                    <Typography variant="h3" color="text.primary" paragraph maxWidth="md" style={{fontWeight: 'bold'}}>
                                        {recipe.name}
                                    </Typography>
                                    <Typography variant="h5" color="text.primary" paragraph maxWidth="md">
                                        {recipe.description}
                                    </Typography>
                                </Container>
                            </Container>
                        ))}
                    </Container>
                    
                </BaseArea>
            )}
        </>
    );
}

export default LikedRecipesPage;
