import './AppButton.scss';

type AppButtonProps = {
  text: string;
  level: 'success' | 'info' | 'error';
};

export default function AppButton({
  text = '',
  level = 'info',
}: AppButtonProps) {
  return (
    <button type="button" className={`app-button app-button--${level}`}>
      {text}
    </button>
  );
}
