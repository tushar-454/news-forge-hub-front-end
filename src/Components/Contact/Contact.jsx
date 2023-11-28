import Map from 'react-map-gl';
import Container from '../../Shared/Container';
import SectionTitle from '../../Shared/SectionTitle';

const Contact = () => {
  return (
    <section>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <p className='w-full md:w-[768px] mx-auto mb-10'>
          Explore our location using the interactive map below! Our contact page
          features an intuitive map interface to help you find our office or
          headquarters easily. Whether youre seeking directions or simply want
          to visualize our proximity, this map section provides an engaging and
          user-friendly way to connect with us.
        </p>
        <div className='my-10 mb-20'>
          <Map
            mapLib={import('mapbox-gl')}
            initialViewState={{
              longitude: -77.03651025867057,
              latitude: 38.90729703481214,
              zoom: 10,
            }}
            style={{ width: '100%', height: 400 }}
            mapStyle='mapbox://styles/mapbox/streets-v9'
            mapboxAccessToken={import.meta.env.VITE_MAP_KEY}
          />
        </div>
      </Container>
    </section>
  );
};

export default Contact;
