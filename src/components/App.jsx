import style from "./App.module.css";

import React, { useState} from 'react';

import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedback-options/FeedbackOptions";
import Notification from "./notification/Notification";

export const App = () => {
 

  const [options, setOptions] = useState({good: 0, neutral: 0, bad: 0})

  const handleFeedback = (option) => {
    setOptions((prevState) => ({
        ...prevState,
       [option]: prevState[option] + 1,
     }))
    
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
   };
    
  
  const countPositiveFeedbackPercentage = () => {
    
    const total = countTotalFeedback();
    return total === 0 ? 0 : Math.round((options.good / total) * 100);
  };
  
  

    const totalFeedback = countTotalFeedback();
    const positivePercentage = countPositiveFeedbackPercentage();

  return (
    
    <div className={style['app-container']}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(options)} onLeaveFeedback={handleFeedback}/>
      </Section>
      <Section title="Statistics">
         {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={options.good}
              neutral={options.neutral}
              bad={options.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
    </div>
  )
  }
 

export default App;