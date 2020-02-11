import React, {Component} from 'react';

class Config extends Component {
         click() {
        console.log('test');
      }
        render() {
        return (
     <div>   
        <h1>Configuration</h1>
            <form>
              <label>Entrez votre nom :</label>
              <input id='data' type='text'/><br />
              <input id='submit-btn' type='button' value='Envoyer' onclick={()=>this.click} />
            </form>
    </div>        
          );
      }

}


export default Config;