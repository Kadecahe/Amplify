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
    let remotePodcasts = [...this.props.podcasts];
    let [movedPodcast] = remotePodcasts.splice(result.source.index, 1);
    let savedPodcast = Object.create(movedPodcast);
    console.log(result);
    if (result.destination.droppableId === result.source.droppableId) {
      let originalPodcasts = [...this.props.localPodcasts];
      let [reorderedPodcast] = originalPodcasts.splice(result.source.index, 1);
      if (!reorderedPodcast.id) return;
      originalPodcasts.splice(result.destination.index, 0, reorderedPodcast);
      this.props.setLocalPodcast(originalPodcasts);
    } else if (this.props.localPodcasts.includes(savedPodcast)) {
      return;
    } else {
      this.props.addLocalPodcast(savedPodcast);
      return;
    }
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.handleOnDragEnd}>
        <div
          style={{
            maxWidth: '50%',
            minWidth: '600px',
            borderStyle: 'solid',
            borderColor: 'purple',
          }}
          className="m-3 rounded shadow"
        >
          <RemotePodcast
            playPodcast={this.props.playPodcast}
            pausePodcast={this.props.pausePodcast}
            audio={this.props.audio}
          />
        </div>
        <div
          style={{
            maxWidth: '50%',
            borderStyle: 'solid',
            borderColor: '#00A0EE',
          }}
          className="m-3 rounded shadow"
        >
          <PodcastList
            playPodcast={this.props.playPodcast}
            pausePodcast={this.props.pausePodcast}
            audio={this.props.audio}
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
