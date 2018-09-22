		let timeArr = ["x"];
		let smArr = ["sm"];
		let mdArr = ["md"];
		let bigArr = ["big"];
		let totalArr = ["total"];
		function monthChk(){
			axios({
				method: 'POST',
				url: 'http://localhost/monthChk.php',
				headers: {
					'Accept' : '*'
				}
			})
			.then((res)=>{
				//dataCar = res;
				//resArrPush();
				for(let i=0;i<res.data.length;++i){
					timeArr.push( res.data[i].date);
					smArr.push(res.data[i].sm);
					mdArr.push(res.data[i].md);
					bigArr.push(res.data[i].big);
					totalArr.push(res.data[i].total);
				}
			}).then(()=>{
				displayChart();
			})

		};
		
		monthChk();
		// let resArrPush = function(){
			
		// 	for(let i=0;i<dataCar.data.length;i++){
		// 		timeArr.push( dataCar.data[i].date);
		// 		smArr.push(dataCar.data[i].sm);
		// 		mdArr.push(dataCar.data[i].md);
		// 		bigArr.push(dataCar.data[i].big);
		// 		totalArr.push(dataCar.data[i].total);
		// 	}
		// };
		// function graphTypeSelector(){
		// 	return document.querySelector('input[name="graphType"]:checked').value;
		// }

		function displayChart(){
		const chart = bb.generate({
			data: {
				x: "x",
				xFormat: "%Y-%m-%d",
				columns: [
					timeArr,
					smArr,//["sm", 0, 2, 0, 3],
					mdArr,//["md", 4, 3, 5, 2],
					bigArr//["big",0, 1, 2, 2]
				],
				type: document.querySelector('input[name="graphType"]:checked').value//graphTypeSelector()
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
		setTimeout(function(){
			chart.load({
				columns: [
					totalArr
				],
				type: "line"
                });
		    },1000);
	}