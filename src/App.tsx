import React, {useState} from 'react';
import './App.css';
import {CurrentMoneyType, NewComponent} from "./NewComponent";

export type filterValuesType = 'All' | 'RUBLS' | 'Dollars'

function App() {
    const [money, setMoney] = useState<CurrentMoneyType[]>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])
    const [filter, setFilter] = useState<filterValuesType>('All')
    let currentMoney = money
    if (filter === 'Dollars') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars')
    }
    if (filter === 'RUBLS') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS')
    }


    const onClickFilterHandler = (nameButton: filterValuesType) => {
        setFilter(nameButton)
    }
    return (
        <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>

    );
}

export default App;
