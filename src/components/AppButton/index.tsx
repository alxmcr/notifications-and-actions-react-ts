import './AppButton.scss';

type AppButtonProps = {
  text: string;
  level: 'success' | 'info' | 'error';
  handleClick?: () => void;
};

export default function AppButton({
  text = '',
  level = 'info',
  handleClick,
}: AppButtonProps) {
  if (handleClick) {
    return (
      <button
        type="button"
        className={`app-button app-button--${level}`}
        onClick={handleClick}
      >
        {text}
      </button>
    );
  }
}
