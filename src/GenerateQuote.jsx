import  React  from  'react';

const  GenerateQuote = ({ selectQuote }) => {
    return (
        <div className="GenerateQuote">
        <button onClick={selectQuote}>Get another one</button>
        </div>
    );
};

export  default  GenerateQuote;