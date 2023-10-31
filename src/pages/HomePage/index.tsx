import FormTokenContainer from '../../reusables/_containers/FormTokenContainer';
import ActionsSection from '../../components/_sections/ActionsSection';
import UsersListContainer from '../../reusables/_containers/UsersListContainer';
import './HomePage.scss';
import UsersProvider from '../../providers/UsersProvider';

export default function HomePage() {
  return (
    <UsersProvider>
      <main className="home">
        <h1 className="home__title">Actions and notifications!</h1>
        <FormTokenContainer />
        <hr />
        <UsersListContainer />
        <hr />
        <ActionsSection />
      </main>
    </UsersProvider>
  );
}
