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
  Tabs,
  Divider
} from '@mui/material';
import {
  KeyboardArrowDown,
  Visibility,
  VideoCall,
  GetApp,
  CheckCircle,
  Launch
} from '@mui/icons-material';

export default function TopNav() {
  const [tabValue, setTabValue] = React.useState(0);
  const [gemsOwner, setGemsOwner] = React.useState('GEMS SETHA');
  const [year, setYear] = React.useState('2025');
  const [pspOwner, setPspOwner] = React.useState('John Doe');

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
      <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center', minHeight: '80px', px: 3 }}>
          {/* Left Section - Title and Status */}
          <Box sx={{ display: 'flex', alignSelf: 'start',flexDirection: 'column', mt: 1 ,gap:1}}>
          <Box sx={{display:'flex',gap:2}}>

            <Typography variant="h4" sx={{ 
              fontWeight: '600',
              color: '#2c3e50',
              fontSize: '22px'
            }}>
              Customer Resolution Time
            </Typography>
            <Divider orientation="vertical" flexItem sx={{gap:10}}/>
            
            <Chip 
              label="SALES OPS" 
              size="small" 
              sx={{ 
                backgroundColor: '#627d91ff',
                color: '#ffffff',
                fontWeight: '600',
                fontSize: '11px',
                height: '24px'
              }} 
            />
            
            <FormControl size="small" sx={{ minWidth: 140 }}>
              <Select
                value={gemsOwner}
                onChange={(e) => setGemsOwner(e.target.value)}
                sx={{ 
                  height: 24,
                  backgroundColor: '#b1d5f1ff',
                  color: '#294a76ff',
                  outlineColor: '#1275f8ff',
                  borderRadius: '24px' ,
                  fontSize: '14px',
                  '& .MuiSelect-select': {
                    py: '6px'
                  }
                }}
                IconComponent={KeyboardArrowDown}
              >
                <MenuItem value="GEMS SETHA">GEMS SETHA</MenuItem>
                <MenuItem value="GEMS BETA">GEMS BETA</MenuItem>
                <MenuItem value="GEMS ALPHA">GEMS ALPHA</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <Select
                value={year}
                onChange={(e) => setYear(e.target.value)}
                sx={{ 
                  height: 24,
                  backgroundColor: '#c2ced8ff',
                  color: 'black',
                  borderRadius: '24px' ,
                  fontSize: '14px',
                  '& .MuiSelect-select': {
                    py: '6px'
                  }
                }}
                IconComponent={KeyboardArrowDown}
              >
                <MenuItem value="2025">2025</MenuItem>
                <MenuItem value="2024">2024</MenuItem>
                <MenuItem value="2023">2023</MenuItem>
              </Select>
            </FormControl>
          </Box>

        <Box sx={{ display: 'flex'}}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Typography sx={{ 
              fontSize: '14px',
              color: '#495057',
              fontWeight: '500'
            }}>
              KPI Owner : Sarah Johnson
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography sx={{ 
                fontSize: '14px',
                color: '#495057',
                fontWeight: '500'
              }}>
                PSP Owner :
              </Typography>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select
                  value={pspOwner}
                  onChange={(e) => setPspOwner(e.target.value)}
                  sx={{ 
                    height: 28,
                    fontSize: '14px',
                    '& .MuiSelect-select': {
                      py: '4px'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: '1px solid #ccc'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: '1px solid #ff6b35'
                    }
                  }}
                  IconComponent={KeyboardArrowDown}
                >
                  <MenuItem value="John Doe">John Doe</MenuItem>
                  <MenuItem value="Sarah Johnson">Sarah Johnson</MenuItem>
                  <MenuItem value="Mike Wilson">Mike Wilson</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
          </Box>

          {/* Right Section - Links */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Button
              endIcon={<Launch sx={{ fontSize: '16px !important' }} />}
              variant="text"
              size="small"
              sx={{ 
                color: '#ff6b35',
                textTransform: 'none',
                fontWeight: '500',
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: '#fff3e0'
                }
              }}
            >
              View KPI Summary
            </Button>
            <Button
              endIcon={<Launch sx={{ fontSize: '16px !important' }} />}
              variant="text"
              size="small"
              sx={{ 
                color: '#ff6b35',
                textTransform: 'none',
                fontWeight: '500',
                fontSize: '14px',
                '&:hover': {
                  backgroundColor: '#fff3e0'
                }
              }}
            >
              View Cadence Meetings
            </Button>
          </Box>
          
        </Toolbar>

        {/* Second Row - Owner Information */}
        {/* <Toolbar sx={{ 
          backgroundColor: '#f8f9fa',
          minHeight: '48px !important',
          borderTop: '1px solid #e9ecef',
          px: 3
        }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
            <Typography sx={{ 
              fontSize: '14px',
              color: '#495057',
              fontWeight: '500'
            }}>
              KPI Owner : Sarah Johnson
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography sx={{ 
                fontSize: '14px',
                color: '#495057',
                fontWeight: '500'
              }}>
                PSP Owner :
              </Typography>
              <FormControl size="small" sx={{ minWidth: 120 }}>
                <Select
                  value={pspOwner}
                  onChange={(e) => setPspOwner(e.target.value)}
                  sx={{ 
                    height: 28,
                    fontSize: '14px',
                    '& .MuiSelect-select': {
                      py: '4px'
                    },
                    '& .MuiOutlinedInput-notchedOutline': {
                      border: 'none'
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                      border: '1px solid #ccc'
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: '1px solid #ff6b35'
                    }
                  }}
                  IconComponent={KeyboardArrowDown}
                >
                  <MenuItem value="John Doe">John Doe</MenuItem>
                  <MenuItem value="Sarah Johnson">Sarah Johnson</MenuItem>
                  <MenuItem value="Mike Wilson">Mike Wilson</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Toolbar> */}
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