import React from 'react';

const Card = ({name, email, id}) => {
    return(
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc'>
            {/*Predefined Tachyon classes, Background, dib, border 3, padding of 3, margins 2, grow animation, bw2 and shadow-5 to add shadows, text center */}
            <div>
                {/*use robohhash api to generate random robot images*/}
              <img alt='robots' src={`https://robohash.org/${id}!?200x200`} />
                  <h2>{name}</h2>
                  <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;