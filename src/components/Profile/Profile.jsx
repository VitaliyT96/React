import React from 'react';
import MyPosts from './MyPosts/MyPosts.jsx';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo.jsx';



const Profile = (props) => {

	return <div >
		<ProfileInfo />
		<MyPosts posts={props.profilePage.posts}
		newPostText={props.profilePage.newPostText}
		dispatch={props.dispatch} />
	</div>
}

export default Profile;