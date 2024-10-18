import React, { useState, useEffect } from 'react';
import { db, auth } from '../firebaseConfig';  // Import the initialized Firestore instance and auth
import { collection, addDoc, doc } from "firebase/firestore"; // Import Firestore methods

const MpesaPaymentsUI = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [paymentSubmitted, setPaymentSubmitted] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleClose = () => {
        setMessage('');
        setPaymentSubmitted(false);
        setPhoneNumber('');
        alert('UI Closed');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!phoneNumber) {
            setMessage('Please enter a valid phone number.');
            return;
        }

        if (!currentUser) {
            setMessage('You must be logged in to make a payment.');
            return;
        }

        try {
            // Create a payment document
            const paymentDoc = {
                phoneNumber: phoneNumber,
                amount: 1000,
                paymentStatus: 'Pending',
                timestamp: new Date(),
            };

            // Add the payment document to Firestore under the user's node
            const userRef = doc(db, 'users', currentUser.uid);
            const paymentsCollectionRef = collection(userRef, 'payments');
            await addDoc(paymentsCollectionRef, paymentDoc);

            setPaymentSubmitted(true);
            setMessage('Please send KES 1000 to MPESA number 0795216820 to get premium service.');
        } catch (error) {
            console.error("Error submitting payment: ", error);
            setMessage('Error submitting payment. Please try again.');
        }
    };

    return (
        <div style={styles.container}>
            {/* Closing Button */}
            <div style={styles.closeButton} onClick={handleClose}>X</div>
            
            <h1 style={styles.heading}>MPESA Payment</h1>
            {!paymentSubmitted ? (
                <form onSubmit={handleSubmit} style={styles.form}>
                    <p style={styles.sendMoneyText}>Send Money</p>
                    <p style={styles.phone}>Type your correct phone number that you will use for payments</p>
                    <label htmlFor="phoneNumber" style={styles.label}>Enter Your Phone Number:</label>
                    <input
                        type="tel"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        required
                        pattern="[0-9]{10}"
                        placeholder="e.g., 0712345678"
                        style={styles.input}
                    />
                    <button type="submit" style={styles.button}>
                        Submit
                    </button>
                </form>
            ) : (
                <div>
                    <p style={styles.message}>{message}</p>
                    <p style={styles.message}>Please WhatsApp or call 0795216820 after payment for premium service.</p>
                    <p style={styles.message}>Check back later after successful payments.</p>
                </div>
            )}
        </div>
    );
};

// Styles Object
const styles = {
    container: {
        padding: '20px',
        maxWidth: '400px',
        margin: 'auto',
        textAlign: 'center',
        position: 'relative',
    },
    closeButton: {
        position: 'absolute',
        top: '10px',
        left: '10px',
        width: '20px',
        height: '20px',
        backgroundColor: 'red',
        color: 'white',
        fontSize: '14px',
        fontWeight: 'bold',
        textAlign: 'center',
        lineHeight: '20px',
        borderRadius: '50%',
        cursor: 'pointer',
    },
    heading: {
        color: 'black',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    sendMoneyText: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: 'black',
        marginBottom: '10px',
    },
    label: {
        color: 'black',
        marginBottom: '10px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        fontSize: '16px',
    },
    button: {
        padding: '10px 20px',
        backgroundColor: 'green',
        color: 'white',
        fontSize: '16px',
        border: 'none',
        cursor: 'pointer',
    },
    buttonHover: {
        backgroundColor: '#004d00',
    },
    message: {
        color: 'black',
    },
    phone: {
        color: 'black',
        textAlign: 'left'
    }
};

export default MpesaPaymentsUI;