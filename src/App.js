import React from 'react';
import './App.css';
import {Row, Menu} from 'antd';
import SearchSynonyms from './components/SearcSynonymsComponent';
import AddNewSynonyms from './components/AddNewSynonymsComponent.js'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchSynonymsVisible: true,
      addNewSynonymsVisible: false,
    }
  }

  handleMenuClick(e) {
    console.log('click ', e);
    this.setState({
      searchSynonymsVisible: e.key === "searchSynonyms" ? true : false,
      addNewSynonymsVisible: e.key === "addSynonyms" ? true : false
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="App">
        <Row justify="center">
          <Menu mode="horizontal" onClick={this.handleMenuClick.bind(this)}>
            <Menu.Item key="searchSynonyms">
              Search synonyms
        </Menu.Item>
            <Menu.Item key="addSynonyms">
              Add synonyms
        </Menu.Item>
          </Menu>
        </Row>
        <SearchSynonyms visible = {this.state.searchSynonymsVisible} />
        <AddNewSynonyms visible = {this.state.addNewSynonymsVisible}/>
      </div>

    );
  }
}

export default App;
