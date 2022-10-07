import { AiOutlineUser } from 'react-icons/ai';
import styles from './Logotype.module.scss'

const Logotype = () => {
    return (
        <div className={styles.logotype}>
            <AiOutlineUser className={styles.logotype_red} />
            <span className={styles.logotype__text}>NIKITA SHEVCHIK</span>
        </div>
    )
}

export default Logotype;