import React from 'react';
import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css';
import DialogsItem from './DialogsItem/DialogsItem'
import Message from './Message/Message'

const Dialogs = (props) => {

	let newMessage = React.createRef()
	let sendMessage = () => {
		let text = newMessage.current.value
		alert(text)
	}

	let dialogsElement = props.state.dialogs.map(d => <DialogsItem name={d.name} id={d.id} />)

	let messagesElelments = props.state.messages.map(m => <Message massege={m.massege} />)

	return (
		<div className={s.dialogs}>
			<div className={s.dialogsItem}>
				{dialogsElement}
			</div>
			<div className={s.masseges}>
				{messagesElelments}
				<textarea ref={newMessage}></textarea><button onClick={sendMessage}>Send</button>
			</div>
		</div>
	)
}

export default Dialogs;