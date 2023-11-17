import Container from '../../components/Container';


const Home = () => {

    return (

        <Container $width="100%" $height="100%" $padding="0.3rem" $gap="0.5rem" $direction="column" $align="center" $justify="center">
            <Container $width="88rem" $height="10rem" $border="2px solid #008000" $radius="0.5rem" $gap="0.5rem" $padding="0.5rem" $overflowX="auto" $justify="flex-start">

            </Container>
            <Container $width="100%" $height="30rem" $gap="0.5rem">
                <Container $height="100%" $border="2px solid #008000" $radius="0.5rem" $direction="column" $gap="0.5rem" $padding="0.5rem">
                    Mapa
                </Container>
                <Container $height="100%" $gap="0.5rem">
                    <Container $height="100%" $border="2px solid #008000" $radius="0.5rem" $direction="column" $gap="0.5rem" $padding="0.5rem">
                        <h2>Chat</h2>
                    </Container>
                    <Container $height="100%" $border="2px solid #008000" $radius="0.5rem" $direction="column" $gap="0.5rem" $padding="0.5rem">
                        <h2>Novo Local</h2>
                    </Container>
                </Container>
            </Container>
            <Container $width="100%" $height="20rem" $gap="0.5rem">
                <Container $height="100%" $border="2px solid #008000" $radius="0.5rem" $gap="0.5rem">
                    <h2>Lista de Locais</h2>
                </Container>
                <Container $height="100%" $border="2px solid #008000" $radius="0.5rem" $gap="0.5rem">
                    <h2>Lista de Locais</h2>
                </Container>
            </Container>
        </Container>
       
    );

};

export default Home;