

export default function ProductInfo(){
    return(
    <div className='
    text-[#271A45] 
      font-lato 
      flex 
      flex-col
      gap-5 
      h-[222px]
      w-[301px]
      py-[45px]
      '
    >
      <div className='
      text-[#271A45] 
        font-lato 
        flex 
        flex-col
        gap-1
        '
      >
        <p className='font-light text-xs'>
            CÓDIGO: 42404
        </p>
      
        <h1 className='font-crimson font-semibold text-[32px]'>
          Sofá Margot II - Rosé
        </h1>
        <p className='text-base font-normal'>
          R$ 4.000
        </p>
      </div>

      <button 
        className="
          font-normal 
          text-xs 
          rounded-nineNine 
          border-[0.5px]
          px-3 py-2
          w-[160px]
          border-[#271A45]
          "
      >
        ADICIONAR À CESTA
      </button>
    </div>
    )
}