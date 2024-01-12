import React from 'react';
import {filterValuesType} from "./App";
import {Button} from "./Button";

type NewComponentType = {
    currentMoney: CurrentMoneyType[]
    onClickFilterHandler: (nameButton: filterValuesType) => void

}

export type CurrentMoneyType = {
    banknots: string
    value: number
    number: string
}

export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArr) => {
                    return (
                        <li key={objFromMoneyArr.number}>
                            <span>{objFromMoneyArr.banknots} </span>
                            <span>{objFromMoneyArr.value} </span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button name={'All'} callBack={() => props.onClickFilterHandler('All')}/>
                <Button name={'RUBLS'} callBack={() => props.onClickFilterHandler('RUBLS')}/>
                <Button name={'Dollars'} callBack={() => props.onClickFilterHandler('Dollars')}/>
            </div>
        </>
    );
};

