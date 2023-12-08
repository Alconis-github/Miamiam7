import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import accueilImg from '../../assets/images/accueil.jpg';
import BaseArea from './BaseArea';
import SearchSection from './SearchSection';
import CategorySelection from './CategorySelection';
import entreeIcon from '../../assets/images/entree.png';
import platIcon from '../../assets/images/plat.png';
import dessertIcon from '../../assets/images/dessert.png';
import boissonIcon from '../../assets/images/boisson.png';
import Category from './CategorySelection';

function HomePage() {
  const innerContainerStyle = {
    minWidth: '25%',
    minHeight: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',

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

  const categories = [
    { id: 1, name: 'Entrée', icon: entreeIcon },
    { id: 2, name: 'Plat', icon: platIcon },
    { id: 3, name: 'Dessert', icon: dessertIcon },
    { id: 4, name: 'Boisson', icon: boissonIcon },
  ];

  const categoriesContainerStyle = {
    display: 'flex',
    justifyContent: 'space-around',  // Ajuste selon tes préférences
    flexWrap: 'wrap',  // Permet le pliage sur une nouvelle ligne
    marginTop: '20px',  // Ajuste selon tes préférences
  };
  
  
  return (
    <>
    <BaseArea backgroundImage={accueilImg} vheight='60vh'>
      <Container style={flexC_ContainerStyle}>
        <Typography variant="h1" color="text.primary" paragraph maxWidth="md">
          UN GRIMOIRE DE RECETTES 100% N7 ET 100% BDD
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph maxWidth="md">
          Retrouvez les recettes concoctées par nos meilleurs chefs cuisiniers de l'N7.
        </Typography>
      </Container>
    </BaseArea>
    <SearchSection></SearchSection>

    <BaseArea>
      <Container style={flexC_ContainerStyle}> 
      <Typography variant="h3" color="text.primary" paragraph maxWidth="md">
          RECHERCHEZ UN PLAT SPECIFIQUE
        </Typography>        
        <Typography variant="h3" color="text.primary" paragraph maxWidth="md">
          OU
        </Typography>
        <Typography variant="h3" color="text.primary" paragraph maxWidth="md">
          DECOUVREZ UNE CATEGORIE
        </Typography>
      </Container>
    </BaseArea>

    <BaseArea>
        <Container>
          <div style={{ ...categoriesContainerStyle, flexWrap: 'wrap' }}>
            {categories.map((category) => (
              <CategorySelection key={category.id} {...category} />
            ))}
          </div>
        </Container>
      </BaseArea>


    <BaseArea>
        <Container style={flexR_ContainerStyle}>
        <Container style={flexC_ContainerStyle}>
            <Typography variant="h2">
                Recette Vedette
            </Typography>
            <img 
            src={accueilImg} 
            alt="Image placeholder"
            style={{
                width: '250px',
                height: '250px',
            }}/>
        
        </Container>
        <Container>
            La recette en question...
        </Container>
        </Container>
    </BaseArea>
    </>
  );
}

export default HomePage;
