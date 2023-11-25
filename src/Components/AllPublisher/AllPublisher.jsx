import Container from '../../Shared/Container';
import SectionTitle from '../../Shared/SectionTitle';

const publishersArr = [{}, {}, {}, {}, {}, {}, {}, {}];

const AllPublisher = () => {
  return (
    <section>
      <Container>
        <SectionTitle>Publishers</SectionTitle>
        {/* publisher wrapper  */}
        <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10'>
          {publishersArr.map((item, index) => (
            <div key={index} className='relative bg-[#C5FBE1] p-5 rounded-lg'>
              <img
                src='https://new.axilthemes.com/demo/template/blogxpress/demo/assets/media/blog/post42.webp'
                className='w-full rounded-lg object-cover'
              />
              <div className='absolute bottom-0 left-0 w-56 text-center font-semibold bg-[#fff] p-5 rounded-lg'>
                Jhon Dou Publisher of The Daily Star
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AllPublisher;
