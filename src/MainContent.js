import React from 'react';
import arbyGif from './assets/arby.gif';
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
  Avatar,
  Drawer,
  Stepper,
  Step,
  StepLabel,
  StepButton
} from '@mui/material';
import {
  Close,
  SmartToy,
  ThumbUp,
  ThumbDown,
  Send
} from '@mui/icons-material';

// Import step components
import Step1DefineProblem from './steps/Step1DefineProblem';
import Step2RunChart from './steps/Step2RunChart';
import Step3Level1Pareto from './steps/Step3Level1Pareto';
import {
  Step4Level2Pareto,
  Step5CausalChain,
  Step6Countermeasures,
  Step7Sustainability
} from './steps/RemainingSteps';

export default function MainContent() {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [responseText, setResponseText] = React.useState('');
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [currentStep, setCurrentStep] = React.useState(1);

  // Step configuration
  const steps = [
    { label: 'Define Problem', component: Step1DefineProblem },
    { label: 'Run Chart Analysis', component: Step2RunChart },
    { label: 'Level 1 Pareto', component: Step3Level1Pareto },
    { label: 'Level 2 Pareto', component: Step4Level2Pareto },
    { label: 'Causal Chain', component: Step5CausalChain },
    { label: 'Countermeasures', component: Step6Countermeasures },
    { label: 'Sustainability', component: Step7Sustainability },
  ];

  // Handle step click
  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex + 1);
  };

  // Render current step content
  const renderCurrentStep = () => {
    const CurrentStepComponent = steps[currentStep - 1]?.component;

    if (!CurrentStepComponent) {
      return (
        <Card sx={{ p: 3 }}>
          <Typography variant="h6" color="error">
            Step {currentStep} component not found
          </Typography>
        </Card>
      );
    }

    // Pass props only to Step 1 (which needs them)
    if (currentStep === 1) {
      return (
        <CurrentStepComponent
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          responseText={responseText}
          setResponseText={setResponseText}
        />
      );
    }

    return <CurrentStepComponent />;
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Main Content Area */}
      <Box
        sx={{
          flex: 1,
          p: 3,
          backgroundColor: '#f8f9fa',
          minHeight: '100vh',
          transition: 'margin-right 0.3s ease',
          marginRight: isDrawerOpen ? '400px' : '0px',
          overflow: 'auto'
        }}
      >
        {/* Stepper Navigation */}
        <Card sx={{ mb: 3, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, color: '#2c3e50' }}>
            KPI Analysis Workflow
          </Typography>
          <Stepper
            activeStep={currentStep - 1}
            nonLinear
            alternativeLabel
            sx={{
              '& .MuiStepLabel-root': {
                cursor: 'pointer',
              },
              '& .MuiStepIcon-root.Mui-active': {
                color: '#ff6b35',
              },
              '& .MuiStepIcon-root.Mui-completed': {
                color: '#ff6b35',
              },
              '& .MuiStepButton-root': {
                padding: '24px 8px',
              },
            }}
          >
            {steps.map((step, index) => (
              <Step key={index} completed={index < currentStep - 1}>
                <StepButton
                  onClick={() => handleStepClick(index)}
                  sx={{
                    '& .MuiStepLabel-label': {
                      fontSize: '0.875rem',
                      '&.Mui-active': {
                        color: '#ff6b35',
                        fontWeight: 'bold',
                      },
                    },
                  }}
                >
                  {step.label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Card>

        {/* Dynamic Step Content */}
        {renderCurrentStep()}

        {/* Floating ARBY Button */}
        <Box
          onClick={() => setIsDrawerOpen(true)}
          sx={{
            position: 'fixed',
            bottom: 20,
            right: isDrawerOpen ? '420px' : '20px',
            zIndex: 1001,
            width: 80,
            height: 80,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: isDrawerOpen ? 'none' : 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Box
            component="img"
            src={arbyGif}
            alt="Loading"
            sx={{
              width: 200,
              height: 100,
              borderRadius: '50%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Box>

      {/* Push-based Chat Panel */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          height: '100vh',
          width: '400px',
          backgroundColor: 'white',
          color: 'white',
          boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.15)',
          transform: isDrawerOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s ease',
          zIndex: 1000,
          overflow: 'auto'
        }}
      >
        <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* Header */}
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mb: 3,
            backgroundColor: '#ff6b35',
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center',p:2, gap: 3, height: 100, }}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  backgroundColor: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                <Box
                  src={arbyGif}
                  component="img"
                  alt="Loading" sx={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    objectFit: 'cover',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}></Box>

              </Box>
  
              <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  ARBY
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  AI ANALYTICS ASSISTANT
                </Typography>
              </Box>
            </Box>
            <IconButton
              onClick={() => setIsDrawerOpen(false)}
              sx={{
                p: 1,
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              <Close />
            </IconButton>
          </Box>

          {/* Connection Status */}
          <Alert
            severity="error"
            sx={{
              mb: 3,
              display: 'flex',
              justifyContent: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'tomato',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              '& .MuiAlert-icon': {
                color: 'red'
              }
            }}
          >
            Failed to connect to ARBY. Please try again.
          </Alert>

          {/* Chat Content Area */}
          <Box sx={{
            flex: 1,
            backgroundColor: 'rgba(138, 111, 111, 0.1)',
            borderRadius: 2,
            p: 2,
            mb: 2,
            minHeight: '300px'
          }}>
            <Typography variant="body2" sx={{ opacity: 0.8 }}>
              Chat messages will appear here...
            </Typography>
          </Box>

          {/* Bottom Action Buttons */}
          <Box sx={{
             backgroundColor: 'rgba(138, 111, 111, 0.1)',
            display: 'flex',
            gap: 1,
            mb: 2
          }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Analyze KPIs
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Show Trends
            </Button>
          </Box>

          <Box sx={{
            display: 'flex',
            gap: 1,
            mb: 2,
             backgroundColor: 'rgba(138, 111, 111, 0.1)'
          }}>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              Generate Report
            </Button>
            <Button
              fullWidth
              variant="outlined"
              sx={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }
              }}
            >
              At Risk Items
            </Button>
          </Box>

          {/* Message Input */}
          <Box sx={{
            display: 'flex',
            gap: 1,
            alignItems: 'flex-end',
             backgroundColor: 'rgba(138, 111, 111, 0.1)'
          }}>
            <TextField
              fullWidth
              placeholder="Enter a message"
              variant="outlined"
              size="small"
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: 3,
                  '& fieldset': {
                    borderColor: 'rgba(255, 255, 255, 0.3)',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                }
              }}
            />
            <IconButton
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)'
                }
              }}
            >
              <Send />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}