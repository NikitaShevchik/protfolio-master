import React from "react";
import ContentLoader from "react-content-loader";
import styles from './BlankContactLink.module.scss'

const BlankContactLink = () => {
    return (
        <div className={styles.blankcontact}>
            <div className={styles.blankcontact__content}>
                <ContentLoader
                    speed={2}
                    width={200}
                    height={177}
                    viewBox="0 0 200 177"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                >
                    <rect x="50" y="0" rx="10" ry="10" width="100" height="100" />
                    <rect x="70" y="110" rx="0" ry="0" width="60" height="15" />
                </ContentLoader>
            </div>
        </div>
    )
}
export default BlankContactLink;