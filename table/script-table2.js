
let users=[];

function getDataUsers(){
	$.ajax({
		url: "https://cody-json-server.herokuapp.com/db",		
		success: function(data){
			console.log(data);
			users= data.items;
			renderContent(data.items);
		}
	});
}
//get datas
getDataUsers();

function renderContent(data){
	let content='';

	for (let i = 0; i < data.length; i++) {
		const user = data[i];

		//es6 template String
		content += `
		<tr>
		<td>
		<a href="${user.link}">
		<img src="${user.profile_image}" alt="${user.profile_image}"/>
		</a>
		</td>
		<td id="display_name">
		<a href="${user.link}">${user.display_name}</a>
		</td>
		<td id="reputation">
		${user.reputation}
		</td>
		<td>
		<a href="${user.website_url}">${user.website_url}</a>
		</td>
		<td id="creation_date">
		${convertTime(user.creation_date)}
		</td>
		</tr>
		`
	}
	$('#users').html(content);
}

function convertTime(unixTimeStamp) {
	const dateTime = new Date(unixTimeStamp * 1000);
	return dateTime.toLocaleString('vi');
}


function sort(th) {
	let thElement=$(th);
	let asc = $('.asc');
	let desc = $('.desc');
	let dataOrder=$('.click-sort');
	console.log(dataOrder);
	let name = thElement.attr('data-name');
	let order = thElement.attr('data-order');
	//console.log(name);

	asc.css('opacity', 0.3);
	desc.css('opacity', 0.3);
	dataOrder.attr('data-order', 0);


	switch (order){
		case '0':
		thElement.attr('data-order', 1);
		thElement.find('.asc').css('opacity', 1);
		thElement.find('.desc').css('opacity', 0.3);

		if (name==='display-name') {
			users.sort(function(a, b){
				return a.display_name.localeCompare(b.display_name);
			})
		}
		else if (name==='reputation') {
			users.sort(function (a, b){
				return a.reputation - b.reputation;
			})
		}
		else if (name==='creation-date') {
			users.sort(function (a, b){
				console.log(a.creation_date)
				return a.creation_date - b.creation_date;
			})
		}
		renderContent(users);
		break;

		case '1':
		thElement.attr('data-order', '0');
		thElement.find('.asc').css('opacity', 0.3);
		thElement.find('.desc').css('opacity', 1);

		if (name==='display-name') {
			users.sort(function(a, b){
				return b.display_name.localeCompare(a.display_name);
			})
		}
		else if (name==='reputation') {
			users.sort(function (a, b){
				return b.reputation - a.reputation;
			})
		}
		else if (name==='creation-date') {
			users.sort(function (a, b){
				return b.creation_date - a.creation_date;
			})
		}
		renderContent(users);
		break;
	}
}