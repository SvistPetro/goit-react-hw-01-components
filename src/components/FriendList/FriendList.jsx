import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (<ul className={css.list}>
                {friends.map(friend => {
                    return <FriendListItem 
                                id={friend.id} 
                                name={friend.name} 
                                avatar={friend.avatar} 
                                isOnline={friend.isOnline}
                            />
                })}
            </ul>
    )
}

export default FriendList;