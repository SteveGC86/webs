import React from 'react'
import NotificationCard from './NotificationCard'

class NotificationList extends React.Component {
  state={
    notifications: null,
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API_URI}/notifications`)
    .then(res => res.json())
    .then(users => {
      this.setState({
        notifications
      })
    })
  }

  render(){
    const notifications = this.state.notifications
    if(!notifications){
      return <h1>No New Notifications</h1>
    }
    return(
      <div className="container">
        <div className="fetch">
          {
            notifications.map(singleNotification =>{
              return <NotificationCard key={singleNotification._id} singleNotification={singleNotification}/>
            })
          }
        </div>
      </div>
    )
  } 

}

export default NotificationList