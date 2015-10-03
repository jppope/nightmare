/**
 * @class review Robots.txt file
 * @author Jon Paul Uritis | @jppope | jonpaul.uritis@thestormcloudgroup.com
 * This file will check to see if you can crawl a site... that doesn't necessarily mean scrape a site
 *
 * Read more here: https://en.wikipedia.org/wiki/Web_scraping#Legal_issues
 * Precedent here: http://caselaw.findlaw.com/us-supreme-court/499/340.html
 * Precedent here: http://cdn.ca9.uscourts.gov/datastore/opinions/2014/08/18/12-56628.pdf
 * More info here: http://www.bna.com/legal-issues-raised-by-the-use-of-web-crawling-and-scraping-tools-for-analytics-purposes
 *
 */

var Nightmare = require('nightmare');
var url = "http://duckduckgo.com";

new Nightmare()
	.goto(url + "/robots.txt")
	.wait()
	.evaluate(function (){
		var getRobots = document.body.textContent;
		return getRobots ;
	}, function (returnRobots) {
		var contents = returnRobots.split('\n');
		console.log(contents);
	})
	.run(function( err, nightmare){
		console.log("done");
	});