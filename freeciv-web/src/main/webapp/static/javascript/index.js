$(document).ready(function () { 

	(function ($) {
	
		$(function () {
			//loadBestOfPlayByEmail();
			//displayStore();

			if (!Detector.webgl) {
	          $("#webgl_button").hide();
			}
		});
	

	
		function loadBestOfPlayByEmail() {
		
			var clearContent = function () {
				document.getElementById('best-of-play-by-email').style.display = 'none';
			};
		
			$.getJSON('/game/play-by-email/top', function(data) {
				if (data.length === 0) {
					clearContent();
				}
				var root = document.getElementById('play-by-email-list');
				data.forEach(function (item, i) {
					var row = document.createElement('tr');
					var rank = document.createElement('td');
					var player = document.createElement('td');
					var wins = document.createElement('td');
				
					rank.innerHTML = "#" + (i + 1);
					player.innerHTML = item.player;
					wins.innerHTML = item.wins;
				
					row.appendChild(rank);
					row.appendChild(player);
					row.appendChild(wins);
					root.appendChild(row);
				});
			}).fail(clearContent);
		}


	
	})($)
});