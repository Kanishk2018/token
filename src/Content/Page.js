import React, { Component } from 'react';
import Header from '../Header/Header';

class Page extends Component {
	constructor(props){
		super(props);
		this.state = {
			showPage2: false,
			showPage3: false,	
		};	
		this._onButtonClick = this._onButtonClick.bind(this);
		this._onButtonClick2 = this._onButtonClick2.bind(this);
	}

	_onButtonClick(){
		this.setState({
			showPage2: true,
			showPage3: false
		});
	}

	_onButtonClick2(){
		this.setState({
			showPage2: false,
			showPage3: true
		});
	}

	render(){
		return (
			<div className="mainWrapper">
				<Header />
				{this.state.showPage2 === false && this.state.showPage3 === false ?
					<div className = "content">
						<div><label>1. Enter your Account Number</label></div>
						<input className = "inputbox" />
						<div claassName = "btnContainer"> <button onClick = {this._onButtonClick}>Continue</button></div>
					</div>
					: this.state.showPage2 === true ?
						<div className = "content">
							<div><label>2. Verify By SMs</label></div>
							<div className="subContent" We've sent a verification coe to you at this mobile number ********99></div>
							<input type = "number" pattern="[0-9]*" className = "inputbox" />
							<div claassName = "btnContainer"> <button onClick = {this._onButtonClick2}>Continue</button></div>
						</div>
						: <div className="successContent">
							<div className="success">
								<div className="successtxt">
									<div className="imgname"></div>
									<div>Activation Complete</div>
								</div>
							</div>
							<div claassName = "btnContainer"> <button >Continue</button></div>
						</div>
			</div>
		);
	}

}

export default Page;