import React from 'react'
import ReactDOM from 'react-dom'
import jquery from 'jquery'


class Blog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data : []
		};
	}

	loadAjax(){
		$.ajax({
			url : this.props.url,
			dataType : 'json',
			success : (data) =>{
				this.setState({data : data});
			},
			error : (xhr, status, err) => {
				console.error(this.props.url, status, err.toString());
			}
		});
	}	
}


ReactDOM.render(
	<Blog url='http://staff.hatenablog.com/entry/2014/08/29/141633' apikey=''/>,
	document.getElementById("blog")
);