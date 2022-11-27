import React from 'react'

export default function Footer({tasks,setTasks}) {
    if (tasks.length > 0) {
        return (
          <div className="footer">
            <p>You have {tasks.length} pending tasks</p>{" "}
            <button className="clear" onClick={() => setTasks([])}>
              Clear All
            </button>
          </div>
        );
      } else {
        return <span></span>;
      }
}
