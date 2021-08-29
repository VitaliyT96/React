import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
	return (
		<div className={s.item}>
			<img src='https://www.pikpng.com/pngl/m/238-2387180_avatar-profile-png-icon-avatar-gamer-png-clipart.png' />
			{props.message}
			<div>
				<span>like</span>{props.likesCount}
			</div>
		</div>)

}

export default Post;
