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
    name: 'Add Articals',
    path: '/',
    icon: AiOutlineFileAdd,
  },
  {
    name: 'All Articals',
    path: '/',
    icon: AiOutlineWallet,
  },
  {
    name: 'Subscriptions',
    path: '/',
    icon: FaAmazonPay,
  },
  {
    name: 'Dashboard',
    path: '/',
    icon: RiDashboardLine,
  },
  {
    name: 'My Articals',
    path: '/',
    icon: RiArticleLine,
  },
  {
    name: 'Premium Articals',
    path: '/',
    icon: TbPremiumRights,
  },
];

export { menuItems };
