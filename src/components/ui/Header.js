import React from 'react';
import InputWrapper from './InputWrapper';
import Filter from './Filter';

export default function Header(props) {
    const { filter, changeFilter} = props;
    
    return (
        <header>
            <h1>#todo</h1>
            
           
            {/* <div className="pull-left buttons">
                <ButtonWrapper {...props}/>
            </div>
            <div className="pull-left">
                {`${activeItemCount} items left`}
            </div> */}
            <div className="pull-center" style={{display: 'flex', justifyContent: 'center'}}>
                <Filter {...{filter, changeFilter}}/>
            </div>
            <InputWrapper {...props}/>
        </header>
    );
}
