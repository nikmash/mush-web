import 'feed/feed.css'
import React from 'react'
import { Link } from 'react-router'
import { connect } from 'redux/react';
import Feed from 'actions/feed'

@connect(state => {
	return state.feed
})
export default class HomePage extends React.Component {
	static contextTypes = {
		router : React.PropTypes.object
	}
	componentWillMount() {
		this.refresh(this.props)
	}
	componentWillReceiveProps(nextProps) {
		this.refresh(nextProps)
	}
	refresh(props) {
		const { dispatch, route } = props
		if(this.category == route.name)
			return
		this.category = route.name
		dispatch(Feed.getFeed(this.category))
	}
	render() {
		const items = this.props[this.category]
		return (
			<section className='feed content'>
				<ul>
				{
					items.map((item) => {
						return (
							<li>
								<div className='details'>
									<a href={item.link.url} target='_blank' >
										<h1>{item.link.title}</h1>
										<h2>{item.site.name || item.site.domain}</h2>
									</a>
									<ul className='taggers'>
									{
										item.taggers.map((tagger) => {
											return (
												<li>
													<img src={tagger.image || 'http://androidpapers.co/wp-content/uploads/papers.co-vb46-wallpaper-galaxy-s5-one-pattern-1-wallpaper-300x300.jpg'} />
												</li>
											)
										})
									}
									</ul>
								</div>
								{item.link.image ? (
								<a href={item.link.url} target='_blank'>
									<img src={item.link.image} />
								</a>) : false}
							</li>
						)
					})

				}
				</ul>
			</section>
		)
	}
}
