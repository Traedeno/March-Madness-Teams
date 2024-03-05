import React from 'react';
// import logo from './logo.svg';
import './App.css';
import basketball from './CollegeBasketballTeams.json';

interface TeamInfo {
  school: string;
  name: string;
  city: string;
  state: string;
}
interface SchoolInfo {
  school: string;
}

function Welcome() {
  return (
    <h2>
      March Madness is about to start, here is a list of names and some
      information about the colleges in NCAA Basketball.
    </h2>
  );
}

class Team extends React.Component<TeamInfo> {
  render() {
    const oneTeam = this.props;
    return (
      <div>
        <h3>{oneTeam.school}</h3>
        <h5>Mascot Name: {oneTeam.name}</h5>
        <h5>
          Location: {oneTeam.city}, {oneTeam.state}
        </h5>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div>
      {basketball.teams.map((oneTeam) => (
        <Team {...oneTeam} />
      ))}
    </div>
  );
}
class School extends React.Component<SchoolInfo> {
  render() {
    const oneSchool = this.props;
    return (
      <div>
        <p>{oneSchool.school}</p>
      </div>
    );
  }
}

function AllTeams() {
  return (
    <div>
      {basketball.teams.map((oneSchool) => (
        <School {...oneSchool} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
      <AllTeams />
    </div>
  );
}

export default App;
