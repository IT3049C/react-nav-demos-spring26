import "./EventDetails.css";
import { campusEvents } from "../data/events";
import { Link, useParams } from "react-router-dom";

export function EventDetails() {
  const { eventId } = useParams();
  const event = campusEvents.find((e) => e.id == eventId);

  if (!event)
    return (
      <>
        <p>Event does not exist</p>
        <Link to="/events">Go back to the events list</Link>
      </>
    );

  return (
    <div className="event-details-container">
      {/* Header Section */}
      <div className="header-section">
        <h1 className="event-title">{event.name}</h1>
        <hr className="header-divider" />
      </div>

      {/* Split Content Section */}
      <div className="split-content">
        {/* Image Section */}
        <div className="image-section">
          <img src={event.image} alt={event.name} className="event-image" />
        </div>

        {/* Details Section */}
        <div className="details-section">
          <p className="event-description">{event.description}</p>

          {/* Tags Section */}
          <div className="tags-section">
            <h3 className="tags-title">Tags</h3>
            <div className="tags-list">
              {event.tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="details-list">
            <div className="detail-item">
              <span className="detail-label">📅 Date:</span>
              <span className="detail-value">{event.date}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">🕐 Time:</span>
              <span className="detail-value">{event.time}</span>
            </div>

            <div className="detail-item">
              <span className="detail-label">📍 Location:</span>
              <span className="detail-value">{event.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
