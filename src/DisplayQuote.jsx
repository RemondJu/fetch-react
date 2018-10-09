import  React  from  'react';

const  DisplayQuote = ({ quote }) => {
    return (
        <div  className="DisplayQuote">
            <img  src={quote.image}  alt="Simpson char"  />
            <ul>
                <li>
                    Who said that : {quote.character}
                </li>
                <li>
                    {quote.quote},
                </li>
            </ul>
        </div>
    );
};

export  default  DisplayQuote;