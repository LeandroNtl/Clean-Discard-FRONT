import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import tips from '../../data/tips';
import Container from '../Container';
import { CarouselTitle, CarouselDescription, CarouselContainer } from './styles';

class TipCarousel extends Component {
    render() {
        return (
        
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false} showIndicators={false} interval={5000} transitionTime={500} width={'80vw'} emulateTouch={true} swipeable={true} stopOnHover={false}>
                {tips.map((tip, index) => (
                    <CarouselContainer key={index}>
                        <Container $width="70%" $height="100%" $direction="column" $align="center" $justify="center">
                            <CarouselTitle>{tip.title}</CarouselTitle>
                            <CarouselDescription>{tip.description}</CarouselDescription>
                        </Container>
                        <Container $width="30%" $height="100%" $direction="column" $align="center" $justify="center">
                            <img src={tip.image} alt={tip.title} style={{ borderRadius: "0.5rem" }} />
                        </Container>
                    </CarouselContainer>
                ))}
            </Carousel>

        );

    }

};

export default TipCarousel;
        