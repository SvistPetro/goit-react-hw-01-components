import css from './Statistics.module.css';

const Statistics = (props) => {
    return (
        <section className={css.statistics}>
            {props.title ? <h2 className={css.title}>{props.title}</h2> : <h2 className={css.title}>UPLOAD STATS</h2>}

            <ul className={css.list}>

            {props.stats.map(stats => {
                return <li key={stats.id} className={css.item}><span className={css.label}>{stats.label}</span><span className={css.percentage}>{stats.percentage}%</span>
            </li>
            })}
            </ul>
        </section>
    )
}

export default Statistics;