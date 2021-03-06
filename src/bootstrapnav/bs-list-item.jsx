import React from 'react';
import { Link } from 'react-router';
import BSList from './bs-list';

const BSListItem = React.createComponent({
    render(){
        let props = this.props,
            title = props.link.title,
            href = props.link.href || '',
            children = props.link.children;
            
        if(children && children.length){
            return (
                <li className='dropdown'>
                    <Link to={href} className='dropdown-toggle' data-toggle='dropdown'>
                        {title} <span className="caret"></span>
                    </Link>
                    <BSList links={children} config={props.config}/>
                </li>
            );
        }
        return (
            <li>
                <Link to={href}>{title}</Link>
            </li>
        );
    }
});

export default BSListItem;