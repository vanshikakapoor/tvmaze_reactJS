import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const BorderedChart = () => {
  const data = {
    labels: ['Passed', 'Failed', 'Not Run', 'In Progress'],
    datasets: [
      {
        data: [350, 30, 10, 10], // Your data values
        backgroundColor: ['#4caf50', '#f44336', '#ffeb3b', '#ff9800'], // Colors for each section
        borderColor: ['#4caf50', 'transparent', 'transparent', 'transparent'], // Border only on green portion
        borderWidth: [0, 0, 0, 0], // Outer border thickness for green portion
        hoverBorderWidth: [0, 0, 0, 0], // Keep the border width same on hover
        spacing: 2, // Space between segments
        offset: 0, // Offset the green segment to create space between it and the other segments
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Show tooltip on hover
      },
    },
    cutout: '65%', // Adjust the hollow portion size
    rotation: -90, // Start the chart from the top
    responsive: true,
  };

  return (
    <div style={{ position: 'relative', width: '400px', margin: '0 auto' }}>
      <div style={{
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '20px', // Space between title and chart
        color: '#e74c3c' // Title color
      }}>
        Workforce Dimensions
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        marginBottom: '10px', // Space between labels and chart
      }}>
        <div><span style={{ color: '#4caf50' }}>●</span> <span style={{ color: '#4caf50' }}>Passed</span></div>
        <div><span style={{ color: '#f44336' }}>●</span> <span style={{ color: '#f44336' }}>Failed</span></div>
        <div><span style={{ color: '#ffeb3b' }}>●</span> <span style={{ color: '#ffeb3b' }}>Not Run</span></div>
        <div><span style={{ color: '#ff9800' }}>●</span> <span style={{ color: '#ff9800' }}>In Progress</span></div>
      </div>
      <div>
        <Doughnut data={data} options={options} />
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          fontWeight: 'bold',
          fontSize: '24px',
        }}>
          <div>Total Test Case</div>
          <div>400</div>
        </div>
        <div style={{
          position: 'absolute',
          bottom: '-40px',
          left: '50%',
          transform: 'translateX(-50%)',
          textAlign: 'center',
          fontSize: '18px',
        }}>
          <strong>Current Status</strong>
          <div style={{ fontSize: '24px', fontWeight: 'bold' }}>87.50%</div>
        </div>
      </div>
    </div>
  );
};

export default BorderedChart;
