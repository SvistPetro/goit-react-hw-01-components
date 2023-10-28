import FriendListItem from '../FriendListItem/FriendListItem';
import css from './FriendList.module.css';

const FriendList = ({friends}) => {
    return (<ul className={css.list}>
                <FriendListItem friends={friends} />
            </ul>
    )
}

export default FriendList;