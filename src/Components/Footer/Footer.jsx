import { GoClock } from 'react-icons/go';
import { Link } from 'react-router-dom';
import Container from '../../Shared/Container';
import Logo from '../Navbar/Logo';

const Footer = () => {
  return (
    <>
      <footer className='bg-[#141A34] text-white'>
        <Container>
          {/* footer wrapper  */}
          <div className='grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 py-10'>
            {/* footer logo  */}
            <div>
              <Logo />
              <p className='mt-3'>
                Stay informed with our comprehensive coverage of breaking news,
                insightful articles, and in-depth analysis across various
                categories. Explore the latest updates in politics, technology,
                entertainment, business, sports, and more. Our mission is to
                deliver credible, timely, and diverse content to keep you
                informed and engaged. Join us as we bring you the stories that
                matter.
              </p>
            </div>
            {/* news category 1 */}
            <div>
              <h1 className='text-2xl my-4'>Categories</h1>
              <p className='flex flex-col gap-2 mt-11'>
                <Link>Technology</Link>
                <Link>Politics</Link>
                <Link>Middle East</Link>
                <Link>Culture Foram </Link>
                <Link>United Kingdom </Link>
                <Link>Features</Link>
              </p>
            </div>
            {/* news category 2 */}
            <div>
              <h1 className='text-2xl my-4'>Categories</h1>
              <p className='flex flex-col gap-2 mt-11'>
                <Link>Business Leaders</Link>
                <Link>Markets</Link>
                <Link>Australia</Link>
                <Link>Celebrity News</Link>
                <Link>Culture Foram</Link>
                <Link>TV News</Link>
              </p>
            </div>
            {/* news category 3 */}
            <div>
              <h1 className='text-2xl my-4'>Top Article This Week</h1>
              {/* top artical wrapper  */}
              <div className='flex flex-col gap-4 mt-11'>
                <div className='flex justify-center gap-4 p-4 bg-[#F0FDCD] rounded-lg'>
                  <img
                    src='https://new.axilthemes.com/demo/template/blogxpress/demo/assets/media/blog/post46.webp'
                    className='rounded-lg'
                  />
                  <p className='text-black font-semibold'>
                    <Link>Smarter Food Choices Tips For Women</Link>
                    <small className='flex items-center gap-1 my-3'>
                      <span>
                        <GoClock />
                      </span>{' '}
                      7 min read
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
      <footer className='bg-[#0F1430] text-white py-5 text-center '>
        © 2023. All rights reserved by NewsForge.
      </footer>
    </>
  );
};

export default Footer;
