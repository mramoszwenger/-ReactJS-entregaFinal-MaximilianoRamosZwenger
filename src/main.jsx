import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVy6TE5WgLjQMaqzSFqbs9Qr6xNLuTwV0",
  authDomain: "proyectoreactjs-d155d.firebaseapp.com",
  projectId: "proyectoreactjs-d155d",
  storageBucket: "proyectoreactjs-d155d.appspot.com",
  messagingSenderId: "495832792042",
  appId: "1:495832792042:web:3c9e6644aa03c764e09093"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
