import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
// Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import BarChartIcon from '@mui/icons-material/BarChart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import FeedbackIcon from '@mui/icons-material/Feedback';
import AssignmentIcon from '@mui/icons-material/Assignment';
import HelpIcon from '@mui/icons-material/Help';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const drawerWidth = 280;
const collapsedWidth = 64;

const navigationItems = [
  { text: 'KPI Chart', icon: <BarChartIcon /> },
  { text: 'Notifications', icon: <NotificationsIcon /> },
  { text: 'Feedback', icon: <FeedbackIcon /> },
  { text: 'Audit Log', icon: <AssignmentIcon /> },
  { text: 'Help', icon: <HelpIcon /> },
];

const bottomItems = [
  { text: 'Settings', icon: <SettingsIcon /> },
  { text: 'Logout', icon: <LogoutIcon /> },
];

export default function SideNav({ children }) {
  const [collapsed, setCollapsed] = React.useState(false);

  const handleToggle = () => {
    setCollapsed(!collapsed);
  };

  const currentWidth = collapsed ? collapsedWidth : drawerWidth;

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: currentWidth,
          flexShrink: 0,
          transition: 'width 0.3s ease',
          [`& .MuiDrawer-paper`]: { 
            width: currentWidth, 
            boxSizing: 'border-box',
            backgroundColor: '#f8f9fa',
            border: 'none',
            boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
            transition: 'width 0.3s ease',
            overflow: 'hidden'
          },
        }}
      >
        {/* Header with Logo and Toggle */}
        <Box sx={{ 
          p: collapsed ? 1.5 : 3, 
          display: 'flex', 
          alignItems: 'center', 
          gap: 2,
          borderBottom: '1px solid #e9ecef',
          height: '72px',
          boxSizing: 'border-box'
        }}>
          {!collapsed && (
            <>
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
            </>
          )}
          <IconButton 
            onClick={handleToggle}
            size="small" 
            sx={{ 
              ml: collapsed ? 0 : 'auto',
              color: '#6c757d',
              backgroundColor: 'rgba(108, 117, 125, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(108, 117, 125, 0.2)'
              }
            }}
          >
            {collapsed ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </Box>

        {/* Main Navigation */}
        <Box sx={{ flexGrow: 1, pt: 2 }}>
          <List sx={{ px: collapsed ? 1 : 2 }}>
            {navigationItems.map((item) => (
              <Tooltip 
                key={item.text}
                title={collapsed ? item.text : ''}
                placement="right"
                arrow
              >
                <ListItem 
                  button 
                  sx={{
                    borderRadius: '8px',
                    mb: 0.5,
                    minHeight: '48px',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    px: collapsed ? 1 : 2,
                    '&:hover': {
                      backgroundColor: '#e9ecef',
                    },
                    '& .MuiListItemIcon-root': {
                      minWidth: collapsed ? 'auto' : '40px',
                      color: '#6c757d',
                      justifyContent: 'center'
                    },
                    '& .MuiListItemText-primary': {
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#495057',
                    }
                  }}
                >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && <ListItemText primary={item.text} />}
                </ListItem>
              </Tooltip>
            ))}
          </List>
        </Box>

        {/* Bottom Section */}
        <Box sx={{ mt: 'auto' }}>
          <Divider sx={{ mx: collapsed ? 1 : 2 }} />
          <List sx={{ px: collapsed ? 1 : 2, py: 1 }}>
            {bottomItems.map((item) => (
              <Tooltip 
                key={item.text}
                title={collapsed ? item.text : ''}
                placement="right"
                arrow
              >
                <ListItem 
                  button 
                  sx={{
                    borderRadius: '8px',
                    mb: 0.5,
                    minHeight: '48px',
                    justifyContent: collapsed ? 'center' : 'flex-start',
                    px: collapsed ? 1 : 2,
                    '&:hover': {
                      backgroundColor: '#e9ecef',
                    },
                    '& .MuiListItemIcon-root': {
                      minWidth: collapsed ? 'auto' : '40px',
                      color: '#6c757d',
                      justifyContent: 'center'
                    },
                    '& .MuiListItemText-primary': {
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#495057',
                    }
                  }}
                >
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  {!collapsed && <ListItemText primary={item.text} />}
                </ListItem>
              </Tooltip>
            ))}
          </List>

          {/* User Profile */}
          {!collapsed ? (
            <Box sx={{ 
              p: 2, 
              borderTop: '1px solid #e9ecef',
              display: 'flex',
              alignItems: 'center',
              gap: 2
            }}>
              <Avatar 
                sx={{ 
                  width: 32, 
                  height: 32,
                  backgroundColor: '#28a745'
                }}
              >
                SJ
              </Avatar>
              <Typography sx={{ 
                fontSize: '14px',
                fontWeight: '500',
                color: '#495057'
              }}>
                Sarah Johnson
              </Typography>
            </Box>
          ) : (
            <Tooltip title="Sarah Johnson" placement="right" arrow>
              <Box sx={{ 
                p: 1.5, 
                borderTop: '1px solid #e9ecef',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <Avatar 
                  sx={{ 
                    width: 32, 
                    height: 32,
                    backgroundColor: '#28a745'
                  }}
                >
                  SJ
                </Avatar>
              </Box>
            </Tooltip>
          )}
        </Box>
      </Drawer>
      
      <Box 
        component="main" 
        sx={{ 
          flexGrow: 1,
          transition: 'margin-left 0.3s ease',
          marginLeft: 0,
          minHeight: '100vh',
          backgroundColor: '#ffffff'
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
