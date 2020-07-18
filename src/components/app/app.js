import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';
import PersonalDetails from '../PersonalDetails';
import CharacterPage from '../сharacterPage';
import gotService from '../../services/gotService';



import './app.css';

export default class App extends Component {
    gotService = new gotService();

    state = {
        showRandomChar: true,
        selectedChar: null,
        error: false
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    toggleRandomChar = () => {
        this.setState((state) => {
            return {
                showRandomChar: !state.showRandomChar
            }
        });
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar:id
        })
    }
    render() {
        if (this.state.error) {
            return <ErrorMessage/>
        }
        const char = this.state.showRandomChar ? <RandomChar/> : null;
        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {char}
                            <button 
                                className="toggle-btn"
                                onClick={this.toggleRandomChar}>Toggle random character</button>
                        </Col>
                    </Row>         
                    <CharacterPage/>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllBooks}
                            renderItem={(item) => item.name}
                            />
                        </Col>
                        <Col md='6'>
                            <PersonalDetails charId = {this.state.selectedChar} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md='6'>
                            <ItemList 
                            onItemSelected={this.onItemSelected}
                            getData={this.gotService.getAllHouses}
                            renderItem={(item) => item.name} 
                             />
                        </Col>
                        <Col md='6'>
                            <PersonalDetails charId = {this.state.selectedChar} />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
};
