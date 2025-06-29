import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'Juan',
    lastName: 'Dela Cruz',
    email: 'juan.delacruz@email.com',
    phone: '+63 999 123 4567',
    address: '123 Main Street, Alaminos City, Pangasinan',
    barangay: 'Poblacion'
  });

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = () => {
    // This would typically save to backend
    alert('Profile updated successfully!');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  return (
    <div className="profile-page">
      <div className="container">
        <div className="profile-header">
          <h1>My Profile</h1>
          <p>Manage your account information and preferences</p>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <div className="section-header">
              <h2>Personal Information</h2>
              {!isEditing ? (
                <button 
                  className="edit-btn"
                  onClick={() => setIsEditing(true)}
                >
                  <FaEdit /> Edit
                </button>
              ) : (
                <div className="edit-actions">
                  <button 
                    className="save-btn"
                    onClick={handleSave}
                  >
                    <FaSave /> Save
                  </button>
                  <button 
                    className="cancel-btn"
                    onClick={handleCancel}
                  >
                    <FaTimes /> Cancel
                  </button>
                </div>
              )}
            </div>

            <div className="profile-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <div className="input-group">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      name="firstName"
                      value={profileData.firstName}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Last Name</label>
                  <div className="input-group">
                    <FaUser className="input-icon" />
                    <input
                      type="text"
                      name="lastName"
                      value={profileData.lastName}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <div className="input-group">
                  <FaEnvelope className="input-icon" />
                  <input
                    type="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <div className="input-group">
                  <FaPhone className="input-icon" />
                  <input
                    type="tel"
                    name="phone"
                    value={profileData.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Complete Address</label>
                <div className="input-group">
                  <FaMapMarkerAlt className="input-icon" />
                  <input
                    type="text"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Barangay</label>
                <div className="input-group">
                  <FaMapMarkerAlt className="input-icon" />
                  <select
                    name="barangay"
                    value={profileData.barangay}
                    onChange={handleChange}
                    disabled={!isEditing}
                  >
                    <option value="Poblacion">Poblacion</option>
                    <option value="Bani">Bani</option>
                    <option value="Alos">Alos</option>
                    <option value="Baleyadaan">Baleyadaan</option>
                    <option value="Bisocol">Bisocol</option>
                    <option value="Bolaney">Bolaney</option>
                    <option value="Bued">Bued</option>
                    <option value="Cabatuan">Cabatuan</option>
                    <option value="Cayucay">Cayucay</option>
                    <option value="Dulacac">Dulacac</option>
                    <option value="Inerangan">Inerangan</option>
                    <option value="Landoc">Landoc</option>
                    <option value="Maawi">Maawi</option>
                    <option value="Macatiw">Macatiw</option>
                    <option value="Magsaysay">Magsaysay</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Palamis">Palamis</option>
                    <option value="Pandan">Pandan</option>
                    <option value="Pangapisan">Pangapisan</option>
                    <option value="Sabangan">Sabangan</option>
                    <option value="San Antonio">San Antonio</option>
                    <option value="San Jose">San Jose</option>
                    <option value="San Roque">San Roque</option>
                    <option value="San Vicente">San Vicente</option>
                    <option value="Santa Maria">Santa Maria</option>
                    <option value="Tanaytay">Tanaytay</option>
                    <option value="Tangcarang">Tangcarang</option>
                    <option value="Tawin-Tawin">Tawin-Tawin</option>
                    <option value="Telbang">Telbang</option>
                    <option value="Victoria">Victoria</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Account Settings</h2>
            <div className="settings-list">
              <div className="setting-item">
                <div className="setting-info">
                  <h3>Change Password</h3>
                  <p>Update your account password</p>
                </div>
                <button className="setting-btn">Change</button>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h3>Notification Preferences</h3>
                  <p>Manage your email and SMS notifications</p>
                </div>
                <button className="setting-btn">Manage</button>
              </div>

              <div className="setting-item">
                <div className="setting-info">
                  <h3>Privacy Settings</h3>
                  <p>Control your privacy and data sharing</p>
                </div>
                <button className="setting-btn">Settings</button>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Local Delivery Preferences</h2>
            <div className="delivery-preferences">
              <div className="preference-item">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  <span>Receive local delivery notifications</span>
                </label>
              </div>
              <div className="preference-item">
                <label className="checkbox-label">
                  <input type="checkbox" defaultChecked />
                  <span>Allow local sellers to contact me</span>
                </label>
              </div>
              <div className="preference-item">
                <label className="checkbox-label">
                  <input type="checkbox" />
                  <span>Share my location for better delivery estimates</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile; 