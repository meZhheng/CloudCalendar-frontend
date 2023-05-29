import {createSlice} from "@reduxjs/toolkit";

const mdSlice = createSlice({
  name:'md', // 用来自动生成action中的type
  initialState:{
    mdDocument:{
      url:'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-78abecd5-154a-4bdc-90ef-f4959377f1bc/74d50ee9-c886-4b8e-875f-3faadd9fef55.md',
      content:''
    }
  }, // state的初始值
  reducers:{ // 指定state的各种操作，直接在对象中添加方法
    setMdDocument(state,action){
      state.mdDocument.url = action.payload.url || '';
      state.mdDocument.content = action.payload.content || ''
    }
  }
});
export const {setMdDocument} = mdSlice.actions;
export const {reducer:mdReducer} = mdSlice;