const { ethers } = require('ethers');
require('log-timestamp');

rpc = 'https://rpc.ftm.tools/';

const pkey = process.env.PEENS; 		// store private key as env var $PEENS

const provider = new ethers.providers.JsonRpcProvider(rpc);
const signer = new ethers.Wallet(pkey, provider);

const myWallet = signer.address;

var options = { gasPrice: 50000000000, gasLimit: 3000000};		// gwei

// Tomb initial WFTM-TOMB LP v0.6.12+commit.27d51765 (de-activated)
// const TombTokenName = 'TOMB';
// const TombLpAddress = '0xa7b9123f4b15fE0fF01F469ff5Eab2b41296dC0E';
// const TombLpAbi = [{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTombPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTOMB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTombPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
// const TombLpContract = new ethers.Contract(TombLpAddress, TombLpAbi, signer);
// const TombPools = 1;
// TSHARE token contract
const ShareTokenName = 'TSHARE';
const ShareAddress = '0x4cdF39285D7Ca8eB3f090fDA0C069ba5F4145B37';
const ShareAbi = [{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"address","name":"_communityFund","type":"address"},{"internalType":"address","name":"_devFund","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"COMMUNITY_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEV_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FARMING_POOL_REWARD_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VESTING_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"communityFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_farmingIncentiveFund","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_devFund","type":"address"}],"name":"setDevFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_communityFund","type":"address"}],"name":"setTreasuryFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unclaimedDevFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedTreasuryFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"}];
const ShareTokenContract = new ethers.Contract(ShareAddress, ShareAbi, provider);
// TShareRewardPool - TOMB-FTM, TSHARE-FTM LP pools
const ShareLpAddress = '0xcc0a87F7e7c693042a9Cc703661F5060c80ACb43';
const ShareLpAbi = [{"inputs":[{"internalType":"address","name":"_tshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}];
const ShareLpContract = new ethers.Contract(ShareLpAddress, ShareLpAbi, signer);
const SharePools = 2;		// pid-0~1

// Masonry
const MasonryAddress = '0x8764DE60236C5843D9faEB1B638fbCE962773B67';
const MasonryAbi = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"executor","type":"address"},{"indexed":false,"internalType":"uint256","name":"at","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"allocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"canClaimReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"canWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"getLastSnapshotIndexOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTombPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_tomb","type":"address"},{"internalType":"contract IERC20","name":"_share","type":"address"},{"internalType":"contract ITreasury","name":"_treasury","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestSnapshotIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"masonryHistory","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"rewardReceived","type":"uint256"},{"internalType":"uint256","name":"rewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"masons","outputs":[{"internalType":"uint256","name":"lastSnapshotIndex","type":"uint256"},{"internalType":"uint256","name":"rewardEarned","type":"uint256"},{"internalType":"uint256","name":"epochTimerStart","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardLockupEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawLockupEpochs","type":"uint256"},{"internalType":"uint256","name":"_rewardLockupEpochs","type":"uint256"}],"name":"setLockUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"share","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"contract ITreasury","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawLockupEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
const MasonryContract = new ethers.Contract(MasonryAddress, MasonryAbi, signer);
// stake(amount) = deposit
// claimReward() = claim TOMB
// exit() = claim and withdraw
const minAmount = ethers.utils.parseEther("0.0001");		// 4 decimal (web)
const epoch = 6*3600		// 1 epoch = 6 hrs
// deposit/withdraw locks TSHARE 6 epochs, claim 3 epochs
// claim locks staked TSHARE 6 epochs, claim 3 epochs
// no-withdraw strat: claim > deposit every 3 epochs
// exit option: claim > deposit wait 6 epochs, evaluate >> claim+withdraw OR repeat (claim+deposit)

async function StatusMason() {
	var status = [];
	status[0] = await MasonryContract.canClaimReward(myWallet);
	status[1] = await MasonryContract.canWithdraw(myWallet);
	return status;
}

async function ClaimAndDeposit(status=[false,false]) {
	try {
		// check reward exists
		const pendingTOMB = await MasonryContract.earned(myWallet);
		const anyRewards = await pendingTOMB.gt(0);
		if (status[0]) {
			console.log("can claim from masonry: "+await ethers.utils.formatUnits(pendingTOMB,18)+" TOMB");
			await MasonryContract.claimReward();
			await sleep(3000);
			console.log(">> claimed: "+await ethers.utils.formatUnits(pendingTOMB,18)+" TOMB" );
		}
		// check rewards claimable and any exists
		if (status[0] || anyRewards) {
		// if (status[0]) {
			const walBal = await ShareTokenContract.balanceOf(myWallet);
			var depAmt = await ethers.BigNumber.from(walBal);
			if (depAmt.gte(minAmount) ) {
				// await MasonryContract.claimReward();
				// await sleep(3000);
				// console.log(">> claimed: "+await ethers.utils.formatUnits(pendingTOMB,18)+" TOMB" );
				depAmt = await depAmt.sub( depAmt.mod(1e14) ); 	// zero 5th decimal place and beyond
				// console.log("depositing: "+ await ethers.utils.formatUnits(depAmt,18) +" TSHARE...");
				await MasonryContract.stake(depAmt);
				console.log(">> deposited: "+ await ethers.utils.formatUnits(depAmt,18) +" TSHARE");
			}
		}
	}
	catch (err) {
		console.log(err + "\ncontinuing...");
	}
	return;
}

// claim+deposit masonry loop (3 epoch = 18hrs)
const repeat = 3 * epoch * 1000;		// loop time, msec 
const tokens = [ShareTokenName];
const LpContracts = [ShareLpContract];
const StakeContracts = [false];



// generic functions
function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function scanPools(contract=ShareLpContract, pools=SharePools, token=ShareTokenName) {
	var n; claimablePids = [];
	for (n=0; n<pools; n++) {
		var bal = await pendingBal(contract, n, myWallet, token);
	    if (bal>0) {
	    	claimablePids.push(n);
	    	const tokenBal = ethers.utils.formatUnits(bal,18);
			console.log("pid"+n+": "+tokenBal+" "+token);
	    }
	}
	return claimablePids;
}

function pendingBal(contract=BooLpContract, _pid=0, wallet=myWallet, token=BooTokenName) {
	if (token == 'BOO') {
		// this is amt shown in single stake (value to be compounded)
		return contract.pendingBOO(_pid, wallet);
	} else if (token == 'LQDR') {
		return contract.pendingLqdr(_pid, wallet);
	} else if (token == 'TOMB') {
		return contract.pendingTOMB(_pid, wallet);
	} else if (token == 'TSHARE') {
		return contract.pendingShare(_pid, wallet);
	}
	return 0;
}

function walletBal(contract=BooTokenContract) {
	return contract.balanceOf(myWallet);
}

async function claimLpReward(contract=BooLpContract, _pid=NaN, _amount=0, token=BooTokenName) {
	if (_pid != NaN & _amount != NaN) {
		var harvestBal = 0;
		// add pending single stake BOO to withdraw amt to be harvested
		if (token == 'BOO' & _pid==0) {
			harvestBal = await contract.pendingBOO(0, myWallet);
		} else {
			harvestBal = await pendingBal(contract, _pid, myWallet, token);
		}
		await sleep(2000);
		const subTotal = await _amount + harvestBal;
		await contract.withdraw(_pid, subTotal, options);
		subTotalStr = ethers.utils.formatUnits(subTotal,18);
		console.log(">> claimed: "+subTotalStr+" "+token);
	}
	return;
}


//////////////////////////////////// main function /////////////////////////////////////////////////////////////////////
async function main() {
	// main loop
	while(true) {
		// scan/claim LP pools
		for (idx in tokens) {
			// find LPs with claimable balances
			console.log("scanning "+tokens[idx]+" pools.".padEnd(82,'.') );
			try {
				var claimablePids = await scanPools(LpContracts[idx], SharePools, tokens[idx]);

				await sleep(2000);
				// harvest LP rewards
				for (index in claimablePids) {
					await claimLpReward(LpContracts[idx], claimablePids[index], 0, tokens[idx]);		// try withdraw 0 (this is lp token bal)
					await sleep(3000);
				}
			}
			catch (err) {
				console.log(err);
			}
		}
		// check masonry status during wait time
		const repeatMins = repeat/60000;		// masonry repeat timer (3 epochs)
		var claimed = false;
		for (min=0; min<repeatMins; min++) {
			var status = await StatusMason();
			// console.log('masonry staus >> can claim: '+status[0]+', can withdraw: '+status[1]);
			// cehck claimable
			if (status[0]) {
				await ClaimAndDeposit(status);
				// align claim w/epoch cycle
				if (claimed==false) {
					claimed = true;		// set claim state only if prev claim was false
					min = 0;			// reset loop counter (let it run out otherwise)
				}
			}
			if (min%10 == 0 && claimed==true) {
				console.log("waiting "+ (repeatMins-min) + " more minutes ("+(repeatMins-min)/60 +" hrs)...");
			}
			if (min%60 == 0 && claimed==false) {
				console.log("not claimable yet, waiting...");
			}
			await sleep(60000);		// wait 1 min
		}
	}
}

main().then(console.log).catch(console.error);