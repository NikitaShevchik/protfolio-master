import styles from './ContactLink.module.scss'



const ContactLink = ({ icon, name, link }) => {

    return (
        <a className={styles.contactcard} href={link} target="blank">
            <div className={styles.contactcard__content}>
                <div className={styles.contactcard__logo}>
                    <i className={`bx bxl-${icon}`} ></i>
                </div>
                <div className={styles.contactcard__title}>
                    {name}
                </div>
            </div>
        </a>
    )
}

export default ContactLink;

// github, linkedin, telegram, mail, vk