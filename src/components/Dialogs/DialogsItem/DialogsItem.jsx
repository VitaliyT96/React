import React from 'react';
import { NavLink } from 'react-router-dom'

import s from './../Dialogs.module.css';

const DialogsItem = (props) => {
	let path = '/dialogs/' + props.id;

	return <div className={s.dialog + ' ' + s.active}>
		<NavLink to={path}>
			<img className={s.avatar} src='https://www.pikpng.com/pngl/m/238-2387180_avatar-profile-png-icon-avatar-gamer-png-clipart.png' />
			{props.name}
		</NavLink>
	</div>
}
export default DialogsItem;