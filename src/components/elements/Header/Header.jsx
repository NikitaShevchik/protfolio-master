import Logotype from '../../UI/Logotype/Logotype';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import styles from './Header.module.scss';
import Contacts from '../Contacts/Contacts';

const Header = () => {
    return (
        <div className={styles.header}>
            <Logotype />
            <ul className={styles.header__items}>
                <li className={styles.header__item} onClick={() => scroll.scrollToTop()}>Обо мне</li>
                <li className={styles.header__item} >
                    <Link activeClass='active' spy={true} smooth={true} to="works">Мои работы</Link>
                </li>
                <li className={styles.header__item} >
                    <Link activeClass='active' spy={true} smooth={true} to="contacts">Контакты</Link>
                </li>


            </ul>
        </div>
    )
}

export default Header;