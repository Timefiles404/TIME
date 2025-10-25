import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardNav from '../CardNav';

const Header = () => {
  const navigate = useNavigate();

  const items = [
    {
      label: '主页',
      bgColor: '#111',
      textColor: '#fff',
      links: [
        { label: '进入主页', href: '/', ariaLabel: 'go-home', onClick: (e) => { e.preventDefault(); navigate('/'); } },
      ],
    },
    {
      label: '画廊',
      bgColor: '#111',
      textColor: '#fff',
      links: [
        { label: '查看画廊', href: '/gallery', ariaLabel: 'go-gallery', onClick: (e) => { e.preventDefault(); navigate('/gallery'); } },
      ],
    },
    {
      label: '圈地系统',
      bgColor: '#111',
      textColor: '#fff',
      links: [
        { label: '查看圈地指南', href: '/claims', ariaLabel: 'go-claims', onClick: (e) => { e.preventDefault(); navigate('/claims'); } },
      ],
    },
    {
      label: '加入教程',
      bgColor: '#111',
      textColor: '#fff',
      links: [
        { label: '加入教程', href: '/tutorial', ariaLabel: 'go-tutorial', onClick: (e) => { e.preventDefault(); navigate('/tutorial'); } },
      ],
    },
  ];

  return (
    <CardNav
      items={items}
      baseColor="#000"
      menuColor="#fff"
      buttonBgColor="#111"
      buttonTextColor="#fff"
      onCtaClick={() => navigate('/tutorial')}
    />
  );
};

export default Header;