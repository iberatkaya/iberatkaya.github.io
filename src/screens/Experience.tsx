import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Interweave from "interweave";
import { experiences } from "../experiences/experiences";
import "./Experience.css";

export default function Experience() {
  return (
    <VerticalTimeline>
      {experiences.map((i) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={i.date}
          iconStyle={{ backgroundColor: "white" }}
          icon={
            i.image !== undefined ? (
              <img
                src={i.image}
                width="100%"
                height="100%"
                style={{ borderRadius: "50%" }}
                alt={i.subtitle}
              />
            ) : undefined
          }
        >
          <h3
            style={{ paddingBottom: ".35rem", fontSize: "1.5rem" }}
            className="vertical-timeline-element-title"
          >
            {i.title}
          </h3>
          <h5 className="vertical-timeline-element-subtitle">
            {i.companyLink !== undefined ? (
              <a href={i.companyLink} target="_blank" rel="noopener noreferrer">
                {i.subtitle}
              </a>
            ) : (
              i.subtitle
            )}
          </h5>
          <p>
            {i.renderAsHTML ? (
              <Interweave content={i.description} />
            ) : (
              i.description
            )}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
}
