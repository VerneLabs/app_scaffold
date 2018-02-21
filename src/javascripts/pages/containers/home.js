import React, {Component} from 'react';
import ZAFClient from 'zendesk_app_framework_sdk';
import HomeLayout from '../components/home-layout';
import Search from '../../search/index';
import HandleError from '../../error/containers/handle-error';
const client = ZAFClient.init();

class Home extends Component {
  componentDidMount(){
    // // Makes the window big
    client.invoke('resize', { width: '100%', height: '500px' });
  }

  render(){
    return (
      <HandleError>
        <div>
          <HomeLayout>
            <Search client={client}/>
          </HomeLayout>
        </div>
      </HandleError>
    )
  }
}

export default Home;
