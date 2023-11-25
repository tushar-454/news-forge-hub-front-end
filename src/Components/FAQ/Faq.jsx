import { Accordion } from '@szhsin/react-accordion';
import Container from '../../Shared/Container';
import SectionTitle from '../../Shared/SectionTitle';
import AccordionItem from './AccordionItem';

const faqs = [
  {
    question: 'How can I submit an article or news for publication?',
    answer:
      'To submit an article or news for publication, simply navigate to the "Submit Article" section on our website. Follow the instructions to fill out the required information, upload your content, and submit it for review by our editorial team.',
  },
  {
    question: 'What type of content do you accept for publication?',
    answer:
      'We accept a wide range of content, including news articles, opinion pieces, feature stories, interviews, and more. The content should be relevant, original, and adhere to our editorial guidelines and standards.',
  },
  {
    question: 'How long does it take for an article to be published?',
    answer:
      'The time taken for publication varies based on the review process and editorial schedule. Typically, articles go through a review process for quality and relevance. Once approved, it will be scheduled for publication, which might take a few days.',
  },
  {
    question: 'Can I edit or update my published articles?',
    answer:
      'Yes, you can edit or update your published articles. Log in to your account, navigate to the "My Articles" section, and select the article you wish to edit. Make the necessary changes and save them. The updated version will replace the previously published article.',
  },
  {
    question: 'How can I contact your editorial team?',
    answer:
      'You can contact our editorial team by visiting the "Contact Us" page on our website. Fill out the contact form or use the provided email address or phone number to get in touch with our editorial staff.',
  },
];

const Faq = () => {
  return (
    <section>
      <Container>
        <SectionTitle>FAQ</SectionTitle>
        <div className='w-full md:max-w-screen-md mx-auto mb-16'>
          <Accordion transition transitionTimeout={250}>
            {faqs.map(({ question, answer }, i) => (
              <AccordionItem key={i} header={question}>
                {answer}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
