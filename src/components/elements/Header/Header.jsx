import Logotype from '../../UI/Logotype/Logotype';
import { Link } from 'react-scroll'
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <Logotype />
            <ul className={styles.header__items}>
                <li className={styles.header__item}>
                    <Link activeClass='active' spy={true} smooth={true} to="about">Обо мне</Link>
                </li>
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