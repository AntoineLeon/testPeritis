import './App.css'

import {Box, Grid, ThemeProvider, Typography} from "@mui/material";
import {theme} from './theme'

import Header from './components/Header'
import Footer from "./components/Footer";
import ParallaxImage from "./components/ParallaxImage";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Header/>

        <Grid container p={10} sx={{
          padding: {xs: 2, sm: 10}
        }}>
          <Grid item xs={12} sm={6} justifyContent={'right'} display={'flex'}>
            <Box width={380} mr={4}>
              <Typography sx={{textAlign: {xs: 'center', sm: 'left'}}} fontWeight={'bold'} mb={2}>Star Wars, The Force
                Awakens</Typography>
              <Typography sx={{textAlign: {xs: 'center', sm: 'left'}}}>Plus de 30 ans après la bataille d'Endor, la
                galaxie n'en a pas fini avec
                la tyrannie et
                l’oppression. Les membres de l'Alliance rebelle, devenus la « Résistance », combattent les vestiges de
                l'Empire réunis sous la bannière du « Premier Ordre ».<br/><br/>Un mystérieux guerrier, Kylo Ren, semble vouer un
                culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au même moment, une
                jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la rencontre de
                Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.<br/><br/>Plus de 30 ans après la bataille
                d'Endor, la galaxie n'en a pas fini avec la tyrannie et l’oppression. Les membres de l'Alliance rebelle,
                devenus la « Résistance », combattent les vestiges de l'Empire réunis sous la bannière du « Premier
                Ordre ».<br/><br/>Un mystérieux guerrier, Kylo Ren, semble vouer un culte à Dark Vador et pourchasse les ennemis
                du Premier Ordre à travers la galaxie. Au même moment, une jeune femme nommée Rey, pilleuse d'épaves sur
                la planète désertique Jakku, va faire la rencontre de Finn, un Stormtrooper en fuite, une rencontre qui
                bouleversera sa vie.<br/><br/>Plus de 30 ans après la bataille d'Endor, la galaxie n'en a pas fini avec la
                tyrannie et l’oppression. Les membres de l'Alliance rebelle, devenus la « Résistance », combattent les
                vestiges de l'Empire réunis sous la bannière du « Premier Ordre ».<br/><br/>Un mystérieux guerrier, Kylo Ren,
                semble vouer un culte à Dark Vador et pourchasse les ennemis du Premier Ordre à travers la galaxie. Au
                même moment, une jeune femme nommée Rey, pilleuse d'épaves sur la planète désertique Jakku, va faire la
                rencontre de Finn, un Stormtrooper en fuite, une rencontre qui bouleversera sa vie.</Typography>
            </Box>
          </Grid>
          <Grid item sm={6} justifyContent={'left'} display={'flex'}
                sx={{
                  boxSizing: 'border-box',
                  display: {xs: 'none', sm: 'flex'}
                }}>
            <img src={'assets/ad.jpg'} style={{position: 'sticky', top: '75px', marginLeft: 32}} height={600}
                 width={300} alt={'ad'}/>
          </Grid>
        </Grid>
        <ParallaxImage>
          <Box sx={{
            height: {xs: '1300px', sm: '800px'},
            width: {xs: '100%', md: '780px'}
          }} pt={6} pb={10} style={{margin: '0 auto'}}>
            <Typography fontWeight={'bold'} fontSize={36}>A long time ago, in a galaxy far, far away…</Typography>
            <Grid container pt={2} pb={1}>
              <Grid item xs={12} sm pb={2} pr={2}><img src={'assets/r2d2_c3p0.jpg'} alt={'r2d2'}/></Grid>
              <Grid item xs={12} sm>
                <Typography fontSize={16} align={'left'}><b>La Guerre des étoiles</b> (titre original <b>Star Wars</b>,
                  soit littéralement Guerres
                  Stellaires ) est une épopée cinématographique de science-fiction créée parGeorge Lucas, considérée
                  comme un élément phare du space opera. Prévue à la base pour être une suite detroistrilogies
                  (triptyque), Lucas fut contraint, par manque de moyens techniques, de commencer par lasecondetrilogie
                  (<b>l'Épisode IV - Un nouvel espoir</b>) en 1977. La série connut un succès phénoménal partout
                  danslemonde et
                  engendra une très importante communauté de fans.Sans prétendre expliquer le succès du premierfilm
                  (s'il y avait une recette, cela se saurait), on peut, toutefois, noter que, malgré le manque demoyens
                  (le budget était relativement modeste, les acteurs presque inconnus) :
                </Typography>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
            <Typography fontSize={16} align={'left'}>
              - Il fait appel à des références connues et appréciées des jeunes de l'époque : films de cape et d'épée,
              westerns, péplums, contes de fées et même <b>le Seigneur des Anneaux</b> de J.R.R. Tolkien ; cette œuvre
              n'apparaît pas comme de la science-fiction au sens strict mais plutôt comme du space fantasy.<br/><br/>-
              Les effets
              spéciaux, supervisés par Ken Ralston, étaient réellement novateurs, avec notamment la participation de
              John Dykstra (qui a également participé au premier film de <b>Star Trek</b>), qui avait développé une
              nouvelle
              manière d'animer les maquettes des vaisseaux en coordonnant leurs mouvements par ordinateur
              (Dykstraflex).<br/><br/>- Le film a développé un univers cohérent, avec, comme préoccupation constante,
              autant la
              création d'une ambiance que l'action proprement dite.<br/><br/>- La musique, composée par John Williams,
              introduit
              des thèmes récurrents et des leitmotivs (procédé classique mais renforçant la cohérence).</Typography>
          </Box>
        </ParallaxImage>
      <Footer/>
      </ThemeProvider>
    </div>
  )
}

export default App
