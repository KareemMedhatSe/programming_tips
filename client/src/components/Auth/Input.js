import React from 'react'
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import {TextField,Grid,InputAdornment,IconButton} from '@material-ui/core'
function input({name,label,autoFocus,type,handleChange,handleShowPassword,half}) {
  return (
    <Grid item xs={12} sm={half?6:12} >
    <TextField
    name={name}
    onChange={handleChange}
    variant='outlined'
    required
    fullWidth
    label={label}
    autoFocus={autoFocus}
    type={type}
    inputProps={name=='password' && {
        endAdorment:(
            <InputAdornment position='end'>
            <IconButton onClick={handleShowPassword}>
            {type==='password'?<Visibility/> : <VisibilityOff/>}
            
            </IconButton>
            
            </InputAdornment>


        )

    }



    }
    
    
    >
    </TextField>
    </Grid>
  )
}

export default input