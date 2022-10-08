import { Link, animateScroll as scroll } from 'react-scroll';
import { IoIosArrowUp } from 'react-icons/io'
import styles from './ScrollTop.module.scss';

const ScrollTop = () => {
    return (
        <div className={styles.scrolltop} onClick={() => scroll.scrollToTop()}>
            <IoIosArrowUp />
        </div>
    )
}

export default ScrollTop;