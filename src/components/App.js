import React, { Component } from 'react';
import Header from './Header.js';
import Week from './Week.js';
import NewResource from './NewResource.js';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      titleValue: '',
      linkValue: '',
      descriptionValue: '',
      optionValue: 'week3',
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
          title: 'JavaScript: Understanding the Weird Parts',
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
    }
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleLinkChange = this.handleLinkChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
    this.onEntrySubmit = this.onEntrySubmit.bind(this)
  }

  onEntrySubmit(e) {
    const newEntry = {
      title: this.state.titleValue,
      link: this.state.linkValue,
      description: this.state.descriptionValue,
    };
    const selectWeek = this.state.optionValue
    const newWeek = this.state[selectWeek].concat(newEntry)
    this.setState({
      titleValue: '',
      linkValue: '',
      descriptionValue: '',
      [selectWeek]: newWeek,
    })
  }

  handleTitleChange(e) {
    this.setState({titleValue: e.target.value})
  }
  handleLinkChange(e) {
    this.setState({linkValue: e.target.value})
  }
  handleDescriptionChange(e) {
    this.setState({descriptionValue: e.target.value})
  }
  handleOptionChange(e) {
    this.setState({optionValue: e.target.value})
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <Header title='React Weekly Journal' />
          <div className='col-xs-8 col-xs-offset-2 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-3'>
            <NewResource
              titleValue={this.state.titleValue}
              handleTitleChange={this.handleTitleChange}

              linkValue={this.state.linkValue}
              handleLinkChange={this.handleLinkChange}

              descriptionValue={this.state.descriptionValue}
              handleDescriptionChange={this.handleDescriptionChange}

              optionValue={this.state.optionValue}
              handleOptionChange={this.handleOptionChange}

              addResource={this.onEntrySubmit}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-8 col-xs-offset-2'>
            <Week
              title='Week 1'
              entries={this.state.week1}
            />
            <Week
              title='Week 2'
              entries={this.state.week2}
            />
            <Week
              title='Week 3'
              entries={this.state.week3}
            />
          </div>
        </div>
      </div>
    );
  }
}
