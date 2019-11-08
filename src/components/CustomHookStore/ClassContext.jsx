/* eslint-disable import/prefer-default-export */
import React, { createContext } from 'react';

const UserContext = createContext({
  favorites: {},
  updateFavorites: () => {},
});

export class UserProvider extends React.Component {
  updateFavorites = (value) => {
    this.setState({ favorites: value });
  };

  componenDidMount = () => {
    this.updateFavorites();
  };

  state = {
    favorites: {
     name: 'you suck',
     address: 'noneya',
     checked: ['yellow'],
    },
    updateFavorites: this.updateFavorites,
  };
 
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export const UserConsumer = UserContext.Consumer;
