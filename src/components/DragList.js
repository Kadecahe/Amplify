import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import {
  addLocalPodcast,
  removeLocalPodcast,
  setLocalPodcasts,
} from '../store/actions/localPodcasts';
import { RemotePodcast } from './index';
import LocalPlayer from './Player/localPlayer'

class DragList extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
  }

  handleOnDragEnd(result) {
    if (!result.destination) {
      if(result.source.droppableId === 'local') {
        this.props.removeLocalPodcast(result.source.index);
      }
      return;
    }

    let remotePodcasts = JSON.parse(JSON.stringify(this.props.podcasts));
    let [movedPodcast] = remotePodcasts.splice(result.source.index, 1);

    if (result.destination.droppableId === result.source.droppableId) {
      let originalPodcasts = JSON.parse(JSON.stringify(this.props.localPodcasts));
      let [reorderedPodcast] = originalPodcasts.splice(result.source.index, 1);
      originalPodcasts.splice(result.destination.index, 0, reorderedPodcast);
      this.props.setLocalPodcast(originalPodcasts);
    } else {
      //Let's warn the user if they try to add the same podcast twice
      //make sure the index is one ahead
      result.destination.index = this.props.localPodcasts.length
      if(this.props.localPodcasts.some(podcast => (
        podcast.id === movedPodcast.id
      ))) {
        alert('This podcast is already in your saved collection')
        return
      }
      this.props.addLocalPodcast(movedPodcast);
      return;
    }
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.handleOnDragEnd}>
        <div
          style={{
            borderStyle: 'solid',
            borderColor: '#7600a8',
          }}
          className="m-3 rounded shadow container"
        >
          <div className='mt-1 section'>
          <h3>Featured Podcasts</h3>
          </div>


          <RemotePodcast
            playPodcast={this.props.playPodcast}
            pausePodcast={this.props.pausePodcast}
            audio={this.props.audio}
            isPlaying={this.props.isPlaying}
          />
        </div>
        <div
          style={{
            borderStyle: 'solid',
            borderColor: '#3668ff',
          }}
          className="m-3 rounded shadow container"
        >
          <div className='mt-1 section section-local'>
          <h3>Saved Podcasts</h3>
          </div>
          <LocalPlayer />
        </div>
      </DragDropContext>
    );
  }
}

const mapStatetoProps = state => ({
  localPodcasts: state.savedPodcasts,
  podcasts: state.podcasts,
});

const mapDispatchToProps = dispatch => ({
  setLocalPodcast: podcasts => dispatch(setLocalPodcasts(podcasts)),
  addLocalPodcast: podcast => dispatch(addLocalPodcast(podcast)),
  removeLocalPodcast: id => dispatch(removeLocalPodcast(id)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(DragList);
