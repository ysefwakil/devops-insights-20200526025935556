import React, { useState } from 'react';

function Zip(props) {

    const [validationError, setValidationError] = useState(null);

    const validate = (event) => {
        const zipCodePattern = /^[A-Za-z]+$/;
        const valid = zipCodePattern.test(event.target.value);
        if (!valid) {
            // setValidationError('* should be a city name');
            // props.clearResponse();
            props.onZipChange(event.target.value);
        } else {
            setValidationError('');
            props.onZipChange(event.target.value);
        }
    };

    return (
        <div className="col-sm-4">
            <div className="row">
                <div className="col-sm-10">
                    <style jsx="true">{`
                        .form-control::-webkit-input-placeholder {
                            color: #ddd;
                        }
                    `}
                    </style>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                    <input 
                        type="text" 
                        className="form-control" 
                        id="usr" 
                        placeholder="City Name"
=======
>>>>>>> 0db5f55a3591a1003b3e5e009718197f3cf221ca
                    <input
                        type="text"
                        className="form-control"
                        id="usr"
                        placeholder="Press enter after dropping pin where you want to land"
<<<<<<< HEAD
=======
>>>>>>> 0db5f55... Part 2 completed without test
>>>>>>> 0db5f55a3591a1003b3e5e009718197f3cf221ca
                        onKeyPress={(event) => {
                            if (event.key === "Enter") {
                                validate(event);
                            }
                        }}
                    ></input>
                </div>
            </div>
            <div className="pl-3 row">
                <div className="text-danger small"> { validationError }</div>
            </div>
        </div>
    );
}

export default Zip
