//twitter placeholder things
let ProfileName = prompt('Please, whats the name of your twitter account?');
let Handle = prompt('and... whats your twitter handle? (@Something)');
let tweetcont = prompt('Type the content of the tweet here:');
window.onload = setPlaceholders() {
		document.getElementById("tweetcont").innerHTML = tweetcont;
		document.getElementById("user").innerHTML = ProfileName;
		document.getElementById("handle").innerHTML = "@" + Handle;
}
//twitter counts startup
	
	let retweetmoji = '<svg viewBox="0 0 24 24" aria-hidden="true" class="retweetssvg"><g><path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path></g></svg> ';
	let commentmoji = '<svg viewBox="0 0 24 24" aria-hidden="true" class="commentssvg"><g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path></g></svg> ';
	function getRandomInt(max) {
		return Math.floor(Math.random() * max);
	}
    let likes = 0;
	let retweets = 0;
	let comments = 0;
	let Formatter = new Intl.NumberFormat('en', { notation: 'compact' });
    window.setInterval(
    function () {
		let addition = getRandomInt(444);
        likes = likes + addition;
		let LikesFormatted = Formatter.format(likes);
        document.getElementById("likes").innerHTML = "♥" + LikesFormatted;
     }, 2048);
	 window.setInterval(
	 function retweet() {
		let additionrt = getRandomInt(18);
        retweets = retweets + additionrt;
		let RetweetsFormatted = Formatter.format(retweets);
        document.getElementById("retweets").innerHTML = retweetmoji + RetweetsFormatted;
     }, 2106);
	 window.setInterval(
	 function comment() {
		let additioncm = getRandomInt(41);
        comments = comments + additioncm;
		let CommentsFormatted = Formatter.format(comments);
        document.getElementById("comments").innerHTML = commentmoji + CommentsFormatted;
     }, 1896);
