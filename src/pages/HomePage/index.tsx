import FormTokenContainer from '../../components/_containers/FormTokenContainer';
import TaskListContainer from '../../components/_containers/TaskListContainer';
import ActionsSection from '../../components/_sections/ActionsSection';
import './HomePage.scss';

export default function HomePage() {
  return (
    <main className="home">
      <h1 className="home__title">Actions and notifications!</h1>
      <FormTokenContainer />
      <hr />
      <TaskListContainer />
      <hr />
      <ActionsSection />
    </main>
  );
}
