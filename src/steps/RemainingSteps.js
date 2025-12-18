import React from 'react';
import {
  Box,
  Card,
  Typography,
  Button,
  Alert
} from '@mui/material';

const createStepComponent = (stepNumber, title, description, chartType) => {
  return function StepComponent() {
    return (
      <>
        <Card sx={{ mb: 3, p: 3 }}>
          <Typography variant="h5" sx={{ mb: 2, color: '#ff6b35', fontWeight: 'bold' }}>
            Step {stepNumber}: {title}
          </Typography>
          <Alert severity="info" sx={{ mb: 3 }}>
            {description}
          </Alert>
        </Card>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Card sx={{ flex: 2, p: 3, minHeight: '400px' }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50' }}>
              {chartType}
            </Typography>
            <Box sx={{
              height: '300px',
              backgroundColor: '#f8f9fa',
              borderRadius: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px dashed #dee2e6'
            }}>
              <Typography variant="body1" color="text.secondary">
                📈 {chartType} Visualization Area
              </Typography>
            </Box>
          </Card>
          
          <Card sx={{ flex: 1, p: 3 }}>
            <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50' }}>
              Analysis Results
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Step {stepNumber} analysis in progress...
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Detailed insights will be available here.
            </Typography>
            
            <Button variant="contained" sx={{ 
              mt: 2, 
              backgroundColor: '#ff6b35',
              '&:hover': { backgroundColor: '#e55a2b' }
            }}>
              Generate Report
            </Button>
          </Card>
        </Box>
      </>
    );
  };
};

export const Step4Level2Pareto = createStepComponent(
  4, 
  "Level 2 Pareto Analysis", 
  "Deeper dive into the primary root causes identified in Level 1",
  "Level 2 Pareto Chart"
);

export const Step5CausalChain = createStepComponent(
  5, 
  "Causal Chain Analysis", 
  "Mapping the causal relationships and identifying intervention points",
  "Causal Chain Diagram"
);

export const Step6Countermeasures = createStepComponent(
  6, 
  "Countermeasures Development", 
  "Developing and prioritizing countermeasures based on analysis",
  "Countermeasures Matrix"
);

export const Step7Sustainability = createStepComponent(
  7, 
  "Sustainability Plan", 
  "Creating a plan to sustain improvements and prevent recurrence",
  "Sustainability Dashboard"
);