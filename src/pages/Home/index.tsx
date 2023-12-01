import TipCarousel from '../../components/Carousel';
import Chat from '../../components/Chat';
import Container from '../../components/Container';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Link } from 'react-router-dom';
import GoogleMaps from '../../components/GoogleMap';

import { styled } from 'styled-components';

const StyledLink = styled(Link)`
  
    color: #008000;
    font-size: 1.2rem;
    font-weight: 700;

    &:hover {
        color: #64F564;
    }

`;

const Home = () => {

    return (

        <Container $width="100%" $height="100%" $padding="0.5rem" $gap="0.5rem" $direction="column" $align="center" $justify="center" $resposive={{ $width: "100vw", $padding: "0.5rem", $gap: "0.5rem", $direction: "column", $align: "center", $justify: "center" }}>
            <ToastContainer />
            <Container $width="100%" $height="35rem" $gap="0.5rem" $padding="0.5rem" $resposive={{ $width: "100%", $height:"100vh", $padding: "0.5rem", $gap: "0.5rem" }}>
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
                <Container $height="100%" $gap="0.5rem" $resposive={{ $width: "100%", $gap: "0.5rem" }}>
                    <Container $height="100%" $border="2px solid #008000" $radius="0.5rem" $direction="column" $gap="0.5rem" $padding="0.5rem" $resposive={{ $width: "100%", $height: "auto", $padding: "0.5rem", $border: "2px solid #008000", $radius: "0.5rem" }}>
                        <Link to="/admin">
                            <h2>Admin</h2>
                        </Link>   
                    </Container>
                    <Container $height="100%" $border="2px solid #008000" $radius="0.5rem" $direction="column" $gap="0.5rem" $padding="0.5rem" $resposive={{ $width: "100%", $height: "auto", $padding: "0.5rem", $border: "2px solid #008000", $radius: "0.5rem" }}>
                        <h2>Novo Local</h2>
                    </Container>
                </Container>
            </Container>
            <Container $width="1580px" $height="20rem" $border="2px solid #008000" $radius="0.5rem" $padding="0.5rem" $resposive={{ $display: "none" }}>
                <TipCarousel />
            </Container>
            <Container $width="100%" $height="60px"></Container>
            <Chat />
        </Container>
       
    );

};

export default Home;