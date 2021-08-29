import React from 'react';
import s from './../Dialogs.module.css';

const Message =(props)=>{

	return <div className={s.massege}>
				{props.massege}
			</div>
}

export default Message;