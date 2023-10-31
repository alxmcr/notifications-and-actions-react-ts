import React from 'react';
import './FormToken.scss';

export default function FormToken() {
  const handlerSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();

    console.log('login');
  };

  return (
    <form className="form-token" onSubmit={handlerSubmit}>
      <div className="form-token__formfield">
        <label className="form-token__label">Token</label>
        <input type="text" className="form-token__input" required />
      </div>
      <div className="form-token__actions">
        <button type="submit" className="form-token__button">
          Login
        </button>
      </div>
    </form>
  );
}
