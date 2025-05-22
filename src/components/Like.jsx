import { GoHeart } from 'react-icons/go';
import { GoHeartFill } from 'react-icons/go';
import { useState } from 'react';

const Like = () => {
  const [liked, setLiked] = useState(false);
  return (
    <div>
      {liked ? (
        <GoHeartFill onClick={() => setLiked(!liked)} color="red" size={30} />
      ) : (
        <GoHeart onClick={() => setLiked(!liked)} size={30} />
      )}
    </div>
  );
};

export default Like;
