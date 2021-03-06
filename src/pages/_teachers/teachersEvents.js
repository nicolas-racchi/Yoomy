import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Components
import Head from "../../components/head";
import NewEvent from "../../components/_teachers/_teachersEvents/newEvent";
import AllEvents from "../../components/_teachers/_teachersEvents/allEvents2";
import EditEvent from "../../components/_teachers/_teachersEvents/editEvent";

const TeachersEvents = () => {
  // conditional functionality :: aka buttons to expose different functionality
  const [showNewEvent, setShowNewEvent] = useState(false);
  const [showAllEvents, setShowAllEvents] = useState(false);

  // ID of the event in "editing mode"
  const [currentlyEditing, setCurrentlyEditing] = useState(null);

  return (
    <>
      <Head title="Eventi" />
      <EventsWrapper>
        <h2 className="title">Azioni disponibili</h2>
        <div className="buttons">
          <Button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setShowNewEvent(!showNewEvent);
              setShowAllEvents(false);
            }}
          >
            Crea un evento
          </Button>
          <Button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              setShowAllEvents(!showAllEvents);
              setShowNewEvent(false);
            }}
          >
            Visualizza i tuoi prossimi eventi
          </Button>
        </div>
        {showNewEvent && <NewEvent setShowNewEvent={setShowNewEvent} />}
        {showAllEvents && (
          <AllEvents setCurrentlyEditing={setCurrentlyEditing} />
        )}
        {showAllEvents && currentlyEditing !== null && (
          <EditEvent
            currentlyEditing={currentlyEditing}
            setCurrentlyEditing={setCurrentlyEditing}
          />
        )}
      </EventsWrapper>
    </>
  );
};

export default TeachersEvents;

const EventsWrapper = styled.div`
  .title {
    margin: 0 0 15px 25px;
    font-weight: 500;
    font-size: 1.4rem;
  }

  .buttons {
    position: relative;
    margin-left: 25px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

const Button = styled(motion.button)`
  padding: 10px 20px;
  background: ${(props) => props.theme.lightgray};
  border: 1px solid lightgray;
  box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  margin-right: 20px;

  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
  }
`;
