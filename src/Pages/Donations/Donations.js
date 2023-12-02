
import React, { useState } from 'react';
import './DonationsPage.css';

const DonationsPage = () => {
  const [donationAmount, setDonationAmount] = useState(100);
  const [totalAmount, setTotalAmount] = useState(100);
  const [selectedTime, setSelectedTime] = useState('weekly');
  const [selectedAmount, setSelectedAmount] = useState('$10');

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleAmountChange = (event) => {
    setSelectedAmount(event.target.value);
  };

  const handleSubmit = () => {
    console.log(`You selected to donate ${selectedAmount} ${selectedTime}.`);
  };

  const handleDonateNow = () => {
    setTotalAmount(totalAmount + parseInt(donationAmount, 10)); 
    setDonationAmount(100);
  };

  const handleDonationChange = (event) => {
    setDonationAmount(event.target.value);
  };

  return (
    <div>
       <img src="https://images.unsplash.com/photo-1655666582790-6ddaf5f194a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&w=1000&q=80" alt="Nature Image" class="nature-image"></img>
      <h1>Donations</h1>
      <p className='donations-quote'>"Recycle for a greener tomorrow, donate to save lives today. Small actions, big impact."</p>
      <div className="donationsBox">
        <h2>Donate Now</h2>
        <div className="time-toggle">
    <div className="time-option">
        <input
            type="radio"
            id="weekly"
            name="time"
            value="weekly"
            checked={selectedTime === 'weekly'}
            onChange={handleTimeChange}
        />
        <label htmlFor="weekly">Weekly</label>
    </div>
    <div className="time-option">
        <input
            type="radio"
            id="monthly"
            name="time"
            value="monthly"
            checked={selectedTime === 'monthly'}
            onChange={handleTimeChange}
        />
        <label htmlFor="monthly">Monthly</label>
    </div>
    <div className="time-option">
        <input
            type="radio"
            id="monthly"
            name="time"
            value="monthly"
            checked={selectedTime === 'monthly'}
            onChange={handleTimeChange}
        />
        <label htmlFor="monthly">One-off</label>
    </div>
</div>

        <div className="amount-selector">
          <select value={selectedAmount} onChange={handleAmountChange}>
          <option value="$10">£5</option>
            <option value="$10">£10</option>
            <option value="$20">£20</option>
            <option value="$50">£50</option>
            <option value="$100">£100</option>
            <option value="$100">£100,000,000</option>
          </select>
        </div>
        <button className="donate-button" onClick={handleSubmit}>
          Donate
        </button>
      </div>
      <div className="donation-image"></div>
      {/* <div>
        <p>Donation amount: £{donationAmount}</p>
        <p>Total: £{totalAmount}</p>

        <input
          type="number"
          value={donationAmount}
          onChange={handleDonationChange}
        />

        <button onClick={handleDonateNow}>Donate now</button>
      </div> */}
    </div>
  );
};

export default DonationsPage;
