import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("EjMzVf3ggjZiRd3Ts"); // Replace with your public key

const DeleteAccountPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!email) {
      alert('Please enter your email');
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_nrl15hc',
        'template_vj553mk',
        {
          to_email: 'ashu@snacc.fit, dhruv@snacc.fit',
          user_email: email,
          subject: 'Delete this account',
          message: `Please delete the account associated with email: ${email}. Also make sure that you send a confirmation email to the user. `
        }
      );

      alert('Your account will be deleted soon. You will receive a confirmation email within a few hours.');
      setEmail('');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send deletion request. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ padding: '50px', paddingLeft: '200px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Account Deletion Information</h1>
      <p>
        If you wish to delete your account, please follow these steps:
      </p>
      <ol>
        <li><Link to="/get">Login to the app</Link>.</li>
        <li>Go to your settings page.</li>
        <li>Click on "Delete Account".</li>
      </ol>
      <p>
        Upon clicking "Delete Account", all your data will be deleted immediately.
      </p>

      <h2>Delete Account Without App</h2>
      <p>
        If you would like to delete your account information without installing the app, enter your email ID here:
      </p>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '8px',
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            width: '200px',
            display: 'inline-block'
          }}
          disabled={isLoading}
        />
        <button
          onClick={() => {
            if (window.confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
              handleSubmit();
            }
          }}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: isLoading ? 'not-allowed' : 'pointer',
            opacity: isLoading ? 0.7 : 1
          }}
          disabled={isLoading}
        >
          {isLoading ? 'Sending...' : 'Delete My Account'}
        </button>
      </div>

      <h2>Data Deletion Details</h2>
      <p>
        The following types of data will be deleted:
      </p>
      <ul>
        <li>Personal information such as name, email, and address.</li>
        <li>Usage data including preferences and settings.</li>
        <li>Any other data associated with your account.</li>
      </ul>
      <p>
        Note that some data may be retained for a limited period due to legal or regulatory requirements.
      </p>
    </div>
  );
};

export default DeleteAccountPage;
