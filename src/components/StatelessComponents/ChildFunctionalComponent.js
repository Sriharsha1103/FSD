import React from 'react'

function ChildFunctionalComponent(props) {
  return (
    <table border="1">
        <tr>
          <td>
            <b>S.No.</b>
          </td>
          <td>
            <b>Name</b>
          </td>
        </tr>

        {props.data.map(function (item, index) {
          return (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.name}</td>
            </tr>
          );
        })}
      </table>
  )
}

export default ChildFunctionalComponent