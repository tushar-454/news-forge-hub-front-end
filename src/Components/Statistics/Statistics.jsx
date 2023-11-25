import Container from '../../Shared/Container';
import SectionTitle from '../../Shared/SectionTitle';
import RadialChart from './RadialChart';

const Statistics = () => {
  const statisticsVal = {
    arr: [
      {
        count: 260,
        category: 'All Users',
      },
      {
        count: 200,
        category: 'Normal user',
      },
      {
        count: 60,
        category: 'Premium users',
      },
      {
        count: 1024,
        category: 'Articals',
      },
    ],
    totalUser: 1544,
  };
  return (
    <section>
      <Container>
        <SectionTitle>Our Statistics</SectionTitle>
        {/* Statistics wrapper  */}
        <div className=' flex justify-center'>
          <div className='w-full lg:w-[50rem] grid gap-28 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-32'>
            {statisticsVal.arr.map((item, index) => (
              <RadialChart
                key={index}
                count={item.count}
                circleValue={450 - 450 * (item.count / statisticsVal.totalUser)}
                category={item.category}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Statistics;
