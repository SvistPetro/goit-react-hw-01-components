const FriendListItem = (props) => {
    return (
        <ul className="friend-list">
            {props.friends.map(friend => {
                return <li key={friend.id} className="item">
                            {friend.isOnline ? <span className="status isOnline">123</span> : <span className="status isOfline">123</span>}
                            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                            <p className="name">{friend.name}</p>
                        </li>
            })}
        </ul>
    )
}

export default FriendListItem;