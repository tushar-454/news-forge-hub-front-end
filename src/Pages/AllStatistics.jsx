import { Chart } from 'react-google-charts';
import { Helmet } from 'react-helmet';
import useAdminStatistics from '../Hook/useAdminStatistics';
import PageTitle from '../Shared/PageTitle';

const AllStatistics = () => {
  const { adminStatistics, isLoading } = useAdminStatistics();
  const picData =
    !isLoading &&
    adminStatistics.publicationStatistics.map((item) => {
      const picChatArr = [item.publication, item.articlesCount];
      return picChatArr;
    });
  const data = [['Publication', 'Publish article']];
  if (!isLoading) {
    data.push(...picData);
  }
  return (
    <section>
      <Helmet>
        <title>Statistics | NewsForge Hub</title>
      </Helmet>
      <PageTitle>Statistics</PageTitle>
      <div>
        <div>
          <h1 className='text-3xl text-center my-3'>
            Publication Statistics Pie Chart
          </h1>
          <Chart
            chartType='PieChart'
            data={data}
            width={'100%'}
            height={'400px'}
          />
        </div>
        <div>
          <h1 className='text-3xl text-center my-3'>
            Publication Statistics Bar Chart
          </h1>
          <Chart
            chartType='BarChart'
            data={data}
            width={'100%'}
            height={'400px'}
          />
        </div>
        <div>
          <h1 className='text-3xl text-center my-3'>
            Publication Statistics Scatter Chart
          </h1>
          <Chart chartType='Scatter' width='100%' height='400px' data={data} />
        </div>
      </div>
    </section>
  );
};

export default AllStatistics;
