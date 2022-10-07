import styles from './Contacts.module.scss'

const Contacts = () => {
    return (
        <div className={styles.contacts} name="contacts">
            <div className={styles.contacts__title}>
                Контакты
            </div>
            <div className={styles.contacts__subtitle}>
                Как со мной связаться?
            </div>
        </div>
    )
}

export default Contacts;