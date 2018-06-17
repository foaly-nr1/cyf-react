// @flow
import React, { Component } from 'react';
import { Button, ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import TopSection from '../../components/top-section';
import { createEvent } from '../../lib/events';

const COLOR = { color: '#555' };

function FieldGroup({ id, label, help, ...props }: Object) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} style={COLOR} />
    </FormGroup>
  );
}

type State = {
  description: string,
  location: string,
  date: string,
  startTime: string,
  endTime: string,
  title: string,
};
class CreateEvent extends Component<{}, State> {
  state = {
    description: '',
    location: '',
    date: '',
    startTime: '',
    endTime: '',
    title: '',
  };

  handleSubmit = async (event: Event) => {
    event.preventDefault();
    await createEvent(this.state);
    this.setState({
      description: '',
      location: '',
      date: '',
      startTime: '',
      endTime: '',
      title: '',
    });
  };

  handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };

  render() {
    return (
      <main className="container">
        <TopSection title="Create Event" />

          <div className="col-sm-8 col-sm-offset-2 block-2-box">
            <form onSubmit={this.handleSubmit}>
              <FieldGroup
                required
                name="title"
                type="text"
                label="Title (required)"
                placeholder="Enter text"
                onChange={this.handleChange}
                value={this.state.title}
              />

                <FormGroup controlId="description">
                  <ControlLabel>Description (required)</ControlLabel>
                    <FormControl
                      componentClass="textarea"
                      name="description"
                      onChange={this.handleChange}
                      placeholder="Description..."
                      style={COLOR}
                      value={this.state.description}
                    />
                </FormGroup>

                  <FieldGroup
                    label="When (required)"
                    name="date"
                    onChange={this.handleChange}
                    type="date"
                    value={this.state.date}
                  />

                    <FieldGroup
                      label="Start time"
                      name="startTime"
                      onChange={this.handleChange}
                      type="time"
                      value={this.state.startTime}
                    />

                      <FieldGroup
                        label="End time"
                        name="endTime"
                        onChange={this.handleChange}
                        type="time"
                        value={this.state.endTime}
                      />

                        <FieldGroup
                          label="Where (required)"
                          name="location"
                          onChange={this.handleChange}
                          type="text"
                          value={this.state.location}
                        />

                          <Button type="submit">Create</Button>
            </form>
          </div>
      </main>
    );
  }
}

export default CreateEvent;
