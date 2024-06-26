import React, {useState} from 'react';
import './Form.css'

const Form = () => {
    const [country, setCountry] = useState()
    const [street, setStreet] = useState()
    const [subject, setSubject] = useState('physical')

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                type={'text'}
                placeholder={'Страна'}
                value={'country'}
                onChange={onChangeCountry}
            />
            <input
                className={'input'}
                type={'text'}
                placeholder={'Улица'}
                value={'street'}
                onChange={onChangeStreet}
            />
            <select className={'select'} value={'subject'} onChange={onChangeSubject}>
                <option value={'physical'}>Физ. Лицо</option>
                <option value={'legal'}>Юр. Лицо</option>
            </select>
        </div>
    );
};

export default Form;