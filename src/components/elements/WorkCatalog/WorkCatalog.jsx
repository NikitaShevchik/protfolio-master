import WorkCard from '../WorkCard/WorkCard';
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './WorkCatalog.module.scss';
import BlankCard from '../../UI/BlankCard/BlankCard';

function id() {
    return nanoid()
}

const WorkCatalog = () => {
    const [works, setWorks] = useState([]);

    useEffect(() => {
        axios.get('https://632c38cd5568d3cad880126d.mockapi.io/works').then(res => {
            setWorks(res.data.map(res => {
                return { ...res, id: id() }
            }))
        })
    }, [])

    return (
        <div className={styles.catalog} name="works">
            <div className={styles.catalog__title}>
                Мои работы
            </div>
            {works.length > 0 ?
                <div className={styles.catalog__items}>
                    {works.map(work => {
                        return <WorkCard key={work.id} name={work.name} stack={work.stack} link={work.link} img={work.img} />
                    })}
                </div>
                :
                <div className={styles.catalog__items}>
                    <BlankCard />
                    <BlankCard />
                    <BlankCard />
                    <BlankCard />
                </div>
            }
        </div >
    )
}

export default WorkCatalog;