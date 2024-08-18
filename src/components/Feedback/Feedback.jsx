import css from '../Feedback/Feedback.module.css'

function Feedback ({good, neutral, bad, positiveFeedback, totalFeedback}) {
 
    return (
        <div>
        <ul className={css.feedbackList}>
            <li className={css.feedbackItem}>
                <p className={css.feedbackText}>Good: {good}</p>
            </li>
            <li className={css.feedbackItem}>
                <p className={css.feedbackText}>Neutral: {neutral}</p>
            </li>
            <li className={css.feedbackItem}>
                <p className={css.feedbackText}>Bad: {bad}</p>
            </li>
        </ul>
        <ul className={css.feedbackList}>
            <li className={css.feedbackResultItem}>
          <p className={css.feedbackText}>Total: {totalFeedback}</p>
        </li>
        <li className={css.feedbackResultItem}>
          <p className={css.feedbackText}>Positive: {positiveFeedback}%</p>
        </li>
        </ul>
        </div>
    )
  }
  
  export default Feedback;