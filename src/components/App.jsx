import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import user from '../data/user.json';
import data from '../data/data.json';

export const App = () => {
  return (
    <div>
      React homework template, Petro!
      <Profile 
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        />

      <Statistics />
    </div>
  );
};
