import { AccordionItem as Item } from '@szhsin/react-accordion';
import PropTypes from 'prop-types';
import chevron from '../../assets/icon/chevron-down.svg';

const AccordionItem = ({ header, ...rest }) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && 'rotate-180'
          }`}
          src={chevron}
          alt='Chevron'
        />
      </>
    )}
    className='border-b'
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-100 ${
          isEnter && 'bg-slate-200'
        }`,
    }}
    contentProps={{
      className: 'transition-height duration-200 ease-out',
    }}
    panelProps={{ className: 'p-4' }}
  />
);
AccordionItem.propTypes = {
  header: PropTypes.string,
};
export default AccordionItem;
