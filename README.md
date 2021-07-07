# tomb-farming

scans LP pools, harvests rewards every 60sec<br>
needs node.js and ethers.js, log-timestamp library:<br>
npm install --save ethers<br>
npm install log-timestamp<br>
<br>
save your private key as an environment variable $PEENS


added wait+countdown function to auto-remove TOMB-FTM LPs from current TOMB earn pool and deposit in TSHARE earn pool when live.
tomb.js (genesis pools) no longer active, use test.js for claiming TOMB-FTM and TSHARE-FTM LP pools and claim+stake in masonry
