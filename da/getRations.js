
$(document).ready(function(){

	var data =
		{

			'refugees':
				{
					'A001':{
							'family_id':'F101',
							'photo': "photo1.jpg",
							},
					
					'A002':{
							'family_id':'F101',
							'photo': "photo2.jpg",
							'name':' Ivan Emoje',
							'rations':{
								 'food': 30,
								 'tools':20,
								 'utilities':10,
									}
							},

					'A003':{
							'family_id':'F101',
							'photo': "photo3.jpg",
							'name': 'Timothy Musimbi',
							'rations':{
								 'food': 60,
								 'tools':50,
								 'utilities':60,
									}

							},

					'A004':{
							'family_id':'F101',
							'photo': "photo4.jpg",
							'name':'Allan Muyingo',
							'rations':{
								 'food': 60,
								 'tools':50,
								 'utilities':60,
									}
							},

					'A005':{
							'family_id':'F102',
							'photo': "photo5.jpg",
							'name':'David Odongo',
							'rations':{
								 'food': 60,
								 'tools':50,
								 'utilities':60,
									}
							},

					'A006':{
							'family_id':'F102',
							'photo': "photo6.jpg",
							'name':'Musisi Brian',
							'rations':{
								 'food': 60,
								 'tools':50,
								 'utilities':60,
									}
							},

					'A007':{
							'family_id':'F103',
							'photo': "photo7.jpg",
							'name':'Cyril Kakooza',
							'rations':{
								 'food': 60,
								 'tools':50,
								 'utilities':60,
									}
							},

					'A008':{
							'family_id':'F103',
							'photo': "photo8.jpg",
							'name':'Carol Nankabirwa',
							'rations':{
								 'food': 60,
								 'tools':50,
								 'utilities':60,
									}
							},

					'A009':{
							'family_id':'F103',
							'photo': "photo9.jpg",
							'name':'Terry Namukaabya',
							'rations':{
								 'food': 60,
								 'tools':50,
								 'utilities':60,
									}
							},

					'A010':{
							'family_id':'F104',
							'photo': "photo10.jpg",
							'name':'Wilson Okot',
							'rations':{
								 'food': 60,
								 'tools':50,
								 'utilities':60,
										}
							},


					'A011':{
							'family_id':'F104',
							'photo': "photo11.jpg",
							'name':'Lucy Mucai',
							'rations':{
								 'food': 60,
								 'tools':50,
								 'utilities':60,
										}
							},
					'A012':{
							'family_id':'F104',
							'photo': "photo12.jpg",
							'name':'Herbert Olowo',
							'rations':{
								 'food': 60,
								 'tools':50,
								 'utilities':60,
										}
							}


				},


			'families':
				{
					'F101':{
							'members':['A001', 'A002','A003','A004'],
							'received':0,
							'receiver':'',
							'rations':
									{
									'food': 50,
								 	'tools':10,
								 	'utilities':20,
									}
							},

					'F102':{
							'members':['A005','A006'],
							'received':0,
							'receiver':'',
							'rations':
									{
									'food': 30,
								 	'tools':20,
								 	'utilities':25,
									}
					},

					'F103':{
							'members':['A007','A008','A009'],
							'received':0,
							'receiver':'',
							'rations':
									{
									'food': 24,
								 	'tools':15,
								 	'utilities':35,
									}
					},

					'F104':{
							'members':['A010','A011','A012'],
							'received':0,
							'receiver':'',
							'rations':
									{
									'food': 62,
								 	'tools':34,
								 	'utilities':32,
									}
					}

				}
		};	

	$('select').change(function(){
		var ident = $('select').find(":selected").text();
		// console.log(ident)
		var user_fam = data['refugees'][ident]['family_id']
		//console.log(user_fam)

		var family = data['families'][user_fam];


		var food = family['rations']['food'];

		// console.log(data);

		// var family = data[ident]

		// var food = family['food']

		$('#foodp').text(food);
		 $('#toolsp').text(family['rations']['tools']);
		$('#utilitiesp').text(family['rations']['utilities']);

		if (family['received']==1){
			$("button").prop('disabled', true);
			var receiver = data['refugees'][family['receiver']]['name'];
			$("#message").text("Your family has already received rations given to "+ receiver);
			$("#message").css("visibility", "visible");
		}

		else{
			$("button").prop('disabled', false);
			$("#message").css("visibility", "hidden");
		}

		// console.log($('#foodp'));


	$("button").click(function(){
		var ident = $('select').find(":selected").text();
		// console.log(ident)
		var user_fam = data['refugees'][ident]['family_id']

		var family = data['families'][user_fam]

		data['families'][user_fam]['received'] =1;
		data['families'][user_fam]['receiver'] =ident;

		// $("button").prop('disabled', false);
		this.disabled=true

        console.log(family['received'])

    });
		


	});


});