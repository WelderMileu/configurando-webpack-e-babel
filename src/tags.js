import React from 'react';

const InputText = props => {
    return(
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">
                    &copy;
                </span>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder={props.placeholder}/>
            </div>
        </div>
    );
}

export { InputText };
