import UsersProvider from '../../providers/UsersProvider';
import FormTokenContainer from '../../reusables/_containers/FormTokenContainer';
import UsersListContainer from '../../reusables/_containers/UsersListContainer';
import './HomePage.scss';

export default function HomePage() {
  return (
    <UsersProvider>
      <main className="home">
        <h1 className="home__title">Actions and notifications!</h1>
        <FormTokenContainer />
        <hr />
        <UsersListContainer />
        <hr />
      </main>
    </UsersProvider>
  );
}
