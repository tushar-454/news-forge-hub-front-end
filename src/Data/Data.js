import {
  AiOutlineFileAdd,
  AiOutlineHome,
  AiOutlineWallet,
} from 'react-icons/ai';
import { FaAmazonPay } from 'react-icons/fa';
import { RiArticleLine, RiDashboardLine } from 'react-icons/ri';
import { TbPremiumRights } from 'react-icons/tb';

const menuItems = [
  {
    name: 'Home',
    path: '/',
    icon: AiOutlineHome,
  },
  {
    name: 'Add Articles',
    path: '/add-articles',
    icon: AiOutlineFileAdd,
  },
  {
    name: 'All Articles',
    path: '/all-articles',
    icon: AiOutlineWallet,
  },
  {
    name: 'Subscriptions',
    path: '/subscriptions',
    icon: FaAmazonPay,
  },
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: RiDashboardLine,
  },
  {
    name: 'My Articles',
    path: '/my-articles',
    icon: RiArticleLine,
  },
  {
    name: 'Premium Articles',
    path: '/premium-articles',
    icon: TbPremiumRights,
  },
];

export { menuItems };
