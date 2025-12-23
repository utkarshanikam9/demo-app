import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Alert
} from '@mui/material';
import {
  Timeline,
  TrendingUp,
  Assessment
} from '@mui/icons-material';

export default function Step2RunChart() {
  return (
    <>
      <Card sx={{ mb: 3, p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2, color: '#ff6b35', fontWeight: 'bold' }}>
          Step 2: Run Chart Analysis
        </Typography>
        <Alert severity="info" sx={{ mb: 3 }}>
          Analyzing temporal patterns and trends in the data
        </Alert>
        
        <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
          <Button startIcon={<Timeline />} variant="outlined">
            Generate Run Chart
          </Button>
          <Button startIcon={<TrendingUp />} variant="outlined">
            Trend Analysis
          </Button>
          <Button startIcon={<Assessment />} variant="outlined">
            Pattern Recognition
          </Button>
        </Box>
      </Card>

      <Box sx={{ display: 'flex', gap: 3 }}>
        <Card sx={{ flex: 2, p: 3, minHeight: '400px' }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50' }}>
            Run Chart: Defect Rate Over Time
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
              📈 Run Chart Visualization Area
            </Typography>
          </Box>
        </Card>
        
        <Card sx={{ flex: 1, p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50' }}>
            Key Insights
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            • Upward trend detected in defect rate
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            • Pattern suggests systematic cause
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            • Correlation with production shifts
          </Typography>
          <Button variant="contained" sx={{ 
            mt: 2, 
            backgroundColor: '#ff6b35',
            '&:hover': { backgroundColor: '#e55a2b' }
          }}>
            Export Analysis
          </Button>
        </Card>
      </Box>
    </>
  );
}