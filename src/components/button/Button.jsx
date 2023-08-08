
import css from './Button.module.css'

export const Button=({pagChange})=>{

        return(
            <button type="button" className={css.btn} onClick={pagChange} >Load more</button>
        )
    }
