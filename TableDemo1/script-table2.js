
function getDataUsers(){
	$.ajax({
	url: "http://localhost:3000/items",		
	success: function(users){
		console.log(users);
		render(users)
	}
	});
}
//get datas
getDataUsers();
//console.log('duoc goi sau khi chay ajax')

function render(users){
	const tbody=document.getElementsByTagName('tbody')[0]
	for (var i = 0; i < users.length; i++) {
		const user= users[i];
		let tr=document.createElement('tr')
		//es6 template String
		tr.innerHTML=`
			<tr>
			<td>
			<img src="${user.profile_image}"/>
			</td>
			<td>
			<a href="${user.link}" title="${user.link}"/>${user.display_name}</a>
			</td>
			<td>
			<a>${user.reputation}</a>
			</td>
			<td>
			<a href="${user.website_url}">${user.website_url}</a>
			</td>
			<td>
			<a>${convert(user.creation_date)}</a>
			</td>
			</tr>
			`
			tbody.appendChild(tr);
	}
}
//Covert unixtime -> date time
function convert(unixtimestamp){
	// Unixtimestamp
	// Months array
	let months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

	// Convert timestamp to milliseconds
	let date = new Date(unixtimestamp*1000);

	// Year
	let year = date.getFullYear();

 	// Month
 	let month = months_arr[date.getMonth()];

 	// Day
 	let day = date.getDate();

	// Hours
	let hours = date.getHours();

 	// Minutes
 	let minutes = "0" + date.getMinutes();

 	// Seconds
 	let seconds = "0" + date.getSeconds();

 	// Display date time in MM-dd-yyyy h:m:s format
 	let convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
 	return convdataTime;
 }
 function sortRankTop(x){
 	x.sort(function(a, b) {
 		return parseFloat(b.reputation) - parseFloat(a.reputation);
 	});
 }
 function sortRankBot(x){
 	x.sort(function(a, b) {
 		return parseFloat(a.reputation) - parseFloat(b.reputation);
 	});
 }		
//Hàm ajax chạy sau tất cả
function clickSortBot(){
	$('tbody>tr').remove();
	$.ajax({
	url: "http://localhost:3000/items",		
	success: function(users){
		console.log(users);
		sortRankBot(users)
		render(users)
	}
	});
}

function clickSortTop(){
	$('tbody>tr').remove();
	$.ajax({
	url: "http://localhost:3000/items",		
	success: function(users){
		console.log(users);
		sortRankTop(users)
		render(users)
	}
	});
}