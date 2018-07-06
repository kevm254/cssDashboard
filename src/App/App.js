import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import Modal from './Modal/Modal';
import Cards from './Cards/Cards';
import Tables from './Tables/Tables';
import Progress from './Progress/Progress';

export default class App extends Component {
    render() {
        return (
            <main>
                <Navbar />
                <Modal />
                <Cards />
                <Tables />
                <Progress />
            </main>
        )
    }
}