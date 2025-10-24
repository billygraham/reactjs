import React, { useState } from 'react';

const PartnerDirectory = () => {
  const [filterSolutions, setFilterSolutions] = useState(false);

  const partnersData = [
    {
      name: 'Salesforce',
      type: 'Technology Partner',
      solutions: 'CRM Integration with OpenText Content Suite, Sales Cloud Enhancements'
    },
    {
      name: 'Amazon Web Services (AWS)',
      type: 'Technology Partner',
      solutions: 'Cloud Deployment for OpenText Analytics, Secure Storage Solutions'
    },
    {
      name: 'Microsoft',
      type: 'Technology Partner',
      solutions: 'Azure Integration for OpenText Security, Microsoft 365 Collaboration'
    },
    {
      name: 'Accenture',
      type: 'Channel Partner',
      solutions: 'Consulting for Digital Transformation, OpenText Implementation Services'
    },
    {
      name: 'Deloitte',
      type: 'Channel Partner',
      solutions: ''
    },
    {
      name: 'PwC',
      type: 'Service Provider',
      solutions: 'DevOps and Cybersecurity with OpenText, Data Analytics Solutions'
    },
    {
      name: 'SAP',
      type: 'Technology Partner',
      solutions: 'ERP Integration, S/4HANA Enhancements'
    },
    {
      name: 'Oracle',
      type: 'Technology Partner',
      solutions: 'Database Optimization, Cloud Infrastructure'
    },
    {
      name: 'Google Cloud',
      type: 'Technology Partner',
      solutions: 'AI Enhancements for OpenText, BigQuery Analytics'
    },
    {
      name: 'IBM',
      type: 'Technology Partner',
      solutions: 'Hybrid Cloud Solutions, Watson AI Integration'
    },
    {
      name: 'Cognizant',
      type: 'Channel Partner',
      solutions: ''
    },
    {
      name: 'Capgemini',
      type: 'Service Provider',
      solutions: 'Enterprise Modernization, OpenText Consulting'
    }
  ];

  const filteredData = filterSolutions
    ? partnersData.filter(partner => partner.solutions.trim() !== '')
    : partnersData;

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px'
  };

  const thStyle = {
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#001889',
    color: 'white'
  };

  const tdStyle = {
    padding: '12px',
    borderBottom: '1px solid #ddd'
  };

  const bodyStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFFFFF',
    color: '#333',
    margin: '20px'
  };

  const h1Style = {
    color: '#001889'
  };

  const labelStyle = {
    fontWeight: 'bold',
    marginRight: '10px'
  };

  const handleFilterChange = (e) => {
    setFilterSolutions(e.target.checked);
  };

  return (
    <div style={bodyStyle}>
      <h1 style={h1Style}>OpenText Partner Directory</h1>
      <p><em>Updated October 24, 2025</em><br /><em>Showing partners and their associated solutions in a unified view.</em></p>
      
      <label style={labelStyle}>
        <input
          type="checkbox"
          checked={filterSolutions}
          onChange={handleFilterChange}
        />
        Listed Solutions
      </label>

      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Partner Name</th>
            <th style={thStyle}>Partner Type</th>
            <th style={thStyle}>Associated Solutions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((partner, index) => (
            <tr key={index}>
              <td style={tdStyle}>{partner.name}</td>
              <td style={tdStyle}>{partner.type}</td>
              <td style={tdStyle}>{partner.solutions}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p><em>This directory is a sample implementation using OpenText-inspired styling (primary blue #001889, accent blue #0075FC, white backgrounds). In a production environment, integrate with the full OpenText design system for consistency.</em></p>
    </div>
  );
};

export default PartnerDirectory;