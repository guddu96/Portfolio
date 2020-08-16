import React, { Component } from 'react';

const TITLES = [
    'a React developer',
    'an engineer',
    'a website developer',
    'a dancer',
    'an entrepreneur'
];

class Title extends Component {
    state = { titleIndex : 0, fadeIn : true };

    componentDidMount() {
        console.log('Title componnt has monted.')

        this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2000);

        this.animatedTitles();
    };

    componentWillUnmount() {
        clearTimeout(this.timeout);
    }

    animatedTitles = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1 ) % TITLES.length;

            this.setState({ titleIndex, fadeIn: true });

            this.timeout = setTimeout(() => this.setState({ fadeIn: false}), 2000);

        }, 4000)
    };

    render() {
        const { fadeIn, titleIndex } = this.state;

        const title = TITLES[titleIndex];

        return (

        <p className={fadeIn ? 'title-fade-in' : 'title-fade-out'} >I am {title}</p>

        );
    }
};

export default Title;