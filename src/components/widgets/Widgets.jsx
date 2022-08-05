import React from 'react';
import './widgets.scss';
import {
   AccountBalanceWalletOutlined,
   KeyboardArrowUp,
   MonetizationOnOutlined,
   PersonOutlined,
   ShoppingCartOutlined,
} from '@mui/icons-material';

const Widgets = ({ type }) => {
   let data;

   // temporary
   const amount = 100;
   const diff = 20;

   switch (type) {
      case 'user':
         data = {
            title: 'USERS',
            isMoney: false,
            link: 'See all users',
            icon: (
               <PersonOutlined
                  className="icon"
                  style={{
                     color: 'crimson',
                     backgroundColor: 'rgba(255, 0, 0, 0.2)',
                  }}
               />
            ),
         };
         break;
      case 'order':
         data = {
            title: 'ORDERS',
            isMoney: false,
            link: 'View all orders',
            icon: (
               <ShoppingCartOutlined
                  className="icon"
                  style={{
                     backgroundColor: 'rgba(218, 165, 32, 0.2)',
                     color: 'goldenrod',
                  }}
               />
            ),
         };
         break;
      case 'earning':
         data = {
            title: 'EARNINGS',
            isMoney: true,
            link: 'View net earnings',
            icon: (
               <MonetizationOnOutlined
                  className="icon"
                  style={{
                     backgroundColor: 'rgba(0, 128, 0, 0.2)',
                     color: 'green',
                  }}
               />
            ),
         };
         break;
      case 'balance':
         data = {
            title: 'BALANCE',
            isMoney: true,
            link: 'See details',
            icon: (
               <AccountBalanceWalletOutlined
                  className="icon"
                  style={{
                     backgroundColor: 'rgba(128, 0, 128, 0.2)',
                     color: 'purple',
                  }}
               />
            ),
         };
         break;
      default:
         break;
   }

   return (
      <div className="widget">
         <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">
               {' '}
               {data.isMoney && '$'} {amount}
            </span>
            <span className="link">{data.link}</span>
         </div>
         <div className="left">
            <div className="percentage positive">
               <KeyboardArrowUp />
               {diff} %
            </div>
            {data.icon}
         </div>
      </div>
   );
};

export default Widgets;
