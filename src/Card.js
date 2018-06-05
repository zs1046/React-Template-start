import React from 'react';

const Card = () => {
    return(
          <div>       {/*use robohhash api to generate random robot images*/}
              <img alt='robots' src='https://robohash.org/test?200x200' />
              <h2>Jane Doe</h2>
              <p>jane.doe@gmail.com</p>
          </div>
    );
}

export default Card;