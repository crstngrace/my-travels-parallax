import SectionMotion from '../SectionMotion';
import './Article.scss';

const articles = (props) => {
  const { index, image, title, date, description } = props;
  const isEven = index % 2 === 0 ? true : false;
  let headline, subheadline;

  if (index === 0) {
    headline = (
      <h1 className='tracked-tight ttu f1 f-subheadline-ns pv0 mv0'>
        My Travels
      </h1>
    );
    subheadline = (
      <p className='w-60-ns f7 f4-ns'>
        Lorem ipsum dolor sit amet. Qui autem vero hic internos quia repellat
        cupiditate est velit velit quo omnis quidem eos atque eligendi rem nobis
        necessitatibus.
      </p>
    );
  }

  return (
    <SectionMotion className='article-container'>
      <div
        className='article-image'
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className='headline lh-solid white absolute ph4 ph5-ns'>
          {headline}
          {subheadline}
        </div>
      </div>
      <article
        className={
          'article-card main-div ph5 pv4 flex-ns ' +
          (isEven ? 'flex-row-reverse-ns' : 'flex-row-ns')
        }
      >
        <div
          className={
            'article-header w-100 w-30-ns pb4 ' +
            (isEven ? 'tr-ns pl3-ns' : 'tl-ns pr3-ns')
          }
        >
          <h1 className='article-title f1 ttu mv0'>{title}</h1>
          <h2 className='article-date f2 ttu ma0'>{date}</h2>
        </div>

        <div
          className='article-content w-100 w-70-ns'
          dangerouslySetInnerHTML={{ __html: description }}
        ></div>
      </article>
    </SectionMotion>
  );
};

export default articles;
