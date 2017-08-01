import React from 'react'
import AddSeller from './AddSeller'

class AddSellerPage extends React.Component {
  submit = (values) => {
    console.log(values)
  }
  render() {
    return (
      <AddSeller onSubmit={this.submit} />
    )
  }
}