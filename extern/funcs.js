var sp = getSpotifyApi(1);
var models = sp.require('sp://import/scripts/api/models');
var m = sp.require('sp://import/scripts/api/models');
var player = models.player;
var v = sp.require("sp://import/scripts/api/views");

$(document).ready(Constructor)

function Constructor(){

        console.log('Started: loading app.');
	PlayerRefresh();
	CurrentSongData();
	ShowTrackData();
	Squares();
	Get_User_ID();
	console.log('Finished: loading app.');
}

function PlayerRefresh(){
	player.observe(models.EVENT.CHANGE, function (e){
			// Only update the page if the track changed
			ReloadPage();
			console.log('Started: PlayerRefresh');
    });
}

function CreatePlaylist(){
	var playlist = new m.Playlist.fromURI('http://open.spotify.com/user/1117535795/playlist/59nkn5pKC1SMtRr5mG2JPm');
	playlist.subscribed = true;
	console.log(playlist.name);
	var PlayList = playlist.tracks;
	console.log(PlayList.length)
	var Lengte = PlayList.length;
	
	for( i=0; i < Lengte;i++){
		console.log(PlayList[i].data.name);
	}
}

function Test(){
	console.log('Started: Test');
}

function CurrentSongData(){
	console.log('Started: CurrentSongData');
	var PlayerTrackInfo = player.track;
	var Track = PlayerTrackInfo.data;
}

function CurrentPlaylist(){
	console.log('Started: CurrentPlaylist');
	nummers[i] = array[i].data.uri;
	console.log("nummers: " +nummers);
}

function ReloadPage(){
	console.log('Started: ReloadPage');
	window.location.reload();
	console.log('Reloaded');
}

function ShowTrackData(){
	console.log('Started: ShowTrackData');
	var playerTrackInfo = player.track;

    if (playerTrackInfo == null) {
        $('h2').replaceWith("<span class='error'>Er speeld niets!</span>");
    } else {
		var track = playerTrackInfo.data;
		$('h2').replaceWith("<h2> Track: "+ track.name + "<BR /> Album: " + track.album.name + " <BR />Artiest: " + track.album.artist.name + ". <BR /> URI/Locatie: " + track.uri + "</h2>");
	}
}

function Squares(){
	console.log('Started: Squares');
	var canvas = document.getElementById("canvas");
	
	if (canvas.getContext) {
		var ctx = canvas.getContext("2d");

		//define the colour of the square
		ctx.strokeStyle = "green";
		ctx.fillStyle = "green";

		// Draw the outline of a square
		ctx.strokeRect(50,50,100,100);

		// Draw a square using the fillRect() method and fill it with the colour specified by the fillStyle attribute
		ctx.fillRect(200,50,100,100);

		// Draw a square using the rect() method
		ctx.rect(350,50,100,100);
		ctx.stroke();
		console.log('Squared!');
	}
}

function PlaySail(uri){
	console.log('Started: PlaySail');
	var uri = 'spotify:track:4VUGq8KUTVv5YnMqU6nkDa';
	sp.trackPlayer.playTrackFromUri(uri, {
		onSuccess: function() { console.log("success SONG");} ,
		onFailure: function () { console.log("failure SONG");},
		onComplete: function () { console.log("complete SONG"); }
    });
	
}

function Get_User_ID(){
	
	console.log('Started: Get_User_ID');
	var ID = models.session.anonymousUserID;
	console.log(ID);
        return ID;
}

function Constructor_Playlist(){
	
	console.log('Started playlist constructor.');
	GetPlaylist();
	GetTracksPlaylist();
	AddPlaylist();
	RemoveTracks();
	AddTracks();
	console.log('Finished playlist constructor.');
}

function GetPlaylist(){
	
	console.log('Started: GetPlaylist');
	var Playlist = new m.Playlist.fromURI('http://open.spotify.com/user/1117535795/playlist/59nkn5pKC1SMtRr5mG2JPm');
	console.log('Got playlist: ' + Playlist.name);
	return Playlist
}

function AddPlaylist(){
	console.log('Started: AddPlaylist');
	var Playlist = new m.Playlist.fromURI('http://open.spotify.com/user/1117535795/playlist/59nkn5pKC1SMtRr5mG2JPm');
	Playlist.subscribed = true;
	console.log('Playlist added to account');
}

function GetTracksPlaylist(){
	
	console.log('Started: GetTracksPlaylist');
	var Playlist = GetPlaylist();
	var Tracks = Playlist.tracks;
}

function RemoveTracks(){
	console.log('Started: RemoveTracks');
	var Playlist = GetPlaylist();
	var Tracks = Playlist.tracks;
	var TracksAmount = Tracks.length;

	for (i=0;i<TracksAmount;i++){
		var TrackURI = Tracks[i].data.uri;
		Playlist.remove(TrackURI);
	}	
}

function GetNewTracks(){
	
	console.log('Started: GetNewTracks');
	
	var NewTracks = ["4VUGq8KUTVv5YnMqU6nkDa","4d5QDE01i4iYVpPOfG6ho5","59OoFabb4932QQUqcY7awO"];
	return NewTracks;
	
}

function AddTracks(){
	
	console.log('Started: AddTracks');
	
	var NewTracks = GetNewTracks();
	var Playlist = GetPlaylist();
	var TracksAmount = NewTracks.length;
	var i = 0;
	
	while (i<TracksAmount){
		var TrackURI = NewTracks[i];
		Playlist.add('spotify:track:' + TrackURI);
		i++;
	}
	
	console.log('Tracks added');
	
}

function HelpMe(){
	
	
	
}