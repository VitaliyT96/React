import React from 'react';
import { NavLink } from 'react-router-dom'

import s from './Friends.module.css';

const Friends = (props) => {
	let path = '/friends/' + props.id;

	return <div className={s.friends}>
		<NavLink to={path}>
			<img className={s.avatar} src='https://www.pikpng.com/pngl/m/238-2387180_avatar-profile-png-icon-avatar-gamer-png-clipart.png' />
			{props.name}
		</NavLink>
	</div>
}
export default Friends;