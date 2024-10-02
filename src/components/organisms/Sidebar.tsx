import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  MessageOutlined,
  LaptopOutlined,
  ContactsOutlined,
  FileOutlined,
  UserOutlined,
  NotificationOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <Sider
      className={`sidebar ${expanded ? 'sidebar-expanded' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ background: 'transparent' }}
    >
      <Menu mode="inline" style={{ height: '100%', borderRight: 0 }}>
        <Menu.Item key="1" icon={<HomeOutlined />} className="sidebar-menu-item">
          <span className="sidebar-menu-text">Dashboard</span>
        </Menu.Item>
        <Menu.Item key="2" icon={<MessageOutlined />} className="sidebar-menu-item">
          <span className="sidebar-menu-text">Feed</span>
        </Menu.Item>
        <Menu.Item key="3" icon={<LaptopOutlined />} className="sidebar-menu-item">
          <span className="sidebar-menu-text">Leads</span>
        </Menu.Item>
        <Menu.Item key="4" icon={<ContactsOutlined />} className="sidebar-menu-item">
          <span className="sidebar-menu-text">Contacts</span>
        </Menu.Item>
        <Menu.Item key="5" icon={<FileOutlined />} className="sidebar-menu-item">
          <span className="sidebar-menu-text">Activities</span>
        </Menu.Item>
        <Menu.Item key="6" icon={<UserOutlined />} className="sidebar-menu-item">
          <span className="sidebar-menu-text">Opportunities</span>
        </Menu.Item>
        <Menu.Item key="7" icon={<NotificationOutlined />} className="sidebar-menu-item">
          <span className="sidebar-menu-text">Chat</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
