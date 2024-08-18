import { useState, useEffect } from 'react';
import './App.module.css';
import Description from './Description/Description';
import Feedback from './Feedback/Feedback';
import Options from './Options/Options';
import Notification from './Notification/Notification';

function App() {
  const [feedbackState, setFeedbackState] = useState(() => {
    const localState = localStorage.getItem('feedback');
    return localState
      ? JSON.parse(localState)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedbackState));
  }, [feedbackState]);

  const updateFeedback = feedbackType => {
    if (feedbackType !== 'resetAll') {
      setFeedbackState(prevFeedback => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      }));
    } else {
      setFeedbackState({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  };

  const totalFeedback = feedbackState.good + feedbackState.neutral + feedbackState.bad;
  const positiveFeedback = totalFeedback > 0 ? Math.round((feedbackState.good / totalFeedback) * 100) : 0;

  return (
    <div className="container">
      <Description />
      <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback
          good={feedbackState.good}
          neutral={feedbackState.neutral}
          bad={feedbackState.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;

