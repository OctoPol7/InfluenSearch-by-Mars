import React, { useState } from 'react'
import Header from '../Header.js'
import CampStatContner from './CampStatContner';
import CreateBtn from './CreateBtn';
import CurCampContner from './CurCampContnr';
import Inputs from './Inputs';
import Modal from './Modal';



const Campaign = props => {

    const [modalshow,setModalShow] = useState(false);

    function showmodal(value) {

            setModalShow(value);
    }


    return
    <div className='campaign-page'>

        <Header />
        <CampStatContner/>
        <CurCampContner/>
        
        <CreateBtn click={()=>showmodal(true)}/>


{modalshow?
        <div className='modal_overlay' >
            <div className='modal_content'>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <h3>Create Campaign</h3>
                    <h3 style={{cursor:'pointer'}} onClick={()=>showmodal(false)}>X</h3>
                </div>

                <div className='contnr'>
                    <h4>Campaign Name</h4>

                    <Inputs placeholder="Title" />

                    <h4>Create Description</h4>

                    <textarea placeholder='Type text below..' rows={5} style={{width:'100%',borderRadius:5,backgroundColor:'lightgray'}}></textarea>
                
                    <h4>Add target Keywords</h4>
                    <div className='modal_inputs'>
                        <div className='mchip'>
                            test
                        </div>

                        <div className='mchip'>
                            test
                        </div>

                        <div className='mchip'>
                            test
                        </div>
                        <div className='mchip'>
                            test
                        </div>
                    </div>

                    <button className='cbtn'>Create</button>
                </div>


            </div>
        </div>:null
}
      
        

    </div>   
    
}

export default Campaign;