import { Link, animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from 'react-icons/io'
import { useState } from 'react';
import styles from './ScrollToTop.module.scss';

const ScrollToTop = () => {
    const [heightY, setHeightY] = useState(0);
    document.addEventListener('scroll', function () {
        setHeightY(window.scrollY)
    })
    return (
        <div>
            {heightY > 500 && <div className={styles.scrolltop} onClick={() => scroll.scrollToTop()}>
                <IoIosArrowUp />
            </div>}
        </div>
    )
}

export default ScrollToTop;