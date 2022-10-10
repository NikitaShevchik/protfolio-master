import React from "react"
import ContentLoader from "react-content-loader"
import styles from './BlankCard.module.scss'

const BlankCard = () => {
    return (
        <div className={styles.blankcard}>
            <div className={styles.blankcard__content}>
                <ContentLoader
                    speed={2}
                    width={480}
                    height={367}
                    viewBox="0 0 480 367"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="0" y="26" rx="10" ry="10" width="480" height="290" />
                    <rect x="0" y="0" rx="10" ry="10" width="200" height="16" />
                    <rect x="0" y="331" rx="5" ry="5" width="80" height="36" />
                    <rect x="90" y="331" rx="5" ry="5" width="80" height="36" />
                    <rect x="180" y="331" rx="5" ry="5" width="80" height="36" />
                </ContentLoader>
            </div>
        </div>
    )
}

export default BlankCard;