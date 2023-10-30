import AppButton from '../../AppButton';

export default function ActionsSection() {
  const handleLogin = () => {
    console.log('Login');
  };

  const handleError = () => {
    console.log('Error');
  };

  const handleCompleted = () => {
    console.log('Completed');
  };

  const handleCreation = () => {
    console.log('Creation');
  };

  return (
    <section className="actions">
      <AppButton text="Login" level="info" handleClick={handleLogin} />
      <AppButton text="Delete" level="error" handleClick={handleError} />
      <AppButton text="Completed" level="info" handleClick={handleCompleted} />
      <AppButton text="Create" level="info" handleClick={handleCreation} />
    </section>
  );
}
