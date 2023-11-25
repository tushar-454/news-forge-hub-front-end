import Container from '../../Shared/Container';
import SectionTitle from '../../Shared/SectionTitle';
import RadialChart from './RadialChart';

const Statistics = () => {
  const statisticsVal = {
    arr: [
      {
        count: 200,
        category: 'All Users',
      },
      {
        count: 100,
        category: 'Normal user',
      },
      {
        count: 60,
        category: 'Premium users',
      },
      {
        count: 400,
        category: 'Articals',
      },
    ],
    totalUser: 810,
  };
  return (
    <section>
      <Container>
        <SectionTitle>Our Statistics</SectionTitle>
        {/* Statistics wrapper  */}
        <div className='grid gap-28 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-32'>
          {statisticsVal.arr.map((item, index) => (
            <RadialChart
              key={index}
              count={item.count}
              circleValue={450 - item.count}
              category={item.category}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Statistics;
