import axios from 'axios';
import { useEffect, useState } from 'react';
import BlankContactLink from '../../UI/BlankContactLink/BlankContactLink';
import ContactLink from '../../UI/ContactLinks/ContactLink';
import styles from './Contacts.module.scss'

const contactsData = [
    {
        id: 0,
        name: "linkedin",
        link: "https://www.linkedin.com/in/nikita-shevchik-74133422a/"
    },
    {
        id: 1,
        name: "telegram",
        link: "https://t.me/howtonik"
    },
    {
        id: 2,
        name: "gmail",
        link: "mailto:shevchik.nikita@gmail.com"
    },
    {
        id: 3,
        name: "github",
        link: "https://github.com/NikitaShevchik"
    },
    {
        id: 4,
        name: "vk",
        link: "https://vk.com/nikitaaboss"
    }
]

const Contacts = () => {
    let [contacts, setContacts] = useState([])
    useEffect(() => {
        axios.get('https://632c38cd5568d3cad880126d.mockapi.io/contacts').then(res => {
            setContacts(res.data)
        })
    }, [])

    return (
        <div className={styles.contacts} name="contacts">
            <div className={styles.contacts__title}>
                Контакты
            </div>
            <div className={styles.contacts__subtitle}>
                Как со мной связаться?
            </div>
            <div className={styles.contacts__items}>
                {contacts.length > 0 ?
                    contacts.map(contact => {
                        return <ContactLink key={contact.id} icon={contact.name} name={contact.name} link={contact.link} />
                    })
                    :
                    <div className={styles.contacts__items}>
                        <BlankContactLink />
                        <BlankContactLink />
                        <BlankContactLink />
                        <BlankContactLink />
                    </div>
                }
                {/* {contacts.map(contact => {
                    return <ContactLink key={contact.id} icon={contact.name} name={contact.name} link={contact.link} />
                })} */}
            </div>
        </div>
    )
}

export default Contacts;