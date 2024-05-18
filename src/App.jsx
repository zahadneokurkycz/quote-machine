import React from 'react'
import './App.css'
import * as Quote from './assets/quotes';
var q = Quote.getQuote();

class App extends React.Component {
	constructor(props) {
		super (props);
		this.getQuote = this.getQuote.bind(this);
		this.state = {
			text: q.text,
			autor: q.author
		}
	}

	getQuote() {
		var q = Quote.getQuote();
		this.setState({
			text: q.text,
			autor: q.author
		})
	}

	render() {
		return (
			<>
				<div className="card position-absolute top-50 start-50 translate-middle mainbox">
					<div className="card-body" id='quote-box'>
						<figure className='text-center'>
							<blockquote className="blockquote">
								<p id='text'>{this.state.text}</p>
							</blockquote>
							<figcaption className="blockquote-footer">
								Author: <cite title={this.state.autor} id='author'>{this.state.autor}</cite>
							</figcaption>
						</figure>
						<br />
						<div className='position-absolute end-0 pe-3'><button id='new-quote' className='btn btn-outline-success' onClick={() => this.getQuote()}>New Quote</button></div>
						<a className='btn btn-outline-primary' id='tweet-quote'>Tweet</a>
					</div>
				</div>
				<div className="card position-absolute top-50 start-50 translate-middle mobilebox text-center">
					<div className="card-body">
						We are sorry, but we can't fit on this device. Try rotating your device. If this problem persist, try using bigger device like tablet or computer.
					</div>
				</div>
			</>
		)
	}
}

function Themes() {
	return(
		<div className="position-absolute bottom-0 end-0  translate-middle">
			<themer-btn btnClass="btn btn-primary"></themer-btn>
		</div>
	)
}

export {
	App,
	Themes
}