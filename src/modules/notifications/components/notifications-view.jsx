import React, { PropTypes } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import NullStateMessage from 'modules/common/components/null-state-message';
import Notification from 'modules/notifications/components/notification';

import getValue from 'utils/get-value';

const NotificationsView = (p) => {
  const notifications = getValue(p, 'notifications.notifications');

  const animationSpeed = parseInt(window.getComputedStyle(document.body).getPropertyValue('--animation-speed-normal'), 10);

  return (
    <section id="notifications_view">
      <div className="notifications-header">
        <h3>Notifications</h3>
        {!!notifications && !!notifications.length &&
          <button
            className="unstyled notifications-button-clear"
            onClick={(e) => {
              e.stopPropagation();
              p.clearNotifications();
            }}
          >
            clear all
          </button>
        }
      </div>
      {notifications && notifications.length ?
        <CSSTransitionGroup
          className="notifications"
          component="div"
          transitionName="notification"
          transitionAppear
          transitionAppearTimeout={animationSpeed}
          transitionEnterTimeout={animationSpeed}
          transitionLeaveTimeout={animationSpeed}
        >
          {notifications.map((notification, i) => (
            <Notification
              key={`${notification.id}-${notification.title}`}
              removeNotification={() => p.removeNotification(i)}
              onClick={p.onClick}
              toggleNotifications={p.toggleNotifications}
              {...notification}
            />
          ))}
        </CSSTransitionGroup> :
        <NullStateMessage message="No Notifications" />
      }
    </section>
  );
};

NotificationsView.propTypes = {
  notifications: PropTypes.object.isRequired,
  removeNotification: PropTypes.func.isRequired,
  clearNotifications: PropTypes.func.isRequired,
  toggleNotifications: PropTypes.func.isRequired,
  onClick: PropTypes.func
};

export default NotificationsView;
