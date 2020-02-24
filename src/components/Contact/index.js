import React from 'react';
import './index.scss'

function Contact(props){
  return(
    <div className="contact_area" id="contact">
      <div className="container box">
          <div className="content">
            <h1 className="has-text-centered title">Contact</h1>
          </div>
          <div className="field is-horizontal">
              <div className="field-label is-normal">
              <label className="label">From</label>
          </div>
          <div className="field-body">
              <div className="field">
              <p className="control is-expanded has-icons-left">
                  <input className="input" type="text" placeholder="Name"/>
                  <span className="icon is-small is-left">
                  <i className="fas fa-user"></i>
                  </span>
              </p>
          </div>
          <div className="field">
            <p className="control is-expanded has-icons-left has-icons-right">
              <input className="input is-success" type="email" placeholder="Email"/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
              <span className="icon is-small is-right">
                <i className="fas fa-check"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="field is-horizontal">
          <div className="field-label"></div>
              <div className="field-body">
                  <div className="field is-expanded">
                  <div className="field has-addons">
                      <p className="control">
                      <a className="button is-static">
                          +254
                      </a>
                      </p>
                      <p className="control is-expanded">
                      <input className="input" type="tel" placeholder="Your phone number"/>
                      </p>
                  </div>
                  <p className="help">Do not enter the first zero</p>
              </div>
          </div>
      </div>

      <div className="field is-horizontal">
          <div className="field-label is-normal">
              <label className="label">Subject</label>
          </div>
          <div className="field-body">
              <div className="field">
                  <div className="control">
                      <input className="input" type="text" placeholder="e.g. Partnership opportunity"/>
                  </div>
              </div>
          </div>
      </div>

        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Question</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea className="textarea" placeholder="Explain how we can help you"></textarea>
              </div>
            </div>
          </div>
        </div>

        <div className="field is-horizontal">
          <div className="field-label">
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button btn-color">
                  Send message
                </button>
              </div>
            </div>
          </div>
        </div>
  </div>
  </div>
  )
  }
export default Contact;