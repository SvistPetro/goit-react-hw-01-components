const Statistics = (props) => {
    return (
        <section className="statistics">
            {props.title ? <h2 className="title">{props.title}</h2> : <h2 className="title">Upload stats</h2>}

            <ul className="stat-list">

            {props.stats.map(stats => {
                return <li key={stats.id} className="item"><span className="label">{stats.label}</span><span className="percentage">{stats.percentage}</span>
            </li>
            })}
            </ul>
        </section>
    )
}

export default Statistics;