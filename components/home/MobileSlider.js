import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MobileDetect from "mobile-detect";

// import Card from "../components/card";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from '../../styles/components/home/MobileSlider.module.css';


class MobileSlider extends Component {
    constructor() {
        super();

        this.state = {
            isMoving: false,
            availWidth: 0
        };
    }

    componentDidMount() {
        this.setState(() => ({ availWidth: window.screen.availWidth }))
    }

    render() {
        const { classes } = this.props;
        const images = [
            "/sample4.jpg",
            "/sample1.jpg",
            "/sample2.jpg",
            "/sample3.jpg"
        ];
        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 3,
                slidesToSlide: 3
            },
            tablet: {
                breakpoint: { max: 1024, min: 464 },
                items: 2,
                slidesToSlide: 2
            },
            mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
                slidesToSlide: 1
            }
        };
        
        const setImageSize = (side) => {
            const mobile = this.state.availWidth >= 320 && this.state.availWidth < 800;
            const tablet = this.state.availWidth >= 800 && this.state.availWidth < 1280;
    
            switch (side) {
                case 'width':
                    if (mobile) {
                        console.log('MOBILE DETECTED')
                        return this.state.availWidth * .49;
                    } else if (tablet) {
                        console.log('TABLET DETECTED')
                        return this.state.availWidth * .9;
                    }
                case 'height':
                    if (mobile) {
                        console.log('MOBILE DETECTED')
                        return 190;
                    } else if (tablet) {
                        console.log('TABLET DETECTED')
                        return 290;
                    }
            }
        }

        return (
            <div className={classes.root}>
                <Carousel
                    ssr
                    additionalTransfrom={0}
                    centerMode={true}
                    autoPlay
                    autoPlaySpeed={3000}
                    showDots
                    sliderClass=""
                    slidesToSlide={3}
                    swipeable
                    responsive={responsive}
                    deviceType={'mobile'}
                    arrows={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside
                >
                    {images.map(image => {
                        return (
                            <Image
                                src={image}
                                width={!!setImageSize('width') ? setImageSize('width') : 200}
                                height={!!setImageSize('height') ? setImageSize('height') : 200}
                                key={image}
                                layout="intrinsic"
                                className={styles.sliderImage}
                            />
                        );
                    })}
                </Carousel>
            </div>
        );
    }
}

const style = () => ({
    root: {
        width: "100%"
    }
});

export default withStyles(style)(MobileSlider);