import React from 'react';
import './ConferanceTracks.css';
import Footer from '../Footer/Footer';

const ConferenceTracks = () => {
  const trackData = [
    {
      title: "Marketing Strategy and Digital Marketing",
      topics: [
        "Consumer Behaviour",
        "Brand Management",
        "Marketing Research",
        "Digital Marketing",
        "Customer Relationship Management"
      ]
    },
    {
      title: "Future of Finance",
      topics: [
        "Corporate Finance",
        "Financial Markets",
        "Investment Analysis",
        "Financial Reporting",
        "Risk Management"
      ]
    },
    {
      title: "Modern Human Resource Management",
      topics: [
        "Talent Management",
        "Organizational Behavior",
        "Employee Engagement",
        "Diversity And Inclusion",
        "Compensation & Benefits"
      ]
    },
    {
      title: "Entrepreneurship & Start-Ups",
      topics: [
        "Venture Capital",
        "Start-Up Management",
        "Social Entrepreneurship",
        "Innovation Ecosystems",
        "Entrepreneurship Education"
      ]
    },
    {
      title: "Operations",
      topics: [
        "Supply Chain Management",
        "Operations Management",
        "Quality Management",
        "Project Management",
        "Process Optimization"
      ]
    },
    {
      title: "Strategic Management And Innovation",
      topics: [
        "Corporate Strategy",
        "Innovation Management",
        "Change Management",
        "Business Model Innovation",
        "Strategic Planning"
      ]
    },
    {
      title: "Sustainability & Social Entrepreneurship",
      topics: [
        "Corporate Social Responsibility",
        "Sustainable Business Models",
        "Social Impact",
        "Environmental Management",
        "Ethical Business Practices"
      ]
    },
    {
      title: "Digital Transformation - Analytics, IoT, ML",
      topics: [
        "Digital Strategy",
        "Data Analytics",
        "IoT Applications",
        "Machine Learning Implementation",
        "Digital Innovation"
      ]
    }
  ];

  return (
    <div>
      <div className="tracks-container">
      <div className="tracks-background-pattern"></div>
      <h1 className="tracks-title">TRACKS</h1>
      <div className="tracks-grid">
        {trackData.map((track, index) => (
          <div key={index} className="track-card">
            <div className="track-header">
              <div className="header-accent"></div>
              <h2>{track.title}</h2>
            </div>
            <div className="track-content">
              <ul className="topic-list">
                {track.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="topic-item">
                    <span className="bullet"></span>
                    {topic}
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        ))}
      </div>
      
    </div>
    <Footer/>
    </div>
  );
};

export default ConferenceTracks;