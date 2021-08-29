let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: '23' },
        { id: 2, message: 'Hi, its my first post', likesCount: '42' },
      ],
      newPostText: 'it-kamasutra',
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: 'Vitaha' },
        { id: 2, name: 'Elon Musk' },
        { id: 3, name: 'Tony Stark' },
        { id: 4, name: 'Rick Sanchez' },
      ],
      messages: [
        { id: 1, massege: 'SpaseX into the Mars' },
        { id: 2, massege: 'Genius billionaire playboy ...' },
        { id: 3, massege: 'Morty!' },
      ],
    },
    navBar: {
      friends: [
        { id: 1, name: 'Elon Musk' },
        { id: 2, name: 'Tony Stark' },
        { id: 3, name: 'Rick Sanchez' },
      ],
    },
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscriber(observer) {
    this._callSubscriber = observer;
  },
  dispath(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 3,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

export default store;
window.store = store;
