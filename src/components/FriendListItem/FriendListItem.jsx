import css from './FriendListItem.module.css';

const FriendListItem = ({ friends }) => {
    return (friends.map(friend => {
        return  <li key={friend.id} className={css.item}>
                    {friend.isOnline ? <span className={css.isOnline}></span> : <span className={css.isOffline}></span>}
                    <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
                    <p className={css.name}>{friend.name}</p>
                </li>
    }))
}

export default FriendListItem;