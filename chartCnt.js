        let dataCar;
		let timeArr = ["x"];
		let smArr = ["sm"];
		let mdArr = ["md"];
		let bigArr = ["big"];
		let totalArr = ["total"];
		setTimeout(function() {
			axios({
				method: 'GET',
				url: 'http://localhost/monthChk.php',
				headers: {
					'Accept' : '*' 
				}
			})
			
			.then((res)=>{
				dataCar = res;
				//resArrPush();
				console.log(res);
				
			}).then(()=>{
				for(let i=0;i<dataCar.data.length;i++){
					timeArr.push( dataCar.data[i].date);
					smArr.push(dataCar.data[i].sm);
					mdArr.push(dataCar.data[i].md);
					bigArr.push(dataCar.data[i].big);
					totalArr.push(dataCar.data[i].total);
				}
			})

		},1);
		// let resArrPush = function(){
			
		// 	for(let i=0;i<dataCar.data.length;i++){
		// 		timeArr.push( dataCar.data[i].date);
		// 		smArr.push(dataCar.data[i].sm);
		// 		mdArr.push(dataCar.data[i].md);
		// 		bigArr.push(dataCar.data[i].big);
		// 		totalArr.push(dataCar.data[i].total);
		// 	}
		// };
		setTimeout(function(){
let chart = bb.generate({
			data: {
				x: "x",
				xFormat: "%Y-%m-%d",
				columns: [
					timeArr,
					smArr,//["sm", 0, 2, 0, 3],
					mdArr,//["md", 4, 3, 5, 2],
					bigArr//["big",0, 1, 2, 2]
				],
				type: "bar"
			},
			bar: {
				width: {
					ratio: 0.5
				}
			},
			axis: {
				x: {
					type: "timeseries",
					localtime: true,
					tick: {
						format: "%Y %m-%d"
					}
				}
			},
			bindto: "#myChart"
		});
		// setTimeout(function(){
		// 	chart.load({
		// 		columns: [
		// 			["data5",3 , 3, 50, 3]
		// 		],
		// 		type: "line"
        //         }); 
        //     },200);
		},2000)
		