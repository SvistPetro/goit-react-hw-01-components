import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (<ul className={css.list}>
                {friends.map(friend => {
                    return <li key={friend.id} className={css.item}>
                                <FriendListItem 
                                name={friend.name} 
                                avatar={friend.avatar} 
                                isOnline={friend.isOnline}
                            />
                            </li>
                    
                    
                })}
            </ul>
    )
}

export default FriendList;