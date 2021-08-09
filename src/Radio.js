

function Radio({ten, twentyfive, hundred}){
    return (
        <div>
    
        <label>*10 <input type="radio" id="contactChoice1"
         name="contact" onChange={ten} value="email"/></label>
    
        
        <label>*25 <input type="radio" id="contactChoice2"
         name="contact" onChange={twentyfive}value="phone"/></label>
    
        
        <label>*100 <input type="radio" id="contactChoice3"
         name="contact" onChange={hundred} value="mail"/></label>
      </div>
    )
}


export default Radio