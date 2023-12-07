import TipCarousel from '../../components/Carousel';
import Chat from '../../components/Chat';
import Container from '../../components/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import GoogleMaps from '../../components/GoogleMap';

import { styled } from 'styled-components';
import { AppRegistrationRounded } from '@mui/icons-material';

const StyledLink = styled(Link)`
  
    color: #008000;
    font-size: 0.9rem;
    font-weight: 700;

    &:hover {
        color: #64F564;
    }

`;

const Home = () => {

    return (

        <Container $width="100%" $height="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center" $resposive={{ $width: "100vw", $padding: "0.5rem", $gap: "0.5rem", $direction: "column", $align: "center", $justify: "center", $height:"90vh" }}>
            <ToastContainer />
            <Container $width="100%" $height="35rem" $gap="0.5rem" $padding="0.5rem" $resposive={{ $width: "100vw", $padding: "0.5rem", $gap: "0.5rem" }}>
                <Container $height="100%" $border="2px solid #008000" $radius="0.5rem" $direction="column" $gap="0.5rem" $padding="0.5rem" $resposive={{ $height:"80%", $width: "100%", $padding: "0.5rem", $border: "2px solid #008000", $radius: "0.5rem" }}>
                    <Container $width='100%' $align='center' $justify='flex-start' $resposive={{ $height:"10%", $width: "100%", $align: "center" }}>
                        <StyledLink to="/discard-points">
                            Ver Locais
                        </StyledLink>
                    </Container>
                    <Container $width="100%" $height="90%" $resposive={{ $height:"90%" }}>
                        <GoogleMaps />
                    </Container>
                </Container>
                <Container $height="100%" $padding="0.3rem" $gap="0.5rem" $direction="column" $resposive={{ $width: "100%", $gap: "0.5rem" }}>
                    <Container $width="100%" $height="50%" $border="2px solid #008000" $radius="0.5rem" $direction="column" $gap="0.5rem" $padding="1rem" $align="flex-start" $resposive={{ $width: "100%", $height: "auto", $padding: "0.5rem", $border: "2px solid #008000", $radius: "0.5rem" }}>
                        <p>Descarte pilhas, baterias e outros resíduos de forma correta!</p>
                        <h1 style={{ color: "#008000" }}>CleanDiscard <span style={{ color: "#008000" }}>...</span></h1>
                        <p style={{ width: "80%", textAlign: "justify" }}>Seja bem-vindo ao CleanDiscard, um site que tem como objetivo ajudar as pessoas a descartarem seus resíduos de forma correta, evitando assim a contaminação do solo e da água. <StyledLink to="/about">Saiba mais</StyledLink></p>
                    </Container>
                    <Container $width="100%" $height="50%" $border="2px solid #008000" $radius="0.5rem" $direction="column" $gap="0.5rem" $padding="0.5rem" $resposive={{ $width: "100%", $height: "auto", $padding: "0.5rem", $border: "2px solid #008000", $radius: "0.5rem" }}>
                        <AppRegistrationRounded style={{ color: "#008000", fontSize: "2rem" }} />
                        <p>Não encontrou o ponto de descarte que procurava? <StyledLink to="/discard-point-register">
                            Registre um ponto
                        </StyledLink>
                        </p>
                    </Container>
                </Container>
            </Container>
            <Container $width="100%" $height="auto" $border="2px solid #008000" $radius="0.5rem" $padding="0.5rem" $resposive={{ $display: "none" }}>
                <TipCarousel />
            </Container>
            <Container $width="100%" $height="60px"></Container>
            <Chat />
        </Container>
       
    );

};

export default Home;