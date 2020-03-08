import React from 'react';
import { Input, Row, Col, List, message, Dropdown, Menu, Button} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import synonymsApi from '../api/SynonymsSearchApi'
const { Search } = Input;


class SearchSynonymsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible,
            searchResults: [''],
            searchLoading: false,
            inputValue: 1,
            dropDownOptions: Array.from(Array(11).keys()),
            searchDepthPlaceholder: "unlimited"
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            visible: nextProps.visible,
        };
    }

    searchSynonyms(query) {
        this.setState({
            searchLoading: true
        })
        synonymsApi.searchSynonyms(query, this.state.searchDepthPlaceholder === 'unlimited' ? null : parseInt(this.state.searchDepthPlaceholder))
            .then(response => {
                this.setState({
                    searchResults: response.data.length !== 0 ? response.data : ['No synonyms found']
                });
            })
            .catch(err => {
                console.error(err);
                message.error("Unexpected problem occurred during search!", 0.8)
            })
            .finally(() => {
                this.setState({
                    searchLoading: false
                })
            })
    }

    onSliderChange(value) {
        if (isNaN(value)) {
            return;
        }
        this.setState({
            inputValue: value,
        });
    };

    handleMenuClick(e) {
        this.setState({
            searchDepthPlaceholder: e.key
        })
    }
      
    render() {

        const menu = (
            <Menu onClick={this.handleMenuClick.bind(this)}>
                {this.state.dropDownOptions.map((i) => {
                    return <Menu.Item key = {i === 0 ? "unlimited" : i}> {i === 0 ? "unlimited" : i} </Menu.Item>
                })}
            </Menu>
        );

        return (
            <div className="App" style={{ display: this.state.visible ? 'block' : 'none' }}>
                <Row justify="center" style={{ paddingTop: "6em" }}>
                    <Col xs={22} sm={14} md={10} lg={8} >
                        <p>Enter word for synonyms search</p>
                    </Col>
                </Row>
                <Row justify="center" style={{ paddingTop: "1em" }}>
                    <Col xs={22} sm={14} md={10} lg={8} >
                        <Search placeholder="Enter a word" onSearch={this.searchSynonyms.bind(this)}
                            enterButton loading={this.state.searchLoading} />
                    </Col>
                </Row>
                <Row justify="center" style={{ paddingTop: "1em" }}>
                    <Col xs={22} sm={14} md={10} lg={8} >
                        Search depth:&nbsp;&nbsp;
                        <Dropdown overlay={menu}>
                            <Button>
                                {this.state.searchDepthPlaceholder} <DownOutlined />
                            </Button>
                        </Dropdown>
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
