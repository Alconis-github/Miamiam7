import React from 'react';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import BaseArea from './HomePage/BaseArea';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function addToLocalStorage(recipe) {
  const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || []
  existingRecipes.push(recipe)
  localStorage.setItem('recipes', JSON.stringify(existingRecipes))
}

function removeFromLocalStorage(recipe) {
  const existingRecipes = JSON.parse(localStorage.getItem('recipes')) || []
  const newRecipes = existingRecipes.filter(localRecipe => {
    return localRecipe.id !== recipe.id;
  });
  localStorage.setItem('recipes', JSON.stringify(newRecipes))
}

function RecipePage() {

  const parts = window.location.href.split('/');
  const lastPart = parts.pop();

  const [recipe, setRecipe] = React.useState()
  React.useEffect(() => {
    fetch(`${URL_BACK}/api/recipes/${lastPart}`)
    .then((response) => response.json())
    .then((data) => setRecipe(data))
    .catch((err) => { console.log(err); });
  },[])

  const [isFavorite, setIsFavorite] = React.useState(false);
  React.useEffect(() => {
    const existingRecipe = JSON.parse(localStorage.getItem('recipes') || '[]').find(
      (localRecipe) => localRecipe.id === recipe?.id
    );
    setIsFavorite(!!existingRecipe);
  }, [recipe]);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFromLocalStorage(recipe)
    } else {
      addToLocalStorage(recipe)
    }
    setIsFavorite(!isFavorite)
  };

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
    {recipe&&(
      <BaseArea>
        <Container style={flexR_ContainerStyle} backgroundColor="red">
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
          {isFavorite ? (
            <IconButton aria-label="like" size="large" onClick={handleFavoriteClick}>
              <FavoriteIcon fontSize="inherit"/>
            </IconButton>
          ) : (
            <IconButton aria-label="like" size="large" onClick={handleFavoriteClick}>
              <FavoriteBorderIcon fontSize="inherit" />
            </IconButton>
          )}
        </Container>
      </BaseArea>
    )}
    </>
  );
}

export default RecipePage;