import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import tips from '../../data/tips';
import Container from '../Container';
import { CarouselTitle, CarouselDescription, CarouselContainer } from './styles';

import bg from '../../assets/images/bg.png';

class TipCarousel extends Component {
    render() {
        return (
        
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} showArrows={false} showIndicators={false} interval={5000} transitionTime={500} width={'100%'} emulateTouch={true} swipeable={true} stopOnHover={false}>
                {tips.map((tip, index) => (
                    <CarouselContainer key={index}>
                        <Container $width="70%" $height="100%" $direction="column" $align="center" $justify="center" $bgImage={`url(${bg})`} $bgSize="cover">
                            <CarouselTitle>{tip.title}</CarouselTitle>
                            <CarouselDescription>{tip.description}</CarouselDescription>
                        </Container>
                        <Container $width="30%" $height="100%" $direction="column" $align="center" $justify="center">
                            <img src={tip.image} alt={tip.title} />
                        </Container>
                    </CarouselContainer>
                ))}
            </Carousel>

        );

    }

};

export default TipCarousel;
        