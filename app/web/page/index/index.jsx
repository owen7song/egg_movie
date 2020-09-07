import React, { Component } from 'react';
const classNames = require('classnames');
import './index.less';
import Layout from '../../component/layout/index';
import { queryElementAll, getOffset, queryElement, outerHeight, hasClass } from '../../assets/js/utils/dom';
import move from '../../assets/js/utils/move';

function getEN() {
    var arr = [];
    for (var i = 65; i < 91; i++) {
        arr.push(String.fromCharCode(i));
    }
    return arr;
}

export default class HomeIndex extends Component {

    state = {
        letter: getEN()
    }

    constructor(props) {
        super(props);
    }


    toScrollView = (index) => {
        let nodeList = queryElementAll('.category-container .category-item');
        let currentNode = nodeList[index];
        let windowDistance = getOffset(currentNode);
        let distanceTop = windowDistance.top - outerHeight(currentNode, true) + 35;
        let html = queryElement('html');
        move(html, {
            scrollTop: distanceTop
        }, 1000, 'easeBothStrong');
        console.log(outerHeight(currentNode, true));
    }

    render() {
        let { age, values, letter } = this.state;
        return (
            <Layout title={this.props.title}>
                <div className="main-container">
                    <div className="nav-container">
                        <ul className="nav-list">
                            {letter.map((item, index) => {
                                return <li className="nav-item" onClick={() => {
                                    this.toScrollView(index);
                                }} key={index}>{item}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </Layout >
        )
    }
}