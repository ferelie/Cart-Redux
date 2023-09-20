import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 19.99,
    title: 'The Last of Us Remastered (PS4)',
    description: 'Experience an emotional story in a post-apocalyptic world.',
  },
  {
    id: 'p2',
    price: 29.99,
    title: 'Uncharted 4: A Thief\'s End (PS4)',
    description: 'Join Nathan Drake on his final adventure in this action-packed game.',
  },
  {
    id: 'p3',
    price: 9.99,
    title: 'Bloodborne (PS4)',
    description: 'Face challenging enemies and uncover dark secrets in Yharnam.',
  },
  {
    id: 'p4',
    price: 49.99,
    title: 'God of War (PS4)',
    description: 'Embark on a mythological journey as Kratos and his son Atreus.',
  },
  {
    id: 'p5',
    price: 14.99,
    title: 'Horizon Zero Dawn (PS4)',
    description: 'Explore a breathtaking open world and battle robotic creatures.',
  },
  {
    id: 'p6',
    price: 39.99,
    title: 'Marvel\'s Spider-Man (PS4)',
    description: 'Swing through the streets of New York City as the friendly neighborhood Spider-Man.',
  },
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
