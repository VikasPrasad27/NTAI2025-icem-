import React, { useState } from 'react';

const SubmissionPage = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const faqs = [
    {
      question: "How do I submit my abstract?",
      answer: "Submit your abstract via email to submission_ICCSAS25@bkkdc.edu.in with full author details, including names, email IDs, and mobile numbers."
    },
    {
      question: "What are the poster specifications?",
      answer: "Posters should be 36 × 48 inches (91 × 122 cm) in portrait orientation, with clear title, authors, methodology, results, and legible text."
    },
    
    {
      question: "What file format should I use?",
      answer: "Submit digital posters in PDF format, with file size not exceeding 10 MB. Name the file as 'LastName_FirstName_Poster.pdf'."
    },
    {
      question: "How to submit through CMT?",
      answer: "Access the Conference Management Toolkit (CMT) portal, create an account, and follow the submission guidelines for your paper."
    }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="submission-container">
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        .submission-container {
          font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #1a1f2e 0%, #2d364d 100%);
          min-height: 100vh;
          color: #ffffff;
          line-height: 1.6;
        }
        .content-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .track-card {
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
          border-radius: 1rem;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          padding: 30px;
          margin-bottom: 20px;
        }
        .track-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .section-title {
          color: #ffffff;
          border-bottom: 2px solid rgba(255,255,255,0.2);
          padding-bottom: 10px;
          margin-bottom: 20px;
          font-size: 2rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
        }
        .list-style {
          list-style-type: none;
          padding-left: 0;
        }
        .list-style li {
          position: relative;
          padding-left: 25px;
          margin-bottom: 10px;
          color: rgba(255,255,255,0.9);
        }
        .list-style li:before {
          content: '•';
          color: #ffffff;
          position: absolute;
          left: 0;
          font-weight: bold;
        }
        .cta-button {
          display: inline-block;
          background: white;
          color: #2563eb;
          padding: 12px 25px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: bold;
          transition: transform 0.3s ease;
        }
        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(255,255,255,0.3);
        }
        .faq-container {
          background: rgba(255,255,255,0.05);
          border-radius: 12px;
          padding: 30px;
        }
        .faq-item {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          margin-bottom: 15px;
          overflow: hidden;
        }
        .faq-question {
          background: rgba(255,255,255,0.1);
          color: #ffffff;
          padding: 15px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          font-weight: bold;
        }
        .faq-answer {
          padding: 15px;
          background: rgba(255,255,255,0.05);
          display: none;
          color: rgba(255,255,255,0.8);
        }
        .faq-answer.active {
          display: block;
        }
        @media (max-width: 768px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      
      <div className="content-wrapper">
        <div className="track-card">
          <h1 className="section-title">Poster Presentation Submission</h1>
          <div className="grid">
            <div>
              <h2 style={{color: '#ffffff'}}>1. Poster Specifications</h2>
              <ul className="list-style">
                <li>Dimensions: 36 × 48 inches (91 × 122 cm), portrait orientation</li>
                <li>Include title, authors, affiliations, abstract</li>
                <li>Methodology, results, conclusion details</li>
                <li>Legible text from 3 feet away</li>
                <li>High-contrast, clean layout</li>
              </ul>
            </div>
            
            <div>
              <h2 style={{color: '#ffffff'}}>2. Digital Poster Submission</h2>
              <ul className="list-style">
                <li>PDF format only</li>
                <li>Max file size: 10 MB</li>
                <li>Filename: 'LastName_FirstName_Poster.pdf'</li>
                <li>contact to: research@indiraicem.ac.in</li>
                <li>Deadline: 20 Febraury 2025</li>
              </ul>
            </div>
          </div>
         

        </div>

        <div className="track-card">
          <h2 className="section-title">Submission Guidelines</h2>
          <div className="grid">
            <div>
              <h3 style={{color: '#ffffff'}}>Abstract Submission</h3>
              <ul className="list-style">
                <li>Email: research@indiraicem.ac.in</li>
                <li>Full author and co-author details</li>
                <li>Provide email IDs and mobile numbers</li>
                <li>Match registration form names</li>
                <li>Acknowledgement within 7 days</li>
              </ul>
              <div className="text-center mt-4">
  <a 
    href="https://docs.google.com/uc?export=download&id=1ykMUkpWrwfS1Gx6Ld1rLScFrgCGGAInx" 
    className="cta-button" 
    download="AbstractTemplate.docx"
  >
    Download Sample Abstract
  </a>
</div>
            </div>
            
            <div>
              <h3 style={{color: '#ffffff'}}>Full Paper Submission</h3>
              <ul className="list-style">
                <li>Submit after abstract acceptance</li>
                <li>Follow website template</li>
                <li>No multiple submissions</li>
                <li>Plagiarism check required</li>
                <li>Registration fee: Visit Registration Page-</li>
              </ul>
              <div className="text-center mt-4">
  <a 
    href="https://docs.google.com/uc?export=download&id=1Sx1Qm_R1r-XeJXQPRCQ0BhPguf65mbjq" 
    className="cta-button" 
    download="AbstractTemplate.docx"
  >
    Download Sample Paper
  </a>
</div>

            </div>
          </div>
          
          <div className="grid mt-4">
            <div>
              <h3 style={{color: '#ffffff'}}>Paper Categories</h3>
              <ul className="list-style">
                <li>Research Papers: Original research in next-gen tech and AI</li>
                <li>Review Papers: Reviews of current advancements and future trends</li>
                <li>Case Studies: Real-world applications of sustainable technologies</li>
                <li>Posters: Visual presentations of innovative ideas and early research</li>
              </ul>
              
            </div>

            <div>
              <h3 style={{color: '#ffffff'}}>Formatting and Submission</h3>
              <ul className="list-style">
                <li>Submit papers in LaTeX or PDF format</li>
                <li>Follow the guidelines provided on the website</li>
                <li>Use high-quality images and diagrams</li>
                <li>Ensure clarity and coherence in writing</li>
              </ul>
              
            </div>
            
          </div>
          


          <div className="text-center mt-4">
            <a href="https://cmt3.research.microsoft.com/" className="cta-button">
              Submit via CMT Portal
            </a>
          </div>
        </div>
        <div className="track-card">
          <h1 className="section-title">Submission of full paper</h1>
         <p>Prospective authors will submit their research paper through Microsoft
         CMT portal: <a style={{color:"whitesmoke"}} href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2F">Click</a></p>
            </div>



        <div className="track-card">
          <h2 className="section-title">FAQs</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div
                  className="faq-question"
                  onClick={() => toggleDropdown(index)}
                >
                  {faq.question}
                  <span>{activeDropdown === index ? '-' : '+'}</span>
                </div>
                <div
                  className={`faq-answer ${activeDropdown === index ? 'active' : ''}`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubmissionPage;
