import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { isMobile } from "react-device-detect";
import Interweave from "interweave";

interface Props {
  items: string[];
}

function AppStatisticsCard(props: Props) {
  return (
    <Card
      style={{
        width: isMobile ? "95vw" : "58vw",
        margin: 8,
        borderColor: "#ccc",
        borderWidth: 1,
      }}
    >
      <Card.Header style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
        <Card.Title
          style={{
            textAlign: "center",
            fontSize: "1.5rem",
            paddingTop: "0.5rem",
          }}
        >
          App Statistics
        </Card.Title>
      </Card.Header>
      <Card.Body style={{ padding: "0.1rem 0 0.1rem 0" }}>
        <ListGroup variant="flush">
          {props.items.map((i) => (
            <ListGroup.Item>
              <Interweave content={i} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default AppStatisticsCard;
