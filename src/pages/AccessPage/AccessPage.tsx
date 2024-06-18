import { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import UnderConstruction from '../../components/UnderConstruction';
import './AccessPage.css'

const AccessPage = () => {
  Modal.setAppElement('#root');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState('');
  const correctPassword = 'Su$hi';

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === correctPassword) {
      setIsModalOpen(false);
    } else {
      alert('Incorrect password!');
    }
  };

  return (
    <>
    <div className="section">
    <UnderConstruction />
      <button 
      className='access-btn btn'
      onClick={handleOpenModal}>Access Test Page</button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        contentLabel="Password Protected Modal"
        className="access-modal"
      >
        <h2>Enter Password To Continue</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            className='password-input'
          />
          <Link to="/access-granted">
          <button 
          className="btn submit-access-btn"
          type="submit">Submit</button>
          </Link>
        </form>
      </Modal>
    </div>
    </>
  );
};

export default AccessPage;