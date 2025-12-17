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
//   { text: 'Slide', icon: <ChevronRightIcon /> },
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
          flexDirection: collapsed ? 'column' : 'row',
          alignItems: 'center', 
          gap: collapsed ? 1 : 2,
          borderBottom: '1px solid #e9ecef',
          height: '72px',
          boxSizing: 'border-box'
        }}>
          {!collapsed && (
            <>
              <Box sx={{ 
                width: 32, 
                height: 32, 
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7619 20.7792L31.1429 10.3896L20.7619 0H10.381V10.3896H20.7619V20.7792Z" fill="#FF7633"></path><path d="M0 20.7793V31.1689H10.381V20.7793V10.3896L0 20.7793Z" fill="#FF7633"></path><path d="M10.381 20.7793L20.7619 31.1689H31.1429V20.7793H20.7619H10.381Z" fill="#FF7633"></path></svg>
              </Box>
              <Typography variant="h6" sx={{ 
                fontWeight: 'bold',
                color: '#2c3e50',
                fontSize: '18px'
              }}>
                RALLIANT
              </Typography>
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
            <ChevronLeftIcon />
          </IconButton>
            </>
          )}
          
          {collapsed && (
            <Box sx={{ 
              width: 32, 
              height: 32, 
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.7619 20.7792L31.1429 10.3896L20.7619 0H10.381V10.3896H20.7619V20.7792Z" fill="#FF7633"></path><path d="M0 20.7793V31.1689H10.381V20.7793V10.3896L0 20.7793Z" fill="#FF7633"></path><path d="M10.381 20.7793L20.7619 31.1689H31.1429V20.7793H20.7619H10.381Z" fill="#FF7633"></path></svg>
            </Box>
          )}
        </Box>

        {/* Main Navigation */}
        <Box sx={{ flexGrow: 1, pt: 2 }}>
          <List sx={{ px: collapsed ? 1 : 2 }}>
                       <IconButton 
            onClick={handleToggle}
            size="small" 
            sx={{ 
             display:!collapsed ? 'none' : 'flex',
              ml: collapsed ? 0.8 : 'auto',
              color: '#6c757d',
              backgroundColor: 'rgba(108, 117, 125, 0.1)',
              '&:hover': {
                backgroundColor: 'rgba(108, 117, 125, 0.2)',   
              },

                    mb: 0.5,
                    justifyContent: collapsed ? 'center' : 'flex-start',
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
            <ChevronRightIcon /> 
          </IconButton>
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