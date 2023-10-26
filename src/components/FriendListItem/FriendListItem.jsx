import css from './FriendListItem.module.css';

const FriendListItem = (props) => {
    return (
        <ul className={css.list}>
            {props.friends.map(friend => {
                return <li key={friend.id} className={css.item}>
                            {friend.isOnline ? <span className={css.isOnline}></span> : <span className={css.isOfline}></span>}
                            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                            <p className={css.name}>{friend.name}</p>
                        </li>
            })}
        </ul>
    )
}

export default FriendListItem;