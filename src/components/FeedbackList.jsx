import { motion, AnimatePresence } from 'framer-motion';
// import PropTypes from 'prop-types';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import FeedbackItem from './FeedbackItem';
import Spinner from './shared/Spinner';

function FeedbackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || !feedback.length)) {
    return <p>No Feedback yet</p>;
  }

  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className='feedback-list'>
        <AnimatePresence>
          {feedback.map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <FeedbackItem key={item.id} item={item}></FeedbackItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  // return (
  //   <div className='feedback-list'>
  //     {feedback.map((item) => (
  //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}></FeedbackItem>
  //     ))}
  //   </div>
  // );
}

// FeedbackList.propTypes = {
//   item: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired
//     })
//   )
// };

export default FeedbackList;
