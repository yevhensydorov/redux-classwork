import React from 'react';
import Player from './Player';
import Search from './Search';
import PlayerContainer from '../containers/PlayerContainer';
import {receiveId} from '../actions';
import PlaylistContainer from '../containers/PlaylistContainer';

const App = () => {
  return (
    <div className="row">
      <div className="col-12 d-flex justify-content-center">
        <PlayerContainer />
      </div>
      <div>
        <PlaylistContainer />
      </div>
      <div className="col-6 offset-3 d-flex justify-content-center">
        <Search />
      </div>
    </div>
  );
};



export default App;
