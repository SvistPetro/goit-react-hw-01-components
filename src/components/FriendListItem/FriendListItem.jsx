import css from './FriendListItem.module.css';

const FriendListItem = ({ id, name, avatar, isOnline }) => {
    return  <li key={id} className={css.item}>
                {isOnline ? <span className={css.isOnline}></span> : <span className={css.isOffline}></span>}
                <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={css.name}>{name}</p>
            </li>
}

export default FriendListItem;