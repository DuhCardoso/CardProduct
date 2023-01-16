import { useEffect, useState } from 'react'


export default function ProductImg(){
    const [rotetion, setRotetion] = useState(false)
    
    const rotate= ()=>{
        if(rotetion == false){
            setRotetion(true)
        }else{
            setRotetion(false)
        }
    }

    return(
        <div 
            className="w-[449px]"
        >
            {rotetion ? (
                <>
                    <button 
                    onClick={rotate}
                    className="absolute w-[34px] z-10 left-[409px] mt-2"
                    >
                        <img 
                            src="../../public/X.svg" 
                            alt="Close°" 
                            
                        />
                    </button>
                
                    <img 
                    src="../../public/sofa.gif" 
                    alt="Sofa cor de rosa com pé de madeira e pontas douradas" 
                    />
                </>
            ) :
            (
                <>
                    <button 
                        onClick={rotate}
                        className="absolute w-[34px] z-10 left-[409px] mt-2"
                    >
                        <img 
                            src="../../public/360.svg" 
                            alt="360°" 
                            
                        />
                    </button>

                    <img 
                    src="../../public/sofa.png" 
                    alt="Sofa cor de rosa com pé de madeira e pontas douradas" 
                    />                
                </>
            )
            }

        </div>
    )
}