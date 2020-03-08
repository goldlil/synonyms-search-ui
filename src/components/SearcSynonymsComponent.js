import React from 'react';
import { Input, Row, Col, List, message } from 'antd';
import synonymsApi from '../api/SynonymsSearchApi'
const { Search } = Input;


class SearchSynonymsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            searchResults: []
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            visible: nextProps.visible,
        };
    }

    searchSynonyms(query) {
        synonymsApi.searchSynonyms(query, null)
        .then(response => {
            this.setState({
                searchResults: response.data
            });
        })
        .catch(err => {
            console.error(err);
            message.error("Unexpected problem occurred during search!")
        })
    }

    render() {
        return (
            <div className="App" style={{ display: this.state.visible ? 'block' : 'none' }}>
                <Row justify="center" style={{ paddingTop: "6em" }}>
                    <Col xs={22} sm={14} md={10} lg={8} >
                        <p>Enter word for synonyms search</p>
                    </Col>
                </Row>
                <Row justify="center" style={{ paddingTop: "1em" }}>
                    <Col xs={22} sm={14} md={10} lg={8} >
                        <Search placeholder="Enter a word" onSearch={this.searchSynonyms.bind(this)} enterButton />
                    </Col>
                </Row>
                <Row justify="center" style={{ paddingTop: "1em" }}>
                    <Col xs={22} sm={14} md={10} lg={8} >
                        <List
                            size="small"
                            dataSource={this.state.searchResults}
                            renderItem={item => <List.Item>{item}</List.Item>}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SearchSynonymsComponent;
