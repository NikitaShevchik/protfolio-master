import WorkCard from '../WorkCard/WorkCard';
import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './WorkCatalog.module.scss';

function id() {
    return nanoid()
}

// const workData = [
//     { name: 'Sneakers Shop', stack: ['html', 'scss', 'js', 'react'], link: 'https://shevchiksneak.vercel.app/', img: "https://s1.hostingkartinok.com/uploads/images/2022/10/95e3c674b66de8412f3775a6107d11fe.jpg" },
//     { name: 'Netflix copy (first work in react)', stack: ['html', 'scss', 'js'], link: 'https://netflixcopy-flax.vercel.app/', img: "https://s1.hostingkartinok.com/uploads/images/2022/10/e2baa8b5bb5241a9ffa924b2c55a984e.jpg" },
//     { name: 'Game store', stack: ['css', 'js'], link: 'https://gamestore-two.vercel.app/', img: "https://s1.hostingkartinok.com/uploads/images/2022/10/afe0bef1c49d595854f041e83b17f489.jpg" },
// ]

// console.log(JSON.stringify(workData))

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
            <div className={styles.catalog__items}>
                {works.map(work => {
                    return <WorkCard key={work.id} name={work.name} stack={work.stack} link={work.link} img={work.img} />
                })}
            </div>
        </div >
    )
}

export default WorkCatalog;