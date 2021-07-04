import { useState } from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

import ReviewForm from './ReviewForm';
import styles from '../styles/components/Reviews.module.css';


const Reviews = () => {
    const [value, setValue] = useState(5);

    return (
        <div className={styles.reviewContainer}>
            <div className={styles.reveiws}>
                <div className={styles.reviewItem}>
                    <div className={styles.avatar}>T</div>
                    <div className={styles.review}>
                        <div className={styles.stars}>
                            <Box component="fieldset" borderColor="transparent">
                                <Rating
                                    name="simple-controlled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);
                                    }}
                                />
                            </Box>
                        </div>
                        <span className={styles.reviewInfo}><b>ADMIN</b>{" "}<p>- October 10, 2018</p></span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum dapibus, orci in vestibulum sagittis, augue enim faucibus ex, eget tempor purus tellus non nibh. Suspendisse aliquam congue sapien. Vestibulum ut aliquet justo. Suspendisse ut pretium mi. Quisque pulvinar nulla vitae nibh posuere, nec sollicitudin metus gravida. Nullam quis turpis felis. Donec viverra risus vitae ligula pretium, in rhoncus dolor mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque imperdiet felis at libero sollicitudin vehicula. Proin dictum consectetur pulvinar.</p>
                        <div className={styles.mark}>
                            <div className={styles.innerMark}></div>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewForm /><br />
        </div>
    )
}

export default Reviews;