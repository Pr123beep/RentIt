import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";

import { MenuItem } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useEffect } from "react";
import { setData, setFilteredData, setPriceHightoLow, setPriceLowtoHigh, setYearAscending, setYearDecending } from "../redux/user/sortfilterSlice";

const Sort = () => {
  const {userAllVehicles,allVariants} = useSelector(state => state.userListVehicles)
  const dispatch = useDispatch();
  const { handleSubmit, control  } = useForm({
    defaultValues:{
      price:'',
      year:''
      
    }
  });

  const handleInputChange = (e) => {

    if (e === "undefined") {
      dispatch(setData(userAllVehicles))
    }
    else if(e === "lowtohigh"){
        dispatch(setPriceLowtoHigh())
    }
    else if(e ===  "hightolow"){
        dispatch(setPriceHightoLow())
    }
    else if(e === "yearAscending"){
        dispatch(setYearAscending())
    }
    else if(e === "yearDecending"){
        dispatch(setYearDecending())
    }
  };

  useEffect(()=> {
    if(!allVariants){
      dispatch(setFilteredData(userAllVehicles))
    }
  },[])

  return (
    <div className="drop-shadow-lg bg-white rounded-xl p-4 shadow-md border border-gray-100">
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-between gap-3 md:gap-4 mx-auto">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12" />
            </svg>
            <span className="font-semibold text-gray-700 hidden md:block">Sort By:</span>
          </div>
          
          <div className="flex items-center gap-2 md:gap-3 flex-1 justify-end">
            <Controller
              control={control}
              name="price"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="price"
                  select
                  label="Price"
                  sx={{ 
                    m: 0.5, 
                    minWidth: 140,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '0.5rem',
                      '&:hover fieldset': {
                        borderColor: '#10b981',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#10b981',
                      },
                    },
                  }}
                  onChange={(event) => {
                    field.onChange(event);
                    handleInputChange(event.target.value);
                  }}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={"lowtohigh"}>💰 Low to High</MenuItem>
                  <MenuItem value={"hightolow"}>💎 High to Low</MenuItem>
                </TextField>
              )}
            />

            <Controller
              control={control}
              name="year"
              render={({ field }) => (
                <TextField
                  {...field}
                  id="year"
                  select
                  label="Year"
                  sx={{ 
                    m: 0.5, 
                    minWidth: 140,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '0.5rem',
                      '&:hover fieldset': {
                        borderColor: '#10b981',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#10b981',
                      },
                    },
                  }}
                  onChange={(event) => {
                    field.onChange(event);
                    handleInputChange(event.target.value);
                  }}
                >
                  <MenuItem value="">None</MenuItem>
                  <MenuItem value={"yearAscending"}>📅 Oldest First</MenuItem>
                  <MenuItem value={"yearDecending"}>🆕 Newest First</MenuItem>
                </TextField>
              )}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Sort;
