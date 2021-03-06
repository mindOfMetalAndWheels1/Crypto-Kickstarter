import React, { Component } from 'react';
import {Card, Button} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../Components/Layout';
import { Link } from '../routes';

class CampaignIndex extends Component {
    static async getInitialProps (){
        const campaigns =  await factory.methods.getDeployedCampaigns().call();

        return {campaigns};
    }

    //render the campaigns made
    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return{
                header: address,
                description: ( <Link route={`/campaigns/${address}`} ><a>View campaign</a></Link> ),
                fluid: true
            };
        });

        return <Card.Group items = {items}/>;
    }

    //render the overral look of the app
    render(){
        return(
            <Layout>
                <div> 
                    <h3>Open campaigns</h3>
                    <Link>
                        <a><Button floated="right" content= "Create campaign" icon= "add circle" primary /></a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        );
        
    }
}

export default CampaignIndex;