import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";


const baseUrl = "https://team-manager-b2b52-default-rtdb.firebaseio.com";


export const sendData = createAsyncThunk(
  "teams/sendData",

  async (data) => {
    await axios.post(`${baseUrl}/teams.json`, data);
  }
);

export const fetchData = createAsyncThunk("teams/fetchData", async () => {
  const { data } = await axios.get(`${baseUrl}/teams.json`);
  return data;
});

export const deleteData = createAsyncThunk("teams/deleteData", async (id) => {
  await axios.delete(`${baseUrl}/teams/${id}.json`);
});

const teamSlice = createSlice({
  name: "teamReducer",
  initialState: {
    loading: "pending",
    data: null,
    dataChange: 1,
    filterData:[]
  },
  reducers: {
    changeDataEvent: (state) => {
      state.dataChange = state.dataChange + 1;
    },
    sortByActive:(state , {payload}) => {
    if (state.data){
    
      state.data.sort((a, b) => {
        const status1 = a.status.toLowerCase();
        const status2 = b.status.toLowerCase();
        
        if (status1 === "active") {
          return -1;
        }
        if (status2 === "closed") {
          return 1;
        }
        return 0;
      });
    }
    },
    sortByClosed:(state , {payload}) => {
    if(state.data){
      state.data.sort((a, b) => {
        const status1 = a.status.toLowerCase();
        const status2 = b.status.toLowerCase();
        
        if (status1 === "closed") {
          return -1;
        }
        if (status2 === "active") {
          return 1;
        }
        return 0;
      });
   
      }
  },
  filter:(state,{payload})=>{
 
  const checkedItem = payload.Checked
  
    if (payload.Data) {
      const result = payload.Data.filter((item) => {
        const company = item.company;
        for(let i of checkedItem){
          if(company === i) return true
        }
         return false
      });
      state.filterData = result
    }
      
  }
  },
  extraReducers: {
    [fetchData.pending](state) {
      state.loading = "pending";
    },
    [fetchData.fulfilled](state, { payload }) {
      state.loading = "fulfilled";
      const apiData = payload;
      const tempData= []
      
      for (const key in apiData) {
        const newData = Object.assign({}, apiData[key]);
        newData.id = key;
        tempData.push(newData)

      }
      state.data = tempData
    },
    [fetchData.rejected](state) {
      state.loading = "rejected";
    },
  },
});

export default teamSlice.reducer;
export const teamAction = teamSlice.actions;
