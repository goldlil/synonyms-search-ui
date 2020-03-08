import React from 'react';
import { Form, Input, Button, Row, Col, message } from 'antd'
import synonymsApi from '../api/SynonymsSearchApi'

const { TextArea } = Input;


class AddNewSynonymsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: this.props.visible
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            visible: nextProps.visible,
        };
    }

    wordPattern = /^[a-zA-Z]+$/;

    splitPattern = /[^\r\n]+/g;

    onFinish(values) {
        console.log(values);       
        let synonymsArray = values.synonyms.match(this.splitPattern);

        if (synonymsArray == null || synonymsArray.length === 0)
            return Promise.resolve();

        for (let synonym of synonymsArray)
            synonym =synonym.trim();

        console.log(synonymsArray); 
        
        console.log(synonymsApi);

        
        synonymsApi.addSynonyms({
            word: values.word,
            synonyms: synonymsArray
        })
        .then(() => {
            message.success("Synonyms successfully added!");
        })
        .catch((err) => {
            console.error(err);
            message.error("Unexpected problem occurred during adding synonyms!");
        });
    }

    onFinishFailed(error) {
        console.log("error: ", error);
        message.error('Please fill form correcly!', 1);
    }

    validatorForSynonyms(rule, value) {
        if (value == null) return Promise.resolve();
        let synonymsArray = value.match(this.splitPattern);

        if (synonymsArray == null || synonymsArray.length === 0)
            return Promise.resolve();

        for (let synonym of synonymsArray) {
            console.log(synonym.trim());
            if (!this.wordPattern.test(synonym.trim()))
                return Promise.reject('Words can only include letters of english alphabeth!');
        }
        return Promise.resolve();
    }


    render() {
        return (
            <div className="App" style={{ display: this.state.visible ? 'block' : 'none' }}>
                <Row justify="center" style={{ paddingTop: "6em" }}>
                    <Col xs={22} sm={14} md={10} lg={8} >
                        <Form
                            layout="vertical"
                            onFinish={this.onFinish.bind(this)}
                            onFinishFailed={this.onFinishFailed}
                        >
                            <Form.Item
                                label="Enter a word:"
                                name="word"
                                rules={
                                    [
                                        { required: true, message: 'Please input a word!' },
                                        { max: 30, message: "Max length of word is 30 characters" }
                                    ]}
                            >
                                <Input placeholder="Enter a word" />
                            </Form.Item>
                            <Form.Item
                                label="Synonyms:"
                                name="synonyms"
                                rules={
                                    [
                                        { required: true, message: 'Please input synonyms!' },
                                        { validator: this.validatorForSynonyms.bind(this) }
                                    ]}
                            >
                                <TextArea
                                    placeholder="One synonym per line"
                                    autoSize={{ minRows: 3, maxRows: 10 }}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Add synonyms
                            </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div>

        )
    }
}

export default AddNewSynonymsComponent;
