

const Statistics = ({good, bad, neutral, total, positivePercentage}) => {
   return (<ul>
      <li>Good: {good}</li>
      <li>Neautral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive Feedback: {positivePercentage}</li>
   </ul>)
}

export default Statistics;