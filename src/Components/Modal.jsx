import '../Styles/Modal.css';
import PropTypes from 'prop-types'; // Import PropTypes for validation
import { useState, useEffect } from 'react'; // Create a custom CSS file for the modal

const  Modal = ({onProceed }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleProceed = () => {
    onProceed();
  };

  useEffect(() => {
    // Add 'hidden-background' class to app-content only
    const appContent = document.getElementById('app-content');
  
    if (appContent) {
      appContent.classList.add('hidden-background');
    }
  
    return () => {
      if (appContent) {
        appContent.classList.remove('hidden-background');
      }
    };
  }, []);
  

  return (
    <div className="modal-overlay">
      <div className="modal-container container">
        <div className="row justify-content-center align-items-center">
          <div className="modal-content col-md-10 col-lg-8 col-sm-12 p-4">
            {/* Modal Header */}
            <div className="modal-header">
              <h2 className="modal-title text-center">Data Privacy and Consent Notice</h2>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <p>
                Welcome to the Collaboration Skills Database (CSDB)! Your privacy is our priority. By accessing the CSDB,
                you agree to the following:
              </p>
              <ul>
                <li>
                  <strong>What We Collect:</strong> Information such as your name, skills, availability, and Discord ID
                  to enhance collaboration and connect you with relevant opportunities.
                </li>
                <li>
                  <strong>How We Protect Your Data:</strong> Your data is securely encrypted and stored on a compliant
                  platform. Only authorized personnel can access your information.
                </li>
                <li>
                  <strong>How We Use Your Data:</strong> Your data will only be used to match skills, build teams, and
                  support project coordination. It will never be shared with third parties without your permission.
                </li>
              </ul>
              <p>
                <strong>Your rights:</strong> Correct or delete your data anytime. Withdraw your consent and stop
                participating at any point.
              </p>
              <p>
                By clicking below, you confirm that you understand and agree to our data protection practices. You also
                consent to the collection and use of your data as described.
              </p>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer d-flex justify-content-between align-items-center">
              <div className="form-check d-flex align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  id="exampleCheckbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label className="form-check-label" htmlFor="exampleCheckbox">
                  I Agree and Proceed
                </label>
              </div>
              <button
                type="button"
                className="btn btn-primary proceed-button"
                disabled={!isChecked}
                onClick={handleProceed}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Define prop types
Modal.propTypes = {
  onProceed: PropTypes.func.isRequired, // onProceed must be a function and is required
};

export default Modal;
