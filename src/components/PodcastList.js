import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';

const PodcastList = ({ playPodcast, pausePodcast, audio, localPodcasts }) => {
  return (
    <div style={{ minWidth: '600px' }}>
      <Droppable droppableId="local">
        {provided => (
          <div>
            <div
              className="d-flex flex-column"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {localPodcasts.length ? (
                localPodcasts.map((podcast, index) => (
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
                ))
              ) : (
                <Draggable draggableId="fist" index={-1} isDragDisabled={true}>
                  {provided => (
                    <h1
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      Save Your Podcasts Here
                    </h1>
                  )}
                </Draggable>
              )}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    </div>
  );
};

const mapStateToProps = state => ({
  localPodcasts: state.savedPodcasts,
});

export default connect(mapStateToProps)(PodcastList);
