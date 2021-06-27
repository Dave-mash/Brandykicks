import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MobileDetect from "mobile-detect";

// import Card from "../components/card";
import Image from "next/image";
import Carousel from "react-multi-carousel";
// import CarouselWithCustomDots from "../components/carousel-with-custom-dots";
// import "../style.css";
import "react-multi-carousel/lib/styles.css";

class MobileSlider extends Component {
    static getInitialProps({ req }) {
        let userAgent;
        let deviceType;

        if (req) {
            userAgent = req.headers["user-agent"];
        } else {
            userAgent = navigator.userAgent;
        }

        const md = new MobileDetect(userAgent);

        if (md.tablet()) {
            deviceType = "tablet";
        } else if (md.mobile()) {
            deviceType = "mobile";
        } else {
            deviceType = "desktop";
        }

        return { deviceType };
    }

    state = { isMoving: false };

    render() {
        const { classes } = this.props;
        const images = [
            "/sample4.jpg",
            "/sample1.jpg",
            "/sample2.jpg",
            "/sample3.jpg"
        ];
        const texts = [
            "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
            "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
            "React Carousel with Server Side Rendering Support – Part 1",
            "React Carousel with Server Side Rendering Support – Part 2",
            "Flutter Xcode couldn’t find any iOS App Development provisioning profiles"
        ];
        const fakerData = Array(12)
            .fill(0)
            .map((item, MobileSlider) => {
                return {
                    image: images[MobileSlider],
                    headline: "w3js -> web front-end studio",
                    description: texts[MobileSlider] || texts[0]
                };
            });
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
        return (
            <div className={classes.root}>
                <Typography className={classes.title} variant="h6" color="grey">
                    <a target="_blank" href="https://w3js.com/">
                        A Carousel supports multiple items and server-side rendering
          </a>
                </Typography>
                <Typography className={classes.title} variant="p" color="grey">
                    <a target="_blank" href="https://w3js.com/">
                        This is the server-side rendering demo of the libiary, try to
                        disable the JavaScript in your browser, you will still see our
                        Carousel renders nicely
          </a>
                </Typography>
                {/* <Carousel
                    swipeable={false}
                    draggable={false}
                    responsive={responsive}
                    ssr
                    infinite={false}
                    beforeChange={() => this.setState({ isMoving: true })}
                    afterChange={() => this.setState({ isMoving: false })}
                    containerClass="first-carousel-container container"
                    deviceType={this.props.deviceType}
                >
                    {fakerData.map(card => {
                        return <Card isMoving={this.state.isMoving} {...card} />;
                    })}
                </Carousel> */}

                <Carousel
                    /*
                    swipeable={false}
                    draggable={false}
                    */
                    responsive={responsive}
                    ssr
                    showDots
                    infinite
                    containerClass="container-with-dots"
                    itemClass="image-item"
                    deviceType={this.props.deviceType}
                >
                    {images.map(card => {
                        return <Image src={card} alt={`slider image`} key={card} width={50} height={50} layout="responsive" />;
                    })}
                </Carousel>
                {/* <CarouselWithCustomDots deviceType={this.props.deviceType} /> */}
            </div>
        );
    }
}

const styles = () => ({
    root: {
        textAlign: "center"
    },
    title: {
        maxWidth: 400,
        margin: "auto",
        marginTop: 10
    }
});

export default withStyles(styles)(MobileSlider);