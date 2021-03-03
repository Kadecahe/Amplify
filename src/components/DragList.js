import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { PodcastList } from './index';

class DragList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      selected: '',
    };
    this.reorder = this.reorder.bind(this);
    this.move = this.move.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.getList = this.getList.bind(this);
  }
  reorder(list, startIndex, endIndex) {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);

    return list;
  }

  move(source, destination, droppableSource, droppableDestination) {
    const sourceClone = source.slice();
    const destClone = destination.slice();
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  }

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;

    // dropped outside the list add the redux call to remove it
    if (!destination) {
      return;
    }
    //also check to see if it is the right list or left list for reordering
    if (source.droppableId === destination.droppableId) {
      const items = this.reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );

      let state = { items };

      if (source.droppableId === 'droppable2') {
        state = { selected: items };
      }
      //make dispatch to redux to make this part of localstorage
      this.setState(state);
    } else {
      const result = this.move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId),
        source,
        destination
      );

      this.setState({
        items: result.droppable,
        selected: result.droppable2,
      });
    }
  };

  render() {
    return (
      <>
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
        {/* <div
          style={{
            maxWidth: '50%',
            minWidth: '600px',
            borderStyle: 'solid',
            borderColor: '#00A0EE',
          }}
          className="m-3 rounded shadow"
        >
          <PodcastList
            playPodcast={this.props.playPodcast}
            pausePodcast={this.props.pausePodcast}
            audio={this.props.audio}
            local={true}
          />
        </div> */}
      </>
    );
  }
}

export default DragList;
