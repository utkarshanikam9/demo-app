import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Alert,
  AlertTitle,
  Button,
  Chip,
  IconButton,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Divider,
  Avatar
} from '@mui/material';
import {
  Close,
  SmartToy,
  ThumbUp,
  ThumbDown,
  Send
} from '@mui/icons-material';

export default function MainContent() {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [responseText, setResponseText] = React.useState('');

  return (
    <Box sx={{ p: 3, backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* ABBY AI Assistant Card */}
      <Card 
        sx={{ 
          mb: 3,
          border: '2px solid #ff6b35',
          borderRadius: '12px',
          overflow: 'visible'
        }}
      >
        {/* Header */}
        <Box sx={{
          backgroundColor: '#ff6b35',
          color: 'white',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          position: 'relative'
        }}>
          <Box sx={{
            width: 40,
            height: 40,
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <SmartToy sx={{ color: 'white' }} />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 0.5 }}>
              ABBY
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              AI ANALYTICS ASSISTANT
            </Typography>
          </Box>
          <IconButton 
            sx={{ 
              position: 'absolute', 
              top: 8, 
              right: 8,
              color: 'white',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }}
          >
            <Close />
          </IconButton>
        </Box>

        <CardContent sx={{ p: 3 }}>
          {/* Question */}
          <Typography variant="body1" sx={{ mb: 2, color: '#495057' }}>
            Hi I am ABBY, your AI assistant! How can I help you?
          </Typography>

          {/* Alert Box */}
          <Alert 
            severity="warning" 
            sx={{ 
              mb: 3,
              backgroundColor: '#ff6b35',
              color: 'white',
              '& .MuiAlert-icon': {
                color: 'white'
              }
            }}
          >
            Let's figure out the problem at the Statement facility
          </Alert>

          {/* Description */}
          <Typography variant="body2" sx={{ mb: 2, color: '#6c757d' }}>
            Based on the KPI data and the validation reasoning framework, here is what I have found:
          </Typography>

          {/* User Info */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
            <Avatar sx={{ width: 32, height: 32, backgroundColor: '#6c757d' }}>
              <Typography variant="body2" sx={{ color: 'white' }}>
                DS
              </Typography>
            </Avatar>
            <Box>
              <Typography variant="body2" sx={{ fontWeight: '500' }}>
                Defect Rate increased by 4%
              </Typography>
              <Typography variant="caption" sx={{ color: '#6c757d' }}>
                As on Wed, 30 Apr 2025
              </Typography>
            </Box>
          </Box>

          {/* Problem Description */}
          <Typography variant="body2" sx={{ mb: 2, color: '#495057' }}>
            The defect rate increase appears to be related to machinery that 
            likely due to a combination of insufficient equipment and insufficient training. Further 
            Investigation is recommended.
          </Typography>

          {/* Radio Options */}
          <RadioGroup
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            sx={{ mb: 2 }}
          >
            <FormControlLabel 
              value="outdated-equipment" 
              control={<Radio size="small" />} 
              label={
                <Typography variant="body2">
                  Outdated Equipment
                </Typography>
              }
            />
            <FormControlLabel 
              value="insufficient-training" 
              control={<Radio size="small" />} 
              label={
                <Typography variant="body2">
                  Insufficient Training
                </Typography>
              }
            />
          </RadioGroup>

          {/* Question */}
          <Typography variant="body2" sx={{ mb: 3, color: '#e74c3c' }}>
            Is there anything else I can help you with?
          </Typography>

          {/* Bottom Alert */}
          <Alert 
            severity="warning" 
            sx={{ 
              mb: 3,
              backgroundColor: '#ff6b35',
              color: 'white',
              '& .MuiAlert-icon': {
                color: 'white'
              }
            }}
          >
            Let's go ahead with the equipment procurement.
          </Alert>

          {/* Response Section */}
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            alignItems: 'flex-end',
            mt: 3
          }}>
            <TextField
              fullWidth
              multiline
              rows={1}
              placeholder="Type a message..."
              value={responseText}
              onChange={(e) => setResponseText(e.target.value)}
              variant="outlined"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: '20px'
                }
              }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ff6b35',
                minWidth: 'auto',
                px: 2,
                py: 1,
                borderRadius: '20px',
                '&:hover': {
                  backgroundColor: '#e55a2b'
                }
              }}
            >
              <Send />
            </Button>
          </Box>

          {/* Action Buttons */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            mt: 3,
            pt: 2,
            borderTop: '1px solid #e9ecef'
          }}>
            <Button
              variant="outlined"
              sx={{
                borderColor: '#6c757d',
                color: '#6c757d',
                textTransform: 'none',
                borderRadius: '20px',
                px: 3
              }}
            >
              Approve
            </Button>
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#ff6b35',
                textTransform: 'none',
                borderRadius: '20px',
                px: 3,
                '&:hover': {
                  backgroundColor: '#e55a2b'
                }
              }}
            >
              Investigate Further
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Additional Content Area */}
      <Box sx={{ 
        display: 'flex',
        gap: 3,
        mt: 3
      }}>
        {/* Placeholder for charts or other content */}
        <Card sx={{ flex: 1, p: 3, minHeight: '300px' }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50' }}>
            Analytics Dashboard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            KPI charts and analysis will be displayed here.
          </Typography>
        </Card>
      </Box>
    </Box>
  );
}