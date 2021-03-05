import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { Droppable, Draggable } from 'react-beautiful-dnd';


const PodcastList = ({ playlistPlay, pausePodcast, audio, localPodcasts, isPlaying, toggle }) => {
  return (
      <Droppable droppableId="local">
        {provided => (
            <div
              className="scroll"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {localPodcasts.length ? (
                localPodcasts.map((podcast, index) => (
                  <Draggable
                    key={podcast.id}
                    draggableId={`${podcast.name}`}
                    index={index}
                  >
                    {provided => (
                      <Card
                        className="shadow m-3 zoom"
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
                          <FontAwesomeIcon
                              icon={( podcast.audio === audio) && isPlaying? faPauseCircle : faPlayCircle}
                              onClick={() => playlistPlay(podcast, localPodcasts)}
                              className="cursor"
                            />
                          </div>
                        </Card.Body>
                      </Card>
                    )}
                  </Draggable>
                ))
              ) : !provided.placeholder && (
                <p>Drop items here</p>
            )}
              {provided.placeholder}
            </div>
        )}
      </Droppable>
  );
};

const mapStateToProps = state => ({
  localPodcasts: state.savedPodcasts,
});

export default connect(mapStateToProps)(PodcastList);
