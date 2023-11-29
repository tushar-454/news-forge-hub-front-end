import useArticles from '../../Hook/useArticles';
import useUserStatistics from '../../Hook/useUserStatistics';
import Container from '../../Shared/Container';
import SectionTitle from '../../Shared/SectionTitle';
import RadialChart from './RadialChart';

const Statistics = () => {
  const { userStatistics, userStatisticsLoad } = useUserStatistics();
  const { allArticles, isLoading } = useArticles();

  return (
    <section>
      <Container>
        <SectionTitle>Our Statistics</SectionTitle>
        {/* Statistics wrapper  */}
        <div className=' flex justify-center'>
          <div className='w-full lg:w-[50rem] grid gap-28 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-32'>
            <RadialChart
              count={!userStatisticsLoad ? userStatistics?.totalUser : 0}
              circleValue={450 - 450}
              category={'All user'}
            />
            {!userStatisticsLoad &&
              userStatistics?.usersStatistics?.map((item, index) => (
                <RadialChart
                  key={index}
                  count={item.count}
                  circleValue={
                    450 - 450 * (item.count / userStatistics?.totalUser)
                  }
                  category={item.isPremium ? 'Premium users' : 'Normal user'}
                />
              ))}
            <RadialChart
              count={!isLoading ? allArticles?.length : 0}
              circleValue={450 - 450}
              category={'All Articles'}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Statistics;
