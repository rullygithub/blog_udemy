import React, {useState, useReducer} from 'react';
import dataBlog from '../component/dataBlog';
import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
  switch (action.type) {
    case 'deleteBlog':
      return state.filter(blogpost => blogpost.id !== action.payload);
    case 'addBlogPost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    default:
      return state;
  }
};

const addBlogPost = dispatch => {
  return (title, content, callback) => {
    dispatch({type: 'addBlogPost', payload: {title, content}});
    callback();
  };
};

const deleteBlogPost = dispatch => {
  return id => {
    dispatch({type: 'deleteBlog', payload: id});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost},
  [],
);
