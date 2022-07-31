import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from './../data/FeedbackData';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  // const feedbackEdit = () => {};
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete this?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const updateFeedback = (id, updateItem) => {
    // console.log(id, updateItem);
    setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updateItem } : item)));
  };

  return <FeedbackContext.Provider value={{ feedback, deleteFeedback, addFeedback, editFeedback, feedbackEdit, updateFeedback }}>{children}</FeedbackContext.Provider>;
};

export default FeedbackContext;
