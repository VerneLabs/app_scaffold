import React from 'react';

function HomeLayout(props){
  console.log("props =>", props)
  return (
    <section>
      {props.children}
    </section>
  )
}

export default HomeLayout;
