import style from "./App.module.css";

import React, { Component } from 'react';

import Section from "./section/Section";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./feedback-options/FeedbackOptions";
import Notification from "./notification/Notification";

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

   handleFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
   };
    
  
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };
  
  render() {

    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

  return (
    
    <div className={style['app-container']}>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleFeedback}/>
      </Section>
      <Section title="Statistics">
         {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
    </div>
  )
  }
 
};
export default App;