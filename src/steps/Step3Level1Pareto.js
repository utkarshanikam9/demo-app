import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Alert,
  Chip
} from '@mui/material';

export default function Step3Level1Pareto() {
  return (
    <>
      <Card sx={{ mb: 3, p: 3 }}>
        <Typography variant="h5" sx={{ mb: 2, color: '#ff6b35', fontWeight: 'bold' }}>
          Step 3: Level 1 Pareto Analysis
        </Typography>
        <Alert severity="warning" sx={{ mb: 3 }}>
          Identifying the vital few causes contributing to 80% of defects
        </Alert>
      </Card>

      <Box sx={{ display: 'flex', gap: 3 }}>
        <Card sx={{ flex: 2, p: 3, minHeight: '400px' }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50' }}>
            Pareto Chart: Defect Categories
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
              📊 Pareto Chart Visualization Area
            </Typography>
          </Box>
        </Card>
        
        <Card sx={{ flex: 1, p: 3 }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50' }}>
            Top Defect Categories
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Box>
              <Chip label="Equipment Issues - 45%" color="error" sx={{ mb: 1 }} />
              <Typography variant="body2">Machinery malfunction and wear</Typography>
            </Box>
            
            <Box>
              <Chip label="Training Gap - 25%" color="warning" sx={{ mb: 1 }} />
              <Typography variant="body2">Operator skill deficiency</Typography>
            </Box>
            
            <Box>
              <Chip label="Material Quality - 15%" color="info" sx={{ mb: 1 }} />
              <Typography variant="body2">Raw material inconsistency</Typography>
            </Box>
            
            <Box>
              <Chip label="Process Variation - 15%" color="success" sx={{ mb: 1 }} />
              <Typography variant="body2">Standard procedure deviations</Typography>
            </Box>
          </Box>

          <Button variant="contained" sx={{ 
            mt: 3, 
            backgroundColor: '#ff6b35',
            '&:hover': { backgroundColor: '#e55a2b' }
          }}>
            Drill Down Analysis
          </Button>
        </Card>
      </Box>
    </>
  );
}