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
    path: '/add-articals',
    icon: AiOutlineFileAdd,
  },
  {
    name: 'All Articals',
    path: '/all-articals',
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
    name: 'My Articals',
    path: '/my-articals',
    icon: RiArticleLine,
  },
  {
    name: 'Premium Articals',
    path: '/premium-aritcals',
    icon: TbPremiumRights,
  },
];

export { menuItems };
