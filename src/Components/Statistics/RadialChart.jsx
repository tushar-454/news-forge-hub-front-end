import CountUp from 'react-countup';

import PropTypes from 'prop-types';
const RadialChart = ({ circleValue = 450, category, count }) => {
  return (
    <div className='skill'>
      <div className='outer'>
        <div className='inner'>
          <div className='font-semibold text-[#555] text-3xl'>
            <CountUp start={0} end={count} duration={2.75} separator=',' />
          </div>
        </div>
      </div>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        width='160px'
        height='160px'
        className='absolute top-0 left-0'
      >
        <defs>
          <linearGradient id='GradientColor'>
            <stop offset='0%' stopColor='#DA22FF' />
            <stop offset='100%' stopColor='#9733EE' />
          </linearGradient>
        </defs>
        <circle
          cx='80'
          cy='80'
          r='70'
          strokeLinecap='round'
          className='circle'
          style={{ strokeDasharray: '450', strokeDashoffset: circleValue }}
        />
      </svg>
      <h1 className='text-3xl text-center my-2'>{category}</h1>
    </div>
  );
};
RadialChart.propTypes = {
  circleValue: PropTypes.number,
  category: PropTypes.string,
  count: PropTypes.number,
};
export default RadialChart;
