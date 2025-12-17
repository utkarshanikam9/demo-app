import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  IconButton,
  Tab,
  Tabs
} from '@mui/material';
import {
  KeyboardArrowDown,
  Visibility,
  VideoCall,
  GetApp,
  CheckCircle
} from '@mui/icons-material';

export default function TopNav() {
  const [tabValue, setTabValue] = React.useState(0);
  const [kpiOwner, setKpiOwner] = React.useState('Sarah Johnson');
  const [pnpOwner, setPnpOwner] = React.useState('John Doe');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      {/* Main Top Navigation */}
      <AppBar 
        position="static" 
        sx={{ 
          backgroundColor: 'white',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
          borderBottom: '1px solid #e9ecef'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
          {/* Left Section - Logo and Title */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box sx={{ 
                width: 32, 
                height: 32, 
                backgroundColor: '#ff6b35',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Typography sx={{ 
                  color: 'white', 
                  fontWeight: 'bold', 
                  fontSize: '14px'
                }}>
                  R
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold',
                color: '#2c3e50',
                fontSize: '18px'
              }}>
                RALLIANT
              </Typography>
            </Box>
            
            <Typography variant="h5" sx={{ 
              fontWeight: '600',
              color: '#2c3e50',
              ml: 2
            }}>
              Customer Resolution Time
            </Typography>
            
            {/* Status Chips */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <Chip 
                label="SALES OPS" 
                size="small" 
                sx={{ 
                  backgroundColor: '#e3f2fd',
                  color: '#1976d2',
                  fontWeight: '500'
                }} 
              />
              <Chip 
                label="GEMS BETA" 
                size="small" 
                sx={{ 
                  backgroundColor: '#fff3e0',
                  color: '#f57c00',
                  fontWeight: '500'
                }} 
              />
              <Select
                size="small"
                defaultValue="2025"
                sx={{ minWidth: 80, height: 32 }}
              >
                <MenuItem value="2025">2025</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
              </Select>
            </Box>
          </Box>

          {/* Right Section - Buttons */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Button
              startIcon={<Visibility />}
              variant="outlined"
              size="small"
              sx={{ 
                borderColor: '#ff6b35',
                color: '#ff6b35',
                '&:hover': {
                  backgroundColor: '#fff3e0',
                  borderColor: '#ff6b35'
                }
              }}
            >
              View KPI Summary
            </Button>
            <Button
              startIcon={<VideoCall />}
              variant="outlined"
              size="small"
              sx={{ 
                borderColor: '#ff6b35',
                color: '#ff6b35',
                '&:hover': {
                  backgroundColor: '#fff3e0',
                  borderColor: '#ff6b35'
                }
              }}
            >
              View Cadence Meeting
            </Button>
          </Box>
        </Toolbar>

        {/* Second Row - Owner Information and Actions */}
        <Toolbar sx={{ 
          backgroundColor: '#f8f9fa',
          minHeight: '48px !important',
          borderTop: '1px solid #e9ecef'
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, flexGrow: 1 }}>
            {/* Owner Selects */}
            <Box sx={{ display: 'flex', gap: 3 }}>
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>KPI Owner</InputLabel>
                <Select
                  value={kpiOwner}
                  onChange={(e) => setKpiOwner(e.target.value)}
                  label="KPI Owner"
                >
                  <MenuItem value="Sarah Johnson">Sarah Johnson</MenuItem>
                  <MenuItem value="John Doe">John Doe</MenuItem>
                </Select>
              </FormControl>
              
              <FormControl size="small" sx={{ minWidth: 150 }}>
                <InputLabel>P&P Owner</InputLabel>
                <Select
                  value={pnpOwner}
                  onChange={(e) => setPnpOwner(e.target.value)}
                  label="P&P Owner"
                >
                  <MenuItem value="John Doe">John Doe</MenuItem>
                  <MenuItem value="Sarah Johnson">Sarah Johnson</MenuItem>
                </Select>
              </FormControl>
            </Box>

            {/* Action Buttons */}
            <Box sx={{ display: 'flex', gap: 2, ml: 'auto' }}>
              <Button
                startIcon={<CheckCircle />}
                variant="contained"
                size="small"
                sx={{ 
                  backgroundColor: '#28a745',
                  '&:hover': {
                    backgroundColor: '#218838'
                  }
                }}
              >
                P&P Approval
              </Button>
              <Button
                startIcon={<GetApp />}
                variant="outlined"
                size="small"
                sx={{ 
                  borderColor: '#6c757d',
                  color: '#6c757d'
                }}
              >
                Generate Report
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Analysis Tabs */}
      <Box sx={{ 
        backgroundColor: 'white',
        borderBottom: '1px solid #e9ecef'
      }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          sx={{
            px: 3,
            '& .MuiTab-root': {
              textTransform: 'none',
              fontWeight: '500',
              fontSize: '14px'
            }
          }}
        >
          <Tab label="Critical Incident Response" />
          <Tab label="Run Chart Analysis" />
          <Tab label="Level 1 Pareto Analysis" />
          <Tab label="Level 2 Pareto Analysis" />
          <Tab label="Casual Chain Analysis" />
          <Tab label="Countermeasures" />
          <Tab label="Sustainability Plan" />
        </Tabs>
      </Box>
    </Box>
  );
}