import * as firebase from 'firebase';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './cssanimations.css';
import Header from './Header';
import Weeks from './Weeks';
import Footer from './Footer';

const center = {
  display: 'flex',
  justifyContent: 'center',
  paddingBottom: '2em',
  width: '100%',
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      weeks: [],
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onEntrySubmit = this.onEntrySubmit.bind(this);
    this.sortAlphabetically = this.sortAlphabetically.bind(this);
    this.deleteEntry = this.deleteEntry.bind(this);
    this.editEntry = this.editEntry.bind(this);
    this.addWeek = this.addWeek.bind(this);
  }

  componentDidMount() {
    const rootRef = firebase.database().ref().child('weeks');
    rootRef.on('value', (snap) => {
      this.setState({
        weeks: snap.val(),
        isLoading: false,
      });
    });
  }

  onEntrySubmit(aTitle, aLink, aDes, theState, idx) {
    const newEntry = {
      title: aTitle,
      link: aLink,
      description: aDes,
    };
    firebase.database().ref().child('weeks')
      .child(idx)
      .child('week')
      .child(this.state.weeks[idx].week.length)
      .set(newEntry);
  }

  addWeek() {
    firebase.database().ref().child('weeks')
      .child(this.state.weeks.length)
      .set({
        week: [
          {
            title: 'Add a title',
            link: '',
            description: 'Add a Description',
          },
        ],
      });
  }

  editEntry(weeksIdx, weekIdx, aTitle, aLink, aDes) {
    const newEntry = {
      title: aTitle,
      link: aLink,
      description: aDes,
    };
    firebase.database().ref().child('weeks')
      .child(weeksIdx)
      .child('week')
      .child(weekIdx)
      .set(newEntry);
    // const stateCopy = [...this.state.weeks];
    // const newWeek = stateCopy[weeksIdx].week.slice();
    // newWeek.splice(weekIdx, 1, newEntry);
    // stateCopy[weeksIdx].week = newWeek;
    // this.setState({
    //   weeks: stateCopy,
    // });
  }

  deleteEntry(weeksIdx, weekIdx) {
    firebase.database().ref().child('weeks')
      .child(weeksIdx)
      .child('week')
      .child(weekIdx)
      .remove();
    // const stateCopy = [...this.state.weeks];
    // const newWeek = stateCopy[weeksIdx].week.slice();
    // newWeek.splice(weekIdx, 1);
    // stateCopy[weeksIdx].week = newWeek;
    // this.setState({
    //   weeks: stateCopy,
    // });
  }

  handleInputChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  sortAlphabetically(theWeek) {
    const theState = [...this.state.weeks];
    const sortedWeek = theState[theWeek].week.sort((a, b) => {
      const titleA = a.title.toUpperCase();
      const titleB = b.title.toUpperCase();
      if (titleA < titleB) { return -1; }
      if (titleA > titleB) { return 1; }
      return 0;
    });
    theState[theWeek].week = sortedWeek;
    this.setState({
      weeks: theState,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <Header title="React Weekly Journal" />
        </div>
        <div className="row">
          <div className="col-xs-8 col-xs-offset-2">
            {this.state.isLoading ?
              <div style={center}>
                <span className="glyphicon glyphicon-refresh loading" aria-hidden="true"></span>
              </div> : ''
            }
            <Weeks
              theState={this.state.weeks}
              sortAlphabetically={this.sortAlphabetically}
              deleteEntry={this.deleteEntry}
              editEntry={this.editEntry}
              onEntrySubmit={this.onEntrySubmit}
            />
            <button
              onClick={this.addWeek}
              className="btn btn-primary btn-block"
            >
              Add Week
            </button>
          </div>
        </div>
        <div className="row">
          <Footer />
        </div>
      </div>
    );
  }
}
