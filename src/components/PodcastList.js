import React, {useState} from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const PodcastList = ({
  allPodcasts,
  playPodcast,
  pausePodcast,
  audio,
  localPodcasts,
  local,
}) => {
  let podcastList = allPodcasts;
  const [testPodcast, setTestPodcast] = useState(podcastList)

  function handleOnDragEnd(result) {
    if(!result.destination) return
    const originalPodcasts = Array.from(testPodcast)
    const [reorderedPodcast] = originalPodcasts.splice(result.source.index, 1)
    originalPodcasts.splice(result.destination.index, 0, reorderedPodcast)
    setTestPodcast(originalPodcasts)
  }
  if (!podcastList.length) return <h3>Loading</h3>;
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="remote">
        {(provided) => (
                  <div>

    <div className="d-flex flex-column" {...provided.droppableProps} ref={provided.innerRef}>
      {testPodcast.map((podcast, index) => (
        <Draggable key={podcast.id} draggableId={podcast.name} index={index}>
          {(provided) => (
            <Card

              className="shadow m-3"
              border="light"
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
            >
              <Card.Body className="m-1 d-flex flex-row align-items-center">
                <Card.Img
                  style={{ width: '25%' }}
                  src={podcast.image}
                  alt={podcast.title}
                />
                <div className="d-flex flex-column">
                  <Card.Title className="mb-1">{podcast.title}</Card.Title>
                  <Card.Text>
                    <small>{podcast.name}</small>
                  </Card.Text>
                  <Card.Text>{podcast.description}</Card.Text>
                </div>
                <div>
                  {!(audio === podcast.audio) ? (
                    <FontAwesomeIcon
                      icon={faPlayCircle}
                      onClick={() => playPodcast(podcast.audio)}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faPauseCircle}
                      onClick={() => pausePodcast(podcast.audio)}
                    />
                  )}
                </div>
              </Card.Body>
            </Card>
          )}
        </Draggable>
      ))}
      {provided.placeholder}
    </div>
      </div>

    )}
    </Droppable>
    </DragDropContext>
  );
};

const mapStateToProps = state => ({
  allPodcasts: state.podcasts,
  localPodcasts: [],
});

export default connect(mapStateToProps)(PodcastList);
