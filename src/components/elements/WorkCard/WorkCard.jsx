import React from "react";
import styles from './WorkCard.module.scss'

const WorkCard = ({ name, stack, link, img }) => {
    return (
        <div className={styles.workcard}>
            <div className={styles.workcard__content}>
                <div className={styles.workcard__name}>
                    <a href={link} target='blank' className={styles.workcard__link}>{name}</a>
                </div>
                <div className={styles.workcard__image}>
                    <a href={link} target='blank' className={styles.workcard__link}>
                        <img src={img} alt={name} />
                    </a>
                </div>
                <div className={styles.workcard__stack}>
                    {stack.map(technology => {
                        return <div key={technology} className={styles.workcard__technology}>{technology}</div>
                    })}
                </div>
            </div>
        </div>
    )
}

export default WorkCard;