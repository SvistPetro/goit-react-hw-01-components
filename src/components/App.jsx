import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import FriendListItem from './FriendListItem/FriendListItem';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile 
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        />

      <Statistics stats={data}/>

      <FriendListItem friends={friends}/>

      <TransactionHistory items={transactions}/>
    </div>
  );
};