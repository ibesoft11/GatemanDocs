import React, { Component } from 'react';

import '../components/Home.css';
import '../components/ForkMe.css';
import bg from '../assets/gatemanjs.jpeg';

class Home extends Component {
    render() {
      return (
        <div className="body">
           <div className="landing-page">
           <img src={bg} className="logo"></img>
           <a class="github-fork-ribbon left-top" href="https://github.com/NwangwuOsitadinma/gateman" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
                <div class="button_cont" align="center">
                    <a class="button" href="#quickstart">
                        Get Started
                    </a>
                </div>
           </div>
          <h1 style={{color:"rgb(41, 15, 4)"}} className="sub-heading">Installation</h1>
          <p className="paragraph">You can install Gatemanjs using the npm package manager, on your terminal run 
          <div class="code">
          npm install gatemanjs
         </div></p>
         <h1 className="sub-heading">Why use Gateman.js?</h1>
         <div className="container">
            <div className="card">
                <h3 className="sub-heading">Simple Usage</h3>
                <p className="paragraph">Focus on writing business logic - Gateman.js makes authorization simple like never before.</p>
            </div>
            <div className="card">
                <h3 className="sub-heading">Quality Ecosystem</h3>
                <p className="paragraph">Gateman.js is supported by developers from around the world bound by a strict code of conduct.</p>
            </div>
         </div>
         <h1 className="sub-heading" id="quickstart">Quickstart</h1>
         <section className="container">
            <p style={{width:"50%"}} className="quickstart">
            Gateman.js is an authorization system designed to manage roles and claims in node applications that use mongodb for data storage.
             It works together with mongoose to provide a fluent approach to managing roles and claims.
             <h3>Roles</h3>Roles are created for various functions. A user can belong to a role. For example, in a school we can have 3 roles:
             Principal, Teacher and Student with each of them performing different functions.
             <h3>Claims</h3>Claims are individual actions that can be performed by anyone that owns them.
             A role can have claim(s), a user can also have claim(s). Using our school example, we can have the following as claims:
             Teach, EmployStaff, TakeExams. In Gateman.js, claims can be assigned directly to users or to members of a role.
            </p>
         </section>
        </div>
    );
    }
}

export default Home;