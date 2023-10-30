import ActionsSection from '../../components/_sections/ActionsSection';
import './HomePage.scss';

export default function HomePage() {
  return (
    <main className="home">
      <h1 className="home__title">Actions and notifications!</h1>
      <ActionsSection />
    </main>
  );
}
