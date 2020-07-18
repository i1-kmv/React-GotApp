import React, {Component} from 'react';
import ItemList from '../itemList';
import PersonalDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import gotService from '../../services/gotService';
import RowBlock from '../rowBlock';


export default class CharacterPage extends Component {

    gotService = new gotService()

    state = {
        selectedChar: 130,
        error: false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    componentDidCatch() {
      this.setState({
          error: true
      })
    }

    componentDidCatch() {
        this.setState({
            error: true
        })
    }

    render() {

        if(this.state.error) {
            return <ErrorMessage/>
        }

        const itemList = (
            <ItemList getData={this.gotService.getAllCharacters} 
            onItemSelected={this.onItemSelected}
            renderItem={(item) => `${item.name} (${item.gender})`}/>
        )

        const personalDetails = (
            <PersonalDetails charId = {this.state.selectedChar}>
                <Field field='gender' label ='Gender'/>
                <Field field='gender' label ='Born'/>
                <Field field='died' label ='Died'/>
                <Field field='culture' label ='Culture'/>
            </PersonalDetails>
        )

        return (
            <RowBlock left={itemList} right={personalDetails}/>
        )
    }
}