import { Profile } from './profile-card/Profile';
import { Statistics } from './statistics/Statistics';
import {FriendsList} from './friend-list/FriendsList'
import user from 'path/user.json';
import data from 'path/data.json';
import friends from 'path/friends.json';

export const App = () => {
  return (
    <>
      <Profile
        key={user.name}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends ={friends} />
    </>
  );
};
