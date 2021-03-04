import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { connect } from 'react-redux';
import {
  addLocalPodcast,
  removeLocalPodcast,
  setLocalPodcasts,
} from '../store/actions/localPodcasts';
import { PodcastList, RemotePodcast } from './index';

class DragList extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnDragEnd = this.handleOnDragEnd.bind(this);
  }
  handleOnDragEnd(result) {
    if (!result.destination) return;
    let remotePodcasts = JSON.parse(JSON.stringify(this.props.podcasts));
    let [movedPodcast] = remotePodcasts.splice(result.source.index, 1);
    if (result.destination.droppableId === result.source.droppableId) {
      let originalPodcasts = JSON.parse(JSON.stringify(this.props.localPodcasts));
      let [reorderedPodcast] = originalPodcasts.splice(result.source.index, 1);
      if (!reorderedPodcast.id) return;
      originalPodcasts.splice(result.destination.index, 0, reorderedPodcast);
      this.props.setLocalPodcast(originalPodcasts);
    } else if (this.props.localPodcasts.includes(movedPodcast)) {
      return;
    } else {
      this.props.addLocalPodcast(movedPodcast);
      return;
    }
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.handleOnDragEnd}>
        <div
          style={{
            maxWidth: '600px',
            minWidth: '600px',
            borderStyle: 'solid',
            borderColor: '#7600a8',
          }}
          className="m-3 rounded shadow"
        >
          <RemotePodcast
            playPodcast={this.props.playPodcast}
            pausePodcast={this.props.pausePodcast}
            audio={this.props.audio}
            isPlaying={this.props.isPlaying}
          />
        </div>
        <div
          style={{
            maxWidth: '600px',
            minWidth: '600px',
            borderStyle: 'solid',
            borderColor: '#3668ff',
          }}
          className="m-3 rounded shadow"
        >
          <PodcastList
            playPodcast={this.props.playPodcast}
            pausePodcast={this.props.pausePodcast}
            audio={this.props.audio}
            isPlaying={this.props.isPlaying}
          />
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
