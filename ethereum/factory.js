import web3 from '../web3';
import CampaignFactory from '../build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    ''//contract address that deployed after running ContractFactory
);

export default instance;