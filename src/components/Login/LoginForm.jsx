import React from 'react';
import { 
    Row,
    TextInput,
    Col,
    Button
} from 'react-materialize';

const LoginForm = ({ onSubmit }) => {

    return (
        <form style={{ textAlign: 'center' }}>
            <Row>
                <Col s={10} offset='s1'>
                    <TextInput
                        noLayout
                        label='Usuário'
                        className='inputField'/>
                </Col>
            </Row>
            <Row>
                <Col s={10} offset='s1'>
                    <TextInput
                        noLayout
                        password
                        label='Password'
                        className='inputField'/>
                </Col>
            </Row>
            <Row>
                <Col s={12}>
                    <Button
                        waves='light'
                        flat
                        onClick={onSubmit}
                        style={{ width: 150, color: '#fff' }}
                        className='orange'
                    >
                        Entrar
                    </Button>
                </Col>
            </Row>
        </form>
    );
}

export default LoginForm;