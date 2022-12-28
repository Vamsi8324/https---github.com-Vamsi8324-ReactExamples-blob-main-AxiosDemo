import { Link, useParams } from 'react-router-dom';

const ImageContent = ({ data }) => {
  console.log(useParams());
  const { dataId } = useParams();

  const product = data.find((data) => data.id === dataId); 
  const { image, name } = product;
  return (
    <section className='section product'>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      
    </section>
  );
};

export default ImageContent;