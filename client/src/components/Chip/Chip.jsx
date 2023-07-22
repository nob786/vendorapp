/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import "./Chip.css";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
// import { FaPlus, FaTimes } from "react-icons/fa";

function Chip({ label }) {
  const [showCloseIcon, setShowCloseIcon] = useState(false);

  const handleIconClick = () => {
    if (!showCloseIcon) {
      console.log("chip selected", label);
    }
    if (showCloseIcon) {
      console.log("chip removed", label);
    }
    setShowCloseIcon((prev) => !prev);
  };

  const handleRemoveChip = () => {
    setShowCloseIcon(false);
  };

  return (
    // <div className="chip-container">
    // <Container>
    //   <Row>
    // <Col lg={2}>
    <div className={showCloseIcon ? "chip chip-active" : "chip"}>
      {/* {showCloseIcon ? (
        <span onClick={handleRemoveChip}>
          x
        </span>
      ) : (
        <span onClick={handleIconClick}>
          +
        </span>
      )} */}
      <FontAwesomeIcon
        icon={faAdd}
        style={{
          // color: "#A0C49D",
          marginRight: "10px",
          transform: showCloseIcon && "rotate(45deg)",
          transition: "all 100ms",
        }}
        size="lg"
        onClick={handleIconClick}
      />
      <span className="roboto-regular-14px-information">{label}</span>
    </div>
    // </Col>
    //   </Row>
    // </Container>
    // </div>
  );
}

export default Chip;
