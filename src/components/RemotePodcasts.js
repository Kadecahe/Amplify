import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const RemotePodcast = ({ allPodcasts, playPodcast, pausePodcast, audio }) => {
  if (!allPodcasts.length) return <h3>Loading</h3>;
  return (
    <div>
      <Droppable droppableId="remote" isDropDisabled={true}>
        {provided => (
          <div>
            <div
              className="d-flex flex-column"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {allPodcasts.map((podcast, index) => (
                <Draggable
                  key={podcast.id}
                  draggableId={podcast.name}
                  index={index}
                >
                  {provided => (
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
                          <Card.Title className="mb-1">
                            {podcast.title}
                          </Card.Title>
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
    </div>
  );
};

const mapStateToProps = state => ({
  allPodcasts: state.podcasts,
});

export default connect(mapStateToProps)(RemotePodcast);
