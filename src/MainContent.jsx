import React from 'react';
import arbyGif from './assets/arby.gif';
import chatService from './services/chatService';
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
  StepButton,
  CircularProgress
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
  
  // Chat state management
  const [messages, setMessages] = React.useState([]);
  const [currentMessage, setCurrentMessage] = React.useState('');
  const [isTyping, setIsTyping] = React.useState(false);
  const [chatError, setChatError] = React.useState(null);
  const messagesEndRef = React.useRef(null);

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

  // Scroll to bottom of chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Effect to scroll when messages change
  React.useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    const userMessage = currentMessage.trim();
    setCurrentMessage('');
    setChatError(null);

    // Add user message immediately
    const newUserMessage = {
      id: Date.now(),
      type: 'user',
      text: userMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    try {
      // Get AI response
      const response = await chatService.sendMessage(messages, userMessage);
      
      setIsTyping(false);
      
      // Add AI response
      const aiMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        text: response.message,
        timestamp: new Date(),
        isError: !response.success
      };

      setMessages(prev => [...prev, aiMessage]);

      if (!response.success) {
        setChatError('Response may be limited due to service issues.');
      }
    } catch (error) {
      setIsTyping(false);
      const errorMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        text: 'I apologize, but I\'m having trouble connecting right now. Please try again.',
        timestamp: new Date(),
        isError: true
      };
      setMessages(prev => [...prev, errorMessage]);
      setChatError('Connection error. Please check your internet connection.');
    }
  };

  // Handle quick action buttons
  const handleQuickAction = (action) => {
    const quickMessages = {
      'Analyze KPIs': 'Please analyze my current KPIs and provide insights on performance trends.',
      'Show Trends': 'Show me the latest trends in my data and what patterns you can identify.',
      'Generate Report': 'Generate a comprehensive analytics report based on my current data.',
      'At Risk Items': 'Identify any at-risk items or areas that need immediate attention.'
    };
    
    setCurrentMessage(quickMessages[action] || action);
  };

  // Handle Enter key press
  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSendMessage();
    }
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
          {chatError && (
            <Alert
              severity="warning"
              sx={{
                mb: 2,
                mx: 2,
                backgroundColor: 'rgba(255, 193, 7, 0.1)',
                color: '#856404',
                border: '1px solid rgba(255, 193, 7, 0.2)',
                '& .MuiAlert-icon': {
                  color: '#856404'
                }
              }}
              onClose={() => setChatError(null)}
            >
              {chatError}
            </Alert>
          )}
          
          {messages.length === 0 && (
            <Box sx={{ p: 2, mx: 2, textAlign: 'center' }}>
              <Typography variant="body2" sx={{ opacity: 0.6, color: '#666' }}>
                👋 Hi! I'm ARBY, your AI Analytics Assistant.<br/>
                Ask me about KPIs, trends, or use the quick actions below.
              </Typography>
            </Box>
          )}

          {/* Chat Content Area */}
          <Box sx={{
            flex: 1,
            overflowY: 'auto',
            p: 1,
            mb: 2,
            minHeight: '300px',
            maxHeight: '400px'
          }}>
            {messages.map((message) => (
              <Box
                key={message.id}
                sx={{
                  display: 'flex',
                  justifyContent: message.type === 'user' ? 'flex-end' : 'flex-start',
                  mb: 1
                }}
              >
                <Box
                  sx={{
                    maxWidth: '80%',
                    backgroundColor: message.type === 'user' 
                      ? '#ff6b35' 
                      : message.isError 
                        ? '#ffebee'
                        : '#f5f5f5',
                    color: message.type === 'user' 
                      ? 'white' 
                      : message.isError 
                        ? '#c62828'
                        : '#333',
                    borderRadius: 2,
                    p: 1.5,
                    wordBreak: 'break-word'
                  }}
                >
                  <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                    {message.text}
                  </Typography>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      opacity: 0.7, 
                      fontSize: '0.7rem',
                      display: 'block',
                      mt: 0.5
                    }}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </Typography>
                </Box>
              </Box>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <Box sx={{ display: 'flex', justifyContent: 'flex-start', mb: 1 }}>
                <Box sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: 2,
                  p: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <CircularProgress size={16} sx={{ color: '#ff6b35' }} />
                  <Typography variant="body2" sx={{ fontSize: '0.875rem', fontStyle: 'italic', color: '#666' }}>
                    ARBY is typing...
                  </Typography>
                </Box>
              </Box>
            )}
            
            <div ref={messagesEndRef} />
          </Box>

          {/* Bottom Action Buttons */}
          <Box sx={{backgroundColor:'rgba(138, 111, 111, 0.1)',height:'200px',borderRadius:2,m:1}}>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            // gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 1,
            mb: 2,
            mt: 1,
            px: 1
          }}>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleQuickAction('Analyze KPIs')}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#333',
                fontSize: '0.75rem',
                padding: '4px 4px',
                textTransform: 'none',
                fontWeight: 500,
                borderRadius: 2,
                height:32,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  boxShadow: 'none'
                }
              }}
            >
              Analyze KPIs
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleQuickAction('Show Trends')}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#333',
                height:32,
                fontSize: '0.75rem',
                padding: '8px 4px',
                textTransform: 'none',
                fontWeight: 500,
                borderRadius: 2,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  boxShadow: 'none'
                }
              }}
            >
              Show Trends
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleQuickAction('Generate Report')}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#333',
                height:32,
                fontSize: '0.75rem',
                padding: '8px 4px',
                textTransform: 'none',
                fontWeight: 500,
                borderRadius: 2,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  boxShadow: 'none'
                }
              }}
            >
              Generate Report
            </Button>
            <Button
              variant="contained"
              size="small"
              onClick={() => handleQuickAction('At Risk Items')}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                color: '#333',
                height:32,
                fontSize: '0.75rem',
                padding: '8px 4px',
                textTransform: 'none',
                fontWeight: 500,
                borderRadius: 2,
                boxShadow: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  boxShadow: 'none'
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
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderRadius: 3,
            p: 1,
            mx: 1
          }}>
            <TextField
              fullWidth
              multiline
              maxRows={3}
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask ARBY about your analytics..."
              variant="standard"
              disabled={isTyping}
              InputProps={{
                disableUnderline: true,
                sx: {
                  color: '#666',
                  fontSize: '14px',
                  padding: '8px 0',
                  '& input::placeholder': {
                    color: '#999',
                    opacity: 1
                  },
                  '& textarea::placeholder': {
                    color: '#999',
                    opacity: 1
                  }
                }
              }}
              sx={{
                '& .MuiInput-root': {
                  color: '#666',
                  '&:before': {
                    display: 'none'
                  },
                  '&:after': {
                    display: 'none'
                  }
                }
              }}
            />
            <IconButton
              size="small"
              onClick={handleSendMessage}
              disabled={!currentMessage.trim() || isTyping}
              sx={{
                color: 'white',
                backgroundColor: currentMessage.trim() && !isTyping ? '#ff6b35' : '#ccc',
                width: 32,
                height: 32,
                '&:hover': {
                  backgroundColor: currentMessage.trim() && !isTyping ? '#e55a2b' : '#bbb'
                },
                '&:disabled': {
                  color: 'white',
                  opacity: 0.6
                }
              }}
            >
              <Send fontSize="small" />
            </IconButton>
          </Box>
           </Box>

  

        </Box>
      </Box>
    </Box>
  );
}