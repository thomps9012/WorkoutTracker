import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import Navbar from "../components/Navbar";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Account from "./subpages/Account";
import Entry from "./subpages/Entry.js";
import Footer from "../components/Footer";
import { Modal } from 'react-bootstrap';
import API from "../utils/API";