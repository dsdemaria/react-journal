import 'bootstrap/dist/css/bootstrap.css';

import React, { Component } from 'react';
import Header from './Header';
import Week from './Week';
import NewResource from './NewResource';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      titleValue: '',
      linkValue: '',
      descriptionValue: '',
      optionValue: 'week4',
      week1: [
        {
          title: 'JavaScript Assessment',
          link: 'https://github.com/rmurphey/js-assessment',
          description: 'This is a description.',
        },
        {
          title: 'DevDocs, offline version',
          link: 'http://devdocs.io/offline',
          description: 'This is a description.',
        },
        {
          title: 'FunFunFunctions: Higher Order Functions',
          link: 'https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84',
          description: 'This is a description.',
        },
        {
          title: 'FunFunFunctions: ES6/2015 var, let, and const',
          link: 'https://www.youtube.com/watch?v=sjyJBL5fkp8',
          description: 'This is a description.',
        },
        {
          title: 'FunFunFunctions: ES6/2015 arrow functions',
          link: 'https://www.youtube.com/watch?v=6sQDTgOqh-I',
          description: 'This is a description.',
        },
        {
          title: 'Industry Talk: Women in tech',
          link: 'http://tech.co/dc-is-the-top-city-for-women-in-tech-2016-02',
          description: 'This is a description.',
        },
        {
          title: 'JavaScript - Understanding the Weird Parts',
          link: 'https://www.udemy.com/understand-javascript/',
          description: 'This is a description.',
        },
        {
          title: 'ES6 at a glance',
          link: 'http://es6-features.org/',
          description: 'This is a description.',
        },
        {
          title: 'Essential ES6 / ES2015 JavaScript',
          link: 'https://www.youtube.com/watch?v=CozSF5abcTA',
          description: 'This is a description.',
        },
        {
          title: 'Javascript ES6 Cheatsheet - the best of JS ES6',
          link: 'https://www.youtube.com/watch?v=AfWYO8t7ed4',
          description: 'This is a description.',
        },
      ],
      week2: [
        {
          title: 'AirBnb Styleguide',
          link: 'https://github.com/airbnb/javascript',
          description: 'This is a description.',
        },
        {
          title: 'Learn ES6 (ECMAScript 2015) - Course by @johnlindquist',
          link: 'https://egghead.io/courses/learn-es6-ecmascript-2015',
          description: 'This is a description.',
        },
        {
          title: 'Learn Four Semesters of Computer Science in 5 Hours w/ Brian Holt',
          link: 'https://frontendmasters.com/courses/computer-science/',
          description: 'This is a description.',
        },
        {
          title: 'Git Intro',
          link: 'http://www-cs-students.stanford.edu/~blynn/gitmagic/',
          description: 'This is a description.',
        },
        {
          title: 'Sublime Text Power User Book by Wes Bos',
          link: 'https://sublimetextbook.com/',
          description: 'This is a description.',
        },
        {
          title: 'Atom keyboard shortcuts',
          link: '',
          description: 'This is a description.',
        },
      ],
      week3: [
        {
          title: 'Thinking in React',
          link: 'https://facebook.github.io/react/docs/thinking-in-react.html',
          description: 'This is a description.',
        },
        {
          title: 'REACT JS TUTORIAL #2 - Reactjs Components & Rendering',
          link: 'https://www.youtube.com/watch?v=fd2Cayhez58&feature=youtu.be',
          description: 'This is a description.',
        },
        {
          title: 'REACT JS TUTORIAL #3 - Composing Multiple React.js Components',
          link: 'https://www.youtube.com/watch?v=vu_rIMPROoQ',
          description: 'This is a description.',
        },
        {
          title: 'REACT JS TUTORIAL #4 - State vs Props & Application Data',
          link: 'https://www.youtube.com/watch?v=qh3dYM6Keuw&t=79s',
          description: 'This is a description.',
        },
        {
          title: 'React on ES6+',
          link: 'https://babeljs.io/blog/2015/06/07/react-on-es6-plus',
          description: 'This is a description.',
        },
        {
          title: 'Learn ES2015 · Babel',
          link: 'https://babeljs.io/docs/learn-es2015/',
          description: 'This is a description.',
        },
        {
          title: 'Our First 50,000 Stars - React Blog (History of React)',
          link: 'https://facebook.github.io/react/blog/2016/09/28/our-first-50000-stars.html',
          description: 'This is a description.',
        },
        {
          title: 'Ashley Williams: If you wish to learn ES6/2015 from scratch, you must first invent the universe',
          link: 'https://youtu.be/DN4yLZB1vUQ',
          description: 'This is a description.',
        },
        {
          title: 'React Developer Tools (for Chrome)',
          link: 'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi',
          description: 'This is a description.',
        },
      ],
      week4: [
        {
          title: 'React for Beginners',
          link: 'https://reactforbeginners.com/',
          description: 'With a focus on simplicity and readability, this course will have you building real time applications and dynamic website components in no time!',
        },
        {
          title: 'Top 5 Tutorials for Getting Started with React',
          link: 'http://andrewhfarmer.com/getting-started-tutorials/',
          description: 'Five tutorials for a variety of skill levels.',
        },
        {
          title: 'React Stateless Functional Components: Nine Wins You Might Have Overlooked',
          link: 'https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.oxjfw7n8b',
          description: 'React .14 introduced a simpler way to define components called stateless functional components. These components use plain JavaScript functions. Here’s the before and after in ES6:',
        },
        {
          title: 'ReactJS Basics - #7 Events & ReactJS',
          link: 'https://www.youtube.com/watch?v=OcM__8q6p4c&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=8',
          description: 'User Input is extremely important, which is why we need to handle Events, too. ReactJS makes this very easy as this video shows.',
        },
        {
          title: 'ReactJS Basics - #8 State of Components',
          link: 'https://www.youtube.com/watch?v=e5n9j9n83OM&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS&index=9',
          description: 'Updating and re-rendering the DOM would be nice. ReactJS uses State to - well - track the State of a Component and decide if it needs to update the DOM.',
        },
        {
          title: 'ReactJS Basics - #9 How does ReactJS update the DOM?',
          link: 'https://www.youtube.com/watch?v=Iw2BLUjQo1E&index=10&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS',
          description: 'How does ReactJS update the DOM? This Tutorial explains how ReactJS finds out if and which parts need to be updated.',
        },
        {
          title: 'ReactJS Basics - #10 Stateless Components',
          link: 'https://www.youtube.com/watch?v=SEkfzqIgvTo&index=11&list=PL55RiY5tL51oyA8euSROLjMFZbXaV7skS',
          description: "Some ReactJS Components don't need State. Just leave it out then - learn more about Stateless Components.",
        },
      ],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onEntrySubmit = this.onEntrySubmit.bind(this);
    this.sortAlphabetically = this.sortAlphabetically.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
  }

  onEntrySubmit() {
    const newEntry = {
      title: this.state.titleValue,
      link: this.state.linkValue,
      description: this.state.descriptionValue,
    };
    const selectedWeek = this.state.optionValue;
    const newWeek = this.state[selectedWeek].concat(newEntry);
    this.setState({
      titleValue: '',
      linkValue: '',
      descriptionValue: '',
      [selectedWeek]: newWeek,
    });
  }

  addWeek() {
    console.log(this);
  }

  deleteEntry(idx, weekKey) {
    const newWeek = this.state[weekKey].slice();
    newWeek.splice(idx, 1);
    this.setState({
      [weekKey]: newWeek,
    });
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  sortAlphabetically(theWeek, weekKey) {
    const newWeekKey = weekKey.replace(/\s+/g, '').toLowerCase();
    const sortedWeek = theWeek.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) {
        return -1;
      }
      if (titleA > titleB) {
        return 1;
      }
      return 0;
    });
    this.setState({
      [newWeekKey]: sortedWeek,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header title="React Weekly Journal" />
          <div className="col-xs-8 col-xs-offset-2">
            <NewResource
              titleValue={this.state.titleValue}
              linkValue={this.state.linkValue}
              descriptionValue={this.state.descriptionValue}
              optionValue={this.state.optionValue}

              handleInputChange={this.handleInputChange}
              addResource={this.onEntrySubmit}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <Week
              title="Week 1"
              entries={this.state.week1}
              sortAlphabetically={this.sortAlphabetically}
              deleteEntry={this.deleteEntry}
            />
            <Week
              title="Week 2"
              entries={this.state.week2}
              sortAlphabetically={this.sortAlphabetically}
              deleteEntry={this.deleteEntry}
            />
            <Week
              title="Week 3"
              entries={this.state.week3}
              sortAlphabetically={this.sortAlphabetically}
              deleteEntry={this.deleteEntry}
            />
            <Week
              title="Week 4"
              entries={this.state.week4}
              sortAlphabetically={this.sortAlphabetically}
              deleteEntry={this.deleteEntry}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            <button style={{ width: '100%' }} className="btn btn-primary">
              Add Week
            </button>
          </div>
        </div>
      </div>
    );
  }
}
